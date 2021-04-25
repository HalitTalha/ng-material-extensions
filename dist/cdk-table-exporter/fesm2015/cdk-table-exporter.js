import { CdkTableModule } from '@angular/cdk/table';
import { NgModule, ɵɵdefineInjectable, Injectable, InjectionToken, ɵɵinject, Optional, Inject, INJECTOR, Injector, EventEmitter, Directive, Renderer2, Input, Output } from '@angular/core';
import { __awaiter } from 'tslib';
import { saveAs } from 'file-saver-es';

class CdkTableExporterModule {
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

var ExportType;
(function (ExportType) {
    ExportType["XLS"] = "xls";
    ExportType["XLSX"] = "xlsx";
    ExportType["CSV"] = "csv";
    ExportType["TXT"] = "txt";
    ExportType["JSON"] = "json";
    ExportType["OTHER"] = "other";
})(ExportType || (ExportType = {}));

class DataExtractorService {
    constructor() { }
    extractRows(cdkTable, hiddenColumns, outlet) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, outlet !== null && outlet !== void 0 ? outlet : cdkTable._rowOutlet);
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
                const element = (cells.item(i).innerText).trim();
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
DataExtractorService.ɵprov = ɵɵdefineInjectable({ factory: function DataExtractorService_Factory() { return new DataExtractorService(); }, token: DataExtractorService, providedIn: "root" });
DataExtractorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DataExtractorService.ctorParameters = () => [];

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
const COMMA = ',';
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
const BOM = '\uFEFF';
const XLSX_LIGHTWEIGHT = new InjectionToken('XLSX_LIGHTWEIGHT');

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

class FileExporter {
    constructor() { }
    export(rows, options) {
        if (!rows) {
            throw new Error('Empty json array is provided, rows parameter is mandatory!');
        }
        const mimeType = this.getMimeType();
        this.createContent(rows, options).then(content => {
            FileUtil.save(content, mimeType, options);
        });
    }
}

/**
 * An angular service class that is used to create files out of json object arrays.
 */
class WorksheetExporter extends FileExporter {
    constructor(sheetJsHelper) {
        super();
        this.sheetJsHelper = sheetJsHelper;
    }
    createContent(rows, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const workSheet = (yield this.sheetJsHelper.getXlsx()).utils.json_to_sheet(rows, {
                skipHeader: true // we don't want to see object properties as our headers
            });
            return yield this.workSheetToContent(workSheet, options);
        });
    }
}

class SheetjsHelperService {
    constructor(xlsxLightweight) {
        this.xlsxLightweight = xlsxLightweight;
    }
    getXlsx() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.xlsxLightweight) {
                return yield import('xlsx/dist/xlsx.mini.min');
            }
            else {
                return yield import('xlsx');
            }
        });
    }
}
SheetjsHelperService.ɵprov = ɵɵdefineInjectable({ factory: function SheetjsHelperService_Factory() { return new SheetjsHelperService(ɵɵinject(XLSX_LIGHTWEIGHT, 8)); }, token: SheetjsHelperService, providedIn: "root" });
SheetjsHelperService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SheetjsHelperService.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: Optional }, { type: Inject, args: [XLSX_LIGHTWEIGHT,] }] }
];

class CsvExporterService extends WorksheetExporter {
    constructor(sheetJsHelper) {
        super(sheetJsHelper);
    }
    workSheetToContent(worksheet, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const content = (yield this.sheetJsHelper.getXlsx()).utils.sheet_to_csv(worksheet, { FS: (_a = options === null || options === void 0 ? void 0 : options.delimiter) !== null && _a !== void 0 ? _a : COMMA });
            return BOM + content;
        });
    }
    getMimeType() {
        return MIME_CSV;
    }
}
CsvExporterService.ɵprov = ɵɵdefineInjectable({ factory: function CsvExporterService_Factory() { return new CsvExporterService(ɵɵinject(SheetjsHelperService)); }, token: CsvExporterService, providedIn: "root" });
CsvExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CsvExporterService.ctorParameters = () => [
    { type: SheetjsHelperService }
];

class TxtExporterService extends FileExporter {
    constructor() {
        super();
    }
    createContent(rows, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let content = '';
            rows.forEach(element => {
                content += Object.values(element).join(this.getDelimiter(options)) + RETURN;
            });
            return content;
        });
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
TxtExporterService.ɵprov = ɵɵdefineInjectable({ factory: function TxtExporterService_Factory() { return new TxtExporterService(); }, token: TxtExporterService, providedIn: "root" });
TxtExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
TxtExporterService.ctorParameters = () => [];

class XlsExporterService extends WorksheetExporter {
    constructor(sheetJsHelper) {
        super(sheetJsHelper);
    }
    workSheetToContent(worksheet, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { utils, write } = yield this.sheetJsHelper.getXlsx();
            const workBook = utils.book_new();
            if (options.columnWidths) {
                worksheet[XLSX_COLS] = this.convertToWch(options.columnWidths);
            }
            this.correctTypes(options);
            utils.book_append_sheet(workBook, worksheet, options.sheet);
            return write(workBook, options);
        });
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
XlsExporterService.ɵprov = ɵɵdefineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(ɵɵinject(SheetjsHelperService)); }, token: XlsExporterService, providedIn: "root" });
XlsExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
XlsExporterService.ctorParameters = () => [
    { type: SheetjsHelperService }
];

