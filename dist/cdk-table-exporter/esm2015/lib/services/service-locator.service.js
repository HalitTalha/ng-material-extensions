import { __decorate, __metadata } from "tslib";
import { CsvExporterService } from './exporters/csv-exporter.service';
import { TxtExporterService } from './exporters/txt-exporter.service';
import { Injectable, Injector } from '@angular/core';
import { ExportType } from './../export-type';
import { XlsExporterService } from './exporters/xls-exporter.service';
import { JsonExporterService } from './exporters/json-exporter.service';
import { XlsxExporterService } from './exporters/xlsx-exporter.service';
import * as i0 from "@angular/core";
let ServiceLocatorService = class ServiceLocatorService {
    constructor(injector) {
        this.injector = injector;
    }
    getService(exportType) {
        switch (exportType) {
            case ExportType.XLS.valueOf():
                return this.injector.get(XlsExporterService);
            case ExportType.XLSX.valueOf():
                return this.injector.get(XlsxExporterService);
            case ExportType.JSON.valueOf():
                return this.injector.get(JsonExporterService);
            case ExportType.TXT.valueOf():
                return this.injector.get(TxtExporterService);
            case ExportType.CSV.valueOf():
                return this.injector.get(CsvExporterService);
            case ExportType.OTHER.valueOf():
                return null;
            default:
                return this.injector.get(XlsxExporterService);
        }
    }
};
ServiceLocatorService.ctorParameters = () => [
    { type: Injector }
];
ServiceLocatorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ServiceLocatorService_Factory() { return new ServiceLocatorService(i0.ɵɵinject(i0.INJECTOR)); }, token: ServiceLocatorService, providedIn: "root" });
ServiceLocatorService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [Injector])
], ServiceLocatorService);
export { ServiceLocatorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1sb2NhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2VydmljZS1sb2NhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFJeEUsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFFaEMsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFJLENBQUM7SUFFcEMsVUFBVSxDQUFDLFVBQTBFO1FBQzFGLFFBQVEsVUFBVSxFQUFFO1lBQ2xCLEtBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXFCLGtCQUFrQixDQUFDLENBQUM7WUFDbkUsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDMUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBc0IsbUJBQW1CLENBQUMsQ0FBQztZQUN2RSxLQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUM1QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFzQixtQkFBbUIsQ0FBQyxDQUFDO1lBQ3JFLEtBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXFCLGtCQUFrQixDQUFDLENBQUM7WUFDbkUsS0FBSyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDM0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBcUIsa0JBQWtCLENBQUMsQ0FBQztZQUNuRSxLQUFLLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUM3QixPQUFPLElBQUksQ0FBQztZQUNkO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXNCLG1CQUFtQixDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFwQitCLFFBQVE7OztBQUYzQixxQkFBcUI7SUFIakMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztxQ0FHOEIsUUFBUTtHQUYzQixxQkFBcUIsQ0FzQmpDO1NBdEJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENzdkV4cG9ydGVyU2VydmljZSB9IGZyb20gJy4vZXhwb3J0ZXJzL2Nzdi1leHBvcnRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHh0RXhwb3J0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9leHBvcnRlcnMvdHh0LWV4cG9ydGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IEV4cG9ydFR5cGUgfSBmcm9tICcuLy4uL2V4cG9ydC10eXBlJztcclxuaW1wb3J0IHsgRXhwb3J0ZXIgfSBmcm9tICcuL2V4cG9ydGVycy9leHBvcnRlcic7XHJcbmltcG9ydCB7IFhsc0V4cG9ydGVyU2VydmljZSB9IGZyb20gJy4vZXhwb3J0ZXJzL3hscy1leHBvcnRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSnNvbkV4cG9ydGVyU2VydmljZSB9IGZyb20gJy4vZXhwb3J0ZXJzL2pzb24tZXhwb3J0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFhsc3hFeHBvcnRlclNlcnZpY2UgfSBmcm9tICcuL2V4cG9ydGVycy94bHN4LWV4cG9ydGVyLnNlcnZpY2UnO1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlTG9jYXRvclNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcikgeyB9XHJcblxyXG4gIHB1YmxpYyBnZXRTZXJ2aWNlKGV4cG9ydFR5cGU6IEV4cG9ydFR5cGUgfCAneGxzJyB8ICd4bHN4JyB8ICdjc3YnIHwgJ3R4dCcgfCAnanNvbicgfCAnb3RoZXInKTogRXhwb3J0ZXI8T3B0aW9ucz4ge1xyXG4gICAgc3dpdGNoIChleHBvcnRUeXBlKSB7XHJcbiAgICAgIGNhc2UgRXhwb3J0VHlwZS5YTFMudmFsdWVPZigpOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxYbHNFeHBvcnRlclNlcnZpY2U+KFhsc0V4cG9ydGVyU2VydmljZSk7XHJcbiAgICAgIGNhc2UgRXhwb3J0VHlwZS5YTFNYLnZhbHVlT2YoKTpcclxuICAgICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxYbHN4RXhwb3J0ZXJTZXJ2aWNlPihYbHN4RXhwb3J0ZXJTZXJ2aWNlKTtcclxuICAgICAgY2FzZSBFeHBvcnRUeXBlLkpTT04udmFsdWVPZigpOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxKc29uRXhwb3J0ZXJTZXJ2aWNlPihKc29uRXhwb3J0ZXJTZXJ2aWNlKTtcclxuICAgICAgY2FzZSBFeHBvcnRUeXBlLlRYVC52YWx1ZU9mKCk6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFR4dEV4cG9ydGVyU2VydmljZT4oVHh0RXhwb3J0ZXJTZXJ2aWNlKTtcclxuICAgICAgY2FzZSBFeHBvcnRUeXBlLkNTVi52YWx1ZU9mKCk6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PENzdkV4cG9ydGVyU2VydmljZT4oQ3N2RXhwb3J0ZXJTZXJ2aWNlKTtcclxuICAgICAgY2FzZSBFeHBvcnRUeXBlLk9USEVSLnZhbHVlT2YoKTpcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8WGxzeEV4cG9ydGVyU2VydmljZT4oWGxzeEV4cG9ydGVyU2VydmljZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==