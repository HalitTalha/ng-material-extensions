import { Directive, Host, Renderer2, Self, Optional, ViewContainerRef } from '@angular/core';
import { CdkTableExporterDirective, DataExtractorService, ServiceLocatorService } from 'cdk-table-exporter';
import { MatTable } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "cdk-table-exporter";
import * as i2 from "@angular/material/table";
export class MatTableExporterDirective extends CdkTableExporterDirective {
    constructor(renderer, serviceLocator, dataExtractor, table, viewContainerRef) {
        super(renderer, serviceLocator, dataExtractor, table, viewContainerRef);
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
     * MatTable implementation of getCurrentPageIndex
     */
    getCurrentPageIndex() {
        return this.getPaginator().pageIndex;
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
    getPaginator() {
        return this.cdkTable.dataSource.paginator;
    }
    enablePaginator(value) {
        if (this.getPaginator()) {
            this.getPaginator().disabled = !value;
            this.getPaginator()._changePageSize(this.getPaginator().pageSize);
        }
    }
}
MatTableExporterDirective.ɵfac = function MatTableExporterDirective_Factory(t) { return new (t || MatTableExporterDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.ServiceLocatorService), i0.ɵɵdirectiveInject(i1.DataExtractorService), i0.ɵɵdirectiveInject(i2.MatTable, 11), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
MatTableExporterDirective.ɵdir = i0.ɵɵdefineDirective({ type: MatTableExporterDirective, selectors: [["", "matTableExporter", ""]], exportAs: ["matTableExporter"], features: [i0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MatTableExporterDirective, [{
        type: Directive,
        args: [{
                selector: '[matTableExporter]',
                exportAs: 'matTableExporter'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.ServiceLocatorService }, { type: i1.DataExtractorService }, { type: i2.MatTable, decorators: [{
                type: Host
            }, {
                type: Self
            }, {
                type: Optional
            }] }, { type: i0.ViewContainerRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWV4cG9ydGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9tYXQtdGFibGUtZXhwb3J0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU1RyxPQUFPLEVBQUUsUUFBUSxFQUFzQixNQUFNLHlCQUF5QixDQUFDOzs7O0FBT3ZFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSx5QkFBeUI7SUFhdEUsWUFDRSxRQUFtQixFQUNuQixjQUFxQyxFQUNyQyxhQUFtQyxFQUNQLEtBQW9CLEVBQ2hELGdCQUFrQztRQUVsQyxLQUFLLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQXBCRDs7T0FFRztJQUNILGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFZRDs7T0FFRztJQUNJLFlBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxtQkFBbUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVEsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRDs7T0FFRztJQUNJLHVCQUF1QjtRQUM1QixPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUdPLFlBQVk7UUFDbEIsT0FBUSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQXNDLENBQUMsU0FBUyxDQUFDO0lBQ3pFLENBQUM7SUFFTyxlQUFlLENBQUMsS0FBYztRQUNwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQzs7a0dBOURVLHlCQUF5Qjs4REFBekIseUJBQXlCO2tEQUF6Qix5QkFBeUI7Y0FKckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7O3NCQWtCSSxJQUFJOztzQkFBSSxJQUFJOztzQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBIb3N0LCBSZW5kZXJlcjIsIFNlbGYsIE9wdGlvbmFsLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtUYWJsZUV4cG9ydGVyRGlyZWN0aXZlLCBEYXRhRXh0cmFjdG9yU2VydmljZSwgU2VydmljZUxvY2F0b3JTZXJ2aWNlIH0gZnJvbSAnY2RrLXRhYmxlLWV4cG9ydGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1hdFRhYmxlLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3IgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWF0VGFibGVFeHBvcnRlcl0nLCAvLyByZW5hbWVkIHNlbGVjdG9yIGJ1dCBrZXB0IG9sZCB2ZXJzaW9uIGZvciBiYWNrd2FyZHMgY29tcGF0LlxuICBleHBvcnRBczogJ21hdFRhYmxlRXhwb3J0ZXInXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRXhwb3J0ZXJEaXJlY3RpdmUgZXh0ZW5kcyBDZGtUYWJsZUV4cG9ydGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBPdmVycmlkaW5nIG5nQWZ0ZXJWaWV3SW5pdCBvZiBUYWJsZUV4cG9ydGVyXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5leHBvcnRTdGFydGVkLnN1YnNjcmliZShfID0+IHtcbiAgICAgIHRoaXMuZW5hYmxlUGFnaW5hdG9yKGZhbHNlKTtcbiAgICB9KTtcbiAgICB0aGlzLmV4cG9ydENvbXBsZXRlZC5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICB0aGlzLmVuYWJsZVBhZ2luYXRvcih0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgc2VydmljZUxvY2F0b3I6IFNlcnZpY2VMb2NhdG9yU2VydmljZSxcbiAgICBkYXRhRXh0cmFjdG9yOiBEYXRhRXh0cmFjdG9yU2VydmljZSxcbiAgICBASG9zdCgpIEBTZWxmKCkgQE9wdGlvbmFsKCkgdGFibGU6IE1hdFRhYmxlPGFueT4sXG4gICAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxuICApIHtcbiAgICBzdXBlcihyZW5kZXJlciwgc2VydmljZUxvY2F0b3IsIGRhdGFFeHRyYWN0b3IsIHRhYmxlLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRUYWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBnZXRQYWdlQ291bnRcbiAgICovXG4gIHB1YmxpYyBnZXRQYWdlQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdpbmF0b3IoKS5nZXROdW1iZXJPZlBhZ2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ2V0Q3VycmVudFBhZ2VJbmRleFxuICAgKi9cbiAgcHVibGljIGdldEN1cnJlbnRQYWdlSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ29Ub1BhZ2VcbiAgICovXG4gIHB1YmxpYyBnb1RvUGFnZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlSW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmdldFBhZ2luYXRvcigpLl9jaGFuZ2VQYWdlU2l6ZSh0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2VTaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRUYWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBnZXRQYWdlQ2hhbmdlT2JzZXJ2YWJsZVxuICAgKi9cbiAgcHVibGljIGdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBnZXRQYWdpbmF0b3IoKTogTWF0UGFnaW5hdG9yIHtcbiAgICByZXR1cm4gKHRoaXMuY2RrVGFibGUuZGF0YVNvdXJjZSBhcyBNYXRUYWJsZURhdGFTb3VyY2U8YW55PikucGFnaW5hdG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBlbmFibGVQYWdpbmF0b3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5nZXRQYWdpbmF0b3IoKSkge1xuICAgICAgdGhpcy5nZXRQYWdpbmF0b3IoKS5kaXNhYmxlZCA9ICF2YWx1ZTtcbiAgICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkuX2NoYW5nZVBhZ2VTaXplKHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZVNpemUpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=