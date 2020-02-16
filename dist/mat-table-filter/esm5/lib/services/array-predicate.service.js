import { __decorate, __extends, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { FilterPredicate } from './filter-predicate';
import * as LODASH from 'lodash';
import * as i0 from "@angular/core";
var ArrayPredicateService = /** @class */ (function (_super) {
    __extends(ArrayPredicateService, _super);
    function ArrayPredicateService() {
        return _super.call(this) || this;
    }
    ArrayPredicateService_1 = ArrayPredicateService;
    ArrayPredicateService.warn = function () {
        console.warn(ArrayPredicateService_1.UNSUPPORTED_OPERATION_WARNING);
        console.warn(ArrayPredicateService_1.SUGGESTION_WARNING);
    };
    ArrayPredicateService.prototype.equals = function (itemPair) {
        return LODASH.isEqual(itemPair.example.sort(), itemPair.item.sort());
    };
    ArrayPredicateService.prototype.anywhere = function (itemPair) {
        return this.isSubset(itemPair.example, itemPair.item);
    };
    ArrayPredicateService.prototype.startsWith = function (itemPair) {
        ArrayPredicateService_1.warn();
        return this.anywhere(itemPair);
    };
    ArrayPredicateService.prototype.endsWith = function (itemPair) {
        ArrayPredicateService_1.warn();
        return this.anywhere(itemPair);
    };
    ArrayPredicateService.prototype.isSubset = function (example, item) {
        return !LODASH.difference(LODASH.flatten(example), LODASH.flatten(item)).length;
    };
    var ArrayPredicateService_1;
    // tslint:disable-next-line:max-line-length
    ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING = 'This filterType is unsupported for array filtering. FilterType.ANYWHERE is executed instead!';
    ArrayPredicateService.SUGGESTION_WARNING = 'You can set a custom predicate for the array property through PropertyOptions!';
    ArrayPredicateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ArrayPredicateService_Factory() { return new ArrayPredicateService(); }, token: ArrayPredicateService, providedIn: "root" });
    ArrayPredicateService = ArrayPredicateService_1 = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ArrayPredicateService);
    return ArrayPredicateService;
}(FilterPredicate));
export { ArrayPredicateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktcHJlZGljYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FycmF5LXByZWRpY2F0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7QUFNakM7SUFBMkMseUNBQTJCO0lBS3BFO2VBQ0UsaUJBQU87SUFDVCxDQUFDOzhCQVBVLHFCQUFxQjtJQVNqQiwwQkFBSSxHQUFuQjtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXFCLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUFxQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLHNDQUFNLEdBQWIsVUFBYyxRQUE4QjtRQUMxQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNNLHdDQUFRLEdBQWYsVUFBZ0IsUUFBOEI7UUFDNUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDTSwwQ0FBVSxHQUFqQixVQUFrQixRQUE4QjtRQUM5Qyx1QkFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNNLHdDQUFRLEdBQWYsVUFBZ0IsUUFBOEI7UUFDNUMsdUJBQXFCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTyx3Q0FBUSxHQUFoQixVQUFpQixPQUFtQixFQUFFLElBQWdCO1FBQ3BELE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNsRixDQUFDOztJQTdCRCwyQ0FBMkM7SUFDbkIsbURBQTZCLEdBQUcsOEZBQThGLENBQUM7SUFDL0gsd0NBQWtCLEdBQUcsZ0ZBQWdGLENBQUM7O0lBSm5ILHFCQUFxQjtRQUhqQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDOztPQUNXLHFCQUFxQixDQWlDakM7Z0NBekNEO0NBeUNDLEFBakNELENBQTJDLGVBQWUsR0FpQ3pEO1NBakNZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlclByZWRpY2F0ZSB9IGZyb20gJy4vZmlsdGVyLXByZWRpY2F0ZSc7XG5pbXBvcnQgKiBhcyBMT0RBU0ggZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEl0ZW1QYWlyIH0gZnJvbSAnLi4vaXRlbS1wYWlyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlQcmVkaWNhdGVTZXJ2aWNlIGV4dGVuZHMgRmlsdGVyUHJlZGljYXRlPEFycmF5PGFueT4+IHtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFVOU1VQUE9SVEVEX09QRVJBVElPTl9XQVJOSU5HID0gJ1RoaXMgZmlsdGVyVHlwZSBpcyB1bnN1cHBvcnRlZCBmb3IgYXJyYXkgZmlsdGVyaW5nLiBGaWx0ZXJUeXBlLkFOWVdIRVJFIGlzIGV4ZWN1dGVkIGluc3RlYWQhJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU1VHR0VTVElPTl9XQVJOSU5HID0gJ1lvdSBjYW4gc2V0IGEgY3VzdG9tIHByZWRpY2F0ZSBmb3IgdGhlIGFycmF5IHByb3BlcnR5IHRocm91Z2ggUHJvcGVydHlPcHRpb25zISc7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyB3YXJuKCkge1xuICAgIGNvbnNvbGUud2FybihBcnJheVByZWRpY2F0ZVNlcnZpY2UuVU5TVVBQT1JURURfT1BFUkFUSU9OX1dBUk5JTkcpO1xuICAgIGNvbnNvbGUud2FybihBcnJheVByZWRpY2F0ZVNlcnZpY2UuU1VHR0VTVElPTl9XQVJOSU5HKTtcbiAgfVxuXG4gIHB1YmxpYyBlcXVhbHMoaXRlbVBhaXI6IEl0ZW1QYWlyPEFycmF5PGFueT4+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIExPREFTSC5pc0VxdWFsKGl0ZW1QYWlyLmV4YW1wbGUuc29ydCgpLCBpdGVtUGFpci5pdGVtLnNvcnQoKSk7XG4gIH1cbiAgcHVibGljIGFueXdoZXJlKGl0ZW1QYWlyOiBJdGVtUGFpcjxBcnJheTxhbnk+Pik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzU3Vic2V0KGl0ZW1QYWlyLmV4YW1wbGUsIGl0ZW1QYWlyLml0ZW0pO1xuICB9XG4gIHB1YmxpYyBzdGFydHNXaXRoKGl0ZW1QYWlyOiBJdGVtUGFpcjxBcnJheTxhbnk+Pik6IGJvb2xlYW4ge1xuICAgIEFycmF5UHJlZGljYXRlU2VydmljZS53YXJuKCk7XG4gICAgcmV0dXJuIHRoaXMuYW55d2hlcmUoaXRlbVBhaXIpO1xuICB9XG4gIHB1YmxpYyBlbmRzV2l0aChpdGVtUGFpcjogSXRlbVBhaXI8QXJyYXk8YW55Pj4pOiBib29sZWFuIHtcbiAgICBBcnJheVByZWRpY2F0ZVNlcnZpY2Uud2FybigpO1xuICAgIHJldHVybiB0aGlzLmFueXdoZXJlKGl0ZW1QYWlyKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNTdWJzZXQoZXhhbXBsZTogQXJyYXk8YW55PiwgaXRlbTogQXJyYXk8YW55Pik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhTE9EQVNILmRpZmZlcmVuY2UoTE9EQVNILmZsYXR0ZW4oZXhhbXBsZSksIExPREFTSC5mbGF0dGVuKGl0ZW0pKS5sZW5ndGg7XG4gIH1cblxufVxuIl19