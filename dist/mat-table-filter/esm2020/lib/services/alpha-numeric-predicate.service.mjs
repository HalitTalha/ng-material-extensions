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
AlphaNumericPredicateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: AlphaNumericPredicateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AlphaNumericPredicateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: AlphaNumericPredicateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: AlphaNumericPredicateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdC10YWJsZS1maWx0ZXIvc3JjL2xpYi9zZXJ2aWNlcy9hbHBoYS1udW1lcmljLXByZWRpY2F0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQU1yRCxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsZUFBdUI7SUFFdkU7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFSyxNQUFNLENBQUMsUUFBMEI7UUFDdEMsT0FBTyxRQUFRLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDNUMsQ0FBQztJQUNNLFFBQVEsQ0FBQyxRQUEwQjtRQUN4QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ00sVUFBVSxDQUFDLFFBQTBCO1FBQzFDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDTSxRQUFRLENBQUMsUUFBMEI7UUFDeEMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7eUhBakJVLDRCQUE0Qjs2SEFBNUIsNEJBQTRCLGNBRjNCLE1BQU07MkZBRVAsNEJBQTRCO2tCQUh4QyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlclByZWRpY2F0ZSB9IGZyb20gJy4vZmlsdGVyLXByZWRpY2F0ZSc7XG5pbXBvcnQgeyBJdGVtUGFpciB9IGZyb20gJy4uL2l0ZW0tcGFpcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFscGhhTnVtZXJpY1ByZWRpY2F0ZVNlcnZpY2UgZXh0ZW5kcyBGaWx0ZXJQcmVkaWNhdGU8c3RyaW5nPiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgIH1cblxuICBwdWJsaWMgZXF1YWxzKGl0ZW1QYWlyOiBJdGVtUGFpcjxzdHJpbmc+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW1QYWlyLmV4YW1wbGUgPT09IGl0ZW1QYWlyLml0ZW07XG4gIH1cbiAgcHVibGljIGFueXdoZXJlKGl0ZW1QYWlyOiBJdGVtUGFpcjxzdHJpbmc+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW1QYWlyLml0ZW0uaW5jbHVkZXMoaXRlbVBhaXIuZXhhbXBsZSk7XG4gIH1cbiAgcHVibGljIHN0YXJ0c1dpdGgoaXRlbVBhaXI6IEl0ZW1QYWlyPHN0cmluZz4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbVBhaXIuaXRlbS5zdGFydHNXaXRoKGl0ZW1QYWlyLmV4YW1wbGUpO1xuICB9XG4gIHB1YmxpYyBlbmRzV2l0aChpdGVtUGFpcjogSXRlbVBhaXI8c3RyaW5nPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpdGVtUGFpci5pdGVtLmVuZHNXaXRoKGl0ZW1QYWlyLmV4YW1wbGUpO1xuICB9XG5cbn1cbiJdfQ==