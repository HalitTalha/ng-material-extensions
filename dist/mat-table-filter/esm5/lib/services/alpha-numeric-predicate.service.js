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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1maWx0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBTXJEO0lBQWtELGdEQUF1QjtJQUV2RTtlQUNFLGlCQUFPO0lBQ1IsQ0FBQztJQUVLLDZDQUFNLEdBQWIsVUFBYyxRQUEwQjtRQUN0QyxPQUFPLFFBQVEsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBQ00sK0NBQVEsR0FBZixVQUFnQixRQUEwQjtRQUN4QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ00saURBQVUsR0FBakIsVUFBa0IsUUFBMEI7UUFDMUMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNNLCtDQUFRLEdBQWYsVUFBZ0IsUUFBMEI7UUFDeEMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7SUFqQlUsNEJBQTRCO1FBSHhDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BQ1csNEJBQTRCLENBbUJ4Qzt1Q0ExQkQ7Q0EwQkMsQUFuQkQsQ0FBa0QsZUFBZSxHQW1CaEU7U0FuQlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWx0ZXJQcmVkaWNhdGUgfSBmcm9tICcuL2ZpbHRlci1wcmVkaWNhdGUnO1xyXG5pbXBvcnQgeyBJdGVtUGFpciB9IGZyb20gJy4uL2l0ZW0tcGFpcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbHBoYU51bWVyaWNQcmVkaWNhdGVTZXJ2aWNlIGV4dGVuZHMgRmlsdGVyUHJlZGljYXRlPHN0cmluZz4ge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgIH1cclxuXHJcbiAgcHVibGljIGVxdWFscyhpdGVtUGFpcjogSXRlbVBhaXI8c3RyaW5nPik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGl0ZW1QYWlyLmV4YW1wbGUgPT09IGl0ZW1QYWlyLml0ZW07XHJcbiAgfVxyXG4gIHB1YmxpYyBhbnl3aGVyZShpdGVtUGFpcjogSXRlbVBhaXI8c3RyaW5nPik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGl0ZW1QYWlyLml0ZW0uaW5jbHVkZXMoaXRlbVBhaXIuZXhhbXBsZSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzdGFydHNXaXRoKGl0ZW1QYWlyOiBJdGVtUGFpcjxzdHJpbmc+KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXRlbVBhaXIuaXRlbS5zdGFydHNXaXRoKGl0ZW1QYWlyLmV4YW1wbGUpO1xyXG4gIH1cclxuICBwdWJsaWMgZW5kc1dpdGgoaXRlbVBhaXI6IEl0ZW1QYWlyPHN0cmluZz4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpdGVtUGFpci5pdGVtLmVuZHNXaXRoKGl0ZW1QYWlyLmV4YW1wbGUpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19