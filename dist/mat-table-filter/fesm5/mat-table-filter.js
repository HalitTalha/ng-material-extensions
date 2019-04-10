import { MatTableDataSource, MatTableModule } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Injectable, Directive, Input, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DeepDiffService = /** @class */ (function () {
    function DeepDiffService() {
    }
    /**
     * @param {?} oldObject
     * @param {?} newObject
     * @return {?}
     */
    DeepDiffService.prototype.isDifferent = /**
     * @param {?} oldObject
     * @param {?} newObject
     * @return {?}
     */
    function (oldObject, newObject) {
        if (!oldObject && newObject) {
            return true;
        }
        for (var key in oldObject) {
            if (oldObject.hasOwnProperty(key)) {
                /** @type {?} */
                var oldValue = oldObject[key];
                /** @type {?} */
                var newValue = newObject[key];
                if (typeof oldValue === 'string' || typeof oldValue === 'number') {
                    if (oldValue !== newValue) {
                        return true;
                    }
                }
                else if (typeof oldValue === 'object') {
                    /** @type {?} */
                    var result = this.isDifferent(oldValue, newValue);
                    if (result) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    DeepDiffService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DeepDiffService.ctorParameters = function () { return []; };
    /** @nocollapse */ DeepDiffService.ngInjectableDef = defineInjectable({ factory: function DeepDiffService_Factory() { return new DeepDiffService(); }, token: DeepDiffService, providedIn: "root" });
    return DeepDiffService;
}());

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
var MatTableFilterService = /** @class */ (function () {
    function MatTableFilterService() {
    }
    /**
     * @param {?} exampleEntity
     * @param {?} item
     * @param {?} filterType
     * @param {?} caseSensitive
     * @return {?}
     */
    MatTableFilterService.prototype.filterPredicate = /**
     * @param {?} exampleEntity
     * @param {?} item
     * @param {?} filterType
     * @param {?} caseSensitive
     * @return {?}
     */
    function (exampleEntity, item, filterType, caseSensitive) {
        /** @type {?} */
        var exampleEntityObjectKeys = Object.keys(exampleEntity);
        for (var i = 0; i < exampleEntityObjectKeys.length; i++) {
            /** @type {?} */
            var exampleColumn = exampleEntityObjectKeys[i];
            /** @type {?} */
            var exampleColumnValue = exampleEntity[exampleColumn];
            /** @type {?} */
            var itemColumnValue = item[exampleColumn];
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
    };
    /**
     * @private
     * @param {?} exampleColumnValue
     * @param {?} itemColumnValue
     * @param {?} filterType
     * @param {?} caseSensitive
     * @return {?}
     */
    MatTableFilterService.prototype.filterPredicateAlphaNumeric = /**
     * @private
     * @param {?} exampleColumnValue
     * @param {?} itemColumnValue
     * @param {?} filterType
     * @param {?} caseSensitive
     * @return {?}
     */
    function (exampleColumnValue, itemColumnValue, filterType, caseSensitive) {
        /** @type {?} */
        var exampleString = exampleColumnValue.toString();
        /** @type {?} */
        var itemString = itemColumnValue.toString();
        if (!caseSensitive) {
            exampleString = exampleString.toUpperCase();
            itemString = itemString.toUpperCase();
        }
        /** @type {?} */
        var result = true;
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
        return typeof value === 'string' || typeof value === 'number';
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MatTableFilterService.prototype.isBoolean = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'boolean';
    };
    MatTableFilterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MatTableFilterService.ctorParameters = function () { return []; };
    /** @nocollapse */ MatTableFilterService.ngInjectableDef = defineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(); }, token: MatTableFilterService, providedIn: "root" });
    return MatTableFilterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatTableFilterDirective = /** @class */ (function () {
    function MatTableFilterDirective(filterService, _deepDiffService) {
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
    Object.defineProperty(MatTableFilterDirective.prototype, "exampleEntity", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._oldExampleEntity = this._exampleEntity;
            this._exampleEntity = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatTableFilterDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._deepDiffService.isDifferent(this._oldExampleEntity, this._exampleEntity)) {
            this._exampleEntitySubject.next();
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
        var _this_1 = this;
        this._exampleEntitySubject = new BehaviorSubject(null);
        this._exampleEntitySubject.pipe(debounceTime(this.debounceTime))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this_1.updateFilterPredicate();
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
            /** @type {?} */
            var _this_2 = this;
            matDataSource.filterPredicate = (/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return _this_2.filterService.filterPredicate(_this_2._exampleEntity, data, _this_2.filterType, _this_2.caseSensitive);
            });
            matDataSource.filter = (/** @type {?} */ (this._exampleEntity));
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
        var matTable = (/** @type {?} */ (this.matTableFilter));
        if (matTable.dataSource && !(matTable.dataSource instanceof MatTableDataSource)) {
            throw new Error('Use MatTableDataSource, example: dataSource = new MatTableDataSource(dataArray)');
        }
        return ((/** @type {?} */ (matTable.dataSource)));
    };
    MatTableFilterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[matTableFilter]'
                },] }
    ];
    /** @nocollapse */
    MatTableFilterDirective.ctorParameters = function () { return [
        { type: MatTableFilterService },
        { type: DeepDiffService }
    ]; };
    MatTableFilterDirective.propDecorators = {
        exampleEntity: [{ type: Input }],
        debounceTime: [{ type: Input }],
        filterType: [{ type: Input }],
        matTableFilter: [{ type: Input }],
        caseSensitive: [{ type: Input }]
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

export { MatTableFilterService, MatTableFilter, MatTableFilterModule, DeepDiffService as ɵb, MatTableFilterDirective as ɵa };

//# sourceMappingURL=mat-table-filter.js.map