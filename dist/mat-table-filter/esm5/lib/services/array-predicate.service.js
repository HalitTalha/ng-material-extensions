import { __decorate, __extends, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { FilterPredicate } from './filter-predicate';
import * as LODASH from 'lodash-es';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktcHJlZGljYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FycmF5LXByZWRpY2F0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEtBQUssTUFBTSxNQUFNLFdBQVcsQ0FBQzs7QUFNcEM7SUFBMkMseUNBQTJCO0lBS3BFO2VBQ0UsaUJBQU87SUFDVCxDQUFDOzhCQVBVLHFCQUFxQjtJQVNqQiwwQkFBSSxHQUFuQjtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXFCLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUFxQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLHNDQUFNLEdBQWIsVUFBYyxRQUE4QjtRQUMxQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNNLHdDQUFRLEdBQWYsVUFBZ0IsUUFBOEI7UUFDNUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDTSwwQ0FBVSxHQUFqQixVQUFrQixRQUE4QjtRQUM5Qyx1QkFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNNLHdDQUFRLEdBQWYsVUFBZ0IsUUFBOEI7UUFDNUMsdUJBQXFCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTyx3Q0FBUSxHQUFoQixVQUFpQixPQUFtQixFQUFFLElBQWdCO1FBQ3BELE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNsRixDQUFDOztJQTdCRCwyQ0FBMkM7SUFDbkIsbURBQTZCLEdBQUcsOEZBQThGLENBQUM7SUFDL0gsd0NBQWtCLEdBQUcsZ0ZBQWdGLENBQUM7O0lBSm5ILHFCQUFxQjtRQUhqQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDOztPQUNXLHFCQUFxQixDQWlDakM7Z0NBekNEO0NBeUNDLEFBakNELENBQTJDLGVBQWUsR0FpQ3pEO1NBakNZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsdGVyUHJlZGljYXRlIH0gZnJvbSAnLi9maWx0ZXItcHJlZGljYXRlJztcclxuaW1wb3J0ICogYXMgTE9EQVNIIGZyb20gJ2xvZGFzaC1lcyc7XHJcbmltcG9ydCB7IEl0ZW1QYWlyIH0gZnJvbSAnLi4vaXRlbS1wYWlyJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFycmF5UHJlZGljYXRlU2VydmljZSBleHRlbmRzIEZpbHRlclByZWRpY2F0ZTxBcnJheTxhbnk+PiB7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBVTlNVUFBPUlRFRF9PUEVSQVRJT05fV0FSTklORyA9ICdUaGlzIGZpbHRlclR5cGUgaXMgdW5zdXBwb3J0ZWQgZm9yIGFycmF5IGZpbHRlcmluZy4gRmlsdGVyVHlwZS5BTllXSEVSRSBpcyBleGVjdXRlZCBpbnN0ZWFkISc7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU1VHR0VTVElPTl9XQVJOSU5HID0gJ1lvdSBjYW4gc2V0IGEgY3VzdG9tIHByZWRpY2F0ZSBmb3IgdGhlIGFycmF5IHByb3BlcnR5IHRocm91Z2ggUHJvcGVydHlPcHRpb25zISc7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgd2FybigpIHtcclxuICAgIGNvbnNvbGUud2FybihBcnJheVByZWRpY2F0ZVNlcnZpY2UuVU5TVVBQT1JURURfT1BFUkFUSU9OX1dBUk5JTkcpO1xyXG4gICAgY29uc29sZS53YXJuKEFycmF5UHJlZGljYXRlU2VydmljZS5TVUdHRVNUSU9OX1dBUk5JTkcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVxdWFscyhpdGVtUGFpcjogSXRlbVBhaXI8QXJyYXk8YW55Pj4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBMT0RBU0guaXNFcXVhbChpdGVtUGFpci5leGFtcGxlLnNvcnQoKSwgaXRlbVBhaXIuaXRlbS5zb3J0KCkpO1xyXG4gIH1cclxuICBwdWJsaWMgYW55d2hlcmUoaXRlbVBhaXI6IEl0ZW1QYWlyPEFycmF5PGFueT4+KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1N1YnNldChpdGVtUGFpci5leGFtcGxlLCBpdGVtUGFpci5pdGVtKTtcclxuICB9XHJcbiAgcHVibGljIHN0YXJ0c1dpdGgoaXRlbVBhaXI6IEl0ZW1QYWlyPEFycmF5PGFueT4+KTogYm9vbGVhbiB7XHJcbiAgICBBcnJheVByZWRpY2F0ZVNlcnZpY2Uud2FybigpO1xyXG4gICAgcmV0dXJuIHRoaXMuYW55d2hlcmUoaXRlbVBhaXIpO1xyXG4gIH1cclxuICBwdWJsaWMgZW5kc1dpdGgoaXRlbVBhaXI6IEl0ZW1QYWlyPEFycmF5PGFueT4+KTogYm9vbGVhbiB7XHJcbiAgICBBcnJheVByZWRpY2F0ZVNlcnZpY2Uud2FybigpO1xyXG4gICAgcmV0dXJuIHRoaXMuYW55d2hlcmUoaXRlbVBhaXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1N1YnNldChleGFtcGxlOiBBcnJheTxhbnk+LCBpdGVtOiBBcnJheTxhbnk+KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIUxPREFTSC5kaWZmZXJlbmNlKExPREFTSC5mbGF0dGVuKGV4YW1wbGUpLCBMT0RBU0guZmxhdHRlbihpdGVtKSkubGVuZ3RoO1xyXG4gIH1cclxuXHJcbn1cclxuIl19