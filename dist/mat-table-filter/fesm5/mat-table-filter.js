import { Injectable, ɵɵdefineInjectable, ɵɵinject, Directive, Host, Self, Optional, ViewContainerRef, Input, NgModule } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { __extends, __values } from 'tslib';
import { isEqual, difference, flatten, isNil, every, isEmpty, isArray, isBoolean, isString, isNumber } from 'lodash';
import { isFunction } from 'util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {?} filterType
     * @return {?}
     */
    FilterPredicate.prototype.executeCondition = /**
     * @param {?} itemPair
     * @param {?} filterType
     * @return {?}
     */
    function (itemPair, filterType) {
        switch (filterType) {
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
    return FilterPredicate;
}());
if (false) {
    /**
     * @abstract
     * @param {?} itemPair
     * @return {?}
     */
    FilterPredicate.prototype.equals = function (itemPair) { };
    /**
     * @abstract
     * @param {?} itemPair
     * @return {?}
     */
    FilterPredicate.prototype.anywhere = function (itemPair) { };
    /**
     * @abstract
     * @param {?} itemPair
     * @return {?}
     */
    FilterPredicate.prototype.startsWith = function (itemPair) { };
    /**
     * @abstract
     * @param {?} itemPair
     * @return {?}
     */
    FilterPredicate.prototype.endsWith = function (itemPair) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ArrayPredicateService = /** @class */ (function (_super) {
    __extends(ArrayPredicateService, _super);
    function ArrayPredicateService() {
        return _super.call(this) || this;
    }
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
        throw new Error('Unsupported Operation');
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
        throw new Error('Unsupported Operation');
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
    ArrayPredicateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ArrayPredicateService.ctorParameters = function () { return []; };
    /** @nocollapse */ ArrayPredicateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ArrayPredicateService_Factory() { return new ArrayPredicateService(); }, token: ArrayPredicateService, providedIn: "root" });
    return ArrayPredicateService;
}(FilterPredicate));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /** @nocollapse */ AlphaNumericPredicateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AlphaNumericPredicateService_Factory() { return new AlphaNumericPredicateService(); }, token: AlphaNumericPredicateService, providedIn: "root" });
    return AlphaNumericPredicateService;
}(FilterPredicate));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatTableFilterService = /** @class */ (function () {
    function MatTableFilterService(_alphaNumericService, _arrayService) {
        this._alphaNumericService = _alphaNumericService;
        this._arrayService = _arrayService;
    }
    /**
     * @param {?} itemPair
     * @param {?} allOptions
     * @param {?} commonOptions
     * @param {?=} propertyName
     * @return {?}
     */
    MatTableFilterService.prototype.filterPredicate = /**
     * @param {?} itemPair
     * @param {?} allOptions
     * @param {?} commonOptions
     * @param {?=} propertyName
     * @return {?}
     */
    function (itemPair, allOptions, commonOptions, propertyName) {
        var e_1, _a;
        // tslint:disable-next-line:forin
        /** @type {?} */
        var exampleKeys = Object.keys(itemPair.example);
        try {
            for (var exampleKeys_1 = __values(exampleKeys), exampleKeys_1_1 = exampleKeys_1.next(); !exampleKeys_1_1.done; exampleKeys_1_1 = exampleKeys_1.next()) {
                var key = exampleKeys_1_1.value;
                /** @type {?} */
                var exampleColumnValue = itemPair.example[key];
                if (isNil(exampleColumnValue) || every(exampleColumnValue, isEmpty) && typeof exampleColumnValue !== 'boolean') {
                    // if example entity's property is undefined/null/empty then it means the caller wants all the data
                    continue;
                }
                if (itemPair.item.hasOwnProperty(key)) {
                    // if example entity has additional columns then search fails
                    /** @type {?} */
                    var itemColumnValue = itemPair.item[key];
                    /** @type {?} */
                    var nextPropertyName = this.getNextPropertyName(propertyName, key);
                    /** @type {?} */
                    var options = this.getOptionsForColumn(commonOptions, allOptions, nextPropertyName);
                    if (isFunction(options)) { // if user defined predicate is present for property
                        // if user defined predicate is present for property
                        /** @type {?} */
                        var customPredicate = (/** @type {?} */ (options));
                        if (!customPredicate(itemColumnValue)) {
                            return false;
                        }
                    }
                    else {
                        /** @type {?} */
                        var valuePair = { item: itemColumnValue, example: exampleColumnValue };
                        /** @type {?} */
                        var columnOptions = (/** @type {?} */ (options));
                        if (this.isAlphaNumeric(itemColumnValue)) {
                            this.handleLetterCasing(valuePair, columnOptions.caseSensitive);
                            if (!this._alphaNumericService.executeCondition(valuePair, columnOptions.filterType)) {
                                return false;
                            }
                        }
                        else if (isArray(itemColumnValue)) {
                            if (!this._arrayService.executeCondition(valuePair, columnOptions.filterType)) {
                                return false;
                            }
                        }
                        else if (isBoolean(itemColumnValue)) {
                            if (itemColumnValue !== exampleColumnValue) {
                                return false;
                            }
                        }
                        else {
                            if (!this.filterPredicate(valuePair, allOptions, options, nextPropertyName)) {
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
     * @param {?} itemPair
     * @param {?} caseSensitive
     * @return {?}
     */
    MatTableFilterService.prototype.handleLetterCasing = /**
     * @private
     * @param {?} itemPair
     * @param {?} caseSensitive
     * @return {?}
     */
    function (itemPair, caseSensitive) {
        if (!caseSensitive) {
            itemPair.example = itemPair.example.toUpperCase();
            itemPair.item = itemPair.item.toUpperCase();
        }
    };
    /**
     * @private
     * @param {?} commonOptions
     * @param {?} columnOptions
     * @param {?=} propertyName
     * @return {?}
     */
    MatTableFilterService.prototype.getOptionsForColumn = /**
     * @private
     * @param {?} commonOptions
     * @param {?} columnOptions
     * @param {?=} propertyName
     * @return {?}
     */
    function (commonOptions, columnOptions, propertyName) {
        if (columnOptions && columnOptions.hasOwnProperty(propertyName)) {
            return columnOptions[propertyName];
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
    /** @nocollapse */ MatTableFilterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(ɵɵinject(AlphaNumericPredicateService), ɵɵinject(ArrayPredicateService)); }, token: MatTableFilterService, providedIn: "root" });
    return MatTableFilterService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatTableFilterService.prototype._alphaNumericService;
    /**
     * @type {?}
     * @private
     */
    MatTableFilterService.prototype._arrayService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this._exampleEntitySubject.next();
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
                return _this._filterService.filterPredicate({ example: _this.exampleEntity, item: item }, _this.columnOptions, { filterType: _this.filterType, caseSensitive: _this.caseSensitive });
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
        columnOptions: [{ type: Input }]
    };
    return MatTableFilterDirective;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatTableFilterDirective.prototype._oldExampleEntity;
    /** @type {?} */
    MatTableFilterDirective.prototype.exampleEntity;
    /**
     * in millis
     * @type {?}
     * @private
     */
    MatTableFilterDirective.prototype._table;
    /** @type {?} */
    MatTableFilterDirective.prototype.debounceTime;
    /** @type {?} */
    MatTableFilterDirective.prototype.filterType;
    /** @type {?} */
    MatTableFilterDirective.prototype.caseSensitive;
    /** @type {?} */
    MatTableFilterDirective.prototype.customPredicate;
    /** @type {?} */
    MatTableFilterDirective.prototype.columnOptions;
    /**
     * @type {?}
     * @private
     */
    MatTableFilterDirective.prototype._exampleEntitySubject;
    /**
     * @type {?}
     * @private
     */
    MatTableFilterDirective.prototype._filterService;
    /**
     * @type {?}
     * @private
     */
    MatTableFilterDirective.prototype._injectedTable;
    /**
     * @type {?}
     * @private
     */
    MatTableFilterDirective.prototype._viewContainerRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MatTableFilter, MatTableFilterModule, MatTableFilterService, MatTableFilterDirective as ɵa, AlphaNumericPredicateService as ɵb, FilterPredicate as ɵc, ArrayPredicateService as ɵd };
//# sourceMappingURL=mat-table-filter.js.map
