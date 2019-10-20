(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/table'), require('@angular/core'), require('file-saver'), require('xlsx')) :
    typeof define === 'function' && define.amd ? define('cdk-table-exporter', ['exports', '@angular/cdk/table', '@angular/core', 'file-saver', 'xlsx'], factory) :
    (global = global || self, factory(global['cdk-table-exporter'] = {}, global.ng.cdk.table, global.ng.core, global.fileSaver, global.xlsx));
}(this, function (exports, table, core, fileSaver, xlsx) { 'use strict';

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
    var CdkTableExporterModule = /** @class */ (function () {
        function CdkTableExporterModule() {
        }
        CdkTableExporterModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [
                            table.CdkTableModule
                        ],
                        exports: []
                    },] }
        ];
        return CdkTableExporterModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ExportType = {
        XLS: 'xls',
        XLSX: 'xlsx',
        CSV: 'csv',
        TXT: 'txt',
        JSON: 'json',
        OTHER: 'other',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Mime = /** @class */ (function () {
        function Mime(extension, contentTypeHeader) {
            this.extension = extension;
            this.contentTypeHeader = contentTypeHeader;
        }
        return Mime;
    }());
    if (false) {
        /** @type {?} */
        Mime.prototype.extension;
        /** @type {?} */
        Mime.prototype.contentTypeHeader;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAT_TABLE_EXPORTER = 'mat-table-exporter';
    /** @type {?} */
    var TYPE_ARRAY = 'array';
    /** @type {?} */
    var CHAR_SET_UTF = ';charset=utf-';
    /** @type {?} */
    var CHAR_SET_UTF_8 = CHAR_SET_UTF + '8';
    /** @type {?} */
    var CHAR_SET_UTF_16 = CHAR_SET_UTF + '16';
    /** @type {?} */
    var CONTENT_TYPE_TEXT = ExportType.TXT + '/';
    /** @type {?} */
    var CONTENT_TYPE_APPLICATION = 'application/';
    /** @type {?} */
    var CONTENT_TYPE_EXCEL = CONTENT_TYPE_APPLICATION + 'octet-stream';
    /** @type {?} */
    var P = '.';
    /** @type {?} */
    var EXTENSION_XLS = P + ExportType.XLS;
    /** @type {?} */
    var EXTENSION_XLSX = P + ExportType.XLSX;
    /** @type {?} */
    var EXTENSION_CSV = P + ExportType.CSV;
    /** @type {?} */
    var EXTENSION_JSON = P + ExportType.JSON;
    /** @type {?} */
    var EXTENSION_TEXT = P + ExportType.TXT;
    /** @type {?} */
    var MIME_EXCEL_XLS = new Mime(EXTENSION_XLS, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
    /** @type {?} */
    var MIME_EXCEL_XLSX = new Mime(EXTENSION_XLSX, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
    /** @type {?} */
    var MIME_JSON = new Mime(EXTENSION_JSON, CONTENT_TYPE_TEXT + JSON + CHAR_SET_UTF_8);
    /** @type {?} */
    var MIME_TXT = new Mime(EXTENSION_TEXT, CONTENT_TYPE_TEXT + ExportType.TXT + CHAR_SET_UTF_16);
    /** @type {?} */
    var MIME_CSV = new Mime(EXTENSION_CSV, CONTENT_TYPE_TEXT + ExportType.CSV + CHAR_SET_UTF_8);
    /** @type {?} */
    var REF = '!ref';
    /** @type {?} */
    var XLS_REGEX = P + '*\.' + ExportType.XLS + '$';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FileUtil = /** @class */ (function () {
        function FileUtil() {
        }
        /**
         * @param {?} content
         * @param {?} mime
         * @param {?=} options
         * @return {?}
         */
        FileUtil.save = /**
         * @param {?} content
         * @param {?} mime
         * @param {?=} options
         * @return {?}
         */
        function (content, mime, options) {
            /** @type {?} */
            var blob = new Blob([content], { type: mime.contentTypeHeader });
            /** @type {?} */
            var fileName = MAT_TABLE_EXPORTER;
            if (options && options.fileName) {
                fileName = options.fileName;
            }
            fileSaver.saveAs(blob, fileName + mime.extension);
        };
        /**
         * @param {?} fileName
         * @return {?}
         */
        FileUtil.isXls = /**
         * @param {?} fileName
         * @return {?}
         */
        function (fileName) {
            return fileName.toLowerCase().match(XLS_REGEX) != null;
        };
        /**
         * @param {?=} fileName
         * @return {?}
         */
        FileUtil.identifyExportType = /**
         * @param {?=} fileName
         * @return {?}
         */
        function (fileName) {
            if (fileName && FileUtil.isXls(fileName)) {
                return ExportType.XLS;
            }
            else {
                return ExportType.XLSX;
            }
        };
        /**
         * @param {?=} options
         * @return {?}
         */
        FileUtil.removeExtension = /**
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            options.fileName = options.fileName.split(P)[0];
        };
        return FileUtil;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
     * @abstract
     */
    // @Directive()
    var CdkTableExporter = /** @class */ (function () {
        function CdkTableExporter(renderer, serviceLocator, dataExtractor, table, viewContainerRef) {
            this.renderer = renderer;
            this.serviceLocator = serviceLocator;
            this.dataExtractor = dataExtractor;
            this.table = table;
            this.viewContainerRef = viewContainerRef;
            this.exportCompleted = new core.EventEmitter();
            this.exportStarted = new core.EventEmitter();
            this.initCdkTable();
        }
        Object.defineProperty(CdkTableExporter.prototype, "cdkTable", {
            get: /**
             * @return {?}
             */
            function () {
                return this._cdkTable;
            },
            /**
             * @deprecated
             */
            set: /**
             * @deprecated
             * @param {?} value
             * @return {?}
             */
            function (value) {
                console.warn('cdkTable input is deprecated!');
                this._cdkTable = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkTableExporter.prototype, "exporterButton", {
            get: /**
             * @return {?}
             */
            function () {
                return this._exporterButton;
            },
            /**
             * @deprecated
             */
            set: /**
             * @deprecated
             * @param {?} value
             * @return {?}
             */
            function (value) {
                console.warn('exporterButton input is deprecated!');
                this._exporterButton = value;
                this.setButtonListener();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkTableExporter.prototype, "fileName", {
            get: /**
             * @return {?}
             */
            function () {
                return this._fileName;
            },
            /**
             * @deprecated
             */
            set: /**
             * @deprecated
             * @param {?} value
             * @return {?}
             */
            function (value) {
                console.warn('fileName input is deprecated!');
                this._fileName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkTableExporter.prototype, "sheetName", {
            get: /**
             * @return {?}
             */
            function () {
                return this._sheetName;
            },
            /**
             * @deprecated
             */
            set: /**
             * @deprecated
             * @param {?} value
             * @return {?}
             */
            function (value) {
                console.warn('sheetName input is deprecated!');
                this._sheetName = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.initCdkTable = /**
         * @private
         * @return {?}
         */
        function () {
            // tslint:disable-next-line:no-string-literal
            /** @type {?} */
            var table = this.viewContainerRef['_data'].componentView.component;
            if (table) {
                this._cdkTable = table;
            }
            else if (this.table) {
                this._cdkTable = this.table;
            }
            else {
                throw new Error('Unsupported Angular version');
            }
        };
        /**
         * @private
         * @param {?=} exportType
         * @return {?}
         */
        CdkTableExporter.prototype.initExporterService = /**
         * @private
         * @param {?=} exportType
         * @return {?}
         */
        function (exportType) {
            if (exportType !== ExportType.OTHER) {
                this.exporter = this.serviceLocator.getService(exportType);
            }
        };
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.setButtonListener = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._exporterButton) {
                this.renderer.listen(this._exporterButton._elementRef.nativeElement, 'click', (/**
                 * @param {?} evt
                 * @return {?}
                 */
                function (evt) {
                    /** @type {?} */
                    var options = (/** @type {?} */ ({ fileName: _this._fileName, sheet: _this._sheetName }));
                    _this.exportTable(FileUtil.identifyExportType(_this._fileName), options); // this is to support deprecated way of exporting
                }));
            }
        };
        /**
         * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
         */
        /**
         * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
         * @param {?=} exportTypeParam
         * @param {?=} options
         * @return {?}
         */
        CdkTableExporter.prototype.exportTable = /**
         * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
         * @param {?=} exportTypeParam
         * @param {?=} options
         * @return {?}
         */
        function (exportTypeParam, options) {
            /** @type {?} */
            var exportType = this.correctExportType(exportTypeParam);
            this.initExporterService(exportType);
            this._options = options;
            this.exportStarted.emit();
            this._isIterating = true;
            this._isExporting = true;
            this._data = new Array();
            this.enableExportButton(false);
            this.extractTableHeader();
            try {
                this.exportWithPagination();
            }
            catch (notPaginated) {
                this.exportSinglePage();
            }
        };
        /**
         * @private
         * @param {?=} exportTypeParam
         * @return {?}
         */
        CdkTableExporter.prototype.correctExportType = /**
         * @private
         * @param {?=} exportTypeParam
         * @return {?}
         */
        function (exportTypeParam) {
            if (exportTypeParam && typeof exportTypeParam === 'string') {
                switch (exportTypeParam) {
                    case ExportType.CSV:
                        return ExportType.CSV;
                    case ExportType.JSON:
                        return ExportType.JSON;
                    case ExportType.OTHER:
                        return ExportType.OTHER;
                    case ExportType.TXT:
                        return ExportType.TXT;
                    case ExportType.XLS:
                        return ExportType.XLS;
                    case ExportType.XLSX:
                        return ExportType.XLSX;
                }
            }
            else {
                return (/** @type {?} */ (exportTypeParam));
            }
        };
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.exportWithPagination = /**
         * @private
         * @return {?}
         */
        function () {
            this._initialPageIndex = this.getCurrentPageIndex();
            this.initPageHandler();
            this.goToPage(0);
        };
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.exportSinglePage = /**
         * @private
         * @return {?}
         */
        function () {
            this.extractDataOnCurrentPage();
            this.extractTableFooter();
            this.exportExtractedData();
        };
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.extractDataOnCurrentPage = /**
         * @private
         * @return {?}
         */
        function () {
            this._data = this._data.concat(this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns));
        };
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.initPageHandler = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this._subscription) {
                this._subscription = this.getPageChangeObservable().subscribe((/**
                 * @return {?}
                 */
                function () {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        if (_this._isIterating) {
                            _this.extractDataOnCurrentPage();
                            if (_this.hasNextPage()) {
                                _this.nextPage();
                            }
                            else {
                                _this._isIterating = false;
                                _this.goToPage(_this._initialPageIndex);
                            }
                        }
                        else if (_this._isExporting) {
                            _this._isExporting = false;
                            _this.extractTableFooter();
                            _this.exportExtractedData();
                        }
                    }));
                }));
            }
        };
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.exportExtractedData = /**
         * @private
         * @return {?}
         */
        function () {
            this.exporter.export(this._data, this._options);
            this._data = new Array();
            this.enableExportButton(true);
            this.exportCompleted.emit();
        };
        /**
         * @private
         * @param {?} outlet
         * @return {?}
         */
        CdkTableExporter.prototype.extractSpecialRow = /**
         * @private
         * @param {?} outlet
         * @return {?}
         */
        function (outlet) {
            /** @type {?} */
            var row = this.dataExtractor.extractRow(this._cdkTable, this.hiddenColumns, outlet);
            if (row) {
                this._data.push(row);
            }
        };
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.extractTableHeader = /**
         * @private
         * @return {?}
         */
        function () {
            this.extractSpecialRow(this._cdkTable._headerRowOutlet);
        };
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.extractTableFooter = /**
         * @private
         * @return {?}
         */
        function () {
            this.extractSpecialRow(this._cdkTable._footerRowOutlet);
        };
        /**
         * @return {?}
         */
        CdkTableExporter.prototype.hasNextPage = /**
         * @return {?}
         */
        function () {
            if (this.getCurrentPageIndex() < this.getPageCount() - 1) {
                return true;
            }
            else {
                return false;
            }
        };
        /**
         * @return {?}
         */
        CdkTableExporter.prototype.nextPage = /**
         * @return {?}
         */
        function () {
            this.goToPage(this.getCurrentPageIndex() + 1);
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        CdkTableExporter.prototype.enableExportButton = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._exporterButton) {
                this.renderer.setProperty(this._exporterButton._elementRef.nativeElement, 'disabled', value ? null : 'true');
            }
        };
        CdkTableExporter.propDecorators = {
            hiddenColumns: [{ type: core.Input }],
            exporter: [{ type: core.Input }],
            exportCompleted: [{ type: core.Output }],
            exportStarted: [{ type: core.Output }],
            cdkTable: [{ type: core.Input }],
            exporterButton: [{ type: core.Input }],
            fileName: [{ type: core.Input }],
            sheetName: [{ type: core.Input }]
        };
        return CdkTableExporter;
    }());
    if (false) {
        /** @type {?} */
        CdkTableExporter.prototype.hiddenColumns;
        /** @type {?} */
        CdkTableExporter.prototype.exporter;
        /** @type {?} */
        CdkTableExporter.prototype.exportCompleted;
        /** @type {?} */
        CdkTableExporter.prototype.exportStarted;
        /**
         * @type {?}
         * @private
         */
        CdkTableExporter.prototype._cdkTable;
        /**
         * @type {?}
         * @private
         */
        CdkTableExporter.prototype._exporterButton;
        /**
         * @type {?}
         * @private
         */
        CdkTableExporter.prototype._fileName;
        /**
         * @type {?}
         * @private
         */
        CdkTableExporter.prototype._sheetName;
        /**
         * Data array which is extracted from nativeTable
         * @type {?}
         * @private
         */
        CdkTableExporter.prototype._data;
        /**
         * @type {?}
         * @private
         */
        CdkTableExporter.prototype._isIterating;
        /**
         * @type {?}
         * @private
         */
        CdkTableExporter.prototype._initialPageIndex;
        /**
         * @type {?}
         * @private
         */
        CdkTableExporter.prototype._isExporting;
        /**
         * @type {?}
         * @private
         */
        CdkTableExporter.prototype._subscription;
        /**
         * @type {?}
         * @private
         */
        CdkTableExporter.prototype._options;
        /**
         * @type {?}
         * @protected
         */
        CdkTableExporter.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        CdkTableExporter.prototype.serviceLocator;
        /**
         * @type {?}
         * @private
         */
        CdkTableExporter.prototype.dataExtractor;
        /**
         * @type {?}
         * @protected
         */
        CdkTableExporter.prototype.table;
        /**
         * @type {?}
         * @protected
         */
        CdkTableExporter.prototype.viewContainerRef;
        /**
         * Must return the number of pages of the table
         * @abstract
         * @return {?}
         */
        CdkTableExporter.prototype.getPageCount = function () { };
        /**
         * Must return the index of the current page that's displayed
         * @abstract
         * @return {?}
         */
        CdkTableExporter.prototype.getCurrentPageIndex = function () { };
        /**
         * When called, the CdkTable should render the rows inside the page whose index given as parameter
         * @abstract
         * @param {?} index page index
         * @return {?}
         */
        CdkTableExporter.prototype.goToPage = function (index) { };
        /**
         * Must return an observable that notifies the subscribers about page changes
         * @abstract
         * @return {?}
         */
        CdkTableExporter.prototype.getPageChangeObservable = function () { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var JsonExporterService = /** @class */ (function () {
        function JsonExporterService() {
        }
        /**
         * @param {?} rows
         * @param {?=} options
         * @return {?}
         */
        JsonExporterService.prototype.export = /**
         * @param {?} rows
         * @param {?=} options
         * @return {?}
         */
        function (rows, options) {
            /** @type {?} */
            var jsonContent = JSON.stringify(rows);
            FileUtil.save(jsonContent, MIME_JSON, options);
        };
        JsonExporterService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        JsonExporterService.ctorParameters = function () { return []; };
        /** @nocollapse */ JsonExporterService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
        return JsonExporterService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An angular service class that is used to create files out of json object arrays.
     * @abstract
     * @template T
     */
    var   /**
     * An angular service class that is used to create files out of json object arrays.
     * @abstract
     * @template T
     */
    WorksheetExporter = /** @class */ (function () {
        function WorksheetExporter() {
        }
        /**
         * @param {?} rows
         * @param {?=} options
         * @return {?}
         */
        WorksheetExporter.prototype.export = /**
         * @param {?} rows
         * @param {?=} options
         * @return {?}
         */
        function (rows, options) {
            if (!rows) {
                throw new Error('Empty json array is provided, rows parameter is mandatory!');
            }
            /** @type {?} */
            var worksheet = xlsx.utils.json_to_sheet(rows, {
                skipHeader: true // we don't want to see object properties as our headers
            });
            this.writeToFile(worksheet, options);
        };
        /**
         * @param {?} worksheet
         * @param {?=} options
         * @return {?}
         */
        WorksheetExporter.prototype.writeToFile = /**
         * @param {?} worksheet
         * @param {?=} options
         * @return {?}
         */
        function (worksheet, options) {
            /** @type {?} */
            var content = this.createContent(worksheet, options);
            /** @type {?} */
            var mimeType = this.getMimeType();
            FileUtil.save(content, mimeType, options);
        };
        return WorksheetExporter;
    }());
    if (false) {
        /**
         * @abstract
         * @param {?} worksheet
         * @param {?=} options
         * @return {?}
         */
        WorksheetExporter.prototype.createContent = function (worksheet, options) { };
        /**
         * @abstract
         * @return {?}
         */
        WorksheetExporter.prototype.getMimeType = function () { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TxtExporterService = /** @class */ (function (_super) {
        __extends(TxtExporterService, _super);
        function TxtExporterService() {
            return _super.call(this) || this;
        }
        /**
         * @param {?} worksheet
         * @param {?=} options
         * @return {?}
         */
        TxtExporterService.prototype.createContent = /**
         * @param {?} worksheet
         * @param {?=} options
         * @return {?}
         */
        function (worksheet, options) {
            return xlsx.utils.sheet_to_txt(worksheet);
        };
        /**
         * @return {?}
         */
        TxtExporterService.prototype.getMimeType = /**
         * @return {?}
         */
        function () {
            return MIME_TXT;
        };
        TxtExporterService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TxtExporterService.ctorParameters = function () { return []; };
        /** @nocollapse */ TxtExporterService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TxtExporterService_Factory() { return new TxtExporterService(); }, token: TxtExporterService, providedIn: "root" });
        return TxtExporterService;
    }(WorksheetExporter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var XlsExporterService = /** @class */ (function (_super) {
        __extends(XlsExporterService, _super);
        function XlsExporterService() {
            return _super.call(this) || this;
        }
        /**
         * @param {?} worksheet
         * @param {?=} options
         * @return {?}
         */
        XlsExporterService.prototype.createContent = /**
         * @param {?} worksheet
         * @param {?=} options
         * @return {?}
         */
        function (worksheet, options) {
            /** @type {?} */
            var workBook = xlsx.utils.book_new();
            if (!options) {
                options = (/** @type {?} */ ({}));
            }
            this.correctType(options);
            xlsx.utils.book_append_sheet(workBook, worksheet, options.sheet);
            return xlsx.write(workBook, options);
        };
        /**
         * @return {?}
         */
        XlsExporterService.prototype.getMimeType = /**
         * @return {?}
         */
        function () {
            return MIME_EXCEL_XLS;
        };
        /**
         * @private
         * @param {?} options
         * @return {?}
         */
        XlsExporterService.prototype.correctType = /**
         * @private
         * @param {?} options
         * @return {?}
         */
        function (options) {
            if (!options.type) {
                options.type = TYPE_ARRAY;
            }
        };
        XlsExporterService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        XlsExporterService.ctorParameters = function () { return []; };
        /** @nocollapse */ XlsExporterService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(); }, token: XlsExporterService, providedIn: "root" });
        return XlsExporterService;
    }(WorksheetExporter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var XlsxExporterService = /** @class */ (function (_super) {
        __extends(XlsxExporterService, _super);
        function XlsxExporterService() {
            return _super.call(this) || this;
        }
        // override
        // override
        /**
         * @return {?}
         */
        XlsxExporterService.prototype.getMimeType = 
        // override
        /**
         * @return {?}
         */
        function () {
            return MIME_EXCEL_XLSX;
        };
        XlsxExporterService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        XlsxExporterService.ctorParameters = function () { return []; };
        /** @nocollapse */ XlsxExporterService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function XlsxExporterService_Factory() { return new XlsxExporterService(); }, token: XlsxExporterService, providedIn: "root" });
        return XlsxExporterService;
    }(XlsExporterService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CsvExporterService = /** @class */ (function (_super) {
        __extends(CsvExporterService, _super);
        function CsvExporterService() {
            return _super.call(this) || this;
        }
        /**
         * @param {?} worksheet
         * @param {?=} options
         * @return {?}
         */
        CsvExporterService.prototype.createContent = /**
         * @param {?} worksheet
         * @param {?=} options
         * @return {?}
         */
        function (worksheet, options) {
            return xlsx.utils.sheet_to_csv(worksheet);
        };
        /**
         * @return {?}
         */
        CsvExporterService.prototype.getMimeType = /**
         * @return {?}
         */
        function () {
            return MIME_CSV;
        };
        CsvExporterService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CsvExporterService.ctorParameters = function () { return []; };
        /** @nocollapse */ CsvExporterService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CsvExporterService_Factory() { return new CsvExporterService(); }, token: CsvExporterService, providedIn: "root" });
        return CsvExporterService;
    }(WorksheetExporter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ServiceLocatorService = /** @class */ (function () {
        function ServiceLocatorService(injector) {
            this.injector = injector;
        }
        /**
         * @param {?} exportType
         * @return {?}
         */
        ServiceLocatorService.prototype.getService = /**
         * @param {?} exportType
         * @return {?}
         */
        function (exportType) {
            switch (exportType) {
                case ExportType.XLS:
                    return this.injector.get(XlsExporterService);
                case ExportType.XLSX:
                    return this.injector.get(XlsxExporterService);
                case ExportType.JSON:
                    return this.injector.get(JsonExporterService);
                case ExportType.TXT:
                    return this.injector.get(TxtExporterService);
                case ExportType.CSV:
                    return this.injector.get(CsvExporterService);
                default:
                    return this.injector.get(XlsxExporterService);
            }
        };
        ServiceLocatorService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ServiceLocatorService.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        /** @nocollapse */ ServiceLocatorService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ServiceLocatorService_Factory() { return new ServiceLocatorService(core.ɵɵinject(core.INJECTOR)); }, token: ServiceLocatorService, providedIn: "root" });
        return ServiceLocatorService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ServiceLocatorService.prototype.injector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DataExtractorService = /** @class */ (function () {
        function DataExtractorService() {
        }
        /**
         * @param {?} cdkTable
         * @param {?} hiddenColumns
         * @return {?}
         */
        DataExtractorService.prototype.extractRows = /**
         * @param {?} cdkTable
         * @param {?} hiddenColumns
         * @return {?}
         */
        function (cdkTable, hiddenColumns) {
            return this.getRowsAsJsonArray(cdkTable, hiddenColumns, cdkTable._rowOutlet);
        };
        /**
         * @param {?} cdkTable
         * @param {?} hiddenColumns
         * @param {?} outlet
         * @return {?}
         */
        DataExtractorService.prototype.extractRow = /**
         * @param {?} cdkTable
         * @param {?} hiddenColumns
         * @param {?} outlet
         * @return {?}
         */
        function (cdkTable, hiddenColumns, outlet) {
            return this.getRowsAsJsonArray(cdkTable, hiddenColumns, outlet)[0];
        };
        /**
         * @private
         * @param {?} cdkTable
         * @param {?} hiddenColumns
         * @param {?} outlet
         * @return {?}
         */
        DataExtractorService.prototype.getRowsAsJsonArray = /**
         * @private
         * @param {?} cdkTable
         * @param {?} hiddenColumns
         * @param {?} outlet
         * @return {?}
         */
        function (cdkTable, hiddenColumns, outlet) {
            /** @type {?} */
            var renderedRows = this.getRenderedRows(cdkTable, outlet);
            return this.convertToJsonArray(hiddenColumns, renderedRows);
        };
        /**
         * @private
         * @param {?} cdkTable
         * @param {?} outlet
         * @return {?}
         */
        DataExtractorService.prototype.getRenderedRows = /**
         * @private
         * @param {?} cdkTable
         * @param {?} outlet
         * @return {?}
         */
        function (cdkTable, outlet) {
            return (/** @type {?} */ (cdkTable._getRenderedRows(outlet)));
        };
        /**
         * @private
         * @param {?} hiddenColumns
         * @param {?} rows
         * @return {?}
         */
        DataExtractorService.prototype.convertToJsonArray = /**
         * @private
         * @param {?} hiddenColumns
         * @param {?} rows
         * @return {?}
         */
        function (hiddenColumns, rows) {
            /** @type {?} */
            var result = new Array();
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < rows.length; i++) {
                /** @type {?} */
                var row = this.convertRow(hiddenColumns, rows[i]);
                result.push(this.createExcelItem(row));
            }
            return result;
        };
        /**
         * @private
         * @param {?} hiddenColumns
         * @param {?} row
         * @return {?}
         */
        DataExtractorService.prototype.convertRow = /**
         * @private
         * @param {?} hiddenColumns
         * @param {?} row
         * @return {?}
         */
        function (hiddenColumns, row) {
            /** @type {?} */
            var result = new Array();
            /** @type {?} */
            var cells = row.children;
            for (var i = 0; i < cells.length; i++) {
                if (!this.shouldHide(hiddenColumns, i)) {
                    /** @type {?} */
                    var element = cells.item(i).innerText;
                    result.push(element);
                }
            }
            return result;
        };
        /**
         * @private
         * @param {?} hiddenColumns
         * @param {?} columnIndex
         * @return {?}
         */
        DataExtractorService.prototype.shouldHide = /**
         * @private
         * @param {?} hiddenColumns
         * @param {?} columnIndex
         * @return {?}
         */
        function (hiddenColumns, columnIndex) {
            if (hiddenColumns && hiddenColumns.includes(columnIndex)) {
                return true;
            }
            else {
                return false;
            }
        };
        /**
         * @private
         * @param {?} row
         * @return {?}
         */
        DataExtractorService.prototype.createExcelItem = /**
         * @private
         * @param {?} row
         * @return {?}
         */
        function (row) {
            return Object.assign({}, row);
        };
        DataExtractorService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DataExtractorService.ctorParameters = function () { return []; };
        /** @nocollapse */ DataExtractorService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DataExtractorService_Factory() { return new DataExtractorService(); }, token: DataExtractorService, providedIn: "root" });
        return DataExtractorService;
    }());

    exports.CHAR_SET_UTF = CHAR_SET_UTF;
    exports.CHAR_SET_UTF_16 = CHAR_SET_UTF_16;
    exports.CHAR_SET_UTF_8 = CHAR_SET_UTF_8;
    exports.CONTENT_TYPE_APPLICATION = CONTENT_TYPE_APPLICATION;
    exports.CONTENT_TYPE_EXCEL = CONTENT_TYPE_EXCEL;
    exports.CONTENT_TYPE_TEXT = CONTENT_TYPE_TEXT;
    exports.CdkTableExporter = CdkTableExporter;
    exports.CdkTableExporterModule = CdkTableExporterModule;
    exports.CsvExporterService = CsvExporterService;
    exports.DataExtractorService = DataExtractorService;
    exports.EXTENSION_CSV = EXTENSION_CSV;
    exports.EXTENSION_JSON = EXTENSION_JSON;
    exports.EXTENSION_TEXT = EXTENSION_TEXT;
    exports.EXTENSION_XLS = EXTENSION_XLS;
    exports.EXTENSION_XLSX = EXTENSION_XLSX;
    exports.ExportType = ExportType;
    exports.FileUtil = FileUtil;
    exports.JsonExporterService = JsonExporterService;
    exports.MAT_TABLE_EXPORTER = MAT_TABLE_EXPORTER;
    exports.MIME_CSV = MIME_CSV;
    exports.MIME_EXCEL_XLS = MIME_EXCEL_XLS;
    exports.MIME_EXCEL_XLSX = MIME_EXCEL_XLSX;
    exports.MIME_JSON = MIME_JSON;
    exports.MIME_TXT = MIME_TXT;
    exports.Mime = Mime;
    exports.P = P;
    exports.REF = REF;
    exports.ServiceLocatorService = ServiceLocatorService;
    exports.TYPE_ARRAY = TYPE_ARRAY;
    exports.TxtExporterService = TxtExporterService;
    exports.WorksheetExporter = WorksheetExporter;
    exports.XLS_REGEX = XLS_REGEX;
    exports.XlsExporterService = XlsExporterService;
    exports.XlsxExporterService = XlsxExporterService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=cdk-table-exporter.umd.js.map
