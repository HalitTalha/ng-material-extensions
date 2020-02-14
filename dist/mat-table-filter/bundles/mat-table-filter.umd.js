(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/table'), require('rxjs'), require('rxjs/operators'), require('lodash'), require('util')) :
    typeof define === 'function' && define.amd ? define('mat-table-filter', ['exports', '@angular/core', '@angular/material/table', 'rxjs', 'rxjs/operators', 'lodash', 'util'], factory) :
    (global = global || self, factory(global['mat-table-filter'] = {}, global.ng.core, global.ng.material.table, global.rxjs, global.rxjs.operators, global.lodash, global.util));
}(this, (function (exports, core, table, rxjs, operators, lodash, util) { 'use strict';

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

    (function (MatTableFilter) {
        MatTableFilter["EQUALS"] = "EQUALS";
        MatTableFilter["ANYWHERE"] = "ANYWHERE";
        MatTableFilter["STARTS_WITH"] = "STARTS_WITH";
        MatTableFilter["ENDS_WITH"] = "ENDS_WITH";
    })(exports.MatTableFilter || (exports.MatTableFilter = {}));

    var FilterPredicate = /** @class */ (function () {
        function FilterPredicate() {
        }
        FilterPredicate.prototype.executeCondition = function (itemPair, options) {
            this.handleLetterCasing(itemPair, options.caseSensitive);
            switch (options.filterType) {
                case exports.MatTableFilter.EQUALS:
                    return this.equals(itemPair);
                case exports.MatTableFilter.ANYWHERE:
                    return this.anywhere(itemPair);
                case exports.MatTableFilter.STARTS_WITH:
                    return this.startsWith(itemPair);
                case exports.MatTableFilter.ENDS_WITH:
                    return this.endsWith(itemPair);
                default:
                    return true;
            }
        };
        FilterPredicate.prototype.handleLetterCasing = function (itemPair, caseSensitive) {
            if (!caseSensitive) {
                this.transformAllLowerCase(itemPair);
            }
        };
        FilterPredicate.prototype.transformAllLowerCase = function (object) {
            // tslint:disable-next-line:forin
            for (var key in object) {
                var value = object[key];
                if (lodash.isString(value)) {
                    object[key] = value.toLowerCase();
                }
                else {
                    this.transformAllLowerCase(value);
                }
            }
        };
        return FilterPredicate;
    }());

    var ArrayPredicateService = /** @class */ (function (_super) {
        __extends(ArrayPredicateService, _super);
        function ArrayPredicateService() {
            return _super.call(this) || this;
        }
        ArrayPredicateService.warn = function () {
            console.warn(ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING);
            console.warn(ArrayPredicateService.SUGGESTION_WARNING);
        };
        ArrayPredicateService.prototype.equals = function (itemPair) {
            return lodash.isEqual(itemPair.example.sort(), itemPair.item.sort());
        };
        ArrayPredicateService.prototype.anywhere = function (itemPair) {
            return this.isSubset(itemPair.example, itemPair.item);
        };
        ArrayPredicateService.prototype.startsWith = function (itemPair) {
            ArrayPredicateService.warn();
            return this.anywhere(itemPair);
        };
        ArrayPredicateService.prototype.endsWith = function (itemPair) {
            ArrayPredicateService.warn();
            return this.anywhere(itemPair);
        };
        ArrayPredicateService.prototype.isSubset = function (example, item) {
            return !lodash.difference(lodash.flatten(example), lodash.flatten(item)).length;
        };
        // tslint:disable-next-line:max-line-length
        ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING = 'This filterType is unsupported for array filtering. FilterType.ANYWHERE is executed instead!';
        ArrayPredicateService.SUGGESTION_WARNING = 'You can set a custom predicate for the array property through PropertyOptions!';
        ArrayPredicateService.ɵfac = function ArrayPredicateService_Factory(t) { return new (t || ArrayPredicateService)(); };
        ArrayPredicateService.ɵprov = core["ɵɵdefineInjectable"]({ token: ArrayPredicateService, factory: ArrayPredicateService.ɵfac, providedIn: 'root' });
        return ArrayPredicateService;
    }(FilterPredicate));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ArrayPredicateService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var AlphaNumericPredicateService = /** @class */ (function (_super) {
        __extends(AlphaNumericPredicateService, _super);
        function AlphaNumericPredicateService() {
            return _super.call(this) || this;
        }
        AlphaNumericPredicateService.prototype.equals = function (itemPair) {
            return itemPair.example === itemPair.item;
        };
        AlphaNumericPredicateService.prototype.anywhere = function (itemPair) {
            return itemPair.item.includes(itemPair.example);
        };
        AlphaNumericPredicateService.prototype.startsWith = function (itemPair) {
            return itemPair.item.startsWith(itemPair.example);
        };
        AlphaNumericPredicateService.prototype.endsWith = function (itemPair) {
            return itemPair.item.endsWith(itemPair.example);
        };
        AlphaNumericPredicateService.ɵfac = function AlphaNumericPredicateService_Factory(t) { return new (t || AlphaNumericPredicateService)(); };
        AlphaNumericPredicateService.ɵprov = core["ɵɵdefineInjectable"]({ token: AlphaNumericPredicateService, factory: AlphaNumericPredicateService.ɵfac, providedIn: 'root' });
        return AlphaNumericPredicateService;
    }(FilterPredicate));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AlphaNumericPredicateService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var MatTableFilterService = /** @class */ (function () {
        function MatTableFilterService(_alphaNumericService, _arrayService) {
            this._alphaNumericService = _alphaNumericService;
            this._arrayService = _arrayService;
        }
        MatTableFilterService.prototype.filterPredicate = function (itemPair, propertyOptions, commonOptions, propertyName) {
            var e_1, _a;
            // tslint:disable-next-line:forin
            var exampleKeys = Object.keys(itemPair.example);
            try {
                for (var exampleKeys_1 = __values(exampleKeys), exampleKeys_1_1 = exampleKeys_1.next(); !exampleKeys_1_1.done; exampleKeys_1_1 = exampleKeys_1.next()) {
                    var key = exampleKeys_1_1.value;
                    var exampleValue = lodash.cloneDeep(itemPair.example[key]);
                    if (lodash.isNil(exampleValue) || lodash.every(exampleValue, lodash.isEmpty) && typeof exampleValue !== 'boolean') {
                        // if example entity's property is undefined/null/empty then it means the caller wants all the data
                        continue;
                    }
                    if (itemPair.item.hasOwnProperty(key)) {
                        // if example entity has additional columns then search fails
                        var itemValue = lodash.cloneDeep(itemPair.item[key]);
                        var nextPropertyName = this.getNextPropertyName(propertyName, key);
                        var options = this.finalizeOptionsForProperty(commonOptions, propertyOptions, nextPropertyName);
                        if (util.isFunction(options)) { // if user defined predicate is present for property
                            var customPredicate = options;
                            if (!customPredicate(itemValue)) {
                                return false;
                            }
                        }
                        else {
                            var columnOptions = options;
                            if (this.isAlphaNumeric(itemValue)) {
                                var valuePair = { item: itemValue.toString(), example: exampleValue };
                                if (!this._alphaNumericService.executeCondition(valuePair, columnOptions)) {
                                    return false;
                                }
                            }
                            else if (lodash.isArray(itemValue)) {
                                var valuePair = { item: itemValue, example: exampleValue };
                                if (!this._arrayService.executeCondition(valuePair, columnOptions)) {
                                    return false;
                                }
                            }
                            else if (lodash.isBoolean(itemValue)) {
                                if (itemValue !== exampleValue) {
                                    return false;
                                }
                            }
                            else {
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
        MatTableFilterService.prototype.finalizeOptionsForProperty = function (commonOptions, propertyOptions, propertyName) {
            if (propertyOptions && propertyOptions.hasOwnProperty(propertyName)) {
                return propertyOptions[propertyName];
            }
            else {
                return commonOptions;
            }
        };
        MatTableFilterService.prototype.getNextPropertyName = function (propertyName, key) {
            return propertyName ? (propertyName + '.' + key) : key;
        };
        MatTableFilterService.prototype.isChanged = function (oldEntity, newEntity) {
            return !lodash.isEqual(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
        };
        MatTableFilterService.prototype.toPlainJson = function (object) {
            if (object) {
                return JSON.parse(JSON.stringify(object));
            }
            else {
                return undefined;
            }
        };
        MatTableFilterService.prototype.isAlphaNumeric = function (value) {
            return lodash.isString(value) || lodash.isNumber(value);
        };
        MatTableFilterService.ɵfac = function MatTableFilterService_Factory(t) { return new (t || MatTableFilterService)(core["ɵɵinject"](AlphaNumericPredicateService), core["ɵɵinject"](ArrayPredicateService)); };
        MatTableFilterService.ɵprov = core["ɵɵdefineInjectable"]({ token: MatTableFilterService, factory: MatTableFilterService.ɵfac, providedIn: 'root' });
        return MatTableFilterService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](MatTableFilterService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: AlphaNumericPredicateService }, { type: ArrayPredicateService }]; }, null); })();

    var MatTableFilterDirective = /** @class */ (function () {
        function MatTableFilterDirective(_filterService, _injectedTable, _viewContainerRef) {
            this._filterService = _filterService;
            this._injectedTable = _injectedTable;
            this._viewContainerRef = _viewContainerRef;
            this.debounceTime = 400;
            this.filterType = exports.MatTableFilter.ANYWHERE;
            this.caseSensitive = false;
            this.initCdkTable();
            this.initDebounceSubject();
        }
        MatTableFilterDirective.prototype.ngDoCheck = function () {
            if (this._filterService.isChanged(this._oldExampleEntity, this.exampleEntity)) {
                this._oldExampleEntity = this._filterService.toPlainJson(this.exampleEntity);
                this._exampleEntitySubject.next(undefined);
            }
        };
        MatTableFilterDirective.prototype.initCdkTable = function () {
            var _a, _b;
            // tslint:disable-next-line:no-string-literal
            var table = (_b = (_a = this._viewContainerRef['_data']) === null || _a === void 0 ? void 0 : _a.componentView) === null || _b === void 0 ? void 0 : _b.component;
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
        MatTableFilterDirective.prototype.initDebounceSubject = function () {
            var _this = this;
            this._exampleEntitySubject = new rxjs.BehaviorSubject(null);
            this._exampleEntitySubject.pipe(operators.debounceTime(this.debounceTime))
                .subscribe(function (_) {
                _this.updateFilterPredicate();
            });
        };
        MatTableFilterDirective.prototype.updateFilterPredicate = function () {
            var matDataSource = this.getMatDataSource();
            if (matDataSource) {
                matDataSource.filterPredicate = this.getFilterPredicate();
                matDataSource.filter = this.exampleEntity;
            }
        };
        MatTableFilterDirective.prototype.getFilterPredicate = function () {
            var _this = this;
            if (this.customPredicate) {
                return this.customPredicate;
            }
            else {
                return function (item) {
                    return _this._filterService.filterPredicate({ example: _this.exampleEntity, item: item }, _this.propertyOptions, { filterType: _this.filterType, caseSensitive: _this.caseSensitive });
                };
            }
        };
        MatTableFilterDirective.prototype.getMatDataSource = function () {
            var matTable = this._table;
            return matTable.dataSource;
        };
        MatTableFilterDirective.ɵfac = function MatTableFilterDirective_Factory(t) { return new (t || MatTableFilterDirective)(core["ɵɵdirectiveInject"](MatTableFilterService), core["ɵɵdirectiveInject"](table.MatTable, 11), core["ɵɵdirectiveInject"](core.ViewContainerRef)); };
        MatTableFilterDirective.ɵdir = core["ɵɵdefineDirective"]({ type: MatTableFilterDirective, selectors: [["", "matTableFilter", ""]], inputs: { exampleEntity: "exampleEntity", debounceTime: "debounceTime", filterType: "filterType", caseSensitive: "caseSensitive", customPredicate: "customPredicate", propertyOptions: "propertyOptions" }, exportAs: ["matTableFilter"] });
        return MatTableFilterDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](MatTableFilterDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[matTableFilter]',
                    exportAs: 'matTableFilter'
                }]
        }], function () { return [{ type: MatTableFilterService }, { type: table.MatTable, decorators: [{
                    type: core.Host
                }, {
                    type: core.Self
                }, {
                    type: core.Optional
                }] }, { type: core.ViewContainerRef }]; }, { exampleEntity: [{
                type: core.Input
            }], debounceTime: [{
                type: core.Input
            }], filterType: [{
                type: core.Input
            }], caseSensitive: [{
                type: core.Input
            }], customPredicate: [{
                type: core.Input
            }], propertyOptions: [{
                type: core.Input
            }] }); })();

    var MatTableFilterModule = /** @class */ (function () {
        function MatTableFilterModule() {
        }
        MatTableFilterModule.ɵmod = core["ɵɵdefineNgModule"]({ type: MatTableFilterModule });
        MatTableFilterModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function MatTableFilterModule_Factory(t) { return new (t || MatTableFilterModule)(); }, imports: [[
                    table.MatTableModule
                ]] });
        return MatTableFilterModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](MatTableFilterModule, { declarations: [MatTableFilterDirective], imports: [table.MatTableModule], exports: [MatTableFilterDirective] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](MatTableFilterModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [MatTableFilterDirective],
                    imports: [
                        table.MatTableModule
                    ],
                    exports: [MatTableFilterDirective]
                }]
        }], null, null); })();

    exports.MatTableFilterDirective = MatTableFilterDirective;
    exports.MatTableFilterModule = MatTableFilterModule;
    exports.MatTableFilterService = MatTableFilterService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mat-table-filter.umd.js.map
