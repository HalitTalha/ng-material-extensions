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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWV4cG9ydGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9tYXQtdGFibGUtZXhwb3J0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFvQyxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU1uRyxNQUFNLE9BQU8seUJBQTBCLFNBQVEsZ0JBQWdCOzs7Ozs7OztJQWM3RCxZQUFZLFFBQW1CLEVBQ25CLGNBQXFDLEVBQ3JDLGFBQW1DLEVBQ1AsS0FBb0IsRUFDaEQsZ0JBQWtDO1FBQ2xDLEtBQUssQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7OztJQWZELGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQWNNLFlBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFNTSxtQkFBbUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7Ozs7Ozs7SUFNTSxRQUFRLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7SUFNTSx1QkFBdUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBR08sWUFBWTtRQUNsQixPQUFPLENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQTJCLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLEtBQWM7UUFDcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7OztZQXJFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJDQUEyQzs7Z0JBQ3JELFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7Ozs7WUFQd0MsU0FBUztZQUVELHFCQUFxQjtZQUEzQyxvQkFBb0I7WUFESixRQUFRLHVCQXdCcEMsSUFBSSxZQUFJLElBQUksWUFBSSxRQUFRO1lBekI2QixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEhvc3QsIFJlbmRlcmVyMiwgU2VsZiwgT3B0aW9uYWwsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciwgTWF0VGFibGVEYXRhU291cmNlLCBNYXRUYWJsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IENka1RhYmxlRXhwb3J0ZXIsIERhdGFFeHRyYWN0b3JTZXJ2aWNlLCBTZXJ2aWNlTG9jYXRvclNlcnZpY2UgfSBmcm9tICdjZGstdGFibGUtZXhwb3J0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neE1hdFRhYmxlRXhwb3J0ZXJdLCBbbWF0VGFibGVFeHBvcnRlcl0nLCAvLyByZW5hbWVkIHNlbGVjdG9yIGJ1dCBrZXB0IG9sZCB2ZXJzaW9uIGZvciBiYWNrd2FyZHMgY29tcGF0LlxuICBleHBvcnRBczogJ21hdFRhYmxlRXhwb3J0ZXInXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRXhwb3J0ZXJEaXJlY3RpdmUgZXh0ZW5kcyBDZGtUYWJsZUV4cG9ydGVyIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRpbmcgbmdBZnRlclZpZXdJbml0IG9mIFRhYmxlRXhwb3J0ZXJcbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmV4cG9ydFN0YXJ0ZWQuc3Vic2NyaWJlKF8gPT4ge1xuICAgICAgdGhpcy5lbmFibGVQYWdpbmF0b3IoZmFsc2UpO1xuICAgIH0pO1xuICAgIHRoaXMuZXhwb3J0Q29tcGxldGVkLnN1YnNjcmliZShfID0+IHtcbiAgICAgIHRoaXMuZW5hYmxlUGFnaW5hdG9yKHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgc2VydmljZUxvY2F0b3I6IFNlcnZpY2VMb2NhdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgZGF0YUV4dHJhY3RvcjogRGF0YUV4dHJhY3RvclNlcnZpY2UsXG4gICAgICAgICAgICAgIEBIb3N0KCkgQFNlbGYoKSBAT3B0aW9uYWwoKSB0YWJsZTogTWF0VGFibGU8YW55PixcbiAgICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICAgICAgICBzdXBlcihyZW5kZXJlciwgc2VydmljZUxvY2F0b3IsIGRhdGFFeHRyYWN0b3IsIHRhYmxlLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRUYWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBnZXRQYWdlQ291bnRcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwdWJsaWMgZ2V0UGFnZUNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFnaW5hdG9yKCkuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdldEN1cnJlbnRQYWdlSW5kZXhcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwdWJsaWMgZ2V0Q3VycmVudFBhZ2VJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2VJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRUYWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBnb1RvUGFnZVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHB1YmxpYyBnb1RvUGFnZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlSW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmdldFBhZ2luYXRvcigpLl9jaGFuZ2VQYWdlU2l6ZSh0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2VTaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRUYWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBnZXRQYWdlQ2hhbmdlT2JzZXJ2YWJsZVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHB1YmxpYyBnZXRQYWdlQ2hhbmdlT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2U7XG4gIH1cblxuXG4gIHByaXZhdGUgZ2V0UGFnaW5hdG9yKCk6IE1hdFBhZ2luYXRvciB7XG4gICAgcmV0dXJuICh0aGlzLmNka1RhYmxlLmRhdGFTb3VyY2UgYXMgTWF0VGFibGVEYXRhU291cmNlPGFueT4pLnBhZ2luYXRvcjtcbiAgfVxuXG4gIHByaXZhdGUgZW5hYmxlUGFnaW5hdG9yKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuZ2V0UGFnaW5hdG9yKCkpIHtcbiAgICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkuZGlzYWJsZWQgPSAhdmFsdWU7XG4gICAgICB0aGlzLmdldFBhZ2luYXRvcigpLl9jaGFuZ2VQYWdlU2l6ZSh0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2VTaXplKTtcbiAgICB9XG4gIH1cblxufVxuIl19