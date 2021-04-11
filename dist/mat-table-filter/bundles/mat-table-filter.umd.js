(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/table'), require('rxjs'), require('rxjs/operators'), require('lodash-es/isString'), require('lodash-es/isEqual'), require('lodash-es/difference'), require('lodash-es/flatten'), require('lodash-es/cloneDeep'), require('lodash-es/isNil'), require('lodash-es/every'), require('lodash-es/isFunction'), require('lodash-es/isArray'), require('lodash-es/isBoolean'), require('lodash-es/isNumber'), require('lodash-es/isEmpty')) :
    typeof define === 'function' && define.amd ? define('mat-table-filter', ['exports', '@angular/core', '@angular/material/table', 'rxjs', 'rxjs/operators', 'lodash-es/isString', 'lodash-es/isEqual', 'lodash-es/difference', 'lodash-es/flatten', 'lodash-es/cloneDeep', 'lodash-es/isNil', 'lodash-es/every', 'lodash-es/isFunction', 'lodash-es/isArray', 'lodash-es/isBoolean', 'lodash-es/isNumber', 'lodash-es/isEmpty'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['mat-table-filter'] = {}, global.ng.core, global.ng.material.table, global.rxjs, global.rxjs.operators, global.isString, global.isEqual, global.difference, global.flatten, global.cloneDeep, global.isNil, global.every, global.isFunction, global.isArray, global.isBoolean, global.isNumber, global.isEmpty));
}(this, (function (exports, i0, table, rxjs, operators, isString, isEqual, difference, flatten, cloneDeep, isNil, every, isFunction, isArray, isBoolean, isNumber, isEmpty) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var isString__default = /*#__PURE__*/_interopDefaultLegacy(isString);
    var isEqual__default = /*#__PURE__*/_interopDefaultLegacy(isEqual);
    var difference__default = /*#__PURE__*/_interopDefaultLegacy(difference);
    var flatten__default = /*#__PURE__*/_interopDefaultLegacy(flatten);
    var cloneDeep__default = /*#__PURE__*/_interopDefaultLegacy(cloneDeep);
    var isNil__default = /*#__PURE__*/_interopDefaultLegacy(isNil);
    var every__default = /*#__PURE__*/_interopDefaultLegacy(every);
    var isFunction__default = /*#__PURE__*/_interopDefaultLegacy(isFunction);
    var isArray__default = /*#__PURE__*/_interopDefaultLegacy(isArray);
    var isBoolean__default = /*#__PURE__*/_interopDefaultLegacy(isBoolean);
    var isNumber__default = /*#__PURE__*/_interopDefaultLegacy(isNumber);
    var isEmpty__default = /*#__PURE__*/_interopDefaultLegacy(isEmpty);

    (function (MatTableFilter) {
        MatTableFilter["EQUALS"] = "EQUALS";
        MatTableFilter["ANYWHERE"] = "ANYWHERE";
        MatTableFilter["STARTS_WITH"] = "STARTS_WITH";
        MatTableFilter["ENDS_WITH"] = "ENDS_WITH";
    })(exports.MatTableFilter || (exports.MatTableFilter = {}));

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

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
                if (isString__default['default'](value)) {
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
            return isEqual__default['default'](itemPair.example.sort(), itemPair.item.sort());
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
            return !difference__default['default'](flatten__default['default'](example), flatten__default['default'](item)).length;
        };
        return ArrayPredicateService;
    }(FilterPredicate));
    // tslint:disable-next-line:max-line-length
    ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING = 'This filterType is unsupported for array filtering. FilterType.ANYWHERE is executed instead!';
    ArrayPredicateService.SUGGESTION_WARNING = 'You can set a custom predicate for the array property through PropertyOptions!';
    ArrayPredicateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ArrayPredicateService_Factory() { return new ArrayPredicateService(); }, token: ArrayPredicateService, providedIn: "root" });
    ArrayPredicateService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ArrayPredicateService.ctorParameters = function () { return []; };

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
        return AlphaNumericPredicateService;
    }(FilterPredicate));
    AlphaNumericPredicateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlphaNumericPredicateService_Factory() { return new AlphaNumericPredicateService(); }, token: AlphaNumericPredicateService, providedIn: "root" });
    AlphaNumericPredicateService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    AlphaNumericPredicateService.ctorParameters = function () { return []; };

    var MatTableFilterService = /** @class */ (function () {
        function MatTableFilterService(_alphaNumericService, _arrayService) {
            this._alphaNumericService = _alphaNumericService;
            this._arrayService = _arrayService;
        }
        MatTableFilterService.prototype.filterPredicate = function (itemPair, propertyOptions, commonOptions, propertyName) {
            var e_1, _b;
            var _a;
            // tslint:disable-next-line:forin
            var exampleKeys = Object.keys(itemPair.example);
            try {
                for (var exampleKeys_1 = __values(exampleKeys), exampleKeys_1_1 = exampleKeys_1.next(); !exampleKeys_1_1.done; exampleKeys_1_1 = exampleKeys_1.next()) {
                    var key = exampleKeys_1_1.value;
                    var exampleValue = cloneDeep__default['default'](itemPair.example[key]);
                    if (isNil__default['default'](exampleValue) || every__default['default'](exampleValue, isEmpty__default['default']) && typeof exampleValue !== 'boolean') {
                        // if example entity's property is undefined/null/empty then it means the caller wants all the data
                        continue;
                    }
                    if ((_a = itemPair.item) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(key)) {
                        // if example entity has additional columns then search fails
                        var itemValue = cloneDeep__default['default'](itemPair.item[key]);
                        var nextPropertyName = this.getNextPropertyName(propertyName, key);
                        var options = this.finalizeOptionsForProperty(commonOptions, propertyOptions, nextPropertyName);
                        if (isFunction__default['default'](options)) { // if user defined predicate is present for property
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
                            else if (isArray__default['default'](itemValue)) {
                                var valuePair = { item: itemValue, example: exampleValue };
                                if (!this._arrayService.executeCondition(valuePair, columnOptions)) {
                                    return false;
                                }
                            }
                            else if (isBoolean__default['default'](itemValue)) {
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
                    if (exampleKeys_1_1 && !exampleKeys_1_1.done && (_b = exampleKeys_1.return)) _b.call(exampleKeys_1);
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
            return !isEqual__default['default'](this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
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
            return isString__default['default'](value) || isNumber__default['default'](value);
        };
        return MatTableFilterService;
    }());
    MatTableFilterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(i0.ɵɵinject(AlphaNumericPredicateService), i0.ɵɵinject(ArrayPredicateService)); }, token: MatTableFilterService, providedIn: "root" });
    MatTableFilterService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    MatTableFilterService.ctorParameters = function () { return [
        { type: AlphaNumericPredicateService },
        { type: ArrayPredicateService }
    ]; };

    var MatTableFilterDirective = /** @class */ (function () {
        function MatTableFilterDirective(_filterService, _table) {
            this._filterService = _filterService;
            this._table = _table;
            /**
             * in millis
             */
            this.debounceTime = 400;
            this.filterType = exports.MatTableFilter.ANYWHERE;
            this.caseSensitive = false;
            this.initDebounceSubject();
        }
        MatTableFilterDirective.prototype.ngDoCheck = function () {
            if (this._filterService.isChanged(this._oldExampleEntity, this.exampleEntity)) {
                this._oldExampleEntity = this._filterService.toPlainJson(this.exampleEntity);
                this._exampleEntitySubject.next(undefined);
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
        return MatTableFilterDirective;
    }());
    MatTableFilterDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[matTableFilter]',
                    exportAs: 'matTableFilter'
                },] }
    ];
    MatTableFilterDirective.ctorParameters = function () { return [
        { type: MatTableFilterService },
        { type: table.MatTable, decorators: [{ type: i0.Host }, { type: i0.Self }, { type: i0.Optional }] }
    ]; };
    MatTableFilterDirective.propDecorators = {
        exampleEntity: [{ type: i0.Input }],
        debounceTime: [{ type: i0.Input }],
        filterType: [{ type: i0.Input }],
        caseSensitive: [{ type: i0.Input }],
        customPredicate: [{ type: i0.Input }],
        propertyOptions: [{ type: i0.Input }]
    };

    var MatTableFilterModule = /** @class */ (function () {
        function MatTableFilterModule() {
        }
        return MatTableFilterModule;
    }());
    MatTableFilterModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [MatTableFilterDirective],
                    imports: [
                        table.MatTableModule
                    ],
                    exports: [MatTableFilterDirective]
                },] }
    ];

    /*
     * Public API Surface of mat-table-filter
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MatTableFilterDirective = MatTableFilterDirective;
    exports.MatTableFilterModule = MatTableFilterModule;
    exports.MatTableFilterService = MatTableFilterService;
    exports.ɵa = AlphaNumericPredicateService;
    exports.ɵb = FilterPredicate;
    exports.ɵc = ArrayPredicateService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mat-table-filter.umd.js.map
