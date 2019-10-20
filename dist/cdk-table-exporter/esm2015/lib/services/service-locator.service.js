/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CsvExporterService } from './exporters/csv-exporter.service';
import { TxtExporterService } from './exporters/txt-exporter.service';
import { Injectable, Injector } from '@angular/core';
import { ExportType } from './../export-type';
import { XlsExporterService } from './exporters/xls-exporter.service';
import { JsonExporterService } from './exporters/json-exporter.service';
import { XlsxExporterService } from './exporters/xlsx-exporter.service';
import * as i0 from "@angular/core";
export class ServiceLocatorService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * @param {?} exportType
     * @return {?}
     */
    getService(exportType) {
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
    }
}
ServiceLocatorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ServiceLocatorService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ ServiceLocatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ServiceLocatorService_Factory() { return new ServiceLocatorService(i0.ɵɵinject(i0.INJECTOR)); }, token: ServiceLocatorService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ServiceLocatorService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1sb2NhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2VydmljZS1sb2NhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFJeEUsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUVoQyxZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUksQ0FBQzs7Ozs7SUFFcEMsVUFBVSxDQUFDLFVBQXNCO1FBQ3RDLFFBQVEsVUFBVSxFQUFFO1lBQ2xCLEtBQUssVUFBVSxDQUFDLEdBQUc7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXFCLGtCQUFrQixDQUFDLENBQUM7WUFDbkUsS0FBSyxVQUFVLENBQUMsSUFBSTtnQkFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBc0IsbUJBQW1CLENBQUMsQ0FBQztZQUN2RSxLQUFLLFVBQVUsQ0FBQyxJQUFJO2dCQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFzQixtQkFBbUIsQ0FBQyxDQUFDO1lBQ3JFLEtBQUssVUFBVSxDQUFDLEdBQUc7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXFCLGtCQUFrQixDQUFDLENBQUM7WUFDbkUsS0FBSyxVQUFVLENBQUMsR0FBRztnQkFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBcUIsa0JBQWtCLENBQUMsQ0FBQztZQUNuRTtnQkFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFzQixtQkFBbUIsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzs7O1lBdEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVRvQixRQUFROzs7Ozs7OztJQVlmLHlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENzdkV4cG9ydGVyU2VydmljZSB9IGZyb20gJy4vZXhwb3J0ZXJzL2Nzdi1leHBvcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFR4dEV4cG9ydGVyU2VydmljZSB9IGZyb20gJy4vZXhwb3J0ZXJzL3R4dC1leHBvcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vb3B0aW9ucyc7XG5pbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi8uLi9leHBvcnQtdHlwZSc7XG5pbXBvcnQgeyBFeHBvcnRlciB9IGZyb20gJy4vZXhwb3J0ZXJzL2V4cG9ydGVyJztcbmltcG9ydCB7IFhsc0V4cG9ydGVyU2VydmljZSB9IGZyb20gJy4vZXhwb3J0ZXJzL3hscy1leHBvcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEpzb25FeHBvcnRlclNlcnZpY2UgfSBmcm9tICcuL2V4cG9ydGVycy9qc29uLWV4cG9ydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgWGxzeEV4cG9ydGVyU2VydmljZSB9IGZyb20gJy4vZXhwb3J0ZXJzL3hsc3gtZXhwb3J0ZXIuc2VydmljZSc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlTG9jYXRvclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7IH1cblxuICBwdWJsaWMgZ2V0U2VydmljZShleHBvcnRUeXBlOiBFeHBvcnRUeXBlKTogRXhwb3J0ZXI8T3B0aW9ucz4ge1xuICAgIHN3aXRjaCAoZXhwb3J0VHlwZSkge1xuICAgICAgY2FzZSBFeHBvcnRUeXBlLlhMUzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFhsc0V4cG9ydGVyU2VydmljZT4oWGxzRXhwb3J0ZXJTZXJ2aWNlKTtcbiAgICAgIGNhc2UgRXhwb3J0VHlwZS5YTFNYOlxuICAgICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxYbHN4RXhwb3J0ZXJTZXJ2aWNlPihYbHN4RXhwb3J0ZXJTZXJ2aWNlKTtcbiAgICAgIGNhc2UgRXhwb3J0VHlwZS5KU09OOlxuICAgICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8SnNvbkV4cG9ydGVyU2VydmljZT4oSnNvbkV4cG9ydGVyU2VydmljZSk7XG4gICAgICBjYXNlIEV4cG9ydFR5cGUuVFhUOlxuICAgICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8VHh0RXhwb3J0ZXJTZXJ2aWNlPihUeHRFeHBvcnRlclNlcnZpY2UpO1xuICAgICAgY2FzZSBFeHBvcnRUeXBlLkNTVjpcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PENzdkV4cG9ydGVyU2VydmljZT4oQ3N2RXhwb3J0ZXJTZXJ2aWNlKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxYbHN4RXhwb3J0ZXJTZXJ2aWNlPihYbHN4RXhwb3J0ZXJTZXJ2aWNlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==