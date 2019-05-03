/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Renderer2 } from '@angular/core';
import { CdkTableExporter, JsonExporterService } from 'cdk-table-exporter';
var MatTableExporterDirective = /** @class */ (function (_super) {
    tslib_1.__extends(MatTableExporterDirective, _super);
    function MatTableExporterDirective(renderer, jsonExporter) {
        var _this = _super.call(this, renderer, jsonExporter) || this;
        _this.renderer = renderer;
        _this.jsonExporter = jsonExporter;
        return _this;
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
        _super.prototype.ngAfterViewInit.call(this);
        if (this.getPaginator()) {
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
        }
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
        this.getPaginator().disabled = !value;
        this.getPaginator()._changePageSize(this.getPaginator().pageSize);
    };
    MatTableExporterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxMatTableExporter]'
                },] }
    ];
    /** @nocollapse */
    MatTableExporterDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: JsonExporterService }
    ]; };
    return MatTableExporterDirective;
}(CdkTableExporter));
export { MatTableExporterDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWV4cG9ydGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9tYXQtdGFibGUtZXhwb3J0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzNFO0lBRytDLHFEQUFnQjtJQWlCN0QsbUNBQXNCLFFBQW1CLEVBQVksWUFBaUM7UUFBdEYsWUFDRSxrQkFBTSxRQUFRLEVBQUUsWUFBWSxDQUFDLFNBQzlCO1FBRnFCLGNBQVEsR0FBUixRQUFRLENBQVc7UUFBWSxrQkFBWSxHQUFaLFlBQVksQ0FBcUI7O0lBRXRGLENBQUM7SUFqQkg7O09BRUc7Ozs7O0lBQ0QsbURBQWU7Ozs7SUFBZjtRQUFBLGlCQVVDO1FBVEMsaUJBQU0sZUFBZSxXQUFFLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxDQUFDO2dCQUM1QixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUMsRUFBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxDQUFDO2dCQUM5QixLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBT0g7OztPQUdHOzs7Ozs7SUFDTSxnREFBWTs7Ozs7SUFBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFSDs7O09BR0c7Ozs7OztJQUNNLHVEQUFtQjs7Ozs7SUFBMUI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUVIOzs7T0FHRzs7Ozs7OztJQUNNLDRDQUFROzs7Ozs7SUFBZixVQUFnQixLQUFhO1FBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFSDs7O09BR0c7Ozs7OztJQUNNLDJEQUF1Qjs7Ozs7SUFBOUI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFHTyxnREFBWTs7OztJQUFwQjtRQUNFLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBMkIsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7SUFFTyxtREFBZTs7Ozs7SUFBdkIsVUFBd0IsS0FBYztRQUNsQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7O2dCQWxFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtpQkFDbEM7Ozs7Z0JBUGtDLFNBQVM7Z0JBRWpCLG1CQUFtQjs7SUF1RTlDLGdDQUFDO0NBQUEsQUFwRUQsQ0FHK0MsZ0JBQWdCLEdBaUU5RDtTQWpFWSx5QkFBeUI7Ozs7OztJQWlCeEIsNkNBQTZCOzs7OztJQUFFLGlEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3IsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IENka1RhYmxlRXhwb3J0ZXIsIEpzb25FeHBvcnRlclNlcnZpY2UgfSBmcm9tICdjZGstdGFibGUtZXhwb3J0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4TWF0VGFibGVFeHBvcnRlcl0nXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRXhwb3J0ZXJEaXJlY3RpdmUgZXh0ZW5kcyBDZGtUYWJsZUV4cG9ydGVyIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbi8qKlxuICogT3ZlcnJpZGluZyBuZ0FmdGVyVmlld0luaXQgb2YgVGFibGVFeHBvcnRlclxuICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICBpZiAodGhpcy5nZXRQYWdpbmF0b3IoKSkge1xuICAgICAgdGhpcy5leHBvcnRTdGFydGVkLnN1YnNjcmliZShfID0+IHtcbiAgICAgICAgdGhpcy5lbmFibGVQYWdpbmF0b3IoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmV4cG9ydENvbXBsZXRlZC5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICAgIHRoaXMuZW5hYmxlUGFnaW5hdG9yKHRydWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByb3RlY3RlZCBqc29uRXhwb3J0ZXI6IEpzb25FeHBvcnRlclNlcnZpY2UpIHtcbiAgICBzdXBlcihyZW5kZXJlciwganNvbkV4cG9ydGVyKTtcbiAgfVxuXG5cbi8qKlxuICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ2V0UGFnZUNvdW50XG4gKiBAb3ZlcnJpZGVcbiAqL1xuICBwdWJsaWMgZ2V0UGFnZUNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFnaW5hdG9yKCkuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuICB9XG5cbi8qKlxuICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ2V0Q3VycmVudFBhZ2VJbmRleFxuICogQG92ZXJyaWRlXG4gKi9cbiAgcHVibGljIGdldEN1cnJlbnRQYWdlSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlSW5kZXg7XG4gIH1cblxuLyoqXG4gKiBNYXRUYWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBnb1RvUGFnZVxuICogQG92ZXJyaWRlXG4gKi9cbiAgcHVibGljIGdvVG9QYWdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2VJbmRleCA9IGluZGV4O1xuICAgIHRoaXMuZ2V0UGFnaW5hdG9yKCkuX2NoYW5nZVBhZ2VTaXplKHRoaXMuZ2V0UGFnaW5hdG9yKCkucGFnZVNpemUpO1xuICB9XG5cbi8qKlxuICogTWF0VGFibGUgaW1wbGVtZW50YXRpb24gb2YgZ2V0UGFnZUNoYW5nZU9ic2VydmFibGVcbiAqIEBvdmVycmlkZVxuICovXG4gIHB1YmxpYyBnZXRQYWdlQ2hhbmdlT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldFBhZ2luYXRvcigpLnBhZ2U7XG4gIH1cblxuXG4gIHByaXZhdGUgZ2V0UGFnaW5hdG9yKCk6IE1hdFBhZ2luYXRvciB7XG4gICAgcmV0dXJuICh0aGlzLmNka1RhYmxlLmRhdGFTb3VyY2UgYXMgTWF0VGFibGVEYXRhU291cmNlPGFueT4pLnBhZ2luYXRvcjtcbiAgfVxuXG4gIHByaXZhdGUgZW5hYmxlUGFnaW5hdG9yKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICB0aGlzLmdldFBhZ2luYXRvcigpLmRpc2FibGVkID0gIXZhbHVlO1xuICAgICAgdGhpcy5nZXRQYWdpbmF0b3IoKS5fY2hhbmdlUGFnZVNpemUodGhpcy5nZXRQYWdpbmF0b3IoKS5wYWdlU2l6ZSk7XG4gIH1cblxufVxuIl19