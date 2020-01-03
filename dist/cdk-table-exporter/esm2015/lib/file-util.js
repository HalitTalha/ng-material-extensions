/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ExportType } from './export-type';
import * as FileSaver from 'file-saver';
import { MAT_TABLE_EXPORTER, P, XLS_REGEX } from './constants';
export class FileUtil {
    /**
     * @param {?} content
     * @param {?} mime
     * @param {?=} options
     * @return {?}
     */
    static save(content, mime, options) {
        /** @type {?} */
        const blob = new Blob([content], { type: mime.contentTypeHeader });
        /** @type {?} */
        let fileName = MAT_TABLE_EXPORTER;
        if (options && options.fileName) {
            fileName = options.fileName;
        }
        FileSaver.saveAs(blob, fileName + mime.extension);
    }
    /**
     * @param {?} fileName
     * @return {?}
     */
    static isXls(fileName) {
        return fileName.toLowerCase().match(XLS_REGEX) != null;
    }
    /**
     * @param {?=} fileName
     * @return {?}
     */
    static identifyExportType(fileName) {
        if (fileName && FileUtil.isXls(fileName)) {
            return ExportType.XLS;
        }
        else {
            return ExportType.XLSX;
        }
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    static removeExtension(options) {
        options.fileName = options.fileName.split(P)[0];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2ZpbGUtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssU0FBUyxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUkvRCxNQUFNLE9BQU8sUUFBUTs7Ozs7OztJQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBZSxFQUFFLElBQVUsRUFBRSxPQUFpQjs7Y0FDekQsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFDLENBQUM7O1lBQzVELFFBQVEsR0FBRyxrQkFBa0I7UUFDakMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUMvQixRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUM3QjtRQUNELFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQWdCO1FBQ2xDLE9BQU8sUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsa0JBQWtCLENBQUMsUUFBaUI7UUFDaEQsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN4QyxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUM7U0FDdkI7YUFBTTtZQUNMLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFpQjtRQUM3QyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4cG9ydFR5cGUgfSBmcm9tICcuL2V4cG9ydC10eXBlJztcbmltcG9ydCAqIGFzIEZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJztcbmltcG9ydCB7IE1BVF9UQUJMRV9FWFBPUlRFUiwgUCwgWExTX1JFR0VYIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4vbWltZSc7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zJztcblxuZXhwb3J0IGNsYXNzIEZpbGVVdGlsIHtcbiAgcHVibGljIHN0YXRpYyBzYXZlKGNvbnRlbnQ6IHN0cmluZywgbWltZTogTWltZSwgb3B0aW9ucz86IE9wdGlvbnMpIHtcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2NvbnRlbnRdLCB7dHlwZTogbWltZS5jb250ZW50VHlwZUhlYWRlcn0pO1xuICAgIGxldCBmaWxlTmFtZSA9IE1BVF9UQUJMRV9FWFBPUlRFUjtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmZpbGVOYW1lKSB7XG4gICAgICBmaWxlTmFtZSA9IG9wdGlvbnMuZmlsZU5hbWU7XG4gICAgfVxuICAgIEZpbGVTYXZlci5zYXZlQXMoYmxvYiwgZmlsZU5hbWUgKyBtaW1lLmV4dGVuc2lvbik7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzWGxzKGZpbGVOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5tYXRjaChYTFNfUkVHRVgpICE9IG51bGw7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlkZW50aWZ5RXhwb3J0VHlwZShmaWxlTmFtZT86IHN0cmluZyk6IEV4cG9ydFR5cGUge1xuICAgIGlmIChmaWxlTmFtZSAmJiBGaWxlVXRpbC5pc1hscyhmaWxlTmFtZSkpIHtcbiAgICAgIHJldHVybiBFeHBvcnRUeXBlLlhMUztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEV4cG9ydFR5cGUuWExTWDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlbW92ZUV4dGVuc2lvbihvcHRpb25zPzogT3B0aW9ucykge1xuICAgIG9wdGlvbnMuZmlsZU5hbWUgPSBvcHRpb25zLmZpbGVOYW1lLnNwbGl0KFApWzBdO1xuICB9XG59XG4iXX0=