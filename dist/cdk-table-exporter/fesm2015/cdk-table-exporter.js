import { CdkTableModule } from '@angular/cdk/table';
import { NgModule, EventEmitter, Input, Output, Injectable, ɵɵdefineInjectable, Injector, ɵɵinject, INJECTOR } from '@angular/core';
import { saveAs } from 'file-saver';
import { utils, write } from 'xlsx';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ExportType = {
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
class Mime {
    /**
     * @param {?} extension
     * @param {?} contentTypeHeader
     */
    constructor(extension, contentTypeHeader) {
        this.extension = extension;
        this.contentTypeHeader = contentTypeHeader;
    }
}
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
const MAT_TABLE_EXPORTER = 'mat-table-exporter';
/** @type {?} */
const TYPE_ARRAY = 'array';
/** @type {?} */
const CHAR_SET_UTF = ';charset=utf-';
/** @type {?} */
const CHAR_SET_UTF_8 = CHAR_SET_UTF + '8';
/** @type {?} */
const CHAR_SET_UTF_16 = CHAR_SET_UTF + '16';
/** @type {?} */
const CONTENT_TYPE_TEXT = ExportType.TXT + '/';
/** @type {?} */
const CONTENT_TYPE_APPLICATION = 'application/';
/** @type {?} */
const CONTENT_TYPE_EXCEL = CONTENT_TYPE_APPLICATION + 'octet-stream';
/** @type {?} */
const P = '.';
/** @type {?} */
const EXTENSION_XLS = P + ExportType.XLS;
/** @type {?} */
const EXTENSION_XLSX = P + ExportType.XLSX;
/** @type {?} */
const EXTENSION_CSV = P + ExportType.CSV;
/** @type {?} */
const EXTENSION_JSON = P + ExportType.JSON;
/** @type {?} */
const EXTENSION_TEXT = P + ExportType.TXT;
/** @type {?} */
const MIME_EXCEL_XLS = new Mime(EXTENSION_XLS, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
/** @type {?} */
const MIME_EXCEL_XLSX = new Mime(EXTENSION_XLSX, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
/** @type {?} */
const MIME_JSON = new Mime(EXTENSION_JSON, CONTENT_TYPE_TEXT + JSON + CHAR_SET_UTF_8);
/** @type {?} */
const MIME_TXT = new Mime(EXTENSION_TEXT, CONTENT_TYPE_TEXT + ExportType.TXT + CHAR_SET_UTF_16);
/** @type {?} */
const MIME_CSV = new Mime(EXTENSION_CSV, CONTENT_TYPE_TEXT + ExportType.CSV + CHAR_SET_UTF_8);
/** @type {?} */
const REF = '!ref';
/** @type {?} */
const XLS_REGEX = P + '*\.' + ExportType.XLS + '$';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileUtil {
    /**
     * @param {?} content
     * @param {?} mime
     * @param {?=} options
     * @return {?}
     */
    static save(content, mime, options) {
        /** @type {?} */
        const blob = new Blob([content], { type: mime.contentTypeHeader });
        /** @type {?} */
        let fileName = MAT_TABLE_EXPORTER;
        if (options && options.fileName) {
            fileName = options.fileName;
        }
        saveAs(blob, fileName + mime.extension);
    }
    /**
     * @param {?} fileName
     * @return {?}
     */
    static isXls(fileName) {
        return fileName.toLowerCase().match(XLS_REGEX) != null;
    }
    /**
     * @param {?=} fileName
     * @return {?}
     */
    static identifyExportType(fileName) {
        if (fileName && FileUtil.isXls(fileName)) {
            return ExportType.XLS;
        }
        else {
            return ExportType.XLSX;
        }
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    static removeExtension(options) {
        options.fileName = options.fileName.split(P)[0];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 * @abstract
 */
// @Directive()
class CdkTableExporter {
    /**
     * @param {?} renderer
     * @param {?} serviceLocator
     * @param {?} dataExtractor
     * @param {?} table
     * @param {?} viewContainerRef
     */
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
    /**
     * @return {?}
     */
    get cdkTable() {
        return this._cdkTable;
    }
    /**
     * @deprecated
     * @param {?} value
     * @return {?}
     */
    set cdkTable(value) {
        console.warn('cdkTable input is deprecated!');
        this._cdkTable = value;
    }
    /**
     * @return {?}
     */
    get exporterButton() {
        return this._exporterButton;
    }
    /**
     * @deprecated
     * @param {?} value
     * @return {?}
     */
    set exporterButton(value) {
        console.warn('exporterButton input is deprecated!');
        this._exporterButton = value;
        this.setButtonListener();
    }
    /**
     * @return {?}
     */
    get fileName() {
        return this._fileName;
    }
    /**
     * @deprecated
     * @param {?} value
     * @return {?}
     */
    set fileName(value) {
        console.warn('fileName input is deprecated!');
        this._fileName = value;
    }
    /**
     * @return {?}
     */
    get sheetName() {
        return this._sheetName;
    }
    /**
     * @deprecated
     * @param {?} value
     * @return {?}
     */
    set sheetName(value) {
        console.warn('sheetName input is deprecated!');
        this._sheetName = value;
    }
    /**
     * @private
     * @return {?}
     */
    initCdkTable() {
        // tslint:disable-next-line:no-string-literal
        /** @type {?} */
        const table = this.viewContainerRef['_data'].componentView.component;
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
    /**
     * @private
     * @param {?=} exportType
     * @return {?}
     */
    initExporterService(exportType) {
        if (exportType !== ExportType.OTHER) {
            this.exporter = this.serviceLocator.getService(exportType);
        }
    }
    /**
     * @private
     * @return {?}
     */
    setButtonListener() {
        if (this._exporterButton) {
            this.renderer.listen(this._exporterButton._elementRef.nativeElement, 'click', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => {
                /** @type {?} */
                const options = (/** @type {?} */ ({ fileName: this._fileName, sheet: this._sheetName }));
                this.exportTable(FileUtil.identifyExportType(this._fileName), options); // this is to support deprecated way of exporting
            }));
        }
    }
    /**
     * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
     * @param {?=} exportTypeParam
     * @param {?=} options
     * @return {?}
     */
    exportTable(exportTypeParam, options) {
        /** @type {?} */
        const exportType = this.correctExportType(exportTypeParam);
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
    }
    /**
     * @private
     * @param {?=} exportTypeParam
     * @return {?}
     */
    correctExportType(exportTypeParam) {
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
    }
    /**
     * @private
     * @return {?}
     */
    exportWithPagination() {
        this._initialPageIndex = this.getCurrentPageIndex();
        this.initPageHandler();
        this.goToPage(0);
    }
    /**
     * @private
     * @return {?}
     */
    exportSinglePage() {
        this.extractDataOnCurrentPage();
        this.extractTableFooter();
        this.exportExtractedData();
    }
    /**
     * @private
     * @return {?}
     */
    extractDataOnCurrentPage() {
        this._data = this._data.concat(this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns));
    }
    /**
     * @private
     * @return {?}
     */
    initPageHandler() {
        if (!this._subscription) {
            this._subscription = this.getPageChangeObservable().subscribe((/**
             * @return {?}
             */
            () => {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
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
                }));
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    exportExtractedData() {
        this.exporter.export(this._data, this._options);
        this._data = new Array();
        this.enableExportButton(true);
        this.exportCompleted.emit();
    }
    /**
     * @private
     * @param {?} outlet
     * @return {?}
     */
    extractSpecialRow(outlet) {
        /** @type {?} */
        const row = this.dataExtractor.extractRow(this._cdkTable, this.hiddenColumns, outlet);
        if (row) {
            this._data.push(row);
        }
    }
    /**
     * @private
     * @return {?}
     */
    extractTableHeader() {
        this.extractSpecialRow(this._cdkTable._headerRowOutlet);
    }
    /**
     * @private
     * @return {?}
     */
    extractTableFooter() {
        this.extractSpecialRow(this._cdkTable._footerRowOutlet);
    }
    /**
     * @return {?}
     */
    hasNextPage() {
        if (this.getCurrentPageIndex() < this.getPageCount() - 1) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    nextPage() {
        this.goToPage(this.getCurrentPageIndex() + 1);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    enableExportButton(value) {
        if (this._exporterButton) {
            this.renderer.setProperty(this._exporterButton._elementRef.nativeElement, 'disabled', value ? null : 'true');
        }
    }
}
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
class JsonExporterService {
    constructor() {
    }
    /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    export(rows, options) {
        /** @type {?} */
        const jsonContent = JSON.stringify(rows);
        FileUtil.save(jsonContent, MIME_JSON, options);
    }
}
JsonExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
JsonExporterService.ctorParameters = () => [];
/** @nocollapse */ JsonExporterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An angular service class that is used to create files out of json object arrays.
 * @abstract
 * @template T
 */
class WorksheetExporter {
    constructor() { }
    /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    export(rows, options) {
        if (!rows) {
            throw new Error('Empty json array is provided, rows parameter is mandatory!');
        }
        /** @type {?} */
        const worksheet = utils.json_to_sheet(rows, {
            skipHeader: true // we don't want to see object properties as our headers
        });
        this.writeToFile(worksheet, options);
    }
    /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    writeToFile(worksheet, options) {
        /** @type {?} */
        const content = this.createContent(worksheet, options);
        /** @type {?} */
        const mimeType = this.getMimeType();
        FileUtil.save(content, mimeType, options);
    }
}
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
class TxtExporterService extends WorksheetExporter {
    constructor() {
        super();
    }
    /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    createContent(worksheet, options) {
        return utils.sheet_to_txt(worksheet);
    }
    /**
     * @return {?}
     */
    getMimeType() {
        return MIME_TXT;
    }
}
TxtExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TxtExporterService.ctorParameters = () => [];
/** @nocollapse */ TxtExporterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TxtExporterService_Factory() { return new TxtExporterService(); }, token: TxtExporterService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class XlsExporterService extends WorksheetExporter {
    constructor() {
        super();
    }
    /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    createContent(worksheet, options) {
        /** @type {?} */
        const workBook = utils.book_new();
        if (!options) {
            options = (/** @type {?} */ ({}));
        }
        this.correctType(options);
        utils.book_append_sheet(workBook, worksheet, options.sheet);
        return write(workBook, options);
    }
    /**
     * @return {?}
     */
    getMimeType() {
        return MIME_EXCEL_XLS;
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    correctType(options) {
        if (!options.type) {
            options.type = TYPE_ARRAY;
        }
    }
}
XlsExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
XlsExporterService.ctorParameters = () => [];
/** @nocollapse */ XlsExporterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(); }, token: XlsExporterService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class XlsxExporterService extends XlsExporterService {
    constructor() {
        super();
    }
    // override
    /**
     * @return {?}
     */
    getMimeType() {
        return MIME_EXCEL_XLSX;
    }
}
XlsxExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
XlsxExporterService.ctorParameters = () => [];
/** @nocollapse */ XlsxExporterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function XlsxExporterService_Factory() { return new XlsxExporterService(); }, token: XlsxExporterService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CsvExporterService extends WorksheetExporter {
    constructor() {
        super();
    }
    /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    createContent(worksheet, options) {
        return utils.sheet_to_csv(worksheet);
    }
    /**
     * @return {?}
     */
    getMimeType() {
        return MIME_CSV;
    }
}
CsvExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CsvExporterService.ctorParameters = () => [];
/** @nocollapse */ CsvExporterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CsvExporterService_Factory() { return new CsvExporterService(); }, token: CsvExporterService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ServiceLocatorService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * @param {?} exportType
     * @return {?}
     */
    getService(exportType) {
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
    }
}
ServiceLocatorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ServiceLocatorService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ ServiceLocatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ServiceLocatorService_Factory() { return new ServiceLocatorService(ɵɵinject(INJECTOR)); }, token: ServiceLocatorService, providedIn: "root" });
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
class DataExtractorService {
    constructor() { }
    /**
     * @param {?} cdkTable
     * @param {?} hiddenColumns
     * @return {?}
     */
    extractRows(cdkTable, hiddenColumns) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, cdkTable._rowOutlet);
    }
    /**
     * @param {?} cdkTable
     * @param {?} hiddenColumns
     * @param {?} outlet
     * @return {?}
     */
    extractRow(cdkTable, hiddenColumns, outlet) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, outlet)[0];
    }
    /**
     * @private
     * @param {?} cdkTable
     * @param {?} hiddenColumns
     * @param {?} outlet
     * @return {?}
     */
    getRowsAsJsonArray(cdkTable, hiddenColumns, outlet) {
        /** @type {?} */
        const renderedRows = this.getRenderedRows(cdkTable, outlet);
        return this.convertToJsonArray(hiddenColumns, renderedRows);
    }
    /**
     * @private
     * @param {?} cdkTable
     * @param {?} outlet
     * @return {?}
     */
    getRenderedRows(cdkTable, outlet) {
        return (/** @type {?} */ (cdkTable._getRenderedRows(outlet)));
    }
    /**
     * @private
     * @param {?} hiddenColumns
     * @param {?} rows
     * @return {?}
     */
    convertToJsonArray(hiddenColumns, rows) {
        /** @type {?} */
        const result = new Array();
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < rows.length; i++) {
            /** @type {?} */
            const row = this.convertRow(hiddenColumns, rows[i]);
            result.push(this.createExcelItem(row));
        }
        return result;
    }
    /**
     * @private
     * @param {?} hiddenColumns
     * @param {?} row
     * @return {?}
     */
    convertRow(hiddenColumns, row) {
        /** @type {?} */
        const result = new Array();
        /** @type {?} */
        const cells = row.children;
        for (let i = 0; i < cells.length; i++) {
            if (!this.shouldHide(hiddenColumns, i)) {
                /** @type {?} */
                const element = cells.item(i).innerText;
                result.push(element);
            }
        }
        return result;
    }
    /**
     * @private
     * @param {?} hiddenColumns
     * @param {?} columnIndex
     * @return {?}
     */
    shouldHide(hiddenColumns, columnIndex) {
        if (hiddenColumns && hiddenColumns.includes(columnIndex)) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @private
     * @param {?} row
     * @return {?}
     */
    createExcelItem(row) {
        return Object.assign({}, row);
    }
}
DataExtractorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DataExtractorService.ctorParameters = () => [];
/** @nocollapse */ DataExtractorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DataExtractorService_Factory() { return new DataExtractorService(); }, token: DataExtractorService, providedIn: "root" });

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
