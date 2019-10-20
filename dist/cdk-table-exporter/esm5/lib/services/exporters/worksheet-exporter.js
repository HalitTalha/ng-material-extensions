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
var /**
 * An angular service class that is used to create files out of json object arrays.
 * @abstract
 * @template T
 */
WorksheetExporter = /** @class */ (function () {
    function WorksheetExporter() {
    }
    /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    WorksheetExporter.prototype.export = /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    function (rows, options) {
        if (!rows) {
            throw new Error('Empty json array is provided, rows parameter is mandatory!');
        }
        /** @type {?} */
        var worksheet = XLSX.utils.json_to_sheet(rows, {
            skipHeader: true // we don't want to see object properties as our headers
        });
        this.writeToFile(worksheet, options);
    };
    /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    WorksheetExporter.prototype.writeToFile = /**
     * @param {?} worksheet
     * @param {?=} options
     * @return {?}
     */
    function (worksheet, options) {
        /** @type {?} */
        var content = this.createContent(worksheet, options);
        /** @type {?} */
        var mimeType = this.getMimeType();
        FileUtil.save(content, mimeType, options);
    };
    return WorksheetExporter;
}());
/**
 * An angular service class that is used to create files out of json object arrays.
 * @abstract
 * @template T
 */
export { WorksheetExporter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NoZWV0LWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy93b3Jrc2hlZXQtZXhwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRzdCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0FBTTNDOzs7Ozs7SUFDRTtJQUFlLENBQUM7Ozs7OztJQUVULGtDQUFNOzs7OztJQUFiLFVBQWMsSUFBZ0IsRUFBRSxPQUFXO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLDREQUE0RCxDQUFDLENBQUM7U0FDL0U7O1lBQ0ssU0FBUyxHQUFvQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7WUFDaEUsVUFBVSxFQUFFLElBQUksQ0FBQyx3REFBd0Q7U0FDMUUsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7OztJQUVNLHVDQUFXOzs7OztJQUFsQixVQUFtQixTQUF5QixFQUFFLE9BQVc7O1lBQ2pELE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUM7O1lBQ2hELFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ25DLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBS0gsd0JBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDOzs7Ozs7Ozs7Ozs7OztJQUhDLDhFQUEyRTs7Ozs7SUFDM0UsMERBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcbmltcG9ydCB7IEV4cG9ydGVyIH0gZnJvbSAnLi9leHBvcnRlcic7XG5pbXBvcnQgeyBGaWxlVXRpbCB9IGZyb20gJy4uLy4uL2ZpbGUtdXRpbCc7XG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XG5cbi8qKlxuICogQW4gYW5ndWxhciBzZXJ2aWNlIGNsYXNzIHRoYXQgaXMgdXNlZCB0byBjcmVhdGUgZmlsZXMgb3V0IG9mIGpzb24gb2JqZWN0IGFycmF5cy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdvcmtzaGVldEV4cG9ydGVyPFQgZXh0ZW5kcyBPcHRpb25zPiBpbXBsZW1lbnRzIEV4cG9ydGVyPFQ+IHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBleHBvcnQocm93czogQXJyYXk8YW55Piwgb3B0aW9ucz86IFQpIHtcbiAgICBpZiAoIXJvd3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRW1wdHkganNvbiBhcnJheSBpcyBwcm92aWRlZCwgcm93cyBwYXJhbWV0ZXIgaXMgbWFuZGF0b3J5IScpO1xuICAgIH1cbiAgICBjb25zdCB3b3Jrc2hlZXQ6IFhMU1guV29ya1NoZWV0ID0gIFhMU1gudXRpbHMuanNvbl90b19zaGVldChyb3dzLCB7XG4gICAgICBza2lwSGVhZGVyOiB0cnVlIC8vIHdlIGRvbid0IHdhbnQgdG8gc2VlIG9iamVjdCBwcm9wZXJ0aWVzIGFzIG91ciBoZWFkZXJzXG4gICAgfSk7XG4gICAgdGhpcy53cml0ZVRvRmlsZSh3b3Jrc2hlZXQsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIHdyaXRlVG9GaWxlKHdvcmtzaGVldDogWExTWC5Xb3JrU2hlZXQsIG9wdGlvbnM/OiBUKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY3JlYXRlQ29udGVudCh3b3Jrc2hlZXQsIG9wdGlvbnMpO1xuICAgIGNvbnN0IG1pbWVUeXBlID0gdGhpcy5nZXRNaW1lVHlwZSgpO1xuICAgIEZpbGVVdGlsLnNhdmUoY29udGVudCwgbWltZVR5cGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IGNyZWF0ZUNvbnRlbnQod29ya3NoZWV0OiBYTFNYLldvcmtTaGVldCwgb3B0aW9ucz86IFQpOiBhbnk7XG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRNaW1lVHlwZSgpOiBNaW1lO1xuXG59XG4iXX0=