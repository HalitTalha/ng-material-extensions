(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material'), require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('lodash'), require('util')) :
    typeof define === 'function' && define.amd ? define('mat-table-filter', ['exports', '@angular/material', 'rxjs', 'rxjs/operators', '@angular/core', 'lodash', 'util'], factory) :
    (factory((global['mat-table-filter'] = {}),global.ng.material,global.rxjs,global.rxjs.operators,global.ng.core,global.LODASH,global.util));
}(this, (function (exports,material,rxjs,operators,i0,LODASH,util) { 'use strict';

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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     * @template T
     */
    var /**
     * @abstract
     * @template T
     */ FilterPredicate = /** @class */ (function () {
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
                    if (LODASH.isString(value)) {
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
                return LODASH.isEqual(itemPair.example.sort(), itemPair.item.sort());
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
                return !LODASH.difference(LODASH.flatten(example), LODASH.flatten(item)).length;
            };
        // tslint:disable-next-line:max-line-length
        ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING = 'This filterType is unsupported for array filtering. FilterType.ANYWHERE is executed instead!';
        ArrayPredicateService.SUGGESTION_WARNING = 'You can set a custom predicate for the array property through PropertyOptions!';
        ArrayPredicateService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ArrayPredicateService.ctorParameters = function () { return []; };
        /** @nocollapse */ ArrayPredicateService.ngInjectableDef = i0.defineInjectable({ factory: function ArrayPredicateService_Factory() { return new ArrayPredicateService(); }, token: ArrayPredicateService, providedIn: "root" });
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AlphaNumericPredicateService.ctorParameters = function () { return []; };
        /** @nocollapse */ AlphaNumericPredicateService.ngInjectableDef = i0.defineInjectable({ factory: function AlphaNumericPredicateService_Factory() { return new AlphaNumericPredicateService(); }, token: AlphaNumericPredicateService, providedIn: "root" });
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
                        var exampleValue = LODASH.cloneDeep(itemPair.example[key]);
                        if (LODASH.isNil(exampleValue) || LODASH.every(exampleValue, LODASH.isEmpty) && typeof exampleValue !== 'boolean') {
                            // if example entity's property is undefined/null/empty then it means the caller wants all the data
                            continue;
                        }
                        if (itemPair.item.hasOwnProperty(key)) {
                            // if example entity has additional columns then search fails
                            /** @type {?} */
                            var itemValue = LODASH.cloneDeep(itemPair.item[key]);
                            /** @type {?} */
                            var nextPropertyName = this.getNextPropertyName(propertyName, key);
                            /** @type {?} */
                            var options = this.finalizeOptionsForProperty(commonOptions, propertyOptions, nextPropertyName);
                            if (util.isFunction(options)) { // if user defined predicate is present for property
                                // if user defined predicate is present for property
                                /** @type {?} */
                                var customPredicate = ( /** @type {?} */(options));
                                if (!customPredicate(itemValue)) {
                                    return false;
                                }
                            }
                            else {
                                /** @type {?} */
                                var columnOptions = ( /** @type {?} */(options));
                                if (this.isAlphaNumeric(itemValue)) {
                                    /** @type {?} */
                                    var valuePair = { item: itemValue.toString(), example: exampleValue };
                                    if (!this._alphaNumericService.executeCondition(valuePair, columnOptions)) {
                                        return false;
                                    }
                                }
                                else if (LODASH.isArray(itemValue)) {
                                    /** @type {?} */
                                    var valuePair = { item: itemValue, example: exampleValue };
                                    if (!this._arrayService.executeCondition(valuePair, columnOptions)) {
                                        return false;
                                    }
                                }
                                else if (LODASH.isBoolean(itemValue)) {
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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (exampleKeys_1_1 && !exampleKeys_1_1.done && (_a = exampleKeys_1.return))
                            _a.call(exampleKeys_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
                return !LODASH.isEqual(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
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
                return LODASH.isString(value) || LODASH.isNumber(value);
            };
        MatTableFilterService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MatTableFilterService.ctorParameters = function () {
            return [
                { type: AlphaNumericPredicateService },
                { type: ArrayPredicateService }
            ];
        };
        /** @nocollapse */ MatTableFilterService.ngInjectableDef = i0.defineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(i0.inject(AlphaNumericPredicateService), i0.inject(ArrayPredicateService)); }, token: MatTableFilterService, providedIn: "root" });
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
                this._exampleEntitySubject = new rxjs.BehaviorSubject(null);
                this._exampleEntitySubject.pipe(operators.debounceTime(this.debounceTime))
                    .subscribe(( /**
             * @param {?} _
             * @return {?}
             */function (_) {
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
                    matDataSource.filter = ( /** @type {?} */(this.exampleEntity));
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
                    return ( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
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
                var matTable = ( /** @type {?} */(this._table));
                return (( /** @type {?} */(matTable.dataSource)));
            };
        MatTableFilterDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[matTableFilter]',
                        exportAs: 'matTableFilter'
                    },] }
        ];
        /** @nocollapse */
        MatTableFilterDirective.ctorParameters = function () {
            return [
                { type: MatTableFilterService },
                { type: material.MatTable, decorators: [{ type: i0.Host }, { type: i0.Self }, { type: i0.Optional }] },
                { type: i0.ViewContainerRef }
            ];
        };
        MatTableFilterDirective.propDecorators = {
            exampleEntity: [{ type: i0.Input }],
            debounceTime: [{ type: i0.Input }],
            filterType: [{ type: i0.Input }],
            caseSensitive: [{ type: i0.Input }],
            customPredicate: [{ type: i0.Input }],
            propertyOptions: [{ type: i0.Input }]
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
            { type: i0.NgModule, args: [{
                        declarations: [MatTableFilterDirective],
                        imports: [
                            material.MatTableModule
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

    exports.MatTableFilterService = MatTableFilterService;
    exports.MatTableFilter = MatTableFilter;
    exports.MatTableFilterDirective = MatTableFilterDirective;
    exports.MatTableFilterModule = MatTableFilterModule;
    exports.ɵa = AlphaNumericPredicateService;
    exports.ɵc = ArrayPredicateService;
    exports.ɵb = FilterPredicate;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=mat-table-filter.umd.js.map