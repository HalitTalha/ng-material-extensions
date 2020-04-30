import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { MIME_EXCEL_XLS, TYPE_ARRAY, XLSX_COLS } from '../../constants';
import { WorksheetExporter } from './worksheet-exporter';
import * as i0 from "@angular/core";
let XlsExporterService = class XlsExporterService extends WorksheetExporter {
    constructor() {
        super();
    }
    workSheetToContent(worksheet, options = {}) {
        const workBook = XLSX.utils.book_new();
        if (options.columnWidths) {
            worksheet[XLSX_COLS] = this.convertToWch(options.columnWidths);
        }
        this.correctTypes(options);
        XLSX.utils.book_append_sheet(workBook, worksheet, options.sheet);
        return XLSX.write(workBook, options);
    }
    getMimeType() {
        return MIME_EXCEL_XLS;
    }
    correctTypes(options) {
        if (!options.type) {
            options.type = TYPE_ARRAY;
        }
        options.bookType = this.getMimeType().extension.replace('.', ''); // sheetjs requires bookingType for excel format
    }
    convertToWch(columnWidths) {
        return columnWidths.map(width => ({ wch: width }));
    }
};
XlsExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(); }, token: XlsExporterService, providedIn: "root" });
XlsExporterService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], XlsExporterService);
export { XlsExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzLWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3hscy1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUt6RCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLGlCQUErQjtJQUVyRTtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVNLGtCQUFrQixDQUFDLFNBQXlCLEVBQUUsVUFBd0IsRUFBa0I7UUFDN0YsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDeEIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLFdBQVc7UUFDaEIsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQUVPLFlBQVksQ0FBQyxPQUFxQjtRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNqQixPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUMzQjtRQUNBLE9BQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0RBQWdEO0lBQzdILENBQUM7SUFFTyxZQUFZLENBQUMsWUFBMkI7UUFDOUMsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNGLENBQUE7O0FBOUJZLGtCQUFrQjtJQUg5QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDOztHQUNXLGtCQUFrQixDQThCOUI7U0E5Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xyXG5pbXBvcnQgeyBNSU1FX0VYQ0VMX1hMUywgVFlQRV9BUlJBWSwgWExTWF9DT0xTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4uLy4uL21pbWUnO1xyXG5pbXBvcnQgeyBFeGNlbE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcclxuaW1wb3J0IHsgV29ya3NoZWV0RXhwb3J0ZXIgfSBmcm9tICcuL3dvcmtzaGVldC1leHBvcnRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBYbHNFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBXb3Jrc2hlZXRFeHBvcnRlcjxFeGNlbE9wdGlvbnM+IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHdvcmtTaGVldFRvQ29udGVudCh3b3Jrc2hlZXQ6IFhMU1guV29ya1NoZWV0LCBvcHRpb25zOiBFeGNlbE9wdGlvbnMgPSB7fSBhcyBFeGNlbE9wdGlvbnMpOiBhbnkge1xyXG4gICAgY29uc3Qgd29ya0Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XHJcbiAgICBpZiAob3B0aW9ucy5jb2x1bW5XaWR0aHMpIHtcclxuICAgICAgd29ya3NoZWV0W1hMU1hfQ09MU10gPSB0aGlzLmNvbnZlcnRUb1djaChvcHRpb25zLmNvbHVtbldpZHRocyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvcnJlY3RUeXBlcyhvcHRpb25zKTtcclxuICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQod29ya0Jvb2ssIHdvcmtzaGVldCwgb3B0aW9ucy5zaGVldCk7XHJcbiAgICByZXR1cm4gWExTWC53cml0ZSh3b3JrQm9vaywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TWltZVR5cGUoKTogTWltZSB7XHJcbiAgICByZXR1cm4gTUlNRV9FWENFTF9YTFM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvcnJlY3RUeXBlcyhvcHRpb25zOiBFeGNlbE9wdGlvbnMpIHtcclxuICAgIGlmICghb3B0aW9ucy50eXBlKSB7XHJcbiAgICAgIG9wdGlvbnMudHlwZSA9IFRZUEVfQVJSQVk7XHJcbiAgICB9XHJcbiAgICAob3B0aW9ucyBhcyBhbnkpLmJvb2tUeXBlID0gdGhpcy5nZXRNaW1lVHlwZSgpLmV4dGVuc2lvbi5yZXBsYWNlKCcuJywgJycpOyAvLyBzaGVldGpzIHJlcXVpcmVzIGJvb2tpbmdUeXBlIGZvciBleGNlbCBmb3JtYXRcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFRvV2NoKGNvbHVtbldpZHRoczogQXJyYXk8bnVtYmVyPik6IEFycmF5PHt3Y2g6IG51bWJlcn0+IHtcclxuICAgIHJldHVybiBjb2x1bW5XaWR0aHMubWFwKHdpZHRoID0+ICh7d2NoOiB3aWR0aH0pKTtcclxuICB9XHJcbn1cclxuIl19