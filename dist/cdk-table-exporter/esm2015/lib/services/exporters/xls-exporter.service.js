/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { MIME_EXCEL_XLS, TYPE_ARRAY, XLSX_COLS } from '../../constants';
import { WorksheetExporter } from './worksheet-exporter';
import * as i0 from "@angular/core";
export class XlsExporterService extends WorksheetExporter {
    constructor() {
        super();
    }
    /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    workSheetToContent(worksheet, options = (/** @type {?} */ ({}))) {
        /** @type {?} */
        const workBook = XLSX.utils.book_new();
        if (options.columnWidths) {
            worksheet[XLSX_COLS] = this.convertToWch(options.columnWidths);
        }
        this.correctTypes(options);
        XLSX.utils.book_append_sheet(workBook, worksheet, options.sheet);
        return XLSX.write(workBook, options);
    }
    /**
     * @return {?}
     */
    getMimeType() {
        return MIME_EXCEL_XLS;
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    correctTypes(options) {
        if (!options.type) {
            options.type = TYPE_ARRAY;
        }
        ((/** @type {?} */ (options))).bookType = this.getMimeType().extension.replace('.', ''); // sheetjs requires bookingType for excel format
    }
    /**
     * @private
     * @param {?} columnWidths
     * @return {?}
     */
    convertToWch(columnWidths) {
        return columnWidths.map((/**
         * @param {?} width
         * @return {?}
         */
        width => ({ wch: width })));
    }
}
XlsExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
XlsExporterService.ctorParameters = () => [];
/** @nocollapse */ XlsExporterService.ngInjectableDef = i0.defineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(); }, token: XlsExporterService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzLWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3hscy1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUt6RCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsaUJBQStCO0lBRXJFO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDOzs7Ozs7SUFFTSxrQkFBa0IsQ0FBQyxTQUF5QixFQUFFLFVBQXdCLG1CQUFBLEVBQUUsRUFBZ0I7O2NBQ3ZGLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUN0QyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDeEIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVNLFdBQVc7UUFDaEIsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLE9BQXFCO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1NBQzNCO1FBQ0QsQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxnREFBZ0Q7SUFDN0gsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLFlBQTJCO1FBQzlDLE9BQU8sWUFBWSxDQUFDLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQ25ELENBQUM7OztZQWhDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xuaW1wb3J0IHsgTUlNRV9FWENFTF9YTFMsIFRZUEVfQVJSQVksIFhMU1hfQ09MUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XG5pbXBvcnQgeyBFeGNlbE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcbmltcG9ydCB7IFdvcmtzaGVldEV4cG9ydGVyIH0gZnJvbSAnLi93b3Jrc2hlZXQtZXhwb3J0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBYbHNFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBXb3Jrc2hlZXRFeHBvcnRlcjxFeGNlbE9wdGlvbnM+IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIHdvcmtTaGVldFRvQ29udGVudCh3b3Jrc2hlZXQ6IFhMU1guV29ya1NoZWV0LCBvcHRpb25zOiBFeGNlbE9wdGlvbnMgPSB7fSBhcyBFeGNlbE9wdGlvbnMpOiBhbnkge1xuICAgIGNvbnN0IHdvcmtCb29rID0gWExTWC51dGlscy5ib29rX25ldygpO1xuICAgIGlmIChvcHRpb25zLmNvbHVtbldpZHRocykge1xuICAgICAgd29ya3NoZWV0W1hMU1hfQ09MU10gPSB0aGlzLmNvbnZlcnRUb1djaChvcHRpb25zLmNvbHVtbldpZHRocyk7XG4gICAgfVxuICAgIHRoaXMuY29ycmVjdFR5cGVzKG9wdGlvbnMpO1xuICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQod29ya0Jvb2ssIHdvcmtzaGVldCwgb3B0aW9ucy5zaGVldCk7XG4gICAgcmV0dXJuIFhMU1gud3JpdGUod29ya0Jvb2ssIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGdldE1pbWVUeXBlKCk6IE1pbWUge1xuICAgIHJldHVybiBNSU1FX0VYQ0VMX1hMUztcbiAgfVxuXG4gIHByaXZhdGUgY29ycmVjdFR5cGVzKG9wdGlvbnM6IEV4Y2VsT3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy50eXBlKSB7XG4gICAgICBvcHRpb25zLnR5cGUgPSBUWVBFX0FSUkFZO1xuICAgIH1cbiAgICAob3B0aW9ucyBhcyBhbnkpLmJvb2tUeXBlID0gdGhpcy5nZXRNaW1lVHlwZSgpLmV4dGVuc2lvbi5yZXBsYWNlKCcuJywgJycpOyAvLyBzaGVldGpzIHJlcXVpcmVzIGJvb2tpbmdUeXBlIGZvciBleGNlbCBmb3JtYXRcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFRvV2NoKGNvbHVtbldpZHRoczogQXJyYXk8bnVtYmVyPik6IEFycmF5PHt3Y2g6IG51bWJlcn0+IHtcbiAgICByZXR1cm4gY29sdW1uV2lkdGhzLm1hcCh3aWR0aCA9PiAoe3djaDogd2lkdGh9KSk7XG4gIH1cbn1cbiJdfQ==