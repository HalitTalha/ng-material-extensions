import { __extends } from "tslib";
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
    TxtExporterService.ɵfac = function TxtExporterService_Factory(t) { return new (t || TxtExporterService)(); };
    TxtExporterService.ɵprov = i0.ɵɵdefineInjectable({ token: TxtExporterService, factory: TxtExporterService.ɵfac, providedIn: 'root' });
    return TxtExporterService;
}(FileExporter));
export { TxtExporterService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TxtExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHh0LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3R4dC1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFL0M7SUFHd0Msc0NBQXdCO0lBRTlEO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBRU0sMENBQWEsR0FBcEIsVUFBcUIsSUFBVyxFQUFFLE9BQW9CO1FBQXRELGlCQU1DO1FBTEMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ2xCLE9BQU8sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQzlFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVNLHdDQUFXLEdBQWxCO1FBQ0UsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVPLHlDQUFZLEdBQXBCLFVBQXFCLE9BQW9CO1FBQ3ZDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDaEMsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDO1NBQzFCO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQztTQUNaO0lBQ0gsQ0FBQzt3RkF4QlUsa0JBQWtCOzhEQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZqQixNQUFNOzZCQVBwQjtDQW1DQyxBQTdCRCxDQUd3QyxZQUFZLEdBMEJuRDtTQTFCWSxrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUg5QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XG5pbXBvcnQgeyBUeHRPcHRpb25zIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XG5pbXBvcnQgeyBNSU1FX1RYVCwgUkVUVVJOLCBUQUIgfSBmcm9tICcuLy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBGaWxlRXhwb3J0ZXIgfSBmcm9tICcuL2ZpbGUtZXhwb3J0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUeHRFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBGaWxlRXhwb3J0ZXI8VHh0T3B0aW9ucz4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlQ29udGVudChyb3dzOiBhbnlbXSwgb3B0aW9ucz86IFR4dE9wdGlvbnMpIHtcbiAgICBsZXQgY29udGVudCA9ICcnO1xuICAgIHJvd3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnRlbnQgKz0gT2JqZWN0LnZhbHVlcyhlbGVtZW50KS5qb2luKHRoaXMuZ2V0RGVsaW1pdGVyKG9wdGlvbnMpKSArIFJFVFVSTjtcbiAgICB9KTtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNaW1lVHlwZSgpOiBNaW1lIHtcbiAgICByZXR1cm4gTUlNRV9UWFQ7XG4gIH1cblxuICBwcml2YXRlIGdldERlbGltaXRlcihvcHRpb25zPzogVHh0T3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZGVsaW1pdGVyKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5kZWxpbWl0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBUQUI7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==