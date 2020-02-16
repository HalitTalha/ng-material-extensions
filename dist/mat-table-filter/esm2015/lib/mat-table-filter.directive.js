import { __decorate, __metadata, __param } from "tslib";
import { Directive, Input, Host, Self, Optional } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatTableFilter } from './mat-table-filter.enum';
import { MatTableFilterService } from './services/mat-table-filter.service';
let MatTableFilterDirective = class MatTableFilterDirective {
    constructor(_filterService, _table) {
        this._filterService = _filterService;
        this._table = _table;
        /**
         * in millis
         */
        this.debounceTime = 400;
        this.filterType = MatTableFilter.ANYWHERE;
        this.caseSensitive = false;
        this.initDebounceSubject();
    }
    ngDoCheck() {
        if (this._filterService.isChanged(this._oldExampleEntity, this.exampleEntity)) {
            this._oldExampleEntity = this._filterService.toPlainJson(this.exampleEntity);
            this._exampleEntitySubject.next(undefined);
        }
    }
    initDebounceSubject() {
        this._exampleEntitySubject = new BehaviorSubject(null);
        this._exampleEntitySubject.pipe(debounceTime(this.debounceTime))
            .subscribe(_ => {
            this.updateFilterPredicate();
        });
    }
    updateFilterPredicate() {
        const matDataSource = this.getMatDataSource();
        if (matDataSource) {
            matDataSource.filterPredicate = this.getFilterPredicate();
            matDataSource.filter = this.exampleEntity;
        }
    }
    getFilterPredicate() {
        if (this.customPredicate) {
            return this.customPredicate;
        }
        else {
            return (item) => {
                return this._filterService.filterPredicate({ example: this.exampleEntity, item }, this.propertyOptions, { filterType: this.filterType, caseSensitive: this.caseSensitive });
            };
        }
    }
    getMatDataSource() {
        const matTable = this._table;
        return matTable.dataSource;
    }
};
MatTableFilterDirective.ctorParameters = () => [
    { type: MatTableFilterService },
    { type: MatTable, decorators: [{ type: Host }, { type: Self }, { type: Optional }] }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], MatTableFilterDirective.prototype, "exampleEntity", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MatTableFilterDirective.prototype, "debounceTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatTableFilterDirective.prototype, "filterType", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MatTableFilterDirective.prototype, "caseSensitive", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], MatTableFilterDirective.prototype, "customPredicate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MatTableFilterDirective.prototype, "propertyOptions", void 0);
