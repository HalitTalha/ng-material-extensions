/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ViewContainerRef, Host, Self, Optional } from '@angular/core';
import { MatTable } from '@angular/material/table';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL21hdC10YWJsZS1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFXLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsUUFBUSxFQUFzQixNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQztJQXFCRSxpQ0FBb0IsY0FBcUMsRUFDVCxjQUE2QixFQUN6RCxpQkFBbUM7UUFGbkMsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ1QsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDekQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQVQ5QyxpQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQixlQUFVLEdBQW1CLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFRbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCwyQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJ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Qix3REFBcUQ7Ozs7O0lBR3pDLGlEQUE2Qzs7Ozs7SUFDN0MsaURBQWlFOzs7OztJQUNqRSxvREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIERvQ2hlY2ssIElucHV0LCBWaWV3Q29udGFpbmVyUmVmLCBIb3N0LCBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0VGFibGUsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWF0VGFibGVGaWx0ZXIgfSBmcm9tICcuL21hdC10YWJsZS1maWx0ZXIuZW51bSc7XG5pbXBvcnQgeyBNYXRUYWJsZUZpbHRlclNlcnZpY2UgfSBmcm9tICcuL21hdC10YWJsZS1maWx0ZXIuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBMT0RBU0ggZnJvbSAnbG9kYXNoJztcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXRUYWJsZUZpbHRlcl0nLFxuICBleHBvcnRBczogJ21hdFRhYmxlRmlsdGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUZpbHRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIERvQ2hlY2sge1xuXG4gIHByaXZhdGUgX29sZEV4YW1wbGVFbnRpdHk6IGFueTtcblxuICBASW5wdXQoKSBleGFtcGxlRW50aXR5OiBhbnk7XG5cbiAgLyoqXG4gICAqIGluIG1pbGxpc1xuICAgKi9cbiAgcHJpdmF0ZSBfdGFibGU6IGFueTtcbiAgQElucHV0KCkgZGVib3VuY2VUaW1lID0gNDAwO1xuICBASW5wdXQoKSBmaWx0ZXJUeXBlOiBNYXRUYWJsZUZpbHRlciA9IE1hdFRhYmxlRmlsdGVyLkFOWVdIRVJFO1xuICBASW5wdXQoKSBjYXNlU2Vuc2l0aXZlID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfZXhhbXBsZUVudGl0eVN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDx2b2lkPjtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZpbHRlclNlcnZpY2U6IE1hdFRhYmxlRmlsdGVyU2VydmljZSxcbiAgICAgICAgICAgICAgQEhvc3QoKSBAU2VsZigpIEBPcHRpb25hbCgpIHByaXZhdGUgX2luamVjdGVkVGFibGU6IE1hdFRhYmxlPGFueT4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbml0Q2RrVGFibGUoKTtcbiAgICAgICAgICAgICAgdGhpcy5pbml0RGVib3VuY2VTdWJqZWN0KCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFeGFtcGxlRW50aXR5Q2hhbmdlZCgpKSB7XG4gICAgICB0aGlzLl9vbGRFeGFtcGxlRW50aXR5ID0gdGhpcy50b1BsYWluSnNvbih0aGlzLmV4YW1wbGVFbnRpdHkpO1xuICAgICAgdGhpcy5fZXhhbXBsZUVudGl0eVN1YmplY3QubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNFeGFtcGxlRW50aXR5Q2hhbmdlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIUxPREFTSC5pc0VxdWFsKHRoaXMuX29sZEV4YW1wbGVFbnRpdHksIHRoaXMudG9QbGFpbkpzb24odGhpcy5leGFtcGxlRW50aXR5KSk7XG4gIH1cblxuICBwcml2YXRlIHRvUGxhaW5Kc29uKG9iamVjdDogYW55KTogSlNPTiB7XG4gICAgaWYgKG9iamVjdCkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0Q2RrVGFibGUoKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gICAgY29uc3QgdGFibGUgPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmWydfZGF0YSddLmNvbXBvbmVudFZpZXcuY29tcG9uZW50O1xuICAgIGlmICh0YWJsZSkge1xuICAgICAgdGhpcy5fdGFibGUgPSB0YWJsZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2luamVjdGVkVGFibGUpIHtcbiAgICAgIHRoaXMuX3RhYmxlID0gdGhpcy5faW5qZWN0ZWRUYWJsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBBbmd1bGFyIHZlcnNpb24nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXREZWJvdW5jZVN1YmplY3QoKSB7XG4gICAgdGhpcy5fZXhhbXBsZUVudGl0eVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHZvaWQ+KG51bGwpO1xuICAgIHRoaXMuX2V4YW1wbGVFbnRpdHlTdWJqZWN0LnBpcGUoXG4gICAgIGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlVGltZSkpXG4gICAgIC5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICAgdGhpcy51cGRhdGVGaWx0ZXJQcmVkaWNhdGUoKTtcbiAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUZpbHRlclByZWRpY2F0ZSgpIHtcbiAgICBjb25zdCBtYXREYXRhU291cmNlID0gdGhpcy5nZXRNYXREYXRhU291cmNlKCk7XG4gICAgaWYgKG1hdERhdGFTb3VyY2UpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgIG1hdERhdGFTb3VyY2UuZmlsdGVyUHJlZGljYXRlID0gKGRhdGEpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuIF90aGlzLl9maWx0ZXJTZXJ2aWNlLmZpbHRlclByZWRpY2F0ZShfdGhpcy5leGFtcGxlRW50aXR5LCBkYXRhLCBfdGhpcy5maWx0ZXJUeXBlLCBfdGhpcy5jYXNlU2Vuc2l0aXZlKTtcbiAgICAgIH1cbiAgICAgIG1hdERhdGFTb3VyY2UuZmlsdGVyID0gdGhpcy5leGFtcGxlRW50aXR5IGFzIGFueTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWF0RGF0YVNvdXJjZSgpOiBNYXRUYWJsZURhdGFTb3VyY2U8YW55PiB7XG4gICAgY29uc3QgbWF0VGFibGUgPSB0aGlzLl90YWJsZSBhcyBNYXRUYWJsZTxhbnk+O1xuICAgIHJldHVybiAobWF0VGFibGUuZGF0YVNvdXJjZSBhcyBNYXRUYWJsZURhdGFTb3VyY2U8YW55Pik7XG4gIH1cblxufVxuIl19