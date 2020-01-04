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
    CsvExporterService.prototype.workSheetToContent = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL2Nzdi1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBR3pEO0lBR3dDLDhDQUEwQjtJQUVoRTtlQUNFLGlCQUFPO0lBQ1QsQ0FBQzs7Ozs7O0lBRU0sK0NBQWtCOzs7OztJQUF6QixVQUEwQixTQUF5QixFQUFFLE9BQWlCO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVNLHdDQUFXOzs7SUFBbEI7UUFDRSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOztnQkFmRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs2QkFURDtDQXVCQyxBQWhCRCxDQUd3QyxpQkFBaUIsR0FheEQ7U0FiWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNSU1FX0NTViB9IGZyb20gJy4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XG5pbXBvcnQgeyBXb3Jrc2hlZXRFeHBvcnRlciB9IGZyb20gJy4vd29ya3NoZWV0LWV4cG9ydGVyJztcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ3N2RXhwb3J0ZXJTZXJ2aWNlIGV4dGVuZHMgV29ya3NoZWV0RXhwb3J0ZXI8T3B0aW9ucz4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgd29ya1NoZWV0VG9Db250ZW50KHdvcmtzaGVldDogWExTWC5Xb3JrU2hlZXQsIG9wdGlvbnM/OiBPcHRpb25zKTogYW55IHtcbiAgICByZXR1cm4gWExTWC51dGlscy5zaGVldF90b19jc3Yod29ya3NoZWV0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNaW1lVHlwZSgpOiBNaW1lIHtcbiAgICByZXR1cm4gTUlNRV9DU1Y7XG4gIH1cbn1cbiJdfQ==