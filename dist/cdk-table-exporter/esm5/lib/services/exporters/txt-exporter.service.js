/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MIME_TXT, RETURN, TAB } from './../../constants';
import { FileExporter } from './file-exporter';
import * as i0 from "@angular/core";
var TxtExporterService = /** @class */ (function (_super) {
    tslib_1.__extends(TxtExporterService, _super);
    function TxtExporterService() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    TxtExporterService.prototype.createContent = /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    function (rows, options) {
        var _this = this;
        /** @type {?} */
        var content = '';
        rows.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            content += Object.values(element).join(_this.getDelimiter(options)) + RETURN;
        }));
        return content;
    };
    /**
     * @return {?}
     */
    TxtExporterService.prototype.getMimeType = /**
     * @return {?}
     */
    function () {
        return MIME_TXT;
    };
    /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    TxtExporterService.prototype.getDelimiter = /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options && options.delimiter) {
            return options.delimiter;
        }
        else {
            return TAB;
        }
    };
    TxtExporterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TxtExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ TxtExporterService.ngInjectableDef = i0.defineInjectable({ factory: function TxtExporterService_Factory() { return new TxtExporterService(); }, token: TxtExporterService, providedIn: "root" });
    return TxtExporterService;
}(FileExporter));
export { TxtExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHh0LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3R4dC1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRS9DO0lBR3dDLDhDQUF3QjtJQUU5RDtlQUNFLGlCQUFPO0lBQ1QsQ0FBQzs7Ozs7O0lBRU0sMENBQWE7Ozs7O0lBQXBCLFVBQXFCLElBQVcsRUFBRSxPQUFvQjtRQUF0RCxpQkFNQzs7WUFMSyxPQUFPLEdBQUcsRUFBRTtRQUNoQixJQUFJLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsT0FBTztZQUNsQixPQUFPLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUM5RSxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFTSx3Q0FBVzs7O0lBQWxCO1FBQ0UsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBRU8seUNBQVk7Ozs7O0lBQXBCLFVBQXFCLE9BQW9CO1FBQ3ZDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDaEMsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDO1NBQzFCO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQztTQUNaO0lBQ0gsQ0FBQzs7Z0JBM0JGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzZCQVJEO0NBbUNDLEFBN0JELENBR3dDLFlBQVksR0EwQm5EO1NBMUJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcbmltcG9ydCB7IFR4dE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcbmltcG9ydCB7IE1JTUVfVFhULCBSRVRVUk4sIFRBQiB9IGZyb20gJy4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IEZpbGVFeHBvcnRlciB9IGZyb20gJy4vZmlsZS1leHBvcnRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFR4dEV4cG9ydGVyU2VydmljZSBleHRlbmRzIEZpbGVFeHBvcnRlcjxUeHRPcHRpb25zPiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVDb250ZW50KHJvd3M6IGFueVtdLCBvcHRpb25zPzogVHh0T3B0aW9ucykge1xuICAgIGxldCBjb250ZW50ID0gJyc7XG4gICAgcm93cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY29udGVudCArPSBPYmplY3QudmFsdWVzKGVsZW1lbnQpLmpvaW4odGhpcy5nZXREZWxpbWl0ZXIob3B0aW9ucykpICsgUkVUVVJOO1xuICAgIH0pO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgcHVibGljIGdldE1pbWVUeXBlKCk6IE1pbWUge1xuICAgIHJldHVybiBNSU1FX1RYVDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVsaW1pdGVyKG9wdGlvbnM/OiBUeHRPcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXIpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmRlbGltaXRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFRBQjtcbiAgICB9XG4gIH1cblxufVxuIl19