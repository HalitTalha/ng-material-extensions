import { __awaiter } from "tslib";
import { COMMA, MIME_CSV, BOM } from './../../constants';
import { Injectable } from '@angular/core';
import { WorksheetExporter } from './worksheet-exporter';
import { SheetjsHelperService } from '../sheetjs-helper.service';
import * as i0 from "@angular/core";
import * as i1 from "../sheetjs-helper.service";
export class CsvExporterService extends WorksheetExporter {
    constructor(sheetJsHelper) {
        super(sheetJsHelper);
    }
    workSheetToContent(worksheet, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const content = (yield this.sheetJsHelper.getXlsx()).utils.sheet_to_csv(worksheet, { FS: (_a = options === null || options === void 0 ? void 0 : options.delimiter) !== null && _a !== void 0 ? _a : COMMA });
            return BOM + content;
        });
    }
    getMimeType() {
        return MIME_CSV;
    }
}
CsvExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CsvExporterService_Factory() { return new CsvExporterService(i0.ɵɵinject(i1.SheetjsHelperService)); }, token: CsvExporterService, providedIn: "root" });
CsvExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CsvExporterService.ctorParameters = () => [
    { type: SheetjsHelperService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiRDovYW5ndWxhcl93b3Jrc3BhY2UvbmctbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wcm9qZWN0cy9jZGstdGFibGUtZXhwb3J0ZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy9jc3YtZXhwb3J0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBS2pFLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxpQkFBNkI7SUFFbkUsWUFBWSxhQUFtQztRQUM3QyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVZLGtCQUFrQixDQUFDLFNBQW9CLEVBQUUsT0FBb0I7OztZQUN4RSxNQUFNLE9BQU8sR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxRQUFFLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxTQUFTLG1DQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDeEgsT0FBTyxHQUFHLEdBQUcsT0FBTyxDQUFDOztLQUN0QjtJQUVNLFdBQVc7UUFDaEIsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7OztZQWhCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUpRLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTU1BLCBNSU1FX0NTViwgQk9NIH0gZnJvbSAnLi8uLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBUeHRPcHRpb25zIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV29ya1NoZWV0IH0gZnJvbSAneGxzeCc7XHJcbmltcG9ydCB7IFdvcmtzaGVldEV4cG9ydGVyIH0gZnJvbSAnLi93b3Jrc2hlZXQtZXhwb3J0ZXInO1xyXG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XHJcbmltcG9ydCB7IFNoZWV0anNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hlZXRqcy1oZWxwZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDc3ZFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBXb3Jrc2hlZXRFeHBvcnRlcjxUeHRPcHRpb25zPiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNoZWV0SnNIZWxwZXI6IFNoZWV0anNIZWxwZXJTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihzaGVldEpzSGVscGVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyB3b3JrU2hlZXRUb0NvbnRlbnQod29ya3NoZWV0OiBXb3JrU2hlZXQsIG9wdGlvbnM/OiBUeHRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSAoYXdhaXQgdGhpcy5zaGVldEpzSGVscGVyLmdldFhsc3goKSkudXRpbHMuc2hlZXRfdG9fY3N2KHdvcmtzaGVldCwgeyBGUzogb3B0aW9ucz8uZGVsaW1pdGVyID8/IENPTU1BIH0pO1xyXG4gICAgcmV0dXJuIEJPTSArIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TWltZVR5cGUoKTogTWltZSB7XHJcbiAgICByZXR1cm4gTUlNRV9DU1Y7XHJcbiAgfVxyXG59XHJcbiJdfQ==