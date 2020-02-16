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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1sb2NhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2VydmljZS1sb2NhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFJeEUsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFFaEMsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFJLENBQUM7SUFFcEMsVUFBVSxDQUFDLFVBQTBFO1FBQzFGLFFBQVEsVUFBVSxFQUFFO1lBQ2xCLEtBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXFCLGtCQUFrQixDQUFDLENBQUM7WUFDbkUsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDMUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBc0IsbUJBQW1CLENBQUMsQ0FBQztZQUN2RSxLQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUM1QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFzQixtQkFBbUIsQ0FBQyxDQUFDO1lBQ3JFLEtBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXFCLGtCQUFrQixDQUFDLENBQUM7WUFDbkUsS0FBSyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDM0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBcUIsa0JBQWtCLENBQUMsQ0FBQztZQUNuRSxLQUFLLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUM3QixPQUFPLElBQUksQ0FBQztZQUNkO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXNCLG1CQUFtQixDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFwQitCLFFBQVE7OztBQUYzQixxQkFBcUI7SUFIakMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztxQ0FHOEIsUUFBUTtHQUYzQixxQkFBcUIsQ0FzQmpDO1NBdEJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENzdkV4cG9ydGVyU2VydmljZSB9IGZyb20gJy4vZXhwb3J0ZXJzL2Nzdi1leHBvcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFR4dEV4cG9ydGVyU2VydmljZSB9IGZyb20gJy4vZXhwb3J0ZXJzL3R4dC1leHBvcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vb3B0aW9ucyc7XG5pbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi8uLi9leHBvcnQtdHlwZSc7XG5pbXBvcnQgeyBFeHBvcnRlciB9IGZyb20gJy4vZXhwb3J0ZXJzL2V4cG9ydGVyJztcbmltcG9ydCB7IFhsc0V4cG9ydGVyU2VydmljZSB9IGZyb20gJy4vZXhwb3J0ZXJzL3hscy1leHBvcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEpzb25FeHBvcnRlclNlcnZpY2UgfSBmcm9tICcuL2V4cG9ydGVycy9qc29uLWV4cG9ydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgWGxzeEV4cG9ydGVyU2VydmljZSB9IGZyb20gJy4vZXhwb3J0ZXJzL3hsc3gtZXhwb3J0ZXIuc2VydmljZSc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlTG9jYXRvclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7IH1cblxuICBwdWJsaWMgZ2V0U2VydmljZShleHBvcnRUeXBlOiBFeHBvcnRUeXBlIHwgJ3hscycgfCAneGxzeCcgfCAnY3N2JyB8ICd0eHQnIHwgJ2pzb24nIHwgJ290aGVyJyk6IEV4cG9ydGVyPE9wdGlvbnM+IHtcbiAgICBzd2l0Y2ggKGV4cG9ydFR5cGUpIHtcbiAgICAgIGNhc2UgRXhwb3J0VHlwZS5YTFMudmFsdWVPZigpOlxuICAgICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8WGxzRXhwb3J0ZXJTZXJ2aWNlPihYbHNFeHBvcnRlclNlcnZpY2UpO1xuICAgICAgY2FzZSBFeHBvcnRUeXBlLlhMU1gudmFsdWVPZigpOlxuICAgICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxYbHN4RXhwb3J0ZXJTZXJ2aWNlPihYbHN4RXhwb3J0ZXJTZXJ2aWNlKTtcbiAgICAgIGNhc2UgRXhwb3J0VHlwZS5KU09OLnZhbHVlT2YoKTpcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PEpzb25FeHBvcnRlclNlcnZpY2U+KEpzb25FeHBvcnRlclNlcnZpY2UpO1xuICAgICAgY2FzZSBFeHBvcnRUeXBlLlRYVC52YWx1ZU9mKCk6XG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxUeHRFeHBvcnRlclNlcnZpY2U+KFR4dEV4cG9ydGVyU2VydmljZSk7XG4gICAgICBjYXNlIEV4cG9ydFR5cGUuQ1NWLnZhbHVlT2YoKTpcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PENzdkV4cG9ydGVyU2VydmljZT4oQ3N2RXhwb3J0ZXJTZXJ2aWNlKTtcbiAgICAgIGNhc2UgRXhwb3J0VHlwZS5PVEhFUi52YWx1ZU9mKCk6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFhsc3hFeHBvcnRlclNlcnZpY2U+KFhsc3hFeHBvcnRlclNlcnZpY2UpO1xuICAgIH1cbiAgfVxufVxuIl19