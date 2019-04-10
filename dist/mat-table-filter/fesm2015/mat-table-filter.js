import { MatTableDataSource, MatTableModule } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Injectable, Directive, Input, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeepDiffService {
    constructor() { }
    /**
     * @param {?} oldObject
     * @param {?} newObject
     * @return {?}
     */
    isDifferent(oldObject, newObject) {
        if (!oldObject && newObject) {
            return true;
        }
        for (const key in oldObject) {
            if (oldObject.hasOwnProperty(key)) {
                /** @type {?} */
                const oldValue = oldObject[key];
                /** @type {?} */
                const newValue = newObject[key];
                if (typeof oldValue === 'string' || typeof oldValue === 'number') {
                    if (oldValue !== newValue) {
                        return true;
                    }
                }
                else if (typeof oldValue === 'object') {
                    /** @type {?} */
                    const result = this.isDifferent(oldValue, newValue);
                    if (result) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
DeepDiffService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DeepDiffService.ctorParameters = () => [];
/** @nocollapse */ DeepDiffService.ngInjectableDef = defineInjectable({ factory: function DeepDiffService_Factory() { return new DeepDiffService(); }, token: DeepDiffService, providedIn: "root" });

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
class MatTableFilterService {
    constructor() { }
    /**
     * @param {?} exampleEntity
     * @param {?} item
     * @param {?} filterType
     * @param {?} caseSensitive
     * @return {?}
     */
    filterPredicate(exampleEntity, item, filterType, caseSensitive) {
        /** @type {?} */
        const exampleEntityObjectKeys = Object.keys(exampleEntity);
        for (let i = 0; i < exampleEntityObjectKeys.length; i++) {
            /** @type {?} */
            const exampleColumn = exampleEntityObjectKeys[i];
            /** @type {?} */
            const exampleColumnValue = exampleEntity[exampleColumn];
            /** @type {?} */
            const itemColumnValue = item[exampleColumn];
            if (!exampleColumnValue || exampleColumnValue instanceof Array) {
                // if example entity's property is undefined/null/empty then it means the caller wants all the data
                // also if there is an array property we are skipping
                continue;
            }
            if (itemColumnValue) {
                // if example entity has additional columns then search fails
                if (this.isAlphaNumeric(itemColumnValue)) {
                    if (!this.filterPredicateAlphaNumeric(exampleColumnValue, itemColumnValue, filterType, caseSensitive)) {
                        return false;
                    }
                }
                else if (this.isBoolean(itemColumnValue)) {
                    if (itemColumnValue !== exampleColumnValue) {
                        return false;
                    }
                }
                else {
                    if (!this.filterPredicate(exampleColumnValue, itemColumnValue, filterType, caseSensitive)) {
                        // if one of the inner properties returns true, this shouldnt affect the whole item's filtering
                        // however if it returns false then the item must not be in the list
                        return false;
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
     * @param {?} exampleColumnValue
     * @param {?} itemColumnValue
     * @param {?} filterType
     * @param {?} caseSensitive
     * @return {?}
     */
    filterPredicateAlphaNumeric(exampleColumnValue, itemColumnValue, filterType, caseSensitive) {
        /** @type {?} */
        let exampleString = exampleColumnValue.toString();
        /** @type {?} */
        let itemString = itemColumnValue.toString();
        if (!caseSensitive) {
            exampleString = exampleString.toUpperCase();
            itemString = itemString.toUpperCase();
        }
        /** @type {?} */
        let result = true;
        switch (filterType) {
            case MatTableFilter.EQUALS:
                if (exampleColumnValue !== itemColumnValue) {
                    result = false;
                }
                break;
            case MatTableFilter.ANYWHERE:
                if (!itemString.includes(exampleString)) {
                    result = false;
                }
                break;
            case MatTableFilter.STARTS_WITH:
                if (!itemString.startsWith(exampleString)) {
                    result = false;
                }
                break;
            case MatTableFilter.ENDS_WITH:
                if (!itemString.endsWith(exampleString)) {
                    result = false;
                }
                break;
            default:
                break;
        }
        return result;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isAlphaNumeric(value) {
        return typeof value === 'string' || typeof value === 'number';
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isBoolean(value) {
        return typeof value === 'boolean';
    }
}
MatTableFilterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MatTableFilterService.ctorParameters = () => [];
/** @nocollapse */ MatTableFilterService.ngInjectableDef = defineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(); }, token: MatTableFilterService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatTableFilterDirective {
    /**
     * @param {?} filterService
     * @param {?} _deepDiffService
     */
    constructor(filterService, _deepDiffService) {
        this.filterService = filterService;
        this._deepDiffService = _deepDiffService;
        /**
         * in millis
         */
        this.debounceTime = 400;
        this.filterType = MatTableFilter.ANYWHERE;
        this.caseSensitive = false;
        this.initDebounceSubject();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set exampleEntity(value) {
        this._oldExampleEntity = this._exampleEntity;
        this._exampleEntity = value;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._deepDiffService.isDifferent(this._oldExampleEntity, this._exampleEntity)) {
            this._exampleEntitySubject.next();
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
            /** @type {?} */
            const _this = this;
            matDataSource.filterPredicate = (/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                return _this.filterService.filterPredicate(_this._exampleEntity, data, _this.filterType, _this.caseSensitive);
            });
            matDataSource.filter = (/** @type {?} */ (this._exampleEntity));
        }
    }
    /**
     * @private
     * @return {?}
     */
    getMatDataSource() {
        /** @type {?} */
        const matTable = (/** @type {?} */ (this.matTableFilter));
        if (matTable.dataSource && !(matTable.dataSource instanceof MatTableDataSource)) {
            throw new Error('Use MatTableDataSource, example: dataSource = new MatTableDataSource(dataArray)');
        }
        return ((/** @type {?} */ (matTable.dataSource)));
    }
}
MatTableFilterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[matTableFilter]'
            },] }
];
/** @nocollapse */
MatTableFilterDirective.ctorParameters = () => [
    { type: MatTableFilterService },
    { type: DeepDiffService }
];
MatTableFilterDirective.propDecorators = {
    exampleEntity: [{ type: Input }],
    debounceTime: [{ type: Input }],
    filterType: [{ type: Input }],
    matTableFilter: [{ type: Input }],
    caseSensitive: [{ type: Input }]
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

export { MatTableFilterService, MatTableFilter, MatTableFilterModule, DeepDiffService as ɵb, MatTableFilterDirective as ɵa };

//# sourceMappingURL=mat-table-filter.js.map