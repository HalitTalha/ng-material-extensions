/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
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
export { CdkTableExporter };
if (false) {
    /** @type {?} */
    CdkTableExporter.prototype.cdkTable;
    /** @type {?} */
    CdkTableExporter.prototype.exporterButton;
    /** @type {?} */
    CdkTableExporter.prototype.sheetName;
    /** @type {?} */
    CdkTableExporter.prototype.fileName;
    /** @type {?} */
    CdkTableExporter.prototype.hiddenColumns;
    /** @type {?} */
    CdkTableExporter.prototype.exportCompleted;
    /** @type {?} */
    CdkTableExporter.prototype.exportStarted;
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
     * @protected
     */
    CdkTableExporter.prototype.renderer;
    /**
     * @type {?}
     * @protected
     */
    CdkTableExporter.prototype.jsonExporter;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2Nkay10YWJsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFpQixZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFPdEY7SUFxQkUsMEJBQXNCLFFBQW1CLEVBQVksWUFBaUM7UUFBaEUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFZLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQWpCN0UsY0FBUyxHQUFHLFFBQVEsQ0FBQztRQUNyQixhQUFRLEdBQUcsYUFBYSxDQUFDO1FBRXhCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUMzQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFlbkQsQ0FBQzs7OztJQXVCRCwwQ0FBZTs7O0lBQWY7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxPQUFPOzs7O1FBQUUsVUFBQyxHQUFHO1lBQ2hGLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFHSDs7T0FFRzs7Ozs7SUFDRCxzQ0FBVzs7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUk7WUFDRixJQUFJLENBQUMsb0JB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dEYsMERBQXVDOzs7Ozs7SUFLdkMsaUVBQThDOzs7Ozs7O0lBTTlDLDJEQUE4Qzs7Ozs7O0lBSzlDLHFFQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFSb3dPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEpzb25FeHBvcnRlclNlcnZpY2UgfSBmcm9tICcuL2pzb24tZXhwb3J0ZXIuc2VydmljZSc7XHJcblxyXG4vKipcclxuICogRXhjZWwgZXhwb3J0ZXIgY2xhc3MgZm9yIENka1RhYmxlLiBBYnN0cmFjdHMgdGhlIHZhcnlpbmcgYmVoYXZpb3JzIGFtb25nIGRpZmZlcmVudCBDZGtUYWJsZSBpbXBsZW1lbnRhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2RrVGFibGVFeHBvcnRlciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSBjZGtUYWJsZTogYW55O1xyXG4gIEBJbnB1dCgpIGV4cG9ydGVyQnV0dG9uOiBhbnk7XHJcbiAgQElucHV0KCkgc2hlZXROYW1lID0gJ1NoZWV0MSc7XHJcbiAgQElucHV0KCkgZmlsZU5hbWUgPSAnZXhwb3J0Lnhsc3gnO1xyXG4gIEBJbnB1dCgpIGhpZGRlbkNvbHVtbnM6IEFycmF5PG51bWJlcj47XHJcbiAgQE91dHB1dCgpIGV4cG9ydENvbXBsZXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgZXhwb3J0U3RhcnRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSBhcnJheSB3aGljaCBpcyBleHRyYWN0ZWQgZnJvbSBuYXRpdmVUYWJsZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2RhdGE6IEFycmF5PGFueT47XHJcblxyXG4gIHByaXZhdGUgX2lzSXRlcmF0aW5nOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIF9pbml0aWFsUGFnZUluZGV4OiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgX2lzRXhwb3J0aW5nOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJvdGVjdGVkIGpzb25FeHBvcnRlcjogSnNvbkV4cG9ydGVyU2VydmljZSkge1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE11c3QgcmV0dXJuIHRoZSBudW1iZXIgb2YgcGFnZXMgb2YgdGhlIHRhYmxlXHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdldFBhZ2VDb3VudCgpOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIE11c3QgcmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBwYWdlIHRoYXQncyBkaXNwbGF5ZWRcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0Q3VycmVudFBhZ2VJbmRleCgpOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZW4gY2FsbGVkLCB0aGUgQ2RrVGFibGUgc2hvdWxkIHJlbmRlciB0aGUgcm93cyBpbnNpZGUgdGhlIHBhZ2Ugd2hvc2UgaW5kZXggZ2l2ZW4gYXMgcGFyYW1ldGVyXHJcbiAgICogQHBhcmFtIGluZGV4IHBhZ2UgaW5kZXhcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ29Ub1BhZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIE11c3QgcmV0dXJuIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB0aGUgc3Vic2NyaWJlcnMgYWJvdXQgcGFnZSBjaGFuZ2VzXHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5leHBvcnRlckJ1dHRvbi5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoZXZ0KSA9PiB7XHJcbiAgICAgdGhpcy5leHBvcnRUYWJsZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbi8qKlxyXG4gKiBUcmlnZ2VycyBwYWdlIGV2ZW50IGNoYWluIHRodXMgZXh0cmFjdGluZyBhbmQgZXhwb3J0aW5nIGFsbCB0aGUgcm93cyBpbiBuYXRpdmV0YWJsZXMgaW4gcGFnZXNcclxuICovXHJcbiAgZXhwb3J0VGFibGUoKSB7XHJcbiAgICB0aGlzLmV4cG9ydFN0YXJ0ZWQuZW1pdCgpO1xyXG4gICAgdGhpcy5faXNJdGVyYXRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5faXNFeHBvcnRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5fZGF0YSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICB0aGlzLmVuYWJsZUV4cG9ydEJ1dHRvbihmYWxzZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLmV4cG9ydFdpdGhQYWdpbmF0aW9uKCk7XHJcbiAgICB9IGNhdGNoIChub3RQYWdpbmF0ZWQpIHtcclxuICAgICAgdGhpcy5leHBvcnRTaW5nbGVQYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHBvcnRXaXRoUGFnaW5hdGlvbigpIHtcclxuICAgIHRoaXMuX2luaXRpYWxQYWdlSW5kZXggPSB0aGlzLmdldEN1cnJlbnRQYWdlSW5kZXgoKTtcclxuICAgIHRoaXMuaW5pdFBhZ2VIYW5kbGVyKCk7IC8vIHRvIG1ha2Ugc3VyZSBkYXRhc291cmNlIGlzIG5vdCBudWxsIGR1cmluZyBleHBvcnRcclxuICAgIHRoaXMuZ29Ub1BhZ2UoMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4cG9ydFNpbmdsZVBhZ2UoKSB7XHJcbiAgICB0aGlzLmV4dHJhY3REYXRhT25DdXJyZW50UGFnZSgpO1xyXG4gICAgdGhpcy5leHBvcnRFeHRyYWN0ZWREYXRhKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3REYXRhT25DdXJyZW50UGFnZSgpIHtcclxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdCh0aGlzLmV4dHJhY3RFeGNlbFJvd3MoKSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBpbml0UGFnZUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5faXNJdGVyYXRpbmcpIHtcclxuICAgICAgICAgIHRoaXMuZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5oYXNOZXh0UGFnZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFBhZ2UoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzSXRlcmF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ29Ub1BhZ2UodGhpcy5faW5pdGlhbFBhZ2VJbmRleCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc0V4cG9ydGluZykge1xyXG4gICAgICAgICAgdGhpcy5faXNFeHBvcnRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuZXhwb3J0RXh0cmFjdGVkRGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhwb3J0RXh0cmFjdGVkRGF0YSgpIHtcclxuICAgIHRoaXMuanNvbkV4cG9ydGVyLmV4cG9ydEV4Y2VsKHRoaXMuZXh0cmFjdEV4Y2VsSGVhZGVyUm93KCksIHRoaXMuX2RhdGEsIHRoaXMuZmlsZU5hbWUsIHRoaXMuc2hlZXROYW1lKTtcclxuICAgIHRoaXMuX2RhdGEgPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgdGhpcy5lbmFibGVFeHBvcnRCdXR0b24odHJ1ZSk7XHJcbiAgICB0aGlzLmV4cG9ydENvbXBsZXRlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0RXhjZWxSb3dzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udmVydFRvSnNvbkFycmF5KHRoaXMuZ2V0UmVuZGVyZWRSb3dzKHRoaXMuY2RrVGFibGUuX3Jvd091dGxldCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0RXhjZWxIZWFkZXJSb3coKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9Kc29uQXJyYXkodGhpcy5nZXRSZW5kZXJlZFJvd3ModGhpcy5jZGtUYWJsZS5faGVhZGVyUm93T3V0bGV0KSlbMF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlbmRlcmVkUm93cyhvdXRsZXQ6IERhdGFSb3dPdXRsZXQpOiBIVE1MVGFibGVSb3dFbGVtZW50W10ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jZGtUYWJsZS5fZ2V0UmVuZGVyZWRSb3dzKG91dGxldCkgYXMgSFRNTFRhYmxlUm93RWxlbWVudFtdO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnRUb0pzb25BcnJheShyb3dzOiBIVE1MVGFibGVSb3dFbGVtZW50W10pOiBBcnJheTxhbnk+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxhbnk+KCk7XHJcblxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCByb3c6IEFycmF5PHN0cmluZz4gPSB0aGlzLmNvbnZlcnRSb3cocm93c1tpXSk7XHJcbiAgICAgIHRoaXMuY3VzdG9taXplUm93KHJvdyk7XHJcbiAgICAgIHJlc3VsdC5wdXNoKHRoaXMuY3JlYXRlRXhjZWxJdGVtKHJvdykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFJvdyhyb3c6IEhUTUxUYWJsZVJvd0VsZW1lbnQpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICBjb25zdCBjZWxsczogYW55ID0gcm93LmNoaWxkcmVuO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5zaG91bGRIaWRlKGkpKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZWxlbWVudCA9IGNlbGxzLml0ZW0oaSkuaW5uZXJUZXh0O1xyXG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3VsZEhpZGUoY29sdW1uSW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuaGlkZGVuQ29sdW1ucyAmJiB0aGlzLmhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uSW5kZXgpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGN1c3RvbWl6ZVJvdyhyb3c6IEFycmF5PHN0cmluZz4pOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIHJldHVybiByb3c7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUV4Y2VsSXRlbShyb3c6IEFycmF5PHN0cmluZz4pOiBhbnkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJvdyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFzTmV4dFBhZ2UoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5nZXRDdXJyZW50UGFnZUluZGV4KCkgPCB0aGlzLmdldFBhZ2VDb3VudCgpIC0gMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIG5leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5nb1RvUGFnZSh0aGlzLmdldEN1cnJlbnRQYWdlSW5kZXgoKSArIDEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbmFibGVFeHBvcnRCdXR0b24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmV4cG9ydGVyQnV0dG9uLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIHZhbHVlID8gbnVsbCA6ICd0cnVlJyk7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=