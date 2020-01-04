import { MatTable, MatTableModule } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { __extends, __values } from 'tslib';
import { Injectable, NgModule, Directive, Input, ViewContainerRef, Host, Self, Optional, defineInjectable, inject } from '@angular/core';
import { isEqual, difference, flatten, isString, cloneDeep, isNil, every, isEmpty, isArray, isBoolean, isNumber } from 'lodash';
import { isFunction } from 'util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var MatTableFilter = {
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
var  /**
 * @abstract
 * @template T
 */
FilterPredicate = /** @class */ (function () {
    function FilterPredicate() {
    }
    /**
     * @param {?} itemPair
     * @param {?} options
     * @return {?}
     */
    FilterPredicate.prototype.executeCondition = /**
     * @param {?} itemPair
     * @param {?} options
     * @return {?}
     */
    function (itemPair, options) {
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
    };
    /**
     * @private
     * @param {?} itemPair
     * @param {?} caseSensitive
     * @return {?}
     */
    FilterPredicate.prototype.handleLetterCasing = /**
     * @private
     * @param {?} itemPair
     * @param {?} caseSensitive
     * @return {?}
     */
    function (itemPair, caseSensitive) {
        if (!caseSensitive) {
            this.transformAllLowerCase(itemPair);
        }
    };
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    FilterPredicate.prototype.transformAllLowerCase = /**
     * @private
     * @param {?} object
     * @return {?}
     */
    function (object) {
        // tslint:disable-next-line:forin
        for (var key in object) {
            /** @type {?} */
            var value = object[key];
            if (isString(value)) {
                object[key] = value.toLowerCase();
            }
            else {
                this.transformAllLowerCase(value);
            }
        }
    };
    return FilterPredicate;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ArrayPredicateService = /** @class */ (function (_super) {
    __extends(ArrayPredicateService, _super);
    function ArrayPredicateService() {
        return _super.call(this) || this;
    }
    /**
     * @private
     * @return {?}
     */
    ArrayPredicateService.warn = /**
     * @private
     * @return {?}
     */
    function () {
        console.warn(ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING);
        console.warn(ArrayPredicateService.SUGGESTION_WARNING);
    };
    /**
     * @param {?} itemPair
     * @return {?}
     */
    ArrayPredicateService.prototype.equals = /**
     * @param {?} itemPair
     * @return {?}
     */
    function (itemPair) {
        return isEqual(itemPair.example.sort(), itemPair.item.sort());
    };
    /**
     * @param {?} itemPair
     * @return {?}
     */
    ArrayPredicateService.prototype.anywhere = /**
     * @param {?} itemPair
     * @return {?}
     */
    function (itemPair) {
        return this.isSubset(itemPair.example, itemPair.item);
    };
    /**
     * @param {?} itemPair
     * @return {?}
     */
    ArrayPredicateService.prototype.startsWith = /**
     * @param {?} itemPair
     * @return {?}
     */
    function (itemPair) {
        ArrayPredicateService.warn();
        return this.anywhere(itemPair);
    };
    /**
     * @param {?} itemPair
     * @return {?}
     */
    ArrayPredicateService.prototype.endsWith = /**
     * @param {?} itemPair
     * @return {?}
     */
    function (itemPair) {
        ArrayPredicateService.warn();
        return this.anywhere(itemPair);
    };
    /**
     * @private
     * @param {?} example
     * @param {?} item
     * @return {?}
     */
    ArrayPredicateService.prototype.isSubset = /**
     * @private
     * @param {?} example
     * @param {?} item
     * @return {?}
     */
    function (example, item) {
        return !difference(flatten(example), flatten(item)).length;
    };
    // tslint:disable-next-line:max-line-length
    ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING = 'This filterType is unsupported for array filtering. FilterType.ANYWHERE is executed instead!';
    ArrayPredicateService.SUGGESTION_WARNING = 'You can set a custom predicate for the array property through PropertyOptions!';
    ArrayPredicateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ArrayPredicateService.ctorParameters = function () { return []; };
    /** @nocollapse */ ArrayPredicateService.ngInjectableDef = defineInjectable({ factory: function ArrayPredicateService_Factory() { return new ArrayPredicateService(); }, token: ArrayPredicateService, providedIn: "root" });
    return ArrayPredicateService;
}(FilterPredicate));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlphaNumericPredicateService = /** @class */ (function (_super) {
    __extends(AlphaNumericPredicateService, _super);
    function AlphaNumericPredicateService() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    AlphaNumericPredicateService.prototype.equals = /**
     * @param {?} itemPair
     * @return {?}
     */
    function (itemPair) {
        return itemPair.example === itemPair.item;
    };
    /**
     * @param {?} itemPair
     * @return {?}
     */
    AlphaNumericPredicateService.prototype.anywhere = /**
     * @param {?} itemPair
     * @return {?}
     */
    function (itemPair) {
        return itemPair.item.includes(itemPair.example);
    };
    /**
     * @param {?} itemPair
     * @return {?}
     */
    AlphaNumericPredicateService.prototype.startsWith = /**
     * @param {?} itemPair
     * @return {?}
     */
    function (itemPair) {
        return itemPair.item.startsWith(itemPair.example);
    };
    /**
     * @param {?} itemPair
     * @return {?}
     */
    AlphaNumericPredicateService.prototype.endsWith = /**
     * @param {?} itemPair
     * @return {?}
     */
    function (itemPair) {
        return itemPair.item.endsWith(itemPair.example);
    };
    AlphaNumericPredicateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AlphaNumericPredicateService.ctorParameters = function () { return []; };
    /** @nocollapse */ AlphaNumericPredicateService.ngInjectableDef = defineInjectable({ factory: function AlphaNumericPredicateService_Factory() { return new AlphaNumericPredicateService(); }, token: AlphaNumericPredicateService, providedIn: "root" });
    return AlphaNumericPredicateService;
}(FilterPredicate));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatTableFilterService = /** @class */ (function () {
    function MatTableFilterService(_alphaNumericService, _arrayService) {
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
    MatTableFilterService.prototype.filterPredicate = /**
     * @param {?} itemPair
     * @param {?} propertyOptions
     * @param {?} commonOptions
     * @param {?=} propertyName
     * @return {?}
     */
    function (itemPair, propertyOptions, commonOptions, propertyName) {
        var e_1, _a;
        // tslint:disable-next-line:forin
        /** @type {?} */
        var exampleKeys = Object.keys(itemPair.example);
        try {
            for (var exampleKeys_1 = __values(exampleKeys), exampleKeys_1_1 = exampleKeys_1.next(); !exampleKeys_1_1.done; exampleKeys_1_1 = exampleKeys_1.next()) {
                var key = exampleKeys_1_1.value;
                /** @type {?} */
                var exampleValue = cloneDeep(itemPair.example[key]);
                if (isNil(exampleValue) || every(exampleValue, isEmpty) && typeof exampleValue !== 'boolean') {
                    // if example entity's property is undefined/null/empty then it means the caller wants all the data
                    continue;
                }
                if (itemPair.item.hasOwnProperty(key)) {
                    // if example entity has additional columns then search fails
                    /** @type {?} */
                    var itemValue = cloneDeep(itemPair.item[key]);
                    /** @type {?} */
                    var nextPropertyName = this.getNextPropertyName(propertyName, key);
                    /** @type {?} */
                    var options = this.finalizeOptionsForProperty(commonOptions, propertyOptions, nextPropertyName);
                    if (isFunction(options)) { // if user defined predicate is present for property
                        // if user defined predicate is present for property
                        /** @type {?} */
                        var customPredicate = (/** @type {?} */ (options));
                        if (!customPredicate(itemValue)) {
                            return false;
                        }
                    }
                    else {
                        /** @type {?} */
                        var columnOptions = (/** @type {?} */ (options));
                        if (this.isAlphaNumeric(itemValue)) {
                            /** @type {?} */
                            var valuePair = { item: itemValue.toString(), example: exampleValue };
                            if (!this._alphaNumericService.executeCondition(valuePair, columnOptions)) {
                                return false;
                            }
                        }
                        else if (isArray(itemValue)) {
                            /** @type {?} */
                            var valuePair = { item: itemValue, example: exampleValue };
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
                            var valuePair = { item: itemValue, example: exampleValue };
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (exampleKeys_1_1 && !exampleKeys_1_1.done && (_a = exampleKeys_1.return)) _a.call(exampleKeys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return true;
    };
    /**
     * @private
     * @param {?} commonOptions
     * @param {?} propertyOptions
     * @param {?} propertyName
     * @return {?}
     */
    MatTableFilterService.prototype.finalizeOptionsForProperty = /**
     * @private
     * @param {?} commonOptions
     * @param {?} propertyOptions
     * @param {?} propertyName
     * @return {?}
     */
    function (commonOptions, propertyOptions, propertyName) {
        if (propertyOptions && propertyOptions.hasOwnProperty(propertyName)) {
            return propertyOptions[propertyName];
        }
        else {
            return commonOptions;
        }
    };
    /**
     * @private
     * @param {?} propertyName
     * @param {?} key
     * @return {?}
     */
    MatTableFilterService.prototype.getNextPropertyName = /**
     * @private
     * @param {?} propertyName
     * @param {?} key
     * @return {?}
     */
    function (propertyName, key) {
        return propertyName ? (propertyName + '.' + key) : key;
    };
    /**
     * @param {?} oldEntity
     * @param {?} newEntity
     * @return {?}
     */
    MatTableFilterService.prototype.isChanged = /**
     * @param {?} oldEntity
     * @param {?} newEntity
     * @return {?}
     */
    function (oldEntity, newEntity) {
        return !isEqual(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
    };
    /**
     * @param {?} object
     * @return {?}
     */
    MatTableFilterService.prototype.toPlainJson = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        if (object) {
            return JSON.parse(JSON.stringify(object));
        }
        else {
            return undefined;
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MatTableFilterService.prototype.isAlphaNumeric = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isString(value) || isNumber(value);
    };
    MatTableFilterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MatTableFilterService.ctorParameters = function () { return [
        { type: AlphaNumericPredicateService },
        { type: ArrayPredicateService }
    ]; };
    /** @nocollapse */ MatTableFilterService.ngInjectableDef = defineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(inject(AlphaNumericPredicateService), inject(ArrayPredicateService)); }, token: MatTableFilterService, providedIn: "root" });
    return MatTableFilterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatTableFilterDirective = /** @class */ (function () {
    function MatTableFilterDirective(_filterService, _injectedTable, _viewContainerRef) {
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
    MatTableFilterDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._filterService.isChanged(this._oldExampleEntity, this.exampleEntity)) {
            this._oldExampleEntity = this._filterService.toPlainJson(this.exampleEntity);
            this._exampleEntitySubject.next(undefined);
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatTableFilterDirective.prototype.initCdkTable = /**
     * @private
     * @return {?}
     */
    function () {
        // tslint:disable-next-line:no-string-literal
        /** @type {?} */
        var table = this._viewContainerRef['_data'].componentView.component;
        if (table) {
            this._table = table;
        }
        else if (this._injectedTable) {
            this._table = this._injectedTable;
        }
        else {
            throw new Error('Unsupported Angular version!');
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatTableFilterDirective.prototype.initDebounceSubject = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._exampleEntitySubject = new BehaviorSubject(null);
        this._exampleEntitySubject.pipe(debounceTime(this.debounceTime))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.updateFilterPredicate();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    MatTableFilterDirective.prototype.updateFilterPredicate = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var matDataSource = this.getMatDataSource();
        if (matDataSource) {
            matDataSource.filterPredicate = this.getFilterPredicate();
            matDataSource.filter = (/** @type {?} */ (this.exampleEntity));
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatTableFilterDirective.prototype.getFilterPredicate = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.customPredicate) {
            return this.customPredicate;
        }
        else {
            return (/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return _this._filterService.filterPredicate({ example: _this.exampleEntity, item: item }, _this.propertyOptions, { filterType: _this.filterType, caseSensitive: _this.caseSensitive });
            });
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatTableFilterDirective.prototype.getMatDataSource = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var matTable = (/** @type {?} */ (this._table));
        return ((/** @type {?} */ (matTable.dataSource)));
    };
    MatTableFilterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[matTableFilter]',
                    exportAs: 'matTableFilter'
                },] }
    ];
    /** @nocollapse */
    MatTableFilterDirective.ctorParameters = function () { return [
        { type: MatTableFilterService },
        { type: MatTable, decorators: [{ type: Host }, { type: Self }, { type: Optional }] },
        { type: ViewContainerRef }
    ]; };
    MatTableFilterDirective.propDecorators = {
        exampleEntity: [{ type: Input }],
        debounceTime: [{ type: Input }],
        filterType: [{ type: Input }],
        caseSensitive: [{ type: Input }],
        customPredicate: [{ type: Input }],
        propertyOptions: [{ type: Input }]
    };
    return MatTableFilterDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatTableFilterModule = /** @class */ (function () {
    function MatTableFilterModule() {
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
    return MatTableFilterModule;
}());

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