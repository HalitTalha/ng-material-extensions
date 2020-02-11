import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { MIME_EXCEL_XLS, TYPE_ARRAY, XLSX_COLS } from '../../constants';
import { WorksheetExporter } from './worksheet-exporter';
import * as i0 from "@angular/core";
export class XlsExporterService extends WorksheetExporter {
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
}
XlsExporterService.ɵfac = function XlsExporterService_Factory(t) { return new (t || XlsExporterService)(); };
XlsExporterService.ɵprov = i0.ɵɵdefineInjectable({ token: XlsExporterService, factory: XlsExporterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(XlsExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzLWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3hscy1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBS3pELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxpQkFBK0I7SUFFckU7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxTQUF5QixFQUFFLFVBQXdCLEVBQWtCO1FBQzdGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkMsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxZQUFZLENBQUMsT0FBcUI7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDakIsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7U0FDM0I7UUFDQSxPQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdEQUFnRDtJQUM3SCxDQUFDO0lBRU8sWUFBWSxDQUFDLFlBQTJCO1FBQzlDLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O29GQTdCVSxrQkFBa0I7MERBQWxCLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRmpCLE1BQU07a0RBRVAsa0JBQWtCO2NBSDlCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XG5pbXBvcnQgeyBNSU1FX0VYQ0VMX1hMUywgVFlQRV9BUlJBWSwgWExTWF9DT0xTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcbmltcG9ydCB7IEV4Y2VsT3B0aW9ucyB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xuaW1wb3J0IHsgV29ya3NoZWV0RXhwb3J0ZXIgfSBmcm9tICcuL3dvcmtzaGVldC1leHBvcnRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFhsc0V4cG9ydGVyU2VydmljZSBleHRlbmRzIFdvcmtzaGVldEV4cG9ydGVyPEV4Y2VsT3B0aW9ucz4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgd29ya1NoZWV0VG9Db250ZW50KHdvcmtzaGVldDogWExTWC5Xb3JrU2hlZXQsIG9wdGlvbnM6IEV4Y2VsT3B0aW9ucyA9IHt9IGFzIEV4Y2VsT3B0aW9ucyk6IGFueSB7XG4gICAgY29uc3Qgd29ya0Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgaWYgKG9wdGlvbnMuY29sdW1uV2lkdGhzKSB7XG4gICAgICB3b3Jrc2hlZXRbWExTWF9DT0xTXSA9IHRoaXMuY29udmVydFRvV2NoKG9wdGlvbnMuY29sdW1uV2lkdGhzKTtcbiAgICB9XG4gICAgdGhpcy5jb3JyZWN0VHlwZXMob3B0aW9ucyk7XG4gICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldCh3b3JrQm9vaywgd29ya3NoZWV0LCBvcHRpb25zLnNoZWV0KTtcbiAgICByZXR1cm4gWExTWC53cml0ZSh3b3JrQm9vaywgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWltZVR5cGUoKTogTWltZSB7XG4gICAgcmV0dXJuIE1JTUVfRVhDRUxfWExTO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3JyZWN0VHlwZXMob3B0aW9uczogRXhjZWxPcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLnR5cGUpIHtcbiAgICAgIG9wdGlvbnMudHlwZSA9IFRZUEVfQVJSQVk7XG4gICAgfVxuICAgIChvcHRpb25zIGFzIGFueSkuYm9va1R5cGUgPSB0aGlzLmdldE1pbWVUeXBlKCkuZXh0ZW5zaW9uLnJlcGxhY2UoJy4nLCAnJyk7IC8vIHNoZWV0anMgcmVxdWlyZXMgYm9va2luZ1R5cGUgZm9yIGV4Y2VsIGZvcm1hdFxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9XY2goY29sdW1uV2lkdGhzOiBBcnJheTxudW1iZXI+KTogQXJyYXk8e3djaDogbnVtYmVyfT4ge1xuICAgIHJldHVybiBjb2x1bW5XaWR0aHMubWFwKHdpZHRoID0+ICh7d2NoOiB3aWR0aH0pKTtcbiAgfVxufVxuIl19