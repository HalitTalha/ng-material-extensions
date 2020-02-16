import { __decorate, __extends, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { FilterPredicate } from './filter-predicate';
import * as i0 from "@angular/core";
var AlphaNumericPredicateService = /** @class */ (function (_super) {
    __extends(AlphaNumericPredicateService, _super);
    function AlphaNumericPredicateService() {
        return _super.call(this) || this;
    }
    AlphaNumericPredicateService.prototype.equals = function (itemPair) {
        return itemPair.example === itemPair.item;
    };
    AlphaNumericPredicateService.prototype.anywhere = function (itemPair) {
        return itemPair.item.includes(itemPair.example);
    };
    AlphaNumericPredicateService.prototype.startsWith = function (itemPair) {
        return itemPair.item.startsWith(itemPair.example);
    };
    AlphaNumericPredicateService.prototype.endsWith = function (itemPair) {
        return itemPair.item.endsWith(itemPair.example);
    };
    AlphaNumericPredicateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlphaNumericPredicateService_Factory() { return new AlphaNumericPredicateService(); }, token: AlphaNumericPredicateService, providedIn: "root" });
    AlphaNumericPredicateService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlphaNumericPredicateService);
    return AlphaNumericPredicateService;
}(FilterPredicate));
export { AlphaNumericPredicateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1maWx0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBTXJEO0lBQWtELGdEQUF1QjtJQUV2RTtlQUNFLGlCQUFPO0lBQ1IsQ0FBQztJQUVLLDZDQUFNLEdBQWIsVUFBYyxRQUEwQjtRQUN0QyxPQUFPLFFBQVEsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBQ00sK0NBQVEsR0FBZixVQUFnQixRQUEwQjtRQUN4QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ00saURBQVUsR0FBakIsVUFBa0IsUUFBMEI7UUFDMUMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNNLCtDQUFRLEdBQWYsVUFBZ0IsUUFBMEI7UUFDeEMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7SUFqQlUsNEJBQTRCO1FBSHhDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BQ1csNEJBQTRCLENBbUJ4Qzt1Q0ExQkQ7Q0EwQkMsQUFuQkQsQ0FBa0QsZUFBZSxHQW1CaEU7U0FuQlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyUHJlZGljYXRlIH0gZnJvbSAnLi9maWx0ZXItcHJlZGljYXRlJztcbmltcG9ydCB7IEl0ZW1QYWlyIH0gZnJvbSAnLi4vaXRlbS1wYWlyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWxwaGFOdW1lcmljUHJlZGljYXRlU2VydmljZSBleHRlbmRzIEZpbHRlclByZWRpY2F0ZTxzdHJpbmc+IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgfVxuXG4gIHB1YmxpYyBlcXVhbHMoaXRlbVBhaXI6IEl0ZW1QYWlyPHN0cmluZz4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbVBhaXIuZXhhbXBsZSA9PT0gaXRlbVBhaXIuaXRlbTtcbiAgfVxuICBwdWJsaWMgYW55d2hlcmUoaXRlbVBhaXI6IEl0ZW1QYWlyPHN0cmluZz4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbVBhaXIuaXRlbS5pbmNsdWRlcyhpdGVtUGFpci5leGFtcGxlKTtcbiAgfVxuICBwdWJsaWMgc3RhcnRzV2l0aChpdGVtUGFpcjogSXRlbVBhaXI8c3RyaW5nPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpdGVtUGFpci5pdGVtLnN0YXJ0c1dpdGgoaXRlbVBhaXIuZXhhbXBsZSk7XG4gIH1cbiAgcHVibGljIGVuZHNXaXRoKGl0ZW1QYWlyOiBJdGVtUGFpcjxzdHJpbmc+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW1QYWlyLml0ZW0uZW5kc1dpdGgoaXRlbVBhaXIuZXhhbXBsZSk7XG4gIH1cblxufVxuIl19