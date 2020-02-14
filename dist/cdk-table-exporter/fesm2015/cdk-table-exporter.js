import { CdkTableModule } from '@angular/cdk/table';
import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule, ɵɵdefineInjectable, Injectable, ɵɵinject, Injector, EventEmitter, ɵɵinvalidFactory, ɵɵdefineDirective, Directive, Renderer2, ViewContainerRef, Input, Output } from '@angular/core';
import { saveAs } from 'file-saver';
import { utils, write } from 'xlsx';

class CdkTableExporterModule {
}
CdkTableExporterModule.ɵmod = ɵɵdefineNgModule({ type: CdkTableExporterModule });
CdkTableExporterModule.ɵinj = ɵɵdefineInjector({ factory: function CdkTableExporterModule_Factory(t) { return new (t || CdkTableExporterModule)(); }, imports: [[
            CdkTableModule
        ]] });
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

class Mime {
    constructor(extension, contentTypeHeader) {
        this.extension = extension;
        this.contentTypeHeader = contentTypeHeader;
    }
}

const MAT_TABLE_EXPORTER = 'mat-table-exporter';
const TYPE_ARRAY = 'array';
const CHAR_SET_UTF = ';charset=utf-';
const CHAR_SET_UTF_8 = CHAR_SET_UTF + '8';
const CONTENT_TYPE_TEXT = ExportType.TXT + '/';
const CONTENT_TYPE_APPLICATION = 'application/';
const CONTENT_TYPE_EXCEL = CONTENT_TYPE_APPLICATION + 'octet-stream';
const DOT = '.';
const EXTENSION_XLS = DOT + ExportType.XLS;
const EXTENSION_XLSX = DOT + ExportType.XLSX;
const EXTENSION_CSV = DOT + ExportType.CSV;
const EXTENSION_JSON = DOT + ExportType.JSON;
const EXTENSION_TEXT = DOT + ExportType.TXT;
const MIME_EXCEL_XLS = new Mime(EXTENSION_XLS, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
const MIME_EXCEL_XLSX = new Mime(EXTENSION_XLSX, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
const MIME_JSON = new Mime(EXTENSION_JSON, CONTENT_TYPE_TEXT + JSON + CHAR_SET_UTF_8);
const MIME_TXT = new Mime(EXTENSION_TEXT, CONTENT_TYPE_TEXT + ExportType.TXT + CHAR_SET_UTF_8);
const MIME_CSV = new Mime(EXTENSION_CSV, CONTENT_TYPE_TEXT + ExportType.CSV + CHAR_SET_UTF_8);
const REF = '!ref';
const XLS_REGEX = DOT + '*\.' + ExportType.XLS + '$';
const RETURN = '\n';
const TAB = '\t';
const XLSX_COLS = '!cols';

class FileUtil {
    static save(content, mime, options) {
        const blob = new Blob([content], { type: mime.contentTypeHeader });
        let fileName = MAT_TABLE_EXPORTER;
        if (options && options.fileName) {
            fileName = options.fileName;
        }
        saveAs(blob, fileName + mime.extension);
    }
    static isXls(fileName) {
        return fileName.toLowerCase().match(XLS_REGEX) != null;
    }
    static identifyExportType(fileName) {
        if (fileName && FileUtil.isXls(fileName)) {
            return ExportType.XLS;
        }
        else {
            return ExportType.XLSX;
        }
    }
    static removeExtension(options) {
        options.fileName = options.fileName.split(DOT)[0];
    }
}

class DataExtractorService {
    constructor() {
    }
    extractRows(cdkTable, hiddenColumns) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, cdkTable._rowOutlet);
    }
    extractRow(cdkTable, hiddenColumns, outlet) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, outlet)[0];
    }
    getRowsAsJsonArray(cdkTable, hiddenColumns, outlet) {
        const renderedRows = this.getRenderedRows(cdkTable, outlet);
        return this.convertToJsonArray(hiddenColumns, renderedRows);
    }
    getRenderedRows(cdkTable, outlet) {
        return cdkTable._getRenderedRows(outlet);
    }
    convertToJsonArray(hiddenColumns, rows) {
        const result = new Array();
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < rows.length; i++) {
            const row = this.convertRow(hiddenColumns, rows[i]);
            result.push(this.createExcelItem(row));
        }
        return result;
    }
    convertRow(hiddenColumns, row) {
        const result = new Array();
        const cells = row.children;
        for (let i = 0; i < cells.length; i++) {
            if (!this.shouldHide(hiddenColumns, i)) {
                const element = cells.item(i).innerText;
                result.push(element);
            }
        }
        return result;
    }
    shouldHide(hiddenColumns, columnIndex) {
        if (hiddenColumns && hiddenColumns.includes(columnIndex)) {
            return true;
        }
        else {
            return false;
        }
    }
    createExcelItem(row) {
        return Object.assign({}, row);
    }
}
DataExtractorService.ɵfac = function DataExtractorService_Factory(t) { return new (t || DataExtractorService)(); };
DataExtractorService.ɵprov = ɵɵdefineInjectable({ token: DataExtractorService, factory: DataExtractorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataExtractorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class FileExporter {
    constructor() { }
    export(rows, options) {
        if (!rows) {
            throw new Error('Empty json array is provided, rows parameter is mandatory!');
        }
        const content = this.createContent(rows, options);
        const mimeType = this.getMimeType();
        FileUtil.save(content, mimeType, options);
    }
}

/**
 * An angular service class that is used to create files out of json object arrays.
 */
class WorksheetExporter extends FileExporter {
    constructor() {
        super();
    }
    createContent(rows, options) {
        const workSheet = utils.json_to_sheet(rows, {
            skipHeader: true // we don't want to see object properties as our headers
        });
        return this.workSheetToContent(workSheet, options);
    }
}

class CsvExporterService extends WorksheetExporter {
    constructor() {
        super();
    }
    workSheetToContent(worksheet, options) {
        return utils.sheet_to_csv(worksheet);
    }
    getMimeType() {
        return MIME_CSV;
    }
}
CsvExporterService.ɵfac = function CsvExporterService_Factory(t) { return new (t || CsvExporterService)(); };
CsvExporterService.ɵprov = ɵɵdefineInjectable({ token: CsvExporterService, factory: CsvExporterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CsvExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class TxtExporterService extends FileExporter {
    constructor() {
        super();
    }
    createContent(rows, options) {
        let content = '';
        rows.forEach(element => {
            content += Object.values(element).join(this.getDelimiter(options)) + RETURN;
        });
        return content;
    }
    getMimeType() {
        return MIME_TXT;
    }
    getDelimiter(options) {
        if (options && options.delimiter) {
            return options.delimiter;
        }
        else {
            return TAB;
        }
    }
}
TxtExporterService.ɵfac = function TxtExporterService_Factory(t) { return new (t || TxtExporterService)(); };
TxtExporterService.ɵprov = ɵɵdefineInjectable({ token: TxtExporterService, factory: TxtExporterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TxtExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class XlsExporterService extends WorksheetExporter {
    constructor() {
        super();
    }
    workSheetToContent(worksheet, options = {}) {
        const workBook = utils.book_new();
        if (options.columnWidths) {
            worksheet[XLSX_COLS] = this.convertToWch(options.columnWidths);
        }
        this.correctTypes(options);
        utils.book_append_sheet(workBook, worksheet, options.sheet);
        return write(workBook, options);
    }
    getMimeType() {
        return MIME_EXCEL_XLS;
    }
    correctTypes(options) {
        if (!options.type) {
            options.type = TYPE_ARRAY;
        }
        options.bookType = this.getMimeType().extension.replace('.', ''); // sheetjs requires bookingType for excel format
    }
    convertToWch(columnWidths) {
        return columnWidths.map(width => ({ wch: width }));
    }
}
XlsExporterService.ɵfac = function XlsExporterService_Factory(t) { return new (t || XlsExporterService)(); };
XlsExporterService.ɵprov = ɵɵdefineInjectable({ token: XlsExporterService, factory: XlsExporterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(XlsExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class JsonExporterService extends FileExporter {
    constructor() {
        super();
    }
    createContent(rows, options) {
        return JSON.stringify(rows);
    }
    getMimeType() {
        return MIME_JSON;
    }
}
JsonExporterService.ɵfac = function JsonExporterService_Factory(t) { return new (t || JsonExporterService)(); };
JsonExporterService.ɵprov = ɵɵdefineInjectable({ token: JsonExporterService, factory: JsonExporterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(JsonExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class XlsxExporterService extends XlsExporterService {
    constructor() {
        super();
    }
    // override
    getMimeType() {
        return MIME_EXCEL_XLSX;
    }
}
XlsxExporterService.ɵfac = function XlsxExporterService_Factory(t) { return new (t || XlsxExporterService)(); };
XlsxExporterService.ɵprov = ɵɵdefineInjectable({ token: XlsxExporterService, factory: XlsxExporterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(XlsxExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class ServiceLocatorService {
    constructor(injector) {
        this.injector = injector;
    }
    getService(exportType) {
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
    }
}
ServiceLocatorService.ɵfac = function ServiceLocatorService_Factory(t) { return new (t || ServiceLocatorService)(ɵɵinject(Injector)); };
ServiceLocatorService.ɵprov = ɵɵdefineInjectable({ token: ServiceLocatorService, factory: ServiceLocatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ServiceLocatorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Injector }]; }, null); })();

/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 */
class CdkTableExporter {
    constructor(renderer, serviceLocator, dataExtractor, table, viewContainerRef) {
        this.renderer = renderer;
        this.serviceLocator = serviceLocator;
        this.dataExtractor = dataExtractor;
        this.table = table;
        this.viewContainerRef = viewContainerRef;
        this.exportCompleted = new EventEmitter();
        this.exportStarted = new EventEmitter();
        this.initCdkTable();
    }
    get cdkTable() {
        return this._cdkTable;
    }
    /**
     * @deprecated
     */
    set cdkTable(value) {
        console.warn('cdkTable input is deprecated!');
        this._cdkTable = value;
    }
    get exporterButton() {
        return this._exporterButton;
    }
    /**
     * @deprecated
     */
    set exporterButton(value) {
        console.warn('exporterButton input is deprecated!');
        this._exporterButton = value;
        this.setButtonListener();
    }
    get fileName() {
        return this._fileName;
    }
    /**
     * @deprecated
     */
    set fileName(value) {
        console.warn('fileName input is deprecated!');
        this._fileName = value;
    }
    get sheetName() {
        return this._sheetName;
    }
    /**
     * @deprecated
     */
    set sheetName(value) {
        console.warn('sheetName input is deprecated!');
        this._sheetName = value;
    }
    initCdkTable() {
        var _a, _b;
        // tslint:disable-next-line:no-string-literal
        const table = (_b = (_a = this.viewContainerRef['_data']) === null || _a === void 0 ? void 0 : _a.componentView) === null || _b === void 0 ? void 0 : _b.component;
        if (table) {
            this._cdkTable = table;
        }
        else if (this.table) {
            this._cdkTable = this.table;
        }
        else {
            throw new Error('Unsupported Angular version');
        }
    }
    setButtonListener() {
        if (this._exporterButton) {
            this.renderer.listen(this._exporterButton._elementRef.nativeElement, 'click', (evt) => {
                const options = { fileName: this._fileName, sheet: this._sheetName };
                this.exportTable(FileUtil.identifyExportType(this._fileName), options); // this is to support deprecated way of exporting
            });
        }
    }
    /**
     * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
     */
    exportTable(exportType, options) {
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
    }
    loadExporter(exportType) {
        if (exportType === ExportType.OTHER.valueOf()) {
            this._exporterService = this.exporter;
        }
        else {
            this._exporterService = this.serviceLocator.getService(exportType);
        }
    }
    exportWithPagination() {
        this._initialPageIndex = this.getCurrentPageIndex();
        this.initPageHandler();
        this.goToPage(0);
    }
    exportSinglePage() {
        this.extractDataOnCurrentPage();
        this.extractTableFooter();
        this.exportExtractedData();
    }
    extractDataOnCurrentPage() {
        this._data = this._data.concat(this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns));
    }
    initPageHandler() {
        if (!this._subscription) {
            this._subscription = this.getPageChangeObservable().subscribe(() => {
                setTimeout(() => {
                    if (this._isIterating) {
                        this.extractDataOnCurrentPage();
                        if (this.hasNextPage()) {
                            this.nextPage();
                        }
                        else {
                            this._isIterating = false;
                            this.goToPage(this._initialPageIndex);
                        }
                    }
                    else if (this._isExporting) {
                        this._isExporting = false;
                        this.extractTableFooter();
                        this.exportExtractedData();
                    }
                });
            });
        }
    }
    exportExtractedData() {
        this._exporterService.export(this._data, this._options);
        this._data = new Array();
        this.enableExportButton(true);
        this.exportCompleted.emit();
    }
    extractSpecialRow(outlet) {
        const row = this.dataExtractor.extractRow(this._cdkTable, this.hiddenColumns, outlet);
        if (row) {
            this._data.push(row);
        }
    }
    extractTableHeader() {
        this.extractSpecialRow(this._cdkTable._headerRowOutlet);
    }
    extractTableFooter() {
        this.extractSpecialRow(this._cdkTable._footerRowOutlet);
    }
    hasNextPage() {
        if (this.getCurrentPageIndex() < this.getPageCount() - 1) {
            return true;
        }
        else {
            return false;
        }
    }
    nextPage() {
        this.goToPage(this.getCurrentPageIndex() + 1);
    }
    enableExportButton(value) {
        if (this._exporterButton) {
            this.renderer.setProperty(this._exporterButton._elementRef.nativeElement, 'disabled', value ? null : 'true');
        }
    }
}
CdkTableExporter.ɵfac = function CdkTableExporter_Factory(t) { ɵɵinvalidFactory(); };
CdkTableExporter.ɵdir = ɵɵdefineDirective({ type: CdkTableExporter, inputs: { hiddenColumns: "hiddenColumns", exporter: "exporter", cdkTable: "cdkTable", exporterButton: "exporterButton", fileName: "fileName", sheetName: "sheetName" }, outputs: { exportCompleted: "exportCompleted", exportStarted: "exportStarted" } });
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
