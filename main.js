(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./dist/cdk-table-exporter/fesm5/cdk-table-exporter.js":
/*!*************************************************************!*\
  !*** ./dist/cdk-table-exporter/fesm5/cdk-table-exporter.js ***!
  \*************************************************************/
/*! exports provided: CdkTableExporter, FileExporter, JsonExporterService, TxtExporterService, XlsExporterService, WorksheetExporter, XlsxExporterService, CsvExporterService, ExportType, ServiceLocatorService, DataExtractorService, Mime, FileUtil, CdkTableExporterModule, MAT_TABLE_EXPORTER, TYPE_ARRAY, CHAR_SET_UTF, CHAR_SET_UTF_8, CONTENT_TYPE_TEXT, CONTENT_TYPE_APPLICATION, CONTENT_TYPE_EXCEL, DOT, EXTENSION_XLS, EXTENSION_XLSX, EXTENSION_CSV, EXTENSION_JSON, EXTENSION_TEXT, MIME_EXCEL_XLS, MIME_EXCEL_XLSX, MIME_JSON, MIME_TXT, MIME_CSV, REF, XLS_REGEX, RETURN, TAB, XLSX_COLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTableExporter", function() { return CdkTableExporter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileExporter", function() { return FileExporter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonExporterService", function() { return JsonExporterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxtExporterService", function() { return TxtExporterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XlsExporterService", function() { return XlsExporterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetExporter", function() { return WorksheetExporter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XlsxExporterService", function() { return XlsxExporterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvExporterService", function() { return CsvExporterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportType", function() { return ExportType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLocatorService", function() { return ServiceLocatorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataExtractorService", function() { return DataExtractorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mime", function() { return Mime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUtil", function() { return FileUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTableExporterModule", function() { return CdkTableExporterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TABLE_EXPORTER", function() { return MAT_TABLE_EXPORTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_ARRAY", function() { return TYPE_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAR_SET_UTF", function() { return CHAR_SET_UTF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAR_SET_UTF_8", function() { return CHAR_SET_UTF_8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_TYPE_TEXT", function() { return CONTENT_TYPE_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_TYPE_APPLICATION", function() { return CONTENT_TYPE_APPLICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_TYPE_EXCEL", function() { return CONTENT_TYPE_EXCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOT", function() { return DOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENSION_XLS", function() { return EXTENSION_XLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENSION_XLSX", function() { return EXTENSION_XLSX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENSION_CSV", function() { return EXTENSION_CSV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENSION_JSON", function() { return EXTENSION_JSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENSION_TEXT", function() { return EXTENSION_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIME_EXCEL_XLS", function() { return MIME_EXCEL_XLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIME_EXCEL_XLSX", function() { return MIME_EXCEL_XLSX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIME_JSON", function() { return MIME_JSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIME_TXT", function() { return MIME_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIME_CSV", function() { return MIME_CSV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REF", function() { return REF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XLS_REGEX", function() { return XLS_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETURN", function() { return RETURN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XLSX_COLS", function() { return XLSX_COLS; });
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CdkTableExporterModule = /** @class */ (function () {
    function CdkTableExporterModule() {
    }
    CdkTableExporterModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    declarations: [],
                    imports: [
                        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTableModule"]
                    ],
                    exports: []
                },] }
    ];
    return CdkTableExporterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Mime = /** @class */ (function () {
    function Mime(extension, contentTypeHeader) {
        this.extension = extension;
        this.contentTypeHeader = contentTypeHeader;
    }
    return Mime;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var CONTENT_TYPE_TEXT = ExportType.TXT + '/';
/** @type {?} */
var CONTENT_TYPE_APPLICATION = 'application/';
/** @type {?} */
var CONTENT_TYPE_EXCEL = CONTENT_TYPE_APPLICATION + 'octet-stream';
/** @type {?} */
var DOT = '.';
/** @type {?} */
var EXTENSION_XLS = DOT + ExportType.XLS;
/** @type {?} */
var EXTENSION_XLSX = DOT + ExportType.XLSX;
/** @type {?} */
var EXTENSION_CSV = DOT + ExportType.CSV;
/** @type {?} */
var EXTENSION_JSON = DOT + ExportType.JSON;
/** @type {?} */
var EXTENSION_TEXT = DOT + ExportType.TXT;
/** @type {?} */
var MIME_EXCEL_XLS = new Mime(EXTENSION_XLS, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
/** @type {?} */
var MIME_EXCEL_XLSX = new Mime(EXTENSION_XLSX, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
/** @type {?} */
var MIME_JSON = new Mime(EXTENSION_JSON, CONTENT_TYPE_TEXT + JSON + CHAR_SET_UTF_8);
/** @type {?} */
var MIME_TXT = new Mime(EXTENSION_TEXT, CONTENT_TYPE_TEXT + ExportType.TXT + CHAR_SET_UTF_8);
/** @type {?} */
var MIME_CSV = new Mime(EXTENSION_CSV, CONTENT_TYPE_TEXT + ExportType.CSV + CHAR_SET_UTF_8);
/** @type {?} */
var REF = '!ref';
/** @type {?} */
var XLS_REGEX = DOT + '*\.' + ExportType.XLS + '$';
/** @type {?} */
var RETURN = '\n';
/** @type {?} */
var TAB = '\t';
/** @type {?} */
var XLSX_COLS = '!cols';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(blob, fileName + mime.extension);
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
        options.fileName = options.fileName.split(DOT)[0];
    };
    return FileUtil;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.exportCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.exportStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
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
     * @param {?=} exportType
     * @param {?=} options
     * @return {?}
     */
    CdkTableExporter.prototype.exportTable = /**
     * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
     * @param {?=} exportType
     * @param {?=} options
     * @return {?}
     */
    function (exportType, options) {
        this.loadExporter(exportType);
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
     * @param {?} exportType
     * @return {?}
     */
    CdkTableExporter.prototype.loadExporter = /**
     * @private
     * @param {?} exportType
     * @return {?}
     */
    function (exportType) {
        if (exportType === ExportType.OTHER.valueOf()) {
            this._exporterService = this.exporter;
        }
        else {
            this._exporterService = this.serviceLocator.getService(exportType);
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
        this._exporterService.export(this._data, this._options);
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
        hiddenColumns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        exporter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        exportCompleted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        exportStarted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        cdkTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        exporterButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        fileName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        sheetName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return CdkTableExporter;
}());

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
FileExporter = /** @class */ (function () {
    function FileExporter() {
    }
    /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    FileExporter.prototype.export = /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    function (rows, options) {
        if (!rows) {
            throw new Error('Empty json array is provided, rows parameter is mandatory!');
        }
        /** @type {?} */
        var content = this.createContent(rows, options);
        /** @type {?} */
        var mimeType = this.getMimeType();
        FileUtil.save(content, mimeType, options);
    };
    return FileExporter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JsonExporterService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(JsonExporterService, _super);
    function JsonExporterService() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    JsonExporterService.prototype.createContent = /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    function (rows, options) {
        return JSON.stringify(rows);
    };
    /**
     * @return {?}
     */
    JsonExporterService.prototype.getMimeType = /**
     * @return {?}
     */
    function () {
        return MIME_JSON;
    };
    JsonExporterService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    JsonExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ JsonExporterService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
    return JsonExporterService;
}(FileExporter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TxtExporterService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TxtExporterService, _super);
    function TxtExporterService() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    TxtExporterService.prototype.createContent = /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    function (rows, options) {
        var _this = this;
        /** @type {?} */
        var content = '';
        rows.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            content += Object.values(element).join(_this.getDelimiter(options)) + RETURN;
        }));
        return content;
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
    /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    TxtExporterService.prototype.getDelimiter = /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options && options.delimiter) {
            return options.delimiter;
        }
        else {
            return TAB;
        }
    };
    TxtExporterService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TxtExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ TxtExporterService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function TxtExporterService_Factory() { return new TxtExporterService(); }, token: TxtExporterService, providedIn: "root" });
    return TxtExporterService;
}(FileExporter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An angular service class that is used to create files out of json object arrays.
 * @abstract
 * @template T
 */
var  /**
 * An angular service class that is used to create files out of json object arrays.
 * @abstract
 * @template T
 */
WorksheetExporter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(WorksheetExporter, _super);
    function WorksheetExporter() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    WorksheetExporter.prototype.createContent = /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    function (rows, options) {
        /** @type {?} */
        var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(rows, {
            skipHeader: true // we don't want to see object properties as our headers
        });
        return this.workSheetToContent(workSheet, options);
    };
    return WorksheetExporter;
}(FileExporter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var XlsExporterService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(XlsExporterService, _super);
    function XlsExporterService() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    XlsExporterService.prototype.workSheetToContent = /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    function (worksheet, options) {
        if (options === void 0) { options = (/** @type {?} */ ({})); }
        /** @type {?} */
        var workBook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new();
        if (options.columnWidths) {
            worksheet[XLSX_COLS] = this.convertToWch(options.columnWidths);
        }
        this.correctTypes(options);
        xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(workBook, worksheet, options.sheet);
        return Object(xlsx__WEBPACK_IMPORTED_MODULE_3__["write"])(workBook, options);
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
    XlsExporterService.prototype.correctTypes = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (!options.type) {
            options.type = TYPE_ARRAY;
        }
        ((/** @type {?} */ (options))).bookType = this.getMimeType().extension.replace('.', ''); // sheetjs requires bookingType for excel format
    };
    /**
     * @private
     * @param {?} columnWidths
     * @return {?}
     */
    XlsExporterService.prototype.convertToWch = /**
     * @private
     * @param {?} columnWidths
     * @return {?}
     */
    function (columnWidths) {
        return columnWidths.map((/**
         * @param {?} width
         * @return {?}
         */
        function (width) { return ({ wch: width }); }));
    };
    XlsExporterService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    XlsExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ XlsExporterService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function XlsExporterService_Factory() { return new XlsExporterService(); }, token: XlsExporterService, providedIn: "root" });
    return XlsExporterService;
}(WorksheetExporter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var XlsxExporterService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(XlsxExporterService, _super);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    XlsxExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ XlsxExporterService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function XlsxExporterService_Factory() { return new XlsxExporterService(); }, token: XlsxExporterService, providedIn: "root" });
    return XlsxExporterService;
}(XlsExporterService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CsvExporterService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(CsvExporterService, _super);
    function CsvExporterService() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    CsvExporterService.prototype.workSheetToContent = /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    function (worksheet, options) {
        return xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].sheet_to_csv(worksheet);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CsvExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ CsvExporterService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function CsvExporterService_Factory() { return new CsvExporterService(); }, token: CsvExporterService, providedIn: "root" });
    return CsvExporterService;
}(WorksheetExporter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            case ExportType.XLS.valueOf():
                return this.injector.get(XlsExporterService);
            case ExportType.XLSX.valueOf():
                return this.injector.get(XlsxExporterService);
            case ExportType.JSON.valueOf():
                return this.injector.get(JsonExporterService);
            case ExportType.TXT.valueOf():
                return this.injector.get(TxtExporterService);
            case ExportType.CSV.valueOf():
                return this.injector.get(CsvExporterService);
            case ExportType.OTHER.valueOf():
                return null;
            default:
                return this.injector.get(XlsxExporterService);
        }
    };
    ServiceLocatorService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ServiceLocatorService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"] }
    ]; };
    /** @nocollapse */ ServiceLocatorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function ServiceLocatorService_Factory() { return new ServiceLocatorService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["INJECTOR"])); }, token: ServiceLocatorService, providedIn: "root" });
    return ServiceLocatorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DataExtractorService.ctorParameters = function () { return []; };
    /** @nocollapse */ DataExtractorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function DataExtractorService_Factory() { return new DataExtractorService(); }, token: DataExtractorService, providedIn: "root" });
    return DataExtractorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=cdk-table-exporter.js.map

