/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as XLSX from "xlsx";
import * as i0 from "@angular/core";
var JsonExporterService = /** @class */ (function () {
    function JsonExporterService() {
    }
    /**
     * Exports excel file by employing xlsx sheetjs
     * @param header Any json object that holds the header information of the exported excel file aka the first row of the excel
     * @param rows Any json array that will be the rows of the exported excel
     * @param fileName Exported excel file's name
     * @param sheetName The name of the sheet that keeps the exported data
     * @param hiddenColumns Properties that are wanted to be hidden, i.e. id, createdDate, auditable properties etc.
     */
    /**
     * Exports excel file by employing xlsx sheetjs
     * @param {?} header Any json object that holds the header information of the exported excel file aka the first row of the excel
     * @param {?} rows Any json array that will be the rows of the exported excel
     * @param {?} fileName Exported excel file's name
     * @param {?} sheetName The name of the sheet that keeps the exported data
     * @param {?=} hiddenColumns Properties that are wanted to be hidden, i.e. id, createdDate, auditable properties etc.
     * @return {?}
     */
    JsonExporterService.prototype.exportExcel = /**
     * Exports excel file by employing xlsx sheetjs
     * @param {?} header Any json object that holds the header information of the exported excel file aka the first row of the excel
     * @param {?} rows Any json array that will be the rows of the exported excel
     * @param {?} fileName Exported excel file's name
     * @param {?} sheetName The name of the sheet that keeps the exported data
     * @param {?=} hiddenColumns Properties that are wanted to be hidden, i.e. id, createdDate, auditable properties etc.
     * @return {?}
     */
    function (header, rows, fileName, sheetName, hiddenColumns) {
        rows.unshift(header);
        if (hiddenColumns) {
            for (var index = 0; index < rows.length; index++) {
                rows[index] = this.hideColumns(hiddenColumns, rows[index]);
            }
        }
        /** @type {?} */
        var wb = XLSX.utils.book_new();
        /** @type {?} */
        var ws = XLSX.utils.json_to_sheet(rows, {
            skipHeader: true // we are skipping header otherwise xlsx puts the properties of the given json object
        });
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
        fileName = this.appendExtensionIfNotProvided(fileName);
        /* save to file */
        XLSX.writeFile(wb, fileName);
    };
    /**
     * Hides unwanted properties of an entity
     * @param columns properties to be hidden in the returned object
     * @param item an item that corresponds to a row inside the exported excel
     */
    /**
     * Hides unwanted properties of an entity
     * @private
     * @param {?} columns properties to be hidden in the returned object
     * @param {?} item an item that corresponds to a row inside the exported excel
     * @return {?}
     */
    JsonExporterService.prototype.hideColumns = /**
     * Hides unwanted properties of an entity
     * @private
     * @param {?} columns properties to be hidden in the returned object
     * @param {?} item an item that corresponds to a row inside the exported excel
     * @return {?}
     */
    function (columns, item) {
        for (var index = 0; index < columns.length; index++) {
            /** @type {?} */
            var element = columns[index];
            delete item[element];
        }
    };
    /**
     * Provides default file extension (which is xlsx) to the parameter fileName
     */
    /**
     * Provides default file extension (which is xlsx) to the parameter fileName
     * @private
     * @param {?} fileName
     * @return {?}
     */
    JsonExporterService.prototype.appendExtensionIfNotProvided = /**
     * Provides default file extension (which is xlsx) to the parameter fileName
     * @private
     * @param {?} fileName
     * @return {?}
     */
    function (fileName) {
        if (!fileName.includes(ExcelExtension.XLSX) &&
            !fileName.includes(ExcelExtension.XLS)) {
            fileName = fileName.concat(ExcelExtension.XLSX);
        }
        return fileName;
    };
    JsonExporterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    JsonExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ JsonExporterService.ngInjectableDef = i0.defineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
    return JsonExporterService;
}());
export { JsonExporterService };
/** @enum {string} */
var ExcelExtension = {
    XLSX: ".xlsx",
    XLS: ".xls",
};
export { ExcelExtension };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2pzb24tZXhwb3J0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQzs7QUFFN0I7SUFRRTtJQUFlLENBQUM7SUFFaEI7Ozs7Ozs7T0FPRzs7Ozs7Ozs7OztJQUNJLHlDQUFXOzs7Ozs7Ozs7SUFBbEIsVUFDRSxNQUFXLEVBQ1gsSUFBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsU0FBaUIsRUFDakIsYUFBNkI7UUFFN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyQixJQUFJLGFBQWEsRUFBRTtZQUNqQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQzVEO1NBQ0Y7O1lBQ0ssRUFBRSxHQUFrQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTs7WUFDekMsRUFBRSxHQUFtQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7WUFDeEQsVUFBVSxFQUFFLElBQUksQ0FBQyxxRkFBcUY7U0FDdkcsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNoRCxRQUFRLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZELGtCQUFrQjtRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7SUFDSyx5Q0FBVzs7Ozs7OztJQUFuQixVQUFvQixPQUFzQixFQUFFLElBQVM7UUFDbkQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7O2dCQUM3QyxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNLLDBEQUE0Qjs7Ozs7O0lBQXBDLFVBQXFDLFFBQWdCO1FBQ25ELElBQ0UsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDdkMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFDdEM7WUFDQSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOztnQkFqRUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7OEJBTEQ7Q0FxRUMsQUFsRUQsSUFrRUM7U0EzRFksbUJBQW1COzs7SUE4RDlCLE1BQU8sT0FBTztJQUNkLEtBQU0sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgWExTWCBmcm9tIFwieGxzeFwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuXG4vKipcbiAqIEFuIGFuZ3VsYXIgc2VydmljZSBjbGFzcyB0aGF0IGlzIHVzZWQgdG8gY3JlYXRlIGV4Y2VsIGZpbGVzIG91dCBvZiBqc29uIG9iamVjdCBhcnJheXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBKc29uRXhwb3J0ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIC8qKlxuICAgKiBFeHBvcnRzIGV4Y2VsIGZpbGUgYnkgZW1wbG95aW5nIHhsc3ggc2hlZXRqc1xuICAgKiBAcGFyYW0gaGVhZGVyIEFueSBqc29uIG9iamVjdCB0aGF0IGhvbGRzIHRoZSBoZWFkZXIgaW5mb3JtYXRpb24gb2YgdGhlIGV4cG9ydGVkIGV4Y2VsIGZpbGUgYWthIHRoZSBmaXJzdCByb3cgb2YgdGhlIGV4Y2VsXG4gICAqIEBwYXJhbSByb3dzIEFueSBqc29uIGFycmF5IHRoYXQgd2lsbCBiZSB0aGUgcm93cyBvZiB0aGUgZXhwb3J0ZWQgZXhjZWxcbiAgICogQHBhcmFtIGZpbGVOYW1lIEV4cG9ydGVkIGV4Y2VsIGZpbGUncyBuYW1lXG4gICAqIEBwYXJhbSBzaGVldE5hbWUgVGhlIG5hbWUgb2YgdGhlIHNoZWV0IHRoYXQga2VlcHMgdGhlIGV4cG9ydGVkIGRhdGFcbiAgICogQHBhcmFtIGhpZGRlbkNvbHVtbnMgUHJvcGVydGllcyB0aGF0IGFyZSB3YW50ZWQgdG8gYmUgaGlkZGVuLCBpLmUuIGlkLCBjcmVhdGVkRGF0ZSwgYXVkaXRhYmxlIHByb3BlcnRpZXMgZXRjLlxuICAgKi9cbiAgcHVibGljIGV4cG9ydEV4Y2VsKFxuICAgIGhlYWRlcjogYW55LFxuICAgIHJvd3M6IEFycmF5PGFueT4sXG4gICAgZmlsZU5hbWU6IHN0cmluZyxcbiAgICBzaGVldE5hbWU6IHN0cmluZyxcbiAgICBoaWRkZW5Db2x1bW5zPzogQXJyYXk8c3RyaW5nPlxuICApIHtcbiAgICByb3dzLnVuc2hpZnQoaGVhZGVyKTtcblxuICAgIGlmIChoaWRkZW5Db2x1bW5zKSB7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcm93cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgcm93c1tpbmRleF0gPSB0aGlzLmhpZGVDb2x1bW5zKGhpZGRlbkNvbHVtbnMsIHJvd3NbaW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgd2I6IFhMU1guV29ya0Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgY29uc3Qgd3M6IFhMU1guV29ya1NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KHJvd3MsIHtcbiAgICAgIHNraXBIZWFkZXI6IHRydWUgLy8gd2UgYXJlIHNraXBwaW5nIGhlYWRlciBvdGhlcndpc2UgeGxzeCBwdXRzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBnaXZlbiBqc29uIG9iamVjdFxuICAgIH0pO1xuICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQod2IsIHdzLCBzaGVldE5hbWUpO1xuICAgIGZpbGVOYW1lID0gdGhpcy5hcHBlbmRFeHRlbnNpb25JZk5vdFByb3ZpZGVkKGZpbGVOYW1lKTtcbiAgICAvKiBzYXZlIHRvIGZpbGUgKi9cbiAgICBYTFNYLndyaXRlRmlsZSh3YiwgZmlsZU5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHVud2FudGVkIHByb3BlcnRpZXMgb2YgYW4gZW50aXR5XG4gICAqIEBwYXJhbSBjb2x1bW5zIHByb3BlcnRpZXMgdG8gYmUgaGlkZGVuIGluIHRoZSByZXR1cm5lZCBvYmplY3RcbiAgICogQHBhcmFtIGl0ZW0gYW4gaXRlbSB0aGF0IGNvcnJlc3BvbmRzIHRvIGEgcm93IGluc2lkZSB0aGUgZXhwb3J0ZWQgZXhjZWxcbiAgICovXG4gIHByaXZhdGUgaGlkZUNvbHVtbnMoY29sdW1uczogQXJyYXk8c3RyaW5nPiwgaXRlbTogYW55KSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbHVtbnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY29sdW1uc1tpbmRleF07XG4gICAgICBkZWxldGUgaXRlbVtlbGVtZW50XTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJvdmlkZXMgZGVmYXVsdCBmaWxlIGV4dGVuc2lvbiAod2hpY2ggaXMgeGxzeCkgdG8gdGhlIHBhcmFtZXRlciBmaWxlTmFtZVxuICAgKi9cbiAgcHJpdmF0ZSBhcHBlbmRFeHRlbnNpb25JZk5vdFByb3ZpZGVkKGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChcbiAgICAgICFmaWxlTmFtZS5pbmNsdWRlcyhFeGNlbEV4dGVuc2lvbi5YTFNYKSAmJlxuICAgICAgIWZpbGVOYW1lLmluY2x1ZGVzKEV4Y2VsRXh0ZW5zaW9uLlhMUylcbiAgICApIHtcbiAgICAgIGZpbGVOYW1lID0gZmlsZU5hbWUuY29uY2F0KEV4Y2VsRXh0ZW5zaW9uLlhMU1gpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsZU5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gRXhjZWxFeHRlbnNpb24ge1xuICBYTFNYID0gXCIueGxzeFwiLFxuICBYTFMgPSBcIi54bHNcIlxufVxuIl19