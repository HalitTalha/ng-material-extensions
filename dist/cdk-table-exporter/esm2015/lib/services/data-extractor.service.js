import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let DataExtractorService = class DataExtractorService {
    constructor() {
    }
    extractRows(cdkTable, hiddenColumns) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, cdkTable._rowOutlet);
    }
    extractRow(cdkTable, hiddenColumns, outlet) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, outlet)[0];
    }
    getRowsAsJsonArray(cdkTable, hiddenColumns, outlet) {
        const renderedRows = this.getRenderedRows(cdkTable, outlet);
        return this.convertToJsonArray(hiddenColumns, renderedRows);
    }
    getRenderedRows(cdkTable, outlet) {
        return cdkTable._getRenderedRows(outlet);
    }
    convertToJsonArray(hiddenColumns, rows) {
        const result = new Array();
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < rows.length; i++) {
            const row = this.convertRow(hiddenColumns, rows[i]);
            result.push(this.createExcelItem(row));
        }
        return result;
    }
    convertRow(hiddenColumns, row) {
        const result = new Array();
        const cells = row.children;
        for (let i = 0; i < cells.length; i++) {
            if (!this.shouldHide(hiddenColumns, i)) {
                const element = cells.item(i).innerText;
                result.push(element);
            }
        }
        return result;
    }
    shouldHide(hiddenColumns, columnIndex) {
        if (hiddenColumns && hiddenColumns.includes(columnIndex)) {
            return true;
        }
        else {
            return false;
        }
    }
    createExcelItem(row) {
        return Object.assign({}, row);
    }
};
DataExtractorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DataExtractorService_Factory() { return new DataExtractorService(); }, token: DataExtractorService, providedIn: "root" });
DataExtractorService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], DataExtractorService);
export { DataExtractorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1leHRyYWN0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kYXRhLWV4dHJhY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUUvQjtJQUFnQixDQUFDO0lBRVYsV0FBVyxDQUFDLFFBQWEsRUFBRSxhQUF5QjtRQUN6RCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRU0sVUFBVSxDQUFDLFFBQWEsRUFBRSxhQUF5QixFQUFFLE1BQXFCO1FBQy9FLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVPLGtCQUFrQixDQUFDLFFBQWEsRUFBRSxhQUF5QixFQUFFLE1BQXFCO1FBQ3hGLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU8sZUFBZSxDQUFDLFFBQWEsRUFBRSxNQUFxQjtRQUMxRCxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQTBCLENBQUM7SUFDcEUsQ0FBQztJQUVPLGtCQUFrQixDQUFDLGFBQXlCLEVBQUUsSUFBMkI7UUFDL0UsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUNoQyx5Q0FBeUM7UUFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsTUFBTSxHQUFHLEdBQWtCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLFVBQVUsQ0FBQyxhQUF5QixFQUFFLEdBQXdCO1FBQ3BFLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDbkMsTUFBTSxLQUFLLEdBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sVUFBVSxDQUFDLGFBQXlCLEVBQUUsV0FBbUI7UUFDL0QsSUFBSSxhQUFhLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN4RCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVPLGVBQWUsQ0FBQyxHQUFrQjtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRixDQUFBOztBQXREWSxvQkFBb0I7SUFIaEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQzs7R0FDVyxvQkFBb0IsQ0FzRGhDO1NBdERZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVJvd091dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhRXh0cmFjdG9yU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHB1YmxpYyBleHRyYWN0Um93cyhjZGtUYWJsZTogYW55LCBoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRSb3dzQXNKc29uQXJyYXkoY2RrVGFibGUsIGhpZGRlbkNvbHVtbnMsIGNka1RhYmxlLl9yb3dPdXRsZXQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4dHJhY3RSb3coY2RrVGFibGU6IGFueSwgaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Piwgb3V0bGV0OiBEYXRhUm93T3V0bGV0KTogQXJyYXk8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRSb3dzQXNKc29uQXJyYXkoY2RrVGFibGUsIGhpZGRlbkNvbHVtbnMsIG91dGxldClbMF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJvd3NBc0pzb25BcnJheShjZGtUYWJsZTogYW55LCBoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+LCBvdXRsZXQ6IERhdGFSb3dPdXRsZXQpOiBBcnJheTxhbnk+IHtcclxuICAgIGNvbnN0IHJlbmRlcmVkUm93cyA9IHRoaXMuZ2V0UmVuZGVyZWRSb3dzKGNka1RhYmxlLCBvdXRsZXQpO1xyXG4gICAgcmV0dXJuIHRoaXMuY29udmVydFRvSnNvbkFycmF5KGhpZGRlbkNvbHVtbnMsIHJlbmRlcmVkUm93cyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlbmRlcmVkUm93cyhjZGtUYWJsZTogYW55LCBvdXRsZXQ6IERhdGFSb3dPdXRsZXQpOiBIVE1MVGFibGVSb3dFbGVtZW50W10ge1xyXG4gICAgcmV0dXJuIGNka1RhYmxlLl9nZXRSZW5kZXJlZFJvd3Mob3V0bGV0KSBhcyBIVE1MVGFibGVSb3dFbGVtZW50W107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnRUb0pzb25BcnJheShoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+LCByb3dzOiBIVE1MVGFibGVSb3dFbGVtZW50W10pOiBBcnJheTxhbnk+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdzogQXJyYXk8c3RyaW5nPiA9IHRoaXMuY29udmVydFJvdyhoaWRkZW5Db2x1bW5zLCByb3dzW2ldKTtcclxuICAgICAgcmVzdWx0LnB1c2godGhpcy5jcmVhdGVFeGNlbEl0ZW0ocm93KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb252ZXJ0Um93KGhpZGRlbkNvbHVtbnM6IEFycmF5PGFueT4sIHJvdzogSFRNTFRhYmxlUm93RWxlbWVudCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIGNvbnN0IGNlbGxzOiBhbnkgPSByb3cuY2hpbGRyZW47XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghdGhpcy5zaG91bGRIaWRlKGhpZGRlbkNvbHVtbnMsIGkpKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNlbGxzLml0ZW0oaSkuaW5uZXJUZXh0O1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG91bGRIaWRlKGhpZGRlbkNvbHVtbnM6IEFycmF5PGFueT4sIGNvbHVtbkluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmIChoaWRkZW5Db2x1bW5zICYmIGhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uSW5kZXgpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVFeGNlbEl0ZW0ocm93OiBBcnJheTxzdHJpbmc+KTogYW55IHtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByb3cpO1xyXG4gIH1cclxufVxyXG4iXX0=