/***/ }),

/***/ "./dist/mat-table-exporter/fesm5/mat-table-exporter.js":
/*!*************************************************************!*\
  !*** ./dist/mat-table-exporter/fesm5/mat-table-exporter.js ***!
  \*************************************************************/
/*! exports provided: CdkTableExporter, FileExporter, JsonExporterService, TxtExporterService, XlsExporterService, WorksheetExporter, XlsxExporterService, CsvExporterService, ExportType, ServiceLocatorService, DataExtractorService, Mime, FileUtil, CdkTableExporterModule, MAT_TABLE_EXPORTER, TYPE_ARRAY, CHAR_SET_UTF, CHAR_SET_UTF_8, CONTENT_TYPE_TEXT, CONTENT_TYPE_APPLICATION, CONTENT_TYPE_EXCEL, DOT, EXTENSION_XLS, EXTENSION_XLSX, EXTENSION_CSV, EXTENSION_JSON, EXTENSION_TEXT, MIME_EXCEL_XLS, MIME_EXCEL_XLSX, MIME_JSON, MIME_TXT, MIME_CSV, REF, XLS_REGEX, RETURN, TAB, XLSX_COLS, MatTableExporterDirective, MatTableExporterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableExporterDirective", function() { return MatTableExporterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableExporterModule", function() { return MatTableExporterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cdk-table-exporter */ "./dist/cdk-table-exporter/fesm5/cdk-table-exporter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkTableExporter", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["CdkTableExporter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileExporter", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["FileExporter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonExporterService", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["JsonExporterService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TxtExporterService", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["TxtExporterService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XlsExporterService", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["XlsExporterService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorksheetExporter", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["WorksheetExporter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XlsxExporterService", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["XlsxExporterService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CsvExporterService", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["CsvExporterService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExportType", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["ExportType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceLocatorService", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataExtractorService", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["DataExtractorService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mime", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["Mime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileUtil", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["FileUtil"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkTableExporterModule", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["CdkTableExporterModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TABLE_EXPORTER", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["MAT_TABLE_EXPORTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPE_ARRAY", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["TYPE_ARRAY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHAR_SET_UTF", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["CHAR_SET_UTF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHAR_SET_UTF_8", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["CHAR_SET_UTF_8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTENT_TYPE_TEXT", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["CONTENT_TYPE_TEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTENT_TYPE_APPLICATION", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["CONTENT_TYPE_APPLICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTENT_TYPE_EXCEL", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["CONTENT_TYPE_EXCEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOT", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["DOT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXTENSION_XLS", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["EXTENSION_XLS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXTENSION_XLSX", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["EXTENSION_XLSX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXTENSION_CSV", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["EXTENSION_CSV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXTENSION_JSON", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["EXTENSION_JSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXTENSION_TEXT", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["EXTENSION_TEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIME_EXCEL_XLS", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["MIME_EXCEL_XLS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIME_EXCEL_XLSX", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["MIME_EXCEL_XLSX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIME_JSON", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["MIME_JSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIME_TXT", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["MIME_TXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIME_CSV", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["MIME_CSV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REF", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["REF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XLS_REGEX", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["XLS_REGEX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RETURN", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["RETURN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["TAB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XLSX_COLS", function() { return cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["XLSX_COLS"]; });







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatTableExporterDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatTableExporterDirective, _super);
    function MatTableExporterDirective(renderer, serviceLocator, dataExtractor, table, viewContainerRef) {
        return _super.call(this, renderer, serviceLocator, dataExtractor, table, viewContainerRef) || this;
    }
    /**
     * Overriding ngAfterViewInit of TableExporter
     */
    /**
     * Overriding ngAfterViewInit of TableExporter
     * @return {?}
     */
    MatTableExporterDirective.prototype.ngAfterViewInit = /**
     * Overriding ngAfterViewInit of TableExporter
     * @return {?}
     */
    function () {
        var _this = this;
        this.exportStarted.subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.enablePaginator(false);
        }));
        this.exportCompleted.subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.enablePaginator(true);
        }));
    };
    /**
     * MatTable implementation of getPageCount
     * @override
     */
    /**
     * MatTable implementation of getPageCount
     * @override
     * @return {?}
     */
    MatTableExporterDirective.prototype.getPageCount = /**
     * MatTable implementation of getPageCount
     * @override
     * @return {?}
     */
    function () {
        return this.getPaginator().getNumberOfPages();
    };
    /**
     * MatTable implementation of getCurrentPageIndex
     * @override
     */
    /**
     * MatTable implementation of getCurrentPageIndex
     * @override
     * @return {?}
     */
    MatTableExporterDirective.prototype.getCurrentPageIndex = /**
     * MatTable implementation of getCurrentPageIndex
     * @override
     * @return {?}
     */
    function () {
        return this.getPaginator().pageIndex;
    };
    /**
     * MatTable implementation of goToPage
     * @override
     */
    /**
     * MatTable implementation of goToPage
     * @override
     * @param {?} index
     * @return {?}
     */
    MatTableExporterDirective.prototype.goToPage = /**
     * MatTable implementation of goToPage
     * @override
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.getPaginator().pageIndex = index;
        this.getPaginator()._changePageSize(this.getPaginator().pageSize);
    };
    /**
     * MatTable implementation of getPageChangeObservable
     * @override
     */
    /**
     * MatTable implementation of getPageChangeObservable
     * @override
     * @return {?}
     */
    MatTableExporterDirective.prototype.getPageChangeObservable = /**
     * MatTable implementation of getPageChangeObservable
     * @override
     * @return {?}
     */
    function () {
        return this.getPaginator().page;
    };
    /**
     * @private
     * @return {?}
     */
    MatTableExporterDirective.prototype.getPaginator = /**
     * @private
     * @return {?}
     */
    function () {
        return ((/** @type {?} */ (this.cdkTable.dataSource))).paginator;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MatTableExporterDirective.prototype.enablePaginator = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.getPaginator()) {
            this.getPaginator().disabled = !value;
            this.getPaginator()._changePageSize(this.getPaginator().pageSize);
        }
    };
    MatTableExporterDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[ngxMatTableExporter], [matTableExporter]',
                    // renamed selector but kept old version for backwards compat.
                    exportAs: 'matTableExporter'
                },] }
    ];
    /** @nocollapse */
    MatTableExporterDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"] },
        { type: cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["DataExtractorService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
    ]; };
    return MatTableExporterDirective;
}(cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["CdkTableExporter"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatTableExporterModule = /** @class */ (function () {
    function MatTableExporterModule() {
    }
    MatTableExporterModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [MatTableExporterDirective],
                    imports: [
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                        cdk_table_exporter__WEBPACK_IMPORTED_MODULE_3__["CdkTableExporterModule"]
                    ],
                    exports: [MatTableExporterDirective]
                },] }
    ];
    return MatTableExporterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=mat-table-exporter.js.map

/***/ }),

/***/ "./dist/mat-table-filter/fesm5/mat-table-filter.js":
/*!*********************************************************!*\
  !*** ./dist/mat-table-filter/fesm5/mat-table-filter.js ***!
  \*********************************************************/
/*! exports provided: MatTableFilterService, MatTableFilter, MatTableFilterDirective, MatTableFilterModule, ɵa, ɵc, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableFilterService", function() { return MatTableFilterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableFilter", function() { return MatTableFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableFilterDirective", function() { return MatTableFilterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableFilterModule", function() { return MatTableFilterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AlphaNumericPredicateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ArrayPredicateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return FilterPredicate; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);








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
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isString"])(value)) {
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(ArrayPredicateService, _super);
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
        return Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEqual"])(itemPair.example.sort(), itemPair.item.sort());
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
        return !Object(lodash__WEBPACK_IMPORTED_MODULE_5__["difference"])(Object(lodash__WEBPACK_IMPORTED_MODULE_5__["flatten"])(example), Object(lodash__WEBPACK_IMPORTED_MODULE_5__["flatten"])(item)).length;
    };
    // tslint:disable-next-line:max-line-length
    ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING = 'This filterType is unsupported for array filtering. FilterType.ANYWHERE is executed instead!';
    ArrayPredicateService.SUGGESTION_WARNING = 'You can set a custom predicate for the array property through PropertyOptions!';
    ArrayPredicateService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ArrayPredicateService.ctorParameters = function () { return []; };
    /** @nocollapse */ ArrayPredicateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function ArrayPredicateService_Factory() { return new ArrayPredicateService(); }, token: ArrayPredicateService, providedIn: "root" });
    return ArrayPredicateService;
}(FilterPredicate));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlphaNumericPredicateService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(AlphaNumericPredicateService, _super);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AlphaNumericPredicateService.ctorParameters = function () { return []; };
    /** @nocollapse */ AlphaNumericPredicateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function AlphaNumericPredicateService_Factory() { return new AlphaNumericPredicateService(); }, token: AlphaNumericPredicateService, providedIn: "root" });
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
            for (var exampleKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(exampleKeys), exampleKeys_1_1 = exampleKeys_1.next(); !exampleKeys_1_1.done; exampleKeys_1_1 = exampleKeys_1.next()) {
                var key = exampleKeys_1_1.value;
                /** @type {?} */
                var exampleValue = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(itemPair.example[key]);
                if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isNil"])(exampleValue) || Object(lodash__WEBPACK_IMPORTED_MODULE_5__["every"])(exampleValue, lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"]) && typeof exampleValue !== 'boolean') {
                    // if example entity's property is undefined/null/empty then it means the caller wants all the data
                    continue;
                }
                if (itemPair.item.hasOwnProperty(key)) {
                    // if example entity has additional columns then search fails
                    /** @type {?} */
                    var itemValue = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(itemPair.item[key]);
                    /** @type {?} */
                    var nextPropertyName = this.getNextPropertyName(propertyName, key);
                    /** @type {?} */
                    var options = this.finalizeOptionsForProperty(commonOptions, propertyOptions, nextPropertyName);
                    if (Object(util__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(options)) { // if user defined predicate is present for property
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
                        else if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isArray"])(itemValue)) {
                            /** @type {?} */
                            var valuePair = { item: itemValue, example: exampleValue };
                            if (!this._arrayService.executeCondition(valuePair, columnOptions)) {
                                return false;
                            }
                        }
                        else if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isBoolean"])(itemValue)) {
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
        return !Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEqual"])(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
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
        return Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isString"])(value) || Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isNumber"])(value);
    };
    MatTableFilterService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MatTableFilterService.ctorParameters = function () { return [
        { type: AlphaNumericPredicateService },
        { type: ArrayPredicateService }
    ]; };
    /** @nocollapse */ MatTableFilterService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(AlphaNumericPredicateService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ArrayPredicateService)); }, token: MatTableFilterService, providedIn: "root" });
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
        this._exampleEntitySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._exampleEntitySubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(this.debounceTime))
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[matTableFilter]',
                    exportAs: 'matTableFilter'
                },] }
    ];
    /** @nocollapse */
    MatTableFilterDirective.ctorParameters = function () { return [
        { type: MatTableFilterService },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTable"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] }
    ]; };
    MatTableFilterDirective.propDecorators = {
        exampleEntity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        debounceTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        filterType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        caseSensitive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        customPredicate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        propertyOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    declarations: [MatTableFilterDirective],
                    imports: [
                        _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"]
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



//# sourceMappingURL=mat-table-filter.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.docs-header-background {\r\n  background: #3f51b5;\r\n}\r\n\r\n.docs-header-logo {\r\n  width: 45px;\r\n  height: 45px;\r\n}\r\n\r\n.docs-header-headline {\r\n  color: #fff;\r\n}\r\n\r\n.docs-header-start {\r\n  color: #3f51b5;\r\n}\r\n\r\n.docs-header-background {\r\n  overflow: hidden;\r\n}\r\n\r\n.docs-header-section {\r\n  text-align: center;\r\n  padding-top: 25px;\r\n}\r\n\r\n.docs-footer {\r\n  padding: 12px;\r\n  font-size: 12px;\r\n  margin-top: 40px;\r\n  background: #3f51b5;\r\n  color: #fff;\r\n  display: block;\r\n}\r\n\r\n.docs-footer-list {\r\n  align-items: center;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  padding: 8px;\r\n}\r\n\r\n.docs-footer-logo {\r\n  flex: 1;\r\n}\r\n\r\n.footer-logo {\r\n  padding: 12px;\r\n  font-size: 12px;\r\n  margin-top: 40px;\r\n}\r\n\r\nh1 {\r\n  font-size: 56px;\r\n  font-weight: 300;\r\n  line-height: 56px;\r\n  margin: 15px 5px;\r\n}\r\n\r\nh2 {\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  line-height: 28px;\r\n  margin: 15px 0 25px 0;\r\n}\r\n\r\n/**\r\n  * Rules for when the device is detected to be a small screen.\r\n  */\r\n\r\n@media (max-width: 720px) {\r\n  .docs-header-section {\r\n    padding-top: 15px;\r\n  }\r\n}\r\n\r\n::ng-deep .docs-tabs > .mat-tab-header {\r\n  background-color: #3f51b5 !important;\r\n}\r\n\r\n::ng-deep .docs-tabs > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-ink-bar {\r\n  background-color: #fff !important;\r\n  height: 4px;\r\n}\r\n\r\n::ng-deep .docs-tabs > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > .mat-tab-label > .mat-tab-label-content {\r\n  color: #fff !important;\r\n}\r\n\r\n::ng-deep .docs-tabs > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > .mat-tab-label-active {\r\n  opacity: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBR0E7O0dBRUc7O0FBQ0g7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUdBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5kb2NzLWhlYWRlci1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xyXG59XHJcblxyXG4uZG9jcy1oZWFkZXItbG9nbyB7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4uZG9jcy1oZWFkZXItaGVhZGxpbmUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZG9jcy1oZWFkZXItc3RhcnQge1xyXG4gIGNvbG9yOiAjM2Y1MWI1O1xyXG59XHJcblxyXG4uZG9jcy1oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmRvY3MtaGVhZGVyLXNlY3Rpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxufVxyXG5cclxuLmRvY3MtZm9vdGVyIHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5kb2NzLWZvb3Rlci1saXN0IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5kb2NzLWZvb3Rlci1sb2dvIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9vdGVyLWxvZ28ge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiA1NnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbiAgbWFyZ2luOiAxNXB4IDVweDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIG1hcmdpbjogMTVweCAwIDI1cHggMDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gICogUnVsZXMgZm9yIHdoZW4gdGhlIGRldmljZSBpcyBkZXRlY3RlZCB0byBiZSBhIHNtYWxsIHNjcmVlbi5cclxuICAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAuZG9jcy1oZWFkZXItc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLmRvY3MtdGFicyA+IC5tYXQtdGFiLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmRvY3MtdGFicyA+IC5tYXQtdGFiLWhlYWRlciA+IC5tYXQtdGFiLWxhYmVsLWNvbnRhaW5lciA+IC5tYXQtdGFiLWxpc3QgPiAubWF0LWluay1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDRweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5kb2NzLXRhYnMgPiAubWF0LXRhYi1oZWFkZXIgPiAubWF0LXRhYi1sYWJlbC1jb250YWluZXIgPiAubWF0LXRhYi1saXN0ID4gLm1hdC10YWItbGFiZWxzID4gLm1hdC10YWItbGFiZWwgPiAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmRvY3MtdGFicyA+IC5tYXQtdGFiLWhlYWRlciA+IC5tYXQtdGFiLWxhYmVsLWNvbnRhaW5lciA+IC5tYXQtdGFiLWxpc3QgPiAubWF0LXRhYi1sYWJlbHMgPiAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<notifier-container></notifier-container>\n<header class=\"docs-header-background\">\n  <div class=\"docs-header-section\">\n      <a fxLayout=\"column\" fxLayoutAlign=\"center center\" href=\"https://github.com/HalitTalha/mat-table-extensions\" target=\"_blank\">\n        <img class=\"docs-header-logo\" src=\"assets/images/github.png\">\n        <a class=\"docs-header-headline\">/HalitTalha</a>\n      </a>\n    <div class=\"docs-header-headline\">\n      <h1 class=\"mat-h1\">mat-table-extensions</h1>\n      <h2> Extended features for Angular Material Tables</h2>\n    </div>\n  </div>\n</header>\n  <mat-tab-group class=\"docs-tabs\" mat-align-tabs=\"center\">\n      <mat-tab label=\"Exporter\">\n        <app-exporter></app-exporter>\n      </mat-tab>\n      <mat-tab label=\"Filter\">\n        <app-filter></app-filter>\n      </mat-tab>\n  </mat-tab-group>\n<footer class=\"docs-footer\">\n  <div class=\"docs-footer-list\">\n    <div class=\"docs-footer-logo\">\n      <div class=\"footer-logo\">\n\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mat-table-extensions';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: markedOptions, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markedOptions", function() { return markedOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mat-table-filter */ "./dist/mat-table-filter/fesm5/mat-table-filter.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mat-table-exporter */ "./dist/mat-table-exporter/fesm5/mat-table-exporter.js");
/* harmony import */ var _components_exporter_exporter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/exporter/exporter.component */ "./src/app/components/exporter/exporter.component.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _components_example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/example-viewer/example-viewer.component */ "./src/app/components/example-viewer/example-viewer.component.ts");
/* harmony import */ var _components_examples_simple_filter_simple_filter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/examples/simple-filter/simple-filter.component */ "./src/app/components/examples/simple-filter/simple-filter.component.ts");
/* harmony import */ var _components_examples_custom_column_filter_custom_column_filter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/examples/custom-column-filter/custom-column-filter.component */ "./src/app/components/examples/custom-column-filter/custom-column-filter.component.ts");
/* harmony import */ var _components_examples_array_filter_array_filter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/examples/array-filter/array-filter.component */ "./src/app/components/examples/array-filter/array-filter.component.ts");
/* harmony import */ var _components_examples_property_options_property_options_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/examples/property-options/property-options.component */ "./src/app/components/examples/property-options/property-options.component.ts");
/* harmony import */ var _components_examples_brief_exporter_brief_exporter_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/examples/brief-exporter/brief-exporter.component */ "./src/app/components/examples/brief-exporter/brief-exporter.component.ts");
/* harmony import */ var _components_examples_custom_exporter_custom_exporter_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/examples/custom-exporter/custom-exporter.component */ "./src/app/components/examples/custom-exporter/custom-exporter.component.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm5/angular-notifier.js");






