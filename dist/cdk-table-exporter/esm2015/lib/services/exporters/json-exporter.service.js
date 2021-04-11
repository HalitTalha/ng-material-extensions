import { Injectable } from '@angular/core';
import { FileExporter } from './file-exporter';
import { MIME_JSON } from '../../constants';
import * as i0 from "@angular/core";
export class JsonExporterService extends FileExporter {
    constructor() {
        super();
    }
    createContent(rows, options) {
        return JSON.stringify(rows);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkQ6L2FuZ3VsYXJfd29ya3NwYWNlL25nLW1hdGVyaWFsLWV4dGVuc2lvbnMvcHJvamVjdHMvY2RrLXRhYmxlLWV4cG9ydGVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBvcnRlcnMvanNvbi1leHBvcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFLNUMsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFlBQXFCO0lBRTVEO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRU0sYUFBYSxDQUFDLElBQVcsRUFBRSxPQUFpQjtRQUNqRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNPLFdBQVc7UUFDakIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7OztZQWRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xyXG5pbXBvcnQgeyBGaWxlRXhwb3J0ZXIgfSBmcm9tICcuL2ZpbGUtZXhwb3J0ZXInO1xyXG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XHJcbmltcG9ydCB7IE1JTUVfSlNPTiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKc29uRXhwb3J0ZXJTZXJ2aWNlIGV4dGVuZHMgRmlsZUV4cG9ydGVyPE9wdGlvbnM+IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZUNvbnRlbnQocm93czogYW55W10sIG9wdGlvbnM/OiBPcHRpb25zKSB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocm93cyk7XHJcbiAgfVxyXG4gICBwdWJsaWMgZ2V0TWltZVR5cGUoKTogTWltZSB7XHJcbiAgICByZXR1cm4gTUlNRV9KU09OO1xyXG4gIH1cclxuXHJcbn1cclxuIl19