/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { WorksheetExporter } from './worksheet-exporter';
import { MIME_TXT } from './../../constants';
import * as i0 from "@angular/core";
export class TxtExporterService extends WorksheetExporter {
    constructor() {
        super();
    }
    /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    createContent(worksheet, options) {
        return XLSX.utils.sheet_to_txt(worksheet);
    }
    /**
     * @return {?}
     */
    getMimeType() {
        return MIME_TXT;
    }
}
TxtExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TxtExporterService.ctorParameters = () => [];
/** @nocollapse */ TxtExporterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TxtExporterService_Factory() { return new TxtExporterService(); }, token: TxtExporterService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHh0LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3R4dC1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRTdCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGlCQUEwQjtJQUVoRTtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7O0lBRUssYUFBYSxDQUFDLFNBQXlCLEVBQUUsT0FBaUI7UUFDL0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ00sV0FBVztRQUNoQixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7WUFkRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xuaW1wb3J0IHsgV29ya3NoZWV0RXhwb3J0ZXIgfSBmcm9tICcuL3dvcmtzaGVldC1leHBvcnRlcic7XG5pbXBvcnQgeyBNSU1FX1RYVCB9IGZyb20gJy4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFR4dEV4cG9ydGVyU2VydmljZSBleHRlbmRzIFdvcmtzaGVldEV4cG9ydGVyPE9wdGlvbnM+ICB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgIH1cblxuICBwdWJsaWMgY3JlYXRlQ29udGVudCh3b3Jrc2hlZXQ6IFhMU1guV29ya1NoZWV0LCBvcHRpb25zPzogT3B0aW9ucyk6IGFueSB7XG4gICAgcmV0dXJuIFhMU1gudXRpbHMuc2hlZXRfdG9fdHh0KHdvcmtzaGVldCk7XG4gIH1cbiAgcHVibGljIGdldE1pbWVUeXBlKCk6IE1pbWUge1xuICAgIHJldHVybiBNSU1FX1RYVDtcbiAgfVxufVxuIl19