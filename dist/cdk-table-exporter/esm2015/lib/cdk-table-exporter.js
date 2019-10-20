/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { ExportType } from './export-type';
import { FileUtil } from './file-util';
/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 * @abstract
 */
// @Directive()
export class CdkTableExporter {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2Nkay10YWJsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUV6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7OztBQVd2QyxNQUFNLE9BQWdCLGdCQUFnQjs7Ozs7Ozs7SUFxRnBDLFlBQXNCLFFBQW1CLEVBQ3JCLGNBQXFDLEVBQ3JDLGFBQW1DLEVBQ2pDLEtBQVUsRUFDVixnQkFBa0M7UUFKbEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNyQixtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ2pDLFVBQUssR0FBTCxLQUFLLENBQUs7UUFDVixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBcEY5QyxvQkFBZSxHQUFJLElBQUksWUFBWSxFQUFRLENBQUM7UUFDNUMsa0JBQWEsR0FBSSxJQUFJLFlBQVksRUFBUSxDQUFDO1FBb0ZsRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQWpGRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBS0QsSUFDSSxRQUFRLENBQUMsS0FBVTtRQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUlELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lB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LENBQUM7Ozs0QkE5UEEsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLE1BQU07NEJBQ04sTUFBTTt1QkFXTixLQUFLOzZCQWVMLEtBQUs7dUJBZ0JMLEtBQUs7d0JBZUwsS0FBSzs7OztJQTVETix5Q0FBdUM7O0lBQ3ZDLG9DQUFzQzs7SUFDdEMsMkNBQXNEOztJQUN0RCx5Q0FBb0Q7Ozs7O0lBRXBELHFDQUF1Qjs7Ozs7SUFldkIsMkNBQTZCOzs7OztJQWdCN0IscUNBQTBCOzs7OztJQWUxQixzQ0FBMkI7Ozs7OztJQW1CM0IsaUNBQTBCOzs7OztJQUUxQix3Q0FBOEI7Ozs7O0lBRTlCLDZDQUFrQzs7Ozs7SUFFbEMsd0NBQThCOzs7OztJQUU5Qix5Q0FBb0M7Ozs7O0lBRXBDLG9DQUEyQjs7Ozs7SUFFZixvQ0FBNkI7Ozs7O0lBQzdCLDBDQUE2Qzs7Ozs7SUFDN0MseUNBQTJDOzs7OztJQUMzQyxpQ0FBb0I7Ozs7O0lBQ3BCLDRDQUE0Qzs7Ozs7O0lBT3hELDBEQUF1Qzs7Ozs7O0lBS3ZDLGlFQUE4Qzs7Ozs7OztJQU05QywyREFBOEM7Ozs7OztJQUs5QyxxRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhUm93T3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBSZW5kZXJlcjIsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEV4cG9ydFR5cGUgfSBmcm9tICcuL2V4cG9ydC10eXBlJztcclxuaW1wb3J0IHsgRmlsZVV0aWwgfSBmcm9tICcuL2ZpbGUtdXRpbCc7XHJcbmltcG9ydCB7IEV4Y2VsT3B0aW9ucywgT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IERhdGFFeHRyYWN0b3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLWV4dHJhY3Rvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXhwb3J0ZXIgfSBmcm9tICcuL3NlcnZpY2VzL2V4cG9ydGVycy9leHBvcnRlcic7XHJcbmltcG9ydCB7IFNlcnZpY2VMb2NhdG9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc2VydmljZS1sb2NhdG9yLnNlcnZpY2UnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBFeHBvcnRlciBjbGFzcyBmb3IgQ2RrVGFibGUuIEFic3RyYWN0cyB0aGUgdmFyeWluZyBiZWhhdmlvcnMgYW1vbmcgZGlmZmVyZW50IENka1RhYmxlIGltcGxlbWVudGF0aW9ucy5cclxuICovXHJcbi8vIEBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2RrVGFibGVFeHBvcnRlciB7XHJcblxyXG5cclxuICBASW5wdXQoKSBoaWRkZW5Db2x1bW5zPzogQXJyYXk8bnVtYmVyPjtcclxuICBASW5wdXQoKSBleHBvcnRlcj86IEV4cG9ydGVyPE9wdGlvbnM+O1xyXG4gIEBPdXRwdXQoKSBleHBvcnRDb21wbGV0ZWQgPz0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBleHBvcnRTdGFydGVkID89IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfY2RrVGFibGU6IGFueTtcclxuXHJcbiAgZ2V0IGNka1RhYmxlKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2RrVGFibGU7XHJcbiAgfVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkXHJcbiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNka1RhYmxlKHZhbHVlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUud2FybignY2RrVGFibGUgaW5wdXQgaXMgZGVwcmVjYXRlZCEnKTtcclxuICAgIHRoaXMuX2Nka1RhYmxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9leHBvcnRlckJ1dHRvbjogYW55O1xyXG5cclxuICBnZXQgZXhwb3J0ZXJCdXR0b24oKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLl9leHBvcnRlckJ1dHRvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgZXhwb3J0ZXJCdXR0b24odmFsdWU6IGFueSkge1xyXG4gICAgY29uc29sZS53YXJuKCdleHBvcnRlckJ1dHRvbiBpbnB1dCBpcyBkZXByZWNhdGVkIScpO1xyXG4gICAgdGhpcy5fZXhwb3J0ZXJCdXR0b24gPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0QnV0dG9uTGlzdGVuZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZpbGVOYW1lOiBzdHJpbmc7XHJcblxyXG4gIGdldCBmaWxlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVOYW1lO1xyXG4gIH1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZFxyXG4gKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBmaWxlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ2ZpbGVOYW1lIGlucHV0IGlzIGRlcHJlY2F0ZWQhJyk7XHJcbiAgICB0aGlzLl9maWxlTmFtZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2hlZXROYW1lOiBzdHJpbmc7XHJcblxyXG4gIGdldCBzaGVldE5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zaGVldE5hbWU7XHJcbiAgfVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkXHJcbiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNoZWV0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ3NoZWV0TmFtZSBpbnB1dCBpcyBkZXByZWNhdGVkIScpO1xyXG4gICAgdGhpcy5fc2hlZXROYW1lID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSBhcnJheSB3aGljaCBpcyBleHRyYWN0ZWQgZnJvbSBuYXRpdmVUYWJsZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2RhdGE6IEFycmF5PGFueT47XHJcblxyXG4gIHByaXZhdGUgX2lzSXRlcmF0aW5nOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIF9pbml0aWFsUGFnZUluZGV4OiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgX2lzRXhwb3J0aW5nOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBfb3B0aW9ucz86IE9wdGlvbnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgc2VydmljZUxvY2F0b3I6IFNlcnZpY2VMb2NhdG9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGRhdGFFeHRyYWN0b3I6IERhdGFFeHRyYWN0b3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCB0YWJsZTogYW55LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICB0aGlzLmluaXRDZGtUYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gdGhlIG51bWJlciBvZiBwYWdlcyBvZiB0aGUgdGFibGVcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0UGFnZUNvdW50KCk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IHBhZ2UgdGhhdCdzIGRpc3BsYXllZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRDdXJyZW50UGFnZUluZGV4KCk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiBjYWxsZWQsIHRoZSBDZGtUYWJsZSBzaG91bGQgcmVuZGVyIHRoZSByb3dzIGluc2lkZSB0aGUgcGFnZSB3aG9zZSBpbmRleCBnaXZlbiBhcyBwYXJhbWV0ZXJcclxuICAgKiBAcGFyYW0gaW5kZXggcGFnZSBpbmRleFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnb1RvUGFnZShpbmRleDogbnVtYmVyKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHRoZSBzdWJzY3JpYmVycyBhYm91dCBwYWdlIGNoYW5nZXNcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0UGFnZUNoYW5nZU9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICBwcml2YXRlIGluaXRDZGtUYWJsZSgpIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbFxyXG4gICAgY29uc3QgdGFibGUgPSB0aGlzLnZpZXdDb250YWluZXJSZWZbJ19kYXRhJ10uY29tcG9uZW50Vmlldy5jb21wb25lbnQ7XHJcbiAgICBpZiAodGFibGUpIHtcclxuICAgICAgdGhpcy5fY2RrVGFibGUgPSB0YWJsZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50YWJsZSkge1xyXG4gICAgICB0aGlzLl9jZGtUYWJsZSA9IHRoaXMudGFibGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIEFuZ3VsYXIgdmVyc2lvbicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RXhwb3J0ZXJTZXJ2aWNlKGV4cG9ydFR5cGU/OiBFeHBvcnRUeXBlKSB7XHJcbiAgICBpZiAoZXhwb3J0VHlwZSAhPT0gRXhwb3J0VHlwZS5PVEhFUikge1xyXG4gICAgICB0aGlzLmV4cG9ydGVyID0gdGhpcy5zZXJ2aWNlTG9jYXRvci5nZXRTZXJ2aWNlKGV4cG9ydFR5cGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRCdXR0b25MaXN0ZW5lcigpIHtcclxuICAgIGlmICh0aGlzLl9leHBvcnRlckJ1dHRvbikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLl9leHBvcnRlckJ1dHRvbi5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtmaWxlTmFtZTogdGhpcy5fZmlsZU5hbWUsIHNoZWV0OiB0aGlzLl9zaGVldE5hbWV9IGFzIEV4Y2VsT3B0aW9ucztcclxuICAgICAgICB0aGlzLmV4cG9ydFRhYmxlKEZpbGVVdGlsLmlkZW50aWZ5RXhwb3J0VHlwZSh0aGlzLl9maWxlTmFtZSksIG9wdGlvbnMpOyAvLyB0aGlzIGlzIHRvIHN1cHBvcnQgZGVwcmVjYXRlZCB3YXkgb2YgZXhwb3J0aW5nXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlcnMgcGFnZSBldmVudCBjaGFpbiB0aHVzIGV4dHJhY3RpbmcgYW5kIGV4cG9ydGluZyBhbGwgdGhlIHJvd3MgaW4gbmF0aXZldGFibGVzIGluIHBhZ2VzXHJcbiAgICovXHJcbiAgZXhwb3J0VGFibGUoZXhwb3J0VHlwZVBhcmFtPzogRXhwb3J0VHlwZSB8ICd4bHMnIHwgJ3hsc3gnIHwgJ2NzdicgfCAndHh0JyB8ICdqc29uJyB8ICdvdGhlcicsIG9wdGlvbnM/OiBPcHRpb25zKSB7XHJcbiAgICBjb25zdCBleHBvcnRUeXBlOiBFeHBvcnRUeXBlID0gdGhpcy5jb3JyZWN0RXhwb3J0VHlwZShleHBvcnRUeXBlUGFyYW0pO1xyXG4gICAgdGhpcy5pbml0RXhwb3J0ZXJTZXJ2aWNlKGV4cG9ydFR5cGUpO1xyXG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLmV4cG9ydFN0YXJ0ZWQuZW1pdCgpO1xyXG4gICAgdGhpcy5faXNJdGVyYXRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5faXNFeHBvcnRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5fZGF0YSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICB0aGlzLmVuYWJsZUV4cG9ydEJ1dHRvbihmYWxzZSk7XHJcbiAgICB0aGlzLmV4dHJhY3RUYWJsZUhlYWRlcigpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5leHBvcnRXaXRoUGFnaW5hdGlvbigpO1xyXG4gICAgfSBjYXRjaCAobm90UGFnaW5hdGVkKSB7XHJcbiAgICAgIHRoaXMuZXhwb3J0U2luZ2xlUGFnZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIGNvcnJlY3RFeHBvcnRUeXBlKGV4cG9ydFR5cGVQYXJhbT86IGFueSk6IEV4cG9ydFR5cGUge1xyXG4gICAgaWYgKGV4cG9ydFR5cGVQYXJhbSAmJiB0eXBlb2YgZXhwb3J0VHlwZVBhcmFtID09PSAnc3RyaW5nJykge1xyXG4gICAgICBzd2l0Y2ggKGV4cG9ydFR5cGVQYXJhbSkge1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5DU1Y6XHJcbiAgICAgICAgICAgIHJldHVybiBFeHBvcnRUeXBlLkNTVjtcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuSlNPTjpcclxuICAgICAgICAgICAgcmV0dXJuIEV4cG9ydFR5cGUuSlNPTjtcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuT1RIRVI6XHJcbiAgICAgICAgICAgIHJldHVybiBFeHBvcnRUeXBlLk9USEVSO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5UWFQ6XHJcbiAgICAgICAgICAgIHJldHVybiBFeHBvcnRUeXBlLlRYVDtcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuWExTOlxyXG4gICAgICAgICAgICByZXR1cm4gRXhwb3J0VHlwZS5YTFM7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlhMU1g6XHJcbiAgICAgICAgICAgIHJldHVybiBFeHBvcnRUeXBlLlhMU1g7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBleHBvcnRUeXBlUGFyYW0gYXMgRXhwb3J0VHlwZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhwb3J0V2l0aFBhZ2luYXRpb24oKSB7XHJcbiAgICB0aGlzLl9pbml0aWFsUGFnZUluZGV4ID0gdGhpcy5nZXRDdXJyZW50UGFnZUluZGV4KCk7XHJcbiAgICB0aGlzLmluaXRQYWdlSGFuZGxlcigpO1xyXG4gICAgdGhpcy5nb1RvUGFnZSgwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhwb3J0U2luZ2xlUGFnZSgpIHtcclxuICAgIHRoaXMuZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCk7XHJcbiAgICB0aGlzLmV4dHJhY3RUYWJsZUZvb3RlcigpO1xyXG4gICAgdGhpcy5leHBvcnRFeHRyYWN0ZWREYXRhKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3REYXRhT25DdXJyZW50UGFnZSgpIHtcclxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdCh0aGlzLmRhdGFFeHRyYWN0b3IuZXh0cmFjdFJvd3ModGhpcy5fY2RrVGFibGUsIHRoaXMuaGlkZGVuQ29sdW1ucykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0UGFnZUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX3N1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLmdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLl9pc0l0ZXJhdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3REYXRhT25DdXJyZW50UGFnZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNOZXh0UGFnZSgpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uZXh0UGFnZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuX2lzSXRlcmF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5nb1RvUGFnZSh0aGlzLl9pbml0aWFsUGFnZUluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc0V4cG9ydGluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0V4cG9ydGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3RUYWJsZUZvb3RlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmV4cG9ydEV4dHJhY3RlZERhdGEoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4cG9ydEV4dHJhY3RlZERhdGEoKSB7XHJcbiAgICB0aGlzLmV4cG9ydGVyLmV4cG9ydCh0aGlzLl9kYXRhLCB0aGlzLl9vcHRpb25zKTtcclxuICAgIHRoaXMuX2RhdGEgPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgdGhpcy5lbmFibGVFeHBvcnRCdXR0b24odHJ1ZSk7XHJcbiAgICB0aGlzLmV4cG9ydENvbXBsZXRlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RTcGVjaWFsUm93KG91dGxldDogRGF0YVJvd091dGxldCkge1xyXG4gICAgY29uc3Qgcm93ID0gdGhpcy5kYXRhRXh0cmFjdG9yLmV4dHJhY3RSb3codGhpcy5fY2RrVGFibGUsIHRoaXMuaGlkZGVuQ29sdW1ucywgb3V0bGV0KTtcclxuICAgIGlmIChyb3cpIHtcclxuICAgICAgdGhpcy5fZGF0YS5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RUYWJsZUhlYWRlcigpIHtcclxuICAgIHRoaXMuZXh0cmFjdFNwZWNpYWxSb3codGhpcy5fY2RrVGFibGUuX2hlYWRlclJvd091dGxldCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RUYWJsZUZvb3RlcigpIHtcclxuICAgIHRoaXMuZXh0cmFjdFNwZWNpYWxSb3codGhpcy5fY2RrVGFibGUuX2Zvb3RlclJvd091dGxldCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFzTmV4dFBhZ2UoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5nZXRDdXJyZW50UGFnZUluZGV4KCkgPCB0aGlzLmdldFBhZ2VDb3VudCgpIC0gMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZXh0UGFnZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ29Ub1BhZ2UodGhpcy5nZXRDdXJyZW50UGFnZUluZGV4KCkgKyAxKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW5hYmxlRXhwb3J0QnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5fZXhwb3J0ZXJCdXR0b24pIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9leHBvcnRlckJ1dHRvbi5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCB2YWx1ZSA/IG51bGwgOiAndHJ1ZScpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19