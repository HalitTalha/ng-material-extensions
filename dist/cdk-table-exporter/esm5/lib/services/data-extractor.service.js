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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1leHRyYWN0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kYXRhLWV4dHJhY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQztJQUVFO0lBQWdCLENBQUM7SUFFViwwQ0FBVyxHQUFsQixVQUFtQixRQUFhLEVBQUUsYUFBeUI7UUFDekQsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVNLHlDQUFVLEdBQWpCLFVBQWtCLFFBQWEsRUFBRSxhQUF5QixFQUFFLE1BQXFCO1FBQy9FLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVPLGlEQUFrQixHQUExQixVQUEyQixRQUFhLEVBQUUsYUFBeUIsRUFBRSxNQUFxQjtRQUN4RixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1RCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVPLDhDQUFlLEdBQXZCLFVBQXdCLFFBQWEsRUFBRSxNQUFxQjtRQUMxRCxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQTBCLENBQUM7SUFDcEUsQ0FBQztJQUVPLGlEQUFrQixHQUExQixVQUEyQixhQUF5QixFQUFFLElBQTJCO1FBQy9FLElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFPLENBQUM7UUFDaEMseUNBQXlDO1FBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQU0sR0FBRyxHQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4QztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyx5Q0FBVSxHQUFsQixVQUFtQixhQUF5QixFQUFFLEdBQXdCO1FBQ3BFLElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDbkMsSUFBTSxLQUFLLEdBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RDLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8seUNBQVUsR0FBbEIsVUFBbUIsYUFBeUIsRUFBRSxXQUFtQjtRQUMvRCxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3hELE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRU8sOENBQWUsR0FBdkIsVUFBd0IsR0FBa0I7UUFDeEMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDOztJQXJEVSxvQkFBb0I7UUFIaEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzs7T0FDVyxvQkFBb0IsQ0FzRGhDOytCQTVERDtDQTREQyxBQXRERCxJQXNEQztTQXREWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhUm93T3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YUV4dHJhY3RvclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIGV4dHJhY3RSb3dzKGNka1RhYmxlOiBhbnksIGhpZGRlbkNvbHVtbnM6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRSb3dzQXNKc29uQXJyYXkoY2RrVGFibGUsIGhpZGRlbkNvbHVtbnMsIGNka1RhYmxlLl9yb3dPdXRsZXQpO1xuICB9XG5cbiAgcHVibGljIGV4dHJhY3RSb3coY2RrVGFibGU6IGFueSwgaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Piwgb3V0bGV0OiBEYXRhUm93T3V0bGV0KTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Um93c0FzSnNvbkFycmF5KGNka1RhYmxlLCBoaWRkZW5Db2x1bW5zLCBvdXRsZXQpWzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3dzQXNKc29uQXJyYXkoY2RrVGFibGU6IGFueSwgaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Piwgb3V0bGV0OiBEYXRhUm93T3V0bGV0KTogQXJyYXk8YW55PiB7XG4gICAgY29uc3QgcmVuZGVyZWRSb3dzID0gdGhpcy5nZXRSZW5kZXJlZFJvd3MoY2RrVGFibGUsIG91dGxldCk7XG4gICAgcmV0dXJuIHRoaXMuY29udmVydFRvSnNvbkFycmF5KGhpZGRlbkNvbHVtbnMsIHJlbmRlcmVkUm93cyk7XG4gIH1cblxuICBwcml2YXRlIGdldFJlbmRlcmVkUm93cyhjZGtUYWJsZTogYW55LCBvdXRsZXQ6IERhdGFSb3dPdXRsZXQpOiBIVE1MVGFibGVSb3dFbGVtZW50W10ge1xuICAgIHJldHVybiBjZGtUYWJsZS5fZ2V0UmVuZGVyZWRSb3dzKG91dGxldCkgYXMgSFRNTFRhYmxlUm93RWxlbWVudFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9Kc29uQXJyYXkoaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Piwgcm93czogSFRNTFRhYmxlUm93RWxlbWVudFtdKTogQXJyYXk8YW55PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm93OiBBcnJheTxzdHJpbmc+ID0gdGhpcy5jb252ZXJ0Um93KGhpZGRlbkNvbHVtbnMsIHJvd3NbaV0pO1xuICAgICAgcmVzdWx0LnB1c2godGhpcy5jcmVhdGVFeGNlbEl0ZW0ocm93KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRSb3coaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Piwgcm93OiBIVE1MVGFibGVSb3dFbGVtZW50KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICBjb25zdCBjZWxsczogYW55ID0gcm93LmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5zaG91bGRIaWRlKGhpZGRlbkNvbHVtbnMsIGkpKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjZWxscy5pdGVtKGkpLmlubmVyVGV4dDtcbiAgICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHNob3VsZEhpZGUoaGlkZGVuQ29sdW1uczogQXJyYXk8YW55PiwgY29sdW1uSW5kZXg6IG51bWJlcikge1xuICAgIGlmIChoaWRkZW5Db2x1bW5zICYmIGhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uSW5kZXgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRXhjZWxJdGVtKHJvdzogQXJyYXk8c3RyaW5nPik6IGFueSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJvdyk7XG4gIH1cbn1cbiJdfQ==