// tslint:disable-next-line:max-line-length

















function markedOptions() {
    return {
        gfm: false,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
    };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _components_exporter_exporter_component__WEBPACK_IMPORTED_MODULE_10__["ExporterComponent"],
                _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_11__["FilterComponent"],
                _components_example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_15__["ExampleViewerComponent"],
                _components_examples_array_filter_array_filter_component__WEBPACK_IMPORTED_MODULE_18__["ArrayFilterComponent"],
                _components_examples_custom_column_filter_custom_column_filter_component__WEBPACK_IMPORTED_MODULE_17__["CustomColumnFilterComponent"],
                _components_examples_simple_filter_simple_filter_component__WEBPACK_IMPORTED_MODULE_16__["SimpleFilterComponent"],
                _components_examples_property_options_property_options_component__WEBPACK_IMPORTED_MODULE_19__["PropertyOptionsComponent"],
                _components_examples_brief_exporter_brief_exporter_component__WEBPACK_IMPORTED_MODULE_20__["BriefExporterComponent"],
                _components_examples_custom_exporter_custom_exporter_component__WEBPACK_IMPORTED_MODULE_21__["CustomExporterComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__["PortalModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkdownModule"].forRoot({
                    loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
                    markedOptions: {
                        provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkedOptions"],
                        useFactory: markedOptions,
                    },
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_22__["NotifierModule"].withConfig({
                    theme: 'material',
                    behaviour: {
                        autoHide: 2000,
                        showDismissButton: false
                    },
                    position: {
                        horizontal: {
                            position: 'right'
                        }
                    }
                }),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                mat_table_filter__WEBPACK_IMPORTED_MODULE_1__["MatTableFilterModule"],
                mat_table_exporter__WEBPACK_IMPORTED_MODULE_9__["MatTableExporterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
            entryComponents: [
                _components_examples_array_filter_array_filter_component__WEBPACK_IMPORTED_MODULE_18__["ArrayFilterComponent"],
                _components_examples_brief_exporter_brief_exporter_component__WEBPACK_IMPORTED_MODULE_20__["BriefExporterComponent"],
                _components_examples_custom_column_filter_custom_column_filter_component__WEBPACK_IMPORTED_MODULE_17__["CustomColumnFilterComponent"],
                _components_examples_custom_exporter_custom_exporter_component__WEBPACK_IMPORTED_MODULE_21__["CustomExporterComponent"],
                _components_examples_simple_filter_simple_filter_component__WEBPACK_IMPORTED_MODULE_16__["SimpleFilterComponent"],
                _components_examples_property_options_property_options_component__WEBPACK_IMPORTED_MODULE_19__["PropertyOptionsComponent"],
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-to-showcase.ts":
/*!***********************************************!*\
  !*** ./src/app/components/add-to-showcase.ts ***!
  \***********************************************/
/*! exports provided: showCaseExamples, AddToShowCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCaseExamples", function() { return showCaseExamples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToShowCase", function() { return AddToShowCase; });
var showCaseExamples = new Map();
function AddToShowCase(categoryName, fileName, description) {
    return function (type) {
        type.prototype.fileName = fileName;
        type.prototype.description = description;
        var categoryArray = showCaseExamples.get(categoryName);
        if (!categoryArray) {
            var examples = new Array();
            examples.push(type);
            showCaseExamples.set(categoryName, examples);
        }
        else {
            categoryArray.push(type);
        }
        return type;
    };
}


/***/ }),

/***/ "./src/app/components/base-component.ts":
/*!**********************************************!*\
  !*** ./src/app/components/base-component.ts ***!
  \**********************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
var BaseComponent = /** @class */ (function () {
    function BaseComponent(notifierService) {
        this.notifierService = notifierService;
    }
    BaseComponent.prototype.onCopyClipboard = function () {
        this.notifierService.notify('success', 'Copied!');
    };
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/components/example-viewer/example-viewer.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/example-viewer/example-viewer.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: block;\r\n  padding: 20px 0;\r\n}\r\n\r\n\r\n.docs-example-viewer-title {\r\n  align-content: center;\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 8px 20px;\r\n  color: rgba(0,0,0,.54);\r\n  background: rgba(0,0,0,.03);\r\n}\r\n\r\n\r\n.docs-example-viewer-title-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n\r\n.docs-example-source-copy {\r\n  position: absolute;\r\n  top: 8px;\r\n  display: none;\r\n}\r\n\r\n\r\n.docs-example-source {\r\n  padding: 0 30px 10px 30px;\r\n  min-height: 150px;\r\n}\r\n\r\n\r\n.docs-example-viewer-body {\r\n  padding: 30px;\r\n}\r\n\r\n\r\n.docs-example-viewer-wrapper {\r\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);\r\n  margin: 4px;\r\n}\r\n\r\n\r\n.docs-example-source-copy {\r\n  right: 8px;\r\n}\r\n\r\n\r\n.docs-example-source {\r\n  overflow: auto;\r\n}\r\n\r\n\r\n::ng-deep .docs-source-tabs > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels {\r\n  justify-content: flex-start !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlLXZpZXdlci9leGFtcGxlLXZpZXdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7OztBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixhQUFhO0FBQ2Y7OztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUVBO0VBQ0Usc0VBQXNFO0VBQ3RFLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4YW1wbGUtdmlld2VyL2V4YW1wbGUtdmlld2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG5cclxuLmRvY3MtZXhhbXBsZS12aWV3ZXItdGl0bGUge1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjU0KTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4wMyk7XHJcbn1cclxuXHJcbi5kb2NzLWV4YW1wbGUtdmlld2VyLXRpdGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5kb2NzLWV4YW1wbGUtc291cmNlLWNvcHkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDhweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLmRvY3MtZXhhbXBsZS1zb3VyY2Uge1xyXG4gIHBhZGRpbmc6IDAgMzBweCAxMHB4IDMwcHg7XHJcbiAgbWluLWhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi5kb2NzLWV4YW1wbGUtdmlld2VyLWJvZHkge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5kb2NzLWV4YW1wbGUtdmlld2VyLXdyYXBwZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpLCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbn1cclxuXHJcblxyXG4uZG9jcy1leGFtcGxlLXNvdXJjZS1jb3B5IHtcclxuICByaWdodDogOHB4O1xyXG59XHJcblxyXG4uZG9jcy1leGFtcGxlLXNvdXJjZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZG9jcy1zb3VyY2UtdGFicyA+IC5tYXQtdGFiLWhlYWRlciA+IC5tYXQtdGFiLWxhYmVsLWNvbnRhaW5lciA+IC5tYXQtdGFiLWxpc3QgPiAubWF0LXRhYi1sYWJlbHMge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/example-viewer/example-viewer.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/example-viewer/example-viewer.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"docs-example-viewer-wrapper\">\r\n    <div class=\"docs-example-viewer-title\">\r\n      <div class=\"docs-example-viewer-title-spacer\">{{description}}</div>\r\n\r\n      <button mat-icon-button type=\"button\" (click)=\"toggleSource()\"\r\n              [matTooltip]=\"'View source'\">\r\n        <mat-icon>\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fit=\"\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\">\r\n            <path fill=\"none\" d=\"M0 0h24v24H0V0z\"></path>\r\n            <path d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"></path>\r\n          </svg>\r\n        </mat-icon>\r\n      </button>\r\n      <!-- <button mat-icon-button type=\"button\" [matTooltip]=\"'Edit in Stackblitz'\">\r\n        <mat-icon>\r\n          open_in_new\r\n        </mat-icon>\r\n      </button> -->\r\n  </div>\r\n\r\n    <div class=\"docs-example-viewer-source\" *ngIf=\"showSource\">\r\n      <mat-tab-group class=\"docs-source-tabs\">\r\n        <mat-tab label=\"HTML\">\r\n            <markdown [src]=\"htmlDoc\"></markdown>\r\n        </mat-tab>\r\n        <mat-tab label=\"TS\">\r\n            <markdown [src]=\"tsDoc\"></markdown>\r\n        </mat-tab>\r\n        <mat-tab label=\"CSS\">\r\n            <markdown [src]=\"cssDoc\"></markdown>\r\n          </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n    <div class=\"docs-example-viewer-body\">\r\n      <ng-template [cdkPortalOutlet]=\"example\"></ng-template>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/example-viewer/example-viewer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/example-viewer/example-viewer.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExampleViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleViewerComponent", function() { return ExampleViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");



var ExampleViewerComponent = /** @class */ (function () {
    function ExampleViewerComponent() {
    }
    ExampleViewerComponent_1 = ExampleViewerComponent;
    Object.defineProperty(ExampleViewerComponent.prototype, "exampleType", {
        set: function (type) {
            this.example = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](type);
            this.fileName = type.prototype.fileName;
            this.description = type.prototype.description;
            // this.stackBlitzLink = type.prototype.stackBlitzLink;
            this.htmlDoc = this.resolveFilePath('.html'); // Will be replaced with a more convinient webpack/bazel solution
            this.tsDoc = this.resolveFilePath('.js');
            this.cssDoc = this.resolveFilePath('.css');
        },
        enumerable: true,
        configurable: true
    });
    ExampleViewerComponent.prototype.toggleSource = function () {
        this.showSource = !this.showSource;
    };
    ExampleViewerComponent.prototype.resolveFilePath = function (extension) {
        return ExampleViewerComponent_1.ASSETS_ROOT + ExampleViewerComponent_1.SOURCES_PATH +
            this.fileName.replace('.component', '/') +
            this.fileName + extension;
    };
    var ExampleViewerComponent_1;
    ExampleViewerComponent.ASSETS_ROOT = './assets/';
    ExampleViewerComponent.SOURCES_PATH = 'example-sources/';
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ExampleViewerComponent.prototype, "exampleType", null);
    ExampleViewerComponent = ExampleViewerComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example-viewer',
            template: __webpack_require__(/*! ./example-viewer.component.html */ "./src/app/components/example-viewer/example-viewer.component.html"),
            styles: [__webpack_require__(/*! ./example-viewer.component.css */ "./src/app/components/example-viewer/example-viewer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExampleViewerComponent);
    return ExampleViewerComponent;
}());



/***/ }),

/***/ "./src/app/components/examples/array-filter/array-filter.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/examples/array-filter/array-filter.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n  margin-top:15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlcy9hcnJheS1maWx0ZXIvYXJyYXktZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlcy9hcnJheS1maWx0ZXIvYXJyYXktZmlsdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLXRvcDoxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/examples/array-filter/array-filter.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/examples/array-filter/array-filter.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Demonstrates filtering of an Array type column. Enter Size chips for filtering.</p>\n\n<mat-table matTableFilter [exampleEntity]=\"filterEntity\" [filterType]=\"filterType\" [dataSource]=\"dataSource\"\n  class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"category\">\n    <mat-header-cell *matHeaderCellDef>\n      <mat-form-field appearance=\"outline\">\n        <input matInput placeholder=\"Category\" [(ngModel)]=\"filterEntity.category\">\n      </mat-form-field>\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.category}} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"brand\">\n    <mat-header-cell *matHeaderCellDef>\n      <mat-form-field appearance=\"outline\">\n        <input matInput placeholder=\"Product Brand\" [(ngModel)]=\"filterEntity.brand\">\n      </mat-form-field>\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.brand}} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"availableSizes\">\n    <mat-header-cell *matHeaderCellDef>\n\n      <mat-form-field class=\"example-chip-list\">\n        <mat-chip-list #chipList aria-label=\"Fruit selection\">\n          <mat-chip *ngFor=\"let size of filterEntity.availableSizes\" [selectable]=\"true\" [removable]=\"true\"\n            (removed)=\"remove(size)\">\n            {{size}}\n            <mat-icon matChipRemove>cancel</mat-icon>\n          </mat-chip>\n          <input placeholder=\"Add Size\" [matChipInputFor]=\"chipList\"\n            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"true\"\n            (matChipInputTokenEnd)=\"add($event)\">\n        </mat-chip-list>\n      </mat-form-field>\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.availableSizes}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n"

/***/ }),

