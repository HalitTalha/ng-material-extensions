import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { MIME_EXCEL_XLS, TYPE_ARRAY, XLSX_COLS } from '../../constants';
import { WorksheetExporter } from './worksheet-exporter';
import { SheetjsHelperService } from '../sheetjs-helper.service';
import * as i0 from "@angular/core";
import * as i1 from "../sheetjs-helper.service";
export class XlsExporterService extends WorksheetExporter {
    constructor(sheetJsHelper) {
        super(sheetJsHelper);
    }
    workSheetToContent(worksheet, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { utils, write } = yield this.sheetJsHelper.getXlsx();
            const workBook = utils.book_new();
            if (options.columnWidths) {
                worksheet[XLSX_COLS] = this.convertToWch(options.columnWidths);
            }
            this.correctTypes(options);
            utils.book_append_sheet(workBook, worksheet, options.sheet);
            return write(workBook, options);
        });
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
XlsExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(i0.ɵɵinject(i1.SheetjsHelperService)); }, token: XlsExporterService, providedIn: "root" });
XlsExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
XlsExporterService.ctorParameters = () => [
    { type: SheetjsHelperService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzLWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiRDovYW5ndWxhcl93b3Jrc3BhY2UvbmctbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wcm9qZWN0cy9jZGstdGFibGUtZXhwb3J0ZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy94bHMtZXhwb3J0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBS2pFLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxpQkFBK0I7SUFFckUsWUFBWSxhQUFtQztRQUM3QyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVZLGtCQUFrQixDQUFDLFNBQW9CLEVBQUUsVUFBd0IsRUFBa0I7O1lBQzlGLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVELE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7Z0JBQ3hCLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNoRTtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0IsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVELE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsQyxDQUFDO0tBQUE7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxZQUFZLENBQUMsT0FBcUI7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDakIsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7U0FDM0I7UUFDQSxPQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdEQUFnRDtJQUM3SCxDQUFDO0lBRU8sWUFBWSxDQUFDLFlBQTJCO1FBQzlDLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7WUFqQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFKUSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdvcmtTaGVldCB9IGZyb20gJ3hsc3gnO1xyXG5pbXBvcnQgeyBNSU1FX0VYQ0VMX1hMUywgVFlQRV9BUlJBWSwgWExTWF9DT0xTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4uLy4uL21pbWUnO1xyXG5pbXBvcnQgeyBFeGNlbE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcclxuaW1wb3J0IHsgV29ya3NoZWV0RXhwb3J0ZXIgfSBmcm9tICcuL3dvcmtzaGVldC1leHBvcnRlcic7XHJcbmltcG9ydCB7IFNoZWV0anNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hlZXRqcy1oZWxwZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBYbHNFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBXb3Jrc2hlZXRFeHBvcnRlcjxFeGNlbE9wdGlvbnM+IHtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2hlZXRKc0hlbHBlcjogU2hlZXRqc0hlbHBlclNlcnZpY2UpIHtcclxuICAgIHN1cGVyKHNoZWV0SnNIZWxwZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHdvcmtTaGVldFRvQ29udGVudCh3b3Jrc2hlZXQ6IFdvcmtTaGVldCwgb3B0aW9uczogRXhjZWxPcHRpb25zID0ge30gYXMgRXhjZWxPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHsgdXRpbHMsIHdyaXRlIH0gPSBhd2FpdCB0aGlzLnNoZWV0SnNIZWxwZXIuZ2V0WGxzeCgpO1xyXG4gICAgY29uc3Qgd29ya0Jvb2sgPSB1dGlscy5ib29rX25ldygpO1xyXG4gICAgaWYgKG9wdGlvbnMuY29sdW1uV2lkdGhzKSB7XHJcbiAgICAgIHdvcmtzaGVldFtYTFNYX0NPTFNdID0gdGhpcy5jb252ZXJ0VG9XY2gob3B0aW9ucy5jb2x1bW5XaWR0aHMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb3JyZWN0VHlwZXMob3B0aW9ucyk7XHJcbiAgICB1dGlscy5ib29rX2FwcGVuZF9zaGVldCh3b3JrQm9vaywgd29ya3NoZWV0LCBvcHRpb25zLnNoZWV0KTtcclxuICAgIHJldHVybiB3cml0ZSh3b3JrQm9vaywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TWltZVR5cGUoKTogTWltZSB7XHJcbiAgICByZXR1cm4gTUlNRV9FWENFTF9YTFM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvcnJlY3RUeXBlcyhvcHRpb25zOiBFeGNlbE9wdGlvbnMpIHtcclxuICAgIGlmICghb3B0aW9ucy50eXBlKSB7XHJcbiAgICAgIG9wdGlvbnMudHlwZSA9IFRZUEVfQVJSQVk7XHJcbiAgICB9XHJcbiAgICAob3B0aW9ucyBhcyBhbnkpLmJvb2tUeXBlID0gdGhpcy5nZXRNaW1lVHlwZSgpLmV4dGVuc2lvbi5yZXBsYWNlKCcuJywgJycpOyAvLyBzaGVldGpzIHJlcXVpcmVzIGJvb2tpbmdUeXBlIGZvciBleGNlbCBmb3JtYXRcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFRvV2NoKGNvbHVtbldpZHRoczogQXJyYXk8bnVtYmVyPik6IEFycmF5PHt3Y2g6IG51bWJlcn0+IHtcclxuICAgIHJldHVybiBjb2x1bW5XaWR0aHMubWFwKHdpZHRoID0+ICh7d2NoOiB3aWR0aH0pKTtcclxuICB9XHJcbn1cclxuIl19