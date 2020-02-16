import { __decorate, __extends, __metadata, __param } from "tslib";
import { AfterViewInit, Directive, Host, Optional, Renderer2, Self } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CdkTableExporter, DataExtractorService, ServiceLocatorService } from 'cdk-table-exporter';
var MatTableExporterDirective = /** @class */ (function (_super) {
    __extends(MatTableExporterDirective, _super);
    function MatTableExporterDirective(renderer, serviceLocator, dataExtractor, table) {
        return _super.call(this, renderer, serviceLocator, dataExtractor, table) || this;
    }
    /**
     * Overriding ngAfterViewInit of TableExporter
     */
    MatTableExporterDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.exportStarted.subscribe(function (_) {
            _this.enablePaginator(false);
        });
        this.exportCompleted.subscribe(function (_) {
            _this.enablePaginator(true);
        });
    };
    /**
     * MatTable implementation of getPageCount
     */
    MatTableExporterDirective.prototype.getPageCount = function () {
        return this.getPaginator().getNumberOfPages();
    };
    /**
     * MatTable implementation of getCurrentPageIndex
     */
    MatTableExporterDirective.prototype.getCurrentPageIndex = function () {
        return this.getPaginator().pageIndex;
    };
    /**
     * MatTable implementation of goToPage
     */
    MatTableExporterDirective.prototype.goToPage = function (index) {
        this.getPaginator().pageIndex = index;
        this.getPaginator()._changePageSize(this.getPaginator().pageSize);
    };
    /**
     * MatTable implementation of getPageChangeObservable
     */
    MatTableExporterDirective.prototype.getPageChangeObservable = function () {
        return this.getPaginator().page;
    };
    MatTableExporterDirective.prototype.getPaginator = function () {
        return this._cdkTable.dataSource.paginator;
    };
    MatTableExporterDirective.prototype.enablePaginator = function (value) {
        if (this.getPaginator()) {
            this.getPaginator().disabled = !value;
            this.getPaginator()._changePageSize(this.getPaginator().pageSize);
        }
    };
    MatTableExporterDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ServiceLocatorService },
        { type: DataExtractorService },
        { type: MatTable, decorators: [{ type: Host }, { type: Self }, { type: Optional }] }
    ]; };
    MatTableExporterDirective = __decorate([
        Directive({
            selector: '[matTableExporter]',
            exportAs: 'matTableExporter'
        }),
        __param(3, Host()), __param(3, Self()), __param(3, Optional()),
        __metadata("design:paramtypes", [Renderer2,
            ServiceLocatorService,
            DataExtractorService,
            MatTable])
    ], MatTableExporterDirective);
    return MatTableExporterDirective;
}(CdkTableExporter));
export { MatTableExporterDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWV4cG9ydGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9tYXQtdGFibGUtZXhwb3J0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT25HO0lBQStDLDZDQUFnQjtJQWE3RCxtQ0FDRSxRQUFtQixFQUNuQixjQUFxQyxFQUNyQyxhQUFtQyxFQUNQLEtBQW9CO2VBRWhELGtCQUFNLFFBQVEsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQztJQUN2RCxDQUFDO0lBbkJEOztPQUVHO0lBQ0gsbURBQWUsR0FBZjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDOUIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFXRDs7T0FFRztJQUNJLGdEQUFZLEdBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSx1REFBbUIsR0FBMUI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksNENBQVEsR0FBZixVQUFnQixLQUFhO1FBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRDs7T0FFRztJQUNJLDJEQUF1QixHQUE5QjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBR08sZ0RBQVksR0FBcEI7UUFDRSxPQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBc0MsQ0FBQyxTQUFTLENBQUM7SUFDMUUsQ0FBQztJQUVPLG1EQUFlLEdBQXZCLFVBQXdCLEtBQWM7UUFDcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7O2dCQS9DVyxTQUFTO2dCQUNILHFCQUFxQjtnQkFDdEIsb0JBQW9CO2dCQUNBLFFBQVEsdUJBQTFDLElBQUksWUFBSSxJQUFJLFlBQUksUUFBUTs7SUFqQmhCLHlCQUF5QjtRQUpyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFFBQVEsRUFBRSxrQkFBa0I7U0FDN0IsQ0FBQztRQWtCRyxXQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsV0FBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7eUNBSGpCLFNBQVM7WUFDSCxxQkFBcUI7WUFDdEIsb0JBQW9CO1lBQ0EsUUFBUTtPQWpCbEMseUJBQXlCLENBK0RyQztJQUFELGdDQUFDO0NBQUEsQUEvREQsQ0FBK0MsZ0JBQWdCLEdBK0Q5RDtTQS9EWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEhvc3QsIE9wdGlvbmFsLCBSZW5kZXJlcjIsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9yIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcclxuaW1wb3J0IHsgTWF0VGFibGUsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcclxuaW1wb3J0IHsgQ2RrVGFibGVFeHBvcnRlciwgRGF0YUV4dHJhY3RvclNlcnZpY2UsIFNlcnZpY2VMb2NhdG9yU2VydmljZSB9IGZyb20gJ2Nkay10YWJsZS1leHBvcnRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21hdFRhYmxlRXhwb3J0ZXJdJywgLy8gcmVuYW1lZCBzZWxlY3RvciBidXQga2VwdCBvbGQgdmVyc2lvbiBmb3IgYmFja3dhcmRzIGNvbXBhdC5cclxuICBleHBvcnRBczogJ21hdFRhYmxlRXhwb3J0ZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUV4cG9ydGVyRGlyZWN0aXZlIGV4dGVuZHMgQ2RrVGFibGVFeHBvcnRlciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIC8qKlxyXG4gICAqIE92ZXJyaWRpbmcgbmdBZnRlclZpZXdJbml0IG9mIFRhYmxlRXhwb3J0ZXJcclxuICAgKi9cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmV4cG9ydFN0YXJ0ZWQuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICB0aGlzLmVuYWJsZVBhZ2luYXRvcihmYWxzZSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZXhwb3J0Q29tcGxldGVkLnN1YnNjcmliZShfID0+IHtcclxuICAgICAgdGhpcy5lbmFibGVQYWdpbmF0b3IodHJ1ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHNlcnZpY2VMb2NhdG9yOiBTZXJ2aWNlTG9jYXRvclNlcnZpY2UsXHJcbiAgICBkYXRhRXh0cmFjdG9yOiBEYXRhRXh0cmFjdG9yU2VydmljZSxcclxuICAgIEBIb3N0KCkgQFNlbGYoKSBAT3B0aW9uYWwoKSB0YWJsZTogTWF0VGFibGU8YW55PlxyXG4gICkge1xyXG4gICAgc3VwZXIocmVuZGVyZXIsIHNlcnZpY2VMb2NhdG9yLCBkYXRhRXh0cmFjdG9yLCB0YWJsZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXRUYWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBnZXRQYWdlQ291bnRcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0UGFnZUNvdW50KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdpbmF0b3IoKS5nZXROdW1iZXJPZlBhZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXRUYWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBnZXRDdXJyZW50UGFnZUluZGV4XHJcbiAgICovXHJcbiAgcHVibGljIGdldEN1cnJlbnRQYWdlSW5kZXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2VJbmRleDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdvVG9QYWdlXHJcbiAgICovXHJcbiAgcHVibGljIGdvVG9QYWdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZUluZGV4ID0gaW5kZXg7XHJcbiAgICB0aGlzLmdldFBhZ2luYXRvcigpLl9jaGFuZ2VQYWdlU2l6ZSh0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2VTaXplKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlXHJcbiAgICovXHJcbiAgcHVibGljIGdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZ2V0UGFnaW5hdG9yKCk6IE1hdFBhZ2luYXRvciB7XHJcbiAgICByZXR1cm4gKHRoaXMuX2Nka1RhYmxlLmRhdGFTb3VyY2UgYXMgTWF0VGFibGVEYXRhU291cmNlPGFueT4pLnBhZ2luYXRvcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW5hYmxlUGFnaW5hdG9yKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5nZXRQYWdpbmF0b3IoKSkge1xyXG4gICAgICB0aGlzLmdldFBhZ2luYXRvcigpLmRpc2FibGVkID0gIXZhbHVlO1xyXG4gICAgICB0aGlzLmdldFBhZ2luYXRvcigpLl9jaGFuZ2VQYWdlU2l6ZSh0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2VTaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==