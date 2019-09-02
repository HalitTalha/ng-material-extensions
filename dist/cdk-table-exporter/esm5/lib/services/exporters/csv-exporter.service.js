/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { MIME_CSV } from './../../constants';
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { WorksheetExporter } from './worksheet-exporter';
import * as i0 from "@angular/core";
var CsvExporterService = /** @class */ (function (_super) {
    tslib_1.__extends(CsvExporterService, _super);
    function CsvExporterService() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    CsvExporterService.prototype.createContent = /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    function (worksheet, options) {
        return XLSX.utils.sheet_to_csv(worksheet);
    };
    /**
     * @return {?}
     */
    CsvExporterService.prototype.getMimeType = /**
     * @return {?}
     */
    function () {
        return MIME_CSV;
    };
    CsvExporterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CsvExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ CsvExporterService.ngInjectableDef = i0.defineInjectable({ factory: function CsvExporterService_Factory() { return new CsvExporterService(); }, token: CsvExporterService, providedIn: "root" });
    return CsvExporterService;
}(WorksheetExporter));
export { CsvExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL2Nzdi1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBR3pEO0lBR3dDLDhDQUEwQjtJQUVoRTtlQUNFLGlCQUFPO0lBQ1QsQ0FBQzs7Ozs7O0lBRU0sMENBQWE7Ozs7O0lBQXBCLFVBQXFCLFNBQXlCLEVBQUUsT0FBaUI7UUFDL0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRU0sd0NBQVc7OztJQUFsQjtRQUNFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O2dCQWZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzZCQVREO0NBdUJDLEFBaEJELENBR3dDLGlCQUFpQixHQWF4RDtTQWJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1JTUVfQ1NWIH0gZnJvbSAnLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcbmltcG9ydCB7IFdvcmtzaGVldEV4cG9ydGVyIH0gZnJvbSAnLi93b3Jrc2hlZXQtZXhwb3J0ZXInO1xuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4uLy4uL21pbWUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDc3ZFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBXb3Jrc2hlZXRFeHBvcnRlcjxPcHRpb25zPiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVDb250ZW50KHdvcmtzaGVldDogWExTWC5Xb3JrU2hlZXQsIG9wdGlvbnM/OiBPcHRpb25zKTogYW55IHtcbiAgICByZXR1cm4gWExTWC51dGlscy5zaGVldF90b19jc3Yod29ya3NoZWV0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNaW1lVHlwZSgpOiBNaW1lIHtcbiAgICByZXR1cm4gTUlNRV9DU1Y7XG4gIH1cbn1cbiJdfQ==