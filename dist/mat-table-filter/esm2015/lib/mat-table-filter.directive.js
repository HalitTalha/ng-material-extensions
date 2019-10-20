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
        if (this._filterService.isChanged(this._oldExampleEntity, this.exampleEntity)) {
            this._oldExampleEntity = this._filterService.toPlainJson(this.exampleEntity);
            this._exampleEntitySubject.next();
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
            throw new Error('Unsupported Angular version!');
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
            matDataSource.filterPredicate = this.getFilterPredicate();
            matDataSource.filter = (/** @type {?} */ (this.exampleEntity));
        }
    }
    /**
     * @private
     * @return {?}
     */
    getFilterPredicate() {
        if (this.customPredicate) {
            return this.customPredicate;
        }
        else {
            return (/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return this._filterService.filterPredicate({ example: this.exampleEntity, item }, this.columnOptions, { filterType: this.filterType, caseSensitive: this.caseSensitive });
            });
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
    caseSensitive: [{ type: Input }],
    customPredicate: [{ type: Input }],
    columnOptions: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL21hdC10YWJsZS1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFXLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsUUFBUSxFQUFzQixNQUFNLG1CQUFtQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU01RSxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFrQmxDLFlBQW9CLGNBQXFDLEVBQ1QsY0FBNkIsRUFDekQsaUJBQW1DO1FBRm5DLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNULG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQ3pELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFWOUMsaUJBQVksR0FBRyxHQUFHLENBQUM7UUFDbkIsZUFBVSxHQUFtQixjQUFjLENBQUMsUUFBUSxDQUFDO1FBQ3JELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBU25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM3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cHRpb25zJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBEb0NoZWNrLCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgSG9zdCwgU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0VGFibGUsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTWF0VGFibGVGaWx0ZXIgfSBmcm9tICcuL21hdC10YWJsZS1maWx0ZXIuZW51bSc7XHJcbmltcG9ydCB7IE1hdFRhYmxlRmlsdGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21hdFRhYmxlRmlsdGVyXScsXHJcbiAgZXhwb3J0QXM6ICdtYXRUYWJsZUZpbHRlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRmlsdGVyRGlyZWN0aXZlIGltcGxlbWVudHMgRG9DaGVjayB7XHJcblxyXG4gIHByaXZhdGUgX29sZEV4YW1wbGVFbnRpdHk6IGFueTtcclxuXHJcbiAgQElucHV0KCkgZXhhbXBsZUVudGl0eTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBpbiBtaWxsaXNcclxuICAgKi9cclxuICBwcml2YXRlIF90YWJsZTogYW55O1xyXG4gIEBJbnB1dCgpIGRlYm91bmNlVGltZSA9IDQwMDtcclxuICBASW5wdXQoKSBmaWx0ZXJUeXBlOiBNYXRUYWJsZUZpbHRlciA9IE1hdFRhYmxlRmlsdGVyLkFOWVdIRVJFO1xyXG4gIEBJbnB1dCgpIGNhc2VTZW5zaXRpdmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBjdXN0b21QcmVkaWNhdGU6IChkYXRhOiBhbnkpID0+IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY29sdW1uT3B0aW9uczogQ29sdW1uT3B0aW9ucztcclxuICBwcml2YXRlIF9leGFtcGxlRW50aXR5U3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PHZvaWQ+O1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmlsdGVyU2VydmljZTogTWF0VGFibGVGaWx0ZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIEBIb3N0KCkgQFNlbGYoKSBAT3B0aW9uYWwoKSBwcml2YXRlIF9pbmplY3RlZFRhYmxlOiBNYXRUYWJsZTxhbnk+LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgICAgICAgICAgICB0aGlzLmluaXRDZGtUYWJsZSgpO1xyXG4gICAgICAgICAgICAgIHRoaXMuaW5pdERlYm91bmNlU3ViamVjdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2ZpbHRlclNlcnZpY2UuaXNDaGFuZ2VkKHRoaXMuX29sZEV4YW1wbGVFbnRpdHksIHRoaXMuZXhhbXBsZUVudGl0eSkpIHtcclxuICAgICAgdGhpcy5fb2xkRXhhbXBsZUVudGl0eSA9IHRoaXMuX2ZpbHRlclNlcnZpY2UudG9QbGFpbkpzb24odGhpcy5leGFtcGxlRW50aXR5KTtcclxuICAgICAgdGhpcy5fZXhhbXBsZUVudGl0eVN1YmplY3QubmV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaW5pdENka1RhYmxlKCkge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXHJcbiAgICBjb25zdCB0YWJsZSA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWZbJ19kYXRhJ10uY29tcG9uZW50Vmlldy5jb21wb25lbnQ7XHJcbiAgICBpZiAodGFibGUpIHtcclxuICAgICAgdGhpcy5fdGFibGUgPSB0YWJsZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5faW5qZWN0ZWRUYWJsZSkge1xyXG4gICAgICB0aGlzLl90YWJsZSA9IHRoaXMuX2luamVjdGVkVGFibGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIEFuZ3VsYXIgdmVyc2lvbiEnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdERlYm91bmNlU3ViamVjdCgpIHtcclxuICAgIHRoaXMuX2V4YW1wbGVFbnRpdHlTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDx2b2lkPihudWxsKTtcclxuICAgIHRoaXMuX2V4YW1wbGVFbnRpdHlTdWJqZWN0LnBpcGUoXHJcbiAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2VUaW1lKSlcclxuICAgICAuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICAgdGhpcy51cGRhdGVGaWx0ZXJQcmVkaWNhdGUoKTtcclxuICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlRmlsdGVyUHJlZGljYXRlKCkge1xyXG4gICAgY29uc3QgbWF0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0TWF0RGF0YVNvdXJjZSgpO1xyXG4gICAgaWYgKG1hdERhdGFTb3VyY2UpIHtcclxuICAgICAgbWF0RGF0YVNvdXJjZS5maWx0ZXJQcmVkaWNhdGUgPSB0aGlzLmdldEZpbHRlclByZWRpY2F0ZSgpO1xyXG4gICAgICBtYXREYXRhU291cmNlLmZpbHRlciA9IHRoaXMuZXhhbXBsZUVudGl0eSBhcyBhbnk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpbHRlclByZWRpY2F0ZSgpIHtcclxuICAgIGlmICh0aGlzLmN1c3RvbVByZWRpY2F0ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jdXN0b21QcmVkaWNhdGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKGl0ZW06IGFueSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJTZXJ2aWNlLmZpbHRlclByZWRpY2F0ZSh7ZXhhbXBsZTogdGhpcy5leGFtcGxlRW50aXR5LCBpdGVtfSwgdGhpcy5jb2x1bW5PcHRpb25zLFxyXG4gICAgICAgICB7ZmlsdGVyVHlwZTogdGhpcy5maWx0ZXJUeXBlLCBjYXNlU2Vuc2l0aXZlOiB0aGlzLmNhc2VTZW5zaXRpdmV9KTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TWF0RGF0YVNvdXJjZSgpOiBNYXRUYWJsZURhdGFTb3VyY2U8YW55PiB7XHJcbiAgICBjb25zdCBtYXRUYWJsZSA9IHRoaXMuX3RhYmxlIGFzIE1hdFRhYmxlPGFueT47XHJcbiAgICByZXR1cm4gKG1hdFRhYmxlLmRhdGFTb3VyY2UgYXMgTWF0VGFibGVEYXRhU291cmNlPGFueT4pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19