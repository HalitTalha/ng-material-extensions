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
        this.jsonExporter.exportExcel(this.extractExcelHeaderRow(), this._data, this.fileName, this.sheetName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2Nkay10YWJsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFpQixZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFPdEYsTUFBTSxPQUFnQixnQkFBZ0I7Ozs7O0lBcUJwQyxZQUFzQixRQUFtQixFQUFZLFlBQWlDO1FBQWhFLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBWSxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFqQjdFLGNBQVMsR0FBRyxRQUFRLENBQUM7UUFDckIsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQUV4QixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDM0Msa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBZW5ELENBQUM7Ozs7SUF1QkQsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxPQUFPOzs7O1FBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNwRixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQU1ELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsSUFBSTtZQUNGLElBQUksQ0FBQyxvQkFBb0IsRUFB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IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBKc29uRXhwb3J0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9qc29uLWV4cG9ydGVyLnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIEV4Y2VsIGV4cG9ydGVyIGNsYXNzIGZvciBDZGtUYWJsZS4gQWJzdHJhY3RzIHRoZSB2YXJ5aW5nIGJlaGF2aW9ycyBhbW9uZyBkaWZmZXJlbnQgQ2RrVGFibGUgaW1wbGVtZW50YXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENka1RhYmxlRXhwb3J0ZXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCkgY2RrVGFibGU6IGFueTtcclxuICBASW5wdXQoKSBleHBvcnRlckJ1dHRvbjogYW55O1xyXG4gIEBJbnB1dCgpIHNoZWV0TmFtZSA9ICdTaGVldDEnO1xyXG4gIEBJbnB1dCgpIGZpbGVOYW1lID0gJ2V4cG9ydC54bHN4JztcclxuICBASW5wdXQoKSBoaWRkZW5Db2x1bW5zOiBBcnJheTxudW1iZXI+O1xyXG4gIEBPdXRwdXQoKSBleHBvcnRDb21wbGV0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGV4cG9ydFN0YXJ0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIERhdGEgYXJyYXkgd2hpY2ggaXMgZXh0cmFjdGVkIGZyb20gbmF0aXZlVGFibGVcclxuICAgKi9cclxuICBwcml2YXRlIF9kYXRhOiBBcnJheTxhbnk+O1xyXG5cclxuICBwcml2YXRlIF9pc0l0ZXJhdGluZzogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSBfaW5pdGlhbFBhZ2VJbmRleDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIF9pc0V4cG9ydGluZzogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByb3RlY3RlZCBqc29uRXhwb3J0ZXI6IEpzb25FeHBvcnRlclNlcnZpY2UpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNdXN0IHJldHVybiB0aGUgbnVtYmVyIG9mIHBhZ2VzIG9mIHRoZSB0YWJsZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRQYWdlQ291bnQoKTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBNdXN0IHJldHVybiB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgcGFnZSB0aGF0J3MgZGlzcGxheWVkXHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdldEN1cnJlbnRQYWdlSW5kZXgoKTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBXaGVuIGNhbGxlZCwgdGhlIENka1RhYmxlIHNob3VsZCByZW5kZXIgdGhlIHJvd3MgaW5zaWRlIHRoZSBwYWdlIHdob3NlIGluZGV4IGdpdmVuIGFzIHBhcmFtZXRlclxyXG4gICAqIEBwYXJhbSBpbmRleCBwYWdlIGluZGV4XHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdvVG9QYWdlKGluZGV4OiBudW1iZXIpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBNdXN0IHJldHVybiBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgdGhlIHN1YnNjcmliZXJzIGFib3V0IHBhZ2UgY2hhbmdlc1xyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRQYWdlQ2hhbmdlT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZXhwb3J0ZXJCdXR0b24uX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKGV2dCkgPT4ge1xyXG4gICAgIHRoaXMuZXhwb3J0VGFibGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4vKipcclxuICogVHJpZ2dlcnMgcGFnZSBldmVudCBjaGFpbiB0aHVzIGV4dHJhY3RpbmcgYW5kIGV4cG9ydGluZyBhbGwgdGhlIHJvd3MgaW4gbmF0aXZldGFibGVzIGluIHBhZ2VzXHJcbiAqL1xyXG4gIGV4cG9ydFRhYmxlKCkge1xyXG4gICAgdGhpcy5leHBvcnRTdGFydGVkLmVtaXQoKTtcclxuICAgIHRoaXMuX2lzSXRlcmF0aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuX2lzRXhwb3J0aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuX2RhdGEgPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgdGhpcy5lbmFibGVFeHBvcnRCdXR0b24oZmFsc2UpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5leHBvcnRXaXRoUGFnaW5hdGlvbigpO1xyXG4gICAgfSBjYXRjaCAobm90UGFnaW5hdGVkKSB7XHJcbiAgICAgIHRoaXMuZXhwb3J0U2luZ2xlUGFnZSgpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhwb3J0V2l0aFBhZ2luYXRpb24oKSB7XHJcbiAgICB0aGlzLl9pbml0aWFsUGFnZUluZGV4ID0gdGhpcy5nZXRDdXJyZW50UGFnZUluZGV4KCk7XHJcbiAgICB0aGlzLmluaXRQYWdlSGFuZGxlcigpOyAvLyB0byBtYWtlIHN1cmUgZGF0YXNvdXJjZSBpcyBub3QgbnVsbCBkdXJpbmcgZXhwb3J0XHJcbiAgICB0aGlzLmdvVG9QYWdlKDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHBvcnRTaW5nbGVQYWdlKCkge1xyXG4gICAgdGhpcy5leHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKTtcclxuICAgIHRoaXMuanNvbkV4cG9ydGVyLmV4cG9ydEV4Y2VsKHRoaXMuZXh0cmFjdEV4Y2VsSGVhZGVyUm93KCksIHRoaXMuX2RhdGEsIHRoaXMuZmlsZU5hbWUsIHRoaXMuc2hlZXROYW1lKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCkge1xyXG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuY29uY2F0KHRoaXMuZXh0cmFjdEV4Y2VsUm93cygpKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGluaXRQYWdlSGFuZGxlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0UGFnZUNoYW5nZU9ic2VydmFibGUoKS5zdWJzY3JpYmUoXyA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0l0ZXJhdGluZykge1xyXG4gICAgICAgICAgdGhpcy5leHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKTtcclxuICAgICAgICAgIGlmICh0aGlzLmhhc05leHRQYWdlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0UGFnZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5faXNJdGVyYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5nb1RvUGFnZSh0aGlzLl9pbml0aWFsUGFnZUluZGV4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2lzRXhwb3J0aW5nKSB7XHJcbiAgICAgICAgICB0aGlzLl9pc0V4cG9ydGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5leHBvcnRFeHRyYWN0ZWREYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHBvcnRFeHRyYWN0ZWREYXRhKCkge1xyXG4gICAgdGhpcy5qc29uRXhwb3J0ZXIuZXhwb3J0RXhjZWwodGhpcy5leHRyYWN0RXhjZWxIZWFkZXJSb3coKSwgdGhpcy5fZGF0YSwgdGhpcy5maWxlTmFtZSwgdGhpcy5zaGVldE5hbWUpO1xyXG4gICAgdGhpcy5fZGF0YSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICB0aGlzLmVuYWJsZUV4cG9ydEJ1dHRvbih0cnVlKTtcclxuICAgIHRoaXMuZXhwb3J0Q29tcGxldGVkLmVtaXQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RFeGNlbFJvd3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9Kc29uQXJyYXkodGhpcy5nZXRSZW5kZXJlZFJvd3ModGhpcy5jZGtUYWJsZS5fcm93T3V0bGV0KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RFeGNlbEhlYWRlclJvdygpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnZlcnRUb0pzb25BcnJheSh0aGlzLmdldFJlbmRlcmVkUm93cyh0aGlzLmNka1RhYmxlLl9oZWFkZXJSb3dPdXRsZXQpKVswXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UmVuZGVyZWRSb3dzKG91dGxldDogRGF0YVJvd091dGxldCk6IEhUTUxUYWJsZVJvd0VsZW1lbnRbXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNka1RhYmxlLl9nZXRSZW5kZXJlZFJvd3Mob3V0bGV0KSBhcyBIVE1MVGFibGVSb3dFbGVtZW50W107XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFRvSnNvbkFycmF5KHJvd3M6IEhUTUxUYWJsZVJvd0VsZW1lbnRbXSk6IEFycmF5PGFueT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PGFueT4oKTtcclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdzogQXJyYXk8c3RyaW5nPiA9IHRoaXMuY29udmVydFJvdyhyb3dzW2ldKTtcclxuICAgICAgdGhpcy5jdXN0b21pemVSb3cocm93KTtcclxuICAgICAgcmVzdWx0LnB1c2godGhpcy5jcmVhdGVFeGNlbEl0ZW0ocm93KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb252ZXJ0Um93KHJvdzogSFRNTFRhYmxlUm93RWxlbWVudCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIGNvbnN0IGNlbGxzOiBhbnkgPSByb3cuY2hpbGRyZW47XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnNob3VsZEhpZGUoaSkpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBlbGVtZW50ID0gY2VsbHMuaXRlbShpKS5pbm5lclRleHQ7XHJcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvdWxkSGlkZShjb2x1bW5JbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5oaWRkZW5Db2x1bW5zICYmIHRoaXMuaGlkZGVuQ29sdW1ucy5pbmNsdWRlcyhjb2x1bW5JbmRleCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3VzdG9taXplUm93KHJvdzogQXJyYXk8c3RyaW5nPik6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHJvdztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRXhjZWxJdGVtKHJvdzogQXJyYXk8c3RyaW5nPik6IGFueSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcm93KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNOZXh0UGFnZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmdldEN1cnJlbnRQYWdlSW5kZXgoKSA8IHRoaXMuZ2V0UGFnZUNvdW50KCkgLSAxKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgbmV4dFBhZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvVG9QYWdlKHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpICsgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVuYWJsZUV4cG9ydEJ1dHRvbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZXhwb3J0ZXJCdXR0b24uX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgdmFsdWUgPyBudWxsIDogJ3RydWUnKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==