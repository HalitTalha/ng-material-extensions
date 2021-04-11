import { Directive, Input, Host, Self, Optional } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatTableFilter } from './mat-table-filter.enum';
import { MatTableFilterService } from './services/mat-table-filter.service';
export class MatTableFilterDirective {
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
}
MatTableFilterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[matTableFilter]',
                exportAs: 'matTableFilter'
            },] }
];
MatTableFilterDirective.ctorParameters = () => [
    { type: MatTableFilterService },
    { type: MatTable, decorators: [{ type: Host }, { type: Self }, { type: Optional }] }
];
MatTableFilterDirective.propDecorators = {
    exampleEntity: [{ type: Input }],
    debounceTime: [{ type: Input }],
    filterType: [{ type: Input }],
    caseSensitive: [{ type: Input }],
    customPredicate: [{ type: Input }],
    propertyOptions: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiRDovYW5ndWxhcl93b3Jrc3BhY2UvbmctbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wcm9qZWN0cy9tYXQtdGFibGUtZmlsdGVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9tYXQtdGFibGUtZmlsdGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFXLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsUUFBUSxFQUFzQixNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU01RSxNQUFNLE9BQU8sdUJBQXVCO0lBZ0JsQyxZQUNVLGNBQXFDLEVBQ1QsTUFBcUI7UUFEakQsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ1QsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQWIzRDs7V0FFRztRQUNNLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ25CLGVBQVUsR0FBbUIsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUNyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQVU3QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM3RSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBR08sbUJBQW1CO1FBQ3pCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLGVBQWUsQ0FBTyxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUM3QixZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNiLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLHFCQUFxQjtRQUMzQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM5QyxJQUFJLGFBQWEsRUFBRTtZQUNqQixhQUFhLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFELGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQW9CLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDN0I7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFTLEVBQVcsRUFBRTtnQkFDNUIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQ3BHLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQ3hFLENBQUMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBdUIsQ0FBQztRQUM5QyxPQUFRLFFBQVEsQ0FBQyxVQUFzQyxDQUFDO0lBQzFELENBQUM7OztZQWxFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7O1lBTFEscUJBQXFCO1lBSnJCLFFBQVEsdUJBNEJaLElBQUksWUFBSSxJQUFJLFlBQUksUUFBUTs7OzRCQWYxQixLQUFLOzJCQUtMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5T3B0aW9ucyB9IGZyb20gJy4vcHJvcGVydHktb3B0aW9ucyc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRG9DaGVjaywgSW5wdXQsIEhvc3QsIFNlbGYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFRhYmxlLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE1hdFRhYmxlRmlsdGVyIH0gZnJvbSAnLi9tYXQtdGFibGUtZmlsdGVyLmVudW0nO1xyXG5pbXBvcnQgeyBNYXRUYWJsZUZpbHRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21hdC10YWJsZS1maWx0ZXIuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttYXRUYWJsZUZpbHRlcl0nLFxyXG4gIGV4cG9ydEFzOiAnbWF0VGFibGVGaWx0ZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUZpbHRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIERvQ2hlY2sge1xyXG4gIHByaXZhdGUgX29sZEV4YW1wbGVFbnRpdHk6IGFueTtcclxuXHJcbiAgQElucHV0KCkgZXhhbXBsZUVudGl0eTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBpbiBtaWxsaXNcclxuICAgKi9cclxuICBASW5wdXQoKSBkZWJvdW5jZVRpbWUgPSA0MDA7XHJcbiAgQElucHV0KCkgZmlsdGVyVHlwZTogTWF0VGFibGVGaWx0ZXIgPSBNYXRUYWJsZUZpbHRlci5BTllXSEVSRTtcclxuICBASW5wdXQoKSBjYXNlU2Vuc2l0aXZlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY3VzdG9tUHJlZGljYXRlOiAoZGF0YTogYW55KSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHByb3BlcnR5T3B0aW9uczogUHJvcGVydHlPcHRpb25zO1xyXG4gIHByaXZhdGUgX2V4YW1wbGVFbnRpdHlTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8dm9pZD47XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2ZpbHRlclNlcnZpY2U6IE1hdFRhYmxlRmlsdGVyU2VydmljZSxcclxuICAgIEBIb3N0KCkgQFNlbGYoKSBAT3B0aW9uYWwoKSBwcml2YXRlIF90YWJsZTogTWF0VGFibGU8YW55PlxyXG4gICkge1xyXG4gICAgdGhpcy5pbml0RGVib3VuY2VTdWJqZWN0KCk7XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZmlsdGVyU2VydmljZS5pc0NoYW5nZWQodGhpcy5fb2xkRXhhbXBsZUVudGl0eSwgdGhpcy5leGFtcGxlRW50aXR5KSkge1xyXG4gICAgICB0aGlzLl9vbGRFeGFtcGxlRW50aXR5ID0gdGhpcy5fZmlsdGVyU2VydmljZS50b1BsYWluSnNvbih0aGlzLmV4YW1wbGVFbnRpdHkpO1xyXG4gICAgICB0aGlzLl9leGFtcGxlRW50aXR5U3ViamVjdC5uZXh0KHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBpbml0RGVib3VuY2VTdWJqZWN0KCkge1xyXG4gICAgdGhpcy5fZXhhbXBsZUVudGl0eVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHZvaWQ+KG51bGwpO1xyXG4gICAgdGhpcy5fZXhhbXBsZUVudGl0eVN1YmplY3QucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2VUaW1lKSlcclxuICAgICAgLnN1YnNjcmliZShfID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlclByZWRpY2F0ZSgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlRmlsdGVyUHJlZGljYXRlKCkge1xyXG4gICAgY29uc3QgbWF0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0TWF0RGF0YVNvdXJjZSgpO1xyXG4gICAgaWYgKG1hdERhdGFTb3VyY2UpIHtcclxuICAgICAgbWF0RGF0YVNvdXJjZS5maWx0ZXJQcmVkaWNhdGUgPSB0aGlzLmdldEZpbHRlclByZWRpY2F0ZSgpO1xyXG4gICAgICBtYXREYXRhU291cmNlLmZpbHRlciA9IHRoaXMuZXhhbXBsZUVudGl0eSBhcyBhbnk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpbHRlclByZWRpY2F0ZSgpIHtcclxuICAgIGlmICh0aGlzLmN1c3RvbVByZWRpY2F0ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jdXN0b21QcmVkaWNhdGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKGl0ZW06IGFueSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJTZXJ2aWNlLmZpbHRlclByZWRpY2F0ZSh7IGV4YW1wbGU6IHRoaXMuZXhhbXBsZUVudGl0eSwgaXRlbSB9LCB0aGlzLnByb3BlcnR5T3B0aW9ucyxcclxuICAgICAgICAgIHsgZmlsdGVyVHlwZTogdGhpcy5maWx0ZXJUeXBlLCBjYXNlU2Vuc2l0aXZlOiB0aGlzLmNhc2VTZW5zaXRpdmUgfSk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE1hdERhdGFTb3VyY2UoKTogTWF0VGFibGVEYXRhU291cmNlPGFueT4ge1xyXG4gICAgY29uc3QgbWF0VGFibGUgPSB0aGlzLl90YWJsZSBhcyBNYXRUYWJsZTxhbnk+O1xyXG4gICAgcmV0dXJuIChtYXRUYWJsZS5kYXRhU291cmNlIGFzIE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==