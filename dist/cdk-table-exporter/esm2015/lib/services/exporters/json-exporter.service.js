import { Injectable } from '@angular/core';
import { FileExporter } from './file-exporter';
import { MIME_JSON } from '../../constants';
import * as i0 from "@angular/core";
export class JsonExporterService extends FileExporter {
    constructor() {
        super();
    }
    createContent(rows, options) {
        return JSON.stringify(rows);
    }
    getMimeType() {
        return MIME_JSON;
    }
}
JsonExporterService.ɵfac = function JsonExporterService_Factory(t) { return new (t || JsonExporterService)(); };
JsonExporterService.ɵprov = i0.ɵɵdefineInjectable({ token: JsonExporterService, factory: JsonExporterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(JsonExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy9qc29uLWV4cG9ydGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUs1QyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsWUFBcUI7SUFFNUQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFFTSxhQUFhLENBQUMsSUFBVyxFQUFFLE9BQWlCO1FBQ2pELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ08sV0FBVztRQUNqQixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOztzRkFYVSxtQkFBbUI7MkRBQW5CLG1CQUFtQixXQUFuQixtQkFBbUIsbUJBRmxCLE1BQU07a0RBRVAsbUJBQW1CO2NBSC9CLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcbmltcG9ydCB7IEZpbGVFeHBvcnRlciB9IGZyb20gJy4vZmlsZS1leHBvcnRlcic7XG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XG5pbXBvcnQgeyBNSU1FX0pTT04gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBKc29uRXhwb3J0ZXJTZXJ2aWNlIGV4dGVuZHMgRmlsZUV4cG9ydGVyPE9wdGlvbnM+IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZUNvbnRlbnQocm93czogYW55W10sIG9wdGlvbnM/OiBPcHRpb25zKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJvd3MpO1xuICB9XG4gICBwdWJsaWMgZ2V0TWltZVR5cGUoKTogTWltZSB7XG4gICAgcmV0dXJuIE1JTUVfSlNPTjtcbiAgfVxuXG59XG4iXX0=