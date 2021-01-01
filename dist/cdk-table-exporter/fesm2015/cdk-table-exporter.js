import { __decorate, __metadata } from 'tslib';
import { CdkTableModule } from '@angular/cdk/table';
import { NgModule, ɵɵdefineInjectable, Injectable, Injector, ɵɵinject, INJECTOR, EventEmitter, Renderer2, Input, Output, Directive } from '@angular/core';
import { utils, write } from 'xlsx';
import { saveAs } from 'file-saver';

let CdkTableExporterModule = class CdkTableExporterModule {
};
CdkTableExporterModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CdkTableModule
        ],
        exports: []
    })
], CdkTableExporterModule);

var ExportType;
(function (ExportType) {
    ExportType["XLS"] = "xls";
    ExportType["XLSX"] = "xlsx";
    ExportType["CSV"] = "csv";
    ExportType["TXT"] = "txt";
    ExportType["JSON"] = "json";
    ExportType["OTHER"] = "other";
})(ExportType || (ExportType = {}));

let DataExtractorService = class DataExtractorService {
    constructor() {
    }
    extractRows(cdkTable, hiddenColumns, outlet) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, (outlet !== null && outlet !== void 0 ? outlet : cdkTable._rowOutlet));
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
};
DataExtractorService.ɵprov = ɵɵdefineInjectable({ factory: function DataExtractorService_Factory() { return new DataExtractorService(); }, token: DataExtractorService, providedIn: "root" });
DataExtractorService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], DataExtractorService);

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

let CsvExporterService = class CsvExporterService extends WorksheetExporter {
    constructor() {
        super();
    }
    workSheetToContent(worksheet, options) {
        var _a, _b;
        return utils.sheet_to_csv(worksheet, { FS: (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.delimiter, (_b !== null && _b !== void 0 ? _b : COMMA)) });
    }
    getMimeType() {
        return MIME_CSV;
    }
};
CsvExporterService.ɵprov = ɵɵdefineInjectable({ factory: function CsvExporterService_Factory() { return new CsvExporterService(); }, token: CsvExporterService, providedIn: "root" });
CsvExporterService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], CsvExporterService);

let TxtExporterService = class TxtExporterService extends FileExporter {
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
};
TxtExporterService.ɵprov = ɵɵdefineInjectable({ factory: function TxtExporterService_Factory() { return new TxtExporterService(); }, token: TxtExporterService, providedIn: "root" });
TxtExporterService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], TxtExporterService);

let XlsExporterService = class XlsExporterService extends WorksheetExporter {
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
};
XlsExporterService.ɵprov = ɵɵdefineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(); }, token: XlsExporterService, providedIn: "root" });
XlsExporterService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], XlsExporterService);

let JsonExporterService = class JsonExporterService extends FileExporter {
    constructor() {
        super();
    }
    createContent(rows, options) {
        return JSON.stringify(rows);
    }
    getMimeType() {
        return MIME_JSON;
    }
};
JsonExporterService.ɵprov = ɵɵdefineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
JsonExporterService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], JsonExporterService);

let XlsxExporterService = class XlsxExporterService extends XlsExporterService {
    constructor() {
        super();
    }
    // override
    getMimeType() {
        return MIME_EXCEL_XLSX;
    }
};
XlsxExporterService.ɵprov = ɵɵdefineInjectable({ factory: function XlsxExporterService_Factory() { return new XlsxExporterService(); }, token: XlsxExporterService, providedIn: "root" });
XlsxExporterService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], XlsxExporterService);

let ServiceLocatorService = class ServiceLocatorService {
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
};
ServiceLocatorService.ctorParameters = () => [
    { type: Injector }
];
ServiceLocatorService.ɵprov = ɵɵdefineInjectable({ factory: function ServiceLocatorService_Factory() { return new ServiceLocatorService(ɵɵinject(INJECTOR)); }, token: ServiceLocatorService, providedIn: "root" });
ServiceLocatorService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [Injector])
], ServiceLocatorService);

/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 */
let CdkTableExporter = class CdkTableExporter {
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
     *
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
};
CdkTableExporter.ctorParameters = () => [
    { type: Renderer2 },
    { type: ServiceLocatorService },
    { type: DataExtractorService },
    { type: undefined }
];
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

/*
 * Public API Surface of cdk-table-exporter
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CHAR_SET_UTF, CHAR_SET_UTF_8, COMMA, CONTENT_TYPE_APPLICATION, CONTENT_TYPE_EXCEL, CONTENT_TYPE_TEXT, CdkTableExporter, CdkTableExporterModule, CsvExporterService, DOT, DataExtractorService, EXTENSION_CSV, EXTENSION_JSON, EXTENSION_TEXT, EXTENSION_XLS, EXTENSION_XLSX, ExportType, FileExporter, FileUtil, JsonExporterService, MAT_TABLE_EXPORTER, MIME_CSV, MIME_EXCEL_XLS, MIME_EXCEL_XLSX, MIME_JSON, MIME_TXT, Mime, REF, RETURN, ServiceLocatorService, TAB, TYPE_ARRAY, TxtExporterService, WorksheetExporter, XLSX_COLS, XLS_REGEX, XlsExporterService, XlsxExporterService };
//# sourceMappingURL=cdk-table-exporter.js.map
