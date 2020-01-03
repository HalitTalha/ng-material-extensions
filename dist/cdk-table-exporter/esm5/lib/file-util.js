/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2ZpbGUtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssU0FBUyxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUkvRDtJQUFBO0lBeUJBLENBQUM7Ozs7Ozs7SUF4QmUsYUFBSTs7Ozs7O0lBQWxCLFVBQW1CLE9BQWUsRUFBRSxJQUFVLEVBQUUsT0FBaUI7O1lBQ3pELElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxDQUFDOztZQUM1RCxRQUFRLEdBQUcsa0JBQWtCO1FBQ2pDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDL0IsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7U0FDN0I7UUFDRCxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRWEsY0FBSzs7OztJQUFuQixVQUFvQixRQUFnQjtRQUNsQyxPQUFPLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRWEsMkJBQWtCOzs7O0lBQWhDLFVBQWlDLFFBQWlCO1FBQ2hELElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDeEMsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7OztJQUVhLHdCQUFlOzs7O0lBQTdCLFVBQThCLE9BQWlCO1FBQzdDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXhwb3J0VHlwZSB9IGZyb20gJy4vZXhwb3J0LXR5cGUnO1xuaW1wb3J0ICogYXMgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0IHsgTUFUX1RBQkxFX0VYUE9SVEVSLCBQLCBYTFNfUkVHRVggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi9taW1lJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgRmlsZVV0aWwge1xuICBwdWJsaWMgc3RhdGljIHNhdmUoY29udGVudDogc3RyaW5nLCBtaW1lOiBNaW1lLCBvcHRpb25zPzogT3B0aW9ucykge1xuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbY29udGVudF0sIHt0eXBlOiBtaW1lLmNvbnRlbnRUeXBlSGVhZGVyfSk7XG4gICAgbGV0IGZpbGVOYW1lID0gTUFUX1RBQkxFX0VYUE9SVEVSO1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZmlsZU5hbWUpIHtcbiAgICAgIGZpbGVOYW1lID0gb3B0aW9ucy5maWxlTmFtZTtcbiAgICB9XG4gICAgRmlsZVNhdmVyLnNhdmVBcyhibG9iLCBmaWxlTmFtZSArIG1pbWUuZXh0ZW5zaW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNYbHMoZmlsZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmaWxlTmFtZS50b0xvd2VyQ2FzZSgpLm1hdGNoKFhMU19SRUdFWCkgIT0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaWRlbnRpZnlFeHBvcnRUeXBlKGZpbGVOYW1lPzogc3RyaW5nKTogRXhwb3J0VHlwZSB7XG4gICAgaWYgKGZpbGVOYW1lICYmIEZpbGVVdGlsLmlzWGxzKGZpbGVOYW1lKSkge1xuICAgICAgcmV0dXJuIEV4cG9ydFR5cGUuWExTO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRXhwb3J0VHlwZS5YTFNYO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVtb3ZlRXh0ZW5zaW9uKG9wdGlvbnM/OiBPcHRpb25zKSB7XG4gICAgb3B0aW9ucy5maWxlTmFtZSA9IG9wdGlvbnMuZmlsZU5hbWUuc3BsaXQoUClbMF07XG4gIH1cbn1cbiJdfQ==