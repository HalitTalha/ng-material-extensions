/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ExportType } from './export-type';
import * as FileSaver from 'file-saver';
import { MAT_TABLE_EXPORTER, DOT, XLS_REGEX } from './constants';
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
        options.fileName = options.fileName.split(DOT)[0];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2ZpbGUtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssU0FBUyxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUlqRSxNQUFNLE9BQU8sUUFBUTs7Ozs7OztJQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBZSxFQUFFLElBQVUsRUFBRSxPQUFpQjs7Y0FDekQsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFDLENBQUM7O1lBQzVELFFBQVEsR0FBRyxrQkFBa0I7UUFDakMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUMvQixRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUM3QjtRQUNELFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQWdCO1FBQ2xDLE9BQU8sUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsa0JBQWtCLENBQUMsUUFBaUI7UUFDaEQsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN4QyxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUM7U0FDdkI7YUFBTTtZQUNMLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFpQjtRQUM3QyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4cG9ydFR5cGUgfSBmcm9tICcuL2V4cG9ydC10eXBlJztcclxuaW1wb3J0ICogYXMgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgeyBNQVRfVEFCTEVfRVhQT1JURVIsIERPVCwgWExTX1JFR0VYIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi9taW1lJztcclxuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVV0aWwge1xyXG4gIHB1YmxpYyBzdGF0aWMgc2F2ZShjb250ZW50OiBzdHJpbmcsIG1pbWU6IE1pbWUsIG9wdGlvbnM/OiBPcHRpb25zKSB7XHJcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2NvbnRlbnRdLCB7dHlwZTogbWltZS5jb250ZW50VHlwZUhlYWRlcn0pO1xyXG4gICAgbGV0IGZpbGVOYW1lID0gTUFUX1RBQkxFX0VYUE9SVEVSO1xyXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5maWxlTmFtZSkge1xyXG4gICAgICBmaWxlTmFtZSA9IG9wdGlvbnMuZmlsZU5hbWU7XHJcbiAgICB9XHJcbiAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsIGZpbGVOYW1lICsgbWltZS5leHRlbnNpb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpc1hscyhmaWxlTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5tYXRjaChYTFNfUkVHRVgpICE9IG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlkZW50aWZ5RXhwb3J0VHlwZShmaWxlTmFtZT86IHN0cmluZyk6IEV4cG9ydFR5cGUge1xyXG4gICAgaWYgKGZpbGVOYW1lICYmIEZpbGVVdGlsLmlzWGxzKGZpbGVOYW1lKSkge1xyXG4gICAgICByZXR1cm4gRXhwb3J0VHlwZS5YTFM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gRXhwb3J0VHlwZS5YTFNYO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZW1vdmVFeHRlbnNpb24ob3B0aW9ucz86IE9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMuZmlsZU5hbWUgPSBvcHRpb25zLmZpbGVOYW1lLnNwbGl0KERPVClbMF07XHJcbiAgfVxyXG59XHJcbiJdfQ==