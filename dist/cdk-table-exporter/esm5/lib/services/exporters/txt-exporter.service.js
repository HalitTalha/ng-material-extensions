/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { WorksheetExporter } from './worksheet-exporter';
import { MIME_TXT } from './../../constants';
import * as i0 from "@angular/core";
var TxtExporterService = /** @class */ (function (_super) {
    tslib_1.__extends(TxtExporterService, _super);
    function TxtExporterService() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    TxtExporterService.prototype.createContent = /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    function (worksheet, options) {
        return XLSX.utils.sheet_to_txt(worksheet);
    };
    /**
     * @return {?}
     */
    TxtExporterService.prototype.getMimeType = /**
     * @return {?}
     */
    function () {
        return MIME_TXT;
    };
    TxtExporterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TxtExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ TxtExporterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TxtExporterService_Factory() { return new TxtExporterService(); }, token: TxtExporterService, providedIn: "root" });
    return TxtExporterService;
}(WorksheetExporter));
export { TxtExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHh0LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3R4dC1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUU3QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRTdDO0lBR3dDLDhDQUEwQjtJQUVoRTtlQUNFLGlCQUFPO0lBQ1IsQ0FBQzs7Ozs7O0lBRUssMENBQWE7Ozs7O0lBQXBCLFVBQXFCLFNBQXlCLEVBQUUsT0FBaUI7UUFDL0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ00sd0NBQVc7OztJQUFsQjtRQUNFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O2dCQWRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzZCQVJEO0NBcUJDLEFBZkQsQ0FHd0MsaUJBQWlCLEdBWXhEO1NBWlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcbmltcG9ydCB7IFdvcmtzaGVldEV4cG9ydGVyIH0gZnJvbSAnLi93b3Jrc2hlZXQtZXhwb3J0ZXInO1xuaW1wb3J0IHsgTUlNRV9UWFQgfSBmcm9tICcuLy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUeHRFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBXb3Jrc2hlZXRFeHBvcnRlcjxPcHRpb25zPiAge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICB9XG5cbiAgcHVibGljIGNyZWF0ZUNvbnRlbnQod29ya3NoZWV0OiBYTFNYLldvcmtTaGVldCwgb3B0aW9ucz86IE9wdGlvbnMpOiBhbnkge1xuICAgIHJldHVybiBYTFNYLnV0aWxzLnNoZWV0X3RvX3R4dCh3b3Jrc2hlZXQpO1xuICB9XG4gIHB1YmxpYyBnZXRNaW1lVHlwZSgpOiBNaW1lIHtcbiAgICByZXR1cm4gTUlNRV9UWFQ7XG4gIH1cbn1cbiJdfQ==