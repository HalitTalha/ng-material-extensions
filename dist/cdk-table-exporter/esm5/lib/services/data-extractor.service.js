import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var DataExtractorService = /** @class */ (function () {
    function DataExtractorService() {
    }
    DataExtractorService.prototype.extractRows = function (cdkTable, hiddenColumns) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, cdkTable._rowOutlet);
    };
    DataExtractorService.prototype.extractRow = function (cdkTable, hiddenColumns, outlet) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, outlet)[0];
    };
    DataExtractorService.prototype.getRowsAsJsonArray = function (cdkTable, hiddenColumns, outlet) {
        var renderedRows = this.getRenderedRows(cdkTable, outlet);
        return this.convertToJsonArray(hiddenColumns, renderedRows);
    };
    DataExtractorService.prototype.getRenderedRows = function (cdkTable, outlet) {
        return cdkTable._getRenderedRows(outlet);
    };
    DataExtractorService.prototype.convertToJsonArray = function (hiddenColumns, rows) {
        var result = new Array();
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < rows.length; i++) {
            var row = this.convertRow(hiddenColumns, rows[i]);
            result.push(this.createExcelItem(row));
        }
        return result;
    };
    DataExtractorService.prototype.convertRow = function (hiddenColumns, row) {
        var result = new Array();
        var cells = row.children;
        for (var i = 0; i < cells.length; i++) {
            if (!this.shouldHide(hiddenColumns, i)) {
                var element = cells.item(i).innerText;
                result.push(element);
            }
        }
        return result;
    };
    DataExtractorService.prototype.shouldHide = function (hiddenColumns, columnIndex) {
        if (hiddenColumns && hiddenColumns.includes(columnIndex)) {
            return true;
        }
        else {
            return false;
        }
    };
    DataExtractorService.prototype.createExcelItem = function (row) {
        return Object.assign({}, row);
    };
    DataExtractorService.ɵfac = function DataExtractorService_Factory(t) { return new (t || DataExtractorService)(); };
    DataExtractorService.ɵprov = i0.ɵɵdefineInjectable({ token: DataExtractorService, factory: DataExtractorService.ɵfac, providedIn: 'root' });
    return DataExtractorService;
}());
export { DataExtractorService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataExtractorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1leHRyYWN0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kYXRhLWV4dHJhY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDO0lBS0U7SUFBZ0IsQ0FBQztJQUVWLDBDQUFXLEdBQWxCLFVBQW1CLFFBQWEsRUFBRSxhQUF5QjtRQUN6RCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRU0seUNBQVUsR0FBakIsVUFBa0IsUUFBYSxFQUFFLGFBQXlCLEVBQUUsTUFBcUI7UUFDL0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU8saURBQWtCLEdBQTFCLFVBQTJCLFFBQWEsRUFBRSxhQUF5QixFQUFFLE1BQXFCO1FBQ3hGLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU8sOENBQWUsR0FBdkIsVUFBd0IsUUFBYSxFQUFFLE1BQXFCO1FBQzFELE9BQU8sUUFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBMEIsQ0FBQztJQUNwRSxDQUFDO0lBRU8saURBQWtCLEdBQTFCLFVBQTJCLGFBQXlCLEVBQUUsSUFBMkI7UUFDL0UsSUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUNoQyx5Q0FBeUM7UUFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsSUFBTSxHQUFHLEdBQWtCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLHlDQUFVLEdBQWxCLFVBQW1CLGFBQXlCLEVBQUUsR0FBd0I7UUFDcEUsSUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUNuQyxJQUFNLEtBQUssR0FBUSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDdEMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyx5Q0FBVSxHQUFsQixVQUFtQixhQUF5QixFQUFFLFdBQW1CO1FBQy9ELElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDeEQsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFTyw4Q0FBZSxHQUF2QixVQUF3QixHQUFrQjtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7NEZBckRVLG9CQUFvQjtnRUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQixtQkFGbkIsTUFBTTsrQkFKcEI7Q0E0REMsQUF6REQsSUF5REM7U0F0RFksb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FIaEMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVJvd091dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhdGFFeHRyYWN0b3JTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyBleHRyYWN0Um93cyhjZGtUYWJsZTogYW55LCBoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Um93c0FzSnNvbkFycmF5KGNka1RhYmxlLCBoaWRkZW5Db2x1bW5zLCBjZGtUYWJsZS5fcm93T3V0bGV0KTtcbiAgfVxuXG4gIHB1YmxpYyBleHRyYWN0Um93KGNka1RhYmxlOiBhbnksIGhpZGRlbkNvbHVtbnM6IEFycmF5PGFueT4sIG91dGxldDogRGF0YVJvd091dGxldCk6IEFycmF5PGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldFJvd3NBc0pzb25BcnJheShjZGtUYWJsZSwgaGlkZGVuQ29sdW1ucywgb3V0bGV0KVswXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um93c0FzSnNvbkFycmF5KGNka1RhYmxlOiBhbnksIGhpZGRlbkNvbHVtbnM6IEFycmF5PGFueT4sIG91dGxldDogRGF0YVJvd091dGxldCk6IEFycmF5PGFueT4ge1xuICAgIGNvbnN0IHJlbmRlcmVkUm93cyA9IHRoaXMuZ2V0UmVuZGVyZWRSb3dzKGNka1RhYmxlLCBvdXRsZXQpO1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnRUb0pzb25BcnJheShoaWRkZW5Db2x1bW5zLCByZW5kZXJlZFJvd3MpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZW5kZXJlZFJvd3MoY2RrVGFibGU6IGFueSwgb3V0bGV0OiBEYXRhUm93T3V0bGV0KTogSFRNTFRhYmxlUm93RWxlbWVudFtdIHtcbiAgICByZXR1cm4gY2RrVGFibGUuX2dldFJlbmRlcmVkUm93cyhvdXRsZXQpIGFzIEhUTUxUYWJsZVJvd0VsZW1lbnRbXTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFRvSnNvbkFycmF5KGhpZGRlbkNvbHVtbnM6IEFycmF5PGFueT4sIHJvd3M6IEhUTUxUYWJsZVJvd0VsZW1lbnRbXSk6IEFycmF5PGFueT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxhbnk+KCk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdzogQXJyYXk8c3RyaW5nPiA9IHRoaXMuY29udmVydFJvdyhoaWRkZW5Db2x1bW5zLCByb3dzW2ldKTtcbiAgICAgIHJlc3VsdC5wdXNoKHRoaXMuY3JlYXRlRXhjZWxJdGVtKHJvdykpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0Um93KGhpZGRlbkNvbHVtbnM6IEFycmF5PGFueT4sIHJvdzogSFRNTFRhYmxlUm93RWxlbWVudCk6IEFycmF5PHN0cmluZz4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgY29uc3QgY2VsbHM6IGFueSA9IHJvdy5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMuc2hvdWxkSGlkZShoaWRkZW5Db2x1bW5zLCBpKSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY2VsbHMuaXRlbShpKS5pbm5lclRleHQ7XG4gICAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRIaWRlKGhpZGRlbkNvbHVtbnM6IEFycmF5PGFueT4sIGNvbHVtbkluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoaGlkZGVuQ29sdW1ucyAmJiBoaWRkZW5Db2x1bW5zLmluY2x1ZGVzKGNvbHVtbkluZGV4KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUV4Y2VsSXRlbShyb3c6IEFycmF5PHN0cmluZz4pOiBhbnkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByb3cpO1xuICB9XG59XG4iXX0=