/***/ "./src/app/components/examples/array-filter/array-filter.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/examples/array-filter/array-filter.component.ts ***!
  \****************************************************************************/
/*! exports provided: Product, ArrayFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayFilterComponent", function() { return ArrayFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mat-table-filter */ "./dist/mat-table-filter/fesm5/mat-table-filter.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_to_showcase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../add-to-showcase */ "./src/app/components/add-to-showcase.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");






var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());

var PRODUCTS = [
    { category: 'T-Shirt', brand: 'X', availableSizes: ['S', 'M', 'L', 'XL'] },
    { category: 'T-Shirt', brand: 'Y', availableSizes: ['S', 'L', 'XL'] },
    { category: 'T-Shirt', brand: 'Z', availableSizes: ['XL'] },
    { category: 'Jean', brand: 'X', availableSizes: ['S', 'M', 'L', 'XL'] },
    { category: 'Jean', brand: 'Y', availableSizes: ['S', 'M'] },
    { category: 'Jean', brand: 'Z', availableSizes: ['S', 'M', 'L'] },
    { category: 'Jean', brand: 'B', availableSizes: ['S', 'M', 'L'] },
    { category: 'Jacket', brand: 'X', availableSizes: ['S', 'L', 'XL'] },
    { category: 'Jacket', brand: 'Z', availableSizes: ['S'] },
    { category: 'Pants', brand: 'X', availableSizes: ['S', 'M', 'L', 'XL'] },
    { category: 'Pants', brand: 'Y', availableSizes: ['L', 'XL'] },
    { category: 'Pants', brand: 'Z', availableSizes: ['S'] },
    { category: 'Hat', brand: 'X', availableSizes: ['S', 'M', 'L'] },
    { category: 'Skirt', brand: 'X', availableSizes: ['S', 'M', 'L', 'XL'] },
    { category: 'Skirt', brand: 'Y', availableSizes: ['S', 'M', 'L'] }
];
var ArrayFilterComponent = /** @class */ (function () {
    function ArrayFilterComponent() {
        this.displayedColumns = ['category', 'brand', 'availableSizes'];
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
    }
    ArrayFilterComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.filterEntity.availableSizes.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    ArrayFilterComponent.prototype.remove = function (size) {
        var index = this.filterEntity.availableSizes.indexOf(size);
        if (index >= 0) {
            this.filterEntity.availableSizes.splice(index, 1);
        }
    };
    ArrayFilterComponent.prototype.ngOnInit = function () {
        this.filterEntity = new Product();
        this.filterEntity.availableSizes = new Array(); // DO NOT FORGET TO INIT THE ARRAY
        this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_1__["MatTableFilter"].ANYWHERE;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](PRODUCTS);
    };
    ArrayFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-array-filter',
            template: __webpack_require__(/*! ./array-filter.component.html */ "./src/app/components/examples/array-filter/array-filter.component.html"),
            styles: [__webpack_require__(/*! ./array-filter.component.css */ "./src/app/components/examples/array-filter/array-filter.component.css")]
        }),
        Object(_add_to_showcase__WEBPACK_IMPORTED_MODULE_3__["AddToShowCase"])('filter', 'array-filter.component', 'Array Filter')
    ], ArrayFilterComponent);
    return ArrayFilterComponent;
}());



