/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ViewContainerRef, Host, Self, Optional } from '@angular/core';
import { MatTable } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatTableFilter } from './mat-table-filter.enum';
import { MatTableFilterService } from './mat-table-filter.service';
import * as LODASH from 'lodash';
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
        if (this.isExampleEntityChanged()) {
            this._oldExampleEntity = this.toPlainJson(this.exampleEntity);
            this._exampleEntitySubject.next();
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatTableFilterDirective.prototype.isExampleEntityChanged = /**
     * @private
     * @return {?}
     */
    function () {
        return !LODASH.isEqual(this._oldExampleEntity, this.toPlainJson(this.exampleEntity));
    };
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    MatTableFilterDirective.prototype.toPlainJson = /**
     * @private
     * @param {?} object
     * @return {?}
     */
    function (object) {
        if (object) {
            return JSON.parse(JSON.stringify(object));
        }
        else {
            return undefined;
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
            throw new Error('Unsupported Angular version');
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
        var _this_1 = this;
        this._exampleEntitySubject = new BehaviorSubject(null);
        this._exampleEntitySubject.pipe(debounceTime(this.debounceTime))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this_1.updateFilterPredicate();
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
            /** @type {?} */
            var _this_2 = this;
            matDataSource.filterPredicate = (/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return _this_2._filterService.filterPredicate(_this_2.exampleEntity, data, _this_2.filterType, _this_2.caseSensitive);
            });
            matDataSource.filter = (/** @type {?} */ (this.exampleEntity));
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
        caseSensitive: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL21hdC10YWJsZS1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFXLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsUUFBUSxFQUFzQixNQUFNLG1CQUFtQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQztJQXFCRSxpQ0FBb0IsY0FBcUMsRUFDVCxjQUE2QixFQUN6RCxpQkFBbUM7UUFGbkMsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ1QsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDekQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQVQ5QyxpQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQixlQUFVLEdBQW1CLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFRbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCwyQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJ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Qix3REFBcUQ7Ozs7O0lBR3pDLGlEQUE2Qzs7Ozs7SUFDN0MsaURBQWlFOzs7OztJQUNqRSxvREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIERvQ2hlY2ssIElucHV0LCBWaWV3Q29udGFpbmVyUmVmLCBIb3N0LCBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRUYWJsZSwgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBNYXRUYWJsZUZpbHRlciB9IGZyb20gJy4vbWF0LXRhYmxlLWZpbHRlci5lbnVtJztcclxuaW1wb3J0IHsgTWF0VGFibGVGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9tYXQtdGFibGUtZmlsdGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBMT0RBU0ggZnJvbSAnbG9kYXNoJztcclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbWF0VGFibGVGaWx0ZXJdJyxcclxuICBleHBvcnRBczogJ21hdFRhYmxlRmlsdGVyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0VGFibGVGaWx0ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBEb0NoZWNrIHtcclxuXHJcbiAgcHJpdmF0ZSBfb2xkRXhhbXBsZUVudGl0eTogYW55O1xyXG5cclxuICBASW5wdXQoKSBleGFtcGxlRW50aXR5OiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIGluIG1pbGxpc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgX3RhYmxlOiBhbnk7XHJcbiAgQElucHV0KCkgZGVib3VuY2VUaW1lID0gNDAwO1xyXG4gIEBJbnB1dCgpIGZpbHRlclR5cGU6IE1hdFRhYmxlRmlsdGVyID0gTWF0VGFibGVGaWx0ZXIuQU5ZV0hFUkU7XHJcbiAgQElucHV0KCkgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIF9leGFtcGxlRW50aXR5U3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PHZvaWQ+O1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmlsdGVyU2VydmljZTogTWF0VGFibGVGaWx0ZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIEBIb3N0KCkgQFNlbGYoKSBAT3B0aW9uYWwoKSBwcml2YXRlIF9pbmplY3RlZFRhYmxlOiBNYXRUYWJsZTxhbnk+LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgICAgICAgICAgICB0aGlzLmluaXRDZGtUYWJsZSgpO1xyXG4gICAgICAgICAgICAgIHRoaXMuaW5pdERlYm91bmNlU3ViamVjdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNFeGFtcGxlRW50aXR5Q2hhbmdlZCgpKSB7XHJcbiAgICAgIHRoaXMuX29sZEV4YW1wbGVFbnRpdHkgPSB0aGlzLnRvUGxhaW5Kc29uKHRoaXMuZXhhbXBsZUVudGl0eSk7XHJcbiAgICAgIHRoaXMuX2V4YW1wbGVFbnRpdHlTdWJqZWN0Lm5leHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNFeGFtcGxlRW50aXR5Q2hhbmdlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhTE9EQVNILmlzRXF1YWwodGhpcy5fb2xkRXhhbXBsZUVudGl0eSwgdGhpcy50b1BsYWluSnNvbih0aGlzLmV4YW1wbGVFbnRpdHkpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9QbGFpbkpzb24ob2JqZWN0OiBhbnkpOiBKU09OIHtcclxuICAgIGlmIChvYmplY3QpIHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0Q2RrVGFibGUoKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcclxuICAgIGNvbnN0IHRhYmxlID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZlsnX2RhdGEnXS5jb21wb25lbnRWaWV3LmNvbXBvbmVudDtcclxuICAgIGlmICh0YWJsZSkge1xyXG4gICAgICB0aGlzLl90YWJsZSA9IHRhYmxlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl9pbmplY3RlZFRhYmxlKSB7XHJcbiAgICAgIHRoaXMuX3RhYmxlID0gdGhpcy5faW5qZWN0ZWRUYWJsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgQW5ndWxhciB2ZXJzaW9uJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXREZWJvdW5jZVN1YmplY3QoKSB7XHJcbiAgICB0aGlzLl9leGFtcGxlRW50aXR5U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8dm9pZD4obnVsbCk7XHJcbiAgICB0aGlzLl9leGFtcGxlRW50aXR5U3ViamVjdC5waXBlKFxyXG4gICAgIGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlVGltZSkpXHJcbiAgICAgLnN1YnNjcmliZShfID0+IHtcclxuICAgICAgIHRoaXMudXBkYXRlRmlsdGVyUHJlZGljYXRlKCk7XHJcbiAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUZpbHRlclByZWRpY2F0ZSgpIHtcclxuICAgIGNvbnN0IG1hdERhdGFTb3VyY2UgPSB0aGlzLmdldE1hdERhdGFTb3VyY2UoKTtcclxuICAgIGlmIChtYXREYXRhU291cmNlKSB7XHJcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgbWF0RGF0YVNvdXJjZS5maWx0ZXJQcmVkaWNhdGUgPSAoZGF0YSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIHJldHVybiBfdGhpcy5fZmlsdGVyU2VydmljZS5maWx0ZXJQcmVkaWNhdGUoX3RoaXMuZXhhbXBsZUVudGl0eSwgZGF0YSwgX3RoaXMuZmlsdGVyVHlwZSwgX3RoaXMuY2FzZVNlbnNpdGl2ZSk7XHJcbiAgICAgIH1cclxuICAgICAgbWF0RGF0YVNvdXJjZS5maWx0ZXIgPSB0aGlzLmV4YW1wbGVFbnRpdHkgYXMgYW55O1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TWF0RGF0YVNvdXJjZSgpOiBNYXRUYWJsZURhdGFTb3VyY2U8YW55PiB7XHJcbiAgICBjb25zdCBtYXRUYWJsZSA9IHRoaXMuX3RhYmxlIGFzIE1hdFRhYmxlPGFueT47XHJcbiAgICByZXR1cm4gKG1hdFRhYmxlLmRhdGFTb3VyY2UgYXMgTWF0VGFibGVEYXRhU291cmNlPGFueT4pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19