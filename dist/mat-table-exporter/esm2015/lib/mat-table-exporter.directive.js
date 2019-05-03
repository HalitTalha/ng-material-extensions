/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2 } from '@angular/core';
import { CdkTableExporter, JsonExporterService } from 'cdk-table-exporter';
export class MatTableExporterDirective extends CdkTableExporter {
    /**
     * @param {?} renderer
     * @param {?} jsonExporter
     */
    constructor(renderer, jsonExporter) {
        super(renderer, jsonExporter);
        this.renderer = renderer;
        this.jsonExporter = jsonExporter;
    }
    /**
     * Overriding ngAfterViewInit of TableExporter
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.getPaginator()) {
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
        this.getPaginator().disabled = !value;
        this.getPaginator()._changePageSize(this.getPaginator().pageSize);
    }
}
MatTableExporterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxMatTableExporter]'
            },] }
];
/** @nocollapse */
MatTableExporterDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: JsonExporterService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    MatTableExporterDirective.prototype.renderer;
    /**
     * @type {?}
     * @protected
     */
    MatTableExporterDirective.prototype.jsonExporter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWV4cG9ydGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9tYXQtdGFibGUtZXhwb3J0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNM0UsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGdCQUFnQjs7Ozs7SUFpQjdELFlBQXNCLFFBQW1CLEVBQVksWUFBaUM7UUFDcEYsS0FBSyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQURWLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBWSxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7SUFFdEYsQ0FBQzs7Ozs7SUFkRCxlQUFlO1FBQ2IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUMsRUFBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7OztJQVdNLFlBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFNTSxtQkFBbUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7Ozs7Ozs7SUFNTSxRQUFRLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7SUFNTSx1QkFBdUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBR08sWUFBWTtRQUNsQixPQUFPLENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQTJCLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLEtBQWM7UUFDbEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7WUFsRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7YUFDbEM7Ozs7WUFQa0MsU0FBUztZQUVqQixtQkFBbUI7Ozs7Ozs7SUF1QmhDLDZDQUE2Qjs7Ozs7SUFBRSxpREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBDZGtUYWJsZUV4cG9ydGVyLCBKc29uRXhwb3J0ZXJTZXJ2aWNlIH0gZnJvbSAnY2RrLXRhYmxlLWV4cG9ydGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neE1hdFRhYmxlRXhwb3J0ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUV4cG9ydGVyRGlyZWN0aXZlIGV4dGVuZHMgQ2RrVGFibGVFeHBvcnRlciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4vKipcbiAqIE92ZXJyaWRpbmcgbmdBZnRlclZpZXdJbml0IG9mIFRhYmxlRXhwb3J0ZXJcbiAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG4gICAgaWYgKHRoaXMuZ2V0UGFnaW5hdG9yKCkpIHtcbiAgICAgIHRoaXMuZXhwb3J0U3RhcnRlZC5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICAgIHRoaXMuZW5hYmxlUGFnaW5hdG9yKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5leHBvcnRDb21wbGV0ZWQuc3Vic2NyaWJlKF8gPT4ge1xuICAgICAgICB0aGlzLmVuYWJsZVBhZ2luYXRvcih0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLCBwcm90ZWN0ZWQganNvbkV4cG9ydGVyOiBKc29uRXhwb3J0ZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIocmVuZGVyZXIsIGpzb25FeHBvcnRlcik7XG4gIH1cblxuXG4vKipcbiAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdldFBhZ2VDb3VudFxuICogQG92ZXJyaWRlXG4gKi9cbiAgcHVibGljIGdldFBhZ2VDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldFBhZ2luYXRvcigpLmdldE51bWJlck9mUGFnZXMoKTtcbiAgfVxuXG4vKipcbiAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdldEN1cnJlbnRQYWdlSW5kZXhcbiAqIEBvdmVycmlkZVxuICovXG4gIHB1YmxpYyBnZXRDdXJyZW50UGFnZUluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZUluZGV4O1xuICB9XG5cbi8qKlxuICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ29Ub1BhZ2VcbiAqIEBvdmVycmlkZVxuICovXG4gIHB1YmxpYyBnb1RvUGFnZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlSW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmdldFBhZ2luYXRvcigpLl9jaGFuZ2VQYWdlU2l6ZSh0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2VTaXplKTtcbiAgfVxuXG4vKipcbiAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlXG4gKiBAb3ZlcnJpZGVcbiAqL1xuICBwdWJsaWMgZ2V0UGFnZUNoYW5nZU9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlO1xuICB9XG5cblxuICBwcml2YXRlIGdldFBhZ2luYXRvcigpOiBNYXRQYWdpbmF0b3Ige1xuICAgIHJldHVybiAodGhpcy5jZGtUYWJsZS5kYXRhU291cmNlIGFzIE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KS5wYWdpbmF0b3I7XG4gIH1cblxuICBwcml2YXRlIGVuYWJsZVBhZ2luYXRvcih2YWx1ZTogYm9vbGVhbikge1xuICAgICAgdGhpcy5nZXRQYWdpbmF0b3IoKS5kaXNhYmxlZCA9ICF2YWx1ZTtcbiAgICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkuX2NoYW5nZVBhZ2VTaXplKHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZVNpemUpO1xuICB9XG5cbn1cbiJdfQ==