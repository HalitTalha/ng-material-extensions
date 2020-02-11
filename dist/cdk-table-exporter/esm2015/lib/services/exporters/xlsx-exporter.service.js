import { Injectable } from '@angular/core';
import { XlsExporterService } from './xls-exporter.service';
import { MIME_EXCEL_XLSX } from '../../constants';
import * as i0 from "@angular/core";
export class XlsxExporterService extends XlsExporterService {
    constructor() {
        super();
    }
    // override
    getMimeType() {
        return MIME_EXCEL_XLSX;
    }
}
XlsxExporterService.ɵfac = function XlsxExporterService_Factory(t) { return new (t || XlsxExporterService)(); };
XlsxExporterService.ɵprov = i0.ɵɵdefineInjectable({ token: XlsxExporterService, factory: XlsxExporterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(XlsxExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy94bHN4LWV4cG9ydGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBS2xELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxrQkFBa0I7SUFFekQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFFRCxXQUFXO0lBQ0osV0FBVztRQUNoQixPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDOztzRkFUVSxtQkFBbUI7MkRBQW5CLG1CQUFtQixXQUFuQixtQkFBbUIsbUJBRmxCLE1BQU07a0RBRVAsbUJBQW1CO2NBSC9CLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFhsc0V4cG9ydGVyU2VydmljZSB9IGZyb20gJy4veGxzLWV4cG9ydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4uLy4uL21pbWUnO1xuaW1wb3J0IHsgTUlNRV9FWENFTF9YTFNYIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgWGxzeEV4cG9ydGVyU2VydmljZSBleHRlbmRzIFhsc0V4cG9ydGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8vIG92ZXJyaWRlXG4gIHB1YmxpYyBnZXRNaW1lVHlwZSgpOiBNaW1lIHtcbiAgICByZXR1cm4gTUlNRV9FWENFTF9YTFNYO1xuICB9XG59XG4iXX0=