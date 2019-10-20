/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this._exampleEntitySubject.next();
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
                return _this._filterService.filterPredicate({ example: _this.exampleEntity, item: item }, _this.columnOptions, { filterType: _this.filterType, caseSensitive: _this.caseSensitive });
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
        columnOptions: [{ type: Input }]
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
    MatTableFilterDirective.prototype.columnOptions;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL21hdC10YWJsZS1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFXLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsUUFBUSxFQUFzQixNQUFNLG1CQUFtQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUU1RTtJQXNCRSxpQ0FBb0IsY0FBcUMsRUFDVCxjQUE2QixFQUN6RCxpQkFBbUM7UUFGbkMsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ1QsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDekQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQVY5QyxpQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQixlQUFVLEdBQW1CLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFTbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCwyQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDN0UsSUFBSSxDQUFDLGlC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LGlEQUFpRTs7Ozs7SUFDakUsb0RBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uT3B0aW9ucyB9IGZyb20gJy4vY29sdW1uLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIERvQ2hlY2ssIElucHV0LCBWaWV3Q29udGFpbmVyUmVmLCBIb3N0LCBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRUYWJsZSwgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBNYXRUYWJsZUZpbHRlciB9IGZyb20gJy4vbWF0LXRhYmxlLWZpbHRlci5lbnVtJztcclxuaW1wb3J0IHsgTWF0VGFibGVGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tYXQtdGFibGUtZmlsdGVyLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbWF0VGFibGVGaWx0ZXJdJyxcclxuICBleHBvcnRBczogJ21hdFRhYmxlRmlsdGVyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0VGFibGVGaWx0ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBEb0NoZWNrIHtcclxuXHJcbiAgcHJpdmF0ZSBfb2xkRXhhbXBsZUVudGl0eTogYW55O1xyXG5cclxuICBASW5wdXQoKSBleGFtcGxlRW50aXR5OiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIGluIG1pbGxpc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgX3RhYmxlOiBhbnk7XHJcbiAgQElucHV0KCkgZGVib3VuY2VUaW1lID0gNDAwO1xyXG4gIEBJbnB1dCgpIGZpbHRlclR5cGU6IE1hdFRhYmxlRmlsdGVyID0gTWF0VGFibGVGaWx0ZXIuQU5ZV0hFUkU7XHJcbiAgQElucHV0KCkgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGN1c3RvbVByZWRpY2F0ZTogKGRhdGE6IGFueSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBjb2x1bW5PcHRpb25zOiBDb2x1bW5PcHRpb25zO1xyXG4gIHByaXZhdGUgX2V4YW1wbGVFbnRpdHlTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8dm9pZD47XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9maWx0ZXJTZXJ2aWNlOiBNYXRUYWJsZUZpbHRlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgQEhvc3QoKSBAU2VsZigpIEBPcHRpb25hbCgpIHByaXZhdGUgX2luamVjdGVkVGFibGU6IE1hdFRhYmxlPGFueT4sXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW5pdENka1RhYmxlKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5pbml0RGVib3VuY2VTdWJqZWN0KCk7XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZmlsdGVyU2VydmljZS5pc0NoYW5nZWQodGhpcy5fb2xkRXhhbXBsZUVudGl0eSwgdGhpcy5leGFtcGxlRW50aXR5KSkge1xyXG4gICAgICB0aGlzLl9vbGRFeGFtcGxlRW50aXR5ID0gdGhpcy5fZmlsdGVyU2VydmljZS50b1BsYWluSnNvbih0aGlzLmV4YW1wbGVFbnRpdHkpO1xyXG4gICAgICB0aGlzLl9leGFtcGxlRW50aXR5U3ViamVjdC5uZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBpbml0Q2RrVGFibGUoKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcclxuICAgIGNvbnN0IHRhYmxlID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZlsnX2RhdGEnXS5jb21wb25lbnRWaWV3LmNvbXBvbmVudDtcclxuICAgIGlmICh0YWJsZSkge1xyXG4gICAgICB0aGlzLl90YWJsZSA9IHRhYmxlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl9pbmplY3RlZFRhYmxlKSB7XHJcbiAgICAgIHRoaXMuX3RhYmxlID0gdGhpcy5faW5qZWN0ZWRUYWJsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgQW5ndWxhciB2ZXJzaW9uIScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RGVib3VuY2VTdWJqZWN0KCkge1xyXG4gICAgdGhpcy5fZXhhbXBsZUVudGl0eVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHZvaWQ+KG51bGwpO1xyXG4gICAgdGhpcy5fZXhhbXBsZUVudGl0eVN1YmplY3QucGlwZShcclxuICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZVRpbWUpKVxyXG4gICAgIC5zdWJzY3JpYmUoXyA9PiB7XHJcbiAgICAgICB0aGlzLnVwZGF0ZUZpbHRlclByZWRpY2F0ZSgpO1xyXG4gICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVGaWx0ZXJQcmVkaWNhdGUoKSB7XHJcbiAgICBjb25zdCBtYXREYXRhU291cmNlID0gdGhpcy5nZXRNYXREYXRhU291cmNlKCk7XHJcbiAgICBpZiAobWF0RGF0YVNvdXJjZSkge1xyXG4gICAgICBtYXREYXRhU291cmNlLmZpbHRlclByZWRpY2F0ZSA9IHRoaXMuZ2V0RmlsdGVyUHJlZGljYXRlKCk7XHJcbiAgICAgIG1hdERhdGFTb3VyY2UuZmlsdGVyID0gdGhpcy5leGFtcGxlRW50aXR5IGFzIGFueTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RmlsdGVyUHJlZGljYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tUHJlZGljYXRlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmN1c3RvbVByZWRpY2F0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoaXRlbTogYW55KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlclNlcnZpY2UuZmlsdGVyUHJlZGljYXRlKHtleGFtcGxlOiB0aGlzLmV4YW1wbGVFbnRpdHksIGl0ZW19LCB0aGlzLmNvbHVtbk9wdGlvbnMsXHJcbiAgICAgICAgIHtmaWx0ZXJUeXBlOiB0aGlzLmZpbHRlclR5cGUsIGNhc2VTZW5zaXRpdmU6IHRoaXMuY2FzZVNlbnNpdGl2ZX0pO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRNYXREYXRhU291cmNlKCk6IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+IHtcclxuICAgIGNvbnN0IG1hdFRhYmxlID0gdGhpcy5fdGFibGUgYXMgTWF0VGFibGU8YW55PjtcclxuICAgIHJldHVybiAobWF0VGFibGUuZGF0YVNvdXJjZSBhcyBNYXRUYWJsZURhdGFTb3VyY2U8YW55Pik7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=