import { Injectable } from '@angular/core';
import { MIME_TXT, RETURN, TAB } from './../../constants';
import { FileExporter } from './file-exporter';
import * as i0 from "@angular/core";
export class TxtExporterService extends FileExporter {
    constructor() {
        super();
    }
    createContent(rows, options) {
        let content = '';
        rows.forEach(element => {
            content += Object.values(element).join(this.getDelimiter(options)) + RETURN;
        });
        return content;
    }
    getMimeType() {
        return MIME_TXT;
    }
    getDelimiter(options) {
        if (options && options.delimiter) {
            return options.delimiter;
        }
        else {
            return TAB;
        }
    }
}
TxtExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TxtExporterService_Factory() { return new TxtExporterService(); }, token: TxtExporterService, providedIn: "root" });
TxtExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
TxtExporterService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHh0LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiRDovYW5ndWxhcl93b3Jrc3BhY2UvbmctbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wcm9qZWN0cy9jZGstdGFibGUtZXhwb3J0ZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy90eHQtZXhwb3J0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFLL0MsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFlBQXdCO0lBRTlEO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRU0sYUFBYSxDQUFDLElBQVcsRUFBRSxPQUFvQjtRQUNwRCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNyQixPQUFPLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUM5RSxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFTyxZQUFZLENBQUMsT0FBb0I7UUFDdkMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUNoQyxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUM7U0FDMUI7YUFBTTtZQUNMLE9BQU8sR0FBRyxDQUFDO1NBQ1o7SUFDSCxDQUFDOzs7O1lBM0JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4uLy4uL21pbWUnO1xyXG5pbXBvcnQgeyBUeHRPcHRpb25zIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IE1JTUVfVFhULCBSRVRVUk4sIFRBQiB9IGZyb20gJy4vLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgRmlsZUV4cG9ydGVyIH0gZnJvbSAnLi9maWxlLWV4cG9ydGVyJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFR4dEV4cG9ydGVyU2VydmljZSBleHRlbmRzIEZpbGVFeHBvcnRlcjxUeHRPcHRpb25zPiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGVDb250ZW50KHJvd3M6IGFueVtdLCBvcHRpb25zPzogVHh0T3B0aW9ucykge1xyXG4gICAgbGV0IGNvbnRlbnQgPSAnJztcclxuICAgIHJvd3MuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgY29udGVudCArPSBPYmplY3QudmFsdWVzKGVsZW1lbnQpLmpvaW4odGhpcy5nZXREZWxpbWl0ZXIob3B0aW9ucykpICsgUkVUVVJOO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRNaW1lVHlwZSgpOiBNaW1lIHtcclxuICAgIHJldHVybiBNSU1FX1RYVDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGVsaW1pdGVyKG9wdGlvbnM/OiBUeHRPcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmRlbGltaXRlcikge1xyXG4gICAgICByZXR1cm4gb3B0aW9ucy5kZWxpbWl0ZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gVEFCO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19