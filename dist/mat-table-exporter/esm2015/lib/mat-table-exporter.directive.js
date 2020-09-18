import { __decorate, __metadata, __param } from "tslib";
import { AfterViewInit, Directive, Host, Optional, Renderer2, Self } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CdkTableExporter, DataExtractorService, ServiceLocatorService } from 'cdk-table-exporter';
let MatTableExporterDirective = class MatTableExporterDirective extends CdkTableExporter {
    constructor(renderer, serviceLocator, dataExtractor, table) {
        super(renderer, serviceLocator, dataExtractor, table);
    }
    /**
     * Overriding ngAfterViewInit of TableExporter
     */
    ngAfterViewInit() {
        this.exportStarted.subscribe(_ => {
            this.enablePaginator(false);
        });
        this.exportCompleted.subscribe(_ => {
            this.enablePaginator(true);
        });
    }
    /**
     * MatTable implementation of getPageCount
     */
    getPageCount() {
        return this.getPaginator().getNumberOfPages();
    }
    /**
     * MatTable implementation of getPageSize
     */
    getPageSize() {
        var _a, _b;
        return _b = (_a = this.getPaginator()) === null || _a === void 0 ? void 0 : _a.pageSize, (_b !== null && _b !== void 0 ? _b : 0);
    }
    /**
     * MatTable implementation of getCurrentPageIndex
     */
    getCurrentPageIndex() {
        var _a, _b;
        return _b = (_a = this.getPaginator()) === null || _a === void 0 ? void 0 : _a.pageIndex, (_b !== null && _b !== void 0 ? _b : 0);
    }
    /**
     * MatTable implementation of getTotalItemsCount
     */
    getTotalItemsCount() {
        var _a, _b, _c, _d, _e;
        return _e = (_b = (_a = this.getPaginator()) === null || _a === void 0 ? void 0 : _a.length, (_b !== null && _b !== void 0 ? _b : (_d = (_c = this.getDataSource()) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.length)), (_e !== null && _e !== void 0 ? _e : 0);
    }
    /**
     * MatTable implementation of goToPage
     */
    goToPage(index) {
        this.getPaginator().pageIndex = index;
        this.getPaginator()._changePageSize(this.getPaginator().pageSize);
    }
    /**
     * MatTable implementation of getPageChangeObservable
     */
    getPageChangeObservable() {
        return this.getPaginator().page;
    }
    getDataSource() {
        return this._cdkTable.dataSource;
    }
    getPaginator() {
        return this.getDataSource().paginator;
    }
    enablePaginator(value) {
        if (this.getPaginator()) {
            this.getPaginator().disabled = !value;
            this.getPaginator()._changePageSize(this.getPaginator().pageSize);
        }
    }
};
MatTableExporterDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ServiceLocatorService },
    { type: DataExtractorService },
    { type: MatTable, decorators: [{ type: Host }, { type: Self }, { type: Optional }] }
];
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
export { MatTableExporterDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWV4cG9ydGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9tYXQtdGFibGUtZXhwb3J0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT25HLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQTBCLFNBQVEsZ0JBQWdCO0lBYTdELFlBQ0UsUUFBbUIsRUFDbkIsY0FBcUMsRUFDckMsYUFBbUMsRUFDUCxLQUFvQjtRQUVoRCxLQUFLLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQW5CRDs7T0FFRztJQUNILGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFXRDs7T0FFRztJQUNJLFlBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXOztRQUNoQixrQkFBTyxJQUFJLENBQUMsWUFBWSxFQUFFLDBDQUFFLFFBQVEsdUNBQUksQ0FBQyxFQUFDO0lBQzVDLENBQUM7SUFFRDs7T0FFRztJQUNJLG1CQUFtQjs7UUFDeEIsa0JBQU8sSUFBSSxDQUFDLFlBQVksRUFBRSwwQ0FBRSxTQUFTLHVDQUFJLENBQUMsRUFBQztJQUM3QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxrQkFBa0I7O1FBQ3ZCLHdCQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsMENBQUUsTUFBTSxtREFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLDBDQUFFLElBQUksMENBQUUsTUFBTSx5Q0FBSSxDQUFDLEVBQUM7SUFDaEYsQ0FBQztJQUVEOztPQUVHO0lBQ0ksUUFBUSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVEOztPQUVHO0lBQ0ksdUJBQXVCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRU8sYUFBYTtRQUNuQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBcUMsQ0FBQztJQUM5RCxDQUFDO0lBRU8sWUFBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUVPLGVBQWUsQ0FBQyxLQUFjO1FBQ3BDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDdEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkU7SUFDSCxDQUFDO0NBRUYsQ0FBQTs7WUFsRWEsU0FBUztZQUNILHFCQUFxQjtZQUN0QixvQkFBb0I7WUFDQSxRQUFRLHVCQUExQyxJQUFJLFlBQUksSUFBSSxZQUFJLFFBQVE7O0FBakJoQix5QkFBeUI7SUFKckMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixRQUFRLEVBQUUsa0JBQWtCO0tBQzdCLENBQUM7SUFrQkcsV0FBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLFdBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBO3FDQUhqQixTQUFTO1FBQ0gscUJBQXFCO1FBQ3RCLG9CQUFvQjtRQUNBLFFBQVE7R0FqQmxDLHlCQUF5QixDQWdGckM7U0FoRlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBIb3N0LCBPcHRpb25hbCwgUmVuZGVyZXIyLCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFBhZ2luYXRvciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XHJcbmltcG9ydCB7IE1hdFRhYmxlLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XHJcbmltcG9ydCB7IENka1RhYmxlRXhwb3J0ZXIsIERhdGFFeHRyYWN0b3JTZXJ2aWNlLCBTZXJ2aWNlTG9jYXRvclNlcnZpY2UgfSBmcm9tICdjZGstdGFibGUtZXhwb3J0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttYXRUYWJsZUV4cG9ydGVyXScsXHJcbiAgZXhwb3J0QXM6ICdtYXRUYWJsZUV4cG9ydGVyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0VGFibGVFeHBvcnRlckRpcmVjdGl2ZSBleHRlbmRzIENka1RhYmxlRXhwb3J0ZXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICAvKipcclxuICAgKiBPdmVycmlkaW5nIG5nQWZ0ZXJWaWV3SW5pdCBvZiBUYWJsZUV4cG9ydGVyXHJcbiAgICovXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5leHBvcnRTdGFydGVkLnN1YnNjcmliZShfID0+IHtcclxuICAgICAgdGhpcy5lbmFibGVQYWdpbmF0b3IoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmV4cG9ydENvbXBsZXRlZC5zdWJzY3JpYmUoXyA9PiB7XHJcbiAgICAgIHRoaXMuZW5hYmxlUGFnaW5hdG9yKHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBzZXJ2aWNlTG9jYXRvcjogU2VydmljZUxvY2F0b3JTZXJ2aWNlLFxyXG4gICAgZGF0YUV4dHJhY3RvcjogRGF0YUV4dHJhY3RvclNlcnZpY2UsXHJcbiAgICBASG9zdCgpIEBTZWxmKCkgQE9wdGlvbmFsKCkgdGFibGU6IE1hdFRhYmxlPGFueT5cclxuICApIHtcclxuICAgIHN1cGVyKHJlbmRlcmVyLCBzZXJ2aWNlTG9jYXRvciwgZGF0YUV4dHJhY3RvciwgdGFibGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ2V0UGFnZUNvdW50XHJcbiAgICovXHJcbiAgcHVibGljIGdldFBhZ2VDb3VudCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFnaW5hdG9yKCkuZ2V0TnVtYmVyT2ZQYWdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ2V0UGFnZVNpemVcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0UGFnZVNpemUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmdldFBhZ2luYXRvcigpPy5wYWdlU2l6ZSA/PyAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ2V0Q3VycmVudFBhZ2VJbmRleFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRDdXJyZW50UGFnZUluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdpbmF0b3IoKT8ucGFnZUluZGV4ID8/IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXRUYWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBnZXRUb3RhbEl0ZW1zQ291bnRcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0VG90YWxJdGVtc0NvdW50KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdpbmF0b3IoKT8ubGVuZ3RoID8/IHRoaXMuZ2V0RGF0YVNvdXJjZSgpPy5kYXRhPy5sZW5ndGggPz8gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdvVG9QYWdlXHJcbiAgICovXHJcbiAgcHVibGljIGdvVG9QYWdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZUluZGV4ID0gaW5kZXg7XHJcbiAgICB0aGlzLmdldFBhZ2luYXRvcigpLl9jaGFuZ2VQYWdlU2l6ZSh0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2VTaXplKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlXHJcbiAgICovXHJcbiAgcHVibGljIGdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREYXRhU291cmNlKCk6IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9jZGtUYWJsZS5kYXRhU291cmNlIGFzIE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQYWdpbmF0b3IoKTogTWF0UGFnaW5hdG9yIHtcclxuICAgIHJldHVybiB0aGlzLmdldERhdGFTb3VyY2UoKS5wYWdpbmF0b3I7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVuYWJsZVBhZ2luYXRvcih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMuZ2V0UGFnaW5hdG9yKCkpIHtcclxuICAgICAgdGhpcy5nZXRQYWdpbmF0b3IoKS5kaXNhYmxlZCA9ICF2YWx1ZTtcclxuICAgICAgdGhpcy5nZXRQYWdpbmF0b3IoKS5fY2hhbmdlUGFnZVNpemUodGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlU2l6ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=