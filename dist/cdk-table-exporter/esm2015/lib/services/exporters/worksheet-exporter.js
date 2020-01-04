/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as XLSX from 'xlsx';
import { FileExporter } from './file-exporter';
/**
 * An angular service class that is used to create files out of json object arrays.
 * @abstract
 * @template T
 */
export class WorksheetExporter extends FileExporter {
    constructor() {
        super();
    }
    /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    createContent(rows, options) {
        /** @type {?} */
        const workSheet = XLSX.utils.json_to_sheet(rows, {
            skipHeader: true // we don't want to see object properties as our headers
        });
        return this.workSheetToContent(workSheet, options);
    }
}
if (false) {
    /**
     * @abstract
     * @param {?} workSheet
     * @param {?=} options
     * @return {?}
     */
    WorksheetExporter.prototype.workSheetToContent = function (workSheet, options) { };
    /**
     * @abstract
     * @return {?}
     */
    WorksheetExporter.prototype.getMimeType = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NoZWV0LWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy93b3Jrc2hlZXQtZXhwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRTdCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0FBSS9DLE1BQU0sT0FBZ0IsaUJBQXFCLFNBQVEsWUFBZTtJQUVoRTtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQzs7Ozs7O0lBRU0sYUFBYSxDQUFDLElBQWdCLEVBQUUsT0FBVzs7Y0FDMUMsU0FBUyxHQUFvQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7WUFDaEUsVUFBVSxFQUFFLElBQUksQ0FBQyx3REFBd0Q7U0FDMUUsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBSUY7Ozs7Ozs7O0lBSEMsbUZBQWdGOzs7OztJQUNoRiwwREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4uLy4uL21pbWUnO1xuaW1wb3J0IHsgRmlsZUV4cG9ydGVyIH0gZnJvbSAnLi9maWxlLWV4cG9ydGVyJztcbi8qKlxuICogQW4gYW5ndWxhciBzZXJ2aWNlIGNsYXNzIHRoYXQgaXMgdXNlZCB0byBjcmVhdGUgZmlsZXMgb3V0IG9mIGpzb24gb2JqZWN0IGFycmF5cy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdvcmtzaGVldEV4cG9ydGVyPFQ+IGV4dGVuZHMgRmlsZUV4cG9ydGVyPFQ+IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZUNvbnRlbnQocm93czogQXJyYXk8YW55Piwgb3B0aW9ucz86IFQpOiBhbnkge1xuICAgIGNvbnN0IHdvcmtTaGVldDogWExTWC5Xb3JrU2hlZXQgPSAgWExTWC51dGlscy5qc29uX3RvX3NoZWV0KHJvd3MsIHtcbiAgICAgIHNraXBIZWFkZXI6IHRydWUgLy8gd2UgZG9uJ3Qgd2FudCB0byBzZWUgb2JqZWN0IHByb3BlcnRpZXMgYXMgb3VyIGhlYWRlcnNcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy53b3JrU2hlZXRUb0NvbnRlbnQod29ya1NoZWV0LCBvcHRpb25zKTtcbiAgfVxuICBwdWJsaWMgYWJzdHJhY3Qgd29ya1NoZWV0VG9Db250ZW50KHdvcmtTaGVldDogWExTWC5Xb3JrU2hlZXQsIG9wdGlvbnM/OiBUKTogYW55O1xuICBwdWJsaWMgYWJzdHJhY3QgZ2V0TWltZVR5cGUoKTogTWltZTtcblxufVxuIl19