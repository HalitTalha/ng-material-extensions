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
        this.jsonExporter.exportExcel(this.extractExcelHeaderRow(), this._data, this.fileName, this.sheetName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2Nkay10YWJsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFpQixZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFPdEY7SUFxQkUsMEJBQXNCLFFBQW1CLEVBQVksWUFBaUM7UUFBaEUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFZLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQWpCN0UsY0FBUyxHQUFHLFFBQVEsQ0FBQztRQUNyQixhQUFRLEdBQUcsYUFBYSxDQUFDO1FBRXhCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUMzQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFlbkQsQ0FBQzs7OztJQXVCRCwwQ0FBZTs7O0lBQWY7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxPQUFPOzs7O1FBQUUsVUFBQyxHQUFHO1lBQ2hGLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFHSDs7T0FFRzs7Ozs7SUFDRCxzQ0FBVzs7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUk7WUFDRixJQUFJLENBQUMsb0JB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MEI7Ozs7O0lBRTFCLHdDQUE4Qjs7Ozs7SUFFOUIsNkNBQWtDOzs7OztJQUVsQyx3Q0FBOEI7Ozs7O0lBRWxCLG9DQUE2Qjs7Ozs7SUFBRSx3Q0FBMkM7Ozs7OztJQU90RiwwREFBdUM7Ozs7OztJQUt2QyxpRUFBOEM7Ozs7Ozs7SUFNOUMsMkRBQThDOzs7Ozs7SUFLOUMscUVBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJvd091dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSnNvbkV4cG9ydGVyU2VydmljZSB9IGZyb20gJy4vanNvbi1leHBvcnRlci5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBFeGNlbCBleHBvcnRlciBjbGFzcyBmb3IgQ2RrVGFibGUuIEFic3RyYWN0cyB0aGUgdmFyeWluZyBiZWhhdmlvcnMgYW1vbmcgZGlmZmVyZW50IENka1RhYmxlIGltcGxlbWVudGF0aW9ucy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDZGtUYWJsZUV4cG9ydGVyIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGNka1RhYmxlOiBhbnk7XHJcbiAgQElucHV0KCkgZXhwb3J0ZXJCdXR0b246IGFueTtcclxuICBASW5wdXQoKSBzaGVldE5hbWUgPSAnU2hlZXQxJztcclxuICBASW5wdXQoKSBmaWxlTmFtZSA9ICdleHBvcnQueGxzeCc7XHJcbiAgQElucHV0KCkgaGlkZGVuQ29sdW1uczogQXJyYXk8bnVtYmVyPjtcclxuICBAT3V0cHV0KCkgZXhwb3J0Q29tcGxldGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBleHBvcnRTdGFydGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvKipcclxuICAgKiBEYXRhIGFycmF5IHdoaWNoIGlzIGV4dHJhY3RlZCBmcm9tIG5hdGl2ZVRhYmxlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZGF0YTogQXJyYXk8YW55PjtcclxuXHJcbiAgcHJpdmF0ZSBfaXNJdGVyYXRpbmc6IGJvb2xlYW47XHJcblxyXG4gIHByaXZhdGUgX2luaXRpYWxQYWdlSW5kZXg6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBfaXNFeHBvcnRpbmc6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLCBwcm90ZWN0ZWQganNvbkV4cG9ydGVyOiBKc29uRXhwb3J0ZXJTZXJ2aWNlKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gdGhlIG51bWJlciBvZiBwYWdlcyBvZiB0aGUgdGFibGVcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0UGFnZUNvdW50KCk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IHBhZ2UgdGhhdCdzIGRpc3BsYXllZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRDdXJyZW50UGFnZUluZGV4KCk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiBjYWxsZWQsIHRoZSBDZGtUYWJsZSBzaG91bGQgcmVuZGVyIHRoZSByb3dzIGluc2lkZSB0aGUgcGFnZSB3aG9zZSBpbmRleCBnaXZlbiBhcyBwYXJhbWV0ZXJcclxuICAgKiBAcGFyYW0gaW5kZXggcGFnZSBpbmRleFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnb1RvUGFnZShpbmRleDogbnVtYmVyKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHRoZSBzdWJzY3JpYmVycyBhYm91dCBwYWdlIGNoYW5nZXNcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0UGFnZUNoYW5nZU9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmV4cG9ydGVyQnV0dG9uLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsIChldnQpID0+IHtcclxuICAgICB0aGlzLmV4cG9ydFRhYmxlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuLyoqXHJcbiAqIFRyaWdnZXJzIHBhZ2UgZXZlbnQgY2hhaW4gdGh1cyBleHRyYWN0aW5nIGFuZCBleHBvcnRpbmcgYWxsIHRoZSByb3dzIGluIG5hdGl2ZXRhYmxlcyBpbiBwYWdlc1xyXG4gKi9cclxuICBleHBvcnRUYWJsZSgpIHtcclxuICAgIHRoaXMuZXhwb3J0U3RhcnRlZC5lbWl0KCk7XHJcbiAgICB0aGlzLl9pc0l0ZXJhdGluZyA9IHRydWU7XHJcbiAgICB0aGlzLl9pc0V4cG9ydGluZyA9IHRydWU7XHJcbiAgICB0aGlzLl9kYXRhID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgIHRoaXMuZW5hYmxlRXhwb3J0QnV0dG9uKGZhbHNlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuZXhwb3J0V2l0aFBhZ2luYXRpb24oKTtcclxuICAgIH0gY2F0Y2ggKG5vdFBhZ2luYXRlZCkge1xyXG4gICAgICB0aGlzLmV4cG9ydFNpbmdsZVBhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4cG9ydFdpdGhQYWdpbmF0aW9uKCkge1xyXG4gICAgdGhpcy5faW5pdGlhbFBhZ2VJbmRleCA9IHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpO1xyXG4gICAgdGhpcy5pbml0UGFnZUhhbmRsZXIoKTsgLy8gdG8gbWFrZSBzdXJlIGRhdGFzb3VyY2UgaXMgbm90IG51bGwgZHVyaW5nIGV4cG9ydFxyXG4gICAgdGhpcy5nb1RvUGFnZSgwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhwb3J0U2luZ2xlUGFnZSgpIHtcclxuICAgIHRoaXMuZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCk7XHJcbiAgICB0aGlzLmpzb25FeHBvcnRlci5leHBvcnRFeGNlbCh0aGlzLmV4dHJhY3RFeGNlbEhlYWRlclJvdygpLCB0aGlzLl9kYXRhLCB0aGlzLmZpbGVOYW1lLCB0aGlzLnNoZWV0TmFtZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3REYXRhT25DdXJyZW50UGFnZSgpIHtcclxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdCh0aGlzLmV4dHJhY3RFeGNlbFJvd3MoKSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBpbml0UGFnZUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5faXNJdGVyYXRpbmcpIHtcclxuICAgICAgICAgIHRoaXMuZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5oYXNOZXh0UGFnZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFBhZ2UoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzSXRlcmF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ29Ub1BhZ2UodGhpcy5faW5pdGlhbFBhZ2VJbmRleCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc0V4cG9ydGluZykge1xyXG4gICAgICAgICAgdGhpcy5faXNFeHBvcnRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuZXhwb3J0RXh0cmFjdGVkRGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhwb3J0RXh0cmFjdGVkRGF0YSgpIHtcclxuICAgIHRoaXMuanNvbkV4cG9ydGVyLmV4cG9ydEV4Y2VsKHRoaXMuZXh0cmFjdEV4Y2VsSGVhZGVyUm93KCksIHRoaXMuX2RhdGEsIHRoaXMuZmlsZU5hbWUsIHRoaXMuc2hlZXROYW1lKTtcclxuICAgIHRoaXMuX2RhdGEgPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgdGhpcy5lbmFibGVFeHBvcnRCdXR0b24odHJ1ZSk7XHJcbiAgICB0aGlzLmV4cG9ydENvbXBsZXRlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0RXhjZWxSb3dzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udmVydFRvSnNvbkFycmF5KHRoaXMuZ2V0UmVuZGVyZWRSb3dzKHRoaXMuY2RrVGFibGUuX3Jvd091dGxldCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0RXhjZWxIZWFkZXJSb3coKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9Kc29uQXJyYXkodGhpcy5nZXRSZW5kZXJlZFJvd3ModGhpcy5jZGtUYWJsZS5faGVhZGVyUm93T3V0bGV0KSlbMF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlbmRlcmVkUm93cyhvdXRsZXQ6IERhdGFSb3dPdXRsZXQpOiBIVE1MVGFibGVSb3dFbGVtZW50W10ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jZGtUYWJsZS5fZ2V0UmVuZGVyZWRSb3dzKG91dGxldCkgYXMgSFRNTFRhYmxlUm93RWxlbWVudFtdO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnRUb0pzb25BcnJheShyb3dzOiBIVE1MVGFibGVSb3dFbGVtZW50W10pOiBBcnJheTxhbnk+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxhbnk+KCk7XHJcblxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCByb3c6IEFycmF5PHN0cmluZz4gPSB0aGlzLmNvbnZlcnRSb3cocm93c1tpXSk7XHJcbiAgICAgIHRoaXMuY3VzdG9taXplUm93KHJvdyk7XHJcbiAgICAgIHJlc3VsdC5wdXNoKHRoaXMuY3JlYXRlRXhjZWxJdGVtKHJvdykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFJvdyhyb3c6IEhUTUxUYWJsZVJvd0VsZW1lbnQpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICBjb25zdCBjZWxsczogYW55ID0gcm93LmNoaWxkcmVuO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5zaG91bGRIaWRlKGkpKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZWxlbWVudCA9IGNlbGxzLml0ZW0oaSkuaW5uZXJUZXh0O1xyXG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3VsZEhpZGUoY29sdW1uSW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuaGlkZGVuQ29sdW1ucyAmJiB0aGlzLmhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uSW5kZXgpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGN1c3RvbWl6ZVJvdyhyb3c6IEFycmF5PHN0cmluZz4pOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIHJldHVybiByb3c7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUV4Y2VsSXRlbShyb3c6IEFycmF5PHN0cmluZz4pOiBhbnkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJvdyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFzTmV4dFBhZ2UoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5nZXRDdXJyZW50UGFnZUluZGV4KCkgPCB0aGlzLmdldFBhZ2VDb3VudCgpIC0gMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIG5leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5nb1RvUGFnZSh0aGlzLmdldEN1cnJlbnRQYWdlSW5kZXgoKSArIDEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbmFibGVFeHBvcnRCdXR0b24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmV4cG9ydGVyQnV0dG9uLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIHZhbHVlID8gbnVsbCA6ICd0cnVlJyk7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=