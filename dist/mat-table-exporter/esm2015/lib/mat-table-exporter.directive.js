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
        return this._cdkTable.dataSource.paginator;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWV4cG9ydGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9tYXQtdGFibGUtZXhwb3J0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT25HLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQTBCLFNBQVEsZ0JBQWdCO0lBYTdELFlBQ0UsUUFBbUIsRUFDbkIsY0FBcUMsRUFDckMsYUFBbUMsRUFDUCxLQUFvQjtRQUVoRCxLQUFLLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQW5CRDs7T0FFRztJQUNILGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFXRDs7T0FFRztJQUNJLFlBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxtQkFBbUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVEsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRDs7T0FFRztJQUNJLHVCQUF1QjtRQUM1QixPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUdPLFlBQVk7UUFDbEIsT0FBUSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQXNDLENBQUMsU0FBUyxDQUFDO0lBQzFFLENBQUM7SUFFTyxlQUFlLENBQUMsS0FBYztRQUNwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQztDQUVGLENBQUE7O1lBakRhLFNBQVM7WUFDSCxxQkFBcUI7WUFDdEIsb0JBQW9CO1lBQ0EsUUFBUSx1QkFBMUMsSUFBSSxZQUFJLElBQUksWUFBSSxRQUFROztBQWpCaEIseUJBQXlCO0lBSnJDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsUUFBUSxFQUFFLGtCQUFrQjtLQUM3QixDQUFDO0lBa0JHLFdBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxXQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsV0FBQSxRQUFRLEVBQUUsQ0FBQTtxQ0FIakIsU0FBUztRQUNILHFCQUFxQjtRQUN0QixvQkFBb0I7UUFDQSxRQUFRO0dBakJsQyx5QkFBeUIsQ0ErRHJDO1NBL0RZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgSG9zdCwgT3B0aW9uYWwsIFJlbmRlcmVyMiwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRQYWdpbmF0b3IgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5pbXBvcnQgeyBNYXRUYWJsZSwgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBDZGtUYWJsZUV4cG9ydGVyLCBEYXRhRXh0cmFjdG9yU2VydmljZSwgU2VydmljZUxvY2F0b3JTZXJ2aWNlIH0gZnJvbSAnY2RrLXRhYmxlLWV4cG9ydGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbWF0VGFibGVFeHBvcnRlcl0nLCAvLyByZW5hbWVkIHNlbGVjdG9yIGJ1dCBrZXB0IG9sZCB2ZXJzaW9uIGZvciBiYWNrd2FyZHMgY29tcGF0LlxyXG4gIGV4cG9ydEFzOiAnbWF0VGFibGVFeHBvcnRlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRXhwb3J0ZXJEaXJlY3RpdmUgZXh0ZW5kcyBDZGtUYWJsZUV4cG9ydGVyIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgLyoqXHJcbiAgICogT3ZlcnJpZGluZyBuZ0FmdGVyVmlld0luaXQgb2YgVGFibGVFeHBvcnRlclxyXG4gICAqL1xyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZXhwb3J0U3RhcnRlZC5zdWJzY3JpYmUoXyA9PiB7XHJcbiAgICAgIHRoaXMuZW5hYmxlUGFnaW5hdG9yKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5leHBvcnRDb21wbGV0ZWQuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICB0aGlzLmVuYWJsZVBhZ2luYXRvcih0cnVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgc2VydmljZUxvY2F0b3I6IFNlcnZpY2VMb2NhdG9yU2VydmljZSxcclxuICAgIGRhdGFFeHRyYWN0b3I6IERhdGFFeHRyYWN0b3JTZXJ2aWNlLFxyXG4gICAgQEhvc3QoKSBAU2VsZigpIEBPcHRpb25hbCgpIHRhYmxlOiBNYXRUYWJsZTxhbnk+XHJcbiAgKSB7XHJcbiAgICBzdXBlcihyZW5kZXJlciwgc2VydmljZUxvY2F0b3IsIGRhdGFFeHRyYWN0b3IsIHRhYmxlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdldFBhZ2VDb3VudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRQYWdlQ291bnQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmdldFBhZ2luYXRvcigpLmdldE51bWJlck9mUGFnZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdldEN1cnJlbnRQYWdlSW5kZXhcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0Q3VycmVudFBhZ2VJbmRleCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZUluZGV4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ29Ub1BhZ2VcclxuICAgKi9cclxuICBwdWJsaWMgZ29Ub1BhZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlSW5kZXggPSBpbmRleDtcclxuICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkuX2NoYW5nZVBhZ2VTaXplKHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZVNpemUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ2V0UGFnZUNoYW5nZU9ic2VydmFibGVcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0UGFnZUNoYW5nZU9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBnZXRQYWdpbmF0b3IoKTogTWF0UGFnaW5hdG9yIHtcclxuICAgIHJldHVybiAodGhpcy5fY2RrVGFibGUuZGF0YVNvdXJjZSBhcyBNYXRUYWJsZURhdGFTb3VyY2U8YW55PikucGFnaW5hdG9yO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbmFibGVQYWdpbmF0b3IodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLmdldFBhZ2luYXRvcigpKSB7XHJcbiAgICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkuZGlzYWJsZWQgPSAhdmFsdWU7XHJcbiAgICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkuX2NoYW5nZVBhZ2VTaXplKHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZVNpemUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19