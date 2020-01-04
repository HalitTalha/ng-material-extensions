/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FileUtil } from '../../file-util';
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
FileExporter = /** @class */ (function () {
    function FileExporter() {
    }
    /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    FileExporter.prototype.export = /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    function (rows, options) {
        if (!rows) {
            throw new Error('Empty json array is provided, rows parameter is mandatory!');
        }
        /** @type {?} */
        var content = this.createContent(rows, options);
        /** @type {?} */
        var mimeType = this.getMimeType();
        FileUtil.save(content, mimeType, options);
    };
    return FileExporter;
}());
/**
 * @abstract
 * @template T
 */
export { FileExporter };
if (false) {
    /**
     * @abstract
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    FileExporter.prototype.createContent = function (rows, options) { };
    /**
     * @abstract
     * @return {?}
     */
    FileExporter.prototype.getMimeType = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1leHBvcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBvcnRlcnMvZmlsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztBQUkzQzs7Ozs7SUFDRTtJQUFlLENBQUM7Ozs7OztJQUVULDZCQUFNOzs7OztJQUFiLFVBQWMsSUFBZ0IsRUFBRSxPQUFXO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLDREQUE0RCxDQUFDLENBQUM7U0FDL0U7O1lBQ0ssT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQzs7WUFDM0MsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFJSCxtQkFBQztBQUFELENBQUMsQUFkRCxJQWNDOzs7Ozs7Ozs7Ozs7O0lBRkMsb0VBQWtFOzs7OztJQUNsRSxxREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWxlVXRpbCB9IGZyb20gJy4uLy4uL2ZpbGUtdXRpbCc7XHJcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcclxuaW1wb3J0IHsgRXhwb3J0ZXIgfSBmcm9tICcuL2V4cG9ydGVyJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWxlRXhwb3J0ZXI8VD4gaW1wbGVtZW50cyBFeHBvcnRlcjxUPiB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgZXhwb3J0KHJvd3M6IEFycmF5PGFueT4sIG9wdGlvbnM/OiBUKSB7XHJcbiAgICBpZiAoIXJvd3MpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbXB0eSBqc29uIGFycmF5IGlzIHByb3ZpZGVkLCByb3dzIHBhcmFtZXRlciBpcyBtYW5kYXRvcnkhJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jcmVhdGVDb250ZW50KHJvd3MsIG9wdGlvbnMpO1xyXG4gICAgY29uc3QgbWltZVR5cGUgPSB0aGlzLmdldE1pbWVUeXBlKCk7XHJcbiAgICBGaWxlVXRpbC5zYXZlKGNvbnRlbnQsIG1pbWVUeXBlLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhYnN0cmFjdCBjcmVhdGVDb250ZW50KHJvd3M6IEFycmF5PGFueT4sIG9wdGlvbnM/OiBUKTogYW55O1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRNaW1lVHlwZSgpOiBNaW1lO1xyXG59XHJcbiJdfQ==