/***/ }),

/***/ "./src/app/components/examples/brief-exporter/brief-exporter.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/examples/brief-exporter/brief-exporter.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlcy9icmllZi1leHBvcnRlci9icmllZi1leHBvcnRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4YW1wbGVzL2JyaWVmLWV4cG9ydGVyL2JyaWVmLWV4cG9ydGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtdGFibGUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/examples/brief-exporter/brief-exporter.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/examples/brief-exporter/brief-exporter.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Briefly demonstrates all exporting functionalities of mat-table-exporter.</p>\n\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table matTableExporter [dataSource]=\"dataSource\" #exporter=\"matTableExporter\" [hiddenColumns]=\"[0]\">\n\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"surname\">\n      <mat-header-cell *matHeaderCellDef> Surname </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.surname}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"birth\">\n      <mat-header-cell *matHeaderCellDef> Birth </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.birth}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n<div>\n  <button mat-raised-button (click)=\"exporter.exportTable('xlsx', {sheet: 'sheet_name', Props: {Author: 'Talha'}, columnWidths: [50, 5, 3]})\">Excel</button>\n  <button mat-raised-button (click)=\"exporter.exportTable('csv')\">Csv</button>\n  <button mat-raised-button (click)=\"exporter.exportTable('json')\">Json</button>\n  <button mat-raised-button (click)=\"exporter.exportTable('txt')\">Txt</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/examples/brief-exporter/brief-exporter.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/examples/brief-exporter/brief-exporter.component.ts ***!
  \********************************************************************************/
