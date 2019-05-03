import { NgModule, EventEmitter, Input, Output, Injectable, defineInjectable } from '@angular/core';
import { utils, writeFile } from 'xlsx';

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
                    imports: [],
                    exports: []
                },] }
    ];
    return CdkTableExporterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Excel exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 * @abstract
 */
var CdkTableExporter = /** @class */ (function () {
    function CdkTableExporter(renderer, jsonExporter) {
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
    CdkTableExporter.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.listen(this.exporterButton._elementRef.nativeElement, 'click', (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            _this.exportTable();
        }));
    };
    /**
     * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
     */
    /**
     * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
     * @return {?}
     */
    CdkTableExporter.prototype.exportTable = /**
     * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
     * @return {?}
     */
    function () {
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
        this.initPageHandler(); // to make sure datasource is not null during export
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
        this._data = this._data.concat(this.extractExcelRows());
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
        this.getPageChangeObservable().subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
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
                    _this.exportExtractedData();
                }
            }));
        }));
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
        this.jsonExporter.exportExcel(this.extractExcelHeaderRow(), this._data, this.fileName, this.sheetName);
        this._data = new Array();
        this.enableExportButton(true);
        this.exportCompleted.emit();
    };
    /**
     * @private
     * @return {?}
     */
    CdkTableExporter.prototype.extractExcelRows = /**
     * @private
     * @return {?}
     */
    function () {
        return this.convertToJsonArray(this.getRenderedRows(this.cdkTable._rowOutlet));
    };
    /**
     * @private
     * @return {?}
     */
    CdkTableExporter.prototype.extractExcelHeaderRow = /**
     * @private
     * @return {?}
     */
    function () {
        return this.convertToJsonArray(this.getRenderedRows(this.cdkTable._headerRowOutlet))[0];
    };
    /**
     * @private
     * @param {?} outlet
     * @return {?}
     */
    CdkTableExporter.prototype.getRenderedRows = /**
     * @private
     * @param {?} outlet
     * @return {?}
     */
    function (outlet) {
        /** @type {?} */
        var result = (/** @type {?} */ (this.cdkTable._getRenderedRows(outlet)));
        return result;
    };
    /**
     * @private
     * @param {?} rows
     * @return {?}
     */
    CdkTableExporter.prototype.convertToJsonArray = /**
     * @private
     * @param {?} rows
     * @return {?}
     */
    function (rows) {
        /** @type {?} */
        var result = new Array();
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < rows.length; i++) {
            /** @type {?} */
            var row = this.convertRow(rows[i]);
            this.customizeRow(row);
            result.push(this.createExcelItem(row));
        }
        return result;
    };
    /**
     * @private
     * @param {?} row
     * @return {?}
     */
    CdkTableExporter.prototype.convertRow = /**
     * @private
     * @param {?} row
     * @return {?}
     */
    function (row) {
        /** @type {?} */
        var result = new Array();
        /** @type {?} */
        var cells = row.children;
        for (var i = 0; i < cells.length; i++) {
            if (this.shouldHide(i)) {
                continue;
            }
            /** @type {?} */
            var element = cells.item(i).innerText;
            result.push(element);
        }
        return result;
    };
    /**
     * @private
     * @param {?} columnIndex
     * @return {?}
     */
    CdkTableExporter.prototype.shouldHide = /**
     * @private
     * @param {?} columnIndex
     * @return {?}
     */
    function (columnIndex) {
        if (this.hiddenColumns && this.hiddenColumns.includes(columnIndex)) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} row
     * @return {?}
     */
    CdkTableExporter.prototype.customizeRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        return row;
    };
    /**
     * @private
     * @param {?} row
     * @return {?}
     */
    CdkTableExporter.prototype.createExcelItem = /**
     * @private
     * @param {?} row
     * @return {?}
     */
    function (row) {
        return Object.assign({}, row);
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
        this.renderer.setProperty(this.exporterButton._elementRef.nativeElement, 'disabled', value ? null : 'true');
    };
    CdkTableExporter.propDecorators = {
        cdkTable: [{ type: Input }],
        exporterButton: [{ type: Input }],
        sheetName: [{ type: Input }],
        fileName: [{ type: Input }],
        hiddenColumns: [{ type: Input }],
        exportCompleted: [{ type: Output }],
        exportStarted: [{ type: Output }]
    };
    return CdkTableExporter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JsonExporterService = /** @class */ (function () {
    function JsonExporterService() {
    }
    /**
     * Exports excel file by employing xlsx sheetjs
     * @param header Any json object that holds the header information of the exported excel file aka the first row of the excel
     * @param rows Any json array that will be the rows of the exported excel
     * @param fileName Exported excel file's name
     * @param sheetName The name of the sheet that keeps the exported data
     * @param hiddenColumns Properties that are wanted to be hidden, i.e. id, createdDate, auditable properties etc.
     */
    /**
     * Exports excel file by employing xlsx sheetjs
     * @param {?} header Any json object that holds the header information of the exported excel file aka the first row of the excel
     * @param {?} rows Any json array that will be the rows of the exported excel
     * @param {?} fileName Exported excel file's name
     * @param {?} sheetName The name of the sheet that keeps the exported data
     * @param {?=} hiddenColumns Properties that are wanted to be hidden, i.e. id, createdDate, auditable properties etc.
     * @return {?}
     */
    JsonExporterService.prototype.exportExcel = /**
     * Exports excel file by employing xlsx sheetjs
     * @param {?} header Any json object that holds the header information of the exported excel file aka the first row of the excel
     * @param {?} rows Any json array that will be the rows of the exported excel
     * @param {?} fileName Exported excel file's name
     * @param {?} sheetName The name of the sheet that keeps the exported data
     * @param {?=} hiddenColumns Properties that are wanted to be hidden, i.e. id, createdDate, auditable properties etc.
     * @return {?}
     */
    function (header, rows, fileName, sheetName, hiddenColumns) {
        rows.unshift(header);
        if (hiddenColumns) {
            for (var index = 0; index < rows.length; index++) {
                rows[index] = this.hideColumns(hiddenColumns, rows[index]);
            }
        }
        /** @type {?} */
        var wb = utils.book_new();
        /** @type {?} */
        var ws = utils.json_to_sheet(rows, {
            skipHeader: true // we are skipping header otherwise xlsx puts the properties of the given json object
        });
        utils.book_append_sheet(wb, ws, sheetName);
        fileName = this.appendExtensionIfNotProvided(fileName);
        /* save to file */
        writeFile(wb, fileName);
    };
    /**
     * Hides unwanted properties of an entity
     * @param columns properties to be hidden in the returned object
     * @param item an item that corresponds to a row inside the exported excel
     */
    /**
     * Hides unwanted properties of an entity
     * @private
     * @param {?} columns properties to be hidden in the returned object
     * @param {?} item an item that corresponds to a row inside the exported excel
     * @return {?}
     */
    JsonExporterService.prototype.hideColumns = /**
     * Hides unwanted properties of an entity
     * @private
     * @param {?} columns properties to be hidden in the returned object
     * @param {?} item an item that corresponds to a row inside the exported excel
     * @return {?}
     */
    function (columns, item) {
        for (var index = 0; index < columns.length; index++) {
            /** @type {?} */
            var element = columns[index];
            delete item[element];
        }
    };
    /**
     * Provides default file extension (which is xlsx) to the parameter fileName
     */
    /**
     * Provides default file extension (which is xlsx) to the parameter fileName
     * @private
     * @param {?} fileName
     * @return {?}
     */
    JsonExporterService.prototype.appendExtensionIfNotProvided = /**
     * Provides default file extension (which is xlsx) to the parameter fileName
     * @private
     * @param {?} fileName
     * @return {?}
     */
    function (fileName) {
        if (!fileName.includes(ExcelExtension.XLSX) &&
            !fileName.includes(ExcelExtension.XLS)) {
            fileName = fileName.concat(ExcelExtension.XLSX);
        }
        return fileName;
    };
    JsonExporterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    JsonExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ JsonExporterService.ngInjectableDef = defineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
    return JsonExporterService;
}());
/** @enum {string} */
var ExcelExtension = {
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