/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MIME_JSON } from './../../constants';
import { Injectable } from '@angular/core';
import { FileUtil } from '../../file-util';
import * as i0 from "@angular/core";
export class JsonExporterService {
    constructor() {
    }
    /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    export(rows, options) {
        /** @type {?} */
        const jsonContent = JSON.stringify(rows);
        FileUtil.save(jsonContent, MIME_JSON, options);
    }
}
JsonExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
JsonExporterService.ctorParameters = () => [];
/** @nocollapse */ JsonExporterService.ngInjectableDef = i0.defineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy9qc29uLWV4cG9ydGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLG1CQUFtQjtJQUU5QjtJQUNBLENBQUM7Ozs7OztJQUVNLE1BQU0sQ0FBQyxJQUFXLEVBQUUsT0FBaUI7O2NBQ3BDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7O1lBWEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTUlNRV9KU09OIH0gZnJvbSAnLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRXhwb3J0ZXIgfSBmcm9tICcuL2V4cG9ydGVyJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcbmltcG9ydCB7IEZpbGVVdGlsIH0gZnJvbSAnLi4vLi4vZmlsZS11dGlsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkV4cG9ydGVyU2VydmljZSBpbXBsZW1lbnRzIEV4cG9ydGVyPE9wdGlvbnM+IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIHB1YmxpYyBleHBvcnQocm93czogYW55W10sIG9wdGlvbnM/OiBPcHRpb25zKSB7XG4gICAgY29uc3QganNvbkNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShyb3dzKTtcbiAgICBGaWxlVXRpbC5zYXZlKGpzb25Db250ZW50LCBNSU1FX0pTT04sIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=