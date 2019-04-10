/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DeepDiffService } from './deep-diff.service';
import { MatTableFilter } from './mat-table-filter.enum';
import { MatTableFilterService } from './mat-table-filter.service';
var MatTableFilterDirective = /** @class */ (function () {
    function MatTableFilterDirective(filterService, _deepDiffService) {
        this.filterService = filterService;
        this._deepDiffService = _deepDiffService;
        /**
         * in millis
         */
        this.debounceTime = 400;
        this.filterType = MatTableFilter.ANYWHERE;
        this.caseSensitive = false;
        this.initDebounceSubject();
    }
    Object.defineProperty(MatTableFilterDirective.prototype, "exampleEntity", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._oldExampleEntity = this._exampleEntity;
            this._exampleEntity = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatTableFilterDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._deepDiffService.isDifferent(this._oldExampleEntity, this._exampleEntity)) {
            this._exampleEntitySubject.next();
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
                return _this_2.filterService.filterPredicate(_this_2._exampleEntity, data, _this_2.filterType, _this_2.caseSensitive);
            });
            matDataSource.filter = (/** @type {?} */ (this._exampleEntity));
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
        var matTable = (/** @type {?} */ (this.matTableFilter));
        if (matTable.dataSource && !(matTable.dataSource instanceof MatTableDataSource)) {
            throw new Error('Use MatTableDataSource, example: dataSource = new MatTableDataSource(dataArray)');
        }
        return ((/** @type {?} */ (matTable.dataSource)));
    };
    MatTableFilterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[matTableFilter]'
                },] }
    ];
    /** @nocollapse */
    MatTableFilterDirective.ctorParameters = function () { return [
        { type: MatTableFilterService },
        { type: DeepDiffService }
    ]; };
    MatTableFilterDirective.propDecorators = {
        exampleEntity: [{ type: Input }],
        debounceTime: [{ type: Input }],
        filterType: [{ type: Input }],
        matTableFilter: [{ type: Input }],
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
    /**
     * @type {?}
     * @private
     */
    MatTableFilterDirective.prototype._exampleEntity;
    /**
     * in millis
     * @type {?}
     */
    MatTableFilterDirective.prototype.debounceTime;
    /** @type {?} */
    MatTableFilterDirective.prototype.filterType;
    /** @type {?} */
    MatTableFilterDirective.prototype.matTableFilter;
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
    MatTableFilterDirective.prototype.filterService;
    /**
     * @type {?}
     * @private
     */
    MatTableFilterDirective.prototype._deepDiffService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL21hdC10YWJsZS1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFXLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQVksa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FO0lBeUJFLGlDQUFvQixhQUFvQyxFQUFVLGdCQUFpQztRQUEvRSxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCOzs7O1FBUjFGLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ25CLGVBQVUsR0FBbUIsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUVyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQU03QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBbEJELHNCQUNJLGtEQUFhOzs7OztRQURqQixVQUNrQixLQUFVO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQzdDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7OztPQUFBOzs7O0lBZ0JELDJDQUFTOzs7SUFBVDtRQUNFLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ2hGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7O0lBRU8scURBQW1COzs7O0lBQTNCO1FBQUEsbUJBT0M7UUFOQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxlQUFlLENBQU8sSUFBSSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FDOUIsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvQixTQUFTOzs7O1FBQUMsVUFBQSxDQUFDO1lBQ1YsT0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVPLHVEQUFxQjs7OztJQUE3Qjs7WUFDUSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1FBQzdDLElBQUksYUFBYSxFQUFFOztnQkFDWCxPQUFLLEdBQUcsSUFBSTtZQUNsQixhQUFhLENBQUMsZUFBZTs7OztZQUFHLFVBQUMsSUFBSTtnQkFDbkMsT0FBTyxPQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxPQUFLLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxPQUFLLENBQUMsVUFBVSxFQUFFLE9BQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNoSCxDQUFDLENBQUEsQ0FBQTtZQUNELGFBQWEsQ0FBQyxNQUFNLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGNBQWMsRUFBTyxDQUFDO1NBQ25EO0lBRUgsQ0FBQzs7Ozs7SUFFTyxrREFBZ0I7Ozs7SUFBeEI7O1lBQ1EsUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxjQUFjLEVBQWlCO1FBQ3JELElBQUksUUFBUSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsWUFBWSxrQkFBa0IsQ0FBQyxFQUFFO1lBQy9FLE1BQU0sSUFBSSxLQUFLLENBQUMsaUZBQWlGLENBQUMsQ0FBQztTQUNwRztRQUNELE9BQU8sQ0FBQyxtQkFBQSxRQUFRLENBQUMsVUFBVSxFQUEyQixDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Z0JBOURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkFKUSxxQkFBcUI7Z0JBRnJCLGVBQWU7OztnQ0FhckIsS0FBSzsrQkFRTCxLQUFLOzZCQUNMLEtBQUs7aUNBQ0wsS0FBSztnQ0FDTCxLQUFLOztJQTRDUiw4QkFBQztDQUFBLEFBaEVELElBZ0VDO1NBN0RZLHVCQUF1Qjs7Ozs7O0lBRWxDLG9EQUErQjs7Ozs7SUFFL0IsaURBQTRCOzs7OztJQVU1QiwrQ0FBNEI7O0lBQzVCLDZDQUE4RDs7SUFDOUQsaURBQTZCOztJQUM3QixnREFBK0I7Ozs7O0lBRS9CLHdEQUFxRDs7Ozs7SUFHekMsZ0RBQTRDOzs7OztJQUFFLG1EQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRG9DaGVjaywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFRhYmxlLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERlZXBEaWZmU2VydmljZSB9IGZyb20gJy4vZGVlcC1kaWZmLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0VGFibGVGaWx0ZXIgfSBmcm9tICcuL21hdC10YWJsZS1maWx0ZXIuZW51bSc7XG5pbXBvcnQgeyBNYXRUYWJsZUZpbHRlclNlcnZpY2UgfSBmcm9tICcuL21hdC10YWJsZS1maWx0ZXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXRUYWJsZUZpbHRlcl0nXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRmlsdGVyRGlyZWN0aXZlIGltcGxlbWVudHMgRG9DaGVjayB7XG5cbiAgcHJpdmF0ZSBfb2xkRXhhbXBsZUVudGl0eTogYW55O1xuXG4gIHByaXZhdGUgX2V4YW1wbGVFbnRpdHk6IGFueTtcblxuICBASW5wdXQoKVxuICBzZXQgZXhhbXBsZUVudGl0eSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fb2xkRXhhbXBsZUVudGl0eSA9IHRoaXMuX2V4YW1wbGVFbnRpdHk7XG4gICAgdGhpcy5fZXhhbXBsZUVudGl0eSA9IHZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBpbiBtaWxsaXNcbiAgICovXG4gIEBJbnB1dCgpIGRlYm91bmNlVGltZSA9IDQwMDtcbiAgQElucHV0KCkgZmlsdGVyVHlwZTogTWF0VGFibGVGaWx0ZXIgPSBNYXRUYWJsZUZpbHRlci5BTllXSEVSRTtcbiAgQElucHV0KCkgbWF0VGFibGVGaWx0ZXI6IGFueTtcbiAgQElucHV0KCkgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2V4YW1wbGVFbnRpdHlTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8dm9pZD47XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbHRlclNlcnZpY2U6IE1hdFRhYmxlRmlsdGVyU2VydmljZSwgcHJpdmF0ZSBfZGVlcERpZmZTZXJ2aWNlOiBEZWVwRGlmZlNlcnZpY2UpIHtcbiAgICB0aGlzLmluaXREZWJvdW5jZVN1YmplY3QoKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGVlcERpZmZTZXJ2aWNlLmlzRGlmZmVyZW50KHRoaXMuX29sZEV4YW1wbGVFbnRpdHksIHRoaXMuX2V4YW1wbGVFbnRpdHkpKSB7XG4gICAgICAgIHRoaXMuX2V4YW1wbGVFbnRpdHlTdWJqZWN0Lm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXREZWJvdW5jZVN1YmplY3QoKSB7XG4gICAgdGhpcy5fZXhhbXBsZUVudGl0eVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHZvaWQ+KG51bGwpO1xuICAgIHRoaXMuX2V4YW1wbGVFbnRpdHlTdWJqZWN0LnBpcGUoXG4gICAgIGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlVGltZSkpXG4gICAgIC5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICAgdGhpcy51cGRhdGVGaWx0ZXJQcmVkaWNhdGUoKTtcbiAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUZpbHRlclByZWRpY2F0ZSgpIHtcbiAgICBjb25zdCBtYXREYXRhU291cmNlID0gdGhpcy5nZXRNYXREYXRhU291cmNlKCk7XG4gICAgaWYgKG1hdERhdGFTb3VyY2UpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgIG1hdERhdGFTb3VyY2UuZmlsdGVyUHJlZGljYXRlID0gKGRhdGEpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmZpbHRlclNlcnZpY2UuZmlsdGVyUHJlZGljYXRlKF90aGlzLl9leGFtcGxlRW50aXR5LCBkYXRhLCBfdGhpcy5maWx0ZXJUeXBlLCBfdGhpcy5jYXNlU2Vuc2l0aXZlKTtcbiAgICAgIH1cbiAgICAgIG1hdERhdGFTb3VyY2UuZmlsdGVyID0gdGhpcy5fZXhhbXBsZUVudGl0eSBhcyBhbnk7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIGdldE1hdERhdGFTb3VyY2UoKTogTWF0VGFibGVEYXRhU291cmNlPGFueT4ge1xuICAgIGNvbnN0IG1hdFRhYmxlID0gdGhpcy5tYXRUYWJsZUZpbHRlciBhcyBNYXRUYWJsZTxhbnk+O1xuICAgIGlmIChtYXRUYWJsZS5kYXRhU291cmNlICYmICEobWF0VGFibGUuZGF0YVNvdXJjZSBpbnN0YW5jZW9mIE1hdFRhYmxlRGF0YVNvdXJjZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXNlIE1hdFRhYmxlRGF0YVNvdXJjZSwgZXhhbXBsZTogZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoZGF0YUFycmF5KScpO1xuICAgIH1cbiAgICByZXR1cm4gKG1hdFRhYmxlLmRhdGFTb3VyY2UgYXMgTWF0VGFibGVEYXRhU291cmNlPGFueT4pO1xuICB9XG5cbn1cbiJdfQ==