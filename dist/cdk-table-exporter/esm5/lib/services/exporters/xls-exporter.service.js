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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzLWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3hscy1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUt6RDtJQUF3QyxzQ0FBK0I7SUFFckU7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFFTSwrQ0FBa0IsR0FBekIsVUFBMEIsU0FBeUIsRUFBRSxPQUEwQztRQUExQyx3QkFBQSxFQUFBLFVBQXdCLEVBQWtCO1FBQzdGLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkMsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSx3Q0FBVyxHQUFsQjtRQUNFLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFTyx5Q0FBWSxHQUFwQixVQUFxQixPQUFxQjtRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNqQixPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUMzQjtRQUNBLE9BQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0RBQWdEO0lBQzdILENBQUM7SUFFTyx5Q0FBWSxHQUFwQixVQUFxQixZQUEyQjtRQUM5QyxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7SUE3QlUsa0JBQWtCO1FBSDlCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BQ1csa0JBQWtCLENBOEI5Qjs2QkF4Q0Q7Q0F3Q0MsQUE5QkQsQ0FBd0MsaUJBQWlCLEdBOEJ4RDtTQTlCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xuaW1wb3J0IHsgTUlNRV9FWENFTF9YTFMsIFRZUEVfQVJSQVksIFhMU1hfQ09MUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XG5pbXBvcnQgeyBFeGNlbE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcbmltcG9ydCB7IFdvcmtzaGVldEV4cG9ydGVyIH0gZnJvbSAnLi93b3Jrc2hlZXQtZXhwb3J0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBYbHNFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBXb3Jrc2hlZXRFeHBvcnRlcjxFeGNlbE9wdGlvbnM+IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIHdvcmtTaGVldFRvQ29udGVudCh3b3Jrc2hlZXQ6IFhMU1guV29ya1NoZWV0LCBvcHRpb25zOiBFeGNlbE9wdGlvbnMgPSB7fSBhcyBFeGNlbE9wdGlvbnMpOiBhbnkge1xuICAgIGNvbnN0IHdvcmtCb29rID0gWExTWC51dGlscy5ib29rX25ldygpO1xuICAgIGlmIChvcHRpb25zLmNvbHVtbldpZHRocykge1xuICAgICAgd29ya3NoZWV0W1hMU1hfQ09MU10gPSB0aGlzLmNvbnZlcnRUb1djaChvcHRpb25zLmNvbHVtbldpZHRocyk7XG4gICAgfVxuICAgIHRoaXMuY29ycmVjdFR5cGVzKG9wdGlvbnMpO1xuICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQod29ya0Jvb2ssIHdvcmtzaGVldCwgb3B0aW9ucy5zaGVldCk7XG4gICAgcmV0dXJuIFhMU1gud3JpdGUod29ya0Jvb2ssIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGdldE1pbWVUeXBlKCk6IE1pbWUge1xuICAgIHJldHVybiBNSU1FX0VYQ0VMX1hMUztcbiAgfVxuXG4gIHByaXZhdGUgY29ycmVjdFR5cGVzKG9wdGlvbnM6IEV4Y2VsT3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy50eXBlKSB7XG4gICAgICBvcHRpb25zLnR5cGUgPSBUWVBFX0FSUkFZO1xuICAgIH1cbiAgICAob3B0aW9ucyBhcyBhbnkpLmJvb2tUeXBlID0gdGhpcy5nZXRNaW1lVHlwZSgpLmV4dGVuc2lvbi5yZXBsYWNlKCcuJywgJycpOyAvLyBzaGVldGpzIHJlcXVpcmVzIGJvb2tpbmdUeXBlIGZvciBleGNlbCBmb3JtYXRcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFRvV2NoKGNvbHVtbldpZHRoczogQXJyYXk8bnVtYmVyPik6IEFycmF5PHt3Y2g6IG51bWJlcn0+IHtcbiAgICByZXR1cm4gY29sdW1uV2lkdGhzLm1hcCh3aWR0aCA9PiAoe3djaDogd2lkdGh9KSk7XG4gIH1cbn1cbiJdfQ==