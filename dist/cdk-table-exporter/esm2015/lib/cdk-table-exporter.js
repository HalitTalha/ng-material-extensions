import { EventEmitter, Input, Output, Renderer2, ViewContainerRef, Directive } from '@angular/core';
import { ExportType } from './export-type';
import { FileUtil } from './file-util';
import { DataExtractorService } from './services/data-extractor.service';
import { ServiceLocatorService } from './services/service-locator.service';
import * as i0 from "@angular/core";
import * as i1 from "./services/service-locator.service";
import * as i2 from "./services/data-extractor.service";
/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 */
export class CdkTableExporter {
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
    get cdkTable() {
        return this._cdkTable;
    }
    /**
     * @deprecated
     */
    set cdkTable(value) {
        console.warn('cdkTable input is deprecated!');
        this._cdkTable = value;
    }
    get exporterButton() {
        return this._exporterButton;
    }
    /**
     * @deprecated
     */
    set exporterButton(value) {
        console.warn('exporterButton input is deprecated!');
        this._exporterButton = value;
        this.setButtonListener();
    }
    get fileName() {
        return this._fileName;
    }
    /**
     * @deprecated
     */
    set fileName(value) {
        console.warn('fileName input is deprecated!');
        this._fileName = value;
    }
    get sheetName() {
        return this._sheetName;
    }
    /**
     * @deprecated
     */
    set sheetName(value) {
        console.warn('sheetName input is deprecated!');
        this._sheetName = value;
    }
    initCdkTable() {
        var _a, _b;
        // tslint:disable-next-line:no-string-literal
        const table = (_b = (_a = this.viewContainerRef['_data']) === null || _a === void 0 ? void 0 : _a.componentView) === null || _b === void 0 ? void 0 : _b.component;
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
    setButtonListener() {
        if (this._exporterButton) {
            this.renderer.listen(this._exporterButton._elementRef.nativeElement, 'click', (evt) => {
                const options = { fileName: this._fileName, sheet: this._sheetName };
                this.exportTable(FileUtil.identifyExportType(this._fileName), options); // this is to support deprecated way of exporting
            });
        }
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
        this.enableExportButton(false);
        this.extractTableHeader();
        try {
            this.exportWithPagination();
        }
        catch (notPaginated) {
            this.exportSinglePage();
        }
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
        this._data = this._data.concat(this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns));
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
        this.enableExportButton(true);
        this.exportCompleted.emit();
    }
    extractSpecialRow(outlet) {
        const row = this.dataExtractor.extractRow(this._cdkTable, this.hiddenColumns, outlet);
        if (row) {
            this._data.push(row);
        }
    }
    extractTableHeader() {
        this.extractSpecialRow(this._cdkTable._headerRowOutlet);
    }
    extractTableFooter() {
        this.extractSpecialRow(this._cdkTable._footerRowOutlet);
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
    enableExportButton(value) {
        if (this._exporterButton) {
            this.renderer.setProperty(this._exporterButton._elementRef.nativeElement, 'disabled', value ? null : 'true');
        }
    }
}
CdkTableExporter.ɵfac = function CdkTableExporter_Factory(t) { i0.ɵɵinvalidFactory(); };
CdkTableExporter.ɵdir = i0.ɵɵdefineDirective({ type: CdkTableExporter, inputs: { hiddenColumns: "hiddenColumns", exporter: "exporter", cdkTable: "cdkTable", exporterButton: "exporterButton", fileName: "fileName", sheetName: "sheetName" }, outputs: { exportCompleted: "exportCompleted", exportStarted: "exportStarted" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkTableExporter, [{
        type: Directive
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.ServiceLocatorService }, { type: i2.DataExtractorService }, { type: undefined }, { type: i0.ViewContainerRef }]; }, { hiddenColumns: [{
            type: Input
        }], exporter: [{
            type: Input
        }], exportCompleted: [{
            type: Output
        }], exportStarted: [{
            type: Output
        }], cdkTable: [{
            type: Input
        }], exporterButton: [{
            type: Input
        }], fileName: [{
            type: Input
        }], sheetName: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2Nkay10YWJsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFdkMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7QUFFM0U7O0dBRUc7QUFFSCxNQUFNLE9BQWdCLGdCQUFnQjtJQXNGcEMsWUFDWSxRQUFtQixFQUNyQixjQUFxQyxFQUNyQyxhQUFtQyxFQUNqQyxLQUFVLEVBQ1YsZ0JBQWtDO1FBSmxDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNqQyxVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQ1YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQXJGcEMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzNDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQXNGakQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFuRkQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQ0ksUUFBUSxDQUFDLEtBQVU7UUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FB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QUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsRUFBRTtZQUN4RCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxLQUFjO1FBQ3ZDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5RztJQUNILENBQUM7OztxREFqUG1CLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBRHJDLFNBQVM7O2tCQUtQLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUNOLE1BQU07O2tCQVdOLEtBQUs7O2tCQWVMLEtBQUs7O2tCQWdCTCxLQUFLOztrQkFlTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJvd091dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFJlbmRlcmVyMiwgVmlld0NvbnRhaW5lclJlZiwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEV4cG9ydFR5cGUgfSBmcm9tICcuL2V4cG9ydC10eXBlJztcbmltcG9ydCB7IEZpbGVVdGlsIH0gZnJvbSAnLi9maWxlLXV0aWwnO1xuaW1wb3J0IHsgRXhjZWxPcHRpb25zLCBPcHRpb25zLCBUeHRPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IERhdGFFeHRyYWN0b3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLWV4dHJhY3Rvci5zZXJ2aWNlJztcbmltcG9ydCB7IEV4cG9ydGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9leHBvcnRlcnMvZXhwb3J0ZXInO1xuaW1wb3J0IHsgU2VydmljZUxvY2F0b3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZXJ2aWNlLWxvY2F0b3Iuc2VydmljZSc7XG5cbi8qKlxuICogRXhwb3J0ZXIgY2xhc3MgZm9yIENka1RhYmxlLiBBYnN0cmFjdHMgdGhlIHZhcnlpbmcgYmVoYXZpb3JzIGFtb25nIGRpZmZlcmVudCBDZGtUYWJsZSBpbXBsZW1lbnRhdGlvbnMuXG4gKi9cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENka1RhYmxlRXhwb3J0ZXIge1xuXG4gIHByaXZhdGUgX2V4cG9ydGVyU2VydmljZTogRXhwb3J0ZXI8T3B0aW9ucz47XG5cbiAgQElucHV0KCkgaGlkZGVuQ29sdW1ucz86IEFycmF5PG51bWJlcj47XG4gIEBJbnB1dCgpIGV4cG9ydGVyPzogRXhwb3J0ZXI8T3B0aW9ucz47XG4gIEBPdXRwdXQoKSBleHBvcnRDb21wbGV0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBleHBvcnRTdGFydGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIHByaXZhdGUgX2Nka1RhYmxlOiBhbnk7XG5cbiAgZ2V0IGNka1RhYmxlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nka1RhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgY2RrVGFibGUodmFsdWU6IGFueSkge1xuICAgIGNvbnNvbGUud2FybignY2RrVGFibGUgaW5wdXQgaXMgZGVwcmVjYXRlZCEnKTtcbiAgICB0aGlzLl9jZGtUYWJsZSA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZXhwb3J0ZXJCdXR0b246IGFueTtcblxuICBnZXQgZXhwb3J0ZXJCdXR0b24oKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZXhwb3J0ZXJCdXR0b247XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBleHBvcnRlckJ1dHRvbih2YWx1ZTogYW55KSB7XG4gICAgY29uc29sZS53YXJuKCdleHBvcnRlckJ1dHRvbiBpbnB1dCBpcyBkZXByZWNhdGVkIScpO1xuICAgIHRoaXMuX2V4cG9ydGVyQnV0dG9uID0gdmFsdWU7XG4gICAgdGhpcy5zZXRCdXR0b25MaXN0ZW5lcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsZU5hbWU6IHN0cmluZztcblxuICBnZXQgZmlsZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZU5hbWU7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBmaWxlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc29sZS53YXJuKCdmaWxlTmFtZSBpbnB1dCBpcyBkZXByZWNhdGVkIScpO1xuICAgIHRoaXMuX2ZpbGVOYW1lID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9zaGVldE5hbWU6IHN0cmluZztcblxuICBnZXQgc2hlZXROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0TmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHNoZWV0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc29sZS53YXJuKCdzaGVldE5hbWUgaW5wdXQgaXMgZGVwcmVjYXRlZCEnKTtcbiAgICB0aGlzLl9zaGVldE5hbWUgPSB2YWx1ZTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIERhdGEgYXJyYXkgd2hpY2ggaXMgZXh0cmFjdGVkIGZyb20gbmF0aXZlVGFibGVcbiAgICovXG4gIHByaXZhdGUgX2RhdGE6IEFycmF5PGFueT47XG5cbiAgcHJpdmF0ZSBfaXNJdGVyYXRpbmc6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfaW5pdGlhbFBhZ2VJbmRleDogbnVtYmVyO1xuXG4gIHByaXZhdGUgX2lzRXhwb3J0aW5nOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgX29wdGlvbnM/OiBPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgc2VydmljZUxvY2F0b3I6IFNlcnZpY2VMb2NhdG9yU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGFFeHRyYWN0b3I6IERhdGFFeHRyYWN0b3JTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0YWJsZTogYW55LFxuICAgIHByb3RlY3RlZCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICApIHtcbiAgICB0aGlzLmluaXRDZGtUYWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE11c3QgcmV0dXJuIHRoZSBudW1iZXIgb2YgcGFnZXMgb2YgdGhlIHRhYmxlXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZ2V0UGFnZUNvdW50KCk6IG51bWJlcjtcblxuICAvKipcbiAgICogTXVzdCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IHBhZ2UgdGhhdCdzIGRpc3BsYXllZFxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldEN1cnJlbnRQYWdlSW5kZXgoKTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXaGVuIGNhbGxlZCwgdGhlIENka1RhYmxlIHNob3VsZCByZW5kZXIgdGhlIHJvd3MgaW5zaWRlIHRoZSBwYWdlIHdob3NlIGluZGV4IGdpdmVuIGFzIHBhcmFtZXRlclxuICAgKiBAcGFyYW0gaW5kZXggcGFnZSBpbmRleFxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdvVG9QYWdlKGluZGV4OiBudW1iZXIpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBNdXN0IHJldHVybiBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgdGhlIHN1YnNjcmliZXJzIGFib3V0IHBhZ2UgY2hhbmdlc1xuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8YW55PjtcblxuICBwcml2YXRlIGluaXRDZGtUYWJsZSgpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgICBjb25zdCB0YWJsZSA9IHRoaXMudmlld0NvbnRhaW5lclJlZlsnX2RhdGEnXT8uY29tcG9uZW50Vmlldz8uY29tcG9uZW50O1xuICAgIGlmICh0YWJsZSkge1xuICAgICAgdGhpcy5fY2RrVGFibGUgPSB0YWJsZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGFibGUpIHtcbiAgICAgIHRoaXMuX2Nka1RhYmxlID0gdGhpcy50YWJsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBBbmd1bGFyIHZlcnNpb24nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEJ1dHRvbkxpc3RlbmVyKCkge1xuICAgIGlmICh0aGlzLl9leHBvcnRlckJ1dHRvbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5fZXhwb3J0ZXJCdXR0b24uX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0geyBmaWxlTmFtZTogdGhpcy5fZmlsZU5hbWUsIHNoZWV0OiB0aGlzLl9zaGVldE5hbWUgfSBhcyBFeGNlbE9wdGlvbnM7XG4gICAgICAgIHRoaXMuZXhwb3J0VGFibGUoRmlsZVV0aWwuaWRlbnRpZnlFeHBvcnRUeXBlKHRoaXMuX2ZpbGVOYW1lKSwgb3B0aW9ucyk7IC8vIHRoaXMgaXMgdG8gc3VwcG9ydCBkZXByZWNhdGVkIHdheSBvZiBleHBvcnRpbmdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBwYWdlIGV2ZW50IGNoYWluIHRodXMgZXh0cmFjdGluZyBhbmQgZXhwb3J0aW5nIGFsbCB0aGUgcm93cyBpbiBuYXRpdmV0YWJsZXMgaW4gcGFnZXNcbiAgICovXG4gIGV4cG9ydFRhYmxlKGV4cG9ydFR5cGU/OiBFeHBvcnRUeXBlIHwgJ3hscycgfCAneGxzeCcgfCAnY3N2JyB8ICd0eHQnIHwgJ2pzb24nIHwgJ290aGVyJywgb3B0aW9ucz86IEV4Y2VsT3B0aW9ucyB8IFR4dE9wdGlvbnMgfCBPcHRpb25zKSB7XG4gICAgdGhpcy5sb2FkRXhwb3J0ZXIoZXhwb3J0VHlwZSk7XG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5leHBvcnRTdGFydGVkLmVtaXQoKTtcbiAgICB0aGlzLl9pc0l0ZXJhdGluZyA9IHRydWU7XG4gICAgdGhpcy5faXNFeHBvcnRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2RhdGEgPSBuZXcgQXJyYXk8YW55PigpO1xuICAgIHRoaXMuZW5hYmxlRXhwb3J0QnV0dG9uKGZhbHNlKTtcbiAgICB0aGlzLmV4dHJhY3RUYWJsZUhlYWRlcigpO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmV4cG9ydFdpdGhQYWdpbmF0aW9uKCk7XG4gICAgfSBjYXRjaCAobm90UGFnaW5hdGVkKSB7XG4gICAgICB0aGlzLmV4cG9ydFNpbmdsZVBhZ2UoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWRFeHBvcnRlcihleHBvcnRUeXBlOiBhbnkpIHtcbiAgICBpZiAoZXhwb3J0VHlwZSA9PT0gRXhwb3J0VHlwZS5PVEhFUi52YWx1ZU9mKCkpIHtcbiAgICAgIHRoaXMuX2V4cG9ydGVyU2VydmljZSA9IHRoaXMuZXhwb3J0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2V4cG9ydGVyU2VydmljZSA9IHRoaXMuc2VydmljZUxvY2F0b3IuZ2V0U2VydmljZShleHBvcnRUeXBlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGV4cG9ydFdpdGhQYWdpbmF0aW9uKCkge1xuICAgIHRoaXMuX2luaXRpYWxQYWdlSW5kZXggPSB0aGlzLmdldEN1cnJlbnRQYWdlSW5kZXgoKTtcbiAgICB0aGlzLmluaXRQYWdlSGFuZGxlcigpO1xuICAgIHRoaXMuZ29Ub1BhZ2UoMCk7XG4gIH1cblxuICBwcml2YXRlIGV4cG9ydFNpbmdsZVBhZ2UoKSB7XG4gICAgdGhpcy5leHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKTtcbiAgICB0aGlzLmV4dHJhY3RUYWJsZUZvb3RlcigpO1xuICAgIHRoaXMuZXhwb3J0RXh0cmFjdGVkRGF0YSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKSB7XG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuY29uY2F0KHRoaXMuZGF0YUV4dHJhY3Rvci5leHRyYWN0Um93cyh0aGlzLl9jZGtUYWJsZSwgdGhpcy5oaWRkZW5Db2x1bW5zKSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRQYWdlSGFuZGxlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5nZXRQYWdlQ2hhbmdlT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLl9pc0l0ZXJhdGluZykge1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc05leHRQYWdlKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5uZXh0UGFnZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5faXNJdGVyYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5nb1RvUGFnZSh0aGlzLl9pbml0aWFsUGFnZUluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2lzRXhwb3J0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0V4cG9ydGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0VGFibGVGb290ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0RXh0cmFjdGVkRGF0YSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGV4cG9ydEV4dHJhY3RlZERhdGEoKSB7XG4gICAgdGhpcy5fZXhwb3J0ZXJTZXJ2aWNlLmV4cG9ydCh0aGlzLl9kYXRhLCB0aGlzLl9vcHRpb25zKTtcbiAgICB0aGlzLl9kYXRhID0gbmV3IEFycmF5PGFueT4oKTtcbiAgICB0aGlzLmVuYWJsZUV4cG9ydEJ1dHRvbih0cnVlKTtcbiAgICB0aGlzLmV4cG9ydENvbXBsZXRlZC5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3RTcGVjaWFsUm93KG91dGxldDogRGF0YVJvd091dGxldCkge1xuICAgIGNvbnN0IHJvdyA9IHRoaXMuZGF0YUV4dHJhY3Rvci5leHRyYWN0Um93KHRoaXMuX2Nka1RhYmxlLCB0aGlzLmhpZGRlbkNvbHVtbnMsIG91dGxldCk7XG4gICAgaWYgKHJvdykge1xuICAgICAgdGhpcy5fZGF0YS5wdXNoKHJvdyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0VGFibGVIZWFkZXIoKSB7XG4gICAgdGhpcy5leHRyYWN0U3BlY2lhbFJvdyh0aGlzLl9jZGtUYWJsZS5faGVhZGVyUm93T3V0bGV0KTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFRhYmxlRm9vdGVyKCkge1xuICAgIHRoaXMuZXh0cmFjdFNwZWNpYWxSb3codGhpcy5fY2RrVGFibGUuX2Zvb3RlclJvd091dGxldCk7XG4gIH1cblxuICBwdWJsaWMgaGFzTmV4dFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpIDwgdGhpcy5nZXRQYWdlQ291bnQoKSAtIDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5leHRQYWdlKCk6IHZvaWQge1xuICAgIHRoaXMuZ29Ub1BhZ2UodGhpcy5nZXRDdXJyZW50UGFnZUluZGV4KCkgKyAxKTtcbiAgfVxuXG4gIHByaXZhdGUgZW5hYmxlRXhwb3J0QnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX2V4cG9ydGVyQnV0dG9uKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2V4cG9ydGVyQnV0dG9uLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIHZhbHVlID8gbnVsbCA6ICd0cnVlJyk7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==