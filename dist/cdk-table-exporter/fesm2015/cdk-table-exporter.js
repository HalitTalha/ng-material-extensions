import { NgModule, EventEmitter, Input, Output, Injectable, defineInjectable } from '@angular/core';
import { utils, writeFile } from 'xlsx';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CdkTableExporterModule {
}
CdkTableExporterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Excel exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 * @abstract
 */
class CdkTableExporter {
    /**
     * @param {?} renderer
     * @param {?} jsonExporter
     */
    constructor(renderer, jsonExporter) {
        this.renderer = renderer;
        this.jsonExporter = jsonExporter;
        this.sheetName = 'Sheet1';
        this.fileName = 'export.xlsx';
        this.exportCompleted = new EventEmitter();
        this.exportStarted = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.renderer.listen(this.exporterButton._elementRef.nativeElement, 'click', (/**
         * @param {?} evt
         * @return {?}
         */
        (evt) => {
            this.exportTable();
        }));
    }
    /**
     * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
     * @return {?}
     */
    exportTable() {
        this.exportStarted.emit();
        this._isIterating = true;
        this._isExporting = true;
        this._data = new Array();
        this.enableExportButton(false);
        try {
            this.exportWithPagination();
        }
        catch (notPaginated) {
            this.exportSinglePage();
        }
    }
    /**
     * @private
     * @return {?}
     */
    exportWithPagination() {
        this._initialPageIndex = this.getCurrentPageIndex();
        this.initPageHandler(); // to make sure datasource is not null during export
        this.goToPage(0);
    }
    /**
     * @private
     * @return {?}
     */
    exportSinglePage() {
        this.extractDataOnCurrentPage();
        this.exportExtractedData();
    }
    /**
     * @private
     * @return {?}
     */
    extractDataOnCurrentPage() {
        this._data = this._data.concat(this.extractExcelRows());
    }
    /**
     * @private
     * @return {?}
     */
    initPageHandler() {
        this.getPageChangeObservable().subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
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
                    this.exportExtractedData();
                }
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    exportExtractedData() {
        this.jsonExporter.exportExcel(this.extractExcelHeaderRow(), this._data, this.fileName, this.sheetName);
        this._data = new Array();
        this.enableExportButton(true);
        this.exportCompleted.emit();
    }
    /**
     * @private
     * @return {?}
     */
    extractExcelRows() {
        return this.convertToJsonArray(this.getRenderedRows(this.cdkTable._rowOutlet));
    }
    /**
     * @private
     * @return {?}
     */
    extractExcelHeaderRow() {
        return this.convertToJsonArray(this.getRenderedRows(this.cdkTable._headerRowOutlet))[0];
    }
    /**
     * @private
     * @param {?} outlet
     * @return {?}
     */
    getRenderedRows(outlet) {
        /** @type {?} */
        const result = (/** @type {?} */ (this.cdkTable._getRenderedRows(outlet)));
        return result;
    }
    /**
     * @private
     * @param {?} rows
     * @return {?}
     */
    convertToJsonArray(rows) {
        /** @type {?} */
        const result = new Array();
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < rows.length; i++) {
            /** @type {?} */
            const row = this.convertRow(rows[i]);
            this.customizeRow(row);
            result.push(this.createExcelItem(row));
        }
        return result;
    }
    /**
     * @private
     * @param {?} row
     * @return {?}
     */
    convertRow(row) {
        /** @type {?} */
        const result = new Array();
        /** @type {?} */
        const cells = row.children;
        for (let i = 0; i < cells.length; i++) {
            if (this.shouldHide(i)) {
                continue;
            }
            /** @type {?} */
            const element = cells.item(i).innerText;
            result.push(element);
        }
        return result;
    }
    /**
     * @private
     * @param {?} columnIndex
     * @return {?}
     */
    shouldHide(columnIndex) {
        if (this.hiddenColumns && this.hiddenColumns.includes(columnIndex)) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} row
     * @return {?}
     */
    customizeRow(row) {
        return row;
    }
    /**
     * @private
     * @param {?} row
     * @return {?}
     */
    createExcelItem(row) {
        return Object.assign({}, row);
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
        this.renderer.setProperty(this.exporterButton._elementRef.nativeElement, 'disabled', value ? null : 'true');
    }
}
CdkTableExporter.propDecorators = {
    cdkTable: [{ type: Input }],
    exporterButton: [{ type: Input }],
    sheetName: [{ type: Input }],
    fileName: [{ type: Input }],
    hiddenColumns: [{ type: Input }],
    exportCompleted: [{ type: Output }],
    exportStarted: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An angular service class that is used to create excel files out of json object arrays.
 */
class JsonExporterService {
    constructor() { }
    /**
     * Exports excel file by employing xlsx sheetjs
     * @param {?} header Any json object that holds the header information of the exported excel file aka the first row of the excel
     * @param {?} rows Any json array that will be the rows of the exported excel
     * @param {?} fileName Exported excel file's name
     * @param {?} sheetName The name of the sheet that keeps the exported data
     * @param {?=} hiddenColumns Properties that are wanted to be hidden, i.e. id, createdDate, auditable properties etc.
     * @return {?}
     */
    exportExcel(header, rows, fileName, sheetName, hiddenColumns) {
        rows.unshift(header);
        if (hiddenColumns) {
            for (let index = 0; index < rows.length; index++) {
                rows[index] = this.hideColumns(hiddenColumns, rows[index]);
            }
        }
        /** @type {?} */
        const wb = utils.book_new();
        /** @type {?} */
        const ws = utils.json_to_sheet(rows, {
            skipHeader: true // we are skipping header otherwise xlsx puts the properties of the given json object
        });
        utils.book_append_sheet(wb, ws, sheetName);
        fileName = this.appendExtensionIfNotProvided(fileName);
        /* save to file */
        writeFile(wb, fileName);
    }
    /**
     * Hides unwanted properties of an entity
     * @private
     * @param {?} columns properties to be hidden in the returned object
     * @param {?} item an item that corresponds to a row inside the exported excel
     * @return {?}
     */
    hideColumns(columns, item) {
        for (let index = 0; index < columns.length; index++) {
            /** @type {?} */
            const element = columns[index];
            delete item[element];
        }
    }
    /**
     * Provides default file extension (which is xlsx) to the parameter fileName
     * @private
     * @param {?} fileName
     * @return {?}
     */
    appendExtensionIfNotProvided(fileName) {
        if (!fileName.includes(ExcelExtension.XLSX) &&
            !fileName.includes(ExcelExtension.XLS)) {
            fileName = fileName.concat(ExcelExtension.XLSX);
        }
        return fileName;
    }
}
JsonExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
JsonExporterService.ctorParameters = () => [];
/** @nocollapse */ JsonExporterService.ngInjectableDef = defineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
/** @enum {string} */
const ExcelExtension = {
    XLSX: ".xlsx",
    XLS: ".xls",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CdkTableExporter, JsonExporterService, CdkTableExporterModule };

//# sourceMappingURL=cdk-table-exporter.js.map