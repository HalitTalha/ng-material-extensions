/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Host, Renderer2, Self, Optional, ViewContainerRef } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { CdkTableExporter, DataExtractorService, ServiceLocatorService } from 'cdk-table-exporter';
export class MatTableExporterDirective extends CdkTableExporter {
    /**
     * @param {?} renderer
     * @param {?} serviceLocator
     * @param {?} dataExtractor
     * @param {?} table
     * @param {?} viewContainerRef
     */
    constructor(renderer, serviceLocator, dataExtractor, table, viewContainerRef) {
        super(renderer, serviceLocator, dataExtractor, table, viewContainerRef);
    }
    /**
     * Overriding ngAfterViewInit of TableExporter
     * @return {?}
     */
    ngAfterViewInit() {
        this.exportStarted.subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this.enablePaginator(false);
        }));
        this.exportCompleted.subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this.enablePaginator(true);
        }));
    }
    /**
     * MatTable implementation of getPageCount
     * @override
     * @return {?}
     */
    getPageCount() {
        return this.getPaginator().getNumberOfPages();
    }
    /**
     * MatTable implementation of getCurrentPageIndex
     * @override
     * @return {?}
     */
    getCurrentPageIndex() {
        return this.getPaginator().pageIndex;
    }
    /**
     * MatTable implementation of goToPage
     * @override
     * @param {?} index
     * @return {?}
     */
    goToPage(index) {
        this.getPaginator().pageIndex = index;
        this.getPaginator()._changePageSize(this.getPaginator().pageSize);
    }
    /**
     * MatTable implementation of getPageChangeObservable
     * @override
     * @return {?}
     */
    getPageChangeObservable() {
        return this.getPaginator().page;
    }
    /**
     * @private
     * @return {?}
     */
    getPaginator() {
        return ((/** @type {?} */ (this.cdkTable.dataSource))).paginator;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    enablePaginator(value) {
        if (this.getPaginator()) {
            this.getPaginator().disabled = !value;
            this.getPaginator()._changePageSize(this.getPaginator().pageSize);
        }
    }
}
MatTableExporterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxMatTableExporter], [matTableExporter]',
                // renamed selector but kept old version for backwards compat.
                exportAs: 'matTableExporter'
            },] }
];
/** @nocollapse */
MatTableExporterDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ServiceLocatorService },
    { type: DataExtractorService },
    { type: MatTable, decorators: [{ type: Host }, { type: Self }, { type: Optional }] },
    { type: ViewContainerRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWV4cG9ydGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9tYXQtdGFibGUtZXhwb3J0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDbkgsT0FBTyxFQUFzQixRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU1uRyxNQUFNLE9BQU8seUJBQTBCLFNBQVEsZ0JBQWdCOzs7Ozs7OztJQWE3RCxZQUFZLFFBQW1CLEVBQ25CLGNBQXFDLEVBQ3JDLGFBQW1DLEVBQ1AsS0FBb0IsRUFDaEQsZ0JBQWtDO1FBQ2xDLEtBQUssQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7OztJQWZELGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQWNNLFlBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFNTSxtQkFBbUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7Ozs7Ozs7SUFNTSxRQUFRLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7SUFNTSx1QkFBdUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBR08sWUFBWTtRQUNsQixPQUFPLENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQTJCLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLEtBQWM7UUFDcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7OztZQXBFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJDQUEyQzs7Z0JBQ3JELFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7Ozs7WUFSd0MsU0FBUztZQUdELHFCQUFxQjtZQUEzQyxvQkFBb0I7WUFGbEIsUUFBUSx1QkF3QnRCLElBQUksWUFBSSxJQUFJLFlBQUksUUFBUTtZQXpCNkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBIb3N0LCBSZW5kZXJlcjIsIFNlbGYsIE9wdGlvbmFsLCBWaWV3Q29udGFpbmVyUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlLCBNYXRUYWJsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQgeyBDZGtUYWJsZUV4cG9ydGVyLCBEYXRhRXh0cmFjdG9yU2VydmljZSwgU2VydmljZUxvY2F0b3JTZXJ2aWNlIH0gZnJvbSAnY2RrLXRhYmxlLWV4cG9ydGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hNYXRUYWJsZUV4cG9ydGVyXSwgW21hdFRhYmxlRXhwb3J0ZXJdJywgLy8gcmVuYW1lZCBzZWxlY3RvciBidXQga2VwdCBvbGQgdmVyc2lvbiBmb3IgYmFja3dhcmRzIGNvbXBhdC5cbiAgZXhwb3J0QXM6ICdtYXRUYWJsZUV4cG9ydGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUV4cG9ydGVyRGlyZWN0aXZlIGV4dGVuZHMgQ2RrVGFibGVFeHBvcnRlciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogT3ZlcnJpZGluZyBuZ0FmdGVyVmlld0luaXQgb2YgVGFibGVFeHBvcnRlclxuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZXhwb3J0U3RhcnRlZC5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICB0aGlzLmVuYWJsZVBhZ2luYXRvcihmYWxzZSk7XG4gICAgfSk7XG4gICAgdGhpcy5leHBvcnRDb21wbGV0ZWQuc3Vic2NyaWJlKF8gPT4ge1xuICAgICAgdGhpcy5lbmFibGVQYWdpbmF0b3IodHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBzZXJ2aWNlTG9jYXRvcjogU2VydmljZUxvY2F0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICBkYXRhRXh0cmFjdG9yOiBEYXRhRXh0cmFjdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgQEhvc3QoKSBAU2VsZigpIEBPcHRpb25hbCgpIHRhYmxlOiBNYXRUYWJsZTxhbnk+LFxuICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgICAgICAgIHN1cGVyKHJlbmRlcmVyLCBzZXJ2aWNlTG9jYXRvciwgZGF0YUV4dHJhY3RvciwgdGFibGUsIHZpZXdDb250YWluZXJSZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdldFBhZ2VDb3VudFxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHB1YmxpYyBnZXRQYWdlQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdpbmF0b3IoKS5nZXROdW1iZXJPZlBhZ2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ2V0Q3VycmVudFBhZ2VJbmRleFxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHB1YmxpYyBnZXRDdXJyZW50UGFnZUluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZUluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdvVG9QYWdlXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHVibGljIGdvVG9QYWdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2VJbmRleCA9IGluZGV4O1xuICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkuX2NoYW5nZVBhZ2VTaXplKHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZVNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHVibGljIGdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBnZXRQYWdpbmF0b3IoKTogTWF0UGFnaW5hdG9yIHtcbiAgICByZXR1cm4gKHRoaXMuY2RrVGFibGUuZGF0YVNvdXJjZSBhcyBNYXRUYWJsZURhdGFTb3VyY2U8YW55PikucGFnaW5hdG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBlbmFibGVQYWdpbmF0b3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5nZXRQYWdpbmF0b3IoKSkge1xuICAgICAgdGhpcy5nZXRQYWdpbmF0b3IoKS5kaXNhYmxlZCA9ICF2YWx1ZTtcbiAgICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkuX2NoYW5nZVBhZ2VTaXplKHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZVNpemUpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=