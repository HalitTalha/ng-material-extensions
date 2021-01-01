import { __decorate, __metadata } from "tslib";
import { Directive, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { ExportType } from './export-type';
import { DataExtractorService } from './services/data-extractor.service';
import { ServiceLocatorService } from './services/service-locator.service';
/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 */
let CdkTableExporter = class CdkTableExporter {
    constructor(renderer, serviceLocator, dataExtractor, _cdkTable) {
        this.renderer = renderer;
        this.serviceLocator = serviceLocator;
        this.dataExtractor = dataExtractor;
        this._cdkTable = _cdkTable;
        this.exportCompleted = new EventEmitter();
        this.exportStarted = new EventEmitter();
    }
    /**
     * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
     */
    exportTable(exportType, options) {
        this.loadExporter(exportType);
        this._options = options;
        this.exportStarted.emit();
        this._isIterating = true;
        this._isExporting = true;
        this._data = new Array();
        this.extractTableHeader();
        try {
            this.exportWithPagination();
        }
        catch (notPaginated) {
            this.exportSinglePage();
        }
    }
    toggleRow(index) {
        const paginatedRowIndex = this.getPaginatedRowIndex(index);
        if (this.isToggleOn(paginatedRowIndex)) {
            this.toggleOff(paginatedRowIndex);
        }
        else {
            this.toggleOn(paginatedRowIndex);
        }
    }
    /**
     * This event will clear rows selection done using toggleRow functionality
     *
     */
    resetToggleRows() {
        this._selectedRows = [];
    }
    toggleOn(index) {
        this._selectedRows = [...(this._selectedRows || []), index];
    }
    toggleOff(index) {
        this._selectedRows = this._selectedRows.filter(x => x !== index);
    }
    isToggleOn(index) {
        var _a;
        return (_a = this._selectedRows) === null || _a === void 0 ? void 0 : _a.includes(index);
    }
    loadExporter(exportType) {
        if (exportType === ExportType.OTHER.valueOf()) {
            this._exporterService = this.exporter;
        }
        else {
            this._exporterService = this.serviceLocator.getService(exportType);
        }
    }
    exportWithPagination() {
        this._initialPageIndex = this.getCurrentPageIndex();
        this.initPageHandler();
        this.goToPage(0);
    }
    exportSinglePage() {
        this.extractDataOnCurrentPage();
        this.extractTableFooter();
        this.exportExtractedData();
    }
    extractDataOnCurrentPage() {
        const rows = this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns);
        this._data = this._data.concat(this.getSelectedRows(rows));
    }
    getSelectedRows(rows) {
        if (this.isSelectiveExport()) {
            return rows.filter((_, i) => this._selectedRows.includes(this.getPaginatedRowIndex(i)));
        }
        else {
            return rows;
        }
    }
    isSelectiveExport() {
        return this._selectedRows && !this.isMasterToggleOff() && !this.isMasterToggleOn();
    }
    isMasterToggleOn() {
        return this.compareSelectedRowCount(this.getTotalItemsCount());
    }
    isMasterToggleOff() {
        return this.compareSelectedRowCount(0);
    }
    compareSelectedRowCount(rowCount) {
        var _a;
        return !!(((_a = this._selectedRows) === null || _a === void 0 ? void 0 : _a.length) === rowCount);
    }
    initPageHandler() {
        if (!this._subscription) {
            this._subscription = this.getPageChangeObservable().subscribe(() => {
                setTimeout(() => {
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
                });
            });
        }
    }
    exportExtractedData() {
        this._exporterService.export(this._data, this._options);
        this._data = new Array();
        this.exportCompleted.emit();
    }
    extractSpecialRows(outlet) {
        this._data.push(...this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns, outlet));
    }
    extractTableHeader() {
        this.extractSpecialRows(this._cdkTable._headerRowOutlet);
    }
    extractTableFooter() {
        this.extractSpecialRows(this._cdkTable._footerRowOutlet);
    }
    hasNextPage() {
        if (this.getCurrentPageIndex() < this.getPageCount() - 1) {
            return true;
        }
        else {
            return false;
        }
    }
    nextPage() {
        this.goToPage(this.getCurrentPageIndex() + 1);
    }
    getPaginatedRowIndex(index) {
        return index + (this.getPageSize() * this.getCurrentPageIndex());
    }
};
CdkTableExporter.ctorParameters = () => [
    { type: Renderer2 },
    { type: ServiceLocatorService },
    { type: DataExtractorService },
    { type: undefined }
];
__decorate([
    Input(),
    __metadata("design:type", Array)
], CdkTableExporter.prototype, "hiddenColumns", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CdkTableExporter.prototype, "exporter", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CdkTableExporter.prototype, "exportCompleted", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CdkTableExporter.prototype, "exportStarted", void 0);
CdkTableExporter = __decorate([
    Directive(),
    __metadata("design:paramtypes", [Renderer2,
        ServiceLocatorService,
        DataExtractorService, Object])
], CdkTableExporter);
export { CdkTableExporter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2Nkay10YWJsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUzRTs7R0FFRztBQUVILElBQXNCLGdCQUFnQixHQUF0QyxNQUFzQixnQkFBZ0I7SUEwQnBDLFlBQ1ksUUFBbUIsRUFDckIsY0FBcUMsRUFDckMsYUFBbUMsRUFDakMsU0FBYztRQUhkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBeEJoQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDM0Msa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBd0JoRCxDQUFDO0lBaUNKOztPQUVHO0lBQ0gsV0FBVyxDQUFDLFVBQTJFLEVBQUUsT0FBNkM7UUFDcEksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUks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QUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBQ0YsQ0FBQTs7WUE3THVCLFNBQVM7WUFDTCxxQkFBcUI7WUFDdEIsb0JBQW9COzs7QUF6QnBDO0lBQVIsS0FBSyxFQUFFOzhCQUFpQixLQUFLO3VEQUFTO0FBQzlCO0lBQVIsS0FBSyxFQUFFOztrREFBOEI7QUFDNUI7SUFBVCxNQUFNLEVBQUU7O3lEQUE0QztBQUMzQztJQUFULE1BQU0sRUFBRTs7dURBQTBDO0FBUC9CLGdCQUFnQjtJQURyQyxTQUFTLEVBQUU7cUNBNEJZLFNBQVM7UUFDTCxxQkFBcUI7UUFDdEIsb0JBQW9CO0dBN0J6QixnQkFBZ0IsQ0F3TnJDO1NBeE5xQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhUm93T3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRXhwb3J0VHlwZSB9IGZyb20gJy4vZXhwb3J0LXR5cGUnO1xyXG5pbXBvcnQgeyBFeGNlbE9wdGlvbnMsIE9wdGlvbnMsIFR4dE9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xyXG5pbXBvcnQgeyBEYXRhRXh0cmFjdG9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGF0YS1leHRyYWN0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEV4cG9ydGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9leHBvcnRlcnMvZXhwb3J0ZXInO1xyXG5pbXBvcnQgeyBTZXJ2aWNlTG9jYXRvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NlcnZpY2UtbG9jYXRvci5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBFeHBvcnRlciBjbGFzcyBmb3IgQ2RrVGFibGUuIEFic3RyYWN0cyB0aGUgdmFyeWluZyBiZWhhdmlvcnMgYW1vbmcgZGlmZmVyZW50IENka1RhYmxlIGltcGxlbWVudGF0aW9ucy5cclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2RrVGFibGVFeHBvcnRlciB7XHJcblxyXG4gIHByaXZhdGUgX2V4cG9ydGVyU2VydmljZTogRXhwb3J0ZXI8T3B0aW9ucz47XHJcblxyXG4gIEBJbnB1dCgpIGhpZGRlbkNvbHVtbnM/OiBBcnJheTxudW1iZXI+O1xyXG4gIEBJbnB1dCgpIGV4cG9ydGVyPzogRXhwb3J0ZXI8T3B0aW9ucz47XHJcbiAgQE91dHB1dCgpIGV4cG9ydENvbXBsZXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgZXhwb3J0U3RhcnRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSBhcnJheSB3aGljaCBpcyBleHRyYWN0ZWQgZnJvbSBuYXRpdmVUYWJsZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2RhdGE6IEFycmF5PGFueT47XHJcblxyXG4gIHByaXZhdGUgX2lzSXRlcmF0aW5nOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIF9pbml0aWFsUGFnZUluZGV4OiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgX2lzRXhwb3J0aW5nOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBfb3B0aW9ucz86IE9wdGlvbnM7XHJcblxyXG4gIHByaXZhdGUgX3NlbGVjdGVkUm93cz86IEFycmF5PG51bWJlcj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHNlcnZpY2VMb2NhdG9yOiBTZXJ2aWNlTG9jYXRvclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGFFeHRyYWN0b3I6IERhdGFFeHRyYWN0b3JTZXJ2aWNlLFxyXG4gICAgcHJvdGVjdGVkIF9jZGtUYWJsZTogYW55XHJcbiAgKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBNdXN0IHJldHVybiB0aGUgbnVtYmVyIG9mIHBhZ2VzIG9mIHRoZSB0YWJsZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRQYWdlQ291bnQoKTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBNdXN0IHJldHVybiB0aGUgbnVtYmVyIG9mIGl0ZW1zIHRvIGRpc3BsYXkgb24gYSBwYWdlXHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdldFBhZ2VTaXplKCk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IHBhZ2UgdGhhdCdzIGRpc3BsYXllZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRDdXJyZW50UGFnZUluZGV4KCk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gdGhlIHRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgdGFibGVcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0VG90YWxJdGVtc0NvdW50KCk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiBjYWxsZWQsIHRoZSBDZGtUYWJsZSBzaG91bGQgcmVuZGVyIHRoZSByb3dzIGluc2lkZSB0aGUgcGFnZSB3aG9zZSBpbmRleCBnaXZlbiBhcyBwYXJhbWV0ZXJcclxuICAgKiBAcGFyYW0gaW5kZXggcGFnZSBpbmRleFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnb1RvUGFnZShpbmRleDogbnVtYmVyKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHRoZSBzdWJzY3JpYmVycyBhYm91dCBwYWdlIGNoYW5nZXNcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0UGFnZUNoYW5nZU9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VycyBwYWdlIGV2ZW50IGNoYWluIHRodXMgZXh0cmFjdGluZyBhbmQgZXhwb3J0aW5nIGFsbCB0aGUgcm93cyBpbiBuYXRpdmV0YWJsZXMgaW4gcGFnZXNcclxuICAgKi9cclxuICBleHBvcnRUYWJsZShleHBvcnRUeXBlPzogRXhwb3J0VHlwZSB8ICd4bHMnIHwgJ3hsc3gnIHwgJ2NzdicgfCAndHh0JyB8ICdqc29uJyB8ICdvdGhlcicsIG9wdGlvbnM/OiBPcHRpb25zIHwgRXhjZWxPcHRpb25zIHwgVHh0T3B0aW9ucykge1xyXG4gICAgdGhpcy5sb2FkRXhwb3J0ZXIoZXhwb3J0VHlwZSk7XHJcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMuZXhwb3J0U3RhcnRlZC5lbWl0KCk7XHJcbiAgICB0aGlzLl9pc0l0ZXJhdGluZyA9IHRydWU7XHJcbiAgICB0aGlzLl9pc0V4cG9ydGluZyA9IHRydWU7XHJcbiAgICB0aGlzLl9kYXRhID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgIHRoaXMuZXh0cmFjdFRhYmxlSGVhZGVyKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLmV4cG9ydFdpdGhQYWdpbmF0aW9uKCk7XHJcbiAgICB9IGNhdGNoIChub3RQYWdpbmF0ZWQpIHtcclxuICAgICAgdGhpcy5leHBvcnRTaW5nbGVQYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVSb3coaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgcGFnaW5hdGVkUm93SW5kZXg6IG51bWJlciA9IHRoaXMuZ2V0UGFnaW5hdGVkUm93SW5kZXgoaW5kZXgpO1xyXG4gICAgaWYgKHRoaXMuaXNUb2dnbGVPbihwYWdpbmF0ZWRSb3dJbmRleCkpIHtcclxuICAgICAgdGhpcy50b2dnbGVPZmYocGFnaW5hdGVkUm93SW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50b2dnbGVPbihwYWdpbmF0ZWRSb3dJbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGV2ZW50IHdpbGwgY2xlYXIgcm93cyBzZWxlY3Rpb24gZG9uZSB1c2luZyB0b2dnbGVSb3cgZnVuY3Rpb25hbGl0eVxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHJlc2V0VG9nZ2xlUm93cygpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkUm93cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVPbihpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZFJvd3MgPSBbLi4uKHRoaXMuX3NlbGVjdGVkUm93cyB8fCBbXSksIGluZGV4XTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlT2ZmKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkUm93cyA9ICB0aGlzLl9zZWxlY3RlZFJvd3MuZmlsdGVyKHggPT4geCAhPT0gaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1RvZ2dsZU9uKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFJvd3M/LmluY2x1ZGVzKGluZGV4KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGxvYWRFeHBvcnRlcihleHBvcnRUeXBlOiBhbnkpIHtcclxuICAgIGlmIChleHBvcnRUeXBlID09PSBFeHBvcnRUeXBlLk9USEVSLnZhbHVlT2YoKSkge1xyXG4gICAgICB0aGlzLl9leHBvcnRlclNlcnZpY2UgPSB0aGlzLmV4cG9ydGVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZXhwb3J0ZXJTZXJ2aWNlID0gdGhpcy5zZXJ2aWNlTG9jYXRvci5nZXRTZXJ2aWNlKGV4cG9ydFR5cGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHBvcnRXaXRoUGFnaW5hdGlvbigpIHtcclxuICAgIHRoaXMuX2luaXRpYWxQYWdlSW5kZXggPSB0aGlzLmdldEN1cnJlbnRQYWdlSW5kZXgoKTtcclxuICAgIHRoaXMuaW5pdFBhZ2VIYW5kbGVyKCk7XHJcbiAgICB0aGlzLmdvVG9QYWdlKDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHBvcnRTaW5nbGVQYWdlKCkge1xyXG4gICAgdGhpcy5leHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKTtcclxuICAgIHRoaXMuZXh0cmFjdFRhYmxlRm9vdGVyKCk7XHJcbiAgICB0aGlzLmV4cG9ydEV4dHJhY3RlZERhdGEoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCkge1xyXG4gICAgY29uc3Qgcm93cyA9IHRoaXMuZGF0YUV4dHJhY3Rvci5leHRyYWN0Um93cyh0aGlzLl9jZGtUYWJsZSwgdGhpcy5oaWRkZW5Db2x1bW5zKTtcclxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdCh0aGlzLmdldFNlbGVjdGVkUm93cyhyb3dzKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNlbGVjdGVkUm93cyhyb3dzOiBBcnJheTxhbnk+KSB7XHJcbiAgICBpZiAodGhpcy5pc1NlbGVjdGl2ZUV4cG9ydCgpKSB7XHJcbiAgICAgIHJldHVybiByb3dzLmZpbHRlcigoXywgaSkgPT4gdGhpcy5fc2VsZWN0ZWRSb3dzLmluY2x1ZGVzKHRoaXMuZ2V0UGFnaW5hdGVkUm93SW5kZXgoaSkpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiByb3dzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1NlbGVjdGl2ZUV4cG9ydCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFJvd3MgJiYgIXRoaXMuaXNNYXN0ZXJUb2dnbGVPZmYoKSAmJiAgIXRoaXMuaXNNYXN0ZXJUb2dnbGVPbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc01hc3RlclRvZ2dsZU9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZVNlbGVjdGVkUm93Q291bnQodGhpcy5nZXRUb3RhbEl0ZW1zQ291bnQoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTWFzdGVyVG9nZ2xlT2ZmKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZVNlbGVjdGVkUm93Q291bnQoMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXBhcmVTZWxlY3RlZFJvd0NvdW50KHJvd0NvdW50OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhISh0aGlzLl9zZWxlY3RlZFJvd3M/Lmxlbmd0aCA9PT0gcm93Q291bnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0UGFnZUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX3N1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLmdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLl9pc0l0ZXJhdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3REYXRhT25DdXJyZW50UGFnZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNOZXh0UGFnZSgpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uZXh0UGFnZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuX2lzSXRlcmF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5nb1RvUGFnZSh0aGlzLl9pbml0aWFsUGFnZUluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc0V4cG9ydGluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0V4cG9ydGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3RUYWJsZUZvb3RlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmV4cG9ydEV4dHJhY3RlZERhdGEoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4cG9ydEV4dHJhY3RlZERhdGEoKSB7XHJcbiAgICB0aGlzLl9leHBvcnRlclNlcnZpY2UuZXhwb3J0KHRoaXMuX2RhdGEsIHRoaXMuX29wdGlvbnMpO1xyXG4gICAgdGhpcy5fZGF0YSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICB0aGlzLmV4cG9ydENvbXBsZXRlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RTcGVjaWFsUm93cyhvdXRsZXQ6IERhdGFSb3dPdXRsZXQpIHtcclxuICAgIHRoaXMuX2RhdGEucHVzaCguLi50aGlzLmRhdGFFeHRyYWN0b3IuZXh0cmFjdFJvd3ModGhpcy5fY2RrVGFibGUsIHRoaXMuaGlkZGVuQ29sdW1ucywgb3V0bGV0KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RUYWJsZUhlYWRlcigpIHtcclxuICAgIHRoaXMuZXh0cmFjdFNwZWNpYWxSb3dzKHRoaXMuX2Nka1RhYmxlLl9oZWFkZXJSb3dPdXRsZXQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0VGFibGVGb290ZXIoKSB7XHJcbiAgICB0aGlzLmV4dHJhY3RTcGVjaWFsUm93cyh0aGlzLl9jZGtUYWJsZS5fZm9vdGVyUm93T3V0bGV0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzTmV4dFBhZ2UoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5nZXRDdXJyZW50UGFnZUluZGV4KCkgPCB0aGlzLmdldFBhZ2VDb3VudCgpIC0gMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmV4dFBhZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvVG9QYWdlKHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpICsgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhZ2luYXRlZFJvd0luZGV4KGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGluZGV4ICsgKHRoaXMuZ2V0UGFnZVNpemUoKSAqIHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpKTtcclxuICB9XHJcbn1cclxuIl19