/*! exports provided: BriefExporterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BriefExporterComponent", function() { return BriefExporterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _add_to_showcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../add-to-showcase */ "./src/app/components/add-to-showcase.ts");





var BriefExporterComponent = /** @class */ (function () {
    function BriefExporterComponent() {
        this.title = 'mte-test';
        this.displayedColumns = ['position', 'name', 'surname', 'birth'];
    }
    BriefExporterComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], BriefExporterComponent.prototype, "paginator", void 0);
    BriefExporterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brief-exporter',
            template: __webpack_require__(/*! ./brief-exporter.component.html */ "./src/app/components/examples/brief-exporter/brief-exporter.component.html"),
            styles: [__webpack_require__(/*! ./brief-exporter.component.css */ "./src/app/components/examples/brief-exporter/brief-exporter.component.css")]
        }),
        Object(_add_to_showcase__WEBPACK_IMPORTED_MODULE_4__["AddToShowCase"])('exporter', 'brief-exporter.component', 'Overall Exporting Example')
    ], BriefExporterComponent);
    return BriefExporterComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Albert', surname: 'Einstein', birth: '1879' },
    { position: 2, name: 'Marie', surname: 'Curie', birth: '1867' },
    { position: 3, name: 'Enrico', surname: 'Fermi', birth: '1901' },
    { position: 4, name: 'Dmitri', surname: 'Mendeleev', birth: '1834' },
    { position: 5, name: 'Alfred', surname: 'Nobel', birth: '1833' },
    { position: 6, name: 'Ernest', surname: 'Lawrence', birth: '1901' },
    { position: 7, name: 'Glenn', surname: 'Seaborg', birth: '1912' },
    { position: 8, name: 'Niels', surname: 'Bohr', birth: '1885' },
    { position: 9, name: 'Lise', surname: 'Meitner', birth: '1878' },
    { position: 10, name: 'Wilhelm', surname: 'Röntgen', birth: '1845' },
    { position: 11, name: 'Nicolaus', surname: 'Copernicus', birth: '1473' },
    { position: 12, name: 'Georgy', surname: 'Flyorov', birth: '1913' },
    { position: 13, name: 'Yuri', surname: 'Oganessian', birth: '1933' },
    { position: 14, name: 'Johan', surname: 'Gadolin', birth: '1760' },
    { position: 15, name: 'Pierre', surname: 'Curie', birth: '1859' },
];


/***/ }),

/***/ "./src/app/components/examples/custom-column-filter/custom-column-filter.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/examples/custom-column-filter/custom-column-filter.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n  margin-top:15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlcy9jdXN0b20tY29sdW1uLWZpbHRlci9jdXN0b20tY29sdW1uLWZpbHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhhbXBsZXMvY3VzdG9tLWNvbHVtbi1maWx0ZXIvY3VzdG9tLWNvbHVtbi1maWx0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tdG9wOjE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/examples/custom-column-filter/custom-column-filter.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/examples/custom-column-filter/custom-column-filter.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Demonstrates a custom filtering requirement where only some part of the string needs to be filtered.</p>\n<p>Flight Route is filtered according to the custom filtering predicate provided with propertyOptions.</p>\n<mat-table matTableFilter [exampleEntity]=\"filterEntity\" [propertyOptions]=\"propertyOptions\"\n[filterType]=\"filterType\" [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef>\n      <mat-form-field appearance=\"outline\">\n        <input matInput placeholder=\"Flight Route\" [(ngModel)]=\"filterEntity.name\">\n      </mat-form-field>\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"journeyTime\">\n    <mat-header-cell *matHeaderCellDef>\n      Journey Time\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.journeyTime}} </mat-cell>\n  </ng-container>\n\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n"

/***/ }),

/***/ "./src/app/components/examples/custom-column-filter/custom-column-filter.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/examples/custom-column-filter/custom-column-filter.component.ts ***!
  \********************************************************************************************/
/*! exports provided: Route, CustomColumnFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomColumnFilterComponent", function() { return CustomColumnFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_to_showcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../add-to-showcase */ "./src/app/components/add-to-showcase.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mat-table-filter */ "./dist/mat-table-filter/fesm5/mat-table-filter.js");





var Route = /** @class */ (function () {
    function Route() {
    }
    return Route;
}());

var ROUTES = [
    { name: 'FRA-IST-JFK', journeyTime: '10:00' },
    { name: 'MLE-IST-ESB', journeyTime: '10:30' },
    { name: 'IST-ESB-GZT', journeyTime: '01:30' },
    { name: 'IST-ESB-GZT', journeyTime: '01:30' },
    { name: 'JFK-SAW-AYT', journeyTime: '02:45' },
    { name: 'JFK-SAW-FRA', journeyTime: '02:45' },
    { name: 'JFK-SAW-FRA', journeyTime: '02:45' }
];
var CustomColumnFilterComponent = /** @class */ (function () {
    function CustomColumnFilterComponent() {
        this.displayedColumns = ['name', 'journeyTime'];
    }
    CustomColumnFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterEntity = new Route();
        this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_4__["MatTableFilter"].ANYWHERE;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ROUTES);
        this.propertyOptions = { name: function (routeName) {
                return routeName.split('-')[1] === _this.filterEntity.name; // filter for only the station in the middle
            } };
    };
    CustomColumnFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simple-filter',
            template: __webpack_require__(/*! ./custom-column-filter.component.html */ "./src/app/components/examples/custom-column-filter/custom-column-filter.component.html"),
            styles: [__webpack_require__(/*! ./custom-column-filter.component.css */ "./src/app/components/examples/custom-column-filter/custom-column-filter.component.css")]
        }),
        Object(_add_to_showcase__WEBPACK_IMPORTED_MODULE_2__["AddToShowCase"])('filter', 'custom-column-filter.component', 'Custom Property Predicate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomColumnFilterComponent);
    return CustomColumnFilterComponent;
}());



/***/ }),

