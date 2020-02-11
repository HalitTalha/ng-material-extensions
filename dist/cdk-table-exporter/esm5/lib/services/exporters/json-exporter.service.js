import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { FileExporter } from './file-exporter';
import { MIME_JSON } from '../../constants';
import * as i0 from "@angular/core";
var JsonExporterService = /** @class */ (function (_super) {
    __extends(JsonExporterService, _super);
    function JsonExporterService() {
        return _super.call(this) || this;
    }
    JsonExporterService.prototype.createContent = function (rows, options) {
        return JSON.stringify(rows);
    };
    JsonExporterService.prototype.getMimeType = function () {
        return MIME_JSON;
    };
    JsonExporterService.ɵfac = function JsonExporterService_Factory(t) { return new (t || JsonExporterService)(); };
    JsonExporterService.ɵprov = i0.ɵɵdefineInjectable({ token: JsonExporterService, factory: JsonExporterService.ɵfac, providedIn: 'root' });
    return JsonExporterService;
}(FileExporter));
export { JsonExporterService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(JsonExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy9qc29uLWV4cG9ydGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFNUM7SUFHeUMsdUNBQXFCO0lBRTVEO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBRU0sMkNBQWEsR0FBcEIsVUFBcUIsSUFBVyxFQUFFLE9BQWlCO1FBQ2pELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ08seUNBQVcsR0FBbEI7UUFDQyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzBGQVhVLG1CQUFtQjsrREFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFGbEIsTUFBTTs4QkFQcEI7Q0FzQkMsQUFoQkQsQ0FHeUMsWUFBWSxHQWFwRDtTQWJZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBSC9CLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcbmltcG9ydCB7IEZpbGVFeHBvcnRlciB9IGZyb20gJy4vZmlsZS1leHBvcnRlcic7XG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XG5pbXBvcnQgeyBNSU1FX0pTT04gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBKc29uRXhwb3J0ZXJTZXJ2aWNlIGV4dGVuZHMgRmlsZUV4cG9ydGVyPE9wdGlvbnM+IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZUNvbnRlbnQocm93czogYW55W10sIG9wdGlvbnM/OiBPcHRpb25zKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJvd3MpO1xuICB9XG4gICBwdWJsaWMgZ2V0TWltZVR5cGUoKTogTWltZSB7XG4gICAgcmV0dXJuIE1JTUVfSlNPTjtcbiAgfVxuXG59XG4iXX0=