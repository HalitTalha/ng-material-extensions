import { Injectable } from '@angular/core';
import { XlsExporterService } from './xls-exporter.service';
import { MIME_EXCEL_XLSX } from '../../constants';
import * as i0 from "@angular/core";
export class XlsxExporterService extends XlsExporterService {
    constructor() {
        super();
    }
    // override
    getMimeType() {
        return MIME_EXCEL_XLSX;
    }
}
XlsxExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsxExporterService_Factory() { return new XlsxExporterService(); }, token: XlsxExporterService, providedIn: "root" });
XlsxExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
XlsxExporterService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkQ6L2FuZ3VsYXJfd29ya3NwYWNlL25nLW1hdGVyaWFsLWV4dGVuc2lvbnMvcHJvamVjdHMvY2RrLXRhYmxlLWV4cG9ydGVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBvcnRlcnMveGxzeC1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUtsRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsa0JBQWtCO0lBRXpEO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRUQsV0FBVztJQUNKLFdBQVc7UUFDaEIsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQzs7OztZQVpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgWGxzRXhwb3J0ZXJTZXJ2aWNlIH0gZnJvbSAnLi94bHMtZXhwb3J0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcclxuaW1wb3J0IHsgTUlNRV9FWENFTF9YTFNYIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFhsc3hFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBYbHNFeHBvcnRlclNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICAvLyBvdmVycmlkZVxyXG4gIHB1YmxpYyBnZXRNaW1lVHlwZSgpOiBNaW1lIHtcclxuICAgIHJldHVybiBNSU1FX0VYQ0VMX1hMU1g7XHJcbiAgfVxyXG59XHJcbiJdfQ==