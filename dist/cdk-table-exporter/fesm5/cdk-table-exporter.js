import { __decorate, __metadata, __extends, __spread } from 'tslib';
import { CdkTableModule } from '@angular/cdk/table';
import { NgModule, ɵɵdefineInjectable, Injectable, Injector, ɵɵinject, INJECTOR, EventEmitter, Renderer2, Input, Output, Directive } from '@angular/core';
import { utils, write } from 'xlsx';
import { saveAs } from 'file-saver';

var CdkTableExporterModule = /** @class */ (function () {
    function CdkTableExporterModule() {
    }
    CdkTableExporterModule = __decorate([
        NgModule({
            declarations: [],
            imports: [
                CdkTableModule
            ],
            exports: []
        })
    ], CdkTableExporterModule);
    return CdkTableExporterModule;
}());

var ExportType;
(function (ExportType) {
    ExportType["XLS"] = "xls";
    ExportType["XLSX"] = "xlsx";
    ExportType["CSV"] = "csv";
    ExportType["TXT"] = "txt";
    ExportType["JSON"] = "json";
    ExportType["OTHER"] = "other";
})(ExportType || (ExportType = {}));

var DataExtractorService = /** @class */ (function () {
    function DataExtractorService() {
    }
    DataExtractorService.prototype.extractRows = function (cdkTable, hiddenColumns, outlet) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, (outlet !== null && outlet !== void 0 ? outlet : cdkTable._rowOutlet));
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
    DataExtractorService.ɵprov = ɵɵdefineInjectable({ factory: function DataExtractorService_Factory() { return new DataExtractorService(); }, token: DataExtractorService, providedIn: "root" });
    DataExtractorService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataExtractorService);
    return DataExtractorService;
}());

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
var COMMA = ',';
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
        var _a, _b;
        return utils.sheet_to_csv(worksheet, { FS: (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.delimiter, (_b !== null && _b !== void 0 ? _b : COMMA)) });
    };
    CsvExporterService.prototype.getMimeType = function () {
        return MIME_CSV;
    };
    CsvExporterService.ɵprov = ɵɵdefineInjectable({ factory: function CsvExporterService_Factory() { return new CsvExporterService(); }, token: CsvExporterService, providedIn: "root" });
    CsvExporterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CsvExporterService);
    return CsvExporterService;
}(WorksheetExporter));

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
    TxtExporterService.ɵprov = ɵɵdefineInjectable({ factory: function TxtExporterService_Factory() { return new TxtExporterService(); }, token: TxtExporterService, providedIn: "root" });
    TxtExporterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TxtExporterService);
    return TxtExporterService;
}(FileExporter));

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
    XlsExporterService.ɵprov = ɵɵdefineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(); }, token: XlsExporterService, providedIn: "root" });
    XlsExporterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], XlsExporterService);
    return XlsExporterService;
}(WorksheetExporter));

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
    JsonExporterService.ɵprov = ɵɵdefineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
    JsonExporterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JsonExporterService);
    return JsonExporterService;
}(FileExporter));

var XlsxExporterService = /** @class */ (function (_super) {
    __extends(XlsxExporterService, _super);
    function XlsxExporterService() {
        return _super.call(this) || this;
    }
    // override
    XlsxExporterService.prototype.getMimeType = function () {
        return MIME_EXCEL_XLSX;
    };
    XlsxExporterService.ɵprov = ɵɵdefineInjectable({ factory: function XlsxExporterService_Factory() { return new XlsxExporterService(); }, token: XlsxExporterService, providedIn: "root" });
    XlsxExporterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], XlsxExporterService);
    return XlsxExporterService;
}(XlsExporterService));

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
    ServiceLocatorService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    ServiceLocatorService.ɵprov = ɵɵdefineInjectable({ factory: function ServiceLocatorService_Factory() { return new ServiceLocatorService(ɵɵinject(INJECTOR)); }, token: ServiceLocatorService, providedIn: "root" });
    ServiceLocatorService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Injector])
    ], ServiceLocatorService);
    return ServiceLocatorService;
}());

/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 */
var CdkTableExporter = /** @class */ (function () {
    function CdkTableExporter(renderer, serviceLocator, dataExtractor, _cdkTable) {
        this.renderer = renderer;
        this.serviceLocator = serviceLocator;
        this.dataExtractor = dataExtractor;
        this._cdkTable = _cdkTable;
        this.exportCompleted = new EventEmitter();
        this.exportStarted = new EventEmitter();
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
     *
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
        var _a;
        (_a = this._data).push.apply(_a, __spread(this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns, outlet)));
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
    CdkTableExporter.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ServiceLocatorService },
        { type: DataExtractorService },
        { type: undefined }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], CdkTableExporter.prototype, "hiddenColumns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CdkTableExporter.prototype, "exporter", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CdkTableExporter.prototype, "exportCompleted", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CdkTableExporter.prototype, "exportStarted", void 0);
    CdkTableExporter = __decorate([
        Directive(),
        __metadata("design:paramtypes", [Renderer2,
            ServiceLocatorService,
            DataExtractorService, Object])
    ], CdkTableExporter);
    return CdkTableExporter;
}());

/*
 * Public API Surface of cdk-table-exporter
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CHAR_SET_UTF, CHAR_SET_UTF_8, COMMA, CONTENT_TYPE_APPLICATION, CONTENT_TYPE_EXCEL, CONTENT_TYPE_TEXT, CdkTableExporter, CdkTableExporterModule, CsvExporterService, DOT, DataExtractorService, EXTENSION_CSV, EXTENSION_JSON, EXTENSION_TEXT, EXTENSION_XLS, EXTENSION_XLSX, ExportType, FileExporter, FileUtil, JsonExporterService, MAT_TABLE_EXPORTER, MIME_CSV, MIME_EXCEL_XLS, MIME_EXCEL_XLSX, MIME_JSON, MIME_TXT, Mime, REF, RETURN, ServiceLocatorService, TAB, TYPE_ARRAY, TxtExporterService, WorksheetExporter, XLSX_COLS, XLS_REGEX, XlsExporterService, XlsxExporterService };
//# sourceMappingURL=cdk-table-exporter.js.map
