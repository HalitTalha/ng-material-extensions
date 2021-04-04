import { __decorate, __metadata, __param } from "tslib";
import { Directive, Input, Host, Self, Optional } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatTableFilter } from './mat-table-filter.enum';
import { MatTableFilterService } from './services/mat-table-filter.service';
var MatTableFilterDirective = /** @class */ (function () {
    function MatTableFilterDirective(_filterService, _table) {
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
    MatTableFilterDirective.prototype.ngDoCheck = function () {
        if (this._filterService.isChanged(this._oldExampleEntity, this.exampleEntity)) {
            this._oldExampleEntity = this._filterService.toPlainJson(this.exampleEntity);
            this._exampleEntitySubject.next(undefined);
        }
    };
    MatTableFilterDirective.prototype.initDebounceSubject = function () {
        var _this = this;
        this._exampleEntitySubject = new BehaviorSubject(null);
        this._exampleEntitySubject.pipe(debounceTime(this.debounceTime))
            .subscribe(function (_) {
            _this.updateFilterPredicate();
        });
    };
    MatTableFilterDirective.prototype.updateFilterPredicate = function () {
        var matDataSource = this.getMatDataSource();
        if (matDataSource) {
            matDataSource.filterPredicate = this.getFilterPredicate();
            matDataSource.filter = this.exampleEntity;
        }
    };
    MatTableFilterDirective.prototype.getFilterPredicate = function () {
        var _this = this;
        if (this.customPredicate) {
            return this.customPredicate;
        }
        else {
            return function (item) {
                return _this._filterService.filterPredicate({ example: _this.exampleEntity, item: item }, _this.propertyOptions, { filterType: _this.filterType, caseSensitive: _this.caseSensitive });
            };
        }
    };
    MatTableFilterDirective.prototype.getMatDataSource = function () {
        var matTable = this._table;
        return matTable.dataSource;
    };
    MatTableFilterDirective.ctorParameters = function () { return [
        { type: MatTableFilterService },
        { type: MatTable, decorators: [{ type: Host }, { type: Self }, { type: Optional }] }
    ]; };
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
    return MatTableFilterDirective;
}());
export { MatTableFilterDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL21hdC10YWJsZS1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFXLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBTTVFO0lBZ0JFLGlDQUNVLGNBQXFDLEVBQ1QsTUFBcUI7UUFEakQsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ1QsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQWIzRDs7V0FFRztRQUNNLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ25CLGVBQVUsR0FBbUIsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUNyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQVU3QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsMkNBQVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM3RSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBR08scURBQW1CLEdBQTNCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxlQUFlLENBQU8sSUFBSSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FDN0IsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvQixTQUFTLENBQUMsVUFBQSxDQUFDO1lBQ1YsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sdURBQXFCLEdBQTdCO1FBQ0UsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDOUMsSUFBSSxhQUFhLEVBQUU7WUFDakIsYUFBYSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxRCxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFvQixDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUVPLG9EQUFrQixHQUExQjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUM3QjthQUFNO1lBQ0wsT0FBTyxVQUFDLElBQVM7Z0JBQ2YsT0FBTyxLQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFJLENBQUMsYUFBYSxFQUFFLElBQUksTUFBQSxFQUFFLEVBQUUsS0FBSSxDQUFDLGVBQWUsRUFDcEcsRUFBRSxVQUFVLEVBQUUsS0FBSSxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDeEUsQ0FBQyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRU8sa0RBQWdCLEdBQXhCO1FBQ0UsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQXVCLENBQUM7UUFDOUMsT0FBUSxRQUFRLENBQUMsVUFBc0MsQ0FBQztJQUMxRCxDQUFDOztnQkE3Q3lCLHFCQUFxQjtnQkFDRCxRQUFRLHVCQUFuRCxJQUFJLFlBQUksSUFBSSxZQUFJLFFBQVE7O0lBZmxCO1FBQVIsS0FBSyxFQUFFOztrRUFBb0I7SUFLbkI7UUFBUixLQUFLLEVBQUU7O2lFQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTs7K0RBQXNEO0lBQ3JEO1FBQVIsS0FBSyxFQUFFOztrRUFBdUI7SUFDdEI7UUFBUixLQUFLLEVBQUU7O29FQUF5QztJQUN4QztRQUFSLEtBQUssRUFBRTs7b0VBQWtDO0lBWi9CLHVCQUF1QjtRQUpuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQztRQW1CRyxXQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsV0FBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7eUNBREgscUJBQXFCO1lBQ0QsUUFBUTtPQWxCM0MsdUJBQXVCLENBZ0VuQztJQUFELDhCQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0FoRVksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcGVydHlPcHRpb25zIH0gZnJvbSAnLi9wcm9wZXJ0eS1vcHRpb25zJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBEb0NoZWNrLCBJbnB1dCwgSG9zdCwgU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0VGFibGUsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTWF0VGFibGVGaWx0ZXIgfSBmcm9tICcuL21hdC10YWJsZS1maWx0ZXIuZW51bSc7XHJcbmltcG9ydCB7IE1hdFRhYmxlRmlsdGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21hdFRhYmxlRmlsdGVyXScsXHJcbiAgZXhwb3J0QXM6ICdtYXRUYWJsZUZpbHRlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRmlsdGVyRGlyZWN0aXZlIGltcGxlbWVudHMgRG9DaGVjayB7XHJcbiAgcHJpdmF0ZSBfb2xkRXhhbXBsZUVudGl0eTogYW55O1xyXG5cclxuICBASW5wdXQoKSBleGFtcGxlRW50aXR5OiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIGluIG1pbGxpc1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRlYm91bmNlVGltZSA9IDQwMDtcclxuICBASW5wdXQoKSBmaWx0ZXJUeXBlOiBNYXRUYWJsZUZpbHRlciA9IE1hdFRhYmxlRmlsdGVyLkFOWVdIRVJFO1xyXG4gIEBJbnB1dCgpIGNhc2VTZW5zaXRpdmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBjdXN0b21QcmVkaWNhdGU6IChkYXRhOiBhbnkpID0+IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcHJvcGVydHlPcHRpb25zOiBQcm9wZXJ0eU9wdGlvbnM7XHJcbiAgcHJpdmF0ZSBfZXhhbXBsZUVudGl0eVN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDx2b2lkPjtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZmlsdGVyU2VydmljZTogTWF0VGFibGVGaWx0ZXJTZXJ2aWNlLFxyXG4gICAgQEhvc3QoKSBAU2VsZigpIEBPcHRpb25hbCgpIHByaXZhdGUgX3RhYmxlOiBNYXRUYWJsZTxhbnk+XHJcbiAgKSB7XHJcbiAgICB0aGlzLmluaXREZWJvdW5jZVN1YmplY3QoKTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9maWx0ZXJTZXJ2aWNlLmlzQ2hhbmdlZCh0aGlzLl9vbGRFeGFtcGxlRW50aXR5LCB0aGlzLmV4YW1wbGVFbnRpdHkpKSB7XHJcbiAgICAgIHRoaXMuX29sZEV4YW1wbGVFbnRpdHkgPSB0aGlzLl9maWx0ZXJTZXJ2aWNlLnRvUGxhaW5Kc29uKHRoaXMuZXhhbXBsZUVudGl0eSk7XHJcbiAgICAgIHRoaXMuX2V4YW1wbGVFbnRpdHlTdWJqZWN0Lm5leHQodW5kZWZpbmVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGluaXREZWJvdW5jZVN1YmplY3QoKSB7XHJcbiAgICB0aGlzLl9leGFtcGxlRW50aXR5U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8dm9pZD4obnVsbCk7XHJcbiAgICB0aGlzLl9leGFtcGxlRW50aXR5U3ViamVjdC5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZVRpbWUpKVxyXG4gICAgICAuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlRmlsdGVyUHJlZGljYXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVGaWx0ZXJQcmVkaWNhdGUoKSB7XHJcbiAgICBjb25zdCBtYXREYXRhU291cmNlID0gdGhpcy5nZXRNYXREYXRhU291cmNlKCk7XHJcbiAgICBpZiAobWF0RGF0YVNvdXJjZSkge1xyXG4gICAgICBtYXREYXRhU291cmNlLmZpbHRlclByZWRpY2F0ZSA9IHRoaXMuZ2V0RmlsdGVyUHJlZGljYXRlKCk7XHJcbiAgICAgIG1hdERhdGFTb3VyY2UuZmlsdGVyID0gdGhpcy5leGFtcGxlRW50aXR5IGFzIGFueTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RmlsdGVyUHJlZGljYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tUHJlZGljYXRlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmN1c3RvbVByZWRpY2F0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoaXRlbTogYW55KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlclNlcnZpY2UuZmlsdGVyUHJlZGljYXRlKHsgZXhhbXBsZTogdGhpcy5leGFtcGxlRW50aXR5LCBpdGVtIH0sIHRoaXMucHJvcGVydHlPcHRpb25zLFxyXG4gICAgICAgICAgeyBmaWx0ZXJUeXBlOiB0aGlzLmZpbHRlclR5cGUsIGNhc2VTZW5zaXRpdmU6IHRoaXMuY2FzZVNlbnNpdGl2ZSB9KTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TWF0RGF0YVNvdXJjZSgpOiBNYXRUYWJsZURhdGFTb3VyY2U8YW55PiB7XHJcbiAgICBjb25zdCBtYXRUYWJsZSA9IHRoaXMuX3RhYmxlIGFzIE1hdFRhYmxlPGFueT47XHJcbiAgICByZXR1cm4gKG1hdFRhYmxlLmRhdGFTb3VyY2UgYXMgTWF0VGFibGVEYXRhU291cmNlPGFueT4pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19