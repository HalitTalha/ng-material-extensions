import { Injectable } from '@angular/core';
import { FilterPredicate } from './filter-predicate';
import * as i0 from "@angular/core";
export class AlphaNumericPredicateService extends FilterPredicate {
    constructor() {
        super();
    }
    equals(itemPair) {
        return itemPair.example === itemPair.item;
    }
    anywhere(itemPair) {
        return itemPair.item.includes(itemPair.example);
    }
    startsWith(itemPair) {
        return itemPair.item.startsWith(itemPair.example);
    }
    endsWith(itemPair) {
        return itemPair.item.endsWith(itemPair.example);
    }
}
AlphaNumericPredicateService.ɵfac = function AlphaNumericPredicateService_Factory(t) { return new (t || AlphaNumericPredicateService)(); };
AlphaNumericPredicateService.ɵprov = i0.ɵɵdefineInjectable({ token: AlphaNumericPredicateService, factory: AlphaNumericPredicateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlphaNumericPredicateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1maWx0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFNckQsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGVBQXVCO0lBRXZFO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUssTUFBTSxDQUFDLFFBQTBCO1FBQ3RDLE9BQU8sUUFBUSxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzVDLENBQUM7SUFDTSxRQUFRLENBQUMsUUFBMEI7UUFDeEMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNNLFVBQVUsQ0FBQyxRQUEwQjtRQUMxQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ00sUUFBUSxDQUFDLFFBQTBCO1FBQ3hDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7O3dHQWpCVSw0QkFBNEI7b0VBQTVCLDRCQUE0QixXQUE1Qiw0QkFBNEIsbUJBRjNCLE1BQU07a0RBRVAsNEJBQTRCO2NBSHhDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlclByZWRpY2F0ZSB9IGZyb20gJy4vZmlsdGVyLXByZWRpY2F0ZSc7XG5pbXBvcnQgeyBJdGVtUGFpciB9IGZyb20gJy4uL2l0ZW0tcGFpcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFscGhhTnVtZXJpY1ByZWRpY2F0ZVNlcnZpY2UgZXh0ZW5kcyBGaWx0ZXJQcmVkaWNhdGU8c3RyaW5nPiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgIH1cblxuICBwdWJsaWMgZXF1YWxzKGl0ZW1QYWlyOiBJdGVtUGFpcjxzdHJpbmc+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW1QYWlyLmV4YW1wbGUgPT09IGl0ZW1QYWlyLml0ZW07XG4gIH1cbiAgcHVibGljIGFueXdoZXJlKGl0ZW1QYWlyOiBJdGVtUGFpcjxzdHJpbmc+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW1QYWlyLml0ZW0uaW5jbHVkZXMoaXRlbVBhaXIuZXhhbXBsZSk7XG4gIH1cbiAgcHVibGljIHN0YXJ0c1dpdGgoaXRlbVBhaXI6IEl0ZW1QYWlyPHN0cmluZz4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbVBhaXIuaXRlbS5zdGFydHNXaXRoKGl0ZW1QYWlyLmV4YW1wbGUpO1xuICB9XG4gIHB1YmxpYyBlbmRzV2l0aChpdGVtUGFpcjogSXRlbVBhaXI8c3RyaW5nPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpdGVtUGFpci5pdGVtLmVuZHNXaXRoKGl0ZW1QYWlyLmV4YW1wbGUpO1xuICB9XG5cbn1cbiJdfQ==