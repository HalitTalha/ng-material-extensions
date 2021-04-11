import { Directive, Host, Optional, Renderer2, Self } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { CdkTableExporter, DataExtractorService, ServiceLocatorService } from 'cdk-table-exporter';
export class MatTableExporterDirective extends CdkTableExporter {
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
        return (_b = (_a = this.getPaginator()) === null || _a === void 0 ? void 0 : _a.pageSize) !== null && _b !== void 0 ? _b : 0;
    }
    /**
     * MatTable implementation of getCurrentPageIndex
     */
    getCurrentPageIndex() {
        var _a, _b;
        return (_b = (_a = this.getPaginator()) === null || _a === void 0 ? void 0 : _a.pageIndex) !== null && _b !== void 0 ? _b : 0;
    }
    /**
     * MatTable implementation of getTotalItemsCount
     */
    getTotalItemsCount() {
        var _a, _b, _c, _d, _e;
        return (_e = (_b = (_a = this.getPaginator()) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : (_d = (_c = this.getDataSource()) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.length) !== null && _e !== void 0 ? _e : 0;
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
}
MatTableExporterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[matTableExporter]',
                exportAs: 'matTableExporter'
            },] }
];
MatTableExporterDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ServiceLocatorService },
    { type: DataExtractorService },
    { type: MatTable, decorators: [{ type: Host }, { type: Self }, { type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWV4cG9ydGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9hbmd1bGFyX3dvcmtzcGFjZS9uZy1tYXRlcmlhbC1leHRlbnNpb25zL3Byb2plY3RzL21hdC10YWJsZS1leHBvcnRlci9zcmMvIiwic291cmNlcyI6WyJsaWIvbWF0LXRhYmxlLWV4cG9ydGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFFLFFBQVEsRUFBc0IsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU9uRyxNQUFNLE9BQU8seUJBQTBCLFNBQVEsZ0JBQWdCO0lBYTdELFlBQ0UsUUFBbUIsRUFDbkIsY0FBcUMsRUFDckMsYUFBbUMsRUFDUCxLQUFvQjtRQUVoRCxLQUFLLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQW5CRDs7T0FFRztJQUNILGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFXRDs7T0FFRztJQUNJLFlBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXOztRQUNoQixtQkFBTyxJQUFJLENBQUMsWUFBWSxFQUFFLDBDQUFFLFFBQVEsbUNBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7T0FFRztJQUNJLG1CQUFtQjs7UUFDeEIsbUJBQU8sSUFBSSxDQUFDLFlBQVksRUFBRSwwQ0FBRSxTQUFTLG1DQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxrQkFBa0I7O1FBQ3ZCLHlCQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsMENBQUUsTUFBTSwrQ0FBSSxJQUFJLENBQUMsYUFBYSxFQUFFLDBDQUFFLElBQUksMENBQUUsTUFBTSxtQ0FBSSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVEOztPQUVHO0lBQ0ksUUFBUSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVEOztPQUVHO0lBQ0ksdUJBQXVCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRU8sYUFBYTtRQUNuQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBcUMsQ0FBQztJQUM5RCxDQUFDO0lBRU8sWUFBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUVPLGVBQWUsQ0FBQyxLQUFjO1FBQ3BDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDdEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkU7SUFDSCxDQUFDOzs7WUFsRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7OztZQVRrRCxTQUFTO1lBR1gscUJBQXFCO1lBQTNDLG9CQUFvQjtZQUR0QyxRQUFRLHVCQXlCWixJQUFJLFlBQUksSUFBSSxZQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEhvc3QsIE9wdGlvbmFsLCBSZW5kZXJlcjIsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9yIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcclxuaW1wb3J0IHsgTWF0VGFibGUsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcclxuaW1wb3J0IHsgQ2RrVGFibGVFeHBvcnRlciwgRGF0YUV4dHJhY3RvclNlcnZpY2UsIFNlcnZpY2VMb2NhdG9yU2VydmljZSB9IGZyb20gJ2Nkay10YWJsZS1leHBvcnRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21hdFRhYmxlRXhwb3J0ZXJdJyxcclxuICBleHBvcnRBczogJ21hdFRhYmxlRXhwb3J0ZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUV4cG9ydGVyRGlyZWN0aXZlIGV4dGVuZHMgQ2RrVGFibGVFeHBvcnRlciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIC8qKlxyXG4gICAqIE92ZXJyaWRpbmcgbmdBZnRlclZpZXdJbml0IG9mIFRhYmxlRXhwb3J0ZXJcclxuICAgKi9cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmV4cG9ydFN0YXJ0ZWQuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICB0aGlzLmVuYWJsZVBhZ2luYXRvcihmYWxzZSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZXhwb3J0Q29tcGxldGVkLnN1YnNjcmliZShfID0+IHtcclxuICAgICAgdGhpcy5lbmFibGVQYWdpbmF0b3IodHJ1ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHNlcnZpY2VMb2NhdG9yOiBTZXJ2aWNlTG9jYXRvclNlcnZpY2UsXHJcbiAgICBkYXRhRXh0cmFjdG9yOiBEYXRhRXh0cmFjdG9yU2VydmljZSxcclxuICAgIEBIb3N0KCkgQFNlbGYoKSBAT3B0aW9uYWwoKSB0YWJsZTogTWF0VGFibGU8YW55PlxyXG4gICkge1xyXG4gICAgc3VwZXIocmVuZGVyZXIsIHNlcnZpY2VMb2NhdG9yLCBkYXRhRXh0cmFjdG9yLCB0YWJsZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXRUYWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBnZXRQYWdlQ291bnRcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0UGFnZUNvdW50KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdpbmF0b3IoKS5nZXROdW1iZXJPZlBhZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXRUYWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBnZXRQYWdlU2l6ZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRQYWdlU2l6ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFnaW5hdG9yKCk/LnBhZ2VTaXplID8/IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXRUYWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBnZXRDdXJyZW50UGFnZUluZGV4XHJcbiAgICovXHJcbiAgcHVibGljIGdldEN1cnJlbnRQYWdlSW5kZXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmdldFBhZ2luYXRvcigpPy5wYWdlSW5kZXggPz8gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdldFRvdGFsSXRlbXNDb3VudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRUb3RhbEl0ZW1zQ291bnQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmdldFBhZ2luYXRvcigpPy5sZW5ndGggPz8gdGhpcy5nZXREYXRhU291cmNlKCk/LmRhdGE/Lmxlbmd0aCA/PyAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ29Ub1BhZ2VcclxuICAgKi9cclxuICBwdWJsaWMgZ29Ub1BhZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlSW5kZXggPSBpbmRleDtcclxuICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkuX2NoYW5nZVBhZ2VTaXplKHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZVNpemUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ2V0UGFnZUNoYW5nZU9ic2VydmFibGVcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0UGFnZUNoYW5nZU9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERhdGFTb3VyY2UoKTogTWF0VGFibGVEYXRhU291cmNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Nka1RhYmxlLmRhdGFTb3VyY2UgYXMgTWF0VGFibGVEYXRhU291cmNlPGFueT47XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhZ2luYXRvcigpOiBNYXRQYWdpbmF0b3Ige1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLnBhZ2luYXRvcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW5hYmxlUGFnaW5hdG9yKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5nZXRQYWdpbmF0b3IoKSkge1xyXG4gICAgICB0aGlzLmdldFBhZ2luYXRvcigpLmRpc2FibGVkID0gIXZhbHVlO1xyXG4gICAgICB0aGlzLmdldFBhZ2luYXRvcigpLl9jaGFuZ2VQYWdlU2l6ZSh0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2VTaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==