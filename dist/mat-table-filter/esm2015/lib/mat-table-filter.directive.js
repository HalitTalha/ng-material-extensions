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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL21hdC10YWJsZS1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFXLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBTTVFLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBZ0JsQyxZQUNVLGNBQXFDLEVBQ1QsTUFBcUI7UUFEakQsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ1QsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQWIzRDs7V0FFRztRQUNNLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ25CLGVBQVUsR0FBbUIsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUNyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQVU3QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM3RSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBR08sbUJBQW1CO1FBQ3pCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLGVBQWUsQ0FBTyxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUM3QixZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNiLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLHFCQUFxQjtRQUMzQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM5QyxJQUFJLGFBQWEsRUFBRTtZQUNqQixhQUFhLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFELGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQW9CLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDN0I7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFTLEVBQVcsRUFBRTtnQkFDNUIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQ3BHLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQ3hFLENBQUMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBdUIsQ0FBQztRQUM5QyxPQUFRLFFBQVEsQ0FBQyxVQUFzQyxDQUFDO0lBQzFELENBQUM7Q0FFRixDQUFBOztZQS9DMkIscUJBQXFCO1lBQ0QsUUFBUSx1QkFBbkQsSUFBSSxZQUFJLElBQUksWUFBSSxRQUFROztBQWZsQjtJQUFSLEtBQUssRUFBRTs7OERBQW9CO0FBS25CO0lBQVIsS0FBSyxFQUFFOzs2REFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7OzJEQUFzRDtBQUNyRDtJQUFSLEtBQUssRUFBRTs7OERBQXVCO0FBQ3RCO0lBQVIsS0FBSyxFQUFFOztnRUFBeUM7QUFDeEM7SUFBUixLQUFLLEVBQUU7O2dFQUFrQztBQVovQix1QkFBdUI7SUFKbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUUsZ0JBQWdCO0tBQzNCLENBQUM7SUFtQkcsV0FBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLFdBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBO3FDQURILHFCQUFxQjtRQUNELFFBQVE7R0FsQjNDLHVCQUF1QixDQWdFbkM7U0FoRVksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcGVydHlPcHRpb25zIH0gZnJvbSAnLi9wcm9wZXJ0eS1vcHRpb25zJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBEb0NoZWNrLCBJbnB1dCwgSG9zdCwgU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0VGFibGUsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTWF0VGFibGVGaWx0ZXIgfSBmcm9tICcuL21hdC10YWJsZS1maWx0ZXIuZW51bSc7XHJcbmltcG9ydCB7IE1hdFRhYmxlRmlsdGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21hdFRhYmxlRmlsdGVyXScsXHJcbiAgZXhwb3J0QXM6ICdtYXRUYWJsZUZpbHRlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRmlsdGVyRGlyZWN0aXZlIGltcGxlbWVudHMgRG9DaGVjayB7XHJcbiAgcHJpdmF0ZSBfb2xkRXhhbXBsZUVudGl0eTogYW55O1xyXG5cclxuICBASW5wdXQoKSBleGFtcGxlRW50aXR5OiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIGluIG1pbGxpc1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRlYm91bmNlVGltZSA9IDQwMDtcclxuICBASW5wdXQoKSBmaWx0ZXJUeXBlOiBNYXRUYWJsZUZpbHRlciA9IE1hdFRhYmxlRmlsdGVyLkFOWVdIRVJFO1xyXG4gIEBJbnB1dCgpIGNhc2VTZW5zaXRpdmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBjdXN0b21QcmVkaWNhdGU6IChkYXRhOiBhbnkpID0+IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcHJvcGVydHlPcHRpb25zOiBQcm9wZXJ0eU9wdGlvbnM7XHJcbiAgcHJpdmF0ZSBfZXhhbXBsZUVudGl0eVN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDx2b2lkPjtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZmlsdGVyU2VydmljZTogTWF0VGFibGVGaWx0ZXJTZXJ2aWNlLFxyXG4gICAgQEhvc3QoKSBAU2VsZigpIEBPcHRpb25hbCgpIHByaXZhdGUgX3RhYmxlOiBNYXRUYWJsZTxhbnk+XHJcbiAgKSB7XHJcbiAgICB0aGlzLmluaXREZWJvdW5jZVN1YmplY3QoKTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9maWx0ZXJTZXJ2aWNlLmlzQ2hhbmdlZCh0aGlzLl9vbGRFeGFtcGxlRW50aXR5LCB0aGlzLmV4YW1wbGVFbnRpdHkpKSB7XHJcbiAgICAgIHRoaXMuX29sZEV4YW1wbGVFbnRpdHkgPSB0aGlzLl9maWx0ZXJTZXJ2aWNlLnRvUGxhaW5Kc29uKHRoaXMuZXhhbXBsZUVudGl0eSk7XHJcbiAgICAgIHRoaXMuX2V4YW1wbGVFbnRpdHlTdWJqZWN0Lm5leHQodW5kZWZpbmVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGluaXREZWJvdW5jZVN1YmplY3QoKSB7XHJcbiAgICB0aGlzLl9leGFtcGxlRW50aXR5U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8dm9pZD4obnVsbCk7XHJcbiAgICB0aGlzLl9leGFtcGxlRW50aXR5U3ViamVjdC5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZVRpbWUpKVxyXG4gICAgICAuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlRmlsdGVyUHJlZGljYXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVGaWx0ZXJQcmVkaWNhdGUoKSB7XHJcbiAgICBjb25zdCBtYXREYXRhU291cmNlID0gdGhpcy5nZXRNYXREYXRhU291cmNlKCk7XHJcbiAgICBpZiAobWF0RGF0YVNvdXJjZSkge1xyXG4gICAgICBtYXREYXRhU291cmNlLmZpbHRlclByZWRpY2F0ZSA9IHRoaXMuZ2V0RmlsdGVyUHJlZGljYXRlKCk7XHJcbiAgICAgIG1hdERhdGFTb3VyY2UuZmlsdGVyID0gdGhpcy5leGFtcGxlRW50aXR5IGFzIGFueTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RmlsdGVyUHJlZGljYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tUHJlZGljYXRlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmN1c3RvbVByZWRpY2F0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoaXRlbTogYW55KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlclNlcnZpY2UuZmlsdGVyUHJlZGljYXRlKHsgZXhhbXBsZTogdGhpcy5leGFtcGxlRW50aXR5LCBpdGVtIH0sIHRoaXMucHJvcGVydHlPcHRpb25zLFxyXG4gICAgICAgICAgeyBmaWx0ZXJUeXBlOiB0aGlzLmZpbHRlclR5cGUsIGNhc2VTZW5zaXRpdmU6IHRoaXMuY2FzZVNlbnNpdGl2ZSB9KTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TWF0RGF0YVNvdXJjZSgpOiBNYXRUYWJsZURhdGFTb3VyY2U8YW55PiB7XHJcbiAgICBjb25zdCBtYXRUYWJsZSA9IHRoaXMuX3RhYmxlIGFzIE1hdFRhYmxlPGFueT47XHJcbiAgICByZXR1cm4gKG1hdFRhYmxlLmRhdGFTb3VyY2UgYXMgTWF0VGFibGVEYXRhU291cmNlPGFueT4pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19