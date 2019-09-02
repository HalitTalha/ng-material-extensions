/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ExportType } from './export-type';
import * as FileSaver from 'file-saver';
import { MAT_TABLE_EXPORTER, P, XLS_REGEX } from './constants';
var FileUtil = /** @class */ (function () {
    function FileUtil() {
    }
    /**
     * @param {?} content
     * @param {?} mime
     * @param {?=} options
     * @return {?}
     */
    FileUtil.save = /**
     * @param {?} content
     * @param {?} mime
     * @param {?=} options
     * @return {?}
     */
    function (content, mime, options) {
        /** @type {?} */
        var blob = new Blob([content], { type: mime.contentTypeHeader });
        /** @type {?} */
        var fileName = MAT_TABLE_EXPORTER;
        if (options && options.fileName) {
            fileName = options.fileName;
        }
        FileSaver.saveAs(blob, fileName + mime.extension);
    };
    /**
     * @param {?} fileName
     * @return {?}
     */
    FileUtil.isXls = /**
     * @param {?} fileName
     * @return {?}
     */
    function (fileName) {
        return fileName.toLowerCase().match(XLS_REGEX) != null;
    };
    /**
     * @param {?=} fileName
     * @return {?}
     */
    FileUtil.identifyExportType = /**
     * @param {?=} fileName
     * @return {?}
     */
    function (fileName) {
        if (fileName && FileUtil.isXls(fileName)) {
            return ExportType.XLS;
        }
        else {
            return ExportType.XLSX;
        }
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    FileUtil.removeExtension = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        options.fileName = options.fileName.split(P)[0];
    };
    return FileUtil;
}());
export { FileUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2ZpbGUtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssU0FBUyxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUkvRDtJQUFBO0lBeUJBLENBQUM7Ozs7Ozs7SUF4QmUsYUFBSTs7Ozs7O0lBQWxCLFVBQW1CLE9BQWUsRUFBRSxJQUFVLEVBQUUsT0FBaUI7O1lBQ3pELElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxDQUFDOztZQUM1RCxRQUFRLEdBQUcsa0JBQWtCO1FBQ2pDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDL0IsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7U0FDN0I7UUFDRCxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRWEsY0FBSzs7OztJQUFuQixVQUFvQixRQUFnQjtRQUNsQyxPQUFPLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRWEsMkJBQWtCOzs7O0lBQWhDLFVBQWlDLFFBQWlCO1FBQ2hELElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDeEMsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7OztJQUVhLHdCQUFlOzs7O0lBQTdCLFVBQThCLE9BQWlCO1FBQzdDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXhwb3J0VHlwZSB9IGZyb20gJy4vZXhwb3J0LXR5cGUnO1xyXG5pbXBvcnQgKiBhcyBGaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IE1BVF9UQUJMRV9FWFBPUlRFUiwgUCwgWExTX1JFR0VYIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi9taW1lJztcclxuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVV0aWwge1xyXG4gIHB1YmxpYyBzdGF0aWMgc2F2ZShjb250ZW50OiBzdHJpbmcsIG1pbWU6IE1pbWUsIG9wdGlvbnM/OiBPcHRpb25zKSB7XHJcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2NvbnRlbnRdLCB7dHlwZTogbWltZS5jb250ZW50VHlwZUhlYWRlcn0pO1xyXG4gICAgbGV0IGZpbGVOYW1lID0gTUFUX1RBQkxFX0VYUE9SVEVSO1xyXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5maWxlTmFtZSkge1xyXG4gICAgICBmaWxlTmFtZSA9IG9wdGlvbnMuZmlsZU5hbWU7XHJcbiAgICB9XHJcbiAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsIGZpbGVOYW1lICsgbWltZS5leHRlbnNpb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpc1hscyhmaWxlTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5tYXRjaChYTFNfUkVHRVgpICE9IG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlkZW50aWZ5RXhwb3J0VHlwZShmaWxlTmFtZT86IHN0cmluZyk6IEV4cG9ydFR5cGUge1xyXG4gICAgaWYgKGZpbGVOYW1lICYmIEZpbGVVdGlsLmlzWGxzKGZpbGVOYW1lKSkge1xyXG4gICAgICByZXR1cm4gRXhwb3J0VHlwZS5YTFM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gRXhwb3J0VHlwZS5YTFNYO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZW1vdmVFeHRlbnNpb24ob3B0aW9ucz86IE9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMuZmlsZU5hbWUgPSBvcHRpb25zLmZpbGVOYW1lLnNwbGl0KFApWzBdO1xyXG4gIH1cclxufVxyXG4iXX0=