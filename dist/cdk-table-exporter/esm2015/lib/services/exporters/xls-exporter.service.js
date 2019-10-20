/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { MIME_EXCEL_XLS, TYPE_ARRAY } from '../../constants';
import { WorksheetExporter } from './worksheet-exporter';
import * as i0 from "@angular/core";
export class XlsExporterService extends WorksheetExporter {
    constructor() {
        super();
    }
    /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    createContent(worksheet, options) {
        /** @type {?} */
        const workBook = XLSX.utils.book_new();
        if (!options) {
            options = (/** @type {?} */ ({}));
        }
        this.correctType(options);
        XLSX.utils.book_append_sheet(workBook, worksheet, options.sheet);
        return XLSX.write(workBook, options);
    }
    /**
     * @return {?}
     */
    getMimeType() {
        return MIME_EXCEL_XLS;
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    correctType(options) {
        if (!options.type) {
            options.type = TYPE_ARRAY;
        }
    }
}
XlsExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
XlsExporterService.ctorParameters = () => [];
/** @nocollapse */ XlsExporterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(); }, token: XlsExporterService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzLWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3hscy1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBS3pELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxpQkFBK0I7SUFFckU7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7Ozs7OztJQUVNLGFBQWEsQ0FBQyxTQUF5QixFQUFFLE9BQXNCOztjQUM5RCxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7UUFDdEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sR0FBRyxtQkFBQSxFQUFFLEVBQWdCLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRU0sV0FBVztRQUNoQixPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsT0FBcUI7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDakIsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7WUEzQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcbmltcG9ydCB7IE1JTUVfRVhDRUxfWExTLCBUWVBFX0FSUkFZIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcbmltcG9ydCB7IEV4Y2VsT3B0aW9ucyB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xuaW1wb3J0IHsgV29ya3NoZWV0RXhwb3J0ZXIgfSBmcm9tICcuL3dvcmtzaGVldC1leHBvcnRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFhsc0V4cG9ydGVyU2VydmljZSBleHRlbmRzIFdvcmtzaGVldEV4cG9ydGVyPEV4Y2VsT3B0aW9ucz4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlQ29udGVudCh3b3Jrc2hlZXQ6IFhMU1guV29ya1NoZWV0LCBvcHRpb25zPzogRXhjZWxPcHRpb25zKTogYW55IHtcbiAgICBjb25zdCB3b3JrQm9vayA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fSBhcyBFeGNlbE9wdGlvbnM7XG4gICAgfVxuICAgIHRoaXMuY29ycmVjdFR5cGUob3B0aW9ucyk7XG4gICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldCh3b3JrQm9vaywgd29ya3NoZWV0LCBvcHRpb25zLnNoZWV0KTtcbiAgICByZXR1cm4gWExTWC53cml0ZSh3b3JrQm9vaywgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWltZVR5cGUoKTogTWltZSB7XG4gICAgcmV0dXJuIE1JTUVfRVhDRUxfWExTO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3JyZWN0VHlwZShvcHRpb25zOiBFeGNlbE9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMudHlwZSkge1xuICAgICAgb3B0aW9ucy50eXBlID0gVFlQRV9BUlJBWTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==