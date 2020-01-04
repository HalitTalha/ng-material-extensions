/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Host, Renderer2, Self, Optional, ViewContainerRef } from '@angular/core';
import { MatTable } from '@angular/material';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWV4cG9ydGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9tYXQtdGFibGUtZXhwb3J0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFvQyxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU1uRyxNQUFNLE9BQU8seUJBQTBCLFNBQVEsZ0JBQWdCOzs7Ozs7OztJQWE3RCxZQUFZLFFBQW1CLEVBQ25CLGNBQXFDLEVBQ3JDLGFBQW1DLEVBQ1AsS0FBb0IsRUFDaEQsZ0JBQWtDO1FBQ2xDLEtBQUssQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7OztJQWZELGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQWNNLFlBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFNTSxtQkFBbUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7Ozs7Ozs7SUFNTSxRQUFRLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7SUFNTSx1QkFBdUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBR08sWUFBWTtRQUNsQixPQUFPLENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQTJCLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLEtBQWM7UUFDcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7OztZQXBFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJDQUEyQzs7Z0JBQ3JELFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7Ozs7WUFQd0MsU0FBUztZQUVELHFCQUFxQjtZQUEzQyxvQkFBb0I7WUFESixRQUFRLHVCQXVCcEMsSUFBSSxZQUFJLElBQUksWUFBSSxRQUFRO1lBeEI2QixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEhvc3QsIFJlbmRlcmVyMiwgU2VsZiwgT3B0aW9uYWwsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciwgTWF0VGFibGVEYXRhU291cmNlLCBNYXRUYWJsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IENka1RhYmxlRXhwb3J0ZXIsIERhdGFFeHRyYWN0b3JTZXJ2aWNlLCBTZXJ2aWNlTG9jYXRvclNlcnZpY2UgfSBmcm9tICdjZGstdGFibGUtZXhwb3J0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neE1hdFRhYmxlRXhwb3J0ZXJdLCBbbWF0VGFibGVFeHBvcnRlcl0nLCAvLyByZW5hbWVkIHNlbGVjdG9yIGJ1dCBrZXB0IG9sZCB2ZXJzaW9uIGZvciBiYWNrd2FyZHMgY29tcGF0LlxuICBleHBvcnRBczogJ21hdFRhYmxlRXhwb3J0ZXInXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRXhwb3J0ZXJEaXJlY3RpdmUgZXh0ZW5kcyBDZGtUYWJsZUV4cG9ydGVyIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBPdmVycmlkaW5nIG5nQWZ0ZXJWaWV3SW5pdCBvZiBUYWJsZUV4cG9ydGVyXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5leHBvcnRTdGFydGVkLnN1YnNjcmliZShfID0+IHtcbiAgICAgIHRoaXMuZW5hYmxlUGFnaW5hdG9yKGZhbHNlKTtcbiAgICB9KTtcbiAgICB0aGlzLmV4cG9ydENvbXBsZXRlZC5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICB0aGlzLmVuYWJsZVBhZ2luYXRvcih0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHNlcnZpY2VMb2NhdG9yOiBTZXJ2aWNlTG9jYXRvclNlcnZpY2UsXG4gICAgICAgICAgICAgIGRhdGFFeHRyYWN0b3I6IERhdGFFeHRyYWN0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICBASG9zdCgpIEBTZWxmKCkgQE9wdGlvbmFsKCkgdGFibGU6IE1hdFRhYmxlPGFueT4sXG4gICAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgICAgICAgc3VwZXIocmVuZGVyZXIsIHNlcnZpY2VMb2NhdG9yLCBkYXRhRXh0cmFjdG9yLCB0YWJsZSwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cblxuICAvKipcbiAgICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ2V0UGFnZUNvdW50XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHVibGljIGdldFBhZ2VDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldFBhZ2luYXRvcigpLmdldE51bWJlck9mUGFnZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRUYWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBnZXRDdXJyZW50UGFnZUluZGV4XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHVibGljIGdldEN1cnJlbnRQYWdlSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ29Ub1BhZ2VcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwdWJsaWMgZ29Ub1BhZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZUluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5nZXRQYWdpbmF0b3IoKS5fY2hhbmdlUGFnZVNpemUodGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlU2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ2V0UGFnZUNoYW5nZU9ic2VydmFibGVcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwdWJsaWMgZ2V0UGFnZUNoYW5nZU9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlO1xuICB9XG5cblxuICBwcml2YXRlIGdldFBhZ2luYXRvcigpOiBNYXRQYWdpbmF0b3Ige1xuICAgIHJldHVybiAodGhpcy5jZGtUYWJsZS5kYXRhU291cmNlIGFzIE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KS5wYWdpbmF0b3I7XG4gIH1cblxuICBwcml2YXRlIGVuYWJsZVBhZ2luYXRvcih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmdldFBhZ2luYXRvcigpKSB7XG4gICAgICB0aGlzLmdldFBhZ2luYXRvcigpLmRpc2FibGVkID0gIXZhbHVlO1xuICAgICAgdGhpcy5nZXRQYWdpbmF0b3IoKS5fY2hhbmdlUGFnZVNpemUodGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlU2l6ZSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==