/***/ "./src/app/components/examples/custom-exporter/custom-exporter.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/examples/custom-exporter/custom-exporter.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlcy9jdXN0b20tZXhwb3J0ZXIvY3VzdG9tLWV4cG9ydGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhhbXBsZXMvY3VzdG9tLWV4cG9ydGVyL2N1c3RvbS1leHBvcnRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LXRhYmxlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/examples/custom-exporter/custom-exporter.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/examples/custom-exporter/custom-exporter.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Demonstrates the use of a custom exporter implementation.</p>\n\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table matTableExporter [dataSource]=\"dataSource\" [exporter]= \"customExporter\" #exportDirective=\"matTableExporter\" [hiddenColumns]=\"[0]\" >\n\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"surname\">\n      <mat-header-cell *matHeaderCellDef> Surname </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.surname}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"birth\">\n      <mat-header-cell *matHeaderCellDef> Birth </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.birth}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n<div>\n  <button mat-raised-button (click)=\"exportDirective.exportTable('other')\">Custom Export</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/examples/custom-exporter/custom-exporter.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/examples/custom-exporter/custom-exporter.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomExporter, CustomExporterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomExporter", function() { return CustomExporter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomExporterComponent", function() { return CustomExporterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _add_to_showcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../add-to-showcase */ "./src/app/components/add-to-showcase.ts");





var CustomExporter = /** @class */ (function () {
    function CustomExporter() {
    }
    CustomExporter.prototype.export = function (rows, options) {
        console.log(rows);
    };
    return CustomExporter;
}());

var CustomExporterComponent = /** @class */ (function () {
    function CustomExporterComponent() {
        this.title = 'mte-test';
        this.displayedColumns = ['position', 'name', 'surname', 'birth'];
    }
    CustomExporterComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.customExporter = new CustomExporter(); // YOU CAN BENEFIT FROM DI TOO.
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], CustomExporterComponent.prototype, "paginator", void 0);
    CustomExporterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-exporter',
            template: __webpack_require__(/*! ./custom-exporter.component.html */ "./src/app/components/examples/custom-exporter/custom-exporter.component.html"),
            styles: [__webpack_require__(/*! ./custom-exporter.component.css */ "./src/app/components/examples/custom-exporter/custom-exporter.component.css")]
        }),
        Object(_add_to_showcase__WEBPACK_IMPORTED_MODULE_4__["AddToShowCase"])('exporter', 'custom-exporter.component', 'Custom Exporting Implementation')
    ], CustomExporterComponent);
    return CustomExporterComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Albert', surname: 'Einstein', birth: '1879' },
    { position: 2, name: 'Marie', surname: 'Curie', birth: '1867' },
    { position: 3, name: 'Enrico', surname: 'Fermi', birth: '1901' },
    { position: 4, name: 'Dmitri', surname: 'Mendeleev', birth: '1834' },
    { position: 5, name: 'Alfred', surname: 'Nobel', birth: '1833' },
    { position: 6, name: 'Ernest', surname: 'Lawrence', birth: '1901' },
    { position: 7, name: 'Glenn', surname: 'Seaborg', birth: '1912' },
    { position: 8, name: 'Niels', surname: 'Bohr', birth: '1885' },
    { position: 9, name: 'Lise', surname: 'Meitner', birth: '1878' },
    { position: 10, name: 'Wilhelm', surname: 'Röntgen', birth: '1845' },
    { position: 11, name: 'Nicolaus', surname: 'Copernicus', birth: '1473' },
    { position: 12, name: 'Georgy', surname: 'Flyorov', birth: '1913' },
    { position: 13, name: 'Yuri', surname: 'Oganessian', birth: '1933' },
    { position: 14, name: 'Johan', surname: 'Gadolin', birth: '1760' },
    { position: 15, name: 'Pierre', surname: 'Curie', birth: '1859' },
];


/***/ }),

/***/ "./src/app/components/examples/property-options/property-options.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/examples/property-options/property-options.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n  margin-top:15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlcy9wcm9wZXJ0eS1vcHRpb25zL3Byb3BlcnR5LW9wdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4YW1wbGVzL3Byb3BlcnR5LW9wdGlvbnMvcHJvcGVydHktb3B0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi10b3A6MTVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/examples/property-options/property-options.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/examples/property-options/property-options.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Demonstrates how to handle filtering for specific properties of table items.</p>\n<p>In this example the table lists space-crafts. A space-craft has a captain. A captain has some properties.\n  Filtering for captain's name is done with an exact match. The rest of the properties are filtered with ANYWHERE filter type.\n</p>\n\n<!-- Filtering properties for captain.name are set to be an exact match by using propertyOptions binding-->\n<mat-table matTableFilter [exampleEntity]=\"filterEntity\" [propertyOptions]=\"propertyOptions\"\n[filterType]=\"filterType\" [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef>\n      <mat-form-field appearance=\"outline\">\n        <input matInput placeholder=\"Name\" [(ngModel)]=\"filterEntity.name\">\n      </mat-form-field>\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"captainName\">\n    <mat-header-cell *matHeaderCellDef>\n      <mat-form-field appearance=\"outline\">\n        <input matInput placeholder=\"Captain Name\" [(ngModel)]=\"filterEntity.captain.name\">\n      </mat-form-field>\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.captain.name}} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"captainSurname\">\n    <mat-header-cell *matHeaderCellDef>\n      <mat-form-field appearance=\"outline\">\n        <input matInput placeholder=\"Captain Surname\" [(ngModel)]=\"filterEntity.captain.surname\">\n      </mat-form-field>\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.captain.surname}} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"isConstitutionClass\">\n      <mat-header-cell *matHeaderCellDef>\n          <mat-slide-toggle\n          class=\"constitution-padding\"\n          [(ngModel)]=\"filterEntity.isConstitutionClass\">\n        Constitution Class\n      </mat-slide-toggle>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.isConstitutionClass}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n"

/***/ }),

/***/ "./src/app/components/examples/property-options/property-options.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/examples/property-options/property-options.component.ts ***!
  \************************************************************************************/
/*! exports provided: Captain, SpaceCraft, PropertyOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Captain", function() { return Captain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceCraft", function() { return SpaceCraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyOptionsComponent", function() { return PropertyOptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_to_showcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../add-to-showcase */ "./src/app/components/add-to-showcase.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mat-table-filter */ "./dist/mat-table-filter/fesm5/mat-table-filter.js");





var Captain = /** @class */ (function () {
    function Captain() {
    }
    return Captain;
}());

var SpaceCraft = /** @class */ (function () {
    function SpaceCraft() {
    }
    return SpaceCraft;
}());

var SPACECRAFT_DATA = [
    { name: 'Endurance', isConstitutionClass: false, captain: { name: 'Joseph', surname: 'Cooper' } },
    { name: 'Enterprise', isConstitutionClass: true, captain: { name: 'Christopher', surname: 'Pike' } },
    { name: 'Enterprise', isConstitutionClass: true, captain: { name: 'Talha', surname: 'Türe' } },
    { name: 'Discovery', isConstitutionClass: true, captain: { name: 'Christopher', surname: 'Pike' } },
    { name: 'Enterprise', isConstitutionClass: false, captain: { name: 'Jean-Luc', surname: 'Pickard' } }
];
var PropertyOptionsComponent = /** @class */ (function () {
    function PropertyOptionsComponent() {
        this.displayedColumns = ['name', 'captainName', 'captainSurname', 'isConstitutionClass'];
    }
    PropertyOptionsComponent.prototype.ngOnInit = function () {
        // Do not forget to initialize your object and it's non-primitive properties
        this.filterEntity = new SpaceCraft();
        this.filterEntity.captain = new Captain();
        this.filterEntity.isConstitutionClass = false; // leaving a filter property undefined means you want all the data without filtering
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](SPACECRAFT_DATA);
        // captain.name property filtering needs an exact match with case sensitiveness
        // All other properties will be filtered with ANYWHERE search
        this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_4__["MatTableFilter"].ANYWHERE;
        this.propertyOptions = { 'captain.name': { filterType: mat_table_filter__WEBPACK_IMPORTED_MODULE_4__["MatTableFilter"].EQUALS, caseSensitive: true } };
    };
    PropertyOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property-options',
            template: __webpack_require__(/*! ./property-options.component.html */ "./src/app/components/examples/property-options/property-options.component.html"),
            styles: [__webpack_require__(/*! ./property-options.component.css */ "./src/app/components/examples/property-options/property-options.component.css")]
        }),
        Object(_add_to_showcase__WEBPACK_IMPORTED_MODULE_2__["AddToShowCase"])('filter', 'property-options.component', 'Changing Property Options'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PropertyOptionsComponent);
    return PropertyOptionsComponent;
}());



/***/ }),

/***/ "./src/app/components/examples/simple-filter/simple-filter.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/examples/simple-filter/simple-filter.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".constitution-padding{\r\n  padding-left:15px;\r\n}\r\n\r\nmat-form-field {\r\n  margin-top:15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlcy9zaW1wbGUtZmlsdGVyL3NpbXBsZS1maWx0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4YW1wbGVzL3NpbXBsZS1maWx0ZXIvc2ltcGxlLWZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnN0aXR1dGlvbi1wYWRkaW5ne1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLXRvcDoxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/examples/simple-filter/simple-filter.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/examples/simple-filter/simple-filter.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Briefly demonstrates the basic usage of mat-table-filter.</p>\n<mat-table matTableFilter [exampleEntity]=\"filterEntity\"\n[filterType]=\"filterType\" [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef>\n      <mat-form-field appearance=\"outline\">\n        <input matInput placeholder=\"Name\" [(ngModel)]=\"filterEntity.name\">\n      </mat-form-field>\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"captainName\">\n    <mat-header-cell *matHeaderCellDef>\n      <mat-form-field appearance=\"outline\">\n        <input matInput placeholder=\"Captain Name\" [(ngModel)]=\"filterEntity.captain.name\">\n      </mat-form-field>\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.captain.name}} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"captainSurname\">\n    <mat-header-cell *matHeaderCellDef>\n      <mat-form-field appearance=\"outline\">\n        <input matInput placeholder=\"Captain Surname\" [(ngModel)]=\"filterEntity.captain.surname\">\n      </mat-form-field>\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.captain.surname}} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"isConstitutionClass\">\n      <mat-header-cell *matHeaderCellDef>\n          <mat-slide-toggle\n          class=\"constitution-padding\"\n          [(ngModel)]=\"filterEntity.isConstitutionClass\">\n        Constitution Class\n      </mat-slide-toggle>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.isConstitutionClass}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n"

/***/ }),

/***/ "./src/app/components/examples/simple-filter/simple-filter.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/examples/simple-filter/simple-filter.component.ts ***!
  \******************************************************************************/
