import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx/dist/xlsx.mini.min';
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
XlsExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(); }, token: XlsExporterService, providedIn: "root" });
XlsExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
XlsExporterService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzLWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiRDovYW5ndWxhcl93b3Jrc3BhY2UvbmctbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wcm9qZWN0cy9jZGstdGFibGUtZXhwb3J0ZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy94bHMtZXhwb3J0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxJQUFJLE1BQU0seUJBQXlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBS3pELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxpQkFBK0I7SUFFckU7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxTQUF5QixFQUFFLFVBQXdCLEVBQWtCO1FBQzdGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkMsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxZQUFZLENBQUMsT0FBcUI7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDakIsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7U0FDM0I7UUFDQSxPQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdEQUFnRDtJQUM3SCxDQUFDO0lBRU8sWUFBWSxDQUFDLFlBQTJCO1FBQzlDLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7WUFoQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gvZGlzdC94bHN4Lm1pbmkubWluJztcclxuaW1wb3J0IHsgTUlNRV9FWENFTF9YTFMsIFRZUEVfQVJSQVksIFhMU1hfQ09MUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcclxuaW1wb3J0IHsgRXhjZWxPcHRpb25zIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IFdvcmtzaGVldEV4cG9ydGVyIH0gZnJvbSAnLi93b3Jrc2hlZXQtZXhwb3J0ZXInO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgWGxzRXhwb3J0ZXJTZXJ2aWNlIGV4dGVuZHMgV29ya3NoZWV0RXhwb3J0ZXI8RXhjZWxPcHRpb25zPiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB3b3JrU2hlZXRUb0NvbnRlbnQod29ya3NoZWV0OiBYTFNYLldvcmtTaGVldCwgb3B0aW9uczogRXhjZWxPcHRpb25zID0ge30gYXMgRXhjZWxPcHRpb25zKTogYW55IHtcclxuICAgIGNvbnN0IHdvcmtCb29rID0gWExTWC51dGlscy5ib29rX25ldygpO1xyXG4gICAgaWYgKG9wdGlvbnMuY29sdW1uV2lkdGhzKSB7XHJcbiAgICAgIHdvcmtzaGVldFtYTFNYX0NPTFNdID0gdGhpcy5jb252ZXJ0VG9XY2gob3B0aW9ucy5jb2x1bW5XaWR0aHMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb3JyZWN0VHlwZXMob3B0aW9ucyk7XHJcbiAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KHdvcmtCb29rLCB3b3Jrc2hlZXQsIG9wdGlvbnMuc2hlZXQpO1xyXG4gICAgcmV0dXJuIFhMU1gud3JpdGUod29ya0Jvb2ssIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE1pbWVUeXBlKCk6IE1pbWUge1xyXG4gICAgcmV0dXJuIE1JTUVfRVhDRUxfWExTO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb3JyZWN0VHlwZXMob3B0aW9uczogRXhjZWxPcHRpb25zKSB7XHJcbiAgICBpZiAoIW9wdGlvbnMudHlwZSkge1xyXG4gICAgICBvcHRpb25zLnR5cGUgPSBUWVBFX0FSUkFZO1xyXG4gICAgfVxyXG4gICAgKG9wdGlvbnMgYXMgYW55KS5ib29rVHlwZSA9IHRoaXMuZ2V0TWltZVR5cGUoKS5leHRlbnNpb24ucmVwbGFjZSgnLicsICcnKTsgLy8gc2hlZXRqcyByZXF1aXJlcyBib29raW5nVHlwZSBmb3IgZXhjZWwgZm9ybWF0XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnRUb1djaChjb2x1bW5XaWR0aHM6IEFycmF5PG51bWJlcj4pOiBBcnJheTx7d2NoOiBudW1iZXJ9PiB7XHJcbiAgICByZXR1cm4gY29sdW1uV2lkdGhzLm1hcCh3aWR0aCA9PiAoe3djaDogd2lkdGh9KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==