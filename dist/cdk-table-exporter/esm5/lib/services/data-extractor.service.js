/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var DataExtractorService = /** @class */ (function () {
    function DataExtractorService() {
    }
    /**
     * @param {?} cdkTable
     * @param {?} hiddenColumns
     * @return {?}
     */
    DataExtractorService.prototype.extractRows = /**
     * @param {?} cdkTable
     * @param {?} hiddenColumns
     * @return {?}
     */
    function (cdkTable, hiddenColumns) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, cdkTable._rowOutlet);
    };
    /**
     * @param {?} cdkTable
     * @param {?} hiddenColumns
     * @param {?} outlet
     * @return {?}
     */
    DataExtractorService.prototype.extractRow = /**
     * @param {?} cdkTable
     * @param {?} hiddenColumns
     * @param {?} outlet
     * @return {?}
     */
    function (cdkTable, hiddenColumns, outlet) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, outlet)[0];
    };
    /**
     * @private
     * @param {?} cdkTable
     * @param {?} hiddenColumns
     * @param {?} outlet
     * @return {?}
     */
    DataExtractorService.prototype.getRowsAsJsonArray = /**
     * @private
     * @param {?} cdkTable
     * @param {?} hiddenColumns
     * @param {?} outlet
     * @return {?}
     */
    function (cdkTable, hiddenColumns, outlet) {
        /** @type {?} */
        var renderedRows = this.getRenderedRows(cdkTable, outlet);
        return this.convertToJsonArray(hiddenColumns, renderedRows);
    };
    /**
     * @private
     * @param {?} cdkTable
     * @param {?} outlet
     * @return {?}
     */
    DataExtractorService.prototype.getRenderedRows = /**
     * @private
     * @param {?} cdkTable
     * @param {?} outlet
     * @return {?}
     */
    function (cdkTable, outlet) {
        return (/** @type {?} */ (cdkTable._getRenderedRows(outlet)));
    };
    /**
     * @private
     * @param {?} hiddenColumns
     * @param {?} rows
     * @return {?}
     */
    DataExtractorService.prototype.convertToJsonArray = /**
     * @private
     * @param {?} hiddenColumns
     * @param {?} rows
     * @return {?}
     */
    function (hiddenColumns, rows) {
        /** @type {?} */
        var result = new Array();
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < rows.length; i++) {
            /** @type {?} */
            var row = this.convertRow(hiddenColumns, rows[i]);
            result.push(this.createExcelItem(row));
        }
        return result;
    };
    /**
     * @private
     * @param {?} hiddenColumns
     * @param {?} row
     * @return {?}
     */
    DataExtractorService.prototype.convertRow = /**
     * @private
     * @param {?} hiddenColumns
     * @param {?} row
     * @return {?}
     */
    function (hiddenColumns, row) {
        /** @type {?} */
        var result = new Array();
        /** @type {?} */
        var cells = row.children;
        for (var i = 0; i < cells.length; i++) {
            if (!this.shouldHide(hiddenColumns, i)) {
                /** @type {?} */
                var element = cells.item(i).innerText;
                result.push(element);
            }
        }
        return result;
    };
    /**
     * @private
     * @param {?} hiddenColumns
     * @param {?} columnIndex
     * @return {?}
     */
    DataExtractorService.prototype.shouldHide = /**
     * @private
     * @param {?} hiddenColumns
     * @param {?} columnIndex
     * @return {?}
     */
    function (hiddenColumns, columnIndex) {
        if (hiddenColumns && hiddenColumns.includes(columnIndex)) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @private
     * @param {?} row
     * @return {?}
     */
    DataExtractorService.prototype.createExcelItem = /**
     * @private
     * @param {?} row
     * @return {?}
     */
    function (row) {
        return Object.assign({}, row);
    };
    DataExtractorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DataExtractorService.ctorParameters = function () { return []; };
    /** @nocollapse */ DataExtractorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DataExtractorService_Factory() { return new DataExtractorService(); }, token: DataExtractorService, providedIn: "root" });
    return DataExtractorService;
}());
export { DataExtractorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1leHRyYWN0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kYXRhLWV4dHJhY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQztJQUtFO0lBQWdCLENBQUM7Ozs7OztJQUVWLDBDQUFXOzs7OztJQUFsQixVQUFtQixRQUFhLEVBQUUsYUFBeUI7UUFDekQsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7OztJQUVNLHlDQUFVOzs7Ozs7SUFBakIsVUFBa0IsUUFBYSxFQUFFLGFBQXlCLEVBQUUsTUFBcUI7UUFDL0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7Ozs7OztJQUVPLGlEQUFrQjs7Ozs7OztJQUExQixVQUEyQixRQUFhLEVBQUUsYUFBeUIsRUFBRSxNQUFxQjs7WUFDbEYsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztRQUMzRCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7OztJQUVPLDhDQUFlOzs7Ozs7SUFBdkIsVUFBd0IsUUFBYSxFQUFFLE1BQXFCO1FBQzFELE9BQU8sbUJBQUEsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUF5QixDQUFDO0lBQ3BFLENBQUM7Ozs7Ozs7SUFFTyxpREFBa0I7Ozs7OztJQUExQixVQUEyQixhQUF5QixFQUFFLElBQTJCOztZQUN6RSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQU87UUFDL0IseUNBQXlDO1FBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDOUIsR0FBRyxHQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDeEM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBRU8seUNBQVU7Ozs7OztJQUFsQixVQUFtQixhQUF5QixFQUFFLEdBQXdCOztZQUM5RCxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVU7O1lBQzVCLEtBQUssR0FBUSxHQUFHLENBQUMsUUFBUTtRQUMvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUU7O29CQUNoQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO2dCQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBRU8seUNBQVU7Ozs7OztJQUFsQixVQUFtQixhQUF5QixFQUFFLFdBQW1CO1FBQy9ELElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDeEQsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7OztJQUVPLDhDQUFlOzs7OztJQUF2QixVQUF3QixHQUFrQjtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQXhERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzsrQkFMRDtDQTREQyxBQXpERCxJQXlEQztTQXREWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhUm93T3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YUV4dHJhY3RvclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIGV4dHJhY3RSb3dzKGNka1RhYmxlOiBhbnksIGhpZGRlbkNvbHVtbnM6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRSb3dzQXNKc29uQXJyYXkoY2RrVGFibGUsIGhpZGRlbkNvbHVtbnMsIGNka1RhYmxlLl9yb3dPdXRsZXQpO1xuICB9XG5cbiAgcHVibGljIGV4dHJhY3RSb3coY2RrVGFibGU6IGFueSwgaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Piwgb3V0bGV0OiBEYXRhUm93T3V0bGV0KTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Um93c0FzSnNvbkFycmF5KGNka1RhYmxlLCBoaWRkZW5Db2x1bW5zLCBvdXRsZXQpWzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3dzQXNKc29uQXJyYXkoY2RrVGFibGU6IGFueSwgaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Piwgb3V0bGV0OiBEYXRhUm93T3V0bGV0KTogQXJyYXk8YW55PiB7XG4gICAgY29uc3QgcmVuZGVyZWRSb3dzID0gdGhpcy5nZXRSZW5kZXJlZFJvd3MoY2RrVGFibGUsIG91dGxldCk7XG4gICAgcmV0dXJuIHRoaXMuY29udmVydFRvSnNvbkFycmF5KGhpZGRlbkNvbHVtbnMsIHJlbmRlcmVkUm93cyk7XG4gIH1cblxuICBwcml2YXRlIGdldFJlbmRlcmVkUm93cyhjZGtUYWJsZTogYW55LCBvdXRsZXQ6IERhdGFSb3dPdXRsZXQpOiBIVE1MVGFibGVSb3dFbGVtZW50W10ge1xuICAgIHJldHVybiBjZGtUYWJsZS5fZ2V0UmVuZGVyZWRSb3dzKG91dGxldCkgYXMgSFRNTFRhYmxlUm93RWxlbWVudFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9Kc29uQXJyYXkoaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Piwgcm93czogSFRNTFRhYmxlUm93RWxlbWVudFtdKTogQXJyYXk8YW55PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm93OiBBcnJheTxzdHJpbmc+ID0gdGhpcy5jb252ZXJ0Um93KGhpZGRlbkNvbHVtbnMsIHJvd3NbaV0pO1xuICAgICAgcmVzdWx0LnB1c2godGhpcy5jcmVhdGVFeGNlbEl0ZW0ocm93KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRSb3coaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Piwgcm93OiBIVE1MVGFibGVSb3dFbGVtZW50KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICBjb25zdCBjZWxsczogYW55ID0gcm93LmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5zaG91bGRIaWRlKGhpZGRlbkNvbHVtbnMsIGkpKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjZWxscy5pdGVtKGkpLmlubmVyVGV4dDtcbiAgICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHNob3VsZEhpZGUoaGlkZGVuQ29sdW1uczogQXJyYXk8YW55PiwgY29sdW1uSW5kZXg6IG51bWJlcikge1xuICAgIGlmIChoaWRkZW5Db2x1bW5zICYmIGhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uSW5kZXgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRXhjZWxJdGVtKHJvdzogQXJyYXk8c3RyaW5nPik6IGFueSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJvdyk7XG4gIH1cbn1cbiJdfQ==