/*! exports provided: Captain, SpaceCraft, SimpleFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Captain", function() { return Captain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceCraft", function() { return SpaceCraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleFilterComponent", function() { return SimpleFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_to_showcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../add-to-showcase */ "./src/app/components/add-to-showcase.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mat-table-filter */ "./dist/mat-table-filter/fesm5/mat-table-filter.js");





var Captain = /** @class */ (function () {
    function Captain() {
    }
    return Captain;
}());

var SpaceCraft = /** @class */ (function () {
    function SpaceCraft() {
    }
    return SpaceCraft;
}());

var SPACECRAFT_DATA = [
    { name: 'Endurance', isConstitutionClass: false, captain: { name: 'Joseph', surname: 'Cooper' } },
    { name: 'Enterprise', isConstitutionClass: true, captain: { name: 'Christopher', surname: 'Pike' } },
    { name: 'Enterprise', isConstitutionClass: true, captain: { name: 'Talha', surname: 'Türe' } },
    { name: 'Discovery', isConstitutionClass: true, captain: { name: 'Christopher', surname: 'Pike' } },
    { name: 'Enterprise', isConstitutionClass: false, captain: { name: 'Jean-Luc', surname: 'Pickard' } }
];
var SimpleFilterComponent = /** @class */ (function () {
    function SimpleFilterComponent() {
        this.displayedColumns = ['name', 'captainName', 'captainSurname', 'isConstitutionClass'];
    }
    SimpleFilterComponent.prototype.ngOnInit = function () {
        // Do not forget to initialize your object and it's non-primitive properties
        this.filterEntity = new SpaceCraft();
        this.filterEntity.captain = new Captain();
        this.filterEntity.isConstitutionClass = false; // leaving a filter property undefined means you want all the data without filtering
        this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_4__["MatTableFilter"].ANYWHERE;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](SPACECRAFT_DATA);
    };
    SimpleFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simple-filter',
            template: __webpack_require__(/*! ./simple-filter.component.html */ "./src/app/components/examples/simple-filter/simple-filter.component.html"),
            styles: [__webpack_require__(/*! ./simple-filter.component.css */ "./src/app/components/examples/simple-filter/simple-filter.component.css")]
        }),
        Object(_add_to_showcase__WEBPACK_IMPORTED_MODULE_2__["AddToShowCase"])('filter', 'simple-filter.component', 'Simple Filter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SimpleFilterComponent);
    return SimpleFilterComponent;
}());



/***/ }),

/***/ "./src/app/components/exporter/exporter.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/exporter/exporter.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host\r\ntable {\r\n  border-collapse: collapse;\r\n  border-radius: 2px;\r\n  border-spacing: 0;\r\n  margin: 10px;\r\n  width: 98%;\r\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);\r\n}\r\n:host\r\nth {\r\n  background: #f5f5f5;\r\n  font-weight: 400;\r\n  max-width: 100px;\r\n  padding: 13px 32px;\r\n  text-align: left;\r\n}\r\n:host\r\ntd {\r\n  font-weight: 400;\r\n  padding: 8px 16px;\r\n}\r\n@media (max-width: 720px) {\r\n  :host\r\n  table {\r\n    margin: 0 0 32px 0;\r\n  }\r\n  :host\r\n  th {\r\n    background: #f5f5f5;\r\n    padding: 6px 16px;\r\n  }\r\n  :host\r\n  td {\r\n    padding: 4px 8px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlLXN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFVBQVU7RUFDVixzRUFBc0U7QUFDeEU7QUFDQTs7RUFFRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUdBO0VBQ0U7O0lBRUUsa0JBQWtCO0VBQ3BCO0VBQ0E7O0lBRUUsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjtFQUNBOztJQUVFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBvcnRlci9leHBvcnRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3RcclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB3aWR0aDogOTglO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpLCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuOmhvc3RcclxudGgge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbjpob3N0XHJcbnRkIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgOmhvc3RcclxuICB0YWJsZSB7XHJcbiAgICBtYXJnaW46IDAgMCAzMnB4IDA7XHJcbiAgfVxyXG4gIDpob3N0XHJcbiAgdGgge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gIH1cclxuICA6aG9zdFxyXG4gIHRkIHtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/exporter/exporter.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/exporter/exporter.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"docs-page\">\n<mat-tab-group mat-align-tabs=\"start\">\n  <mat-tab label=\"Overview\">\n    <markdown (buttonClick)=\"onCopyClipboard()\" ngPreserveWhitespaces [src]=\"'assets/docs/exporter/README.md'\"></markdown>\n  </mat-tab>\n  <mat-tab label=\"API\">\n    <markdown (buttonClick)=\"onCopyClipboard()\" ngPreserveWhitespaces [src]=\"'assets/docs/exporter/API.md'\"></markdown>\n  </mat-tab>\n  <mat-tab label=\"Examples\">\n    <app-example-viewer *ngFor=\"let example of examples\" [exampleType]=\"example\"></app-example-viewer>\n  </mat-tab>\n</mat-tab-group>\n</div>\n"

/***/ }),

/***/ "./src/app/components/exporter/exporter.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/exporter/exporter.component.ts ***!
  \***********************************************************/
/*! exports provided: ExporterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExporterComponent", function() { return ExporterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../base-component */ "./src/app/components/base-component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_to_showcase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-to-showcase */ "./src/app/components/add-to-showcase.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm5/angular-notifier.js");





var ExporterComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExporterComponent, _super);
    function ExporterComponent(notifierService) {
        return _super.call(this, notifierService) || this;
    }
    ExporterComponent.prototype.ngOnInit = function () {
        this.examples = _add_to_showcase__WEBPACK_IMPORTED_MODULE_3__["showCaseExamples"].get('exporter');
    };
    ExporterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-exporter',
            template: __webpack_require__(/*! ./exporter.component.html */ "./src/app/components/exporter/exporter.component.html"),
            styles: [__webpack_require__(/*! ./exporter.component.css */ "./src/app/components/exporter/exporter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]])
    ], ExporterComponent);
    return ExporterComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/filter/filter.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/filter/filter.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host\r\ntable {\r\n  border-collapse: collapse;\r\n  border-radius: 2px;\r\n  border-spacing: 0;\r\n  margin: 10px;\r\n  width: 98%;\r\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);\r\n}\r\n:host\r\nth {\r\n  background: #f5f5f5;\r\n  font-weight: 400;\r\n  max-width: 100px;\r\n  padding: 13px 32px;\r\n  text-align: left;\r\n}\r\n:host\r\ntd {\r\n  font-weight: 400;\r\n  padding: 8px 16px;\r\n}\r\n@media (max-width: 720px) {\r\n  :host\r\n  table {\r\n    margin: 0 0 32px 0;\r\n  }\r\n  :host\r\n  th {\r\n    background: #f5f5f5;\r\n    padding: 6px 16px;\r\n  }\r\n  :host\r\n  td {\r\n    padding: 4px 8px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlLXN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFVBQVU7RUFDVixzRUFBc0U7QUFDeEU7QUFDQTs7RUFFRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUdBO0VBQ0U7O0lBRUUsa0JBQWtCO0VBQ3BCO0VBQ0E7O0lBRUUsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjtFQUNBOztJQUVFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdFxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiA5OCU7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCksIDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG46aG9zdFxyXG50aCB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbiAgcGFkZGluZzogMTNweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuOmhvc3RcclxudGQge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICA6aG9zdFxyXG4gIHRhYmxlIHtcclxuICAgIG1hcmdpbjogMCAwIDMycHggMDtcclxuICB9XHJcbiAgOmhvc3RcclxuICB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgcGFkZGluZzogNnB4IDE2cHg7XHJcbiAgfVxyXG4gIDpob3N0XHJcbiAgdGQge1xyXG4gICAgcGFkZGluZzogNHB4IDhweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/filter/filter.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/filter/filter.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"docs-page\">\n  <mat-tab-group mat-align-tabs=\"start\">\n    <mat-tab label=\"Overview\">\n      <markdown (buttonClick)=\"onCopyClipboard()\" ngPreserveWhitespaces [src]=\"'assets/docs/filter/README.md'\"></markdown>\n    </mat-tab>\n    <mat-tab label=\"API\">\n      <markdown (buttonClick)=\"onCopyClipboard()\" ngPreserveWhitespaces [src]=\"'assets/docs/filter/API.md'\"></markdown>\n    </mat-tab>\n    <mat-tab label=\"Examples\">\n      <app-example-viewer *ngFor=\"let example of examples\" [exampleType]=\"example\"></app-example-viewer>\n    </mat-tab>\n  </mat-tab-group>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/filter/filter.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/filter/filter.component.ts ***!
  \*******************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _add_to_showcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../add-to-showcase */ "./src/app/components/add-to-showcase.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-component */ "./src/app/components/base-component.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm5/angular-notifier.js");





var FilterComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FilterComponent, _super);
    function FilterComponent(notifierService) {
        return _super.call(this, notifierService) || this;
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.examples = _add_to_showcase__WEBPACK_IMPORTED_MODULE_1__["showCaseExamples"].get('filter');
        console.log(this.examples);
    };
    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/components/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.css */ "./src/app/components/filter/filter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]])
    ], FilterComponent);
    return FilterComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular_workspace\mat-table-extensions\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map