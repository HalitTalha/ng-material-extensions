import { __decorate, __metadata } from "tslib";
import { COMMA, MIME_CSV, BOM } from './../../constants';
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { WorksheetExporter } from './worksheet-exporter';
import * as i0 from "@angular/core";
let CsvExporterService = class CsvExporterService extends WorksheetExporter {
    constructor() {
        super();
    }
    workSheetToContent(worksheet, options) {
        var _a, _b;
        return BOM + XLSX.utils.sheet_to_csv(worksheet, { FS: (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.delimiter, (_b !== null && _b !== void 0 ? _b : COMMA)) });
    }
    getMimeType() {
        return MIME_CSV;
    }
};
CsvExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CsvExporterService_Factory() { return new CsvExporterService(); }, token: CsvExporterService, providedIn: "root" });
CsvExporterService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], CsvExporterService);
export { CsvExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL2Nzdi1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQU16RCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLGlCQUE2QjtJQUVuRTtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVNLGtCQUFrQixDQUFDLFNBQXlCLEVBQUUsT0FBb0I7O1FBQ3ZFLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsY0FBRSxPQUFPLDBDQUFFLFNBQVMsdUNBQUksS0FBSyxFQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FDRixDQUFBOztBQWJZLGtCQUFrQjtJQUg5QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDOztHQUNXLGtCQUFrQixDQWE5QjtTQWJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTU1BLCBNSU1FX0NTViwgQk9NIH0gZnJvbSAnLi8uLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBUeHRPcHRpb25zIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcclxuaW1wb3J0IHsgV29ya3NoZWV0RXhwb3J0ZXIgfSBmcm9tICcuL3dvcmtzaGVldC1leHBvcnRlcic7XHJcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENzdkV4cG9ydGVyU2VydmljZSBleHRlbmRzIFdvcmtzaGVldEV4cG9ydGVyPFR4dE9wdGlvbnM+IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHdvcmtTaGVldFRvQ29udGVudCh3b3Jrc2hlZXQ6IFhMU1guV29ya1NoZWV0LCBvcHRpb25zPzogVHh0T3B0aW9ucyk6IGFueSB7XHJcbiAgICByZXR1cm4gQk9NICsgWExTWC51dGlscy5zaGVldF90b19jc3Yod29ya3NoZWV0LCB7IEZTOiBvcHRpb25zPy5kZWxpbWl0ZXIgPz8gQ09NTUEgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TWltZVR5cGUoKTogTWltZSB7XHJcbiAgICByZXR1cm4gTUlNRV9DU1Y7XHJcbiAgfVxyXG59XHJcbiJdfQ==