/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Host, Renderer2, Self, Optional, ViewContainerRef } from '@angular/core';
import { MatTable } from '@angular/material/table';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWV4cG9ydGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9tYXQtdGFibGUtZXhwb3J0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBc0IsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkc7SUFJK0MscURBQWdCO0lBYTdELG1DQUFZLFFBQW1CLEVBQ25CLGNBQXFDLEVBQ3JDLGFBQW1DLEVBQ1AsS0FBb0IsRUFDaEQsZ0JBQWtDO2VBQ2xDLGtCQUFNLFFBQVEsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQztJQUNuRixDQUFDO0lBbEJEOztPQUVHOzs7OztJQUNILG1EQUFlOzs7O0lBQWY7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQztZQUM1QixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBVUQ7OztPQUdHOzs7Ozs7SUFDSSxnREFBWTs7Ozs7SUFBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLHVEQUFtQjs7Ozs7SUFBMUI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNJLDRDQUFROzs7Ozs7SUFBZixVQUFnQixLQUFhO1FBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLDJEQUF1Qjs7Ozs7SUFBOUI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFHTyxnREFBWTs7OztJQUFwQjtRQUNFLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBMkIsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7SUFFTyxtREFBZTs7Ozs7SUFBdkIsVUFBd0IsS0FBYztRQUNwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQzs7Z0JBcEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkNBQTJDOztvQkFDckQsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7Ozs7Z0JBUndDLFNBQVM7Z0JBR0QscUJBQXFCO2dCQUEzQyxvQkFBb0I7Z0JBRmxCLFFBQVEsdUJBd0J0QixJQUFJLFlBQUksSUFBSSxZQUFJLFFBQVE7Z0JBekI2QixnQkFBZ0I7O0lBMkVwRixnQ0FBQztDQUFBLEFBdEVELENBSStDLGdCQUFnQixHQWtFOUQ7U0FsRVkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBIb3N0LCBSZW5kZXJlcjIsIFNlbGYsIE9wdGlvbmFsLCBWaWV3Q29udGFpbmVyUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlLCBNYXRUYWJsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQgeyBDZGtUYWJsZUV4cG9ydGVyLCBEYXRhRXh0cmFjdG9yU2VydmljZSwgU2VydmljZUxvY2F0b3JTZXJ2aWNlIH0gZnJvbSAnY2RrLXRhYmxlLWV4cG9ydGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hNYXRUYWJsZUV4cG9ydGVyXSwgW21hdFRhYmxlRXhwb3J0ZXJdJywgLy8gcmVuYW1lZCBzZWxlY3RvciBidXQga2VwdCBvbGQgdmVyc2lvbiBmb3IgYmFja3dhcmRzIGNvbXBhdC5cbiAgZXhwb3J0QXM6ICdtYXRUYWJsZUV4cG9ydGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUV4cG9ydGVyRGlyZWN0aXZlIGV4dGVuZHMgQ2RrVGFibGVFeHBvcnRlciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogT3ZlcnJpZGluZyBuZ0FmdGVyVmlld0luaXQgb2YgVGFibGVFeHBvcnRlclxuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZXhwb3J0U3RhcnRlZC5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICB0aGlzLmVuYWJsZVBhZ2luYXRvcihmYWxzZSk7XG4gICAgfSk7XG4gICAgdGhpcy5leHBvcnRDb21wbGV0ZWQuc3Vic2NyaWJlKF8gPT4ge1xuICAgICAgdGhpcy5lbmFibGVQYWdpbmF0b3IodHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBzZXJ2aWNlTG9jYXRvcjogU2VydmljZUxvY2F0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICBkYXRhRXh0cmFjdG9yOiBEYXRhRXh0cmFjdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgQEhvc3QoKSBAU2VsZigpIEBPcHRpb25hbCgpIHRhYmxlOiBNYXRUYWJsZTxhbnk+LFxuICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgICAgICAgIHN1cGVyKHJlbmRlcmVyLCBzZXJ2aWNlTG9jYXRvciwgZGF0YUV4dHJhY3RvciwgdGFibGUsIHZpZXdDb250YWluZXJSZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdldFBhZ2VDb3VudFxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHB1YmxpYyBnZXRQYWdlQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdpbmF0b3IoKS5nZXROdW1iZXJPZlBhZ2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ2V0Q3VycmVudFBhZ2VJbmRleFxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHB1YmxpYyBnZXRDdXJyZW50UGFnZUluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZUluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdvVG9QYWdlXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHVibGljIGdvVG9QYWdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2VJbmRleCA9IGluZGV4O1xuICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkuX2NoYW5nZVBhZ2VTaXplKHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZVNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHVibGljIGdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBnZXRQYWdpbmF0b3IoKTogTWF0UGFnaW5hdG9yIHtcbiAgICByZXR1cm4gKHRoaXMuY2RrVGFibGUuZGF0YVNvdXJjZSBhcyBNYXRUYWJsZURhdGFTb3VyY2U8YW55PikucGFnaW5hdG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBlbmFibGVQYWdpbmF0b3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5nZXRQYWdpbmF0b3IoKSkge1xuICAgICAgdGhpcy5nZXRQYWdpbmF0b3IoKS5kaXNhYmxlZCA9ICF2YWx1ZTtcbiAgICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkuX2NoYW5nZVBhZ2VTaXplKHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZVNpemUpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=