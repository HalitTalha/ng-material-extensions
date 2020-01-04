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
            this._exampleEntitySubject.next(undefined);
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
                return this._filterService.filterPredicate({ example: this.exampleEntity, item }, this.propertyOptions, { filterType: this.filterType, caseSensitive: this.caseSensitive });
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
    propertyOptions: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL21hdC10YWJsZS1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFXLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsUUFBUSxFQUFzQixNQUFNLG1CQUFtQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU01RSxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFrQmxDLFlBQW9CLGNBQXFDLEVBQ1QsY0FBNkIsRUFDekQsaUJBQW1DO1FBRm5DLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNULG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQ3pELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFWOUMsaUJBQVksR0FBRyxHQUFHLENBQUM7UUFDbkIsZUFBVSxHQUFtQixjQUFjLENBQUMsUUFBUSxDQUFDO1FBQ3JELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBU25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM3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ICcuL3Byb3BlcnR5LW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIERvQ2hlY2ssIElucHV0LCBWaWV3Q29udGFpbmVyUmVmLCBIb3N0LCBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRUYWJsZSwgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBNYXRUYWJsZUZpbHRlciB9IGZyb20gJy4vbWF0LXRhYmxlLWZpbHRlci5lbnVtJztcclxuaW1wb3J0IHsgTWF0VGFibGVGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tYXQtdGFibGUtZmlsdGVyLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbWF0VGFibGVGaWx0ZXJdJyxcclxuICBleHBvcnRBczogJ21hdFRhYmxlRmlsdGVyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0VGFibGVGaWx0ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBEb0NoZWNrIHtcclxuXHJcbiAgcHJpdmF0ZSBfb2xkRXhhbXBsZUVudGl0eTogYW55O1xyXG5cclxuICBASW5wdXQoKSBleGFtcGxlRW50aXR5OiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIGluIG1pbGxpc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgX3RhYmxlOiBhbnk7XHJcbiAgQElucHV0KCkgZGVib3VuY2VUaW1lID0gNDAwO1xyXG4gIEBJbnB1dCgpIGZpbHRlclR5cGU6IE1hdFRhYmxlRmlsdGVyID0gTWF0VGFibGVGaWx0ZXIuQU5ZV0hFUkU7XHJcbiAgQElucHV0KCkgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGN1c3RvbVByZWRpY2F0ZTogKGRhdGE6IGFueSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBwcm9wZXJ0eU9wdGlvbnM6IFByb3BlcnR5T3B0aW9ucztcclxuICBwcml2YXRlIF9leGFtcGxlRW50aXR5U3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PHZvaWQ+O1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmlsdGVyU2VydmljZTogTWF0VGFibGVGaWx0ZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIEBIb3N0KCkgQFNlbGYoKSBAT3B0aW9uYWwoKSBwcml2YXRlIF9pbmplY3RlZFRhYmxlOiBNYXRUYWJsZTxhbnk+LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgICAgICAgICAgICB0aGlzLmluaXRDZGtUYWJsZSgpO1xyXG4gICAgICAgICAgICAgIHRoaXMuaW5pdERlYm91bmNlU3ViamVjdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2ZpbHRlclNlcnZpY2UuaXNDaGFuZ2VkKHRoaXMuX29sZEV4YW1wbGVFbnRpdHksIHRoaXMuZXhhbXBsZUVudGl0eSkpIHtcclxuICAgICAgdGhpcy5fb2xkRXhhbXBsZUVudGl0eSA9IHRoaXMuX2ZpbHRlclNlcnZpY2UudG9QbGFpbkpzb24odGhpcy5leGFtcGxlRW50aXR5KTtcclxuICAgICAgdGhpcy5fZXhhbXBsZUVudGl0eVN1YmplY3QubmV4dCh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaW5pdENka1RhYmxlKCkge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXHJcbiAgICBjb25zdCB0YWJsZSA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWZbJ19kYXRhJ10uY29tcG9uZW50Vmlldy5jb21wb25lbnQ7XHJcbiAgICBpZiAodGFibGUpIHtcclxuICAgICAgdGhpcy5fdGFibGUgPSB0YWJsZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5faW5qZWN0ZWRUYWJsZSkge1xyXG4gICAgICB0aGlzLl90YWJsZSA9IHRoaXMuX2luamVjdGVkVGFibGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIEFuZ3VsYXIgdmVyc2lvbiEnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdERlYm91bmNlU3ViamVjdCgpIHtcclxuICAgIHRoaXMuX2V4YW1wbGVFbnRpdHlTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDx2b2lkPihudWxsKTtcclxuICAgIHRoaXMuX2V4YW1wbGVFbnRpdHlTdWJqZWN0LnBpcGUoXHJcbiAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2VUaW1lKSlcclxuICAgICAuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICAgdGhpcy51cGRhdGVGaWx0ZXJQcmVkaWNhdGUoKTtcclxuICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlRmlsdGVyUHJlZGljYXRlKCkge1xyXG4gICAgY29uc3QgbWF0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0TWF0RGF0YVNvdXJjZSgpO1xyXG4gICAgaWYgKG1hdERhdGFTb3VyY2UpIHtcclxuICAgICAgbWF0RGF0YVNvdXJjZS5maWx0ZXJQcmVkaWNhdGUgPSB0aGlzLmdldEZpbHRlclByZWRpY2F0ZSgpO1xyXG4gICAgICBtYXREYXRhU291cmNlLmZpbHRlciA9IHRoaXMuZXhhbXBsZUVudGl0eSBhcyBhbnk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpbHRlclByZWRpY2F0ZSgpIHtcclxuICAgIGlmICh0aGlzLmN1c3RvbVByZWRpY2F0ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jdXN0b21QcmVkaWNhdGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKGl0ZW06IGFueSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJTZXJ2aWNlLmZpbHRlclByZWRpY2F0ZSh7ZXhhbXBsZTogdGhpcy5leGFtcGxlRW50aXR5LCBpdGVtfSwgdGhpcy5wcm9wZXJ0eU9wdGlvbnMsXHJcbiAgICAgICAgIHtmaWx0ZXJUeXBlOiB0aGlzLmZpbHRlclR5cGUsIGNhc2VTZW5zaXRpdmU6IHRoaXMuY2FzZVNlbnNpdGl2ZX0pO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRNYXREYXRhU291cmNlKCk6IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+IHtcclxuICAgIGNvbnN0IG1hdFRhYmxlID0gdGhpcy5fdGFibGUgYXMgTWF0VGFibGU8YW55PjtcclxuICAgIHJldHVybiAobWF0VGFibGUuZGF0YVNvdXJjZSBhcyBNYXRUYWJsZURhdGFTb3VyY2U8YW55Pik7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=