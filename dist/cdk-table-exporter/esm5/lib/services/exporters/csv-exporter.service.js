import { __decorate, __extends, __metadata } from "tslib";
import { COMMA, MIME_CSV, BOM } from './../../constants';
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { WorksheetExporter } from './worksheet-exporter';
import * as i0 from "@angular/core";
var CsvExporterService = /** @class */ (function (_super) {
    __extends(CsvExporterService, _super);
    function CsvExporterService() {
        return _super.call(this) || this;
    }
    CsvExporterService.prototype.workSheetToContent = function (worksheet, options) {
        var _a, _b;
        return BOM + XLSX.utils.sheet_to_csv(worksheet, { FS: (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.delimiter, (_b !== null && _b !== void 0 ? _b : COMMA)) });
    };
    CsvExporterService.prototype.getMimeType = function () {
        return MIME_CSV;
    };
    CsvExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CsvExporterService_Factory() { return new CsvExporterService(); }, token: CsvExporterService, providedIn: "root" });
    CsvExporterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CsvExporterService);
    return CsvExporterService;
}(WorksheetExporter));
export { CsvExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL2Nzdi1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQU16RDtJQUF3QyxzQ0FBNkI7SUFFbkU7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFFTSwrQ0FBa0IsR0FBekIsVUFBMEIsU0FBeUIsRUFBRSxPQUFvQjs7UUFDdkUsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxjQUFFLE9BQU8sMENBQUUsU0FBUyx1Q0FBSSxLQUFLLEVBQUEsRUFBRSxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVNLHdDQUFXLEdBQWxCO1FBQ0UsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7SUFaVSxrQkFBa0I7UUFIOUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzs7T0FDVyxrQkFBa0IsQ0FhOUI7NkJBdkJEO0NBdUJDLEFBYkQsQ0FBd0MsaUJBQWlCLEdBYXhEO1NBYlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ09NTUEsIE1JTUVfQ1NWLCBCT00gfSBmcm9tICcuLy4uLy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFR4dE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xyXG5pbXBvcnQgeyBXb3Jrc2hlZXRFeHBvcnRlciB9IGZyb20gJy4vd29ya3NoZWV0LWV4cG9ydGVyJztcclxuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4uLy4uL21pbWUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3N2RXhwb3J0ZXJTZXJ2aWNlIGV4dGVuZHMgV29ya3NoZWV0RXhwb3J0ZXI8VHh0T3B0aW9ucz4ge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgd29ya1NoZWV0VG9Db250ZW50KHdvcmtzaGVldDogWExTWC5Xb3JrU2hlZXQsIG9wdGlvbnM/OiBUeHRPcHRpb25zKTogYW55IHtcclxuICAgIHJldHVybiBCT00gKyBYTFNYLnV0aWxzLnNoZWV0X3RvX2Nzdih3b3Jrc2hlZXQsIHsgRlM6IG9wdGlvbnM/LmRlbGltaXRlciA/PyBDT01NQSB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRNaW1lVHlwZSgpOiBNaW1lIHtcclxuICAgIHJldHVybiBNSU1FX0NTVjtcclxuICB9XHJcbn1cclxuIl19