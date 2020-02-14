import { __extends } from "tslib";
import { MIME_CSV } from './../../constants';
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
        return XLSX.utils.sheet_to_csv(worksheet);
    };
    CsvExporterService.prototype.getMimeType = function () {
        return MIME_CSV;
    };
    CsvExporterService.ɵfac = function CsvExporterService_Factory(t) { return new (t || CsvExporterService)(); };
    CsvExporterService.ɵprov = i0.ɵɵdefineInjectable({ token: CsvExporterService, factory: CsvExporterService.ɵfac, providedIn: 'root' });
    return CsvExporterService;
}(WorksheetExporter));
export { CsvExporterService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CsvExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL2Nzdi1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFHekQ7SUFHd0Msc0NBQTBCO0lBRWhFO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBRU0sK0NBQWtCLEdBQXpCLFVBQTBCLFNBQXlCLEVBQUUsT0FBaUI7UUFDcEUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sd0NBQVcsR0FBbEI7UUFDRSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO3dGQVpVLGtCQUFrQjs4REFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFGakIsTUFBTTs2QkFScEI7Q0F1QkMsQUFoQkQsQ0FHd0MsaUJBQWlCLEdBYXhEO1NBYlksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTUlNRV9DU1YgfSBmcm9tICcuLy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xuaW1wb3J0IHsgV29ya3NoZWV0RXhwb3J0ZXIgfSBmcm9tICcuL3dvcmtzaGVldC1leHBvcnRlcic7XG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENzdkV4cG9ydGVyU2VydmljZSBleHRlbmRzIFdvcmtzaGVldEV4cG9ydGVyPE9wdGlvbnM+IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIHdvcmtTaGVldFRvQ29udGVudCh3b3Jrc2hlZXQ6IFhMU1guV29ya1NoZWV0LCBvcHRpb25zPzogT3B0aW9ucyk6IGFueSB7XG4gICAgcmV0dXJuIFhMU1gudXRpbHMuc2hlZXRfdG9fY3N2KHdvcmtzaGVldCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWltZVR5cGUoKTogTWltZSB7XG4gICAgcmV0dXJuIE1JTUVfQ1NWO1xuICB9XG59XG4iXX0=