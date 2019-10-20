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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2ZpbGUtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssU0FBUyxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUkvRCxNQUFNLE9BQU8sUUFBUTs7Ozs7OztJQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBZSxFQUFFLElBQVUsRUFBRSxPQUFpQjs7Y0FDekQsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFDLENBQUM7O1lBQzVELFFBQVEsR0FBRyxrQkFBa0I7UUFDakMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUMvQixRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUM3QjtRQUNELFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQWdCO1FBQ2xDLE9BQU8sUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsa0JBQWtCLENBQUMsUUFBaUI7UUFDaEQsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN4QyxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUM7U0FDdkI7YUFBTTtZQUNMLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFpQjtRQUM3QyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4cG9ydFR5cGUgfSBmcm9tICcuL2V4cG9ydC10eXBlJztcclxuaW1wb3J0ICogYXMgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgeyBNQVRfVEFCTEVfRVhQT1JURVIsIFAsIFhMU19SRUdFWCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4vbWltZSc7XHJcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVVdGlsIHtcclxuICBwdWJsaWMgc3RhdGljIHNhdmUoY29udGVudDogc3RyaW5nLCBtaW1lOiBNaW1lLCBvcHRpb25zPzogT3B0aW9ucykge1xyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtjb250ZW50XSwge3R5cGU6IG1pbWUuY29udGVudFR5cGVIZWFkZXJ9KTtcclxuICAgIGxldCBmaWxlTmFtZSA9IE1BVF9UQUJMRV9FWFBPUlRFUjtcclxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZmlsZU5hbWUpIHtcclxuICAgICAgZmlsZU5hbWUgPSBvcHRpb25zLmZpbGVOYW1lO1xyXG4gICAgfVxyXG4gICAgRmlsZVNhdmVyLnNhdmVBcyhibG9iLCBmaWxlTmFtZSArIG1pbWUuZXh0ZW5zaW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNYbHMoZmlsZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpbGVOYW1lLnRvTG93ZXJDYXNlKCkubWF0Y2goWExTX1JFR0VYKSAhPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpZGVudGlmeUV4cG9ydFR5cGUoZmlsZU5hbWU/OiBzdHJpbmcpOiBFeHBvcnRUeXBlIHtcclxuICAgIGlmIChmaWxlTmFtZSAmJiBGaWxlVXRpbC5pc1hscyhmaWxlTmFtZSkpIHtcclxuICAgICAgcmV0dXJuIEV4cG9ydFR5cGUuWExTO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIEV4cG9ydFR5cGUuWExTWDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVtb3ZlRXh0ZW5zaW9uKG9wdGlvbnM/OiBPcHRpb25zKSB7XHJcbiAgICBvcHRpb25zLmZpbGVOYW1lID0gb3B0aW9ucy5maWxlTmFtZS5zcGxpdChQKVswXTtcclxuICB9XHJcbn1cclxuIl19