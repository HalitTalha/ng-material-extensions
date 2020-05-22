import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let DataExtractorService = class DataExtractorService {
    constructor() {
    }
    extractRows(cdkTable, hiddenColumns, outlet) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, (outlet !== null && outlet !== void 0 ? outlet : cdkTable._rowOutlet));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1leHRyYWN0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kYXRhLWV4dHJhY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUUvQjtJQUFnQixDQUFDO0lBRVYsV0FBVyxDQUFDLFFBQWEsRUFBRSxhQUF5QixFQUFFLE1BQXNCO1FBQ2pGLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxhQUFhLEdBQUUsTUFBTSxhQUFOLE1BQU0sY0FBTixNQUFNLEdBQUksUUFBUSxDQUFDLFVBQVUsRUFBQyxDQUFDO0lBQ3pGLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxRQUFhLEVBQUUsYUFBeUIsRUFBRSxNQUFxQjtRQUN4RixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1RCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVPLGVBQWUsQ0FBQyxRQUFhLEVBQUUsTUFBcUI7UUFDMUQsT0FBTyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUEwQixDQUFDO0lBQ3BFLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxhQUF5QixFQUFFLElBQTJCO1FBQy9FLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFPLENBQUM7UUFDaEMseUNBQXlDO1FBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sR0FBRyxHQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4QztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxVQUFVLENBQUMsYUFBeUIsRUFBRSxHQUF3QjtRQUNwRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ25DLE1BQU0sS0FBSyxHQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUN0QyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLFVBQVUsQ0FBQyxhQUF5QixFQUFFLFdBQW1CO1FBQy9ELElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDeEQsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFTyxlQUFlLENBQUMsR0FBa0I7UUFDeEMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0YsQ0FBQTs7QUFsRFksb0JBQW9CO0lBSGhDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7O0dBQ1csb0JBQW9CLENBa0RoQztTQWxEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFSb3dPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YUV4dHJhY3RvclNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBwdWJsaWMgZXh0cmFjdFJvd3MoY2RrVGFibGU6IGFueSwgaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Piwgb3V0bGV0PzogRGF0YVJvd091dGxldCk6IEFycmF5PGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Um93c0FzSnNvbkFycmF5KGNka1RhYmxlLCBoaWRkZW5Db2x1bW5zLCBvdXRsZXQgPz8gY2RrVGFibGUuX3Jvd091dGxldCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJvd3NBc0pzb25BcnJheShjZGtUYWJsZTogYW55LCBoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+LCBvdXRsZXQ6IERhdGFSb3dPdXRsZXQpOiBBcnJheTxhbnk+IHtcclxuICAgIGNvbnN0IHJlbmRlcmVkUm93cyA9IHRoaXMuZ2V0UmVuZGVyZWRSb3dzKGNka1RhYmxlLCBvdXRsZXQpO1xyXG4gICAgcmV0dXJuIHRoaXMuY29udmVydFRvSnNvbkFycmF5KGhpZGRlbkNvbHVtbnMsIHJlbmRlcmVkUm93cyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlbmRlcmVkUm93cyhjZGtUYWJsZTogYW55LCBvdXRsZXQ6IERhdGFSb3dPdXRsZXQpOiBIVE1MVGFibGVSb3dFbGVtZW50W10ge1xyXG4gICAgcmV0dXJuIGNka1RhYmxlLl9nZXRSZW5kZXJlZFJvd3Mob3V0bGV0KSBhcyBIVE1MVGFibGVSb3dFbGVtZW50W107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnRUb0pzb25BcnJheShoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+LCByb3dzOiBIVE1MVGFibGVSb3dFbGVtZW50W10pOiBBcnJheTxhbnk+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdzogQXJyYXk8c3RyaW5nPiA9IHRoaXMuY29udmVydFJvdyhoaWRkZW5Db2x1bW5zLCByb3dzW2ldKTtcclxuICAgICAgcmVzdWx0LnB1c2godGhpcy5jcmVhdGVFeGNlbEl0ZW0ocm93KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb252ZXJ0Um93KGhpZGRlbkNvbHVtbnM6IEFycmF5PGFueT4sIHJvdzogSFRNTFRhYmxlUm93RWxlbWVudCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIGNvbnN0IGNlbGxzOiBhbnkgPSByb3cuY2hpbGRyZW47XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghdGhpcy5zaG91bGRIaWRlKGhpZGRlbkNvbHVtbnMsIGkpKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNlbGxzLml0ZW0oaSkuaW5uZXJUZXh0O1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG91bGRIaWRlKGhpZGRlbkNvbHVtbnM6IEFycmF5PGFueT4sIGNvbHVtbkluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmIChoaWRkZW5Db2x1bW5zICYmIGhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uSW5kZXgpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVFeGNlbEl0ZW0ocm93OiBBcnJheTxzdHJpbmc+KTogYW55IHtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByb3cpO1xyXG4gIH1cclxufVxyXG4iXX0=