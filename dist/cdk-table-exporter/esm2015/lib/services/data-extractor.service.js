import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DataExtractorService {
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
}
DataExtractorService.ɵfac = function DataExtractorService_Factory(t) { return new (t || DataExtractorService)(); };
DataExtractorService.ɵprov = i0.ɵɵdefineInjectable({ token: DataExtractorService, factory: DataExtractorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataExtractorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1leHRyYWN0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kYXRhLWV4dHJhY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxvQkFBb0I7SUFFL0I7SUFBZ0IsQ0FBQztJQUVWLFdBQVcsQ0FBQyxRQUFhLEVBQUUsYUFBeUI7UUFDekQsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVNLFVBQVUsQ0FBQyxRQUFhLEVBQUUsYUFBeUIsRUFBRSxNQUFxQjtRQUMvRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxRQUFhLEVBQUUsYUFBeUIsRUFBRSxNQUFxQjtRQUN4RixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1RCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVPLGVBQWUsQ0FBQyxRQUFhLEVBQUUsTUFBcUI7UUFDMUQsT0FBTyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUEwQixDQUFDO0lBQ3BFLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxhQUF5QixFQUFFLElBQTJCO1FBQy9FLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFPLENBQUM7UUFDaEMseUNBQXlDO1FBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sR0FBRyxHQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4QztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxVQUFVLENBQUMsYUFBeUIsRUFBRSxHQUF3QjtRQUNwRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ25DLE1BQU0sS0FBSyxHQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUN0QyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLFVBQVUsQ0FBQyxhQUF5QixFQUFFLFdBQW1CO1FBQy9ELElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDeEQsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFTyxlQUFlLENBQUMsR0FBa0I7UUFDeEMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDOzt3RkFyRFUsb0JBQW9COzREQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9CLG1CQUZuQixNQUFNO2tEQUVQLG9CQUFvQjtjQUhoQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhUm93T3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YUV4dHJhY3RvclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIGV4dHJhY3RSb3dzKGNka1RhYmxlOiBhbnksIGhpZGRlbkNvbHVtbnM6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRSb3dzQXNKc29uQXJyYXkoY2RrVGFibGUsIGhpZGRlbkNvbHVtbnMsIGNka1RhYmxlLl9yb3dPdXRsZXQpO1xuICB9XG5cbiAgcHVibGljIGV4dHJhY3RSb3coY2RrVGFibGU6IGFueSwgaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Piwgb3V0bGV0OiBEYXRhUm93T3V0bGV0KTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Um93c0FzSnNvbkFycmF5KGNka1RhYmxlLCBoaWRkZW5Db2x1bW5zLCBvdXRsZXQpWzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3dzQXNKc29uQXJyYXkoY2RrVGFibGU6IGFueSwgaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Piwgb3V0bGV0OiBEYXRhUm93T3V0bGV0KTogQXJyYXk8YW55PiB7XG4gICAgY29uc3QgcmVuZGVyZWRSb3dzID0gdGhpcy5nZXRSZW5kZXJlZFJvd3MoY2RrVGFibGUsIG91dGxldCk7XG4gICAgcmV0dXJuIHRoaXMuY29udmVydFRvSnNvbkFycmF5KGhpZGRlbkNvbHVtbnMsIHJlbmRlcmVkUm93cyk7XG4gIH1cblxuICBwcml2YXRlIGdldFJlbmRlcmVkUm93cyhjZGtUYWJsZTogYW55LCBvdXRsZXQ6IERhdGFSb3dPdXRsZXQpOiBIVE1MVGFibGVSb3dFbGVtZW50W10ge1xuICAgIHJldHVybiBjZGtUYWJsZS5fZ2V0UmVuZGVyZWRSb3dzKG91dGxldCkgYXMgSFRNTFRhYmxlUm93RWxlbWVudFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9Kc29uQXJyYXkoaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Piwgcm93czogSFRNTFRhYmxlUm93RWxlbWVudFtdKTogQXJyYXk8YW55PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm93OiBBcnJheTxzdHJpbmc+ID0gdGhpcy5jb252ZXJ0Um93KGhpZGRlbkNvbHVtbnMsIHJvd3NbaV0pO1xuICAgICAgcmVzdWx0LnB1c2godGhpcy5jcmVhdGVFeGNlbEl0ZW0ocm93KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRSb3coaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Piwgcm93OiBIVE1MVGFibGVSb3dFbGVtZW50KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICBjb25zdCBjZWxsczogYW55ID0gcm93LmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5zaG91bGRIaWRlKGhpZGRlbkNvbHVtbnMsIGkpKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjZWxscy5pdGVtKGkpLmlubmVyVGV4dDtcbiAgICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHNob3VsZEhpZGUoaGlkZGVuQ29sdW1uczogQXJyYXk8YW55PiwgY29sdW1uSW5kZXg6IG51bWJlcikge1xuICAgIGlmIChoaWRkZW5Db2x1bW5zICYmIGhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uSW5kZXgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRXhjZWxJdGVtKHJvdzogQXJyYXk8c3RyaW5nPik6IGFueSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJvdyk7XG4gIH1cbn1cbiJdfQ==