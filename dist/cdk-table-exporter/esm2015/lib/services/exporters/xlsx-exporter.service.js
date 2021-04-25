import { Injectable } from '@angular/core';
import { XlsExporterService } from './xls-exporter.service';
import { MIME_EXCEL_XLSX } from '../../constants';
import { SheetjsHelperService } from '../sheetjs-helper.service';
import * as i0 from "@angular/core";
import * as i1 from "../sheetjs-helper.service";
export class XlsxExporterService extends XlsExporterService {
    constructor(sheetJsHelper) {
        super(sheetJsHelper);
    }
    // override
    getMimeType() {
        return MIME_EXCEL_XLSX;
    }
}
XlsxExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsxExporterService_Factory() { return new XlsxExporterService(i0.ɵɵinject(i1.SheetjsHelperService)); }, token: XlsxExporterService, providedIn: "root" });
XlsxExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
XlsxExporterService.ctorParameters = () => [
    { type: SheetjsHelperService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkQ6L2FuZ3VsYXJfd29ya3NwYWNlL25nLW1hdGVyaWFsLWV4dGVuc2lvbnMvcHJvamVjdHMvY2RrLXRhYmxlLWV4cG9ydGVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBvcnRlcnMveGxzeC1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFLakUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGtCQUFrQjtJQUV6RCxZQUFZLGFBQW1DO1FBQzdDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVztJQUNKLFdBQVc7UUFDaEIsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQzs7OztZQVpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBSlEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBYbHNFeHBvcnRlclNlcnZpY2UgfSBmcm9tICcuL3hscy1leHBvcnRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4uLy4uL21pbWUnO1xyXG5pbXBvcnQgeyBNSU1FX0VYQ0VMX1hMU1ggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBTaGVldGpzSGVscGVyU2VydmljZSB9IGZyb20gJy4uL3NoZWV0anMtaGVscGVyLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgWGxzeEV4cG9ydGVyU2VydmljZSBleHRlbmRzIFhsc0V4cG9ydGVyU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNoZWV0SnNIZWxwZXI6IFNoZWV0anNIZWxwZXJTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihzaGVldEpzSGVscGVyKTtcclxuICB9XHJcblxyXG4gIC8vIG92ZXJyaWRlXHJcbiAgcHVibGljIGdldE1pbWVUeXBlKCk6IE1pbWUge1xyXG4gICAgcmV0dXJuIE1JTUVfRVhDRUxfWExTWDtcclxuICB9XHJcbn1cclxuIl19