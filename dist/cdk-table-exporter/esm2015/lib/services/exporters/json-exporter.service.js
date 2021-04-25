import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { FileExporter } from './file-exporter';
import { MIME_JSON } from '../../constants';
import * as i0 from "@angular/core";
export class JsonExporterService extends FileExporter {
    constructor() {
        super();
    }
    createContent(rows, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return JSON.stringify(rows);
        });
    }
    getMimeType() {
        return MIME_JSON;
    }
}
JsonExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
JsonExporterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
JsonExporterService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkQ6L2FuZ3VsYXJfd29ya3NwYWNlL25nLW1hdGVyaWFsLWV4dGVuc2lvbnMvcHJvamVjdHMvY2RrLXRhYmxlLWV4cG9ydGVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBvcnRlcnMvanNvbi1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBSzVDLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxZQUFxQjtJQUU1RDtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVZLGFBQWEsQ0FBQyxJQUFXLEVBQUUsT0FBaUI7O1lBQ3ZELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDO0tBQUE7SUFDTyxXQUFXO1FBQ2pCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7WUFkRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcclxuaW1wb3J0IHsgRmlsZUV4cG9ydGVyIH0gZnJvbSAnLi9maWxlLWV4cG9ydGVyJztcclxuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4uLy4uL21pbWUnO1xyXG5pbXBvcnQgeyBNSU1FX0pTT04gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSnNvbkV4cG9ydGVyU2VydmljZSBleHRlbmRzIEZpbGVFeHBvcnRlcjxPcHRpb25zPiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBjcmVhdGVDb250ZW50KHJvd3M6IGFueVtdLCBvcHRpb25zPzogT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocm93cyk7XHJcbiAgfVxyXG4gICBwdWJsaWMgZ2V0TWltZVR5cGUoKTogTWltZSB7XHJcbiAgICByZXR1cm4gTUlNRV9KU09OO1xyXG4gIH1cclxuXHJcbn1cclxuIl19