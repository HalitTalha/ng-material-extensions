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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWV4cG9ydGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9tYXQtdGFibGUtZXhwb3J0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNM0UsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGdCQUFnQjs7Ozs7SUFlN0QsWUFBc0IsUUFBbUIsRUFBWSxZQUFpQztRQUNwRixLQUFLLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRFYsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFZLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtJQUV0RixDQUFDOzs7OztJQVpELGVBQWU7UUFDYixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFXTSxZQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBTU0sbUJBQW1CO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7O0lBTU0sUUFBUSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7O0lBTU0sdUJBQXVCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztJQUNsQyxDQUFDOzs7OztJQUdPLFlBQVk7UUFDbEIsT0FBTyxDQUFDLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUEyQixDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pFLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxLQUFjO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7O1lBaEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2FBQ2xDOzs7O1lBUGtDLFNBQVM7WUFFakIsbUJBQW1COzs7Ozs7O0lBcUJoQyw2Q0FBNkI7Ozs7O0lBQUUsaURBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciwgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgQ2RrVGFibGVFeHBvcnRlciwgSnNvbkV4cG9ydGVyU2VydmljZSB9IGZyb20gJ2Nkay10YWJsZS1leHBvcnRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hNYXRUYWJsZUV4cG9ydGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTWF0VGFibGVFeHBvcnRlckRpcmVjdGl2ZSBleHRlbmRzIENka1RhYmxlRXhwb3J0ZXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuLyoqXG4gKiBPdmVycmlkaW5nIG5nQWZ0ZXJWaWV3SW5pdCBvZiBUYWJsZUV4cG9ydGVyXG4gKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICAgIHRoaXMuZXhwb3J0U3RhcnRlZC5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICB0aGlzLmVuYWJsZVBhZ2luYXRvcihmYWxzZSk7XG4gICAgfSk7XG4gICAgdGhpcy5leHBvcnRDb21wbGV0ZWQuc3Vic2NyaWJlKF8gPT4ge1xuICAgICAgdGhpcy5lbmFibGVQYWdpbmF0b3IodHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJvdGVjdGVkIGpzb25FeHBvcnRlcjogSnNvbkV4cG9ydGVyU2VydmljZSkge1xuICAgIHN1cGVyKHJlbmRlcmVyLCBqc29uRXhwb3J0ZXIpO1xuICB9XG5cblxuLyoqXG4gKiBNYXRUYWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBnZXRQYWdlQ291bnRcbiAqIEBvdmVycmlkZVxuICovXG4gIHB1YmxpYyBnZXRQYWdlQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdpbmF0b3IoKS5nZXROdW1iZXJPZlBhZ2VzKCk7XG4gIH1cblxuLyoqXG4gKiBNYXRUYWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBnZXRDdXJyZW50UGFnZUluZGV4XG4gKiBAb3ZlcnJpZGVcbiAqL1xuICBwdWJsaWMgZ2V0Q3VycmVudFBhZ2VJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2VJbmRleDtcbiAgfVxuXG4vKipcbiAqIE1hdFRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGdvVG9QYWdlXG4gKiBAb3ZlcnJpZGVcbiAqL1xuICBwdWJsaWMgZ29Ub1BhZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZUluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5nZXRQYWdpbmF0b3IoKS5fY2hhbmdlUGFnZVNpemUodGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlU2l6ZSk7XG4gIH1cblxuLyoqXG4gKiBNYXRUYWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBnZXRQYWdlQ2hhbmdlT2JzZXJ2YWJsZVxuICogQG92ZXJyaWRlXG4gKi9cbiAgcHVibGljIGdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBnZXRQYWdpbmF0b3IoKTogTWF0UGFnaW5hdG9yIHtcbiAgICByZXR1cm4gKHRoaXMuY2RrVGFibGUuZGF0YVNvdXJjZSBhcyBNYXRUYWJsZURhdGFTb3VyY2U8YW55PikucGFnaW5hdG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBlbmFibGVQYWdpbmF0b3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkuZGlzYWJsZWQgPSAhdmFsdWU7XG4gICAgICB0aGlzLmdldFBhZ2luYXRvcigpLl9jaGFuZ2VQYWdlU2l6ZSh0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2VTaXplKTtcbiAgfVxuXG59XG4iXX0=