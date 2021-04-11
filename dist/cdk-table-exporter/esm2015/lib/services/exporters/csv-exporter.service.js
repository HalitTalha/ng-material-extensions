import { COMMA, MIME_CSV, BOM } from './../../constants';
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx/dist/xlsx.mini.min';
import { WorksheetExporter } from './worksheet-exporter';
import * as i0 from "@angular/core";
export class CsvExporterService extends WorksheetExporter {
    constructor() {
        super();
    }
    workSheetToContent(worksheet, options) {
        var _a;
        return BOM + XLSX.utils.sheet_to_csv(worksheet, { FS: (_a = options === null || options === void 0 ? void 0 : options.delimiter) !== null && _a !== void 0 ? _a : COMMA });
    }
    getMimeType() {
        return MIME_CSV;
    }
}
CsvExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CsvExporterService_Factory() { return new CsvExporterService(); }, token: CsvExporterService, providedIn: "root" });
CsvExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CsvExporterService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiRDovYW5ndWxhcl93b3Jrc3BhY2UvbmctbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wcm9qZWN0cy9jZGstdGFibGUtZXhwb3J0ZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy9jc3YtZXhwb3J0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxJQUFJLE1BQU0seUJBQXlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBTXpELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxpQkFBNkI7SUFFbkU7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxTQUF5QixFQUFFLE9BQW9COztRQUN2RSxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLFFBQUUsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFNBQVMsbUNBQUksS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRU0sV0FBVztRQUNoQixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7O1lBZkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ09NTUEsIE1JTUVfQ1NWLCBCT00gfSBmcm9tICcuLy4uLy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFR4dE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gvZGlzdC94bHN4Lm1pbmkubWluJztcclxuaW1wb3J0IHsgV29ya3NoZWV0RXhwb3J0ZXIgfSBmcm9tICcuL3dvcmtzaGVldC1leHBvcnRlcic7XHJcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENzdkV4cG9ydGVyU2VydmljZSBleHRlbmRzIFdvcmtzaGVldEV4cG9ydGVyPFR4dE9wdGlvbnM+IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHdvcmtTaGVldFRvQ29udGVudCh3b3Jrc2hlZXQ6IFhMU1guV29ya1NoZWV0LCBvcHRpb25zPzogVHh0T3B0aW9ucyk6IGFueSB7XHJcbiAgICByZXR1cm4gQk9NICsgWExTWC51dGlscy5zaGVldF90b19jc3Yod29ya3NoZWV0LCB7IEZTOiBvcHRpb25zPy5kZWxpbWl0ZXIgPz8gQ09NTUEgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TWltZVR5cGUoKTogTWltZSB7XHJcbiAgICByZXR1cm4gTUlNRV9DU1Y7XHJcbiAgfVxyXG59XHJcbiJdfQ==