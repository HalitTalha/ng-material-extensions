import { MatTable, MatTableModule } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Injectable, NgModule, Directive, Input, ViewContainerRef, Host, Self, Optional, defineInjectable, inject } from '@angular/core';
import { isEqual, difference, flatten, isString, cloneDeep, isNil, every, isEmpty, isArray, isBoolean, isNumber } from 'lodash';
import { isFunction } from 'util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const MatTableFilter = {
    EQUALS: 'EQUALS',
    ANYWHERE: 'ANYWHERE',
    STARTS_WITH: 'STARTS_WITH',
    ENDS_WITH: 'ENDS_WITH',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class FilterPredicate {
    /**
     * @param {?} itemPair
     * @param {?} options
     * @return {?}
     */
    executeCondition(itemPair, options) {
        this.handleLetterCasing(itemPair, options.caseSensitive);
        switch (options.filterType) {
            case MatTableFilter.EQUALS:
                return this.equals(itemPair);
            case MatTableFilter.ANYWHERE:
                return this.anywhere(itemPair);
            case MatTableFilter.STARTS_WITH:
                return this.startsWith(itemPair);
            case MatTableFilter.ENDS_WITH:
                return this.endsWith(itemPair);
            default:
                return true;
        }
    }
    /**
     * @private
     * @param {?} itemPair
     * @param {?} caseSensitive
     * @return {?}
     */
    handleLetterCasing(itemPair, caseSensitive) {
        if (!caseSensitive) {
            this.transformAllLowerCase(itemPair);
        }
    }
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    transformAllLowerCase(object) {
        // tslint:disable-next-line:forin
        for (const key in object) {
            /** @type {?} */
            const value = object[key];
            if (isString(value)) {
                object[key] = value.toLowerCase();
            }
            else {
                this.transformAllLowerCase(value);
            }
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ArrayPredicateService extends FilterPredicate {
    constructor() {
        super();
    }
    /**
     * @private
     * @return {?}
     */
    static warn() {
        console.warn(ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING);
        console.warn(ArrayPredicateService.SUGGESTION_WARNING);
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    equals(itemPair) {
        return isEqual(itemPair.example.sort(), itemPair.item.sort());
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    anywhere(itemPair) {
        return this.isSubset(itemPair.example, itemPair.item);
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    startsWith(itemPair) {
        ArrayPredicateService.warn();
        return this.anywhere(itemPair);
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    endsWith(itemPair) {
        ArrayPredicateService.warn();
        return this.anywhere(itemPair);
    }
    /**
     * @private
     * @param {?} example
     * @param {?} item
     * @return {?}
     */
    isSubset(example, item) {
        return !difference(flatten(example), flatten(item)).length;
    }
}
// tslint:disable-next-line:max-line-length
ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING = 'This filterType is unsupported for array filtering. FilterType.ANYWHERE is executed instead!';
ArrayPredicateService.SUGGESTION_WARNING = 'You can set a custom predicate for the array property through PropertyOptions!';
ArrayPredicateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ArrayPredicateService.ctorParameters = () => [];
/** @nocollapse */ ArrayPredicateService.ngInjectableDef = defineInjectable({ factory: function ArrayPredicateService_Factory() { return new ArrayPredicateService(); }, token: ArrayPredicateService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlphaNumericPredicateService extends FilterPredicate {
    constructor() {
        super();
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    equals(itemPair) {
        return itemPair.example === itemPair.item;
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    anywhere(itemPair) {
        return itemPair.item.includes(itemPair.example);
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    startsWith(itemPair) {
        return itemPair.item.startsWith(itemPair.example);
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    endsWith(itemPair) {
        return itemPair.item.endsWith(itemPair.example);
    }
}
AlphaNumericPredicateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AlphaNumericPredicateService.ctorParameters = () => [];
/** @nocollapse */ AlphaNumericPredicateService.ngInjectableDef = defineInjectable({ factory: function AlphaNumericPredicateService_Factory() { return new AlphaNumericPredicateService(); }, token: AlphaNumericPredicateService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatTableFilterService {
    /**
     * @param {?} _alphaNumericService
     * @param {?} _arrayService
     */
    constructor(_alphaNumericService, _arrayService) {
        this._alphaNumericService = _alphaNumericService;
        this._arrayService = _arrayService;
    }
    /**
     * @param {?} itemPair
     * @param {?} propertyOptions
     * @param {?} commonOptions
     * @param {?=} propertyName
     * @return {?}
     */
    filterPredicate(itemPair, propertyOptions, commonOptions, propertyName) {
        // tslint:disable-next-line:forin
        /** @type {?} */
        const exampleKeys = Object.keys(itemPair.example);
        for (const key of exampleKeys) {
            /** @type {?} */
            const exampleValue = cloneDeep(itemPair.example[key]);
            if (isNil(exampleValue) || every(exampleValue, isEmpty) && typeof exampleValue !== 'boolean') {
                // if example entity's property is undefined/null/empty then it means the caller wants all the data
                continue;
            }
            if (itemPair.item.hasOwnProperty(key)) {
                // if example entity has additional columns then search fails
                /** @type {?} */
                const itemValue = cloneDeep(itemPair.item[key]);
                /** @type {?} */
                const nextPropertyName = this.getNextPropertyName(propertyName, key);
                /** @type {?} */
                const options = this.finalizeOptionsForProperty(commonOptions, propertyOptions, nextPropertyName);
                if (isFunction(options)) { // if user defined predicate is present for property
                    // if user defined predicate is present for property
                    /** @type {?} */
                    const customPredicate = (/** @type {?} */ (options));
                    if (!customPredicate(itemValue)) {
                        return false;
                    }
                }
                else {
                    /** @type {?} */
                    const columnOptions = (/** @type {?} */ (options));
                    if (this.isAlphaNumeric(itemValue)) {
                        /** @type {?} */
                        const valuePair = { item: itemValue.toString(), example: exampleValue };
                        if (!this._alphaNumericService.executeCondition(valuePair, columnOptions)) {
                            return false;
                        }
                    }
                    else if (isArray(itemValue)) {
                        /** @type {?} */
                        const valuePair = { item: itemValue, example: exampleValue };
                        if (!this._arrayService.executeCondition(valuePair, columnOptions)) {
                            return false;
                        }
                    }
                    else if (isBoolean(itemValue)) {
                        if (itemValue !== exampleValue) {
                            return false;
                        }
                    }
                    else {
                        /** @type {?} */
                        const valuePair = { item: itemValue, example: exampleValue };
                        if (!this.filterPredicate(valuePair, propertyOptions, options, nextPropertyName)) {
                            // if one of the inner properties returns true, this shouldnt affect the whole item's filtering
                            // however if it returns false then the item must not be in the list
                            return false;
                        }
                    }
                }
            }
            else {
                return false;
            }
        }
        return true;
    }
    /**
     * @private
     * @param {?} commonOptions
     * @param {?} propertyOptions
     * @param {?} propertyName
     * @return {?}
     */
    finalizeOptionsForProperty(commonOptions, propertyOptions, propertyName) {
        if (propertyOptions && propertyOptions.hasOwnProperty(propertyName)) {
            return propertyOptions[propertyName];
        }
        else {
            return commonOptions;
        }
    }
    /**
     * @private
     * @param {?} propertyName
     * @param {?} key
     * @return {?}
     */
    getNextPropertyName(propertyName, key) {
        return propertyName ? (propertyName + '.' + key) : key;
    }
    /**
     * @param {?} oldEntity
     * @param {?} newEntity
     * @return {?}
     */
    isChanged(oldEntity, newEntity) {
        return !isEqual(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
    }
    /**
     * @param {?} object
     * @return {?}
     */
    toPlainJson(object) {
        if (object) {
            return JSON.parse(JSON.stringify(object));
        }
        else {
            return undefined;
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isAlphaNumeric(value) {
        return isString(value) || isNumber(value);
    }
}
MatTableFilterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MatTableFilterService.ctorParameters = () => [
    { type: AlphaNumericPredicateService },
    { type: ArrayPredicateService }
];
/** @nocollapse */ MatTableFilterService.ngInjectableDef = defineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(inject(AlphaNumericPredicateService), inject(ArrayPredicateService)); }, token: MatTableFilterService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatTableFilterDirective {
    /**
     * @param {?} _filterService
     * @param {?} _injectedTable
     * @param {?} _viewContainerRef
     */
    constructor(_filterService, _injectedTable, _viewContainerRef) {
        this._filterService = _filterService;
        this._injectedTable = _injectedTable;
        this._viewContainerRef = _viewContainerRef;
        this.debounceTime = 400;
        this.filterType = MatTableFilter.ANYWHERE;
        this.caseSensitive = false;
        this.initCdkTable();
        this.initDebounceSubject();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._filterService.isChanged(this._oldExampleEntity, this.exampleEntity)) {
            this._oldExampleEntity = this._filterService.toPlainJson(this.exampleEntity);
            this._exampleEntitySubject.next(undefined);
        }
    }
    /**
     * @private
     * @return {?}
     */
    initCdkTable() {
        // tslint:disable-next-line:no-string-literal
        /** @type {?} */
        const table = this._viewContainerRef['_data'].componentView.component;
        if (table) {
            this._table = table;
        }
        else if (this._injectedTable) {
            this._table = this._injectedTable;
        }
        else {
            throw new Error('Unsupported Angular version!');
        }
    }
    /**
     * @private
     * @return {?}
     */
    initDebounceSubject() {
        this._exampleEntitySubject = new BehaviorSubject(null);
        this._exampleEntitySubject.pipe(debounceTime(this.debounceTime))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this.updateFilterPredicate();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    updateFilterPredicate() {
        /** @type {?} */
        const matDataSource = this.getMatDataSource();
        if (matDataSource) {
            matDataSource.filterPredicate = this.getFilterPredicate();
            matDataSource.filter = (/** @type {?} */ (this.exampleEntity));
        }
    }
    /**
     * @private
     * @return {?}
     */
    getFilterPredicate() {
        if (this.customPredicate) {
            return this.customPredicate;
        }
        else {
            return (/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return this._filterService.filterPredicate({ example: this.exampleEntity, item }, this.propertyOptions, { filterType: this.filterType, caseSensitive: this.caseSensitive });
            });
        }
    }
    /**
     * @private
     * @return {?}
     */
    getMatDataSource() {
        /** @type {?} */
        const matTable = (/** @type {?} */ (this._table));
        return ((/** @type {?} */ (matTable.dataSource)));
    }
}
MatTableFilterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[matTableFilter]',
                exportAs: 'matTableFilter'
            },] }
];
/** @nocollapse */
MatTableFilterDirective.ctorParameters = () => [
    { type: MatTableFilterService },
    { type: MatTable, decorators: [{ type: Host }, { type: Self }, { type: Optional }] },
    { type: ViewContainerRef }
];
MatTableFilterDirective.propDecorators = {
    exampleEntity: [{ type: Input }],
    debounceTime: [{ type: Input }],
    filterType: [{ type: Input }],
    caseSensitive: [{ type: Input }],
    customPredicate: [{ type: Input }],
    propertyOptions: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatTableFilterModule {
}
MatTableFilterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MatTableFilterDirective],
                imports: [
                    MatTableModule
                ],
                exports: [MatTableFilterDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MatTableFilterService, MatTableFilter, MatTableFilterDirective, MatTableFilterModule, AlphaNumericPredicateService as ɵa, ArrayPredicateService as ɵc, FilterPredicate as ɵb };

//# sourceMappingURL=mat-table-filter.js.map