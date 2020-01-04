/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as XLSX from 'xlsx';
import { FileExporter } from './file-exporter';
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
WorksheetExporter = /** @class */ (function (_super) {
    tslib_1.__extends(WorksheetExporter, _super);
    function WorksheetExporter() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    WorksheetExporter.prototype.createContent = /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    function (rows, options) {
        /** @type {?} */
        var workSheet = XLSX.utils.json_to_sheet(rows, {
            skipHeader: true // we don't want to see object properties as our headers
        });
        return this.workSheetToContent(workSheet, options);
    };
    return WorksheetExporter;
}(FileExporter));
/**
 * An angular service class that is used to create files out of json object arrays.
 * @abstract
 * @template T
 */
export { WorksheetExporter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NoZWV0LWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy93b3Jrc2hlZXQtZXhwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUU3QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7OztBQUkvQzs7Ozs7O0lBQW1ELDZDQUFlO0lBRWhFO2VBQ0UsaUJBQU87SUFDVCxDQUFDOzs7Ozs7SUFFTSx5Q0FBYTs7Ozs7SUFBcEIsVUFBcUIsSUFBZ0IsRUFBRSxPQUFXOztZQUMxQyxTQUFTLEdBQW9CLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtZQUNoRSxVQUFVLEVBQUUsSUFBSSxDQUFDLHdEQUF3RDtTQUMxRSxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFJSCx3QkFBQztBQUFELENBQUMsQUFmRCxDQUFtRCxZQUFZLEdBZTlEOzs7Ozs7Ozs7Ozs7OztJQUhDLG1GQUFnRjs7Ozs7SUFDaEYsMERBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcbmltcG9ydCB7IEZpbGVFeHBvcnRlciB9IGZyb20gJy4vZmlsZS1leHBvcnRlcic7XG4vKipcbiAqIEFuIGFuZ3VsYXIgc2VydmljZSBjbGFzcyB0aGF0IGlzIHVzZWQgdG8gY3JlYXRlIGZpbGVzIG91dCBvZiBqc29uIG9iamVjdCBhcnJheXMuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXb3Jrc2hlZXRFeHBvcnRlcjxUPiBleHRlbmRzIEZpbGVFeHBvcnRlcjxUPiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVDb250ZW50KHJvd3M6IEFycmF5PGFueT4sIG9wdGlvbnM/OiBUKTogYW55IHtcbiAgICBjb25zdCB3b3JrU2hlZXQ6IFhMU1guV29ya1NoZWV0ID0gIFhMU1gudXRpbHMuanNvbl90b19zaGVldChyb3dzLCB7XG4gICAgICBza2lwSGVhZGVyOiB0cnVlIC8vIHdlIGRvbid0IHdhbnQgdG8gc2VlIG9iamVjdCBwcm9wZXJ0aWVzIGFzIG91ciBoZWFkZXJzXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMud29ya1NoZWV0VG9Db250ZW50KHdvcmtTaGVldCwgb3B0aW9ucyk7XG4gIH1cbiAgcHVibGljIGFic3RyYWN0IHdvcmtTaGVldFRvQ29udGVudCh3b3JrU2hlZXQ6IFhMU1guV29ya1NoZWV0LCBvcHRpb25zPzogVCk6IGFueTtcbiAgcHVibGljIGFic3RyYWN0IGdldE1pbWVUeXBlKCk6IE1pbWU7XG5cbn1cbiJdfQ==