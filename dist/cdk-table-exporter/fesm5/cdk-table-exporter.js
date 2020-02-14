import { CdkTableModule } from '@angular/cdk/table';
import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule, ɵɵdefineInjectable, Injectable, ɵɵinject, Injector, EventEmitter, ɵɵinvalidFactory, ɵɵdefineDirective, Directive, Renderer2, ViewContainerRef, Input, Output } from '@angular/core';
import { saveAs } from 'file-saver';
import { __extends } from 'tslib';
import { utils, write } from 'xlsx';

var CdkTableExporterModule = /** @class */ (function () {
    function CdkTableExporterModule() {
    }
    CdkTableExporterModule.ɵmod = ɵɵdefineNgModule({ type: CdkTableExporterModule });
    CdkTableExporterModule.ɵinj = ɵɵdefineInjector({ factory: function CdkTableExporterModule_Factory(t) { return new (t || CdkTableExporterModule)(); }, imports: [[
                CdkTableModule
            ]] });
    return CdkTableExporterModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkTableExporterModule, { imports: [CdkTableModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkTableExporterModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    CdkTableModule
                ],
                exports: []
            }]
    }], null, null); })();

var ExportType;
(function (ExportType) {
    ExportType["XLS"] = "xls";
    ExportType["XLSX"] = "xlsx";
    ExportType["CSV"] = "csv";
    ExportType["TXT"] = "txt";
    ExportType["JSON"] = "json";
    ExportType["OTHER"] = "other";
})(ExportType || (ExportType = {}));

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
var CONTENT_TYPE_TEXT = ExportType.TXT + '/';
var CONTENT_TYPE_APPLICATION = 'application/';
var CONTENT_TYPE_EXCEL = CONTENT_TYPE_APPLICATION + 'octet-stream';
var DOT = '.';
var EXTENSION_XLS = DOT + ExportType.XLS;
var EXTENSION_XLSX = DOT + ExportType.XLSX;
var EXTENSION_CSV = DOT + ExportType.CSV;
var EXTENSION_JSON = DOT + ExportType.JSON;
var EXTENSION_TEXT = DOT + ExportType.TXT;
var MIME_EXCEL_XLS = new Mime(EXTENSION_XLS, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
var MIME_EXCEL_XLSX = new Mime(EXTENSION_XLSX, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
var MIME_JSON = new Mime(EXTENSION_JSON, CONTENT_TYPE_TEXT + JSON + CHAR_SET_UTF_8);
var MIME_TXT = new Mime(EXTENSION_TEXT, CONTENT_TYPE_TEXT + ExportType.TXT + CHAR_SET_UTF_8);
var MIME_CSV = new Mime(EXTENSION_CSV, CONTENT_TYPE_TEXT + ExportType.CSV + CHAR_SET_UTF_8);
var REF = '!ref';
var XLS_REGEX = DOT + '*\.' + ExportType.XLS + '$';
var RETURN = '\n';
var TAB = '\t';
var XLSX_COLS = '!cols';

var FileUtil = /** @class */ (function () {
    function FileUtil() {
    }
    FileUtil.save = function (content, mime, options) {
        var blob = new Blob([content], { type: mime.contentTypeHeader });
        var fileName = MAT_TABLE_EXPORTER;
        if (options && options.fileName) {
            fileName = options.fileName;
        }
        saveAs(blob, fileName + mime.extension);
    };
    FileUtil.isXls = function (fileName) {
        return fileName.toLowerCase().match(XLS_REGEX) != null;
    };
    FileUtil.identifyExportType = function (fileName) {
        if (fileName && FileUtil.isXls(fileName)) {
            return ExportType.XLS;
        }
        else {
            return ExportType.XLSX;
        }
    };
    FileUtil.removeExtension = function (options) {
        options.fileName = options.fileName.split(DOT)[0];
    };
    return FileUtil;
}());

var DataExtractorService = /** @class */ (function () {
    function DataExtractorService() {
    }
    DataExtractorService.prototype.extractRows = function (cdkTable, hiddenColumns) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, cdkTable._rowOutlet);
    };
    DataExtractorService.prototype.extractRow = function (cdkTable, hiddenColumns, outlet) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, outlet)[0];
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
                var element = cells.item(i).innerText;
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
    DataExtractorService.ɵfac = function DataExtractorService_Factory(t) { return new (t || DataExtractorService)(); };
    DataExtractorService.ɵprov = ɵɵdefineInjectable({ token: DataExtractorService, factory: DataExtractorService.ɵfac, providedIn: 'root' });
    return DataExtractorService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataExtractorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var FileExporter = /** @class */ (function () {
    function FileExporter() {
    }
    FileExporter.prototype.export = function (rows, options) {
        if (!rows) {
            throw new Error('Empty json array is provided, rows parameter is mandatory!');
        }
        var content = this.createContent(rows, options);
        var mimeType = this.getMimeType();
        FileUtil.save(content, mimeType, options);
    };
    return FileExporter;
}());

/**
 * An angular service class that is used to create files out of json object arrays.
 */
var WorksheetExporter = /** @class */ (function (_super) {
    __extends(WorksheetExporter, _super);
    function WorksheetExporter() {
        return _super.call(this) || this;
    }
    WorksheetExporter.prototype.createContent = function (rows, options) {
        var workSheet = utils.json_to_sheet(rows, {
            skipHeader: true // we don't want to see object properties as our headers
        });
        return this.workSheetToContent(workSheet, options);
    };
    return WorksheetExporter;
}(FileExporter));

var CsvExporterService = /** @class */ (function (_super) {
    __extends(CsvExporterService, _super);
    function CsvExporterService() {
        return _super.call(this) || this;
    }
    CsvExporterService.prototype.workSheetToContent = function (worksheet, options) {
        return utils.sheet_to_csv(worksheet);
    };
    CsvExporterService.prototype.getMimeType = function () {
        return MIME_CSV;
    };
    CsvExporterService.ɵfac = function CsvExporterService_Factory(t) { return new (t || CsvExporterService)(); };
    CsvExporterService.ɵprov = ɵɵdefineInjectable({ token: CsvExporterService, factory: CsvExporterService.ɵfac, providedIn: 'root' });
    return CsvExporterService;
}(WorksheetExporter));
/*@__PURE__*/ (function () { ɵsetClassMetadata(CsvExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var TxtExporterService = /** @class */ (function (_super) {
    __extends(TxtExporterService, _super);
    function TxtExporterService() {
        return _super.call(this) || this;
    }
    TxtExporterService.prototype.createContent = function (rows, options) {
        var _this = this;
        var content = '';
        rows.forEach(function (element) {
            content += Object.values(element).join(_this.getDelimiter(options)) + RETURN;
        });
        return content;
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
    TxtExporterService.ɵfac = function TxtExporterService_Factory(t) { return new (t || TxtExporterService)(); };
    TxtExporterService.ɵprov = ɵɵdefineInjectable({ token: TxtExporterService, factory: TxtExporterService.ɵfac, providedIn: 'root' });
    return TxtExporterService;
}(FileExporter));
/*@__PURE__*/ (function () { ɵsetClassMetadata(TxtExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var XlsExporterService = /** @class */ (function (_super) {
    __extends(XlsExporterService, _super);
    function XlsExporterService() {
        return _super.call(this) || this;
    }
    XlsExporterService.prototype.workSheetToContent = function (worksheet, options) {
        if (options === void 0) { options = {}; }
        var workBook = utils.book_new();
        if (options.columnWidths) {
            worksheet[XLSX_COLS] = this.convertToWch(options.columnWidths);
        }
        this.correctTypes(options);
        utils.book_append_sheet(workBook, worksheet, options.sheet);
        return write(workBook, options);
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
    XlsExporterService.ɵfac = function XlsExporterService_Factory(t) { return new (t || XlsExporterService)(); };
    XlsExporterService.ɵprov = ɵɵdefineInjectable({ token: XlsExporterService, factory: XlsExporterService.ɵfac, providedIn: 'root' });
    return XlsExporterService;
}(WorksheetExporter));
/*@__PURE__*/ (function () { ɵsetClassMetadata(XlsExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var JsonExporterService = /** @class */ (function (_super) {
    __extends(JsonExporterService, _super);
    function JsonExporterService() {
        return _super.call(this) || this;
    }
    JsonExporterService.prototype.createContent = function (rows, options) {
        return JSON.stringify(rows);
    };
    JsonExporterService.prototype.getMimeType = function () {
        return MIME_JSON;
    };
    JsonExporterService.ɵfac = function JsonExporterService_Factory(t) { return new (t || JsonExporterService)(); };
    JsonExporterService.ɵprov = ɵɵdefineInjectable({ token: JsonExporterService, factory: JsonExporterService.ɵfac, providedIn: 'root' });
    return JsonExporterService;
}(FileExporter));
/*@__PURE__*/ (function () { ɵsetClassMetadata(JsonExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var XlsxExporterService = /** @class */ (function (_super) {
    __extends(XlsxExporterService, _super);
    function XlsxExporterService() {
        return _super.call(this) || this;
    }
    // override
    XlsxExporterService.prototype.getMimeType = function () {
        return MIME_EXCEL_XLSX;
    };
    XlsxExporterService.ɵfac = function XlsxExporterService_Factory(t) { return new (t || XlsxExporterService)(); };
    XlsxExporterService.ɵprov = ɵɵdefineInjectable({ token: XlsxExporterService, factory: XlsxExporterService.ɵfac, providedIn: 'root' });
    return XlsxExporterService;
}(XlsExporterService));
/*@__PURE__*/ (function () { ɵsetClassMetadata(XlsxExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var ServiceLocatorService = /** @class */ (function () {
    function ServiceLocatorService(injector) {
        this.injector = injector;
    }
    ServiceLocatorService.prototype.getService = function (exportType) {
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
    ServiceLocatorService.ɵfac = function ServiceLocatorService_Factory(t) { return new (t || ServiceLocatorService)(ɵɵinject(Injector)); };
    ServiceLocatorService.ɵprov = ɵɵdefineInjectable({ token: ServiceLocatorService, factory: ServiceLocatorService.ɵfac, providedIn: 'root' });
    return ServiceLocatorService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ServiceLocatorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Injector }]; }, null); })();

/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 */
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
        get: function () {
            return this._cdkTable;
        },
        /**
         * @deprecated
         */
        set: function (value) {
            console.warn('cdkTable input is deprecated!');
            this._cdkTable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTableExporter.prototype, "exporterButton", {
        get: function () {
            return this._exporterButton;
        },
        /**
         * @deprecated
         */
        set: function (value) {
            console.warn('exporterButton input is deprecated!');
            this._exporterButton = value;
            this.setButtonListener();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTableExporter.prototype, "fileName", {
        get: function () {
            return this._fileName;
        },
        /**
         * @deprecated
         */
        set: function (value) {
            console.warn('fileName input is deprecated!');
            this._fileName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTableExporter.prototype, "sheetName", {
        get: function () {
            return this._sheetName;
        },
        /**
         * @deprecated
         */
        set: function (value) {
            console.warn('sheetName input is deprecated!');
            this._sheetName = value;
        },
        enumerable: true,
        configurable: true
    });
    CdkTableExporter.prototype.initCdkTable = function () {
        var _a, _b;
        // tslint:disable-next-line:no-string-literal
        var table = (_b = (_a = this.viewContainerRef['_data']) === null || _a === void 0 ? void 0 : _a.componentView) === null || _b === void 0 ? void 0 : _b.component;
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
    CdkTableExporter.prototype.setButtonListener = function () {
        var _this = this;
        if (this._exporterButton) {
            this.renderer.listen(this._exporterButton._elementRef.nativeElement, 'click', function (evt) {
                var options = { fileName: _this._fileName, sheet: _this._sheetName };
                _this.exportTable(FileUtil.identifyExportType(_this._fileName), options); // this is to support deprecated way of exporting
            });
        }
    };
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
        this.enableExportButton(false);
        this.extractTableHeader();
        try {
            this.exportWithPagination();
        }
        catch (notPaginated) {
            this.exportSinglePage();
        }
    };
    CdkTableExporter.prototype.loadExporter = function (exportType) {
        if (exportType === ExportType.OTHER.valueOf()) {
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
        this._data = this._data.concat(this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns));
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
        this.enableExportButton(true);
        this.exportCompleted.emit();
    };
    CdkTableExporter.prototype.extractSpecialRow = function (outlet) {
        var row = this.dataExtractor.extractRow(this._cdkTable, this.hiddenColumns, outlet);
        if (row) {
            this._data.push(row);
        }
    };
    CdkTableExporter.prototype.extractTableHeader = function () {
        this.extractSpecialRow(this._cdkTable._headerRowOutlet);
    };
    CdkTableExporter.prototype.extractTableFooter = function () {
        this.extractSpecialRow(this._cdkTable._footerRowOutlet);
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
    CdkTableExporter.prototype.enableExportButton = function (value) {
        if (this._exporterButton) {
            this.renderer.setProperty(this._exporterButton._elementRef.nativeElement, 'disabled', value ? null : 'true');
        }
    };
    CdkTableExporter.ɵfac = function CdkTableExporter_Factory(t) { ɵɵinvalidFactory(); };
    CdkTableExporter.ɵdir = ɵɵdefineDirective({ type: CdkTableExporter, inputs: { hiddenColumns: "hiddenColumns", exporter: "exporter", cdkTable: "cdkTable", exporterButton: "exporterButton", fileName: "fileName", sheetName: "sheetName" }, outputs: { exportCompleted: "exportCompleted", exportStarted: "exportStarted" } });
    return CdkTableExporter;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkTableExporter, [{
        type: Directive
    }], function () { return [{ type: Renderer2 }, { type: ServiceLocatorService }, { type: DataExtractorService }, { type: undefined }, { type: ViewContainerRef }]; }, { hiddenColumns: [{
            type: Input
        }], exporter: [{
            type: Input
        }], exportCompleted: [{
            type: Output
        }], exportStarted: [{
            type: Output
        }], cdkTable: [{
            type: Input
        }], exporterButton: [{
            type: Input
        }], fileName: [{
            type: Input
        }], sheetName: [{
            type: Input
        }] }); })();

/*
 * Public API Surface of cdk-table-exporter
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CHAR_SET_UTF, CHAR_SET_UTF_8, CONTENT_TYPE_APPLICATION, CONTENT_TYPE_EXCEL, CONTENT_TYPE_TEXT, CdkTableExporter, CdkTableExporterModule, CsvExporterService, DOT, DataExtractorService, EXTENSION_CSV, EXTENSION_JSON, EXTENSION_TEXT, EXTENSION_XLS, EXTENSION_XLSX, ExportType, FileExporter, FileUtil, JsonExporterService, MAT_TABLE_EXPORTER, MIME_CSV, MIME_EXCEL_XLS, MIME_EXCEL_XLSX, MIME_JSON, MIME_TXT, Mime, REF, RETURN, ServiceLocatorService, TAB, TYPE_ARRAY, TxtExporterService, WorksheetExporter, XLSX_COLS, XLS_REGEX, XlsExporterService, XlsxExporterService };
//# sourceMappingURL=cdk-table-exporter.js.map
