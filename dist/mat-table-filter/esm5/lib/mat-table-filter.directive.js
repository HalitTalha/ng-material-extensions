/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ViewContainerRef, Host, Self, Optional } from '@angular/core';
import { MatTable } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatTableFilter } from './mat-table-filter.enum';
import { MatTableFilterService } from './services/mat-table-filter.service';
var MatTableFilterDirective = /** @class */ (function () {
    function MatTableFilterDirective(_filterService, _injectedTable, _viewContainerRef) {
        this._filterService = _filterService;
        this._injectedTable = _injectedTable;
        this._viewContainerRef = _viewContainerRef;
        this.debounceTime = 400;
        this.filterType = MatTableFilter.ANYWHERE;
        this.caseSensitive = false;
        this.initCdkTable();
        this.initDebounceSubject();
    }
    /**
     * @return {?}
     */
    MatTableFilterDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._filterService.isChanged(this._oldExampleEntity, this.exampleEntity)) {
            this._oldExampleEntity = this._filterService.toPlainJson(this.exampleEntity);
            this._exampleEntitySubject.next(undefined);
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatTableFilterDirective.prototype.initCdkTable = /**
     * @private
     * @return {?}
     */
    function () {
        // tslint:disable-next-line:no-string-literal
        /** @type {?} */
        var table = this._viewContainerRef['_data'].componentView.component;
        if (table) {
            this._table = table;
        }
        else if (this._injectedTable) {
            this._table = this._injectedTable;
        }
        else {
            throw new Error('Unsupported Angular version!');
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatTableFilterDirective.prototype.initDebounceSubject = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._exampleEntitySubject = new BehaviorSubject(null);
        this._exampleEntitySubject.pipe(debounceTime(this.debounceTime))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.updateFilterPredicate();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    MatTableFilterDirective.prototype.updateFilterPredicate = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var matDataSource = this.getMatDataSource();
        if (matDataSource) {
            matDataSource.filterPredicate = this.getFilterPredicate();
            matDataSource.filter = (/** @type {?} */ (this.exampleEntity));
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatTableFilterDirective.prototype.getFilterPredicate = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.customPredicate) {
            return this.customPredicate;
        }
        else {
            return (/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return _this._filterService.filterPredicate({ example: _this.exampleEntity, item: item }, _this.propertyOptions, { filterType: _this.filterType, caseSensitive: _this.caseSensitive });
            });
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatTableFilterDirective.prototype.getMatDataSource = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var matTable = (/** @type {?} */ (this._table));
        return ((/** @type {?} */ (matTable.dataSource)));
    };
    MatTableFilterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[matTableFilter]',
                    exportAs: 'matTableFilter'
                },] }
    ];
    /** @nocollapse */
    MatTableFilterDirective.ctorParameters = function () { return [
        { type: MatTableFilterService },
        { type: MatTable, decorators: [{ type: Host }, { type: Self }, { type: Optional }] },
        { type: ViewContainerRef }
    ]; };
    MatTableFilterDirective.propDecorators = {
        exampleEntity: [{ type: Input }],
        debounceTime: [{ type: Input }],
        filterType: [{ type: Input }],
        caseSensitive: [{ type: Input }],
        customPredicate: [{ type: Input }],
        propertyOptions: [{ type: Input }]
    };
    return MatTableFilterDirective;
}());
export { MatTableFilterDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatTableFilterDirective.prototype._oldExampleEntity;
    /** @type {?} */
    MatTableFilterDirective.prototype.exampleEntity;
    /**
     * in millis
     * @type {?}
     * @private
     */
    MatTableFilterDirective.prototype._table;
    /** @type {?} */
    MatTableFilterDirective.prototype.debounceTime;
    /** @type {?} */
    MatTableFilterDirective.prototype.filterType;
    /** @type {?} */
    MatTableFilterDirective.prototype.caseSensitive;
    /** @type {?} */
    MatTableFilterDirective.prototype.customPredicate;
    /** @type {?} */
    MatTableFilterDirective.prototype.propertyOptions;
    /**
     * @type {?}
     * @private
     */
    MatTableFilterDirective.prototype._exampleEntitySubject;
    /**
     * @type {?}
     * @private
     */
    MatTableFilterDirective.prototype._filterService;
    /**
     * @type {?}
     * @private
     */
    MatTableFilterDirective.prototype._injectedTable;
    /**
     * @type {?}
     * @private
     */
    MatTableFilterDirective.prototype._viewContainerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL21hdC10YWJsZS1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFXLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsUUFBUSxFQUFzQixNQUFNLG1CQUFtQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUU1RTtJQXNCRSxpQ0FBb0IsY0FBcUMsRUFDVCxjQUE2QixFQUN6RCxpQkFBbUM7UUFGbkMsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ1QsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDekQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQVY5QyxpQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQixlQUFVLEdBQW1CLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFTbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCwyQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDN0UsSUFBSSxDQUFDLGlC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Ozs7OztJQUM3QyxpREFBaUU7Ozs7O0lBQ2pFLG9EQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5T3B0aW9ucyB9IGZyb20gJy4vcHJvcGVydHktb3B0aW9ucyc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRG9DaGVjaywgSW5wdXQsIFZpZXdDb250YWluZXJSZWYsIEhvc3QsIFNlbGYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFRhYmxlLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE1hdFRhYmxlRmlsdGVyIH0gZnJvbSAnLi9tYXQtdGFibGUtZmlsdGVyLmVudW0nO1xyXG5pbXBvcnQgeyBNYXRUYWJsZUZpbHRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21hdC10YWJsZS1maWx0ZXIuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttYXRUYWJsZUZpbHRlcl0nLFxyXG4gIGV4cG9ydEFzOiAnbWF0VGFibGVGaWx0ZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUZpbHRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIERvQ2hlY2sge1xyXG5cclxuICBwcml2YXRlIF9vbGRFeGFtcGxlRW50aXR5OiBhbnk7XHJcblxyXG4gIEBJbnB1dCgpIGV4YW1wbGVFbnRpdHk6IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogaW4gbWlsbGlzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfdGFibGU6IGFueTtcclxuICBASW5wdXQoKSBkZWJvdW5jZVRpbWUgPSA0MDA7XHJcbiAgQElucHV0KCkgZmlsdGVyVHlwZTogTWF0VGFibGVGaWx0ZXIgPSBNYXRUYWJsZUZpbHRlci5BTllXSEVSRTtcclxuICBASW5wdXQoKSBjYXNlU2Vuc2l0aXZlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY3VzdG9tUHJlZGljYXRlOiAoZGF0YTogYW55KSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHByb3BlcnR5T3B0aW9uczogUHJvcGVydHlPcHRpb25zO1xyXG4gIHByaXZhdGUgX2V4YW1wbGVFbnRpdHlTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8dm9pZD47XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9maWx0ZXJTZXJ2aWNlOiBNYXRUYWJsZUZpbHRlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgQEhvc3QoKSBAU2VsZigpIEBPcHRpb25hbCgpIHByaXZhdGUgX2luamVjdGVkVGFibGU6IE1hdFRhYmxlPGFueT4sXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW5pdENka1RhYmxlKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5pbml0RGVib3VuY2VTdWJqZWN0KCk7XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZmlsdGVyU2VydmljZS5pc0NoYW5nZWQodGhpcy5fb2xkRXhhbXBsZUVudGl0eSwgdGhpcy5leGFtcGxlRW50aXR5KSkge1xyXG4gICAgICB0aGlzLl9vbGRFeGFtcGxlRW50aXR5ID0gdGhpcy5fZmlsdGVyU2VydmljZS50b1BsYWluSnNvbih0aGlzLmV4YW1wbGVFbnRpdHkpO1xyXG4gICAgICB0aGlzLl9leGFtcGxlRW50aXR5U3ViamVjdC5uZXh0KHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBpbml0Q2RrVGFibGUoKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcclxuICAgIGNvbnN0IHRhYmxlID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZlsnX2RhdGEnXS5jb21wb25lbnRWaWV3LmNvbXBvbmVudDtcclxuICAgIGlmICh0YWJsZSkge1xyXG4gICAgICB0aGlzLl90YWJsZSA9IHRhYmxlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl9pbmplY3RlZFRhYmxlKSB7XHJcbiAgICAgIHRoaXMuX3RhYmxlID0gdGhpcy5faW5qZWN0ZWRUYWJsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgQW5ndWxhciB2ZXJzaW9uIScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RGVib3VuY2VTdWJqZWN0KCkge1xyXG4gICAgdGhpcy5fZXhhbXBsZUVudGl0eVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHZvaWQ+KG51bGwpO1xyXG4gICAgdGhpcy5fZXhhbXBsZUVudGl0eVN1YmplY3QucGlwZShcclxuICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZVRpbWUpKVxyXG4gICAgIC5zdWJzY3JpYmUoXyA9PiB7XHJcbiAgICAgICB0aGlzLnVwZGF0ZUZpbHRlclByZWRpY2F0ZSgpO1xyXG4gICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVGaWx0ZXJQcmVkaWNhdGUoKSB7XHJcbiAgICBjb25zdCBtYXREYXRhU291cmNlID0gdGhpcy5nZXRNYXREYXRhU291cmNlKCk7XHJcbiAgICBpZiAobWF0RGF0YVNvdXJjZSkge1xyXG4gICAgICBtYXREYXRhU291cmNlLmZpbHRlclByZWRpY2F0ZSA9IHRoaXMuZ2V0RmlsdGVyUHJlZGljYXRlKCk7XHJcbiAgICAgIG1hdERhdGFTb3VyY2UuZmlsdGVyID0gdGhpcy5leGFtcGxlRW50aXR5IGFzIGFueTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RmlsdGVyUHJlZGljYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tUHJlZGljYXRlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmN1c3RvbVByZWRpY2F0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoaXRlbTogYW55KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlclNlcnZpY2UuZmlsdGVyUHJlZGljYXRlKHtleGFtcGxlOiB0aGlzLmV4YW1wbGVFbnRpdHksIGl0ZW19LCB0aGlzLnByb3BlcnR5T3B0aW9ucyxcclxuICAgICAgICAge2ZpbHRlclR5cGU6IHRoaXMuZmlsdGVyVHlwZSwgY2FzZVNlbnNpdGl2ZTogdGhpcy5jYXNlU2Vuc2l0aXZlfSk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE1hdERhdGFTb3VyY2UoKTogTWF0VGFibGVEYXRhU291cmNlPGFueT4ge1xyXG4gICAgY29uc3QgbWF0VGFibGUgPSB0aGlzLl90YWJsZSBhcyBNYXRUYWJsZTxhbnk+O1xyXG4gICAgcmV0dXJuIChtYXRUYWJsZS5kYXRhU291cmNlIGFzIE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==