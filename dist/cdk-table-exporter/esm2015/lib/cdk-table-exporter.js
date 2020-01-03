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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2Nkay10YWJsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUV6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7OztBQVd2QyxNQUFNLE9BQWdCLGdCQUFnQjs7Ozs7Ozs7SUFxRnBDLFlBQXNCLFFBQW1CLEVBQ3JCLGNBQXFDLEVBQ3JDLGFBQW1DLEVBQ2pDLEtBQVUsRUFDVixnQkFBa0M7UUFKbEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNyQixtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ2pDLFVBQUssR0FBTCxLQUFLLENBQUs7UUFDVixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBcEY5QyxvQkFBZSxHQUFJLElBQUksWUFBWSxFQUFRLENBQUM7UUFDNUMsa0JBQWEsR0FBSSxJQUFJLFlBQVksRUFBUSxDQUFDO1FBb0ZsRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQWpGRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBS0QsSUFDSSxRQUFRLENBQUMsS0FBVTtRQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUlELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lB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LENBQUM7Ozs0QkE5UEEsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLE1BQU07NEJBQ04sTUFBTTt1QkFXTixLQUFLOzZCQWVMLEtBQUs7dUJBZ0JMLEtBQUs7d0JBZUwsS0FBSzs7OztJQTVETix5Q0FBdUM7O0lBQ3ZDLG9DQUFzQzs7SUFDdEMsMkNBQXNEOztJQUN0RCx5Q0FBb0Q7Ozs7O0lBRXBELHFDQUF1Qjs7Ozs7SUFldkIsMkNBQTZCOzs7OztJQWdCN0IscUNBQTBCOzs7OztJQWUxQixzQ0FBMkI7Ozs7OztJQW1CM0IsaUNBQTBCOzs7OztJQUUxQix3Q0FBOEI7Ozs7O0lBRTlCLDZDQUFrQzs7Ozs7SUFFbEMsd0NBQThCOzs7OztJQUU5Qix5Q0FBb0M7Ozs7O0lBRXBDLG9DQUEyQjs7Ozs7SUFFZixvQ0FBNkI7Ozs7O0lBQzdCLDBDQUE2Qzs7Ozs7SUFDN0MseUNBQTJDOzs7OztJQUMzQyxpQ0FBb0I7Ozs7O0lBQ3BCLDRDQUE0Qzs7Ozs7O0lBT3hELDBEQUF1Qzs7Ozs7O0lBS3ZDLGlFQUE4Qzs7Ozs7OztJQU05QywyREFBOEM7Ozs7OztJQUs5QyxxRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhUm93T3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEV4cG9ydFR5cGUgfSBmcm9tICcuL2V4cG9ydC10eXBlJztcbmltcG9ydCB7IEZpbGVVdGlsIH0gZnJvbSAnLi9maWxlLXV0aWwnO1xuaW1wb3J0IHsgRXhjZWxPcHRpb25zLCBPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IERhdGFFeHRyYWN0b3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLWV4dHJhY3Rvci5zZXJ2aWNlJztcbmltcG9ydCB7IEV4cG9ydGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9leHBvcnRlcnMvZXhwb3J0ZXInO1xuaW1wb3J0IHsgU2VydmljZUxvY2F0b3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZXJ2aWNlLWxvY2F0b3Iuc2VydmljZSc7XG5cblxuLyoqXG4gKiBFeHBvcnRlciBjbGFzcyBmb3IgQ2RrVGFibGUuIEFic3RyYWN0cyB0aGUgdmFyeWluZyBiZWhhdmlvcnMgYW1vbmcgZGlmZmVyZW50IENka1RhYmxlIGltcGxlbWVudGF0aW9ucy5cbiAqL1xuLy8gQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2RrVGFibGVFeHBvcnRlciB7XG5cblxuICBASW5wdXQoKSBoaWRkZW5Db2x1bW5zPzogQXJyYXk8bnVtYmVyPjtcbiAgQElucHV0KCkgZXhwb3J0ZXI/OiBFeHBvcnRlcjxPcHRpb25zPjtcbiAgQE91dHB1dCgpIGV4cG9ydENvbXBsZXRlZCA/PSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBleHBvcnRTdGFydGVkID89IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBwcml2YXRlIF9jZGtUYWJsZTogYW55O1xuXG4gIGdldCBjZGtUYWJsZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9jZGtUYWJsZTtcbiAgfVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbiAgQElucHV0KClcbiAgc2V0IGNka1RhYmxlKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zb2xlLndhcm4oJ2Nka1RhYmxlIGlucHV0IGlzIGRlcHJlY2F0ZWQhJyk7XG4gICAgdGhpcy5fY2RrVGFibGUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2V4cG9ydGVyQnV0dG9uOiBhbnk7XG5cbiAgZ2V0IGV4cG9ydGVyQnV0dG9uKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cG9ydGVyQnV0dG9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgZXhwb3J0ZXJCdXR0b24odmFsdWU6IGFueSkge1xuICAgIGNvbnNvbGUud2FybignZXhwb3J0ZXJCdXR0b24gaW5wdXQgaXMgZGVwcmVjYXRlZCEnKTtcbiAgICB0aGlzLl9leHBvcnRlckJ1dHRvbiA9IHZhbHVlO1xuICAgIHRoaXMuc2V0QnV0dG9uTGlzdGVuZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbGVOYW1lOiBzdHJpbmc7XG5cbiAgZ2V0IGZpbGVOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVOYW1lO1xuICB9XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuICBASW5wdXQoKVxuICBzZXQgZmlsZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnNvbGUud2FybignZmlsZU5hbWUgaW5wdXQgaXMgZGVwcmVjYXRlZCEnKTtcbiAgICB0aGlzLl9maWxlTmFtZSA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hlZXROYW1lOiBzdHJpbmc7XG5cbiAgZ2V0IHNoZWV0TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaGVldE5hbWU7XG4gIH1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG4gIEBJbnB1dCgpXG4gIHNldCBzaGVldE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnNvbGUud2Fybignc2hlZXROYW1lIGlucHV0IGlzIGRlcHJlY2F0ZWQhJyk7XG4gICAgdGhpcy5fc2hlZXROYW1lID0gdmFsdWU7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBEYXRhIGFycmF5IHdoaWNoIGlzIGV4dHJhY3RlZCBmcm9tIG5hdGl2ZVRhYmxlXG4gICAqL1xuICBwcml2YXRlIF9kYXRhOiBBcnJheTxhbnk+O1xuXG4gIHByaXZhdGUgX2lzSXRlcmF0aW5nOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2luaXRpYWxQYWdlSW5kZXg6IG51bWJlcjtcblxuICBwcml2YXRlIF9pc0V4cG9ydGluZzogYm9vbGVhbjtcblxuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIF9vcHRpb25zPzogT3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlTG9jYXRvcjogU2VydmljZUxvY2F0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGRhdGFFeHRyYWN0b3I6IERhdGFFeHRyYWN0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgdGFibGU6IGFueSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB0aGlzLmluaXRDZGtUYWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE11c3QgcmV0dXJuIHRoZSBudW1iZXIgb2YgcGFnZXMgb2YgdGhlIHRhYmxlXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZ2V0UGFnZUNvdW50KCk6IG51bWJlcjtcblxuICAvKipcbiAgICogTXVzdCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IHBhZ2UgdGhhdCdzIGRpc3BsYXllZFxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldEN1cnJlbnRQYWdlSW5kZXgoKTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXaGVuIGNhbGxlZCwgdGhlIENka1RhYmxlIHNob3VsZCByZW5kZXIgdGhlIHJvd3MgaW5zaWRlIHRoZSBwYWdlIHdob3NlIGluZGV4IGdpdmVuIGFzIHBhcmFtZXRlclxuICAgKiBAcGFyYW0gaW5kZXggcGFnZSBpbmRleFxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdvVG9QYWdlKGluZGV4OiBudW1iZXIpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBNdXN0IHJldHVybiBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgdGhlIHN1YnNjcmliZXJzIGFib3V0IHBhZ2UgY2hhbmdlc1xuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8YW55PjtcblxuICBwcml2YXRlIGluaXRDZGtUYWJsZSgpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgICBjb25zdCB0YWJsZSA9IHRoaXMudmlld0NvbnRhaW5lclJlZlsnX2RhdGEnXS5jb21wb25lbnRWaWV3LmNvbXBvbmVudDtcbiAgICBpZiAodGFibGUpIHtcbiAgICAgIHRoaXMuX2Nka1RhYmxlID0gdGFibGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhYmxlKSB7XG4gICAgICB0aGlzLl9jZGtUYWJsZSA9IHRoaXMudGFibGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgQW5ndWxhciB2ZXJzaW9uJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0RXhwb3J0ZXJTZXJ2aWNlKGV4cG9ydFR5cGU/OiBFeHBvcnRUeXBlKSB7XG4gICAgaWYgKGV4cG9ydFR5cGUgIT09IEV4cG9ydFR5cGUuT1RIRVIpIHtcbiAgICAgIHRoaXMuZXhwb3J0ZXIgPSB0aGlzLnNlcnZpY2VMb2NhdG9yLmdldFNlcnZpY2UoZXhwb3J0VHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRCdXR0b25MaXN0ZW5lcigpIHtcbiAgICBpZiAodGhpcy5fZXhwb3J0ZXJCdXR0b24pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuX2V4cG9ydGVyQnV0dG9uLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsIChldnQpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtmaWxlTmFtZTogdGhpcy5fZmlsZU5hbWUsIHNoZWV0OiB0aGlzLl9zaGVldE5hbWV9IGFzIEV4Y2VsT3B0aW9ucztcbiAgICAgICAgdGhpcy5leHBvcnRUYWJsZShGaWxlVXRpbC5pZGVudGlmeUV4cG9ydFR5cGUodGhpcy5fZmlsZU5hbWUpLCBvcHRpb25zKTsgLy8gdGhpcyBpcyB0byBzdXBwb3J0IGRlcHJlY2F0ZWQgd2F5IG9mIGV4cG9ydGluZ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIHBhZ2UgZXZlbnQgY2hhaW4gdGh1cyBleHRyYWN0aW5nIGFuZCBleHBvcnRpbmcgYWxsIHRoZSByb3dzIGluIG5hdGl2ZXRhYmxlcyBpbiBwYWdlc1xuICAgKi9cbiAgZXhwb3J0VGFibGUoZXhwb3J0VHlwZVBhcmFtPzogRXhwb3J0VHlwZSB8ICd4bHMnIHwgJ3hsc3gnIHwgJ2NzdicgfCAndHh0JyB8ICdqc29uJyB8ICdvdGhlcicsIG9wdGlvbnM/OiBPcHRpb25zKSB7XG4gICAgY29uc3QgZXhwb3J0VHlwZTogRXhwb3J0VHlwZSA9IHRoaXMuY29ycmVjdEV4cG9ydFR5cGUoZXhwb3J0VHlwZVBhcmFtKTtcbiAgICB0aGlzLmluaXRFeHBvcnRlclNlcnZpY2UoZXhwb3J0VHlwZSk7XG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5leHBvcnRTdGFydGVkLmVtaXQoKTtcbiAgICB0aGlzLl9pc0l0ZXJhdGluZyA9IHRydWU7XG4gICAgdGhpcy5faXNFeHBvcnRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2RhdGEgPSBuZXcgQXJyYXk8YW55PigpO1xuICAgIHRoaXMuZW5hYmxlRXhwb3J0QnV0dG9uKGZhbHNlKTtcbiAgICB0aGlzLmV4dHJhY3RUYWJsZUhlYWRlcigpO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmV4cG9ydFdpdGhQYWdpbmF0aW9uKCk7XG4gICAgfSBjYXRjaCAobm90UGFnaW5hdGVkKSB7XG4gICAgICB0aGlzLmV4cG9ydFNpbmdsZVBhZ2UoKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBjb3JyZWN0RXhwb3J0VHlwZShleHBvcnRUeXBlUGFyYW0/OiBhbnkpOiBFeHBvcnRUeXBlIHtcbiAgICBpZiAoZXhwb3J0VHlwZVBhcmFtICYmIHR5cGVvZiBleHBvcnRUeXBlUGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKGV4cG9ydFR5cGVQYXJhbSkge1xuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuQ1NWOlxuICAgICAgICAgICAgcmV0dXJuIEV4cG9ydFR5cGUuQ1NWO1xuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuSlNPTjpcbiAgICAgICAgICAgIHJldHVybiBFeHBvcnRUeXBlLkpTT047XG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5PVEhFUjpcbiAgICAgICAgICAgIHJldHVybiBFeHBvcnRUeXBlLk9USEVSO1xuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuVFhUOlxuICAgICAgICAgICAgcmV0dXJuIEV4cG9ydFR5cGUuVFhUO1xuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuWExTOlxuICAgICAgICAgICAgcmV0dXJuIEV4cG9ydFR5cGUuWExTO1xuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuWExTWDpcbiAgICAgICAgICAgIHJldHVybiBFeHBvcnRUeXBlLlhMU1g7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBleHBvcnRUeXBlUGFyYW0gYXMgRXhwb3J0VHlwZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGV4cG9ydFdpdGhQYWdpbmF0aW9uKCkge1xuICAgIHRoaXMuX2luaXRpYWxQYWdlSW5kZXggPSB0aGlzLmdldEN1cnJlbnRQYWdlSW5kZXgoKTtcbiAgICB0aGlzLmluaXRQYWdlSGFuZGxlcigpO1xuICAgIHRoaXMuZ29Ub1BhZ2UoMCk7XG4gIH1cblxuICBwcml2YXRlIGV4cG9ydFNpbmdsZVBhZ2UoKSB7XG4gICAgdGhpcy5leHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKTtcbiAgICB0aGlzLmV4dHJhY3RUYWJsZUZvb3RlcigpO1xuICAgIHRoaXMuZXhwb3J0RXh0cmFjdGVkRGF0YSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKSB7XG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuY29uY2F0KHRoaXMuZGF0YUV4dHJhY3Rvci5leHRyYWN0Um93cyh0aGlzLl9jZGtUYWJsZSwgdGhpcy5oaWRkZW5Db2x1bW5zKSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRQYWdlSGFuZGxlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5nZXRQYWdlQ2hhbmdlT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLl9pc0l0ZXJhdGluZykge1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc05leHRQYWdlKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5uZXh0UGFnZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5faXNJdGVyYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5nb1RvUGFnZSh0aGlzLl9pbml0aWFsUGFnZUluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2lzRXhwb3J0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0V4cG9ydGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0VGFibGVGb290ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0RXh0cmFjdGVkRGF0YSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGV4cG9ydEV4dHJhY3RlZERhdGEoKSB7XG4gICAgdGhpcy5leHBvcnRlci5leHBvcnQodGhpcy5fZGF0YSwgdGhpcy5fb3B0aW9ucyk7XG4gICAgdGhpcy5fZGF0YSA9IG5ldyBBcnJheTxhbnk+KCk7XG4gICAgdGhpcy5lbmFibGVFeHBvcnRCdXR0b24odHJ1ZSk7XG4gICAgdGhpcy5leHBvcnRDb21wbGV0ZWQuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0U3BlY2lhbFJvdyhvdXRsZXQ6IERhdGFSb3dPdXRsZXQpIHtcbiAgICBjb25zdCByb3cgPSB0aGlzLmRhdGFFeHRyYWN0b3IuZXh0cmFjdFJvdyh0aGlzLl9jZGtUYWJsZSwgdGhpcy5oaWRkZW5Db2x1bW5zLCBvdXRsZXQpO1xuICAgIGlmIChyb3cpIHtcbiAgICAgIHRoaXMuX2RhdGEucHVzaChyb3cpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFRhYmxlSGVhZGVyKCkge1xuICAgIHRoaXMuZXh0cmFjdFNwZWNpYWxSb3codGhpcy5fY2RrVGFibGUuX2hlYWRlclJvd091dGxldCk7XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3RUYWJsZUZvb3RlcigpIHtcbiAgICB0aGlzLmV4dHJhY3RTcGVjaWFsUm93KHRoaXMuX2Nka1RhYmxlLl9mb290ZXJSb3dPdXRsZXQpO1xuICB9XG5cbiAgcHVibGljIGhhc05leHRQYWdlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmdldEN1cnJlbnRQYWdlSW5kZXgoKSA8IHRoaXMuZ2V0UGFnZUNvdW50KCkgLSAxKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZXh0UGFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLmdvVG9QYWdlKHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpICsgMSk7XG4gIH1cblxuICBwcml2YXRlIGVuYWJsZUV4cG9ydEJ1dHRvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9leHBvcnRlckJ1dHRvbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9leHBvcnRlckJ1dHRvbi5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCB2YWx1ZSA/IG51bGwgOiAndHJ1ZScpO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=