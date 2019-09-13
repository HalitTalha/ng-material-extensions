(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material'), require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('lodash')) :
    typeof define === 'function' && define.amd ? define('mat-table-filter', ['exports', '@angular/material', 'rxjs', 'rxjs/operators', '@angular/core', 'lodash'], factory) :
    (factory((global['mat-table-filter'] = {}),global.ng.material,global.rxjs,global.rxjs.operators,global.ng.core,global.LODASH));
}(this, (function (exports,material,rxjs,operators,i0,LODASH) { 'use strict';

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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MatTableFilterService.ctorParameters = function () { return []; };
        /** @nocollapse */ MatTableFilterService.ngInjectableDef = i0.defineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(); }, token: MatTableFilterService, providedIn: "root" });
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
                if (this.isExampleEntityChanged()) {
                    this._oldExampleEntity = this.toPlainJson(this.exampleEntity);
                    this._exampleEntitySubject.next();
                }
            };
        /**
         * @private
         * @return {?}
         */
        MatTableFilterDirective.prototype.isExampleEntityChanged = /**
         * @private
         * @return {?}
         */
            function () {
                return !LODASH.isEqual(this._oldExampleEntity, this.toPlainJson(this.exampleEntity));
            };
        /**
         * @private
         * @param {?} object
         * @return {?}
         */
        MatTableFilterDirective.prototype.toPlainJson = /**
         * @private
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
                    throw new Error('Unsupported Angular version');
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
                this._exampleEntitySubject = new rxjs.BehaviorSubject(null);
                this._exampleEntitySubject.pipe(operators.debounceTime(this.debounceTime))
                    .subscribe(( /**
             * @param {?} _
             * @return {?}
             */function (_) {
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
                    matDataSource.filterPredicate = ( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        return _this_2._filterService.filterPredicate(_this_2.exampleEntity, data, _this_2.filterType, _this_2.caseSensitive);
                    });
                    matDataSource.filter = ( /** @type {?} */(this.exampleEntity));
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
            caseSensitive: [{ type: i0.Input }]
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
    exports.MatTableFilterModule = MatTableFilterModule;
    exports.ɵa = MatTableFilterDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=mat-table-filter.umd.js.map