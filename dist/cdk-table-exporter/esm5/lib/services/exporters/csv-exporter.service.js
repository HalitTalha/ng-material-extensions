import { __decorate, __extends, __metadata } from "tslib";
import { COMMA, MIME_CSV } from './../../constants';
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
        return XLSX.utils.sheet_to_csv(worksheet, { FS: (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.delimiter, (_b !== null && _b !== void 0 ? _b : COMMA)) });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL2Nzdi1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBTXpEO0lBQXdDLHNDQUE2QjtJQUNuRTtlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUVNLCtDQUFrQixHQUF6QixVQUEwQixTQUF5QixFQUFFLE9BQW9COztRQUN2RSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUFDLEVBQUUsY0FBRSxPQUFPLDBDQUFFLFNBQVMsdUNBQUksS0FBSyxFQUFBLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFTSx3Q0FBVyxHQUFsQjtRQUNFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O0lBWFUsa0JBQWtCO1FBSDlCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BQ1csa0JBQWtCLENBWTlCOzZCQXRCRDtDQXNCQyxBQVpELENBQXdDLGlCQUFpQixHQVl4RDtTQVpZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTU1BLCBNSU1FX0NTViB9IGZyb20gJy4vLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVHh0T3B0aW9ucyB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XHJcbmltcG9ydCB7IFdvcmtzaGVldEV4cG9ydGVyIH0gZnJvbSAnLi93b3Jrc2hlZXQtZXhwb3J0ZXInO1xyXG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDc3ZFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBXb3Jrc2hlZXRFeHBvcnRlcjxUeHRPcHRpb25zPiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHdvcmtTaGVldFRvQ29udGVudCh3b3Jrc2hlZXQ6IFhMU1guV29ya1NoZWV0LCBvcHRpb25zPzogVHh0T3B0aW9ucyk6IGFueSB7XHJcbiAgICByZXR1cm4gWExTWC51dGlscy5zaGVldF90b19jc3Yod29ya3NoZWV0LCB7RlM6IG9wdGlvbnM/LmRlbGltaXRlciA/PyBDT01NQX0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE1pbWVUeXBlKCk6IE1pbWUge1xyXG4gICAgcmV0dXJuIE1JTUVfQ1NWO1xyXG4gIH1cclxufVxyXG4iXX0=