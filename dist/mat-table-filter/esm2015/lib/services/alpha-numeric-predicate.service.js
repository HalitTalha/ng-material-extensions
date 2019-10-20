/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FilterPredicate } from './filter-predicate';
import * as i0 from "@angular/core";
export class AlphaNumericPredicateService extends FilterPredicate {
    constructor() {
        super();
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    equals(itemPair) {
        return itemPair.example === itemPair.item;
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    anywhere(itemPair) {
        return itemPair.item.includes(itemPair.example);
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    startsWith(itemPair) {
        return itemPair.item.startsWith(itemPair.example);
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    endsWith(itemPair) {
        return itemPair.item.endsWith(itemPair.example);
    }
}
AlphaNumericPredicateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AlphaNumericPredicateService.ctorParameters = () => [];
/** @nocollapse */ AlphaNumericPredicateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AlphaNumericPredicateService_Factory() { return new AlphaNumericPredicateService(); }, token: AlphaNumericPredicateService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1maWx0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBTXJELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxlQUF1QjtJQUV2RTtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7SUFFSyxNQUFNLENBQUMsUUFBMEI7UUFDdEMsT0FBTyxRQUFRLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFDTSxRQUFRLENBQUMsUUFBMEI7UUFDeEMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFDTSxVQUFVLENBQUMsUUFBMEI7UUFDMUMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFDTSxRQUFRLENBQUMsUUFBMEI7UUFDeEMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBcEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlclByZWRpY2F0ZSB9IGZyb20gJy4vZmlsdGVyLXByZWRpY2F0ZSc7XG5pbXBvcnQgeyBJdGVtUGFpciB9IGZyb20gJy4uL2l0ZW0tcGFpcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFscGhhTnVtZXJpY1ByZWRpY2F0ZVNlcnZpY2UgZXh0ZW5kcyBGaWx0ZXJQcmVkaWNhdGU8c3RyaW5nPiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgIH1cblxuICBwdWJsaWMgZXF1YWxzKGl0ZW1QYWlyOiBJdGVtUGFpcjxzdHJpbmc+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW1QYWlyLmV4YW1wbGUgPT09IGl0ZW1QYWlyLml0ZW07XG4gIH1cbiAgcHVibGljIGFueXdoZXJlKGl0ZW1QYWlyOiBJdGVtUGFpcjxzdHJpbmc+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW1QYWlyLml0ZW0uaW5jbHVkZXMoaXRlbVBhaXIuZXhhbXBsZSk7XG4gIH1cbiAgcHVibGljIHN0YXJ0c1dpdGgoaXRlbVBhaXI6IEl0ZW1QYWlyPHN0cmluZz4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbVBhaXIuaXRlbS5zdGFydHNXaXRoKGl0ZW1QYWlyLmV4YW1wbGUpO1xuICB9XG4gIHB1YmxpYyBlbmRzV2l0aChpdGVtUGFpcjogSXRlbVBhaXI8c3RyaW5nPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpdGVtUGFpci5pdGVtLmVuZHNXaXRoKGl0ZW1QYWlyLmV4YW1wbGUpO1xuICB9XG5cbn1cbiJdfQ==