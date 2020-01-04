/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ExportType } from './export-type';
import * as FileSaver from 'file-saver';
import { MAT_TABLE_EXPORTER, DOT, XLS_REGEX } from './constants';
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
        options.fileName = options.fileName.split(DOT)[0];
    };
    return FileUtil;
}());
export { FileUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2ZpbGUtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssU0FBUyxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUlqRTtJQUFBO0lBeUJBLENBQUM7Ozs7Ozs7SUF4QmUsYUFBSTs7Ozs7O0lBQWxCLFVBQW1CLE9BQWUsRUFBRSxJQUFVLEVBQUUsT0FBaUI7O1lBQ3pELElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxDQUFDOztZQUM1RCxRQUFRLEdBQUcsa0JBQWtCO1FBQ2pDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDL0IsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7U0FDN0I7UUFDRCxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRWEsY0FBSzs7OztJQUFuQixVQUFvQixRQUFnQjtRQUNsQyxPQUFPLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRWEsMkJBQWtCOzs7O0lBQWhDLFVBQWlDLFFBQWlCO1FBQ2hELElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDeEMsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7OztJQUVhLHdCQUFlOzs7O0lBQTdCLFVBQThCLE9BQWlCO1FBQzdDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXhwb3J0VHlwZSB9IGZyb20gJy4vZXhwb3J0LXR5cGUnO1xyXG5pbXBvcnQgKiBhcyBGaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IE1BVF9UQUJMRV9FWFBPUlRFUiwgRE9ULCBYTFNfUkVHRVggfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuL21pbWUnO1xyXG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXRpbCB7XHJcbiAgcHVibGljIHN0YXRpYyBzYXZlKGNvbnRlbnQ6IHN0cmluZywgbWltZTogTWltZSwgb3B0aW9ucz86IE9wdGlvbnMpIHtcclxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbY29udGVudF0sIHt0eXBlOiBtaW1lLmNvbnRlbnRUeXBlSGVhZGVyfSk7XHJcbiAgICBsZXQgZmlsZU5hbWUgPSBNQVRfVEFCTEVfRVhQT1JURVI7XHJcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmZpbGVOYW1lKSB7XHJcbiAgICAgIGZpbGVOYW1lID0gb3B0aW9ucy5maWxlTmFtZTtcclxuICAgIH1cclxuICAgIEZpbGVTYXZlci5zYXZlQXMoYmxvYiwgZmlsZU5hbWUgKyBtaW1lLmV4dGVuc2lvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzWGxzKGZpbGVOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWxlTmFtZS50b0xvd2VyQ2FzZSgpLm1hdGNoKFhMU19SRUdFWCkgIT0gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaWRlbnRpZnlFeHBvcnRUeXBlKGZpbGVOYW1lPzogc3RyaW5nKTogRXhwb3J0VHlwZSB7XHJcbiAgICBpZiAoZmlsZU5hbWUgJiYgRmlsZVV0aWwuaXNYbHMoZmlsZU5hbWUpKSB7XHJcbiAgICAgIHJldHVybiBFeHBvcnRUeXBlLlhMUztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBFeHBvcnRUeXBlLlhMU1g7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlbW92ZUV4dGVuc2lvbihvcHRpb25zPzogT3B0aW9ucykge1xyXG4gICAgb3B0aW9ucy5maWxlTmFtZSA9IG9wdGlvbnMuZmlsZU5hbWUuc3BsaXQoRE9UKVswXTtcclxuICB9XHJcbn1cclxuIl19