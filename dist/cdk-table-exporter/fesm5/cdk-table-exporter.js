import { CdkTableModule } from '@angular/cdk/table';
import { saveAs } from 'file-saver';
import { __extends } from 'tslib';
import { utils, write } from 'xlsx';
import { NgModule, EventEmitter, Input, Output, Injectable, Injector, defineInjectable, inject, INJECTOR } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    __extends(JsonExporterService, _super);
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    JsonExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ JsonExporterService.ngInjectableDef = defineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
    return JsonExporterService;
}(FileExporter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TxtExporterService = /** @class */ (function (_super) {
    __extends(TxtExporterService, _super);
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TxtExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ TxtExporterService.ngInjectableDef = defineInjectable({ factory: function TxtExporterService_Factory() { return new TxtExporterService(); }, token: TxtExporterService, providedIn: "root" });
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
    __extends(WorksheetExporter, _super);
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
        var workSheet = utils.json_to_sheet(rows, {
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
    __extends(XlsExporterService, _super);
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
        var workBook = utils.book_new();
        if (options.columnWidths) {
            worksheet[XLSX_COLS] = this.convertToWch(options.columnWidths);
        }
        this.correctTypes(options);
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    XlsExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ XlsExporterService.ngInjectableDef = defineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(); }, token: XlsExporterService, providedIn: "root" });
    return XlsExporterService;
}(WorksheetExporter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /** @nocollapse */ XlsxExporterService.ngInjectableDef = defineInjectable({ factory: function XlsxExporterService_Factory() { return new XlsxExporterService(); }, token: XlsxExporterService, providedIn: "root" });
    return XlsxExporterService;
}(XlsExporterService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    CsvExporterService.prototype.workSheetToContent = /**
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
    /** @nocollapse */ CsvExporterService.ngInjectableDef = defineInjectable({ factory: function CsvExporterService_Factory() { return new CsvExporterService(); }, token: CsvExporterService, providedIn: "root" });
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ServiceLocatorService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ ServiceLocatorService.ngInjectableDef = defineInjectable({ factory: function ServiceLocatorService_Factory() { return new ServiceLocatorService(inject(INJECTOR)); }, token: ServiceLocatorService, providedIn: "root" });
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DataExtractorService.ctorParameters = function () { return []; };
    /** @nocollapse */ DataExtractorService.ngInjectableDef = defineInjectable({ factory: function DataExtractorService_Factory() { return new DataExtractorService(); }, token: DataExtractorService, providedIn: "root" });
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

export { CdkTableExporter, FileExporter, JsonExporterService, TxtExporterService, XlsExporterService, WorksheetExporter, XlsxExporterService, CsvExporterService, ExportType, ServiceLocatorService, DataExtractorService, Mime, FileUtil, CdkTableExporterModule, MAT_TABLE_EXPORTER, TYPE_ARRAY, CHAR_SET_UTF, CHAR_SET_UTF_8, CONTENT_TYPE_TEXT, CONTENT_TYPE_APPLICATION, CONTENT_TYPE_EXCEL, DOT, EXTENSION_XLS, EXTENSION_XLSX, EXTENSION_CSV, EXTENSION_JSON, EXTENSION_TEXT, MIME_EXCEL_XLS, MIME_EXCEL_XLSX, MIME_JSON, MIME_TXT, MIME_CSV, REF, XLS_REGEX, RETURN, TAB, XLSX_COLS };

//# sourceMappingURL=cdk-table-exporter.js.map