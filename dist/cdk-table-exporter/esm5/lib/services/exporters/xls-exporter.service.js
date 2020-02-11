import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { MIME_EXCEL_XLS, TYPE_ARRAY, XLSX_COLS } from '../../constants';
import { WorksheetExporter } from './worksheet-exporter';
import * as i0 from "@angular/core";
var XlsExporterService = /** @class */ (function (_super) {
    __extends(XlsExporterService, _super);
    function XlsExporterService() {
        return _super.call(this) || this;
    }
    XlsExporterService.prototype.workSheetToContent = function (worksheet, options) {
        if (options === void 0) { options = {}; }
        var workBook = XLSX.utils.book_new();
        if (options.columnWidths) {
            worksheet[XLSX_COLS] = this.convertToWch(options.columnWidths);
        }
        this.correctTypes(options);
        XLSX.utils.book_append_sheet(workBook, worksheet, options.sheet);
        return XLSX.write(workBook, options);
    };
    XlsExporterService.prototype.getMimeType = function () {
        return MIME_EXCEL_XLS;
    };
    XlsExporterService.prototype.correctTypes = function (options) {
        if (!options.type) {
            options.type = TYPE_ARRAY;
        }
        options.bookType = this.getMimeType().extension.replace('.', ''); // sheetjs requires bookingType for excel format
    };
    XlsExporterService.prototype.convertToWch = function (columnWidths) {
        return columnWidths.map(function (width) { return ({ wch: width }); });
    };
    XlsExporterService.ɵfac = function XlsExporterService_Factory(t) { return new (t || XlsExporterService)(); };
    XlsExporterService.ɵprov = i0.ɵɵdefineInjectable({ token: XlsExporterService, factory: XlsExporterService.ɵfac, providedIn: 'root' });
    return XlsExporterService;
}(WorksheetExporter));
export { XlsExporterService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(XlsExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzLWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3hscy1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUV6RDtJQUd3QyxzQ0FBK0I7SUFFckU7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFFTSwrQ0FBa0IsR0FBekIsVUFBMEIsU0FBeUIsRUFBRSxPQUEwQztRQUExQyx3QkFBQSxFQUFBLFVBQXdCLEVBQWtCO1FBQzdGLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkMsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSx3Q0FBVyxHQUFsQjtRQUNFLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFTyx5Q0FBWSxHQUFwQixVQUFxQixPQUFxQjtRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNqQixPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUMzQjtRQUNBLE9BQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0RBQWdEO0lBQzdILENBQUM7SUFFTyx5Q0FBWSxHQUFwQixVQUFxQixZQUEyQjtRQUM5QyxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7SUFDbkQsQ0FBQzt3RkE3QlUsa0JBQWtCOzhEQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZqQixNQUFNOzZCQVJwQjtDQXdDQyxBQWpDRCxDQUd3QyxpQkFBaUIsR0E4QnhEO1NBOUJZLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBSDlCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XG5pbXBvcnQgeyBNSU1FX0VYQ0VMX1hMUywgVFlQRV9BUlJBWSwgWExTWF9DT0xTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcbmltcG9ydCB7IEV4Y2VsT3B0aW9ucyB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xuaW1wb3J0IHsgV29ya3NoZWV0RXhwb3J0ZXIgfSBmcm9tICcuL3dvcmtzaGVldC1leHBvcnRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFhsc0V4cG9ydGVyU2VydmljZSBleHRlbmRzIFdvcmtzaGVldEV4cG9ydGVyPEV4Y2VsT3B0aW9ucz4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgd29ya1NoZWV0VG9Db250ZW50KHdvcmtzaGVldDogWExTWC5Xb3JrU2hlZXQsIG9wdGlvbnM6IEV4Y2VsT3B0aW9ucyA9IHt9IGFzIEV4Y2VsT3B0aW9ucyk6IGFueSB7XG4gICAgY29uc3Qgd29ya0Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgaWYgKG9wdGlvbnMuY29sdW1uV2lkdGhzKSB7XG4gICAgICB3b3Jrc2hlZXRbWExTWF9DT0xTXSA9IHRoaXMuY29udmVydFRvV2NoKG9wdGlvbnMuY29sdW1uV2lkdGhzKTtcbiAgICB9XG4gICAgdGhpcy5jb3JyZWN0VHlwZXMob3B0aW9ucyk7XG4gICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldCh3b3JrQm9vaywgd29ya3NoZWV0LCBvcHRpb25zLnNoZWV0KTtcbiAgICByZXR1cm4gWExTWC53cml0ZSh3b3JrQm9vaywgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWltZVR5cGUoKTogTWltZSB7XG4gICAgcmV0dXJuIE1JTUVfRVhDRUxfWExTO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3JyZWN0VHlwZXMob3B0aW9uczogRXhjZWxPcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLnR5cGUpIHtcbiAgICAgIG9wdGlvbnMudHlwZSA9IFRZUEVfQVJSQVk7XG4gICAgfVxuICAgIChvcHRpb25zIGFzIGFueSkuYm9va1R5cGUgPSB0aGlzLmdldE1pbWVUeXBlKCkuZXh0ZW5zaW9uLnJlcGxhY2UoJy4nLCAnJyk7IC8vIHNoZWV0anMgcmVxdWlyZXMgYm9va2luZ1R5cGUgZm9yIGV4Y2VsIGZvcm1hdFxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9XY2goY29sdW1uV2lkdGhzOiBBcnJheTxudW1iZXI+KTogQXJyYXk8e3djaDogbnVtYmVyfT4ge1xuICAgIHJldHVybiBjb2x1bW5XaWR0aHMubWFwKHdpZHRoID0+ICh7d2NoOiB3aWR0aH0pKTtcbiAgfVxufVxuIl19