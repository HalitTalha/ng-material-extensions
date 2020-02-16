import { __decorate, __extends, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { MIME_TXT, RETURN, TAB } from './../../constants';
import { FileExporter } from './file-exporter';
import * as i0 from "@angular/core";
var TxtExporterService = /** @class */ (function (_super) {
    __extends(TxtExporterService, _super);
    function TxtExporterService() {
        return _super.call(this) || this;
    }
    TxtExporterService.prototype.createContent = function (rows, options) {
        var _this = this;
        var content = '';
        rows.forEach(function (element) {
            content += Object.values(element).join(_this.getDelimiter(options)) + RETURN;
        });
        return content;
    };
    TxtExporterService.prototype.getMimeType = function () {
        return MIME_TXT;
    };
    TxtExporterService.prototype.getDelimiter = function (options) {
        if (options && options.delimiter) {
            return options.delimiter;
        }
        else {
            return TAB;
        }
    };
    TxtExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TxtExporterService_Factory() { return new TxtExporterService(); }, token: TxtExporterService, providedIn: "root" });
    TxtExporterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TxtExporterService);
    return TxtExporterService;
}(FileExporter));
export { TxtExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHh0LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3R4dC1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFLL0M7SUFBd0Msc0NBQXdCO0lBRTlEO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBRU0sMENBQWEsR0FBcEIsVUFBcUIsSUFBVyxFQUFFLE9BQW9CO1FBQXRELGlCQU1DO1FBTEMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ2xCLE9BQU8sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQzlFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVNLHdDQUFXLEdBQWxCO1FBQ0UsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVPLHlDQUFZLEdBQXBCLFVBQXFCLE9BQW9CO1FBQ3ZDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDaEMsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDO1NBQzFCO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQztTQUNaO0lBQ0gsQ0FBQzs7SUF4QlUsa0JBQWtCO1FBSDlCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BQ1csa0JBQWtCLENBMEI5Qjs2QkFuQ0Q7Q0FtQ0MsQUExQkQsQ0FBd0MsWUFBWSxHQTBCbkQ7U0ExQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4uLy4uL21pbWUnO1xuaW1wb3J0IHsgVHh0T3B0aW9ucyB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xuaW1wb3J0IHsgTUlNRV9UWFQsIFJFVFVSTiwgVEFCIH0gZnJvbSAnLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRmlsZUV4cG9ydGVyIH0gZnJvbSAnLi9maWxlLWV4cG9ydGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHh0RXhwb3J0ZXJTZXJ2aWNlIGV4dGVuZHMgRmlsZUV4cG9ydGVyPFR4dE9wdGlvbnM+IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZUNvbnRlbnQocm93czogYW55W10sIG9wdGlvbnM/OiBUeHRPcHRpb25zKSB7XG4gICAgbGV0IGNvbnRlbnQgPSAnJztcbiAgICByb3dzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb250ZW50ICs9IE9iamVjdC52YWx1ZXMoZWxlbWVudCkuam9pbih0aGlzLmdldERlbGltaXRlcihvcHRpb25zKSkgKyBSRVRVUk47XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWltZVR5cGUoKTogTWltZSB7XG4gICAgcmV0dXJuIE1JTUVfVFhUO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWxpbWl0ZXIob3B0aW9ucz86IFR4dE9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmRlbGltaXRlcikge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZGVsaW1pdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gVEFCO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=