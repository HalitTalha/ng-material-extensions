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
TxtExporterService.ɵfac = function TxtExporterService_Factory(t) { return new (t || TxtExporterService)(); };
TxtExporterService.ɵprov = i0.ɵɵdefineInjectable({ token: TxtExporterService, factory: TxtExporterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TxtExporterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHh0LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3R4dC1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUsvQyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsWUFBd0I7SUFFOUQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFFTSxhQUFhLENBQUMsSUFBVyxFQUFFLE9BQW9CO1FBQ3BELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQzlFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVNLFdBQVc7UUFDaEIsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVPLFlBQVksQ0FBQyxPQUFvQjtRQUN2QyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ2hDLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQztTQUMxQjthQUFNO1lBQ0wsT0FBTyxHQUFHLENBQUM7U0FDWjtJQUNILENBQUM7O29GQXhCVSxrQkFBa0I7MERBQWxCLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRmpCLE1BQU07a0RBRVAsa0JBQWtCO2NBSDlCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcbmltcG9ydCB7IFR4dE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcbmltcG9ydCB7IE1JTUVfVFhULCBSRVRVUk4sIFRBQiB9IGZyb20gJy4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IEZpbGVFeHBvcnRlciB9IGZyb20gJy4vZmlsZS1leHBvcnRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFR4dEV4cG9ydGVyU2VydmljZSBleHRlbmRzIEZpbGVFeHBvcnRlcjxUeHRPcHRpb25zPiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVDb250ZW50KHJvd3M6IGFueVtdLCBvcHRpb25zPzogVHh0T3B0aW9ucykge1xuICAgIGxldCBjb250ZW50ID0gJyc7XG4gICAgcm93cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY29udGVudCArPSBPYmplY3QudmFsdWVzKGVsZW1lbnQpLmpvaW4odGhpcy5nZXREZWxpbWl0ZXIob3B0aW9ucykpICsgUkVUVVJOO1xuICAgIH0pO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgcHVibGljIGdldE1pbWVUeXBlKCk6IE1pbWUge1xuICAgIHJldHVybiBNSU1FX1RYVDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVsaW1pdGVyKG9wdGlvbnM/OiBUeHRPcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXIpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmRlbGltaXRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFRBQjtcbiAgICB9XG4gIH1cblxufVxuIl19