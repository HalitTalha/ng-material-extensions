/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as XLSX from 'xlsx';
import { FileUtil } from '../../file-util';
/**
 * An angular service class that is used to create files out of json object arrays.
 * @abstract
 * @template T
 */
export class WorksheetExporter {
    constructor() { }
    /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    export(rows, options) {
        if (!rows) {
            throw new Error('Empty json array is provided, rows parameter is mandatory!');
        }
        /** @type {?} */
        const worksheet = XLSX.utils.json_to_sheet(rows, {
            skipHeader: true // we don't want to see object properties as our headers
        });
        this.writeToFile(worksheet, options);
    }
    /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    writeToFile(worksheet, options) {
        /** @type {?} */
        const content = this.createContent(worksheet, options);
        /** @type {?} */
        const mimeType = this.getMimeType();
        FileUtil.save(content, mimeType, options);
    }
}
if (false) {
    /**
     * @abstract
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    WorksheetExporter.prototype.createContent = function (worksheet, options) { };
    /**
     * @abstract
     * @return {?}
     */
    WorksheetExporter.prototype.getMimeType = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NoZWV0LWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy93b3Jrc2hlZXQtZXhwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRzdCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0FBTTNDLE1BQU0sT0FBZ0IsaUJBQWlCO0lBQ3JDLGdCQUFlLENBQUM7Ozs7OztJQUVULE1BQU0sQ0FBQyxJQUFnQixFQUFFLE9BQVc7UUFDekMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQztTQUMvRTs7Y0FDSyxTQUFTLEdBQW9CLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtZQUNoRSxVQUFVLEVBQUUsSUFBSSxDQUFDLHdEQUF3RDtTQUMxRSxDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRU0sV0FBVyxDQUFDLFNBQXlCLEVBQUUsT0FBVzs7Y0FDakQsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQzs7Y0FDaEQsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FLRjs7Ozs7Ozs7SUFIQyw4RUFBMkU7Ozs7O0lBQzNFLDBEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XG5pbXBvcnQgeyBFeHBvcnRlciB9IGZyb20gJy4vZXhwb3J0ZXInO1xuaW1wb3J0IHsgRmlsZVV0aWwgfSBmcm9tICcuLi8uLi9maWxlLXV0aWwnO1xuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4uLy4uL21pbWUnO1xuXG4vKipcbiAqIEFuIGFuZ3VsYXIgc2VydmljZSBjbGFzcyB0aGF0IGlzIHVzZWQgdG8gY3JlYXRlIGZpbGVzIG91dCBvZiBqc29uIG9iamVjdCBhcnJheXMuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXb3Jrc2hlZXRFeHBvcnRlcjxUIGV4dGVuZHMgT3B0aW9ucz4gaW1wbGVtZW50cyBFeHBvcnRlcjxUPiB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgZXhwb3J0KHJvd3M6IEFycmF5PGFueT4sIG9wdGlvbnM/OiBUKSB7XG4gICAgaWYgKCFyb3dzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VtcHR5IGpzb24gYXJyYXkgaXMgcHJvdmlkZWQsIHJvd3MgcGFyYW1ldGVyIGlzIG1hbmRhdG9yeSEnKTtcbiAgICB9XG4gICAgY29uc3Qgd29ya3NoZWV0OiBYTFNYLldvcmtTaGVldCA9ICBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQocm93cywge1xuICAgICAgc2tpcEhlYWRlcjogdHJ1ZSAvLyB3ZSBkb24ndCB3YW50IHRvIHNlZSBvYmplY3QgcHJvcGVydGllcyBhcyBvdXIgaGVhZGVyc1xuICAgIH0pO1xuICAgIHRoaXMud3JpdGVUb0ZpbGUod29ya3NoZWV0LCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyB3cml0ZVRvRmlsZSh3b3Jrc2hlZXQ6IFhMU1guV29ya1NoZWV0LCBvcHRpb25zPzogVCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNyZWF0ZUNvbnRlbnQod29ya3NoZWV0LCBvcHRpb25zKTtcbiAgICBjb25zdCBtaW1lVHlwZSA9IHRoaXMuZ2V0TWltZVR5cGUoKTtcbiAgICBGaWxlVXRpbC5zYXZlKGNvbnRlbnQsIG1pbWVUeXBlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCBjcmVhdGVDb250ZW50KHdvcmtzaGVldDogWExTWC5Xb3JrU2hlZXQsIG9wdGlvbnM/OiBUKTogYW55O1xuICBwdWJsaWMgYWJzdHJhY3QgZ2V0TWltZVR5cGUoKTogTWltZTtcblxufVxuIl19