/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {?=} exportType
     * @param {?=} options
     * @return {?}
     */
    exportTable(exportType, options) {
        this.loadExporter(exportType);
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
     * @param {?} exportType
     * @return {?}
     */
    loadExporter(exportType) {
        if (exportType === ExportType.OTHER.valueOf()) {
            this._exporterService = this.exporter;
        }
        else {
            this._exporterService = this.serviceLocator.getService(exportType);
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
        this._exporterService.export(this._data, this._options);
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
    /**
     * @type {?}
     * @private
     */
    CdkTableExporter.prototype._exporterService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2Nkay10YWJsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUV6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7OztBQVd2QyxNQUFNLE9BQWdCLGdCQUFnQjs7Ozs7Ozs7SUFzRnBDLFlBQXNCLFFBQW1CLEVBQ3JCLGNBQXFDLEVBQ3JDLGFBQW1DLEVBQ2pDLEtBQVUsRUFDVixnQkFBa0M7UUFKbEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNyQixtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ2pDLFVBQUssR0FBTCxLQUFLLENBQUs7UUFDVixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBcEY5QyxvQkFBZSxHQUFJLElBQUksWUFBWSxFQUFRLENBQUM7UUFDNUMsa0JBQWEsR0FBSSxJQUFJLFlBQVksRUFBUSxDQUFDO1FBb0ZsRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQWpGRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBS0QsSUFDSSxRQUFRLENBQUMsS0FBVTtRQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUlELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lB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Ozs7O0lBSzlDLHFFQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFSb3dPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFJlbmRlcmVyMiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRXhwb3J0VHlwZSB9IGZyb20gJy4vZXhwb3J0LXR5cGUnO1xyXG5pbXBvcnQgeyBGaWxlVXRpbCB9IGZyb20gJy4vZmlsZS11dGlsJztcclxuaW1wb3J0IHsgRXhjZWxPcHRpb25zLCBPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zJztcclxuaW1wb3J0IHsgRGF0YUV4dHJhY3RvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEtZXh0cmFjdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeHBvcnRlciB9IGZyb20gJy4vc2VydmljZXMvZXhwb3J0ZXJzL2V4cG9ydGVyJztcclxuaW1wb3J0IHsgU2VydmljZUxvY2F0b3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZXJ2aWNlLWxvY2F0b3Iuc2VydmljZSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEV4cG9ydGVyIGNsYXNzIGZvciBDZGtUYWJsZS4gQWJzdHJhY3RzIHRoZSB2YXJ5aW5nIGJlaGF2aW9ycyBhbW9uZyBkaWZmZXJlbnQgQ2RrVGFibGUgaW1wbGVtZW50YXRpb25zLlxyXG4gKi9cclxuLy8gQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDZGtUYWJsZUV4cG9ydGVyIHtcclxuXHJcbiAgcHJpdmF0ZSBfZXhwb3J0ZXJTZXJ2aWNlOiBFeHBvcnRlcjxPcHRpb25zPjtcclxuXHJcbiAgQElucHV0KCkgaGlkZGVuQ29sdW1ucz86IEFycmF5PG51bWJlcj47XHJcbiAgQElucHV0KCkgZXhwb3J0ZXI/OiBFeHBvcnRlcjxPcHRpb25zPjtcclxuICBAT3V0cHV0KCkgZXhwb3J0Q29tcGxldGVkID89IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgZXhwb3J0U3RhcnRlZCA/PSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIHByaXZhdGUgX2Nka1RhYmxlOiBhbnk7XHJcblxyXG4gIGdldCBjZGtUYWJsZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Nka1RhYmxlO1xyXG4gIH1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZFxyXG4gKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBjZGtUYWJsZSh2YWx1ZTogYW55KSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ2Nka1RhYmxlIGlucHV0IGlzIGRlcHJlY2F0ZWQhJyk7XHJcbiAgICB0aGlzLl9jZGtUYWJsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZXhwb3J0ZXJCdXR0b246IGFueTtcclxuXHJcbiAgZ2V0IGV4cG9ydGVyQnV0dG9uKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXhwb3J0ZXJCdXR0b247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGV4cG9ydGVyQnV0dG9uKHZhbHVlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUud2FybignZXhwb3J0ZXJCdXR0b24gaW5wdXQgaXMgZGVwcmVjYXRlZCEnKTtcclxuICAgIHRoaXMuX2V4cG9ydGVyQnV0dG9uID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldEJ1dHRvbkxpc3RlbmVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWxlTmFtZTogc3RyaW5nO1xyXG5cclxuICBnZXQgZmlsZU5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9maWxlTmFtZTtcclxuICB9XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWRcclxuICovXHJcbiAgQElucHV0KClcclxuICBzZXQgZmlsZU5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgY29uc29sZS53YXJuKCdmaWxlTmFtZSBpbnB1dCBpcyBkZXByZWNhdGVkIScpO1xyXG4gICAgdGhpcy5fZmlsZU5hbWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NoZWV0TmFtZTogc3RyaW5nO1xyXG5cclxuICBnZXQgc2hlZXROYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hlZXROYW1lO1xyXG4gIH1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZFxyXG4gKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBzaGVldE5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgY29uc29sZS53YXJuKCdzaGVldE5hbWUgaW5wdXQgaXMgZGVwcmVjYXRlZCEnKTtcclxuICAgIHRoaXMuX3NoZWV0TmFtZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIERhdGEgYXJyYXkgd2hpY2ggaXMgZXh0cmFjdGVkIGZyb20gbmF0aXZlVGFibGVcclxuICAgKi9cclxuICBwcml2YXRlIF9kYXRhOiBBcnJheTxhbnk+O1xyXG5cclxuICBwcml2YXRlIF9pc0l0ZXJhdGluZzogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSBfaW5pdGlhbFBhZ2VJbmRleDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIF9pc0V4cG9ydGluZzogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHByaXZhdGUgX29wdGlvbnM/OiBPcHRpb25zO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgICBwcml2YXRlIHNlcnZpY2VMb2NhdG9yOiBTZXJ2aWNlTG9jYXRvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkYXRhRXh0cmFjdG9yOiBEYXRhRXh0cmFjdG9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgdGFibGU6IGFueSxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgdGhpcy5pbml0Q2RrVGFibGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE11c3QgcmV0dXJuIHRoZSBudW1iZXIgb2YgcGFnZXMgb2YgdGhlIHRhYmxlXHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdldFBhZ2VDb3VudCgpOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIE11c3QgcmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBwYWdlIHRoYXQncyBkaXNwbGF5ZWRcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0Q3VycmVudFBhZ2VJbmRleCgpOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZW4gY2FsbGVkLCB0aGUgQ2RrVGFibGUgc2hvdWxkIHJlbmRlciB0aGUgcm93cyBpbnNpZGUgdGhlIHBhZ2Ugd2hvc2UgaW5kZXggZ2l2ZW4gYXMgcGFyYW1ldGVyXHJcbiAgICogQHBhcmFtIGluZGV4IHBhZ2UgaW5kZXhcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ29Ub1BhZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIE11c3QgcmV0dXJuIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB0aGUgc3Vic2NyaWJlcnMgYWJvdXQgcGFnZSBjaGFuZ2VzXHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgcHJpdmF0ZSBpbml0Q2RrVGFibGUoKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcclxuICAgIGNvbnN0IHRhYmxlID0gdGhpcy52aWV3Q29udGFpbmVyUmVmWydfZGF0YSddLmNvbXBvbmVudFZpZXcuY29tcG9uZW50O1xyXG4gICAgaWYgKHRhYmxlKSB7XHJcbiAgICAgIHRoaXMuX2Nka1RhYmxlID0gdGFibGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudGFibGUpIHtcclxuICAgICAgdGhpcy5fY2RrVGFibGUgPSB0aGlzLnRhYmxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBBbmd1bGFyIHZlcnNpb24nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QnV0dG9uTGlzdGVuZXIoKSB7XHJcbiAgICBpZiAodGhpcy5fZXhwb3J0ZXJCdXR0b24pIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5fZXhwb3J0ZXJCdXR0b24uX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKGV2dCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7ZmlsZU5hbWU6IHRoaXMuX2ZpbGVOYW1lLCBzaGVldDogdGhpcy5fc2hlZXROYW1lfSBhcyBFeGNlbE9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5leHBvcnRUYWJsZShGaWxlVXRpbC5pZGVudGlmeUV4cG9ydFR5cGUodGhpcy5fZmlsZU5hbWUpLCBvcHRpb25zKTsgLy8gdGhpcyBpcyB0byBzdXBwb3J0IGRlcHJlY2F0ZWQgd2F5IG9mIGV4cG9ydGluZ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXJzIHBhZ2UgZXZlbnQgY2hhaW4gdGh1cyBleHRyYWN0aW5nIGFuZCBleHBvcnRpbmcgYWxsIHRoZSByb3dzIGluIG5hdGl2ZXRhYmxlcyBpbiBwYWdlc1xyXG4gICAqL1xyXG4gIGV4cG9ydFRhYmxlKGV4cG9ydFR5cGU/OiBFeHBvcnRUeXBlIHwgJ3hscycgfCAneGxzeCcgfCAnY3N2JyB8ICd0eHQnIHwgJ2pzb24nIHwgJ290aGVyJywgb3B0aW9ucz86IE9wdGlvbnMpIHtcclxuICAgIHRoaXMubG9hZEV4cG9ydGVyKGV4cG9ydFR5cGUpO1xyXG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLmV4cG9ydFN0YXJ0ZWQuZW1pdCgpO1xyXG4gICAgdGhpcy5faXNJdGVyYXRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5faXNFeHBvcnRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5fZGF0YSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICB0aGlzLmVuYWJsZUV4cG9ydEJ1dHRvbihmYWxzZSk7XHJcbiAgICB0aGlzLmV4dHJhY3RUYWJsZUhlYWRlcigpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5leHBvcnRXaXRoUGFnaW5hdGlvbigpO1xyXG4gICAgfSBjYXRjaCAobm90UGFnaW5hdGVkKSB7XHJcbiAgICAgIHRoaXMuZXhwb3J0U2luZ2xlUGFnZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkRXhwb3J0ZXIoZXhwb3J0VHlwZTogYW55KSB7XHJcbiAgICBpZiAoZXhwb3J0VHlwZSA9PT0gRXhwb3J0VHlwZS5PVEhFUi52YWx1ZU9mKCkpIHtcclxuICAgICAgdGhpcy5fZXhwb3J0ZXJTZXJ2aWNlID0gdGhpcy5leHBvcnRlcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4cG9ydGVyU2VydmljZSA9IHRoaXMuc2VydmljZUxvY2F0b3IuZ2V0U2VydmljZShleHBvcnRUeXBlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhwb3J0V2l0aFBhZ2luYXRpb24oKSB7XHJcbiAgICB0aGlzLl9pbml0aWFsUGFnZUluZGV4ID0gdGhpcy5nZXRDdXJyZW50UGFnZUluZGV4KCk7XHJcbiAgICB0aGlzLmluaXRQYWdlSGFuZGxlcigpO1xyXG4gICAgdGhpcy5nb1RvUGFnZSgwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhwb3J0U2luZ2xlUGFnZSgpIHtcclxuICAgIHRoaXMuZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCk7XHJcbiAgICB0aGlzLmV4dHJhY3RUYWJsZUZvb3RlcigpO1xyXG4gICAgdGhpcy5leHBvcnRFeHRyYWN0ZWREYXRhKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3REYXRhT25DdXJyZW50UGFnZSgpIHtcclxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdCh0aGlzLmRhdGFFeHRyYWN0b3IuZXh0cmFjdFJvd3ModGhpcy5fY2RrVGFibGUsIHRoaXMuaGlkZGVuQ29sdW1ucykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0UGFnZUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX3N1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLmdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLl9pc0l0ZXJhdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3REYXRhT25DdXJyZW50UGFnZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNOZXh0UGFnZSgpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uZXh0UGFnZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuX2lzSXRlcmF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5nb1RvUGFnZSh0aGlzLl9pbml0aWFsUGFnZUluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc0V4cG9ydGluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0V4cG9ydGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3RUYWJsZUZvb3RlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmV4cG9ydEV4dHJhY3RlZERhdGEoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4cG9ydEV4dHJhY3RlZERhdGEoKSB7XHJcbiAgICB0aGlzLl9leHBvcnRlclNlcnZpY2UuZXhwb3J0KHRoaXMuX2RhdGEsIHRoaXMuX29wdGlvbnMpO1xyXG4gICAgdGhpcy5fZGF0YSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICB0aGlzLmVuYWJsZUV4cG9ydEJ1dHRvbih0cnVlKTtcclxuICAgIHRoaXMuZXhwb3J0Q29tcGxldGVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXh0cmFjdFNwZWNpYWxSb3cob3V0bGV0OiBEYXRhUm93T3V0bGV0KSB7XHJcbiAgICBjb25zdCByb3cgPSB0aGlzLmRhdGFFeHRyYWN0b3IuZXh0cmFjdFJvdyh0aGlzLl9jZGtUYWJsZSwgdGhpcy5oaWRkZW5Db2x1bW5zLCBvdXRsZXQpO1xyXG4gICAgaWYgKHJvdykge1xyXG4gICAgICB0aGlzLl9kYXRhLnB1c2gocm93KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXh0cmFjdFRhYmxlSGVhZGVyKCkge1xyXG4gICAgdGhpcy5leHRyYWN0U3BlY2lhbFJvdyh0aGlzLl9jZGtUYWJsZS5faGVhZGVyUm93T3V0bGV0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXh0cmFjdFRhYmxlRm9vdGVyKCkge1xyXG4gICAgdGhpcy5leHRyYWN0U3BlY2lhbFJvdyh0aGlzLl9jZGtUYWJsZS5fZm9vdGVyUm93T3V0bGV0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNOZXh0UGFnZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmdldEN1cnJlbnRQYWdlSW5kZXgoKSA8IHRoaXMuZ2V0UGFnZUNvdW50KCkgLSAxKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5nb1RvUGFnZSh0aGlzLmdldEN1cnJlbnRQYWdlSW5kZXgoKSArIDEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbmFibGVFeHBvcnRCdXR0b24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLl9leHBvcnRlckJ1dHRvbikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2V4cG9ydGVyQnV0dG9uLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIHZhbHVlID8gbnVsbCA6ICd0cnVlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=