MatTableFilterDirective = __decorate([
    Directive({
        selector: '[matTableFilter]',
        exportAs: 'matTableFilter'
    }),
    __param(1, Host()), __param(1, Self()), __param(1, Optional()),
    __metadata("design:paramtypes", [MatTableFilterService,
        MatTable])
], MatTableFilterDirective);
export { MatTableFilterDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL21hdC10YWJsZS1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFXLEtBQUssRUFBb0IsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU01RSxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQWdCbEMsWUFDVSxjQUFxQyxFQUNULE1BQXFCO1FBRGpELG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNULFdBQU0sR0FBTixNQUFNLENBQWU7UUFiM0Q7O1dBRUc7UUFDTSxpQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQixlQUFVLEdBQW1CLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFVN0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDN0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUdPLG1CQUFtQjtRQUN6QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxlQUFlLENBQU8sSUFBSSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FDN0IsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvQixTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDYixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxxQkFBcUI7UUFDM0IsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDOUMsSUFBSSxhQUFhLEVBQUU7WUFDakIsYUFBYSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxRCxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFvQixDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzdCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBUyxFQUFXLEVBQUU7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUNwRyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUN4RSxDQUFDLENBQUM7U0FDSDtJQUNILENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQXVCLENBQUM7UUFDOUMsT0FBUSxRQUFRLENBQUMsVUFBc0MsQ0FBQztJQUMxRCxDQUFDO0NBRUYsQ0FBQTs7WUEvQzJCLHFCQUFxQjtZQUNELFFBQVEsdUJBQW5ELElBQUksWUFBSSxJQUFJLFlBQUksUUFBUTs7QUFmbEI7SUFBUixLQUFLLEVBQUU7OzhEQUFvQjtBQUtuQjtJQUFSLEtBQUssRUFBRTs7NkRBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOzsyREFBc0Q7QUFDckQ7SUFBUixLQUFLLEVBQUU7OzhEQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTs7Z0VBQXlDO0FBQ3hDO0lBQVIsS0FBSyxFQUFFOztnRUFBa0M7QUFaL0IsdUJBQXVCO0lBSm5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsUUFBUSxFQUFFLGdCQUFnQjtLQUMzQixDQUFDO0lBbUJHLFdBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxXQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsV0FBQSxRQUFRLEVBQUUsQ0FBQTtxQ0FESCxxQkFBcUI7UUFDRCxRQUFRO0dBbEIzQyx1QkFBdUIsQ0FnRW5DO1NBaEVZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5T3B0aW9ucyB9IGZyb20gJy4vcHJvcGVydHktb3B0aW9ucyc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRG9DaGVjaywgSW5wdXQsIFZpZXdDb250YWluZXJSZWYsIEhvc3QsIFNlbGYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFRhYmxlLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE1hdFRhYmxlRmlsdGVyIH0gZnJvbSAnLi9tYXQtdGFibGUtZmlsdGVyLmVudW0nO1xyXG5pbXBvcnQgeyBNYXRUYWJsZUZpbHRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21hdC10YWJsZS1maWx0ZXIuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttYXRUYWJsZUZpbHRlcl0nLFxyXG4gIGV4cG9ydEFzOiAnbWF0VGFibGVGaWx0ZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUZpbHRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIERvQ2hlY2sge1xyXG4gIHByaXZhdGUgX29sZEV4YW1wbGVFbnRpdHk6IGFueTtcclxuXHJcbiAgQElucHV0KCkgZXhhbXBsZUVudGl0eTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBpbiBtaWxsaXNcclxuICAgKi9cclxuICBASW5wdXQoKSBkZWJvdW5jZVRpbWUgPSA0MDA7XHJcbiAgQElucHV0KCkgZmlsdGVyVHlwZTogTWF0VGFibGVGaWx0ZXIgPSBNYXRUYWJsZUZpbHRlci5BTllXSEVSRTtcclxuICBASW5wdXQoKSBjYXNlU2Vuc2l0aXZlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY3VzdG9tUHJlZGljYXRlOiAoZGF0YTogYW55KSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHByb3BlcnR5T3B0aW9uczogUHJvcGVydHlPcHRpb25zO1xyXG4gIHByaXZhdGUgX2V4YW1wbGVFbnRpdHlTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8dm9pZD47XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2ZpbHRlclNlcnZpY2U6IE1hdFRhYmxlRmlsdGVyU2VydmljZSxcclxuICAgIEBIb3N0KCkgQFNlbGYoKSBAT3B0aW9uYWwoKSBwcml2YXRlIF90YWJsZTogTWF0VGFibGU8YW55PlxyXG4gICkge1xyXG4gICAgdGhpcy5pbml0RGVib3VuY2VTdWJqZWN0KCk7XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZmlsdGVyU2VydmljZS5pc0NoYW5nZWQodGhpcy5fb2xkRXhhbXBsZUVudGl0eSwgdGhpcy5leGFtcGxlRW50aXR5KSkge1xyXG4gICAgICB0aGlzLl9vbGRFeGFtcGxlRW50aXR5ID0gdGhpcy5fZmlsdGVyU2VydmljZS50b1BsYWluSnNvbih0aGlzLmV4YW1wbGVFbnRpdHkpO1xyXG4gICAgICB0aGlzLl9leGFtcGxlRW50aXR5U3ViamVjdC5uZXh0KHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBpbml0RGVib3VuY2VTdWJqZWN0KCkge1xyXG4gICAgdGhpcy5fZXhhbXBsZUVudGl0eVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHZvaWQ+KG51bGwpO1xyXG4gICAgdGhpcy5fZXhhbXBsZUVudGl0eVN1YmplY3QucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2VUaW1lKSlcclxuICAgICAgLnN1YnNjcmliZShfID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlclByZWRpY2F0ZSgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlRmlsdGVyUHJlZGljYXRlKCkge1xyXG4gICAgY29uc3QgbWF0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0TWF0RGF0YVNvdXJjZSgpO1xyXG4gICAgaWYgKG1hdERhdGFTb3VyY2UpIHtcclxuICAgICAgbWF0RGF0YVNvdXJjZS5maWx0ZXJQcmVkaWNhdGUgPSB0aGlzLmdldEZpbHRlclByZWRpY2F0ZSgpO1xyXG4gICAgICBtYXREYXRhU291cmNlLmZpbHRlciA9IHRoaXMuZXhhbXBsZUVudGl0eSBhcyBhbnk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpbHRlclByZWRpY2F0ZSgpIHtcclxuICAgIGlmICh0aGlzLmN1c3RvbVByZWRpY2F0ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jdXN0b21QcmVkaWNhdGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKGl0ZW06IGFueSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJTZXJ2aWNlLmZpbHRlclByZWRpY2F0ZSh7IGV4YW1wbGU6IHRoaXMuZXhhbXBsZUVudGl0eSwgaXRlbSB9LCB0aGlzLnByb3BlcnR5T3B0aW9ucyxcclxuICAgICAgICAgIHsgZmlsdGVyVHlwZTogdGhpcy5maWx0ZXJUeXBlLCBjYXNlU2Vuc2l0aXZlOiB0aGlzLmNhc2VTZW5zaXRpdmUgfSk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE1hdERhdGFTb3VyY2UoKTogTWF0VGFibGVEYXRhU291cmNlPGFueT4ge1xyXG4gICAgY29uc3QgbWF0VGFibGUgPSB0aGlzLl90YWJsZSBhcyBNYXRUYWJsZTxhbnk+O1xyXG4gICAgcmV0dXJuIChtYXRUYWJsZS5kYXRhU291cmNlIGFzIE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==