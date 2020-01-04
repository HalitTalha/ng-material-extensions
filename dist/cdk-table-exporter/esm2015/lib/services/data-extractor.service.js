/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DataExtractorService {
    constructor() { }
    /**
     * @param {?} cdkTable
     * @param {?} hiddenColumns
     * @return {?}
     */
    extractRows(cdkTable, hiddenColumns) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, cdkTable._rowOutlet);
    }
    /**
     * @param {?} cdkTable
     * @param {?} hiddenColumns
     * @param {?} outlet
     * @return {?}
     */
    extractRow(cdkTable, hiddenColumns, outlet) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, outlet)[0];
    }
    /**
     * @private
     * @param {?} cdkTable
     * @param {?} hiddenColumns
     * @param {?} outlet
     * @return {?}
     */
    getRowsAsJsonArray(cdkTable, hiddenColumns, outlet) {
        /** @type {?} */
        const renderedRows = this.getRenderedRows(cdkTable, outlet);
        return this.convertToJsonArray(hiddenColumns, renderedRows);
    }
    /**
     * @private
     * @param {?} cdkTable
     * @param {?} outlet
     * @return {?}
     */
    getRenderedRows(cdkTable, outlet) {
        return (/** @type {?} */ (cdkTable._getRenderedRows(outlet)));
    }
    /**
     * @private
     * @param {?} hiddenColumns
     * @param {?} rows
     * @return {?}
     */
    convertToJsonArray(hiddenColumns, rows) {
        /** @type {?} */
        const result = new Array();
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < rows.length; i++) {
            /** @type {?} */
            const row = this.convertRow(hiddenColumns, rows[i]);
            result.push(this.createExcelItem(row));
        }
        return result;
    }
    /**
     * @private
     * @param {?} hiddenColumns
     * @param {?} row
     * @return {?}
     */
    convertRow(hiddenColumns, row) {
        /** @type {?} */
        const result = new Array();
        /** @type {?} */
        const cells = row.children;
        for (let i = 0; i < cells.length; i++) {
            if (!this.shouldHide(hiddenColumns, i)) {
                /** @type {?} */
                const element = cells.item(i).innerText;
                result.push(element);
            }
        }
        return result;
    }
    /**
     * @private
     * @param {?} hiddenColumns
     * @param {?} columnIndex
     * @return {?}
     */
    shouldHide(hiddenColumns, columnIndex) {
        if (hiddenColumns && hiddenColumns.includes(columnIndex)) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @private
     * @param {?} row
     * @return {?}
     */
    createExcelItem(row) {
        return Object.assign({}, row);
    }
}
DataExtractorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DataExtractorService.ctorParameters = () => [];
/** @nocollapse */ DataExtractorService.ngInjectableDef = i0.defineInjectable({ factory: function DataExtractorService_Factory() { return new DataExtractorService(); }, token: DataExtractorService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1leHRyYWN0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kYXRhLWV4dHJhY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLGdCQUFnQixDQUFDOzs7Ozs7SUFFVixXQUFXLENBQUMsUUFBYSxFQUFFLGFBQXlCO1FBQ3pELE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7Ozs7SUFFTSxVQUFVLENBQUMsUUFBYSxFQUFFLGFBQXlCLEVBQUUsTUFBcUI7UUFDL0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7Ozs7OztJQUVPLGtCQUFrQixDQUFDLFFBQWEsRUFBRSxhQUF5QixFQUFFLE1BQXFCOztjQUNsRixZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO1FBQzNELE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7O0lBRU8sZUFBZSxDQUFDLFFBQWEsRUFBRSxNQUFxQjtRQUMxRCxPQUFPLG1CQUFBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBeUIsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsYUFBeUIsRUFBRSxJQUEyQjs7Y0FDekUsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFPO1FBQy9CLHlDQUF5QztRQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQzlCLEdBQUcsR0FBa0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7OztJQUVPLFVBQVUsQ0FBQyxhQUF5QixFQUFFLEdBQXdCOztjQUM5RCxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVU7O2NBQzVCLEtBQUssR0FBUSxHQUFHLENBQUMsUUFBUTtRQUMvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUU7O3NCQUNoQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO2dCQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBRU8sVUFBVSxDQUFDLGFBQXlCLEVBQUUsV0FBbUI7UUFDL0QsSUFBSSxhQUFhLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN4RCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLEdBQWtCO1FBQ3hDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBeERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFSb3dPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhRXh0cmFjdG9yU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgZXh0cmFjdFJvd3MoY2RrVGFibGU6IGFueSwgaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldFJvd3NBc0pzb25BcnJheShjZGtUYWJsZSwgaGlkZGVuQ29sdW1ucywgY2RrVGFibGUuX3Jvd091dGxldCk7XG4gIH1cblxuICBwdWJsaWMgZXh0cmFjdFJvdyhjZGtUYWJsZTogYW55LCBoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+LCBvdXRsZXQ6IERhdGFSb3dPdXRsZXQpOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRSb3dzQXNKc29uQXJyYXkoY2RrVGFibGUsIGhpZGRlbkNvbHVtbnMsIG91dGxldClbMF07XG4gIH1cblxuICBwcml2YXRlIGdldFJvd3NBc0pzb25BcnJheShjZGtUYWJsZTogYW55LCBoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+LCBvdXRsZXQ6IERhdGFSb3dPdXRsZXQpOiBBcnJheTxhbnk+IHtcbiAgICBjb25zdCByZW5kZXJlZFJvd3MgPSB0aGlzLmdldFJlbmRlcmVkUm93cyhjZGtUYWJsZSwgb3V0bGV0KTtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9Kc29uQXJyYXkoaGlkZGVuQ29sdW1ucywgcmVuZGVyZWRSb3dzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmVuZGVyZWRSb3dzKGNka1RhYmxlOiBhbnksIG91dGxldDogRGF0YVJvd091dGxldCk6IEhUTUxUYWJsZVJvd0VsZW1lbnRbXSB7XG4gICAgcmV0dXJuIGNka1RhYmxlLl9nZXRSZW5kZXJlZFJvd3Mob3V0bGV0KSBhcyBIVE1MVGFibGVSb3dFbGVtZW50W107XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRUb0pzb25BcnJheShoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+LCByb3dzOiBIVE1MVGFibGVSb3dFbGVtZW50W10pOiBBcnJheTxhbnk+IHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8YW55PigpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCByb3c6IEFycmF5PHN0cmluZz4gPSB0aGlzLmNvbnZlcnRSb3coaGlkZGVuQ29sdW1ucywgcm93c1tpXSk7XG4gICAgICByZXN1bHQucHVzaCh0aGlzLmNyZWF0ZUV4Y2VsSXRlbShyb3cpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFJvdyhoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+LCByb3c6IEhUTUxUYWJsZVJvd0VsZW1lbnQpOiBBcnJheTxzdHJpbmc+IHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgIGNvbnN0IGNlbGxzOiBhbnkgPSByb3cuY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLnNob3VsZEhpZGUoaGlkZGVuQ29sdW1ucywgaSkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNlbGxzLml0ZW0oaSkuaW5uZXJUZXh0O1xuICAgICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkSGlkZShoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+LCBjb2x1bW5JbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGhpZGRlbkNvbHVtbnMgJiYgaGlkZGVuQ29sdW1ucy5pbmNsdWRlcyhjb2x1bW5JbmRleCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVFeGNlbEl0ZW0ocm93OiBBcnJheTxzdHJpbmc+KTogYW55IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcm93KTtcbiAgfVxufVxuIl19