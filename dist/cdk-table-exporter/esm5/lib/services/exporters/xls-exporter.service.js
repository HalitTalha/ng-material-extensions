/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { MIME_EXCEL_XLS, TYPE_ARRAY } from '../../constants';
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
    XlsExporterService.prototype.createContent = /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    function (worksheet, options) {
        /** @type {?} */
        var workBook = XLSX.utils.book_new();
        if (!options) {
            options = (/** @type {?} */ ({}));
        }
        this.correctType(options);
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
    XlsExporterService.prototype.correctType = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (!options.type) {
            options.type = TYPE_ARRAY;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzLWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3hscy1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUV6RDtJQUd3Qyw4Q0FBK0I7SUFFckU7ZUFDRSxpQkFBTztJQUNULENBQUM7Ozs7OztJQUVNLDBDQUFhOzs7OztJQUFwQixVQUFxQixTQUF5QixFQUFFLE9BQXNCOztZQUM5RCxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7UUFDdEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sR0FBRyxtQkFBQSxFQUFFLEVBQWdCLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRU0sd0NBQVc7OztJQUFsQjtRQUNFLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUVPLHdDQUFXOzs7OztJQUFuQixVQUFvQixPQUFxQjtRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNqQixPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUMzQjtJQUNILENBQUM7O2dCQTNCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs2QkFURDtDQW1DQyxBQTVCRCxDQUd3QyxpQkFBaUIsR0F5QnhEO1NBekJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XG5pbXBvcnQgeyBNSU1FX0VYQ0VMX1hMUywgVFlQRV9BUlJBWSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XG5pbXBvcnQgeyBFeGNlbE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcbmltcG9ydCB7IFdvcmtzaGVldEV4cG9ydGVyIH0gZnJvbSAnLi93b3Jrc2hlZXQtZXhwb3J0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBYbHNFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBXb3Jrc2hlZXRFeHBvcnRlcjxFeGNlbE9wdGlvbnM+IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZUNvbnRlbnQod29ya3NoZWV0OiBYTFNYLldvcmtTaGVldCwgb3B0aW9ucz86IEV4Y2VsT3B0aW9ucyk6IGFueSB7XG4gICAgY29uc3Qgd29ya0Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge30gYXMgRXhjZWxPcHRpb25zO1xuICAgIH1cbiAgICB0aGlzLmNvcnJlY3RUeXBlKG9wdGlvbnMpO1xuICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQod29ya0Jvb2ssIHdvcmtzaGVldCwgb3B0aW9ucy5zaGVldCk7XG4gICAgcmV0dXJuIFhMU1gud3JpdGUod29ya0Jvb2ssIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGdldE1pbWVUeXBlKCk6IE1pbWUge1xuICAgIHJldHVybiBNSU1FX0VYQ0VMX1hMUztcbiAgfVxuXG4gIHByaXZhdGUgY29ycmVjdFR5cGUob3B0aW9uczogRXhjZWxPcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLnR5cGUpIHtcbiAgICAgIG9wdGlvbnMudHlwZSA9IFRZUEVfQVJSQVk7XG4gICAgfVxuICB9XG59XG4iXX0=