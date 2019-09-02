/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CsvExporterService } from './exporters/csv-exporter.service';
import { TxtExporterService } from './exporters/txt-exporter.service';
import { Injectable, Injector } from '@angular/core';
import { ExportType } from './../export-type';
import { XlsExporterService } from './exporters/xls-exporter.service';
import { JsonExporterService } from './exporters/json-exporter.service';
import { XlsxExporterService } from './exporters/xlsx-exporter.service';
import * as i0 from "@angular/core";
var ServiceLocatorService = /** @class */ (function () {
    function ServiceLocatorService(injector) {
        this.injector = injector;
    }
    /**
     * @param {?} exportType
     * @return {?}
     */
    ServiceLocatorService.prototype.getService = /**
     * @param {?} exportType
     * @return {?}
     */
    function (exportType) {
        switch (exportType) {
            case ExportType.XLS:
                return this.injector.get(XlsExporterService);
            case ExportType.XLSX:
                return this.injector.get(XlsxExporterService);
            case ExportType.JSON:
                return this.injector.get(JsonExporterService);
            case ExportType.TXT:
                return this.injector.get(TxtExporterService);
            case ExportType.CSV:
                return this.injector.get(CsvExporterService);
            default:
                return this.injector.get(XlsxExporterService);
        }
    };
    ServiceLocatorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ServiceLocatorService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ ServiceLocatorService.ngInjectableDef = i0.defineInjectable({ factory: function ServiceLocatorService_Factory() { return new ServiceLocatorService(i0.inject(i0.INJECTOR)); }, token: ServiceLocatorService, providedIn: "root" });
    return ServiceLocatorService;
}());
export { ServiceLocatorService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ServiceLocatorService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1sb2NhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2VydmljZS1sb2NhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFDeEU7SUFLRSwrQkFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFJLENBQUM7Ozs7O0lBRXBDLDBDQUFVOzs7O0lBQWpCLFVBQWtCLFVBQXNCO1FBQ3RDLFFBQVEsVUFBVSxFQUFFO1lBQ2xCLEtBQUssVUFBVSxDQUFDLEdBQUc7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXFCLGtCQUFrQixDQUFDLENBQUM7WUFDbkUsS0FBSyxVQUFVLENBQUMsSUFBSTtnQkFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBc0IsbUJBQW1CLENBQUMsQ0FBQztZQUN2RSxLQUFLLFVBQVUsQ0FBQyxJQUFJO2dCQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFzQixtQkFBbUIsQ0FBQyxDQUFDO1lBQ3JFLEtBQUssVUFBVSxDQUFDLEdBQUc7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXFCLGtCQUFrQixDQUFDLENBQUM7WUFDbkUsS0FBSyxVQUFVLENBQUMsR0FBRztnQkFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBcUIsa0JBQWtCLENBQUMsQ0FBQztZQUNuRTtnQkFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFzQixtQkFBbUIsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzs7Z0JBdEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVG9CLFFBQVE7OztnQ0FGN0I7Q0FnQ0MsQUF2QkQsSUF1QkM7U0FwQlkscUJBQXFCOzs7Ozs7SUFFcEIseUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3N2RXhwb3J0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9leHBvcnRlcnMvY3N2LWV4cG9ydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHh0RXhwb3J0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9leHBvcnRlcnMvdHh0LWV4cG9ydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi9vcHRpb25zJztcbmltcG9ydCB7IEV4cG9ydFR5cGUgfSBmcm9tICcuLy4uL2V4cG9ydC10eXBlJztcbmltcG9ydCB7IEV4cG9ydGVyIH0gZnJvbSAnLi9leHBvcnRlcnMvZXhwb3J0ZXInO1xuaW1wb3J0IHsgWGxzRXhwb3J0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9leHBvcnRlcnMveGxzLWV4cG9ydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSnNvbkV4cG9ydGVyU2VydmljZSB9IGZyb20gJy4vZXhwb3J0ZXJzL2pzb24tZXhwb3J0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBYbHN4RXhwb3J0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9leHBvcnRlcnMveGxzeC1leHBvcnRlci5zZXJ2aWNlJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VMb2NhdG9yU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHsgfVxuXG4gIHB1YmxpYyBnZXRTZXJ2aWNlKGV4cG9ydFR5cGU6IEV4cG9ydFR5cGUpOiBFeHBvcnRlcjxPcHRpb25zPiB7XG4gICAgc3dpdGNoIChleHBvcnRUeXBlKSB7XG4gICAgICBjYXNlIEV4cG9ydFR5cGUuWExTOlxuICAgICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8WGxzRXhwb3J0ZXJTZXJ2aWNlPihYbHNFeHBvcnRlclNlcnZpY2UpO1xuICAgICAgY2FzZSBFeHBvcnRUeXBlLlhMU1g6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFhsc3hFeHBvcnRlclNlcnZpY2U+KFhsc3hFeHBvcnRlclNlcnZpY2UpO1xuICAgICAgY2FzZSBFeHBvcnRUeXBlLkpTT046XG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxKc29uRXhwb3J0ZXJTZXJ2aWNlPihKc29uRXhwb3J0ZXJTZXJ2aWNlKTtcbiAgICAgIGNhc2UgRXhwb3J0VHlwZS5UWFQ6XG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxUeHRFeHBvcnRlclNlcnZpY2U+KFR4dEV4cG9ydGVyU2VydmljZSk7XG4gICAgICBjYXNlIEV4cG9ydFR5cGUuQ1NWOlxuICAgICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8Q3N2RXhwb3J0ZXJTZXJ2aWNlPihDc3ZFeHBvcnRlclNlcnZpY2UpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFhsc3hFeHBvcnRlclNlcnZpY2U+KFhsc3hFeHBvcnRlclNlcnZpY2UpO1xuICAgIH1cbiAgfVxufVxuIl19