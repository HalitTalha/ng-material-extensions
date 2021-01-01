import { __decorate, __metadata, __read, __spread } from "tslib";
import { Directive, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { ExportType } from './export-type';
import { DataExtractorService } from './services/data-extractor.service';
import { ServiceLocatorService } from './services/service-locator.service';
/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 */
var CdkTableExporter = /** @class */ (function () {
    function CdkTableExporter(renderer, serviceLocator, dataExtractor, _cdkTable) {
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
    CdkTableExporter.prototype.exportTable = function (exportType, options) {
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
    };
    CdkTableExporter.prototype.toggleRow = function (index) {
        var paginatedRowIndex = this.getPaginatedRowIndex(index);
        if (this.isToggleOn(paginatedRowIndex)) {
            this.toggleOff(paginatedRowIndex);
        }
        else {
            this.toggleOn(paginatedRowIndex);
        }
    };
    /**
     * This event will clear rows selection done using toggleRow functionality
     *
     */
    CdkTableExporter.prototype.resetToggleRows = function () {
        this._selectedRows = [];
    };
    CdkTableExporter.prototype.toggleOn = function (index) {
        this._selectedRows = __spread((this._selectedRows || []), [index]);
    };
    CdkTableExporter.prototype.toggleOff = function (index) {
        this._selectedRows = this._selectedRows.filter(function (x) { return x !== index; });
    };
    CdkTableExporter.prototype.isToggleOn = function (index) {
        var _a;
        return (_a = this._selectedRows) === null || _a === void 0 ? void 0 : _a.includes(index);
    };
    CdkTableExporter.prototype.loadExporter = function (exportType) {
        if (exportType === ExportType.OTHER.valueOf()) {
            this._exporterService = this.exporter;
        }
        else {
            this._exporterService = this.serviceLocator.getService(exportType);
        }
    };
    CdkTableExporter.prototype.exportWithPagination = function () {
        this._initialPageIndex = this.getCurrentPageIndex();
        this.initPageHandler();
        this.goToPage(0);
    };
    CdkTableExporter.prototype.exportSinglePage = function () {
        this.extractDataOnCurrentPage();
        this.extractTableFooter();
        this.exportExtractedData();
    };
    CdkTableExporter.prototype.extractDataOnCurrentPage = function () {
        var rows = this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns);
        this._data = this._data.concat(this.getSelectedRows(rows));
    };
    CdkTableExporter.prototype.getSelectedRows = function (rows) {
        var _this = this;
        if (this.isSelectiveExport()) {
            return rows.filter(function (_, i) { return _this._selectedRows.includes(_this.getPaginatedRowIndex(i)); });
        }
        else {
            return rows;
        }
    };
    CdkTableExporter.prototype.isSelectiveExport = function () {
        return this._selectedRows && !this.isMasterToggleOff() && !this.isMasterToggleOn();
    };
    CdkTableExporter.prototype.isMasterToggleOn = function () {
        return this.compareSelectedRowCount(this.getTotalItemsCount());
    };
    CdkTableExporter.prototype.isMasterToggleOff = function () {
        return this.compareSelectedRowCount(0);
    };
    CdkTableExporter.prototype.compareSelectedRowCount = function (rowCount) {
        var _a;
        return !!(((_a = this._selectedRows) === null || _a === void 0 ? void 0 : _a.length) === rowCount);
    };
    CdkTableExporter.prototype.initPageHandler = function () {
        var _this = this;
        if (!this._subscription) {
            this._subscription = this.getPageChangeObservable().subscribe(function () {
                setTimeout(function () {
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
                        _this.extractTableFooter();
                        _this.exportExtractedData();
                    }
                });
            });
        }
    };
    CdkTableExporter.prototype.exportExtractedData = function () {
        this._exporterService.export(this._data, this._options);
        this._data = new Array();
        this.exportCompleted.emit();
    };
    CdkTableExporter.prototype.extractSpecialRows = function (outlet) {
        var _a;
        (_a = this._data).push.apply(_a, __spread(this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns, outlet)));
    };
    CdkTableExporter.prototype.extractTableHeader = function () {
        this.extractSpecialRows(this._cdkTable._headerRowOutlet);
    };
    CdkTableExporter.prototype.extractTableFooter = function () {
        this.extractSpecialRows(this._cdkTable._footerRowOutlet);
    };
    CdkTableExporter.prototype.hasNextPage = function () {
        if (this.getCurrentPageIndex() < this.getPageCount() - 1) {
            return true;
        }
        else {
            return false;
        }
    };
    CdkTableExporter.prototype.nextPage = function () {
        this.goToPage(this.getCurrentPageIndex() + 1);
    };
    CdkTableExporter.prototype.getPaginatedRowIndex = function (index) {
        return index + (this.getPageSize() * this.getCurrentPageIndex());
    };
    CdkTableExporter.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ServiceLocatorService },
        { type: DataExtractorService },
        { type: undefined }
    ]; };
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
    return CdkTableExporter;
}());
export { CdkTableExporter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2Nkay10YWJsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUzRTs7R0FFRztBQUVIO0lBMEJFLDBCQUNZLFFBQW1CLEVBQ3JCLGNBQXFDLEVBQ3JDLGFBQW1DLEVBQ2pDLFNBQWM7UUFIZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBSztRQXhCaEIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzNDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQXdCaEQsQ0FBQztJQWlDSjs7T0FFRztJQUNILHNDQUFXLEdBQVgsVUFBWSxVQUEyRSxFQUFFLE9BQTZDO1FBQ3BJLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxF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QUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU8sK0NBQW9CLEdBQTVCLFVBQTZCLEtBQWE7UUFDeEMsT0FBTyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDOztnQkE1THFCLFNBQVM7Z0JBQ0wscUJBQXFCO2dCQUN0QixvQkFBb0I7OztJQXpCcEM7UUFBUixLQUFLLEVBQUU7a0NBQWlCLEtBQUs7MkRBQVM7SUFDOUI7UUFBUixLQUFLLEVBQUU7O3NEQUE4QjtJQUM1QjtRQUFULE1BQU0sRUFBRTs7NkRBQTRDO0lBQzNDO1FBQVQsTUFBTSxFQUFFOzsyREFBMEM7SUFQL0IsZ0JBQWdCO1FBRHJDLFNBQVMsRUFBRTt5Q0E0QlksU0FBUztZQUNMLHFCQUFxQjtZQUN0QixvQkFBb0I7T0E3QnpCLGdCQUFnQixDQXdOckM7SUFBRCx1QkFBQztDQUFBLEFBeE5ELElBd05DO1NBeE5xQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhUm93T3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRXhwb3J0VHlwZSB9IGZyb20gJy4vZXhwb3J0LXR5cGUnO1xyXG5pbXBvcnQgeyBFeGNlbE9wdGlvbnMsIE9wdGlvbnMsIFR4dE9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xyXG5pbXBvcnQgeyBEYXRhRXh0cmFjdG9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGF0YS1leHRyYWN0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEV4cG9ydGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9leHBvcnRlcnMvZXhwb3J0ZXInO1xyXG5pbXBvcnQgeyBTZXJ2aWNlTG9jYXRvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NlcnZpY2UtbG9jYXRvci5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBFeHBvcnRlciBjbGFzcyBmb3IgQ2RrVGFibGUuIEFic3RyYWN0cyB0aGUgdmFyeWluZyBiZWhhdmlvcnMgYW1vbmcgZGlmZmVyZW50IENka1RhYmxlIGltcGxlbWVudGF0aW9ucy5cclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2RrVGFibGVFeHBvcnRlciB7XHJcblxyXG4gIHByaXZhdGUgX2V4cG9ydGVyU2VydmljZTogRXhwb3J0ZXI8T3B0aW9ucz47XHJcblxyXG4gIEBJbnB1dCgpIGhpZGRlbkNvbHVtbnM/OiBBcnJheTxudW1iZXI+O1xyXG4gIEBJbnB1dCgpIGV4cG9ydGVyPzogRXhwb3J0ZXI8T3B0aW9ucz47XHJcbiAgQE91dHB1dCgpIGV4cG9ydENvbXBsZXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgZXhwb3J0U3RhcnRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSBhcnJheSB3aGljaCBpcyBleHRyYWN0ZWQgZnJvbSBuYXRpdmVUYWJsZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2RhdGE6IEFycmF5PGFueT47XHJcblxyXG4gIHByaXZhdGUgX2lzSXRlcmF0aW5nOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIF9pbml0aWFsUGFnZUluZGV4OiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgX2lzRXhwb3J0aW5nOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBfb3B0aW9ucz86IE9wdGlvbnM7XHJcblxyXG4gIHByaXZhdGUgX3NlbGVjdGVkUm93cz86IEFycmF5PG51bWJlcj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHNlcnZpY2VMb2NhdG9yOiBTZXJ2aWNlTG9jYXRvclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGFFeHRyYWN0b3I6IERhdGFFeHRyYWN0b3JTZXJ2aWNlLFxyXG4gICAgcHJvdGVjdGVkIF9jZGtUYWJsZTogYW55XHJcbiAgKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBNdXN0IHJldHVybiB0aGUgbnVtYmVyIG9mIHBhZ2VzIG9mIHRoZSB0YWJsZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRQYWdlQ291bnQoKTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBNdXN0IHJldHVybiB0aGUgbnVtYmVyIG9mIGl0ZW1zIHRvIGRpc3BsYXkgb24gYSBwYWdlXHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdldFBhZ2VTaXplKCk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IHBhZ2UgdGhhdCdzIGRpc3BsYXllZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRDdXJyZW50UGFnZUluZGV4KCk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gdGhlIHRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgdGFibGVcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0VG90YWxJdGVtc0NvdW50KCk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiBjYWxsZWQsIHRoZSBDZGtUYWJsZSBzaG91bGQgcmVuZGVyIHRoZSByb3dzIGluc2lkZSB0aGUgcGFnZSB3aG9zZSBpbmRleCBnaXZlbiBhcyBwYXJhbWV0ZXJcclxuICAgKiBAcGFyYW0gaW5kZXggcGFnZSBpbmRleFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnb1RvUGFnZShpbmRleDogbnVtYmVyKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHRoZSBzdWJzY3JpYmVycyBhYm91dCBwYWdlIGNoYW5nZXNcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0UGFnZUNoYW5nZU9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VycyBwYWdlIGV2ZW50IGNoYWluIHRodXMgZXh0cmFjdGluZyBhbmQgZXhwb3J0aW5nIGFsbCB0aGUgcm93cyBpbiBuYXRpdmV0YWJsZXMgaW4gcGFnZXNcclxuICAgKi9cclxuICBleHBvcnRUYWJsZShleHBvcnRUeXBlPzogRXhwb3J0VHlwZSB8ICd4bHMnIHwgJ3hsc3gnIHwgJ2NzdicgfCAndHh0JyB8ICdqc29uJyB8ICdvdGhlcicsIG9wdGlvbnM/OiBPcHRpb25zIHwgRXhjZWxPcHRpb25zIHwgVHh0T3B0aW9ucykge1xyXG4gICAgdGhpcy5sb2FkRXhwb3J0ZXIoZXhwb3J0VHlwZSk7XHJcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMuZXhwb3J0U3RhcnRlZC5lbWl0KCk7XHJcbiAgICB0aGlzLl9pc0l0ZXJhdGluZyA9IHRydWU7XHJcbiAgICB0aGlzLl9pc0V4cG9ydGluZyA9IHRydWU7XHJcbiAgICB0aGlzLl9kYXRhID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgIHRoaXMuZXh0cmFjdFRhYmxlSGVhZGVyKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLmV4cG9ydFdpdGhQYWdpbmF0aW9uKCk7XHJcbiAgICB9IGNhdGNoIChub3RQYWdpbmF0ZWQpIHtcclxuICAgICAgdGhpcy5leHBvcnRTaW5nbGVQYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVSb3coaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgcGFnaW5hdGVkUm93SW5kZXg6IG51bWJlciA9IHRoaXMuZ2V0UGFnaW5hdGVkUm93SW5kZXgoaW5kZXgpO1xyXG4gICAgaWYgKHRoaXMuaXNUb2dnbGVPbihwYWdpbmF0ZWRSb3dJbmRleCkpIHtcclxuICAgICAgdGhpcy50b2dnbGVPZmYocGFnaW5hdGVkUm93SW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50b2dnbGVPbihwYWdpbmF0ZWRSb3dJbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGV2ZW50IHdpbGwgY2xlYXIgcm93cyBzZWxlY3Rpb24gZG9uZSB1c2luZyB0b2dnbGVSb3cgZnVuY3Rpb25hbGl0eVxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHJlc2V0VG9nZ2xlUm93cygpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkUm93cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVPbihpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZFJvd3MgPSBbLi4uKHRoaXMuX3NlbGVjdGVkUm93cyB8fCBbXSksIGluZGV4XTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlT2ZmKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkUm93cyA9ICB0aGlzLl9zZWxlY3RlZFJvd3MuZmlsdGVyKHggPT4geCAhPT0gaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1RvZ2dsZU9uKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFJvd3M/LmluY2x1ZGVzKGluZGV4KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGxvYWRFeHBvcnRlcihleHBvcnRUeXBlOiBhbnkpIHtcclxuICAgIGlmIChleHBvcnRUeXBlID09PSBFeHBvcnRUeXBlLk9USEVSLnZhbHVlT2YoKSkge1xyXG4gICAgICB0aGlzLl9leHBvcnRlclNlcnZpY2UgPSB0aGlzLmV4cG9ydGVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZXhwb3J0ZXJTZXJ2aWNlID0gdGhpcy5zZXJ2aWNlTG9jYXRvci5nZXRTZXJ2aWNlKGV4cG9ydFR5cGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHBvcnRXaXRoUGFnaW5hdGlvbigpIHtcclxuICAgIHRoaXMuX2luaXRpYWxQYWdlSW5kZXggPSB0aGlzLmdldEN1cnJlbnRQYWdlSW5kZXgoKTtcclxuICAgIHRoaXMuaW5pdFBhZ2VIYW5kbGVyKCk7XHJcbiAgICB0aGlzLmdvVG9QYWdlKDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHBvcnRTaW5nbGVQYWdlKCkge1xyXG4gICAgdGhpcy5leHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKTtcclxuICAgIHRoaXMuZXh0cmFjdFRhYmxlRm9vdGVyKCk7XHJcbiAgICB0aGlzLmV4cG9ydEV4dHJhY3RlZERhdGEoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCkge1xyXG4gICAgY29uc3Qgcm93cyA9IHRoaXMuZGF0YUV4dHJhY3Rvci5leHRyYWN0Um93cyh0aGlzLl9jZGtUYWJsZSwgdGhpcy5oaWRkZW5Db2x1bW5zKTtcclxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdCh0aGlzLmdldFNlbGVjdGVkUm93cyhyb3dzKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNlbGVjdGVkUm93cyhyb3dzOiBBcnJheTxhbnk+KSB7XHJcbiAgICBpZiAodGhpcy5pc1NlbGVjdGl2ZUV4cG9ydCgpKSB7XHJcbiAgICAgIHJldHVybiByb3dzLmZpbHRlcigoXywgaSkgPT4gdGhpcy5fc2VsZWN0ZWRSb3dzLmluY2x1ZGVzKHRoaXMuZ2V0UGFnaW5hdGVkUm93SW5kZXgoaSkpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiByb3dzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1NlbGVjdGl2ZUV4cG9ydCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFJvd3MgJiYgIXRoaXMuaXNNYXN0ZXJUb2dnbGVPZmYoKSAmJiAgIXRoaXMuaXNNYXN0ZXJUb2dnbGVPbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc01hc3RlclRvZ2dsZU9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZVNlbGVjdGVkUm93Q291bnQodGhpcy5nZXRUb3RhbEl0ZW1zQ291bnQoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTWFzdGVyVG9nZ2xlT2ZmKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZVNlbGVjdGVkUm93Q291bnQoMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXBhcmVTZWxlY3RlZFJvd0NvdW50KHJvd0NvdW50OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhISh0aGlzLl9zZWxlY3RlZFJvd3M/Lmxlbmd0aCA9PT0gcm93Q291bnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0UGFnZUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX3N1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLmdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLl9pc0l0ZXJhdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3REYXRhT25DdXJyZW50UGFnZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNOZXh0UGFnZSgpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uZXh0UGFnZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuX2lzSXRlcmF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5nb1RvUGFnZSh0aGlzLl9pbml0aWFsUGFnZUluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc0V4cG9ydGluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0V4cG9ydGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3RUYWJsZUZvb3RlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmV4cG9ydEV4dHJhY3RlZERhdGEoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4cG9ydEV4dHJhY3RlZERhdGEoKSB7XHJcbiAgICB0aGlzLl9leHBvcnRlclNlcnZpY2UuZXhwb3J0KHRoaXMuX2RhdGEsIHRoaXMuX29wdGlvbnMpO1xyXG4gICAgdGhpcy5fZGF0YSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICB0aGlzLmV4cG9ydENvbXBsZXRlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RTcGVjaWFsUm93cyhvdXRsZXQ6IERhdGFSb3dPdXRsZXQpIHtcclxuICAgIHRoaXMuX2RhdGEucHVzaCguLi50aGlzLmRhdGFFeHRyYWN0b3IuZXh0cmFjdFJvd3ModGhpcy5fY2RrVGFibGUsIHRoaXMuaGlkZGVuQ29sdW1ucywgb3V0bGV0KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RUYWJsZUhlYWRlcigpIHtcclxuICAgIHRoaXMuZXh0cmFjdFNwZWNpYWxSb3dzKHRoaXMuX2Nka1RhYmxlLl9oZWFkZXJSb3dPdXRsZXQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0VGFibGVGb290ZXIoKSB7XHJcbiAgICB0aGlzLmV4dHJhY3RTcGVjaWFsUm93cyh0aGlzLl9jZGtUYWJsZS5fZm9vdGVyUm93T3V0bGV0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzTmV4dFBhZ2UoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5nZXRDdXJyZW50UGFnZUluZGV4KCkgPCB0aGlzLmdldFBhZ2VDb3VudCgpIC0gMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmV4dFBhZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvVG9QYWdlKHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpICsgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhZ2luYXRlZFJvd0luZGV4KGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGluZGV4ICsgKHRoaXMuZ2V0UGFnZVNpemUoKSAqIHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpKTtcclxuICB9XHJcbn1cclxuIl19