/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
/**
 * Excel exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 * @abstract
 */
export class CdkTableExporter {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2Nkay10YWJsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFpQixZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFPdEYsTUFBTSxPQUFnQixnQkFBZ0I7Ozs7O0lBcUJwQyxZQUFzQixRQUFtQixFQUFZLFlBQWlDO1FBQWhFLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBWSxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFqQjdFLGNBQVMsR0FBRyxRQUFRLENBQUM7UUFDckIsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQUV4QixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDM0Msa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBZW5ELENBQUM7Ozs7SUF1QkQsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxPQUFPOzs7O1FBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNwRixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQU1ELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsSUFBSTtZQUNGLElBQUksQ0FBQyxvQkFBb0IsRUFB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UUFDaEIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ3hELE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7O0lBQ00sUUFBUTtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsS0FBYztRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoSCxDQUFDOzs7dUJBbkxBLEtBQUs7NkJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxNQUFNOzRCQUNOLE1BQU07Ozs7SUFOUCxvQ0FBdUI7O0lBQ3ZCLDBDQUE2Qjs7SUFDN0IscUNBQThCOztJQUM5QixvQ0FBa0M7O0lBQ2xDLHlDQUFzQzs7SUFDdEMsMkNBQXFEOztJQUNyRCx5Q0FBbUQ7Ozs7OztJQUtuRCxpQ0FBMEI7Ozs7O0lBRTFCLHdDQUE4Qjs7Ozs7SUFFOUIsNkNBQWtDOzs7OztJQUVsQyx3Q0FBOEI7Ozs7O0lBRWxCLG9DQUE2Qjs7Ozs7SUFBRSx3Q0FBMkM7Ozs7OztJQU90RiwwREFBdUM7Ozs7OztJQUt2QyxpRUFBOEM7Ozs7Ozs7SUFNOUMsMkRBQThDOzs7Ozs7SUFLOUMscUVBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJvd091dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSnNvbkV4cG9ydGVyU2VydmljZSB9IGZyb20gJy4vanNvbi1leHBvcnRlci5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBFeGNlbCBleHBvcnRlciBjbGFzcyBmb3IgQ2RrVGFibGUuIEFic3RyYWN0cyB0aGUgdmFyeWluZyBiZWhhdmlvcnMgYW1vbmcgZGlmZmVyZW50IENka1RhYmxlIGltcGxlbWVudGF0aW9ucy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDZGtUYWJsZUV4cG9ydGVyIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGNka1RhYmxlOiBhbnk7XHJcbiAgQElucHV0KCkgZXhwb3J0ZXJCdXR0b246IGFueTtcclxuICBASW5wdXQoKSBzaGVldE5hbWUgPSAnU2hlZXQxJztcclxuICBASW5wdXQoKSBmaWxlTmFtZSA9ICdleHBvcnQueGxzeCc7XHJcbiAgQElucHV0KCkgaGlkZGVuQ29sdW1uczogQXJyYXk8bnVtYmVyPjtcclxuICBAT3V0cHV0KCkgZXhwb3J0Q29tcGxldGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBleHBvcnRTdGFydGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvKipcclxuICAgKiBEYXRhIGFycmF5IHdoaWNoIGlzIGV4dHJhY3RlZCBmcm9tIG5hdGl2ZVRhYmxlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZGF0YTogQXJyYXk8YW55PjtcclxuXHJcbiAgcHJpdmF0ZSBfaXNJdGVyYXRpbmc6IGJvb2xlYW47XHJcblxyXG4gIHByaXZhdGUgX2luaXRpYWxQYWdlSW5kZXg6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBfaXNFeHBvcnRpbmc6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLCBwcm90ZWN0ZWQganNvbkV4cG9ydGVyOiBKc29uRXhwb3J0ZXJTZXJ2aWNlKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gdGhlIG51bWJlciBvZiBwYWdlcyBvZiB0aGUgdGFibGVcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0UGFnZUNvdW50KCk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IHBhZ2UgdGhhdCdzIGRpc3BsYXllZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRDdXJyZW50UGFnZUluZGV4KCk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiBjYWxsZWQsIHRoZSBDZGtUYWJsZSBzaG91bGQgcmVuZGVyIHRoZSByb3dzIGluc2lkZSB0aGUgcGFnZSB3aG9zZSBpbmRleCBnaXZlbiBhcyBwYXJhbWV0ZXJcclxuICAgKiBAcGFyYW0gaW5kZXggcGFnZSBpbmRleFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnb1RvUGFnZShpbmRleDogbnVtYmVyKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHRoZSBzdWJzY3JpYmVycyBhYm91dCBwYWdlIGNoYW5nZXNcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0UGFnZUNoYW5nZU9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmV4cG9ydGVyQnV0dG9uLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsIChldnQpID0+IHtcclxuICAgICB0aGlzLmV4cG9ydFRhYmxlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuLyoqXHJcbiAqIFRyaWdnZXJzIHBhZ2UgZXZlbnQgY2hhaW4gdGh1cyBleHRyYWN0aW5nIGFuZCBleHBvcnRpbmcgYWxsIHRoZSByb3dzIGluIG5hdGl2ZXRhYmxlcyBpbiBwYWdlc1xyXG4gKi9cclxuICBleHBvcnRUYWJsZSgpIHtcclxuICAgIHRoaXMuZXhwb3J0U3RhcnRlZC5lbWl0KCk7XHJcbiAgICB0aGlzLl9pc0l0ZXJhdGluZyA9IHRydWU7XHJcbiAgICB0aGlzLl9pc0V4cG9ydGluZyA9IHRydWU7XHJcbiAgICB0aGlzLl9kYXRhID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgIHRoaXMuZW5hYmxlRXhwb3J0QnV0dG9uKGZhbHNlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuZXhwb3J0V2l0aFBhZ2luYXRpb24oKTtcclxuICAgIH0gY2F0Y2ggKG5vdFBhZ2luYXRlZCkge1xyXG4gICAgICB0aGlzLmV4cG9ydFNpbmdsZVBhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4cG9ydFdpdGhQYWdpbmF0aW9uKCkge1xyXG4gICAgdGhpcy5faW5pdGlhbFBhZ2VJbmRleCA9IHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpO1xyXG4gICAgdGhpcy5pbml0UGFnZUhhbmRsZXIoKTsgLy8gdG8gbWFrZSBzdXJlIGRhdGFzb3VyY2UgaXMgbm90IG51bGwgZHVyaW5nIGV4cG9ydFxyXG4gICAgdGhpcy5nb1RvUGFnZSgwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhwb3J0U2luZ2xlUGFnZSgpIHtcclxuICAgIHRoaXMuZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCk7XHJcbiAgICB0aGlzLmV4cG9ydEV4dHJhY3RlZERhdGEoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCkge1xyXG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuY29uY2F0KHRoaXMuZXh0cmFjdEV4Y2VsUm93cygpKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGluaXRQYWdlSGFuZGxlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0UGFnZUNoYW5nZU9ic2VydmFibGUoKS5zdWJzY3JpYmUoXyA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0l0ZXJhdGluZykge1xyXG4gICAgICAgICAgdGhpcy5leHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKTtcclxuICAgICAgICAgIGlmICh0aGlzLmhhc05leHRQYWdlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0UGFnZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5faXNJdGVyYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5nb1RvUGFnZSh0aGlzLl9pbml0aWFsUGFnZUluZGV4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2lzRXhwb3J0aW5nKSB7XHJcbiAgICAgICAgICB0aGlzLl9pc0V4cG9ydGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5leHBvcnRFeHRyYWN0ZWREYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHBvcnRFeHRyYWN0ZWREYXRhKCkge1xyXG4gICAgdGhpcy5qc29uRXhwb3J0ZXIuZXhwb3J0RXhjZWwodGhpcy5leHRyYWN0RXhjZWxIZWFkZXJSb3coKSwgdGhpcy5fZGF0YSwgdGhpcy5maWxlTmFtZSwgdGhpcy5zaGVldE5hbWUpO1xyXG4gICAgdGhpcy5fZGF0YSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICB0aGlzLmVuYWJsZUV4cG9ydEJ1dHRvbih0cnVlKTtcclxuICAgIHRoaXMuZXhwb3J0Q29tcGxldGVkLmVtaXQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RFeGNlbFJvd3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9Kc29uQXJyYXkodGhpcy5nZXRSZW5kZXJlZFJvd3ModGhpcy5jZGtUYWJsZS5fcm93T3V0bGV0KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RFeGNlbEhlYWRlclJvdygpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnZlcnRUb0pzb25BcnJheSh0aGlzLmdldFJlbmRlcmVkUm93cyh0aGlzLmNka1RhYmxlLl9oZWFkZXJSb3dPdXRsZXQpKVswXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UmVuZGVyZWRSb3dzKG91dGxldDogRGF0YVJvd091dGxldCk6IEhUTUxUYWJsZVJvd0VsZW1lbnRbXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNka1RhYmxlLl9nZXRSZW5kZXJlZFJvd3Mob3V0bGV0KSBhcyBIVE1MVGFibGVSb3dFbGVtZW50W107XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFRvSnNvbkFycmF5KHJvd3M6IEhUTUxUYWJsZVJvd0VsZW1lbnRbXSk6IEFycmF5PGFueT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PGFueT4oKTtcclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdzogQXJyYXk8c3RyaW5nPiA9IHRoaXMuY29udmVydFJvdyhyb3dzW2ldKTtcclxuICAgICAgdGhpcy5jdXN0b21pemVSb3cocm93KTtcclxuICAgICAgcmVzdWx0LnB1c2godGhpcy5jcmVhdGVFeGNlbEl0ZW0ocm93KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb252ZXJ0Um93KHJvdzogSFRNTFRhYmxlUm93RWxlbWVudCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIGNvbnN0IGNlbGxzOiBhbnkgPSByb3cuY2hpbGRyZW47XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnNob3VsZEhpZGUoaSkpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBlbGVtZW50ID0gY2VsbHMuaXRlbShpKS5pbm5lclRleHQ7XHJcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvdWxkSGlkZShjb2x1bW5JbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5oaWRkZW5Db2x1bW5zICYmIHRoaXMuaGlkZGVuQ29sdW1ucy5pbmNsdWRlcyhjb2x1bW5JbmRleCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3VzdG9taXplUm93KHJvdzogQXJyYXk8c3RyaW5nPik6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHJvdztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRXhjZWxJdGVtKHJvdzogQXJyYXk8c3RyaW5nPik6IGFueSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcm93KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNOZXh0UGFnZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmdldEN1cnJlbnRQYWdlSW5kZXgoKSA8IHRoaXMuZ2V0UGFnZUNvdW50KCkgLSAxKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgbmV4dFBhZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvVG9QYWdlKHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpICsgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVuYWJsZUV4cG9ydEJ1dHRvbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZXhwb3J0ZXJCdXR0b24uX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgdmFsdWUgPyBudWxsIDogJ3RydWUnKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==