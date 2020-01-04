/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FilterPredicate } from './filter-predicate';
import * as i0 from "@angular/core";
var AlphaNumericPredicateService = /** @class */ (function (_super) {
    tslib_1.__extends(AlphaNumericPredicateService, _super);
    function AlphaNumericPredicateService() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    AlphaNumericPredicateService.prototype.equals = /**
     * @param {?} itemPair
     * @return {?}
     */
    function (itemPair) {
        return itemPair.example === itemPair.item;
    };
    /**
     * @param {?} itemPair
     * @return {?}
     */
    AlphaNumericPredicateService.prototype.anywhere = /**
     * @param {?} itemPair
     * @return {?}
     */
    function (itemPair) {
        return itemPair.item.includes(itemPair.example);
    };
    /**
     * @param {?} itemPair
     * @return {?}
     */
    AlphaNumericPredicateService.prototype.startsWith = /**
     * @param {?} itemPair
     * @return {?}
     */
    function (itemPair) {
        return itemPair.item.startsWith(itemPair.example);
    };
    /**
     * @param {?} itemPair
     * @return {?}
     */
    AlphaNumericPredicateService.prototype.endsWith = /**
     * @param {?} itemPair
     * @return {?}
     */
    function (itemPair) {
        return itemPair.item.endsWith(itemPair.example);
    };
    AlphaNumericPredicateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AlphaNumericPredicateService.ctorParameters = function () { return []; };
    /** @nocollapse */ AlphaNumericPredicateService.ngInjectableDef = i0.defineInjectable({ factory: function AlphaNumericPredicateService_Factory() { return new AlphaNumericPredicateService(); }, token: AlphaNumericPredicateService, providedIn: "root" });
    return AlphaNumericPredicateService;
}(FilterPredicate));
export { AlphaNumericPredicateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1maWx0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUdyRDtJQUdrRCx3REFBdUI7SUFFdkU7ZUFDRSxpQkFBTztJQUNSLENBQUM7Ozs7O0lBRUssNkNBQU07Ozs7SUFBYixVQUFjLFFBQTBCO1FBQ3RDLE9BQU8sUUFBUSxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBQ00sK0NBQVE7Ozs7SUFBZixVQUFnQixRQUEwQjtRQUN4QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUNNLGlEQUFVOzs7O0lBQWpCLFVBQWtCLFFBQTBCO1FBQzFDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBQ00sK0NBQVE7Ozs7SUFBZixVQUFnQixRQUEwQjtRQUN4QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkFwQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7dUNBTkQ7Q0EwQkMsQUF0QkQsQ0FHa0QsZUFBZSxHQW1CaEU7U0FuQlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyUHJlZGljYXRlIH0gZnJvbSAnLi9maWx0ZXItcHJlZGljYXRlJztcbmltcG9ydCB7IEl0ZW1QYWlyIH0gZnJvbSAnLi4vaXRlbS1wYWlyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWxwaGFOdW1lcmljUHJlZGljYXRlU2VydmljZSBleHRlbmRzIEZpbHRlclByZWRpY2F0ZTxzdHJpbmc+IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgfVxuXG4gIHB1YmxpYyBlcXVhbHMoaXRlbVBhaXI6IEl0ZW1QYWlyPHN0cmluZz4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbVBhaXIuZXhhbXBsZSA9PT0gaXRlbVBhaXIuaXRlbTtcbiAgfVxuICBwdWJsaWMgYW55d2hlcmUoaXRlbVBhaXI6IEl0ZW1QYWlyPHN0cmluZz4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbVBhaXIuaXRlbS5pbmNsdWRlcyhpdGVtUGFpci5leGFtcGxlKTtcbiAgfVxuICBwdWJsaWMgc3RhcnRzV2l0aChpdGVtUGFpcjogSXRlbVBhaXI8c3RyaW5nPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpdGVtUGFpci5pdGVtLnN0YXJ0c1dpdGgoaXRlbVBhaXIuZXhhbXBsZSk7XG4gIH1cbiAgcHVibGljIGVuZHNXaXRoKGl0ZW1QYWlyOiBJdGVtUGFpcjxzdHJpbmc+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW1QYWlyLml0ZW0uZW5kc1dpdGgoaXRlbVBhaXIuZXhhbXBsZSk7XG4gIH1cblxufVxuIl19