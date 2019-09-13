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
export class MatTableFilterDirective {
    /**
     * @param {?} _filterService
     * @param {?} _injectedTable
     * @param {?} _viewContainerRef
     */
    constructor(_filterService, _injectedTable, _viewContainerRef) {
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
    ngDoCheck() {
        if (this.isExampleEntityChanged()) {
            this._oldExampleEntity = this.toPlainJson(this.exampleEntity);
            this._exampleEntitySubject.next();
        }
    }
    /**
     * @private
     * @return {?}
     */
    isExampleEntityChanged() {
        return !LODASH.isEqual(this._oldExampleEntity, this.toPlainJson(this.exampleEntity));
    }
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    toPlainJson(object) {
        if (object) {
            return JSON.parse(JSON.stringify(object));
        }
        else {
            return undefined;
        }
    }
    /**
     * @private
     * @return {?}
     */
    initCdkTable() {
        // tslint:disable-next-line:no-string-literal
        /** @type {?} */
        const table = this._viewContainerRef['_data'].componentView.component;
        if (table) {
            this._table = table;
        }
        else if (this._injectedTable) {
            this._table = this._injectedTable;
        }
        else {
            throw new Error('Unsupported Angular version');
        }
    }
    /**
     * @private
     * @return {?}
     */
    initDebounceSubject() {
        this._exampleEntitySubject = new BehaviorSubject(null);
        this._exampleEntitySubject.pipe(debounceTime(this.debounceTime))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this.updateFilterPredicate();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    updateFilterPredicate() {
        /** @type {?} */
        const matDataSource = this.getMatDataSource();
        if (matDataSource) {
            /** @type {?} */
            const _this = this;
            matDataSource.filterPredicate = (/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                return _this._filterService.filterPredicate(_this.exampleEntity, data, _this.filterType, _this.caseSensitive);
            });
            matDataSource.filter = (/** @type {?} */ (this.exampleEntity));
        }
    }
    /**
     * @private
     * @return {?}
     */
    getMatDataSource() {
        /** @type {?} */
        const matTable = (/** @type {?} */ (this._table));
        return ((/** @type {?} */ (matTable.dataSource)));
    }
}
MatTableFilterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[matTableFilter]',
                exportAs: 'matTableFilter'
            },] }
];
/** @nocollapse */
MatTableFilterDirective.ctorParameters = () => [
    { type: MatTableFilterService },
    { type: MatTable, decorators: [{ type: Host }, { type: Self }, { type: Optional }] },
    { type: ViewContainerRef }
];
MatTableFilterDirective.propDecorators = {
    exampleEntity: [{ type: Input }],
    debounceTime: [{ type: Input }],
    filterType: [{ type: Input }],
    caseSensitive: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL21hdC10YWJsZS1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFXLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsUUFBUSxFQUFzQixNQUFNLG1CQUFtQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUtqQyxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFpQmxDLFlBQW9CLGNBQXFDLEVBQ1QsY0FBNkIsRUFDekQsaUJBQW1DO1FBRm5DLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNULG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQ3pELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFUOUMsaUJBQVksR0FBRyxHQUFHLENBQUM7UUFDbkIsZUFBVSxHQUFtQixjQUFjLENBQUMsUUFBUSxDQUFDO1FBQ3JELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBUW5CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLGlC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b3J0IHsgRGlyZWN0aXZlLCBEb0NoZWNrLCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgSG9zdCwgU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0VGFibGUsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTWF0VGFibGVGaWx0ZXIgfSBmcm9tICcuL21hdC10YWJsZS1maWx0ZXIuZW51bSc7XHJcbmltcG9ydCB7IE1hdFRhYmxlRmlsdGVyU2VydmljZSB9IGZyb20gJy4vbWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgTE9EQVNIIGZyb20gJ2xvZGFzaCc7XHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21hdFRhYmxlRmlsdGVyXScsXHJcbiAgZXhwb3J0QXM6ICdtYXRUYWJsZUZpbHRlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRmlsdGVyRGlyZWN0aXZlIGltcGxlbWVudHMgRG9DaGVjayB7XHJcblxyXG4gIHByaXZhdGUgX29sZEV4YW1wbGVFbnRpdHk6IGFueTtcclxuXHJcbiAgQElucHV0KCkgZXhhbXBsZUVudGl0eTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBpbiBtaWxsaXNcclxuICAgKi9cclxuICBwcml2YXRlIF90YWJsZTogYW55O1xyXG4gIEBJbnB1dCgpIGRlYm91bmNlVGltZSA9IDQwMDtcclxuICBASW5wdXQoKSBmaWx0ZXJUeXBlOiBNYXRUYWJsZUZpbHRlciA9IE1hdFRhYmxlRmlsdGVyLkFOWVdIRVJFO1xyXG4gIEBJbnB1dCgpIGNhc2VTZW5zaXRpdmUgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBfZXhhbXBsZUVudGl0eVN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDx2b2lkPjtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZpbHRlclNlcnZpY2U6IE1hdFRhYmxlRmlsdGVyU2VydmljZSxcclxuICAgICAgICAgICAgICBASG9zdCgpIEBTZWxmKCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfaW5qZWN0ZWRUYWJsZTogTWF0VGFibGU8YW55PixcclxuICAgICAgICAgICAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pbml0Q2RrVGFibGUoKTtcclxuICAgICAgICAgICAgICB0aGlzLmluaXREZWJvdW5jZVN1YmplY3QoKTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRXhhbXBsZUVudGl0eUNoYW5nZWQoKSkge1xyXG4gICAgICB0aGlzLl9vbGRFeGFtcGxlRW50aXR5ID0gdGhpcy50b1BsYWluSnNvbih0aGlzLmV4YW1wbGVFbnRpdHkpO1xyXG4gICAgICB0aGlzLl9leGFtcGxlRW50aXR5U3ViamVjdC5uZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRXhhbXBsZUVudGl0eUNoYW5nZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIUxPREFTSC5pc0VxdWFsKHRoaXMuX29sZEV4YW1wbGVFbnRpdHksIHRoaXMudG9QbGFpbkpzb24odGhpcy5leGFtcGxlRW50aXR5KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvUGxhaW5Kc29uKG9iamVjdDogYW55KTogSlNPTiB7XHJcbiAgICBpZiAob2JqZWN0KSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdENka1RhYmxlKCkge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXHJcbiAgICBjb25zdCB0YWJsZSA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWZbJ19kYXRhJ10uY29tcG9uZW50Vmlldy5jb21wb25lbnQ7XHJcbiAgICBpZiAodGFibGUpIHtcclxuICAgICAgdGhpcy5fdGFibGUgPSB0YWJsZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5faW5qZWN0ZWRUYWJsZSkge1xyXG4gICAgICB0aGlzLl90YWJsZSA9IHRoaXMuX2luamVjdGVkVGFibGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIEFuZ3VsYXIgdmVyc2lvbicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RGVib3VuY2VTdWJqZWN0KCkge1xyXG4gICAgdGhpcy5fZXhhbXBsZUVudGl0eVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHZvaWQ+KG51bGwpO1xyXG4gICAgdGhpcy5fZXhhbXBsZUVudGl0eVN1YmplY3QucGlwZShcclxuICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZVRpbWUpKVxyXG4gICAgIC5zdWJzY3JpYmUoXyA9PiB7XHJcbiAgICAgICB0aGlzLnVwZGF0ZUZpbHRlclByZWRpY2F0ZSgpO1xyXG4gICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVGaWx0ZXJQcmVkaWNhdGUoKSB7XHJcbiAgICBjb25zdCBtYXREYXRhU291cmNlID0gdGhpcy5nZXRNYXREYXRhU291cmNlKCk7XHJcbiAgICBpZiAobWF0RGF0YVNvdXJjZSkge1xyXG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgIG1hdERhdGFTb3VyY2UuZmlsdGVyUHJlZGljYXRlID0gKGRhdGEpOiBib29sZWFuID0+IHtcclxuICAgICAgICByZXR1cm4gX3RoaXMuX2ZpbHRlclNlcnZpY2UuZmlsdGVyUHJlZGljYXRlKF90aGlzLmV4YW1wbGVFbnRpdHksIGRhdGEsIF90aGlzLmZpbHRlclR5cGUsIF90aGlzLmNhc2VTZW5zaXRpdmUpO1xyXG4gICAgICB9XHJcbiAgICAgIG1hdERhdGFTb3VyY2UuZmlsdGVyID0gdGhpcy5leGFtcGxlRW50aXR5IGFzIGFueTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE1hdERhdGFTb3VyY2UoKTogTWF0VGFibGVEYXRhU291cmNlPGFueT4ge1xyXG4gICAgY29uc3QgbWF0VGFibGUgPSB0aGlzLl90YWJsZSBhcyBNYXRUYWJsZTxhbnk+O1xyXG4gICAgcmV0dXJuIChtYXRUYWJsZS5kYXRhU291cmNlIGFzIE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==