import { Directive, Input, Host, Self, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatTableFilter } from './mat-table-filter.enum';
import * as i0 from "@angular/core";
import * as i1 from "./services/mat-table-filter.service";
import * as i2 from "@angular/material/table";
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
        this._exampleEntitySubject = new BehaviorSubject(undefined);
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
MatTableFilterDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: MatTableFilterDirective, deps: [{ token: i1.MatTableFilterService }, { token: i2.MatTable, host: true, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Directive });
MatTableFilterDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.3", type: MatTableFilterDirective, selector: "[matTableFilter]", inputs: { exampleEntity: "exampleEntity", debounceTime: "debounceTime", filterType: "filterType", caseSensitive: "caseSensitive", customPredicate: "customPredicate", propertyOptions: "propertyOptions" }, exportAs: ["matTableFilter"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: MatTableFilterDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[matTableFilter]',
                    exportAs: 'matTableFilter'
                }]
        }], ctorParameters: function () { return [{ type: i1.MatTableFilterService }, { type: i2.MatTable, decorators: [{
                    type: Host
                }, {
                    type: Self
                }, {
                    type: Optional
                }] }]; }, propDecorators: { exampleEntity: [{
                type: Input
            }], debounceTime: [{
                type: Input
            }], filterType: [{
                type: Input
            }], caseSensitive: [{
                type: Input
            }], customPredicate: [{
                type: Input
            }], propertyOptions: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXQtdGFibGUtZmlsdGVyL3NyYy9saWIvbWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBT3pELE1BQU0sT0FBTyx1QkFBdUI7SUFnQmxDLFlBQ1UsY0FBcUMsRUFDVCxNQUFxQjtRQURqRCxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDVCxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBYjNEOztXQUVHO1FBQ00saUJBQVksR0FBRyxHQUFHLENBQUM7UUFDbkIsZUFBVSxHQUFtQixjQUFjLENBQUMsUUFBUSxDQUFDO1FBQ3JELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBVTdCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzdFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFHTyxtQkFBbUI7UUFDekIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksZUFBZSxDQUFPLFNBQVMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQzdCLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDL0IsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8scUJBQXFCO1FBQzNCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzlDLElBQUksYUFBYSxFQUFFO1lBQ2pCLGFBQWEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUQsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBb0IsQ0FBQztTQUNsRDtJQUNILENBQUM7SUFFTyxrQkFBa0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUM3QjthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQVMsRUFBVyxFQUFFO2dCQUM1QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFDcEcsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDeEUsQ0FBQyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUF1QixDQUFDO1FBQzlDLE9BQVEsUUFBUSxDQUFDLFVBQXNDLENBQUM7SUFDMUQsQ0FBQzs7b0hBOURVLHVCQUF1Qjt3R0FBdkIsdUJBQXVCOzJGQUF2Qix1QkFBdUI7a0JBSm5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7OzBCQW1CSSxJQUFJOzswQkFBSSxJQUFJOzswQkFBSSxRQUFROzRDQWZsQixhQUFhO3NCQUFyQixLQUFLO2dCQUtHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5T3B0aW9ucyB9IGZyb20gJy4vcHJvcGVydHktb3B0aW9ucyc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIERvQ2hlY2ssIElucHV0LCBIb3N0LCBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0VGFibGUsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWF0VGFibGVGaWx0ZXIgfSBmcm9tICcuL21hdC10YWJsZS1maWx0ZXIuZW51bSc7XG5pbXBvcnQgeyBNYXRUYWJsZUZpbHRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21hdC10YWJsZS1maWx0ZXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXRUYWJsZUZpbHRlcl0nLFxuICBleHBvcnRBczogJ21hdFRhYmxlRmlsdGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUZpbHRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICBwcml2YXRlIF9vbGRFeGFtcGxlRW50aXR5OiBhbnk7XG5cbiAgQElucHV0KCkgZXhhbXBsZUVudGl0eTogYW55O1xuXG4gIC8qKlxuICAgKiBpbiBtaWxsaXNcbiAgICovXG4gIEBJbnB1dCgpIGRlYm91bmNlVGltZSA9IDQwMDtcbiAgQElucHV0KCkgZmlsdGVyVHlwZTogTWF0VGFibGVGaWx0ZXIgPSBNYXRUYWJsZUZpbHRlci5BTllXSEVSRTtcbiAgQElucHV0KCkgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXN0b21QcmVkaWNhdGU6IChkYXRhOiBhbnkpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIHByb3BlcnR5T3B0aW9uczogUHJvcGVydHlPcHRpb25zO1xuICBwcml2YXRlIF9leGFtcGxlRW50aXR5U3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PHZvaWQ+O1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZmlsdGVyU2VydmljZTogTWF0VGFibGVGaWx0ZXJTZXJ2aWNlLFxuICAgIEBIb3N0KCkgQFNlbGYoKSBAT3B0aW9uYWwoKSBwcml2YXRlIF90YWJsZTogTWF0VGFibGU8YW55PlxuICApIHtcbiAgICB0aGlzLmluaXREZWJvdW5jZVN1YmplY3QoKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZmlsdGVyU2VydmljZS5pc0NoYW5nZWQodGhpcy5fb2xkRXhhbXBsZUVudGl0eSwgdGhpcy5leGFtcGxlRW50aXR5KSkge1xuICAgICAgdGhpcy5fb2xkRXhhbXBsZUVudGl0eSA9IHRoaXMuX2ZpbHRlclNlcnZpY2UudG9QbGFpbkpzb24odGhpcy5leGFtcGxlRW50aXR5KTtcbiAgICAgIHRoaXMuX2V4YW1wbGVFbnRpdHlTdWJqZWN0Lm5leHQodW5kZWZpbmVkKTtcbiAgICB9XG4gIH1cblxuXG4gIHByaXZhdGUgaW5pdERlYm91bmNlU3ViamVjdCgpIHtcbiAgICB0aGlzLl9leGFtcGxlRW50aXR5U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8dm9pZD4odW5kZWZpbmVkKTtcbiAgICB0aGlzLl9leGFtcGxlRW50aXR5U3ViamVjdC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2VUaW1lKSlcbiAgICAgIC5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsdGVyUHJlZGljYXRlKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRmlsdGVyUHJlZGljYXRlKCkge1xuICAgIGNvbnN0IG1hdERhdGFTb3VyY2UgPSB0aGlzLmdldE1hdERhdGFTb3VyY2UoKTtcbiAgICBpZiAobWF0RGF0YVNvdXJjZSkge1xuICAgICAgbWF0RGF0YVNvdXJjZS5maWx0ZXJQcmVkaWNhdGUgPSB0aGlzLmdldEZpbHRlclByZWRpY2F0ZSgpO1xuICAgICAgbWF0RGF0YVNvdXJjZS5maWx0ZXIgPSB0aGlzLmV4YW1wbGVFbnRpdHkgYXMgYW55O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmlsdGVyUHJlZGljYXRlKCkge1xuICAgIGlmICh0aGlzLmN1c3RvbVByZWRpY2F0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tUHJlZGljYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKGl0ZW06IGFueSk6IGJvb2xlYW4gPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyU2VydmljZS5maWx0ZXJQcmVkaWNhdGUoeyBleGFtcGxlOiB0aGlzLmV4YW1wbGVFbnRpdHksIGl0ZW0gfSwgdGhpcy5wcm9wZXJ0eU9wdGlvbnMsXG4gICAgICAgICAgeyBmaWx0ZXJUeXBlOiB0aGlzLmZpbHRlclR5cGUsIGNhc2VTZW5zaXRpdmU6IHRoaXMuY2FzZVNlbnNpdGl2ZSB9KTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXREYXRhU291cmNlKCk6IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+IHtcbiAgICBjb25zdCBtYXRUYWJsZSA9IHRoaXMuX3RhYmxlIGFzIE1hdFRhYmxlPGFueT47XG4gICAgcmV0dXJuIChtYXRUYWJsZS5kYXRhU291cmNlIGFzIE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KTtcbiAgfVxuXG59XG4iXX0=