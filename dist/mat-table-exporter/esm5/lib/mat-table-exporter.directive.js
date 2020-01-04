/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Host, Renderer2, Self, Optional, ViewContainerRef } from '@angular/core';
import { MatTable } from '@angular/material';
import { CdkTableExporter, DataExtractorService, ServiceLocatorService } from 'cdk-table-exporter';
var MatTableExporterDirective = /** @class */ (function (_super) {
    tslib_1.__extends(MatTableExporterDirective, _super);
    function MatTableExporterDirective(renderer, serviceLocator, dataExtractor, table, viewContainerRef) {
        return _super.call(this, renderer, serviceLocator, dataExtractor, table, viewContainerRef) || this;
    }
    /**
     * Overriding ngAfterViewInit of TableExporter
     */
    /**
     * Overriding ngAfterViewInit of TableExporter
     * @return {?}
     */
    MatTableExporterDirective.prototype.ngAfterViewInit = /**
     * Overriding ngAfterViewInit of TableExporter
     * @return {?}
     */
    function () {
        var _this = this;
        this.exportStarted.subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.enablePaginator(false);
        }));
        this.exportCompleted.subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.enablePaginator(true);
        }));
    };
    /**
     * MatTable implementation of getPageCount
     * @override
     */
    /**
     * MatTable implementation of getPageCount
     * @override
     * @return {?}
     */
    MatTableExporterDirective.prototype.getPageCount = /**
     * MatTable implementation of getPageCount
     * @override
     * @return {?}
     */
    function () {
        return this.getPaginator().getNumberOfPages();
    };
    /**
     * MatTable implementation of getCurrentPageIndex
     * @override
     */
    /**
     * MatTable implementation of getCurrentPageIndex
     * @override
     * @return {?}
     */
    MatTableExporterDirective.prototype.getCurrentPageIndex = /**
     * MatTable implementation of getCurrentPageIndex
     * @override
     * @return {?}
     */
    function () {
        return this.getPaginator().pageIndex;
    };
    /**
     * MatTable implementation of goToPage
     * @override
     */
    /**
     * MatTable implementation of goToPage
     * @override
     * @param {?} index
     * @return {?}
     */
    MatTableExporterDirective.prototype.goToPage = /**
     * MatTable implementation of goToPage
     * @override
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.getPaginator().pageIndex = index;
        this.getPaginator()._changePageSize(this.getPaginator().pageSize);
    };
    /**
     * MatTable implementation of getPageChangeObservable
     * @override
     */
    /**
     * MatTable implementation of getPageChangeObservable
     * @override
     * @return {?}
     */
    MatTableExporterDirective.prototype.getPageChangeObservable = /**
     * MatTable implementation of getPageChangeObservable
     * @override
     * @return {?}
     */
    function () {
        return this.getPaginator().page;
    };
    /**
     * @private
     * @return {?}
     */
    MatTableExporterDirective.prototype.getPaginator = /**
     * @private
     * @return {?}
     */
    function () {
        return ((/** @type {?} */ (this.cdkTable.dataSource))).paginator;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MatTableExporterDirective.prototype.enablePaginator = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.getPaginator()) {
            this.getPaginator().disabled = !value;
            this.getPaginator()._changePageSize(this.getPaginator().pageSize);
        }
    };
    MatTableExporterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxMatTableExporter], [matTableExporter]',
                    // renamed selector but kept old version for backwards compat.
                    exportAs: 'matTableExporter'
                },] }
    ];
    /** @nocollapse */
    MatTableExporterDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ServiceLocatorService },
        { type: DataExtractorService },
        { type: MatTable, decorators: [{ type: Host }, { type: Self }, { type: Optional }] },
        { type: ViewContainerRef }
    ]; };
    return MatTableExporterDirective;
}(CdkTableExporter));
export { MatTableExporterDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWV4cG9ydGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9tYXQtdGFibGUtZXhwb3J0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBb0MsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkc7SUFJK0MscURBQWdCO0lBYTdELG1DQUFZLFFBQW1CLEVBQ25CLGNBQXFDLEVBQ3JDLGFBQW1DLEVBQ1AsS0FBb0IsRUFDaEQsZ0JBQWtDO2VBQ2xDLGtCQUFNLFFBQVEsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQztJQUNuRixDQUFDO0lBbEJEOztPQUVHOzs7OztJQUNILG1EQUFlOzs7O0lBQWY7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQztZQUM1QixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBVUQ7OztPQUdHOzs7Ozs7SUFDSSxnREFBWTs7Ozs7SUFBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLHVEQUFtQjs7Ozs7SUFBMUI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNJLDRDQUFROzs7Ozs7SUFBZixVQUFnQixLQUFhO1FBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLDJEQUF1Qjs7Ozs7SUFBOUI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFHTyxnREFBWTs7OztJQUFwQjtRQUNFLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBMkIsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7SUFFTyxtREFBZTs7Ozs7SUFBdkIsVUFBd0IsS0FBYztRQUNwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQzs7Z0JBcEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkNBQTJDOztvQkFDckQsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7Ozs7Z0JBUHdDLFNBQVM7Z0JBRUQscUJBQXFCO2dCQUEzQyxvQkFBb0I7Z0JBREosUUFBUSx1QkF1QnBDLElBQUksWUFBSSxJQUFJLFlBQUksUUFBUTtnQkF4QjZCLGdCQUFnQjs7SUEwRXBGLGdDQUFDO0NBQUEsQUF0RUQsQ0FJK0MsZ0JBQWdCLEdBa0U5RDtTQWxFWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEhvc3QsIFJlbmRlcmVyMiwgU2VsZiwgT3B0aW9uYWwsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciwgTWF0VGFibGVEYXRhU291cmNlLCBNYXRUYWJsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IENka1RhYmxlRXhwb3J0ZXIsIERhdGFFeHRyYWN0b3JTZXJ2aWNlLCBTZXJ2aWNlTG9jYXRvclNlcnZpY2UgfSBmcm9tICdjZGstdGFibGUtZXhwb3J0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neE1hdFRhYmxlRXhwb3J0ZXJdLCBbbWF0VGFibGVFeHBvcnRlcl0nLCAvLyByZW5hbWVkIHNlbGVjdG9yIGJ1dCBrZXB0IG9sZCB2ZXJzaW9uIGZvciBiYWNrd2FyZHMgY29tcGF0LlxuICBleHBvcnRBczogJ21hdFRhYmxlRXhwb3J0ZXInXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRXhwb3J0ZXJEaXJlY3RpdmUgZXh0ZW5kcyBDZGtUYWJsZUV4cG9ydGVyIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBPdmVycmlkaW5nIG5nQWZ0ZXJWaWV3SW5pdCBvZiBUYWJsZUV4cG9ydGVyXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5leHBvcnRTdGFydGVkLnN1YnNjcmliZShfID0+IHtcbiAgICAgIHRoaXMuZW5hYmxlUGFnaW5hdG9yKGZhbHNlKTtcbiAgICB9KTtcbiAgICB0aGlzLmV4cG9ydENvbXBsZXRlZC5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICB0aGlzLmVuYWJsZVBhZ2luYXRvcih0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHNlcnZpY2VMb2NhdG9yOiBTZXJ2aWNlTG9jYXRvclNlcnZpY2UsXG4gICAgICAgICAgICAgIGRhdGFFeHRyYWN0b3I6IERhdGFFeHRyYWN0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICBASG9zdCgpIEBTZWxmKCkgQE9wdGlvbmFsKCkgdGFibGU6IE1hdFRhYmxlPGFueT4sXG4gICAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgICAgICAgc3VwZXIocmVuZGVyZXIsIHNlcnZpY2VMb2NhdG9yLCBkYXRhRXh0cmFjdG9yLCB0YWJsZSwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cblxuICAvKipcbiAgICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ2V0UGFnZUNvdW50XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHVibGljIGdldFBhZ2VDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldFBhZ2luYXRvcigpLmdldE51bWJlck9mUGFnZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRUYWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBnZXRDdXJyZW50UGFnZUluZGV4XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHVibGljIGdldEN1cnJlbnRQYWdlSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ29Ub1BhZ2VcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwdWJsaWMgZ29Ub1BhZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZUluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5nZXRQYWdpbmF0b3IoKS5fY2hhbmdlUGFnZVNpemUodGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlU2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ2V0UGFnZUNoYW5nZU9ic2VydmFibGVcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwdWJsaWMgZ2V0UGFnZUNoYW5nZU9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlO1xuICB9XG5cblxuICBwcml2YXRlIGdldFBhZ2luYXRvcigpOiBNYXRQYWdpbmF0b3Ige1xuICAgIHJldHVybiAodGhpcy5jZGtUYWJsZS5kYXRhU291cmNlIGFzIE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KS5wYWdpbmF0b3I7XG4gIH1cblxuICBwcml2YXRlIGVuYWJsZVBhZ2luYXRvcih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmdldFBhZ2luYXRvcigpKSB7XG4gICAgICB0aGlzLmdldFBhZ2luYXRvcigpLmRpc2FibGVkID0gIXZhbHVlO1xuICAgICAgdGhpcy5nZXRQYWdpbmF0b3IoKS5fY2hhbmdlUGFnZVNpemUodGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlU2l6ZSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==