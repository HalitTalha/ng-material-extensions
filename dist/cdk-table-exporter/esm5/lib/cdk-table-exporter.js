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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2Nkay10YWJsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUzRTs7R0FFRztBQUVIO0lBMEJFLDBCQUNZLFFBQW1CLEVBQ3JCLGNBQXFDLEVBQ3JDLGFBQW1DLEVBQ2pDLFNBQWM7UUFIZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBSztRQXhCaEIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzNDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQXdCaEQsQ0FBQztJQWlDSjs7T0FFRztJQUNILHNDQUFXLEdBQVgsVUFBWSxVQUEyRSxFQUFFLE9BQTZDO1FBQ3BJLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxF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QUFvQixHQUE1QixVQUE2QixLQUFhO1FBQ3hDLE9BQU8sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Z0JBcExxQixTQUFTO2dCQUNMLHFCQUFxQjtnQkFDdEIsb0JBQW9COzs7SUF6QnBDO1FBQVIsS0FBSyxFQUFFO2tDQUFpQixLQUFLOzJEQUFTO0lBQzlCO1FBQVIsS0FBSyxFQUFFOztzREFBOEI7SUFDNUI7UUFBVCxNQUFNLEVBQUU7OzZEQUE0QztJQUMzQztRQUFULE1BQU0sRUFBRTs7MkRBQTBDO0lBUC9CLGdCQUFnQjtRQURyQyxTQUFTLEVBQUU7eUNBNEJZLFNBQVM7WUFDTCxxQkFBcUI7WUFDdEIsb0JBQW9CO09BN0J6QixnQkFBZ0IsQ0FnTnJDO0lBQUQsdUJBQUM7Q0FBQSxBQWhORCxJQWdOQztTQWhOcUIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJvd091dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEV4cG9ydFR5cGUgfSBmcm9tICcuL2V4cG9ydC10eXBlJztcclxuaW1wb3J0IHsgRXhjZWxPcHRpb25zLCBPcHRpb25zLCBUeHRPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zJztcclxuaW1wb3J0IHsgRGF0YUV4dHJhY3RvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEtZXh0cmFjdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeHBvcnRlciB9IGZyb20gJy4vc2VydmljZXMvZXhwb3J0ZXJzL2V4cG9ydGVyJztcclxuaW1wb3J0IHsgU2VydmljZUxvY2F0b3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZXJ2aWNlLWxvY2F0b3Iuc2VydmljZSc7XHJcblxyXG4vKipcclxuICogRXhwb3J0ZXIgY2xhc3MgZm9yIENka1RhYmxlLiBBYnN0cmFjdHMgdGhlIHZhcnlpbmcgYmVoYXZpb3JzIGFtb25nIGRpZmZlcmVudCBDZGtUYWJsZSBpbXBsZW1lbnRhdGlvbnMuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENka1RhYmxlRXhwb3J0ZXIge1xyXG5cclxuICBwcml2YXRlIF9leHBvcnRlclNlcnZpY2U6IEV4cG9ydGVyPE9wdGlvbnM+O1xyXG5cclxuICBASW5wdXQoKSBoaWRkZW5Db2x1bW5zPzogQXJyYXk8bnVtYmVyPjtcclxuICBASW5wdXQoKSBleHBvcnRlcj86IEV4cG9ydGVyPE9wdGlvbnM+O1xyXG4gIEBPdXRwdXQoKSBleHBvcnRDb21wbGV0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGV4cG9ydFN0YXJ0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIERhdGEgYXJyYXkgd2hpY2ggaXMgZXh0cmFjdGVkIGZyb20gbmF0aXZlVGFibGVcclxuICAgKi9cclxuICBwcml2YXRlIF9kYXRhOiBBcnJheTxhbnk+O1xyXG5cclxuICBwcml2YXRlIF9pc0l0ZXJhdGluZzogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSBfaW5pdGlhbFBhZ2VJbmRleDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIF9pc0V4cG9ydGluZzogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHByaXZhdGUgX29wdGlvbnM/OiBPcHRpb25zO1xyXG5cclxuICBwcml2YXRlIF9zZWxlY3RlZFJvd3M/OiBBcnJheTxudW1iZXI+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlTG9jYXRvcjogU2VydmljZUxvY2F0b3JTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkYXRhRXh0cmFjdG9yOiBEYXRhRXh0cmFjdG9yU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBfY2RrVGFibGU6IGFueVxyXG4gICkge31cclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gdGhlIG51bWJlciBvZiBwYWdlcyBvZiB0aGUgdGFibGVcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0UGFnZUNvdW50KCk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gdGhlIG51bWJlciBvZiBpdGVtcyB0byBkaXNwbGF5IG9uIGEgcGFnZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRQYWdlU2l6ZSgpOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIE11c3QgcmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBwYWdlIHRoYXQncyBkaXNwbGF5ZWRcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0Q3VycmVudFBhZ2VJbmRleCgpOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIE11c3QgcmV0dXJuIHRoZSB0b3RhbCBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIHRhYmxlXHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdldFRvdGFsSXRlbXNDb3VudCgpOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZW4gY2FsbGVkLCB0aGUgQ2RrVGFibGUgc2hvdWxkIHJlbmRlciB0aGUgcm93cyBpbnNpZGUgdGhlIHBhZ2Ugd2hvc2UgaW5kZXggZ2l2ZW4gYXMgcGFyYW1ldGVyXHJcbiAgICogQHBhcmFtIGluZGV4IHBhZ2UgaW5kZXhcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ29Ub1BhZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIE11c3QgcmV0dXJuIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB0aGUgc3Vic2NyaWJlcnMgYWJvdXQgcGFnZSBjaGFuZ2VzXHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlcnMgcGFnZSBldmVudCBjaGFpbiB0aHVzIGV4dHJhY3RpbmcgYW5kIGV4cG9ydGluZyBhbGwgdGhlIHJvd3MgaW4gbmF0aXZldGFibGVzIGluIHBhZ2VzXHJcbiAgICovXHJcbiAgZXhwb3J0VGFibGUoZXhwb3J0VHlwZT86IEV4cG9ydFR5cGUgfCAneGxzJyB8ICd4bHN4JyB8ICdjc3YnIHwgJ3R4dCcgfCAnanNvbicgfCAnb3RoZXInLCBvcHRpb25zPzogT3B0aW9ucyB8IEV4Y2VsT3B0aW9ucyB8IFR4dE9wdGlvbnMpIHtcclxuICAgIHRoaXMubG9hZEV4cG9ydGVyKGV4cG9ydFR5cGUpO1xyXG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLmV4cG9ydFN0YXJ0ZWQuZW1pdCgpO1xyXG4gICAgdGhpcy5faXNJdGVyYXRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5faXNFeHBvcnRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5fZGF0YSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICB0aGlzLmV4dHJhY3RUYWJsZUhlYWRlcigpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5leHBvcnRXaXRoUGFnaW5hdGlvbigpO1xyXG4gICAgfSBjYXRjaCAobm90UGFnaW5hdGVkKSB7XHJcbiAgICAgIHRoaXMuZXhwb3J0U2luZ2xlUGFnZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUm93KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhZ2luYXRlZFJvd0luZGV4OiBudW1iZXIgPSB0aGlzLmdldFBhZ2luYXRlZFJvd0luZGV4KGluZGV4KTtcclxuICAgIGlmICh0aGlzLmlzVG9nZ2xlT24ocGFnaW5hdGVkUm93SW5kZXgpKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlT2ZmKHBhZ2luYXRlZFJvd0luZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlT24ocGFnaW5hdGVkUm93SW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVPbihpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZFJvd3MgPSBbLi4uKHRoaXMuX3NlbGVjdGVkUm93cyB8fCBbXSksIGluZGV4XTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlT2ZmKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkUm93cyA9ICB0aGlzLl9zZWxlY3RlZFJvd3MuZmlsdGVyKHggPT4geCAhPT0gaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1RvZ2dsZU9uKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFJvd3M/LmluY2x1ZGVzKGluZGV4KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGxvYWRFeHBvcnRlcihleHBvcnRUeXBlOiBhbnkpIHtcclxuICAgIGlmIChleHBvcnRUeXBlID09PSBFeHBvcnRUeXBlLk9USEVSLnZhbHVlT2YoKSkge1xyXG4gICAgICB0aGlzLl9leHBvcnRlclNlcnZpY2UgPSB0aGlzLmV4cG9ydGVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZXhwb3J0ZXJTZXJ2aWNlID0gdGhpcy5zZXJ2aWNlTG9jYXRvci5nZXRTZXJ2aWNlKGV4cG9ydFR5cGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHBvcnRXaXRoUGFnaW5hdGlvbigpIHtcclxuICAgIHRoaXMuX2luaXRpYWxQYWdlSW5kZXggPSB0aGlzLmdldEN1cnJlbnRQYWdlSW5kZXgoKTtcclxuICAgIHRoaXMuaW5pdFBhZ2VIYW5kbGVyKCk7XHJcbiAgICB0aGlzLmdvVG9QYWdlKDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHBvcnRTaW5nbGVQYWdlKCkge1xyXG4gICAgdGhpcy5leHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKTtcclxuICAgIHRoaXMuZXh0cmFjdFRhYmxlRm9vdGVyKCk7XHJcbiAgICB0aGlzLmV4cG9ydEV4dHJhY3RlZERhdGEoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCkge1xyXG4gICAgY29uc3Qgcm93cyA9IHRoaXMuZGF0YUV4dHJhY3Rvci5leHRyYWN0Um93cyh0aGlzLl9jZGtUYWJsZSwgdGhpcy5oaWRkZW5Db2x1bW5zKTtcclxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdCh0aGlzLmdldFNlbGVjdGVkUm93cyhyb3dzKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNlbGVjdGVkUm93cyhyb3dzOiBBcnJheTxhbnk+KSB7XHJcbiAgICBpZiAodGhpcy5pc1NlbGVjdGl2ZUV4cG9ydCgpKSB7XHJcbiAgICAgIHJldHVybiByb3dzLmZpbHRlcigoXywgaSkgPT4gdGhpcy5fc2VsZWN0ZWRSb3dzLmluY2x1ZGVzKHRoaXMuZ2V0UGFnaW5hdGVkUm93SW5kZXgoaSkpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiByb3dzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1NlbGVjdGl2ZUV4cG9ydCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFJvd3MgJiYgIXRoaXMuaXNNYXN0ZXJUb2dnbGVPZmYoKSAmJiAgIXRoaXMuaXNNYXN0ZXJUb2dnbGVPbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc01hc3RlclRvZ2dsZU9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZVNlbGVjdGVkUm93Q291bnQodGhpcy5nZXRUb3RhbEl0ZW1zQ291bnQoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTWFzdGVyVG9nZ2xlT2ZmKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZVNlbGVjdGVkUm93Q291bnQoMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXBhcmVTZWxlY3RlZFJvd0NvdW50KHJvd0NvdW50OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhISh0aGlzLl9zZWxlY3RlZFJvd3M/Lmxlbmd0aCA9PT0gcm93Q291bnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0UGFnZUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX3N1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLmdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLl9pc0l0ZXJhdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3REYXRhT25DdXJyZW50UGFnZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNOZXh0UGFnZSgpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uZXh0UGFnZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuX2lzSXRlcmF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5nb1RvUGFnZSh0aGlzLl9pbml0aWFsUGFnZUluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc0V4cG9ydGluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0V4cG9ydGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3RUYWJsZUZvb3RlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmV4cG9ydEV4dHJhY3RlZERhdGEoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4cG9ydEV4dHJhY3RlZERhdGEoKSB7XHJcbiAgICB0aGlzLl9leHBvcnRlclNlcnZpY2UuZXhwb3J0KHRoaXMuX2RhdGEsIHRoaXMuX29wdGlvbnMpO1xyXG4gICAgdGhpcy5fZGF0YSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICB0aGlzLmV4cG9ydENvbXBsZXRlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RTcGVjaWFsUm93cyhvdXRsZXQ6IERhdGFSb3dPdXRsZXQpIHtcclxuICAgIHRoaXMuX2RhdGEucHVzaCguLi50aGlzLmRhdGFFeHRyYWN0b3IuZXh0cmFjdFJvd3ModGhpcy5fY2RrVGFibGUsIHRoaXMuaGlkZGVuQ29sdW1ucywgb3V0bGV0KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RUYWJsZUhlYWRlcigpIHtcclxuICAgIHRoaXMuZXh0cmFjdFNwZWNpYWxSb3dzKHRoaXMuX2Nka1RhYmxlLl9oZWFkZXJSb3dPdXRsZXQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0VGFibGVGb290ZXIoKSB7XHJcbiAgICB0aGlzLmV4dHJhY3RTcGVjaWFsUm93cyh0aGlzLl9jZGtUYWJsZS5fZm9vdGVyUm93T3V0bGV0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzTmV4dFBhZ2UoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5nZXRDdXJyZW50UGFnZUluZGV4KCkgPCB0aGlzLmdldFBhZ2VDb3VudCgpIC0gMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmV4dFBhZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvVG9QYWdlKHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpICsgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhZ2luYXRlZFJvd0luZGV4KGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGluZGV4ICsgKHRoaXMuZ2V0UGFnZVNpemUoKSAqIHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpKTtcclxuICB9XHJcbn1cclxuIl19