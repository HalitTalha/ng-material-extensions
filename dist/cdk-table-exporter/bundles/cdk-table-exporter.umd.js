(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/table'), require('@angular/core'), require('file-saver-es')) :
    typeof define === 'function' && define.amd ? define('cdk-table-exporter', ['exports', '@angular/cdk/table', '@angular/core', 'file-saver-es'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['cdk-table-exporter'] = {}, global.ng.cdk.table, global.ng.core, global.FileSaver));
}(this, (function (exports, table, i0, FileSaver) { 'use strict';

    var CdkTableExporterModule = /** @class */ (function () {
        function CdkTableExporterModule() {
        }
        return CdkTableExporterModule;
    }());
    CdkTableExporterModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [],
                    imports: [
                        table.CdkTableModule
                    ],
                    exports: []
                },] }
    ];

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

    (function (ExportType) {
        ExportType["XLS"] = "xls";
        ExportType["XLSX"] = "xlsx";
        ExportType["CSV"] = "csv";
        ExportType["TXT"] = "txt";
        ExportType["JSON"] = "json";
        ExportType["OTHER"] = "other";
    })(exports.ExportType || (exports.ExportType = {}));

    var DataExtractorService = /** @class */ (function () {
        function DataExtractorService() {
        }
        DataExtractorService.prototype.extractRows = function (cdkTable, hiddenColumns, outlet) {
            return this.getRowsAsJsonArray(cdkTable, hiddenColumns, outlet !== null && outlet !== void 0 ? outlet : cdkTable._rowOutlet);
        };
        DataExtractorService.prototype.getRowsAsJsonArray = function (cdkTable, hiddenColumns, outlet) {
            var renderedRows = this.getRenderedRows(cdkTable, outlet);
            return this.convertToJsonArray(hiddenColumns, renderedRows);
        };
        DataExtractorService.prototype.getRenderedRows = function (cdkTable, outlet) {
            return cdkTable._getRenderedRows(outlet);
        };
        DataExtractorService.prototype.convertToJsonArray = function (hiddenColumns, rows) {
            var result = new Array();
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < rows.length; i++) {
                var row = this.convertRow(hiddenColumns, rows[i]);
                result.push(this.createExcelItem(row));
            }
            return result;
        };
        DataExtractorService.prototype.convertRow = function (hiddenColumns, row) {
            var result = new Array();
            var cells = row.children;
            for (var i = 0; i < cells.length; i++) {
                if (!this.shouldHide(hiddenColumns, i)) {
                    var element = (cells.item(i).innerText).trim();
                    result.push(element);
                }
            }
            return result;
        };
        DataExtractorService.prototype.shouldHide = function (hiddenColumns, columnIndex) {
            if (hiddenColumns && hiddenColumns.includes(columnIndex)) {
                return true;
            }
            else {
                return false;
            }
        };
        DataExtractorService.prototype.createExcelItem = function (row) {
            return Object.assign({}, row);
        };
        return DataExtractorService;
    }());
    DataExtractorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DataExtractorService_Factory() { return new DataExtractorService(); }, token: DataExtractorService, providedIn: "root" });
    DataExtractorService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    DataExtractorService.ctorParameters = function () { return []; };

    var Mime = /** @class */ (function () {
        function Mime(extension, contentTypeHeader) {
            this.extension = extension;
            this.contentTypeHeader = contentTypeHeader;
        }
        return Mime;
    }());

    var MAT_TABLE_EXPORTER = 'mat-table-exporter';
    var TYPE_ARRAY = 'array';
    var CHAR_SET_UTF = ';charset=utf-';
    var CHAR_SET_UTF_8 = CHAR_SET_UTF + '8';
    var CONTENT_TYPE_TEXT = exports.ExportType.TXT + '/';
    var CONTENT_TYPE_APPLICATION = 'application/';
    var CONTENT_TYPE_EXCEL = CONTENT_TYPE_APPLICATION + 'octet-stream';
    var DOT = '.';
    var COMMA = ',';
    var EXTENSION_XLS = DOT + exports.ExportType.XLS;
    var EXTENSION_XLSX = DOT + exports.ExportType.XLSX;
    var EXTENSION_CSV = DOT + exports.ExportType.CSV;
    var EXTENSION_JSON = DOT + exports.ExportType.JSON;
    var EXTENSION_TEXT = DOT + exports.ExportType.TXT;
    var MIME_EXCEL_XLS = new Mime(EXTENSION_XLS, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
    var MIME_EXCEL_XLSX = new Mime(EXTENSION_XLSX, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
    var MIME_JSON = new Mime(EXTENSION_JSON, CONTENT_TYPE_TEXT + JSON + CHAR_SET_UTF_8);
    var MIME_TXT = new Mime(EXTENSION_TEXT, CONTENT_TYPE_TEXT + exports.ExportType.TXT + CHAR_SET_UTF_8);
    var MIME_CSV = new Mime(EXTENSION_CSV, CONTENT_TYPE_TEXT + exports.ExportType.CSV + CHAR_SET_UTF_8);
    var REF = '!ref';
    var XLS_REGEX = DOT + '*\.' + exports.ExportType.XLS + '$';
    var RETURN = '\n';
    var TAB = '\t';
    var XLSX_COLS = '!cols';
    var BOM = '\uFEFF';
    var XLSX_LIGHTWEIGHT = new i0.InjectionToken('XLSX_LIGHTWEIGHT');

    var FileUtil = /** @class */ (function () {
        function FileUtil() {
        }
        FileUtil.save = function (content, mime, options) {
            var blob = new Blob([content], { type: mime.contentTypeHeader });
            var fileName = MAT_TABLE_EXPORTER;
            if (options && options.fileName) {
                fileName = options.fileName;
            }
            FileSaver.saveAs(blob, fileName + mime.extension);
        };
        FileUtil.isXls = function (fileName) {
            return fileName.toLowerCase().match(XLS_REGEX) != null;
        };
        FileUtil.identifyExportType = function (fileName) {
            if (fileName && FileUtil.isXls(fileName)) {
                return exports.ExportType.XLS;
            }
            else {
                return exports.ExportType.XLSX;
            }
        };
        FileUtil.removeExtension = function (options) {
            options.fileName = options.fileName.split(DOT)[0];
        };
        return FileUtil;
    }());

    var FileExporter = /** @class */ (function () {
        function FileExporter() {
        }
        FileExporter.prototype.export = function (rows, options) {
            if (!rows) {
                throw new Error('Empty json array is provided, rows parameter is mandatory!');
            }
            var mimeType = this.getMimeType();
            this.createContent(rows, options).then(function (content) {
                FileUtil.save(content, mimeType, options);
            });
        };
        return FileExporter;
    }());

    /**
     * An angular service class that is used to create files out of json object arrays.
     */
    var WorksheetExporter = /** @class */ (function (_super) {
        __extends(WorksheetExporter, _super);
        function WorksheetExporter(sheetJsHelper) {
            var _this = _super.call(this) || this;
            _this.sheetJsHelper = sheetJsHelper;
            return _this;
        }
        WorksheetExporter.prototype.createContent = function (rows, options) {
            return __awaiter(this, void 0, void 0, function () {
                var workSheet;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.sheetJsHelper.getXlsx()];
                        case 1:
                            workSheet = (_a.sent()).utils.json_to_sheet(rows, {
                                skipHeader: true // we don't want to see object properties as our headers
                            });
                            return [4 /*yield*/, this.workSheetToContent(workSheet, options)];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return WorksheetExporter;
    }(FileExporter));

    var SheetjsHelperService = /** @class */ (function () {
        function SheetjsHelperService(xlsxLightweight) {
            this.xlsxLightweight = xlsxLightweight;
        }
        SheetjsHelperService.prototype.getXlsx = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.xlsxLightweight) return [3 /*break*/, 2];
                            return [4 /*yield*/, import('xlsx/dist/xlsx.mini.min')];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2: return [4 /*yield*/, import('xlsx')];
                        case 3: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return SheetjsHelperService;
    }());
    SheetjsHelperService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SheetjsHelperService_Factory() { return new SheetjsHelperService(i0.ɵɵinject(XLSX_LIGHTWEIGHT, 8)); }, token: SheetjsHelperService, providedIn: "root" });
    SheetjsHelperService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SheetjsHelperService.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [XLSX_LIGHTWEIGHT,] }] }
    ]; };

    var CsvExporterService = /** @class */ (function (_super) {
        __extends(CsvExporterService, _super);
        function CsvExporterService(sheetJsHelper) {
            return _super.call(this, sheetJsHelper) || this;
        }
        CsvExporterService.prototype.workSheetToContent = function (worksheet, options) {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var content;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.sheetJsHelper.getXlsx()];
                        case 1:
                            content = (_b.sent()).utils.sheet_to_csv(worksheet, { FS: (_a = options === null || options === void 0 ? void 0 : options.delimiter) !== null && _a !== void 0 ? _a : COMMA });
                            return [2 /*return*/, BOM + content];
                    }
                });
            });
        };
        CsvExporterService.prototype.getMimeType = function () {
            return MIME_CSV;
        };
        return CsvExporterService;
    }(WorksheetExporter));
    CsvExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CsvExporterService_Factory() { return new CsvExporterService(i0.ɵɵinject(SheetjsHelperService)); }, token: CsvExporterService, providedIn: "root" });
    CsvExporterService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    CsvExporterService.ctorParameters = function () { return [
        { type: SheetjsHelperService }
    ]; };

    var TxtExporterService = /** @class */ (function (_super) {
        __extends(TxtExporterService, _super);
        function TxtExporterService() {
            return _super.call(this) || this;
        }
        TxtExporterService.prototype.createContent = function (rows, options) {
            return __awaiter(this, void 0, void 0, function () {
                var content;
                var _this = this;
                return __generator(this, function (_a) {
                    content = '';
                    rows.forEach(function (element) {
                        content += Object.values(element).join(_this.getDelimiter(options)) + RETURN;
                    });
                    return [2 /*return*/, content];
                });
            });
        };
        TxtExporterService.prototype.getMimeType = function () {
            return MIME_TXT;
        };
        TxtExporterService.prototype.getDelimiter = function (options) {
            if (options && options.delimiter) {
                return options.delimiter;
            }
            else {
                return TAB;
            }
        };
        return TxtExporterService;
    }(FileExporter));
    TxtExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TxtExporterService_Factory() { return new TxtExporterService(); }, token: TxtExporterService, providedIn: "root" });
    TxtExporterService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    TxtExporterService.ctorParameters = function () { return []; };

    var XlsExporterService = /** @class */ (function (_super) {
        __extends(XlsExporterService, _super);
        function XlsExporterService(sheetJsHelper) {
            return _super.call(this, sheetJsHelper) || this;
        }
        XlsExporterService.prototype.workSheetToContent = function (worksheet, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var _a, utils, write, workBook;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.sheetJsHelper.getXlsx()];
                        case 1:
                            _a = _b.sent(), utils = _a.utils, write = _a.write;
                            workBook = utils.book_new();
                            if (options.columnWidths) {
                                worksheet[XLSX_COLS] = this.convertToWch(options.columnWidths);
                            }
                            this.correctTypes(options);
                            utils.book_append_sheet(workBook, worksheet, options.sheet);
                            return [2 /*return*/, write(workBook, options)];
                    }
                });
            });
        };
        XlsExporterService.prototype.getMimeType = function () {
            return MIME_EXCEL_XLS;
        };
        XlsExporterService.prototype.correctTypes = function (options) {
            if (!options.type) {
                options.type = TYPE_ARRAY;
            }
            options.bookType = this.getMimeType().extension.replace('.', ''); // sheetjs requires bookingType for excel format
        };
        XlsExporterService.prototype.convertToWch = function (columnWidths) {
            return columnWidths.map(function (width) { return ({ wch: width }); });
        };
        return XlsExporterService;
    }(WorksheetExporter));
    XlsExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(i0.ɵɵinject(SheetjsHelperService)); }, token: XlsExporterService, providedIn: "root" });
    XlsExporterService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    XlsExporterService.ctorParameters = function () { return [
        { type: SheetjsHelperService }
    ]; };

    var JsonExporterService = /** @class */ (function (_super) {
        __extends(JsonExporterService, _super);
        function JsonExporterService() {
            return _super.call(this) || this;
        }
        JsonExporterService.prototype.createContent = function (rows, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, JSON.stringify(rows)];
                });
            });
        };
        JsonExporterService.prototype.getMimeType = function () {
            return MIME_JSON;
        };
        return JsonExporterService;
    }(FileExporter));
    JsonExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
    JsonExporterService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    JsonExporterService.ctorParameters = function () { return []; };

    var XlsxExporterService = /** @class */ (function (_super) {
        __extends(XlsxExporterService, _super);
        function XlsxExporterService(sheetJsHelper) {
            return _super.call(this, sheetJsHelper) || this;
        }
        // override
        XlsxExporterService.prototype.getMimeType = function () {
            return MIME_EXCEL_XLSX;
        };
        return XlsxExporterService;
    }(XlsExporterService));
    XlsxExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsxExporterService_Factory() { return new XlsxExporterService(i0.ɵɵinject(SheetjsHelperService)); }, token: XlsxExporterService, providedIn: "root" });
    XlsxExporterService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    XlsxExporterService.ctorParameters = function () { return [
        { type: SheetjsHelperService }
    ]; };

    var ServiceLocatorService = /** @class */ (function () {
        function ServiceLocatorService(injector) {
            this.injector = injector;
        }
        ServiceLocatorService.prototype.getService = function (exportType) {
            switch (exportType) {
                case exports.ExportType.XLS.valueOf():
                    return this.injector.get(XlsExporterService);
                case exports.ExportType.XLSX.valueOf():
                    return this.injector.get(XlsxExporterService);
                case exports.ExportType.JSON.valueOf():
                    return this.injector.get(JsonExporterService);
                case exports.ExportType.TXT.valueOf():
                    return this.injector.get(TxtExporterService);
                case exports.ExportType.CSV.valueOf():
                    return this.injector.get(CsvExporterService);
                case exports.ExportType.OTHER.valueOf():
                    return null;
                default:
                    return this.injector.get(XlsxExporterService);
            }
        };
        return ServiceLocatorService;
    }());
    ServiceLocatorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ServiceLocatorService_Factory() { return new ServiceLocatorService(i0.ɵɵinject(i0.INJECTOR)); }, token: ServiceLocatorService, providedIn: "root" });
    ServiceLocatorService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ServiceLocatorService.ctorParameters = function () { return [
        { type: i0.Injector }
    ]; };

    /**
     * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
     */
    var CdkTableExporter = /** @class */ (function () {
        function CdkTableExporter(renderer, serviceLocator, dataExtractor, _cdkTable) {
            this.renderer = renderer;
            this.serviceLocator = serviceLocator;
            this.dataExtractor = dataExtractor;
            this._cdkTable = _cdkTable;
            this.exportCompleted = new i0.EventEmitter();
            this.exportStarted = new i0.EventEmitter();
        }
        /**
         * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
         */
        CdkTableExporter.prototype.exportTable = function (exportType, options) {
            this.loadExporter(exportType);
            this._options = options;
            this.exportStarted.emit();
            this._isIterating = true;
            this._isExporting = true;
            this._data = new Array();
            this.extractTableHeader();
            try {
                this.exportWithPagination();
            }
            catch (notPaginated) {
                this.exportSinglePage();
            }
        };
        CdkTableExporter.prototype.toggleRow = function (index) {
            var paginatedRowIndex = this.getPaginatedRowIndex(index);
            if (this.isToggleOn(paginatedRowIndex)) {
                this.toggleOff(paginatedRowIndex);
            }
            else {
                this.toggleOn(paginatedRowIndex);
            }
        };
        /**
         * This event will clear rows selection done using toggleRow functionality
         */
        CdkTableExporter.prototype.resetToggleRows = function () {
            this._selectedRows = [];
        };
        CdkTableExporter.prototype.toggleOn = function (index) {
            this._selectedRows = __spread((this._selectedRows || []), [index]);
        };
        CdkTableExporter.prototype.toggleOff = function (index) {
            this._selectedRows = this._selectedRows.filter(function (x) { return x !== index; });
        };
        CdkTableExporter.prototype.isToggleOn = function (index) {
            var _a;
            return (_a = this._selectedRows) === null || _a === void 0 ? void 0 : _a.includes(index);
        };
        CdkTableExporter.prototype.loadExporter = function (exportType) {
            if (exportType === exports.ExportType.OTHER.valueOf()) {
                this._exporterService = this.exporter;
            }
            else {
                this._exporterService = this.serviceLocator.getService(exportType);
            }
        };
        CdkTableExporter.prototype.exportWithPagination = function () {
            this._initialPageIndex = this.getCurrentPageIndex();
            this.initPageHandler();
            this.goToPage(0);
        };
        CdkTableExporter.prototype.exportSinglePage = function () {
            this.extractDataOnCurrentPage();
            this.extractTableFooter();
            this.exportExtractedData();
        };
        CdkTableExporter.prototype.extractDataOnCurrentPage = function () {
            var rows = this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns);
            this._data = this._data.concat(this.getSelectedRows(rows));
        };
        CdkTableExporter.prototype.getSelectedRows = function (rows) {
            var _this = this;
            if (this.isSelectiveExport()) {
                return rows.filter(function (_, i) { return _this._selectedRows.includes(_this.getPaginatedRowIndex(i)); });
            }
            else {
                return rows;
            }
        };
        CdkTableExporter.prototype.isSelectiveExport = function () {
            return this._selectedRows && !this.isMasterToggleOff() && !this.isMasterToggleOn();
        };
        CdkTableExporter.prototype.isMasterToggleOn = function () {
            return this.compareSelectedRowCount(this.getTotalItemsCount());
        };
        CdkTableExporter.prototype.isMasterToggleOff = function () {
            return this.compareSelectedRowCount(0);
        };
        CdkTableExporter.prototype.compareSelectedRowCount = function (rowCount) {
            var _a;
            return !!(((_a = this._selectedRows) === null || _a === void 0 ? void 0 : _a.length) === rowCount);
        };
        CdkTableExporter.prototype.initPageHandler = function () {
            var _this = this;
            if (!this._subscription) {
                this._subscription = this.getPageChangeObservable().subscribe(function () {
                    setTimeout(function () {
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
                    });
                });
            }
        };
        CdkTableExporter.prototype.exportExtractedData = function () {
            this._exporterService.export(this._data, this._options);
            this._data = new Array();
            this.exportCompleted.emit();
        };
        CdkTableExporter.prototype.extractSpecialRows = function (outlet) {
            var _b;
            (_b = this._data).push.apply(_b, __spread(this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns, outlet)));
        };
        CdkTableExporter.prototype.extractTableHeader = function () {
            this.extractSpecialRows(this._cdkTable._headerRowOutlet);
        };
        CdkTableExporter.prototype.extractTableFooter = function () {
            this.extractSpecialRows(this._cdkTable._footerRowOutlet);
        };
        CdkTableExporter.prototype.hasNextPage = function () {
            if (this.getCurrentPageIndex() < this.getPageCount() - 1) {
                return true;
            }
            else {
                return false;
            }
        };
        CdkTableExporter.prototype.nextPage = function () {
            this.goToPage(this.getCurrentPageIndex() + 1);
        };
        CdkTableExporter.prototype.getPaginatedRowIndex = function (index) {
            return index + (this.getPageSize() * this.getCurrentPageIndex());
        };
        return CdkTableExporter;
    }());
    CdkTableExporter.decorators = [
        { type: i0.Directive }
    ];
    CdkTableExporter.ctorParameters = function () { return [
        { type: i0.Renderer2 },
        { type: ServiceLocatorService },
        { type: DataExtractorService },
        { type: undefined }
    ]; };
    CdkTableExporter.propDecorators = {
        hiddenColumns: [{ type: i0.Input }],
        exporter: [{ type: i0.Input }],
        exportCompleted: [{ type: i0.Output }],
        exportStarted: [{ type: i0.Output }]
    };

    /*
     * Public API Surface of cdk-table-exporter
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BOM = BOM;
    exports.CHAR_SET_UTF = CHAR_SET_UTF;
    exports.CHAR_SET_UTF_8 = CHAR_SET_UTF_8;
    exports.COMMA = COMMA;
    exports.CONTENT_TYPE_APPLICATION = CONTENT_TYPE_APPLICATION;
    exports.CONTENT_TYPE_EXCEL = CONTENT_TYPE_EXCEL;
    exports.CONTENT_TYPE_TEXT = CONTENT_TYPE_TEXT;
    exports.CdkTableExporter = CdkTableExporter;
    exports.CdkTableExporterModule = CdkTableExporterModule;
    exports.CsvExporterService = CsvExporterService;
    exports.DOT = DOT;
    exports.DataExtractorService = DataExtractorService;
    exports.EXTENSION_CSV = EXTENSION_CSV;
    exports.EXTENSION_JSON = EXTENSION_JSON;
    exports.EXTENSION_TEXT = EXTENSION_TEXT;
    exports.EXTENSION_XLS = EXTENSION_XLS;
    exports.EXTENSION_XLSX = EXTENSION_XLSX;
    exports.FileExporter = FileExporter;
    exports.FileUtil = FileUtil;
    exports.JsonExporterService = JsonExporterService;
    exports.MAT_TABLE_EXPORTER = MAT_TABLE_EXPORTER;
    exports.MIME_CSV = MIME_CSV;
    exports.MIME_EXCEL_XLS = MIME_EXCEL_XLS;
    exports.MIME_EXCEL_XLSX = MIME_EXCEL_XLSX;
    exports.MIME_JSON = MIME_JSON;
    exports.MIME_TXT = MIME_TXT;
    exports.Mime = Mime;
    exports.REF = REF;
    exports.RETURN = RETURN;
    exports.ServiceLocatorService = ServiceLocatorService;
    exports.TAB = TAB;
    exports.TYPE_ARRAY = TYPE_ARRAY;
    exports.TxtExporterService = TxtExporterService;
    exports.WorksheetExporter = WorksheetExporter;
    exports.XLSX_COLS = XLSX_COLS;
    exports.XLSX_LIGHTWEIGHT = XLSX_LIGHTWEIGHT;
    exports.XLS_REGEX = XLS_REGEX;
    exports.XlsExporterService = XlsExporterService;
    exports.XlsxExporterService = XlsxExporterService;
    exports.ɵa = SheetjsHelperService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-table-exporter.umd.js.map
