import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { XlsExporterService } from './xls-exporter.service';
import { MIME_EXCEL_XLSX } from '../../constants';
import * as i0 from "@angular/core";
var XlsxExporterService = /** @class */ (function (_super) {
    __extends(XlsxExporterService, _super);
    function XlsxExporterService() {
        return _super.call(this) || this;
    }
    // override
    XlsxExporterService.prototype.getMimeType = function () {
        return MIME_EXCEL_XLSX;
    };
    XlsxExporterService.ɵfac = function XlsxExporterService_Factory(t) { return new (t || XlsxExporterService)(); };
    XlsxExporterService.ɵprov = i0.ɵɵdefineInjectable({ token: XlsxExporterService, factory: XlsxExporterService.ɵfac, providedIn: 'root' });
    return XlsxExporterService;
}(XlsExporterService));
export { XlsxExporterService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(XlsxExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy94bHN4LWV4cG9ydGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVsRDtJQUd5Qyx1Q0FBa0I7SUFFekQ7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFFRCxXQUFXO0lBQ0oseUNBQVcsR0FBbEI7UUFDRSxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDOzBGQVRVLG1CQUFtQjsrREFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFGbEIsTUFBTTs4QkFOcEI7Q0FrQkMsQUFiRCxDQUd5QyxrQkFBa0IsR0FVMUQ7U0FWWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBYbHNFeHBvcnRlclNlcnZpY2UgfSBmcm9tICcuL3hscy1leHBvcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcbmltcG9ydCB7IE1JTUVfRVhDRUxfWExTWCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFhsc3hFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBYbHNFeHBvcnRlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvLyBvdmVycmlkZVxuICBwdWJsaWMgZ2V0TWltZVR5cGUoKTogTWltZSB7XG4gICAgcmV0dXJuIE1JTUVfRVhDRUxfWExTWDtcbiAgfVxufVxuIl19