import { __decorate, __metadata } from "tslib";
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
    DataExtractorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DataExtractorService_Factory() { return new DataExtractorService(); }, token: DataExtractorService, providedIn: "root" });
    DataExtractorService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataExtractorService);
    return DataExtractorService;
}());
export { DataExtractorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1leHRyYWN0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kYXRhLWV4dHJhY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQztJQUVFO0lBQWdCLENBQUM7SUFFViwwQ0FBVyxHQUFsQixVQUFtQixRQUFhLEVBQUUsYUFBeUI7UUFDekQsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVNLHlDQUFVLEdBQWpCLFVBQWtCLFFBQWEsRUFBRSxhQUF5QixFQUFFLE1BQXFCO1FBQy9FLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVPLGlEQUFrQixHQUExQixVQUEyQixRQUFhLEVBQUUsYUFBeUIsRUFBRSxNQUFxQjtRQUN4RixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1RCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVPLDhDQUFlLEdBQXZCLFVBQXdCLFFBQWEsRUFBRSxNQUFxQjtRQUMxRCxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQTBCLENBQUM7SUFDcEUsQ0FBQztJQUVPLGlEQUFrQixHQUExQixVQUEyQixhQUF5QixFQUFFLElBQTJCO1FBQy9FLElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFPLENBQUM7UUFDaEMseUNBQXlDO1FBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQU0sR0FBRyxHQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4QztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyx5Q0FBVSxHQUFsQixVQUFtQixhQUF5QixFQUFFLEdBQXdCO1FBQ3BFLElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDbkMsSUFBTSxLQUFLLEdBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RDLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8seUNBQVUsR0FBbEIsVUFBbUIsYUFBeUIsRUFBRSxXQUFtQjtRQUMvRCxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3hELE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRU8sOENBQWUsR0FBdkIsVUFBd0IsR0FBa0I7UUFDeEMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDOztJQXJEVSxvQkFBb0I7UUFIaEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzs7T0FDVyxvQkFBb0IsQ0FzRGhDOytCQTVERDtDQTREQyxBQXRERCxJQXNEQztTQXREWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFSb3dPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YUV4dHJhY3RvclNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBwdWJsaWMgZXh0cmFjdFJvd3MoY2RrVGFibGU6IGFueSwgaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Um93c0FzSnNvbkFycmF5KGNka1RhYmxlLCBoaWRkZW5Db2x1bW5zLCBjZGtUYWJsZS5fcm93T3V0bGV0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleHRyYWN0Um93KGNka1RhYmxlOiBhbnksIGhpZGRlbkNvbHVtbnM6IEFycmF5PGFueT4sIG91dGxldDogRGF0YVJvd091dGxldCk6IEFycmF5PGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Um93c0FzSnNvbkFycmF5KGNka1RhYmxlLCBoaWRkZW5Db2x1bW5zLCBvdXRsZXQpWzBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRSb3dzQXNKc29uQXJyYXkoY2RrVGFibGU6IGFueSwgaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Piwgb3V0bGV0OiBEYXRhUm93T3V0bGV0KTogQXJyYXk8YW55PiB7XHJcbiAgICBjb25zdCByZW5kZXJlZFJvd3MgPSB0aGlzLmdldFJlbmRlcmVkUm93cyhjZGtUYWJsZSwgb3V0bGV0KTtcclxuICAgIHJldHVybiB0aGlzLmNvbnZlcnRUb0pzb25BcnJheShoaWRkZW5Db2x1bW5zLCByZW5kZXJlZFJvd3MpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRSZW5kZXJlZFJvd3MoY2RrVGFibGU6IGFueSwgb3V0bGV0OiBEYXRhUm93T3V0bGV0KTogSFRNTFRhYmxlUm93RWxlbWVudFtdIHtcclxuICAgIHJldHVybiBjZGtUYWJsZS5fZ2V0UmVuZGVyZWRSb3dzKG91dGxldCkgYXMgSFRNTFRhYmxlUm93RWxlbWVudFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb252ZXJ0VG9Kc29uQXJyYXkoaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Piwgcm93czogSFRNTFRhYmxlUm93RWxlbWVudFtdKTogQXJyYXk8YW55PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCByb3c6IEFycmF5PHN0cmluZz4gPSB0aGlzLmNvbnZlcnRSb3coaGlkZGVuQ29sdW1ucywgcm93c1tpXSk7XHJcbiAgICAgIHJlc3VsdC5wdXNoKHRoaXMuY3JlYXRlRXhjZWxJdGVtKHJvdykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFJvdyhoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+LCByb3c6IEhUTUxUYWJsZVJvd0VsZW1lbnQpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICBjb25zdCBjZWxsczogYW55ID0gcm93LmNoaWxkcmVuO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoIXRoaXMuc2hvdWxkSGlkZShoaWRkZW5Db2x1bW5zLCBpKSkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjZWxscy5pdGVtKGkpLmlubmVyVGV4dDtcclxuICAgICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvdWxkSGlkZShoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+LCBjb2x1bW5JbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAoaGlkZGVuQ29sdW1ucyAmJiBoaWRkZW5Db2x1bW5zLmluY2x1ZGVzKGNvbHVtbkluZGV4KSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRXhjZWxJdGVtKHJvdzogQXJyYXk8c3RyaW5nPik6IGFueSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcm93KTtcclxuICB9XHJcbn1cclxuIl19