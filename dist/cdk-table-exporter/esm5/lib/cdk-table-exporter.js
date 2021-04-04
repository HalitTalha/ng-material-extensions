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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2Nkay10YWJsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUzRTs7R0FFRztBQUVIO0lBMEJFLDBCQUNZLFFBQW1CLEVBQ3JCLGNBQXFDLEVBQ3JDLGFBQW1DLEVBQ2pDLFNBQWM7UUFIZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBSztRQXhCaEIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzNDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQXdCaEQsQ0FBQztJQWlDSjs7T0FFRztJQUNILHNDQUFXLEdBQVgsVUFBWSxVQUEyRSxFQUFFLE9BQTZDO1FBQ3BJLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxF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QUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTywrQ0FBb0IsR0FBNUIsVUFBNkIsS0FBYTtRQUN4QyxPQUFPLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dCQTNMcUIsU0FBUztnQkFDTCxxQkFBcUI7Z0JBQ3RCLG9CQUFvQjs7O0lBekJwQztRQUFSLEtBQUssRUFBRTtrQ0FBaUIsS0FBSzsyREFBUztJQUM5QjtRQUFSLEtBQUssRUFBRTs7c0RBQThCO0lBQzVCO1FBQVQsTUFBTSxFQUFFOzs2REFBNEM7SUFDM0M7UUFBVCxNQUFNLEVBQUU7OzJEQUEwQztJQVAvQixnQkFBZ0I7UUFEckMsU0FBUyxFQUFFO3lDQTRCWSxTQUFTO1lBQ0wscUJBQXFCO1lBQ3RCLG9CQUFvQjtPQTdCekIsZ0JBQWdCLENBdU5yQztJQUFELHVCQUFDO0NBQUEsQUF2TkQsSUF1TkM7U0F2TnFCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFSb3dPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi9leHBvcnQtdHlwZSc7XHJcbmltcG9ydCB7IEV4Y2VsT3B0aW9ucywgT3B0aW9ucywgVHh0T3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IERhdGFFeHRyYWN0b3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLWV4dHJhY3Rvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXhwb3J0ZXIgfSBmcm9tICcuL3NlcnZpY2VzL2V4cG9ydGVycy9leHBvcnRlcic7XHJcbmltcG9ydCB7IFNlcnZpY2VMb2NhdG9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc2VydmljZS1sb2NhdG9yLnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIEV4cG9ydGVyIGNsYXNzIGZvciBDZGtUYWJsZS4gQWJzdHJhY3RzIHRoZSB2YXJ5aW5nIGJlaGF2aW9ycyBhbW9uZyBkaWZmZXJlbnQgQ2RrVGFibGUgaW1wbGVtZW50YXRpb25zLlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDZGtUYWJsZUV4cG9ydGVyIHtcclxuXHJcbiAgcHJpdmF0ZSBfZXhwb3J0ZXJTZXJ2aWNlOiBFeHBvcnRlcjxPcHRpb25zPjtcclxuXHJcbiAgQElucHV0KCkgaGlkZGVuQ29sdW1ucz86IEFycmF5PG51bWJlcj47XHJcbiAgQElucHV0KCkgZXhwb3J0ZXI/OiBFeHBvcnRlcjxPcHRpb25zPjtcclxuICBAT3V0cHV0KCkgZXhwb3J0Q29tcGxldGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBleHBvcnRTdGFydGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvKipcclxuICAgKiBEYXRhIGFycmF5IHdoaWNoIGlzIGV4dHJhY3RlZCBmcm9tIG5hdGl2ZVRhYmxlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZGF0YTogQXJyYXk8YW55PjtcclxuXHJcbiAgcHJpdmF0ZSBfaXNJdGVyYXRpbmc6IGJvb2xlYW47XHJcblxyXG4gIHByaXZhdGUgX2luaXRpYWxQYWdlSW5kZXg6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBfaXNFeHBvcnRpbmc6IGJvb2xlYW47XHJcblxyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBwcml2YXRlIF9vcHRpb25zPzogT3B0aW9ucztcclxuXHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRSb3dzPzogQXJyYXk8bnVtYmVyPjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgc2VydmljZUxvY2F0b3I6IFNlcnZpY2VMb2NhdG9yU2VydmljZSxcclxuICAgIHByaXZhdGUgZGF0YUV4dHJhY3RvcjogRGF0YUV4dHJhY3RvclNlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgX2Nka1RhYmxlOiBhbnlcclxuICApIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIE11c3QgcmV0dXJuIHRoZSBudW1iZXIgb2YgcGFnZXMgb2YgdGhlIHRhYmxlXHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdldFBhZ2VDb3VudCgpOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIE11c3QgcmV0dXJuIHRoZSBudW1iZXIgb2YgaXRlbXMgdG8gZGlzcGxheSBvbiBhIHBhZ2VcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0UGFnZVNpemUoKTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBNdXN0IHJldHVybiB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgcGFnZSB0aGF0J3MgZGlzcGxheWVkXHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdldEN1cnJlbnRQYWdlSW5kZXgoKTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBNdXN0IHJldHVybiB0aGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSB0YWJsZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRUb3RhbEl0ZW1zQ291bnQoKTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBXaGVuIGNhbGxlZCwgdGhlIENka1RhYmxlIHNob3VsZCByZW5kZXIgdGhlIHJvd3MgaW5zaWRlIHRoZSBwYWdlIHdob3NlIGluZGV4IGdpdmVuIGFzIHBhcmFtZXRlclxyXG4gICAqIEBwYXJhbSBpbmRleCBwYWdlIGluZGV4XHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdvVG9QYWdlKGluZGV4OiBudW1iZXIpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBNdXN0IHJldHVybiBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgdGhlIHN1YnNjcmliZXJzIGFib3V0IHBhZ2UgY2hhbmdlc1xyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRQYWdlQ2hhbmdlT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXJzIHBhZ2UgZXZlbnQgY2hhaW4gdGh1cyBleHRyYWN0aW5nIGFuZCBleHBvcnRpbmcgYWxsIHRoZSByb3dzIGluIG5hdGl2ZXRhYmxlcyBpbiBwYWdlc1xyXG4gICAqL1xyXG4gIGV4cG9ydFRhYmxlKGV4cG9ydFR5cGU/OiBFeHBvcnRUeXBlIHwgJ3hscycgfCAneGxzeCcgfCAnY3N2JyB8ICd0eHQnIHwgJ2pzb24nIHwgJ290aGVyJywgb3B0aW9ucz86IE9wdGlvbnMgfCBFeGNlbE9wdGlvbnMgfCBUeHRPcHRpb25zKSB7XHJcbiAgICB0aGlzLmxvYWRFeHBvcnRlcihleHBvcnRUeXBlKTtcclxuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdGhpcy5leHBvcnRTdGFydGVkLmVtaXQoKTtcclxuICAgIHRoaXMuX2lzSXRlcmF0aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuX2lzRXhwb3J0aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuX2RhdGEgPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgdGhpcy5leHRyYWN0VGFibGVIZWFkZXIoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuZXhwb3J0V2l0aFBhZ2luYXRpb24oKTtcclxuICAgIH0gY2F0Y2ggKG5vdFBhZ2luYXRlZCkge1xyXG4gICAgICB0aGlzLmV4cG9ydFNpbmdsZVBhZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVJvdyhpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYWdpbmF0ZWRSb3dJbmRleDogbnVtYmVyID0gdGhpcy5nZXRQYWdpbmF0ZWRSb3dJbmRleChpbmRleCk7XHJcbiAgICBpZiAodGhpcy5pc1RvZ2dsZU9uKHBhZ2luYXRlZFJvd0luZGV4KSkge1xyXG4gICAgICB0aGlzLnRvZ2dsZU9mZihwYWdpbmF0ZWRSb3dJbmRleCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRvZ2dsZU9uKHBhZ2luYXRlZFJvd0luZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZXZlbnQgd2lsbCBjbGVhciByb3dzIHNlbGVjdGlvbiBkb25lIHVzaW5nIHRvZ2dsZVJvdyBmdW5jdGlvbmFsaXR5XHJcbiAgICovXHJcbiAgcmVzZXRUb2dnbGVSb3dzKCkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRSb3dzID0gW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZU9uKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkUm93cyA9IFsuLi4odGhpcy5fc2VsZWN0ZWRSb3dzIHx8IFtdKSwgaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVPZmYoaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRSb3dzID0gIHRoaXMuX3NlbGVjdGVkUm93cy5maWx0ZXIoeCA9PiB4ICE9PSBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVG9nZ2xlT24oaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkUm93cz8uaW5jbHVkZXMoaW5kZXgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgbG9hZEV4cG9ydGVyKGV4cG9ydFR5cGU6IGFueSkge1xyXG4gICAgaWYgKGV4cG9ydFR5cGUgPT09IEV4cG9ydFR5cGUuT1RIRVIudmFsdWVPZigpKSB7XHJcbiAgICAgIHRoaXMuX2V4cG9ydGVyU2VydmljZSA9IHRoaXMuZXhwb3J0ZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHBvcnRlclNlcnZpY2UgPSB0aGlzLnNlcnZpY2VMb2NhdG9yLmdldFNlcnZpY2UoZXhwb3J0VHlwZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4cG9ydFdpdGhQYWdpbmF0aW9uKCkge1xyXG4gICAgdGhpcy5faW5pdGlhbFBhZ2VJbmRleCA9IHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpO1xyXG4gICAgdGhpcy5pbml0UGFnZUhhbmRsZXIoKTtcclxuICAgIHRoaXMuZ29Ub1BhZ2UoMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4cG9ydFNpbmdsZVBhZ2UoKSB7XHJcbiAgICB0aGlzLmV4dHJhY3REYXRhT25DdXJyZW50UGFnZSgpO1xyXG4gICAgdGhpcy5leHRyYWN0VGFibGVGb290ZXIoKTtcclxuICAgIHRoaXMuZXhwb3J0RXh0cmFjdGVkRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKSB7XHJcbiAgICBjb25zdCByb3dzID0gdGhpcy5kYXRhRXh0cmFjdG9yLmV4dHJhY3RSb3dzKHRoaXMuX2Nka1RhYmxlLCB0aGlzLmhpZGRlbkNvbHVtbnMpO1xyXG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuY29uY2F0KHRoaXMuZ2V0U2VsZWN0ZWRSb3dzKHJvd3MpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U2VsZWN0ZWRSb3dzKHJvd3M6IEFycmF5PGFueT4pIHtcclxuICAgIGlmICh0aGlzLmlzU2VsZWN0aXZlRXhwb3J0KCkpIHtcclxuICAgICAgcmV0dXJuIHJvd3MuZmlsdGVyKChfLCBpKSA9PiB0aGlzLl9zZWxlY3RlZFJvd3MuaW5jbHVkZXModGhpcy5nZXRQYWdpbmF0ZWRSb3dJbmRleChpKSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHJvd3M7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzU2VsZWN0aXZlRXhwb3J0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkUm93cyAmJiAhdGhpcy5pc01hc3RlclRvZ2dsZU9mZigpICYmICAhdGhpcy5pc01hc3RlclRvZ2dsZU9uKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTWFzdGVyVG9nZ2xlT24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlU2VsZWN0ZWRSb3dDb3VudCh0aGlzLmdldFRvdGFsSXRlbXNDb3VudCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNNYXN0ZXJUb2dnbGVPZmYoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlU2VsZWN0ZWRSb3dDb3VudCgwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29tcGFyZVNlbGVjdGVkUm93Q291bnQocm93Q291bnQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhKHRoaXMuX3NlbGVjdGVkUm93cz8ubGVuZ3RoID09PSByb3dDb3VudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRQYWdlSGFuZGxlcigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fc3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuZ2V0UGFnZUNoYW5nZU9ic2VydmFibGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuX2lzSXRlcmF0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc05leHRQYWdlKCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLm5leHRQYWdlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5faXNJdGVyYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGlzLmdvVG9QYWdlKHRoaXMuX2luaXRpYWxQYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2lzRXhwb3J0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzRXhwb3J0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdFRhYmxlRm9vdGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0RXh0cmFjdGVkRGF0YSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhwb3J0RXh0cmFjdGVkRGF0YSgpIHtcclxuICAgIHRoaXMuX2V4cG9ydGVyU2VydmljZS5leHBvcnQodGhpcy5fZGF0YSwgdGhpcy5fb3B0aW9ucyk7XHJcbiAgICB0aGlzLl9kYXRhID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgIHRoaXMuZXhwb3J0Q29tcGxldGVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXh0cmFjdFNwZWNpYWxSb3dzKG91dGxldDogRGF0YVJvd091dGxldCkge1xyXG4gICAgdGhpcy5fZGF0YS5wdXNoKC4uLnRoaXMuZGF0YUV4dHJhY3Rvci5leHRyYWN0Um93cyh0aGlzLl9jZGtUYWJsZSwgdGhpcy5oaWRkZW5Db2x1bW5zLCBvdXRsZXQpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXh0cmFjdFRhYmxlSGVhZGVyKCkge1xyXG4gICAgdGhpcy5leHRyYWN0U3BlY2lhbFJvd3ModGhpcy5fY2RrVGFibGUuX2hlYWRlclJvd091dGxldCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RUYWJsZUZvb3RlcigpIHtcclxuICAgIHRoaXMuZXh0cmFjdFNwZWNpYWxSb3dzKHRoaXMuX2Nka1RhYmxlLl9mb290ZXJSb3dPdXRsZXQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNOZXh0UGFnZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmdldEN1cnJlbnRQYWdlSW5kZXgoKSA8IHRoaXMuZ2V0UGFnZUNvdW50KCkgLSAxKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBuZXh0UGFnZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ29Ub1BhZ2UodGhpcy5nZXRDdXJyZW50UGFnZUluZGV4KCkgKyAxKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGFnaW5hdGVkUm93SW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gaW5kZXggKyAodGhpcy5nZXRQYWdlU2l6ZSgpICogdGhpcy5nZXRDdXJyZW50UGFnZUluZGV4KCkpO1xyXG4gIH1cclxufVxyXG4iXX0=