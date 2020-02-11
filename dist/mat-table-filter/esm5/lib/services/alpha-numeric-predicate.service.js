import { __extends } from "tslib";
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
    AlphaNumericPredicateService.ɵfac = function AlphaNumericPredicateService_Factory(t) { return new (t || AlphaNumericPredicateService)(); };
    AlphaNumericPredicateService.ɵprov = i0.ɵɵdefineInjectable({ token: AlphaNumericPredicateService, factory: AlphaNumericPredicateService.ɵfac, providedIn: 'root' });
    return AlphaNumericPredicateService;
}(FilterPredicate));
export { AlphaNumericPredicateService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlphaNumericPredicateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1maWx0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBR3JEO0lBR2tELGdEQUF1QjtJQUV2RTtlQUNFLGlCQUFPO0lBQ1IsQ0FBQztJQUVLLDZDQUFNLEdBQWIsVUFBYyxRQUEwQjtRQUN0QyxPQUFPLFFBQVEsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBQ00sK0NBQVEsR0FBZixVQUFnQixRQUEwQjtRQUN4QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ00saURBQVUsR0FBakIsVUFBa0IsUUFBMEI7UUFDMUMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNNLCtDQUFRLEdBQWYsVUFBZ0IsUUFBMEI7UUFDeEMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs0R0FqQlUsNEJBQTRCO3dFQUE1Qiw0QkFBNEIsV0FBNUIsNEJBQTRCLG1CQUYzQixNQUFNO3VDQUxwQjtDQTBCQyxBQXRCRCxDQUdrRCxlQUFlLEdBbUJoRTtTQW5CWSw0QkFBNEI7a0RBQTVCLDRCQUE0QjtjQUh4QyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWx0ZXJQcmVkaWNhdGUgfSBmcm9tICcuL2ZpbHRlci1wcmVkaWNhdGUnO1xuaW1wb3J0IHsgSXRlbVBhaXIgfSBmcm9tICcuLi9pdGVtLXBhaXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBbHBoYU51bWVyaWNQcmVkaWNhdGVTZXJ2aWNlIGV4dGVuZHMgRmlsdGVyUHJlZGljYXRlPHN0cmluZz4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICB9XG5cbiAgcHVibGljIGVxdWFscyhpdGVtUGFpcjogSXRlbVBhaXI8c3RyaW5nPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpdGVtUGFpci5leGFtcGxlID09PSBpdGVtUGFpci5pdGVtO1xuICB9XG4gIHB1YmxpYyBhbnl3aGVyZShpdGVtUGFpcjogSXRlbVBhaXI8c3RyaW5nPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpdGVtUGFpci5pdGVtLmluY2x1ZGVzKGl0ZW1QYWlyLmV4YW1wbGUpO1xuICB9XG4gIHB1YmxpYyBzdGFydHNXaXRoKGl0ZW1QYWlyOiBJdGVtUGFpcjxzdHJpbmc+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW1QYWlyLml0ZW0uc3RhcnRzV2l0aChpdGVtUGFpci5leGFtcGxlKTtcbiAgfVxuICBwdWJsaWMgZW5kc1dpdGgoaXRlbVBhaXI6IEl0ZW1QYWlyPHN0cmluZz4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbVBhaXIuaXRlbS5lbmRzV2l0aChpdGVtUGFpci5leGFtcGxlKTtcbiAgfVxuXG59XG4iXX0=