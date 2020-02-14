import { Directive, Input, ViewContainerRef, Host, Self, Optional } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatTableFilter } from './mat-table-filter.enum';
import { MatTableFilterService } from './services/mat-table-filter.service';
import * as i0 from "@angular/core";
import * as i1 from "./services/mat-table-filter.service";
import * as i2 from "@angular/material/table";
export class MatTableFilterDirective {
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
    ngDoCheck() {
        if (this._filterService.isChanged(this._oldExampleEntity, this.exampleEntity)) {
            this._oldExampleEntity = this._filterService.toPlainJson(this.exampleEntity);
            this._exampleEntitySubject.next(undefined);
        }
    }
    initCdkTable() {
        var _a, _b;
        // tslint:disable-next-line:no-string-literal
        const table = (_b = (_a = this._viewContainerRef['_data']) === null || _a === void 0 ? void 0 : _a.componentView) === null || _b === void 0 ? void 0 : _b.component;
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
MatTableFilterDirective.ɵfac = function MatTableFilterDirective_Factory(t) { return new (t || MatTableFilterDirective)(i0.ɵɵdirectiveInject(i1.MatTableFilterService), i0.ɵɵdirectiveInject(i2.MatTable, 11), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
MatTableFilterDirective.ɵdir = i0.ɵɵdefineDirective({ type: MatTableFilterDirective, selectors: [["", "matTableFilter", ""]], inputs: { exampleEntity: "exampleEntity", debounceTime: "debounceTime", filterType: "filterType", caseSensitive: "caseSensitive", customPredicate: "customPredicate", propertyOptions: "propertyOptions" }, exportAs: ["matTableFilter"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MatTableFilterDirective, [{
        type: Directive,
        args: [{
                selector: '[matTableFilter]',
                exportAs: 'matTableFilter'
            }]
    }], function () { return [{ type: i1.MatTableFilterService }, { type: i2.MatTable, decorators: [{
                type: Host
            }, {
                type: Self
            }, {
                type: Optional
            }] }, { type: i0.ViewContainerRef }]; }, { exampleEntity: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL21hdC10YWJsZS1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVcsS0FBSyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxRQUFRLEVBQXNCLE1BQU0seUJBQXlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7O0FBTTVFLE1BQU0sT0FBTyx1QkFBdUI7SUFpQmxDLFlBQ1UsY0FBcUMsRUFDVCxjQUE2QixFQUN6RCxpQkFBbUM7UUFGbkMsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ1QsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDekQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQVhwQyxpQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQixlQUFVLEdBQW1CLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFXN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzdFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFHTyxZQUFZOztRQUNsQiw2Q0FBNkM7UUFDN0MsTUFBTSxLQUFLLGVBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQywwQ0FBRSxhQUFhLDBDQUFFLFNBQVMsQ0FBQztRQUV4RSxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQztJQUVPLG1CQUFtQjtRQUN6QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxlQUFlLENBQU8sSUFBSSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FDN0IsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvQixTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDYixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxxQkFBcUI7UUFDM0IsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDOUMsSUFBSSxhQUFhLEVBQUU7WUFDakIsYUFBYSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxRCxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFvQixDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzdCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBUyxFQUFXLEVBQUU7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUNwRyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUN4RSxDQUFDLENBQUM7U0FDSDtJQUNILENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQXVCLENBQUM7UUFDOUMsT0FBUSxRQUFRLENBQUMsVUFBc0MsQ0FBQztJQUMxRCxDQUFDOzs4RkE5RVUsdUJBQXVCOzREQUF2Qix1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUpuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7c0JBb0JJLElBQUk7O3NCQUFJLElBQUk7O3NCQUFJLFFBQVE7O2tCQWhCMUIsS0FBSzs7a0JBTUwsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5T3B0aW9ucyB9IGZyb20gJy4vcHJvcGVydHktb3B0aW9ucyc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIERvQ2hlY2ssIElucHV0LCBWaWV3Q29udGFpbmVyUmVmLCBIb3N0LCBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0VGFibGUsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWF0VGFibGVGaWx0ZXIgfSBmcm9tICcuL21hdC10YWJsZS1maWx0ZXIuZW51bSc7XG5pbXBvcnQgeyBNYXRUYWJsZUZpbHRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21hdC10YWJsZS1maWx0ZXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXRUYWJsZUZpbHRlcl0nLFxuICBleHBvcnRBczogJ21hdFRhYmxlRmlsdGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUZpbHRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICBwcml2YXRlIF9vbGRFeGFtcGxlRW50aXR5OiBhbnk7XG5cbiAgQElucHV0KCkgZXhhbXBsZUVudGl0eTogYW55O1xuXG4gIC8qKlxuICAgKiBpbiBtaWxsaXNcbiAgICovXG4gIHByaXZhdGUgX3RhYmxlOiBhbnk7XG4gIEBJbnB1dCgpIGRlYm91bmNlVGltZSA9IDQwMDtcbiAgQElucHV0KCkgZmlsdGVyVHlwZTogTWF0VGFibGVGaWx0ZXIgPSBNYXRUYWJsZUZpbHRlci5BTllXSEVSRTtcbiAgQElucHV0KCkgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXN0b21QcmVkaWNhdGU6IChkYXRhOiBhbnkpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIHByb3BlcnR5T3B0aW9uczogUHJvcGVydHlPcHRpb25zO1xuICBwcml2YXRlIF9leGFtcGxlRW50aXR5U3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PHZvaWQ+O1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZmlsdGVyU2VydmljZTogTWF0VGFibGVGaWx0ZXJTZXJ2aWNlLFxuICAgIEBIb3N0KCkgQFNlbGYoKSBAT3B0aW9uYWwoKSBwcml2YXRlIF9pbmplY3RlZFRhYmxlOiBNYXRUYWJsZTxhbnk+LFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7XG4gICAgdGhpcy5pbml0Q2RrVGFibGUoKTtcbiAgICB0aGlzLmluaXREZWJvdW5jZVN1YmplY3QoKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZmlsdGVyU2VydmljZS5pc0NoYW5nZWQodGhpcy5fb2xkRXhhbXBsZUVudGl0eSwgdGhpcy5leGFtcGxlRW50aXR5KSkge1xuICAgICAgdGhpcy5fb2xkRXhhbXBsZUVudGl0eSA9IHRoaXMuX2ZpbHRlclNlcnZpY2UudG9QbGFpbkpzb24odGhpcy5leGFtcGxlRW50aXR5KTtcbiAgICAgIHRoaXMuX2V4YW1wbGVFbnRpdHlTdWJqZWN0Lm5leHQodW5kZWZpbmVkKTtcbiAgICB9XG4gIH1cblxuXG4gIHByaXZhdGUgaW5pdENka1RhYmxlKCkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbFxuICAgIGNvbnN0IHRhYmxlID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZlsnX2RhdGEnXT8uY29tcG9uZW50Vmlldz8uY29tcG9uZW50O1xuXG4gICAgaWYgKHRhYmxlKSB7XG4gICAgICB0aGlzLl90YWJsZSA9IHRhYmxlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5faW5qZWN0ZWRUYWJsZSkge1xuICAgICAgdGhpcy5fdGFibGUgPSB0aGlzLl9pbmplY3RlZFRhYmxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIEFuZ3VsYXIgdmVyc2lvbiEnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXREZWJvdW5jZVN1YmplY3QoKSB7XG4gICAgdGhpcy5fZXhhbXBsZUVudGl0eVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHZvaWQ+KG51bGwpO1xuICAgIHRoaXMuX2V4YW1wbGVFbnRpdHlTdWJqZWN0LnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZVRpbWUpKVxuICAgICAgLnN1YnNjcmliZShfID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJQcmVkaWNhdGUoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVGaWx0ZXJQcmVkaWNhdGUoKSB7XG4gICAgY29uc3QgbWF0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0TWF0RGF0YVNvdXJjZSgpO1xuICAgIGlmIChtYXREYXRhU291cmNlKSB7XG4gICAgICBtYXREYXRhU291cmNlLmZpbHRlclByZWRpY2F0ZSA9IHRoaXMuZ2V0RmlsdGVyUHJlZGljYXRlKCk7XG4gICAgICBtYXREYXRhU291cmNlLmZpbHRlciA9IHRoaXMuZXhhbXBsZUVudGl0eSBhcyBhbnk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaWx0ZXJQcmVkaWNhdGUoKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tUHJlZGljYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXN0b21QcmVkaWNhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoaXRlbTogYW55KTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJTZXJ2aWNlLmZpbHRlclByZWRpY2F0ZSh7IGV4YW1wbGU6IHRoaXMuZXhhbXBsZUVudGl0eSwgaXRlbSB9LCB0aGlzLnByb3BlcnR5T3B0aW9ucyxcbiAgICAgICAgICB7IGZpbHRlclR5cGU6IHRoaXMuZmlsdGVyVHlwZSwgY2FzZVNlbnNpdGl2ZTogdGhpcy5jYXNlU2Vuc2l0aXZlIH0pO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE1hdERhdGFTb3VyY2UoKTogTWF0VGFibGVEYXRhU291cmNlPGFueT4ge1xuICAgIGNvbnN0IG1hdFRhYmxlID0gdGhpcy5fdGFibGUgYXMgTWF0VGFibGU8YW55PjtcbiAgICByZXR1cm4gKG1hdFRhYmxlLmRhdGFTb3VyY2UgYXMgTWF0VGFibGVEYXRhU291cmNlPGFueT4pO1xuICB9XG5cbn1cbiJdfQ==