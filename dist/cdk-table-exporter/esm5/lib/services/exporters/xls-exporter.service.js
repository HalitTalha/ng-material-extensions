import { __decorate, __extends, __metadata } from "tslib";
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
    XlsExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(); }, token: XlsExporterService, providedIn: "root" });
    XlsExporterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], XlsExporterService);
    return XlsExporterService;
}(WorksheetExporter));
export { XlsExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzLWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3hscy1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUt6RDtJQUF3QyxzQ0FBK0I7SUFFckU7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFFTSwrQ0FBa0IsR0FBekIsVUFBMEIsU0FBeUIsRUFBRSxPQUEwQztRQUExQyx3QkFBQSxFQUFBLFVBQXdCLEVBQWtCO1FBQzdGLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkMsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSx3Q0FBVyxHQUFsQjtRQUNFLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFTyx5Q0FBWSxHQUFwQixVQUFxQixPQUFxQjtRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNqQixPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUMzQjtRQUNBLE9BQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0RBQWdEO0lBQzdILENBQUM7SUFFTyx5Q0FBWSxHQUFwQixVQUFxQixZQUEyQjtRQUM5QyxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7SUE3QlUsa0JBQWtCO1FBSDlCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BQ1csa0JBQWtCLENBOEI5Qjs2QkF4Q0Q7Q0F3Q0MsQUE5QkQsQ0FBd0MsaUJBQWlCLEdBOEJ4RDtTQTlCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XHJcbmltcG9ydCB7IE1JTUVfRVhDRUxfWExTLCBUWVBFX0FSUkFZLCBYTFNYX0NPTFMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XHJcbmltcG9ydCB7IEV4Y2VsT3B0aW9ucyB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xyXG5pbXBvcnQgeyBXb3Jrc2hlZXRFeHBvcnRlciB9IGZyb20gJy4vd29ya3NoZWV0LWV4cG9ydGVyJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFhsc0V4cG9ydGVyU2VydmljZSBleHRlbmRzIFdvcmtzaGVldEV4cG9ydGVyPEV4Y2VsT3B0aW9ucz4ge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgd29ya1NoZWV0VG9Db250ZW50KHdvcmtzaGVldDogWExTWC5Xb3JrU2hlZXQsIG9wdGlvbnM6IEV4Y2VsT3B0aW9ucyA9IHt9IGFzIEV4Y2VsT3B0aW9ucyk6IGFueSB7XHJcbiAgICBjb25zdCB3b3JrQm9vayA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcclxuICAgIGlmIChvcHRpb25zLmNvbHVtbldpZHRocykge1xyXG4gICAgICB3b3Jrc2hlZXRbWExTWF9DT0xTXSA9IHRoaXMuY29udmVydFRvV2NoKG9wdGlvbnMuY29sdW1uV2lkdGhzKTtcclxuICAgIH1cclxuICAgIHRoaXMuY29ycmVjdFR5cGVzKG9wdGlvbnMpO1xyXG4gICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldCh3b3JrQm9vaywgd29ya3NoZWV0LCBvcHRpb25zLnNoZWV0KTtcclxuICAgIHJldHVybiBYTFNYLndyaXRlKHdvcmtCb29rLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRNaW1lVHlwZSgpOiBNaW1lIHtcclxuICAgIHJldHVybiBNSU1FX0VYQ0VMX1hMUztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29ycmVjdFR5cGVzKG9wdGlvbnM6IEV4Y2VsT3B0aW9ucykge1xyXG4gICAgaWYgKCFvcHRpb25zLnR5cGUpIHtcclxuICAgICAgb3B0aW9ucy50eXBlID0gVFlQRV9BUlJBWTtcclxuICAgIH1cclxuICAgIChvcHRpb25zIGFzIGFueSkuYm9va1R5cGUgPSB0aGlzLmdldE1pbWVUeXBlKCkuZXh0ZW5zaW9uLnJlcGxhY2UoJy4nLCAnJyk7IC8vIHNoZWV0anMgcmVxdWlyZXMgYm9va2luZ1R5cGUgZm9yIGV4Y2VsIGZvcm1hdFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb252ZXJ0VG9XY2goY29sdW1uV2lkdGhzOiBBcnJheTxudW1iZXI+KTogQXJyYXk8e3djaDogbnVtYmVyfT4ge1xyXG4gICAgcmV0dXJuIGNvbHVtbldpZHRocy5tYXAod2lkdGggPT4gKHt3Y2g6IHdpZHRofSkpO1xyXG4gIH1cclxufVxyXG4iXX0=