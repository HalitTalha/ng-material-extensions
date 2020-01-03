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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL21hdC10YWJsZS1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFXLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsUUFBUSxFQUFzQixNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUtqQyxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFpQmxDLFlBQW9CLGNBQXFDLEVBQ1QsY0FBNkIsRUFDekQsaUJBQW1DO1FBRm5DLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNULG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQ3pELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFUOUMsaUJBQVksR0FBRyxHQUFHLENBQUM7UUFDbkIsZUFBVSxHQUFtQixjQUFjLENBQUMsUUFBUSxDQUFDO1FBQ3JELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBUW5CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLGlC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b3J0IHsgRGlyZWN0aXZlLCBEb0NoZWNrLCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgSG9zdCwgU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFRhYmxlLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1hdFRhYmxlRmlsdGVyIH0gZnJvbSAnLi9tYXQtdGFibGUtZmlsdGVyLmVudW0nO1xuaW1wb3J0IHsgTWF0VGFibGVGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9tYXQtdGFibGUtZmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgTE9EQVNIIGZyb20gJ2xvZGFzaCc7XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWF0VGFibGVGaWx0ZXJdJyxcbiAgZXhwb3J0QXM6ICdtYXRUYWJsZUZpbHRlcidcbn0pXG5leHBvcnQgY2xhc3MgTWF0VGFibGVGaWx0ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBEb0NoZWNrIHtcblxuICBwcml2YXRlIF9vbGRFeGFtcGxlRW50aXR5OiBhbnk7XG5cbiAgQElucHV0KCkgZXhhbXBsZUVudGl0eTogYW55O1xuXG4gIC8qKlxuICAgKiBpbiBtaWxsaXNcbiAgICovXG4gIHByaXZhdGUgX3RhYmxlOiBhbnk7XG4gIEBJbnB1dCgpIGRlYm91bmNlVGltZSA9IDQwMDtcbiAgQElucHV0KCkgZmlsdGVyVHlwZTogTWF0VGFibGVGaWx0ZXIgPSBNYXRUYWJsZUZpbHRlci5BTllXSEVSRTtcbiAgQElucHV0KCkgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2V4YW1wbGVFbnRpdHlTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8dm9pZD47XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9maWx0ZXJTZXJ2aWNlOiBNYXRUYWJsZUZpbHRlclNlcnZpY2UsXG4gICAgICAgICAgICAgIEBIb3N0KCkgQFNlbGYoKSBAT3B0aW9uYWwoKSBwcml2YXRlIF9pbmplY3RlZFRhYmxlOiBNYXRUYWJsZTxhbnk+LFxuICAgICAgICAgICAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5pdENka1RhYmxlKCk7XG4gICAgICAgICAgICAgIHRoaXMuaW5pdERlYm91bmNlU3ViamVjdCgpO1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRXhhbXBsZUVudGl0eUNoYW5nZWQoKSkge1xuICAgICAgdGhpcy5fb2xkRXhhbXBsZUVudGl0eSA9IHRoaXMudG9QbGFpbkpzb24odGhpcy5leGFtcGxlRW50aXR5KTtcbiAgICAgIHRoaXMuX2V4YW1wbGVFbnRpdHlTdWJqZWN0Lm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzRXhhbXBsZUVudGl0eUNoYW5nZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFMT0RBU0guaXNFcXVhbCh0aGlzLl9vbGRFeGFtcGxlRW50aXR5LCB0aGlzLnRvUGxhaW5Kc29uKHRoaXMuZXhhbXBsZUVudGl0eSkpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b1BsYWluSnNvbihvYmplY3Q6IGFueSk6IEpTT04ge1xuICAgIGlmIChvYmplY3QpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdENka1RhYmxlKCkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbFxuICAgIGNvbnN0IHRhYmxlID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZlsnX2RhdGEnXS5jb21wb25lbnRWaWV3LmNvbXBvbmVudDtcbiAgICBpZiAodGFibGUpIHtcbiAgICAgIHRoaXMuX3RhYmxlID0gdGFibGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pbmplY3RlZFRhYmxlKSB7XG4gICAgICB0aGlzLl90YWJsZSA9IHRoaXMuX2luamVjdGVkVGFibGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgQW5ndWxhciB2ZXJzaW9uJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0RGVib3VuY2VTdWJqZWN0KCkge1xuICAgIHRoaXMuX2V4YW1wbGVFbnRpdHlTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDx2b2lkPihudWxsKTtcbiAgICB0aGlzLl9leGFtcGxlRW50aXR5U3ViamVjdC5waXBlKFxuICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZVRpbWUpKVxuICAgICAuc3Vic2NyaWJlKF8gPT4ge1xuICAgICAgIHRoaXMudXBkYXRlRmlsdGVyUHJlZGljYXRlKCk7XG4gICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVGaWx0ZXJQcmVkaWNhdGUoKSB7XG4gICAgY29uc3QgbWF0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0TWF0RGF0YVNvdXJjZSgpO1xuICAgIGlmIChtYXREYXRhU291cmNlKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICBtYXREYXRhU291cmNlLmZpbHRlclByZWRpY2F0ZSA9IChkYXRhKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiBfdGhpcy5fZmlsdGVyU2VydmljZS5maWx0ZXJQcmVkaWNhdGUoX3RoaXMuZXhhbXBsZUVudGl0eSwgZGF0YSwgX3RoaXMuZmlsdGVyVHlwZSwgX3RoaXMuY2FzZVNlbnNpdGl2ZSk7XG4gICAgICB9XG4gICAgICBtYXREYXRhU291cmNlLmZpbHRlciA9IHRoaXMuZXhhbXBsZUVudGl0eSBhcyBhbnk7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIGdldE1hdERhdGFTb3VyY2UoKTogTWF0VGFibGVEYXRhU291cmNlPGFueT4ge1xuICAgIGNvbnN0IG1hdFRhYmxlID0gdGhpcy5fdGFibGUgYXMgTWF0VGFibGU8YW55PjtcbiAgICByZXR1cm4gKG1hdFRhYmxlLmRhdGFTb3VyY2UgYXMgTWF0VGFibGVEYXRhU291cmNlPGFueT4pO1xuICB9XG5cbn1cbiJdfQ==