class JsonExporterService extends FileExporter {
    constructor() {
        super();
    }
    createContent(rows, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return JSON.stringify(rows);
        });
    }
    getMimeType() {
        return MIME_JSON;
    }
}
JsonExporterService.ɵprov = ɵɵdefineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
JsonExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
JsonExporterService.ctorParameters = () => [];

class XlsxExporterService extends XlsExporterService {
    constructor(sheetJsHelper) {
        super(sheetJsHelper);
    }
    // override
    getMimeType() {
        return MIME_EXCEL_XLSX;
    }
}
XlsxExporterService.ɵprov = ɵɵdefineInjectable({ factory: function XlsxExporterService_Factory() { return new XlsxExporterService(ɵɵinject(SheetjsHelperService)); }, token: XlsxExporterService, providedIn: "root" });
XlsxExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
XlsxExporterService.ctorParameters = () => [
    { type: SheetjsHelperService }
];

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
ServiceLocatorService.ɵprov = ɵɵdefineInjectable({ factory: function ServiceLocatorService_Factory() { return new ServiceLocatorService(ɵɵinject(INJECTOR)); }, token: ServiceLocatorService, providedIn: "root" });
ServiceLocatorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ServiceLocatorService.ctorParameters = () => [
    { type: Injector }
];

/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 */
class CdkTableExporter {
    constructor(renderer, serviceLocator, dataExtractor, _cdkTable) {
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
    exportTable(exportType, options) {
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
    }
    toggleRow(index) {
        const paginatedRowIndex = this.getPaginatedRowIndex(index);
        if (this.isToggleOn(paginatedRowIndex)) {
            this.toggleOff(paginatedRowIndex);
        }
        else {
            this.toggleOn(paginatedRowIndex);
        }
    }
    /**
     * This event will clear rows selection done using toggleRow functionality
     */
    resetToggleRows() {
        this._selectedRows = [];
    }
    toggleOn(index) {
        this._selectedRows = [...(this._selectedRows || []), index];
    }
    toggleOff(index) {
        this._selectedRows = this._selectedRows.filter(x => x !== index);
    }
    isToggleOn(index) {
        var _a;
        return (_a = this._selectedRows) === null || _a === void 0 ? void 0 : _a.includes(index);
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
        const rows = this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns);
        this._data = this._data.concat(this.getSelectedRows(rows));
    }
    getSelectedRows(rows) {
        if (this.isSelectiveExport()) {
            return rows.filter((_, i) => this._selectedRows.includes(this.getPaginatedRowIndex(i)));
        }
        else {
            return rows;
        }
    }
    isSelectiveExport() {
        return this._selectedRows && !this.isMasterToggleOff() && !this.isMasterToggleOn();
    }
    isMasterToggleOn() {
        return this.compareSelectedRowCount(this.getTotalItemsCount());
    }
    isMasterToggleOff() {
        return this.compareSelectedRowCount(0);
    }
    compareSelectedRowCount(rowCount) {
        var _a;
        return !!(((_a = this._selectedRows) === null || _a === void 0 ? void 0 : _a.length) === rowCount);
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
        this.exportCompleted.emit();
    }
    extractSpecialRows(outlet) {
        this._data.push(...this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns, outlet));
    }
    extractTableHeader() {
        this.extractSpecialRows(this._cdkTable._headerRowOutlet);
    }
    extractTableFooter() {
        this.extractSpecialRows(this._cdkTable._footerRowOutlet);
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
    getPaginatedRowIndex(index) {
        return index + (this.getPageSize() * this.getCurrentPageIndex());
    }
}
CdkTableExporter.decorators = [
    { type: Directive }
];
CdkTableExporter.ctorParameters = () => [
    { type: Renderer2 },
    { type: ServiceLocatorService },
    { type: DataExtractorService },
    { type: undefined }
];
CdkTableExporter.propDecorators = {
    hiddenColumns: [{ type: Input }],
    exporter: [{ type: Input }],
    exportCompleted: [{ type: Output }],
    exportStarted: [{ type: Output }]
};

/*
 * Public API Surface of cdk-table-exporter
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BOM, CHAR_SET_UTF, CHAR_SET_UTF_8, COMMA, CONTENT_TYPE_APPLICATION, CONTENT_TYPE_EXCEL, CONTENT_TYPE_TEXT, CdkTableExporter, CdkTableExporterModule, CsvExporterService, DOT, DataExtractorService, EXTENSION_CSV, EXTENSION_JSON, EXTENSION_TEXT, EXTENSION_XLS, EXTENSION_XLSX, ExportType, FileExporter, FileUtil, JsonExporterService, MAT_TABLE_EXPORTER, MIME_CSV, MIME_EXCEL_XLS, MIME_EXCEL_XLSX, MIME_JSON, MIME_TXT, Mime, REF, RETURN, ServiceLocatorService, TAB, TYPE_ARRAY, TxtExporterService, WorksheetExporter, XLSX_COLS, XLSX_LIGHTWEIGHT, XLS_REGEX, XlsExporterService, XlsxExporterService, SheetjsHelperService as ɵa };
//# sourceMappingURL=cdk-table-exporter.js.map
