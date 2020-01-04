/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { MIME_EXCEL_XLS, TYPE_ARRAY, XLSX_COLS } from '../../constants';
import { WorksheetExporter } from './worksheet-exporter';
import * as i0 from "@angular/core";
var XlsExporterService = /** @class */ (function (_super) {
    tslib_1.__extends(XlsExporterService, _super);
    function XlsExporterService() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    XlsExporterService.prototype.workSheetToContent = /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    function (worksheet, options) {
        if (options === void 0) { options = (/** @type {?} */ ({})); }
        /** @type {?} */
        var workBook = XLSX.utils.book_new();
        if (options.columnWidths) {
            worksheet[XLSX_COLS] = this.convertToWch(options.columnWidths);
        }
        this.correctTypes(options);
        XLSX.utils.book_append_sheet(workBook, worksheet, options.sheet);
        return XLSX.write(workBook, options);
    };
    /**
     * @return {?}
     */
    XlsExporterService.prototype.getMimeType = /**
     * @return {?}
     */
    function () {
        return MIME_EXCEL_XLS;
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    XlsExporterService.prototype.correctTypes = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (!options.type) {
            options.type = TYPE_ARRAY;
        }
        ((/** @type {?} */ (options))).bookType = this.getMimeType().extension.replace('.', ''); // sheetjs requires bookingType for excel format
    };
    /**
     * @private
     * @param {?} columnWidths
     * @return {?}
     */
    XlsExporterService.prototype.convertToWch = /**
     * @private
     * @param {?} columnWidths
     * @return {?}
     */
    function (columnWidths) {
        return columnWidths.map((/**
         * @param {?} width
         * @return {?}
         */
        function (width) { return ({ wch: width }); }));
    };
    XlsExporterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    XlsExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ XlsExporterService.ngInjectableDef = i0.defineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(); }, token: XlsExporterService, providedIn: "root" });
    return XlsExporterService;
}(WorksheetExporter));
export { XlsExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzLWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3hscy1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFekQ7SUFHd0MsOENBQStCO0lBRXJFO2VBQ0UsaUJBQU87SUFDVCxDQUFDOzs7Ozs7SUFFTSwrQ0FBa0I7Ozs7O0lBQXpCLFVBQTBCLFNBQXlCLEVBQUUsT0FBMEM7UUFBMUMsd0JBQUEsRUFBQSw2QkFBd0IsRUFBRSxFQUFnQjs7WUFDdkYsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1FBQ3RDLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRU0sd0NBQVc7OztJQUFsQjtRQUNFLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUVPLHlDQUFZOzs7OztJQUFwQixVQUFxQixPQUFxQjtRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNqQixPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUMzQjtRQUNELENBQUMsbUJBQUEsT0FBTyxFQUFPLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0RBQWdEO0lBQzdILENBQUM7Ozs7OztJQUVPLHlDQUFZOzs7OztJQUFwQixVQUFxQixZQUEyQjtRQUM5QyxPQUFPLFlBQVksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQWQsQ0FBYyxFQUFDLENBQUM7SUFDbkQsQ0FBQzs7Z0JBaENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzZCQVREO0NBd0NDLEFBakNELENBR3dDLGlCQUFpQixHQThCeEQ7U0E5Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcbmltcG9ydCB7IE1JTUVfRVhDRUxfWExTLCBUWVBFX0FSUkFZLCBYTFNYX0NPTFMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4uLy4uL21pbWUnO1xuaW1wb3J0IHsgRXhjZWxPcHRpb25zIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XG5pbXBvcnQgeyBXb3Jrc2hlZXRFeHBvcnRlciB9IGZyb20gJy4vd29ya3NoZWV0LWV4cG9ydGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgWGxzRXhwb3J0ZXJTZXJ2aWNlIGV4dGVuZHMgV29ya3NoZWV0RXhwb3J0ZXI8RXhjZWxPcHRpb25zPiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyB3b3JrU2hlZXRUb0NvbnRlbnQod29ya3NoZWV0OiBYTFNYLldvcmtTaGVldCwgb3B0aW9uczogRXhjZWxPcHRpb25zID0ge30gYXMgRXhjZWxPcHRpb25zKTogYW55IHtcbiAgICBjb25zdCB3b3JrQm9vayA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcbiAgICBpZiAob3B0aW9ucy5jb2x1bW5XaWR0aHMpIHtcbiAgICAgIHdvcmtzaGVldFtYTFNYX0NPTFNdID0gdGhpcy5jb252ZXJ0VG9XY2gob3B0aW9ucy5jb2x1bW5XaWR0aHMpO1xuICAgIH1cbiAgICB0aGlzLmNvcnJlY3RUeXBlcyhvcHRpb25zKTtcbiAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KHdvcmtCb29rLCB3b3Jrc2hlZXQsIG9wdGlvbnMuc2hlZXQpO1xuICAgIHJldHVybiBYTFNYLndyaXRlKHdvcmtCb29rLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNaW1lVHlwZSgpOiBNaW1lIHtcbiAgICByZXR1cm4gTUlNRV9FWENFTF9YTFM7XG4gIH1cblxuICBwcml2YXRlIGNvcnJlY3RUeXBlcyhvcHRpb25zOiBFeGNlbE9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMudHlwZSkge1xuICAgICAgb3B0aW9ucy50eXBlID0gVFlQRV9BUlJBWTtcbiAgICB9XG4gICAgKG9wdGlvbnMgYXMgYW55KS5ib29rVHlwZSA9IHRoaXMuZ2V0TWltZVR5cGUoKS5leHRlbnNpb24ucmVwbGFjZSgnLicsICcnKTsgLy8gc2hlZXRqcyByZXF1aXJlcyBib29raW5nVHlwZSBmb3IgZXhjZWwgZm9ybWF0XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRUb1djaChjb2x1bW5XaWR0aHM6IEFycmF5PG51bWJlcj4pOiBBcnJheTx7d2NoOiBudW1iZXJ9PiB7XG4gICAgcmV0dXJuIGNvbHVtbldpZHRocy5tYXAod2lkdGggPT4gKHt3Y2g6IHdpZHRofSkpO1xuICB9XG59XG4iXX0=