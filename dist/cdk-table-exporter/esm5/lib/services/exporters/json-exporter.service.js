/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MIME_JSON } from './../../constants';
import { Injectable } from '@angular/core';
import { FileUtil } from '../../file-util';
import * as i0 from "@angular/core";
var JsonExporterService = /** @class */ (function () {
    function JsonExporterService() {
    }
    /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    JsonExporterService.prototype.export = /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    function (rows, options) {
        /** @type {?} */
        var jsonContent = JSON.stringify(rows);
        FileUtil.save(jsonContent, MIME_JSON, options);
    };
    JsonExporterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    JsonExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ JsonExporterService.ngInjectableDef = i0.defineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
    return JsonExporterService;
}());
export { JsonExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy9qc29uLWV4cG9ydGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFM0M7SUFLRTtJQUNBLENBQUM7Ozs7OztJQUVNLG9DQUFNOzs7OztJQUFiLFVBQWMsSUFBVyxFQUFFLE9BQWlCOztZQUNwQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dCQVhGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzhCQVJEO0NBa0JDLEFBWkQsSUFZQztTQVRZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1JTUVfSlNPTiB9IGZyb20gJy4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IEV4cG9ydGVyIH0gZnJvbSAnLi9leHBvcnRlcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XG5pbXBvcnQgeyBGaWxlVXRpbCB9IGZyb20gJy4uLy4uL2ZpbGUtdXRpbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEpzb25FeHBvcnRlclNlcnZpY2UgaW1wbGVtZW50cyBFeHBvcnRlcjxPcHRpb25zPiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBwdWJsaWMgZXhwb3J0KHJvd3M6IGFueVtdLCBvcHRpb25zPzogT3B0aW9ucykge1xuICAgIGNvbnN0IGpzb25Db250ZW50ID0gSlNPTi5zdHJpbmdpZnkocm93cyk7XG4gICAgRmlsZVV0aWwuc2F2ZShqc29uQ29udGVudCwgTUlNRV9KU09OLCBvcHRpb25zKTtcbiAgfVxufVxuIl19