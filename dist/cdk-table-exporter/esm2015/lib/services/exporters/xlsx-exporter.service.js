import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { XlsExporterService } from './xls-exporter.service';
import { MIME_EXCEL_XLSX } from '../../constants';
import * as i0 from "@angular/core";
let XlsxExporterService = class XlsxExporterService extends XlsExporterService {
    constructor() {
        super();
    }
    // override
    getMimeType() {
        return MIME_EXCEL_XLSX;
    }
};
XlsxExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsxExporterService_Factory() { return new XlsxExporterService(); }, token: XlsxExporterService, providedIn: "root" });
XlsxExporterService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], XlsxExporterService);
export { XlsxExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy94bHN4LWV4cG9ydGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUtsRCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLGtCQUFrQjtJQUV6RDtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVELFdBQVc7SUFDSixXQUFXO1FBQ2hCLE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7Q0FDRixDQUFBOztBQVZZLG1CQUFtQjtJQUgvQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDOztHQUNXLG1CQUFtQixDQVUvQjtTQVZZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgWGxzRXhwb3J0ZXJTZXJ2aWNlIH0gZnJvbSAnLi94bHMtZXhwb3J0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcclxuaW1wb3J0IHsgTUlNRV9FWENFTF9YTFNYIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFhsc3hFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBYbHNFeHBvcnRlclNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICAvLyBvdmVycmlkZVxyXG4gIHB1YmxpYyBnZXRNaW1lVHlwZSgpOiBNaW1lIHtcclxuICAgIHJldHVybiBNSU1FX0VYQ0VMX1hMU1g7XHJcbiAgfVxyXG59XHJcbiJdfQ==