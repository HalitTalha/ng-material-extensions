(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material'), require('rxjs'), require('rxjs/operators'), require('lodash'), require('util')) :
    typeof define === 'function' && define.amd ? define('mat-table-filter', ['exports', '@angular/core', '@angular/material', 'rxjs', 'rxjs/operators', 'lodash', 'util'], factory) :
    (global = global || self, factory(global['mat-table-filter'] = {}, global.ng.core, global.ng.material, global.rxjs, global.rxjs.operators, global.lodash, global.util));
}(this, function (exports, core, material, rxjs, operators, lodash, util) { 'use strict';

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
    var   /**
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
            return lodash.isEqual(itemPair.example.sort(), itemPair.item.sort());
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
            return !lodash.difference(lodash.flatten(example), lodash.flatten(item)).length;
        };
        ArrayPredicateService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ArrayPredicateService.ctorParameters = function () { return []; };
        /** @nocollapse */ ArrayPredicateService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ArrayPredicateService_Factory() { return new ArrayPredicateService(); }, token: ArrayPredicateService, providedIn: "root" });
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AlphaNumericPredicateService.ctorParameters = function () { return []; };
        /** @nocollapse */ AlphaNumericPredicateService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AlphaNumericPredicateService_Factory() { return new AlphaNumericPredicateService(); }, token: AlphaNumericPredicateService, providedIn: "root" });
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
                    if (lodash.isNil(exampleColumnValue) || lodash.every(exampleColumnValue, lodash.isEmpty) && typeof exampleColumnValue !== 'boolean') {
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
                        if (util.isFunction(options)) { // if user defined predicate is present for property
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
                            else if (lodash.isArray(itemColumnValue)) {
                                if (!this._arrayService.executeCondition(valuePair, columnOptions.filterType)) {
                                    return false;
                                }
                            }
                            else if (lodash.isBoolean(itemColumnValue)) {
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
            return !lodash.isEqual(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
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
            return lodash.isString(value) || lodash.isNumber(value);
        };
        MatTableFilterService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MatTableFilterService.ctorParameters = function () { return [
            { type: AlphaNumericPredicateService },
            { type: ArrayPredicateService }
        ]; };
        /** @nocollapse */ MatTableFilterService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(core.ɵɵinject(AlphaNumericPredicateService), core.ɵɵinject(ArrayPredicateService)); }, token: MatTableFilterService, providedIn: "root" });
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
            this._exampleEntitySubject = new rxjs.BehaviorSubject(null);
            this._exampleEntitySubject.pipe(operators.debounceTime(this.debounceTime))
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
            { type: core.Directive, args: [{
                        selector: '[matTableFilter]',
                        exportAs: 'matTableFilter'
                    },] }
        ];
        /** @nocollapse */
        MatTableFilterDirective.ctorParameters = function () { return [
            { type: MatTableFilterService },
            { type: material.MatTable, decorators: [{ type: core.Host }, { type: core.Self }, { type: core.Optional }] },
            { type: core.ViewContainerRef }
        ]; };
        MatTableFilterDirective.propDecorators = {
            exampleEntity: [{ type: core.Input }],
            debounceTime: [{ type: core.Input }],
            filterType: [{ type: core.Input }],
            caseSensitive: [{ type: core.Input }],
            customPredicate: [{ type: core.Input }],
            columnOptions: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        declarations: [MatTableFilterDirective],
                        imports: [
                            material.MatTableModule
                        ],
                        exports: [MatTableFilterDirective]
                    },] }
        ];
        return MatTableFilterModule;
    }());

    exports.MatTableFilter = MatTableFilter;
    exports.MatTableFilterModule = MatTableFilterModule;
    exports.MatTableFilterService = MatTableFilterService;
    exports.ɵa = MatTableFilterDirective;
    exports.ɵb = AlphaNumericPredicateService;
    exports.ɵc = FilterPredicate;
    exports.ɵd = ArrayPredicateService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=mat-table-filter.umd.js.map
