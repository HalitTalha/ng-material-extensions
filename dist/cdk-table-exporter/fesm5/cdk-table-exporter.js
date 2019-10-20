import { CdkTableModule } from '@angular/cdk/table';
import { NgModule, EventEmitter, Input, Output, Injectable, ɵɵdefineInjectable, Injector, ɵɵinject, INJECTOR } from '@angular/core';
import { saveAs } from 'file-saver';
import { __extends } from 'tslib';
import { utils, write } from 'xlsx';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CdkTableExporterModule = /** @class */ (function () {
    function CdkTableExporterModule() {
    }
    CdkTableExporterModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [
                        CdkTableModule
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
        saveAs(blob, fileName + mime.extension);
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
        this.exportCompleted = new EventEmitter();
        this.exportStarted = new EventEmitter();
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
        hiddenColumns: [{ type: Input }],
        exporter: [{ type: Input }],
        exportCompleted: [{ type: Output }],
        exportStarted: [{ type: Output }],
        cdkTable: [{ type: Input }],
        exporterButton: [{ type: Input }],
        fileName: [{ type: Input }],
        sheetName: [{ type: Input }]
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    JsonExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ JsonExporterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
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
var  /**
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
        var worksheet = utils.json_to_sheet(rows, {
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
        return utils.sheet_to_txt(worksheet);
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TxtExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ TxtExporterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TxtExporterService_Factory() { return new TxtExporterService(); }, token: TxtExporterService, providedIn: "root" });
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
        var workBook = utils.book_new();
        if (!options) {
            options = (/** @type {?} */ ({}));
        }
        this.correctType(options);
        utils.book_append_sheet(workBook, worksheet, options.sheet);
        return write(workBook, options);
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    XlsExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ XlsExporterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(); }, token: XlsExporterService, providedIn: "root" });
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    XlsxExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ XlsxExporterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function XlsxExporterService_Factory() { return new XlsxExporterService(); }, token: XlsxExporterService, providedIn: "root" });
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
        return utils.sheet_to_csv(worksheet);
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CsvExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ CsvExporterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CsvExporterService_Factory() { return new CsvExporterService(); }, token: CsvExporterService, providedIn: "root" });
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ServiceLocatorService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ ServiceLocatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ServiceLocatorService_Factory() { return new ServiceLocatorService(ɵɵinject(INJECTOR)); }, token: ServiceLocatorService, providedIn: "root" });
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DataExtractorService.ctorParameters = function () { return []; };
    /** @nocollapse */ DataExtractorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DataExtractorService_Factory() { return new DataExtractorService(); }, token: DataExtractorService, providedIn: "root" });
    return DataExtractorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CHAR_SET_UTF, CHAR_SET_UTF_16, CHAR_SET_UTF_8, CONTENT_TYPE_APPLICATION, CONTENT_TYPE_EXCEL, CONTENT_TYPE_TEXT, CdkTableExporter, CdkTableExporterModule, CsvExporterService, DataExtractorService, EXTENSION_CSV, EXTENSION_JSON, EXTENSION_TEXT, EXTENSION_XLS, EXTENSION_XLSX, ExportType, FileUtil, JsonExporterService, MAT_TABLE_EXPORTER, MIME_CSV, MIME_EXCEL_XLS, MIME_EXCEL_XLSX, MIME_JSON, MIME_TXT, Mime, P, REF, ServiceLocatorService, TYPE_ARRAY, TxtExporterService, WorksheetExporter, XLS_REGEX, XlsExporterService, XlsxExporterService };
//# sourceMappingURL=cdk-table-exporter.js.map
