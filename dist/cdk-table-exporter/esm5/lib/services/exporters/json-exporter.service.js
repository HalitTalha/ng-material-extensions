import { __decorate, __extends, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { FileExporter } from './file-exporter';
import { MIME_JSON } from '../../constants';
import * as i0 from "@angular/core";
var JsonExporterService = /** @class */ (function (_super) {
    __extends(JsonExporterService, _super);
    function JsonExporterService() {
        return _super.call(this) || this;
    }
    JsonExporterService.prototype.createContent = function (rows, options) {
        return JSON.stringify(rows);
    };
    JsonExporterService.prototype.getMimeType = function () {
        return MIME_JSON;
    };
    JsonExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
    JsonExporterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JsonExporterService);
    return JsonExporterService;
}(FileExporter));
export { JsonExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy9qc29uLWV4cG9ydGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFLNUM7SUFBeUMsdUNBQXFCO0lBRTVEO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBRU0sMkNBQWEsR0FBcEIsVUFBcUIsSUFBVyxFQUFFLE9BQWlCO1FBQ2pELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ08seUNBQVcsR0FBbEI7UUFDQyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOztJQVhVLG1CQUFtQjtRQUgvQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDOztPQUNXLG1CQUFtQixDQWEvQjs4QkF0QkQ7Q0FzQkMsQUFiRCxDQUF5QyxZQUFZLEdBYXBEO1NBYlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IEZpbGVFeHBvcnRlciB9IGZyb20gJy4vZmlsZS1leHBvcnRlcic7XHJcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcclxuaW1wb3J0IHsgTUlNRV9KU09OIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEpzb25FeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBGaWxlRXhwb3J0ZXI8T3B0aW9ucz4ge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlQ29udGVudChyb3dzOiBhbnlbXSwgb3B0aW9ucz86IE9wdGlvbnMpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyb3dzKTtcclxuICB9XHJcbiAgIHB1YmxpYyBnZXRNaW1lVHlwZSgpOiBNaW1lIHtcclxuICAgIHJldHVybiBNSU1FX0pTT047XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=