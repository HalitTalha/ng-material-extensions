import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var DataExtractorService = /** @class */ (function () {
    function DataExtractorService() {
    }
    DataExtractorService.prototype.extractRows = function (cdkTable, hiddenColumns, outlet) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, (outlet !== null && outlet !== void 0 ? outlet : cdkTable._rowOutlet));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1leHRyYWN0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kYXRhLWV4dHJhY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQztJQUVFO0lBQWdCLENBQUM7SUFFViwwQ0FBVyxHQUFsQixVQUFtQixRQUFhLEVBQUUsYUFBeUIsRUFBRSxNQUFzQjtRQUNqRixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsYUFBYSxHQUFFLE1BQU0sYUFBTixNQUFNLGNBQU4sTUFBTSxHQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUMsQ0FBQztJQUN6RixDQUFDO0lBRU8saURBQWtCLEdBQTFCLFVBQTJCLFFBQWEsRUFBRSxhQUF5QixFQUFFLE1BQXFCO1FBQ3hGLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU8sOENBQWUsR0FBdkIsVUFBd0IsUUFBYSxFQUFFLE1BQXFCO1FBQzFELE9BQU8sUUFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBMEIsQ0FBQztJQUNwRSxDQUFDO0lBRU8saURBQWtCLEdBQTFCLFVBQTJCLGFBQXlCLEVBQUUsSUFBMkI7UUFDL0UsSUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUNoQyx5Q0FBeUM7UUFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsSUFBTSxHQUFHLEdBQWtCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLHlDQUFVLEdBQWxCLFVBQW1CLGFBQXlCLEVBQUUsR0FBd0I7UUFDcEUsSUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUNuQyxJQUFNLEtBQUssR0FBUSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDdEMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyx5Q0FBVSxHQUFsQixVQUFtQixhQUF5QixFQUFFLFdBQW1CO1FBQy9ELElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDeEQsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFTyw4Q0FBZSxHQUF2QixVQUF3QixHQUFrQjtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O0lBakRVLG9CQUFvQjtRQUhoQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDOztPQUNXLG9CQUFvQixDQWtEaEM7K0JBeEREO0NBd0RDLEFBbERELElBa0RDO1NBbERZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVJvd091dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhRXh0cmFjdG9yU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHB1YmxpYyBleHRyYWN0Um93cyhjZGtUYWJsZTogYW55LCBoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+LCBvdXRsZXQ/OiBEYXRhUm93T3V0bGV0KTogQXJyYXk8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRSb3dzQXNKc29uQXJyYXkoY2RrVGFibGUsIGhpZGRlbkNvbHVtbnMsIG91dGxldCA/PyBjZGtUYWJsZS5fcm93T3V0bGV0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Um93c0FzSnNvbkFycmF5KGNka1RhYmxlOiBhbnksIGhpZGRlbkNvbHVtbnM6IEFycmF5PGFueT4sIG91dGxldDogRGF0YVJvd091dGxldCk6IEFycmF5PGFueT4ge1xyXG4gICAgY29uc3QgcmVuZGVyZWRSb3dzID0gdGhpcy5nZXRSZW5kZXJlZFJvd3MoY2RrVGFibGUsIG91dGxldCk7XHJcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9Kc29uQXJyYXkoaGlkZGVuQ29sdW1ucywgcmVuZGVyZWRSb3dzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UmVuZGVyZWRSb3dzKGNka1RhYmxlOiBhbnksIG91dGxldDogRGF0YVJvd091dGxldCk6IEhUTUxUYWJsZVJvd0VsZW1lbnRbXSB7XHJcbiAgICByZXR1cm4gY2RrVGFibGUuX2dldFJlbmRlcmVkUm93cyhvdXRsZXQpIGFzIEhUTUxUYWJsZVJvd0VsZW1lbnRbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFRvSnNvbkFycmF5KGhpZGRlbkNvbHVtbnM6IEFycmF5PGFueT4sIHJvd3M6IEhUTUxUYWJsZVJvd0VsZW1lbnRbXSk6IEFycmF5PGFueT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgcm93OiBBcnJheTxzdHJpbmc+ID0gdGhpcy5jb252ZXJ0Um93KGhpZGRlbkNvbHVtbnMsIHJvd3NbaV0pO1xyXG4gICAgICByZXN1bHQucHVzaCh0aGlzLmNyZWF0ZUV4Y2VsSXRlbShyb3cpKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnRSb3coaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Piwgcm93OiBIVE1MVGFibGVSb3dFbGVtZW50KTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgY29uc3QgY2VsbHM6IGFueSA9IHJvdy5jaGlsZHJlbjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCF0aGlzLnNob3VsZEhpZGUoaGlkZGVuQ29sdW1ucywgaSkpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gY2VsbHMuaXRlbShpKS5pbm5lclRleHQ7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3VsZEhpZGUoaGlkZGVuQ29sdW1uczogQXJyYXk8YW55PiwgY29sdW1uSW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKGhpZGRlbkNvbHVtbnMgJiYgaGlkZGVuQ29sdW1ucy5pbmNsdWRlcyhjb2x1bW5JbmRleCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUV4Y2VsSXRlbShyb3c6IEFycmF5PHN0cmluZz4pOiBhbnkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJvdyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==