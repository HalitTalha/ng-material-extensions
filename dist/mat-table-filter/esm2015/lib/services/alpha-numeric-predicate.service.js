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
AlphaNumericPredicateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlphaNumericPredicateService_Factory() { return new AlphaNumericPredicateService(); }, token: AlphaNumericPredicateService, providedIn: "root" });
AlphaNumericPredicateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AlphaNumericPredicateService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9hbmd1bGFyX3dvcmtzcGFjZS9uZy1tYXRlcmlhbC1leHRlbnNpb25zL3Byb2plY3RzL21hdC10YWJsZS1maWx0ZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FscGhhLW51bWVyaWMtcHJlZGljYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBTXJELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxlQUF1QjtJQUV2RTtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVLLE1BQU0sQ0FBQyxRQUEwQjtRQUN0QyxPQUFPLFFBQVEsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBQ00sUUFBUSxDQUFDLFFBQTBCO1FBQ3hDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDTSxVQUFVLENBQUMsUUFBMEI7UUFDMUMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNNLFFBQVEsQ0FBQyxRQUEwQjtRQUN4QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O1lBcEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsdGVyUHJlZGljYXRlIH0gZnJvbSAnLi9maWx0ZXItcHJlZGljYXRlJztcclxuaW1wb3J0IHsgSXRlbVBhaXIgfSBmcm9tICcuLi9pdGVtLXBhaXInO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxwaGFOdW1lcmljUHJlZGljYXRlU2VydmljZSBleHRlbmRzIEZpbHRlclByZWRpY2F0ZTxzdHJpbmc+IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICB9XHJcblxyXG4gIHB1YmxpYyBlcXVhbHMoaXRlbVBhaXI6IEl0ZW1QYWlyPHN0cmluZz4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpdGVtUGFpci5leGFtcGxlID09PSBpdGVtUGFpci5pdGVtO1xyXG4gIH1cclxuICBwdWJsaWMgYW55d2hlcmUoaXRlbVBhaXI6IEl0ZW1QYWlyPHN0cmluZz4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpdGVtUGFpci5pdGVtLmluY2x1ZGVzKGl0ZW1QYWlyLmV4YW1wbGUpO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhcnRzV2l0aChpdGVtUGFpcjogSXRlbVBhaXI8c3RyaW5nPik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGl0ZW1QYWlyLml0ZW0uc3RhcnRzV2l0aChpdGVtUGFpci5leGFtcGxlKTtcclxuICB9XHJcbiAgcHVibGljIGVuZHNXaXRoKGl0ZW1QYWlyOiBJdGVtUGFpcjxzdHJpbmc+KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXRlbVBhaXIuaXRlbS5lbmRzV2l0aChpdGVtUGFpci5leGFtcGxlKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==