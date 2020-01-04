/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FilterPredicate } from './filter-predicate';
import * as LODASH from 'lodash';
import * as i0 from "@angular/core";
var ArrayPredicateService = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayPredicateService, _super);
    function ArrayPredicateService() {
        return _super.call(this) || this;
    }
    /**
     * @private
     * @return {?}
     */
    ArrayPredicateService.warn = /**
     * @private
     * @return {?}
     */
    function () {
        console.warn(ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING);
        console.warn(ArrayPredicateService.SUGGESTION_WARNING);
    };
    /**
     * @param {?} itemPair
     * @return {?}
     */
    ArrayPredicateService.prototype.equals = /**
     * @param {?} itemPair
     * @return {?}
     */
    function (itemPair) {
        return LODASH.isEqual(itemPair.example.sort(), itemPair.item.sort());
    };
    /**
     * @param {?} itemPair
     * @return {?}
     */
    ArrayPredicateService.prototype.anywhere = /**
     * @param {?} itemPair
     * @return {?}
     */
    function (itemPair) {
        return this.isSubset(itemPair.example, itemPair.item);
    };
    /**
     * @param {?} itemPair
     * @return {?}
     */
    ArrayPredicateService.prototype.startsWith = /**
     * @param {?} itemPair
     * @return {?}
     */
    function (itemPair) {
        ArrayPredicateService.warn();
        return this.anywhere(itemPair);
    };
    /**
     * @param {?} itemPair
     * @return {?}
     */
    ArrayPredicateService.prototype.endsWith = /**
     * @param {?} itemPair
     * @return {?}
     */
    function (itemPair) {
        ArrayPredicateService.warn();
        return this.anywhere(itemPair);
    };
    /**
     * @private
     * @param {?} example
     * @param {?} item
     * @return {?}
     */
    ArrayPredicateService.prototype.isSubset = /**
     * @private
     * @param {?} example
     * @param {?} item
     * @return {?}
     */
    function (example, item) {
        return !LODASH.difference(LODASH.flatten(example), LODASH.flatten(item)).length;
    };
    // tslint:disable-next-line:max-line-length
    ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING = 'This filterType is unsupported for array filtering. FilterType.ANYWHERE is executed instead!';
    ArrayPredicateService.SUGGESTION_WARNING = 'You can set a custom predicate for the array property through PropertyOptions!';
    ArrayPredicateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ArrayPredicateService.ctorParameters = function () { return []; };
    /** @nocollapse */ ArrayPredicateService.ngInjectableDef = i0.defineInjectable({ factory: function ArrayPredicateService_Factory() { return new ArrayPredicateService(); }, token: ArrayPredicateService, providedIn: "root" });
    return ArrayPredicateService;
}(FilterPredicate));
export { ArrayPredicateService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING;
    /**
     * @type {?}
     * @private
     */
    ArrayPredicateService.SUGGESTION_WARNING;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktcHJlZGljYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FycmF5LXByZWRpY2F0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O0FBR2pDO0lBRzJDLGlEQUEyQjtJQUtwRTtlQUNFLGlCQUFPO0lBQ1QsQ0FBQzs7Ozs7SUFFYywwQkFBSTs7OztJQUFuQjtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFTSxzQ0FBTTs7OztJQUFiLFVBQWMsUUFBOEI7UUFDMUMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7O0lBQ00sd0NBQVE7Ozs7SUFBZixVQUFnQixRQUE4QjtRQUM1QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFDTSwwQ0FBVTs7OztJQUFqQixVQUFrQixRQUE4QjtRQUM5QyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFDTSx3Q0FBUTs7OztJQUFmLFVBQWdCLFFBQThCO1FBQzVDLHFCQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7O0lBRU8sd0NBQVE7Ozs7OztJQUFoQixVQUFpQixPQUFtQixFQUFFLElBQWdCO1FBQ3BELE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNsRixDQUFDOztJQTVCdUIsbURBQTZCLEdBQUcsOEZBQThGLENBQUM7SUFDL0gsd0NBQWtCLEdBQUcsZ0ZBQWdGLENBQUM7O2dCQVAvSCxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztnQ0FQRDtDQXlDQyxBQXBDRCxDQUcyQyxlQUFlLEdBaUN6RDtTQWpDWSxxQkFBcUI7Ozs7OztJQUdoQyxvREFBdUo7Ozs7O0lBQ3ZKLHlDQUE4SCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlclByZWRpY2F0ZSB9IGZyb20gJy4vZmlsdGVyLXByZWRpY2F0ZSc7XG5pbXBvcnQgKiBhcyBMT0RBU0ggZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEl0ZW1QYWlyIH0gZnJvbSAnLi4vaXRlbS1wYWlyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlQcmVkaWNhdGVTZXJ2aWNlIGV4dGVuZHMgRmlsdGVyUHJlZGljYXRlPEFycmF5PGFueT4+IHtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFVOU1VQUE9SVEVEX09QRVJBVElPTl9XQVJOSU5HID0gJ1RoaXMgZmlsdGVyVHlwZSBpcyB1bnN1cHBvcnRlZCBmb3IgYXJyYXkgZmlsdGVyaW5nLiBGaWx0ZXJUeXBlLkFOWVdIRVJFIGlzIGV4ZWN1dGVkIGluc3RlYWQhJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU1VHR0VTVElPTl9XQVJOSU5HID0gJ1lvdSBjYW4gc2V0IGEgY3VzdG9tIHByZWRpY2F0ZSBmb3IgdGhlIGFycmF5IHByb3BlcnR5IHRocm91Z2ggUHJvcGVydHlPcHRpb25zISc7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyB3YXJuKCkge1xuICAgIGNvbnNvbGUud2FybihBcnJheVByZWRpY2F0ZVNlcnZpY2UuVU5TVVBQT1JURURfT1BFUkFUSU9OX1dBUk5JTkcpO1xuICAgIGNvbnNvbGUud2FybihBcnJheVByZWRpY2F0ZVNlcnZpY2UuU1VHR0VTVElPTl9XQVJOSU5HKTtcbiAgfVxuXG4gIHB1YmxpYyBlcXVhbHMoaXRlbVBhaXI6IEl0ZW1QYWlyPEFycmF5PGFueT4+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIExPREFTSC5pc0VxdWFsKGl0ZW1QYWlyLmV4YW1wbGUuc29ydCgpLCBpdGVtUGFpci5pdGVtLnNvcnQoKSk7XG4gIH1cbiAgcHVibGljIGFueXdoZXJlKGl0ZW1QYWlyOiBJdGVtUGFpcjxBcnJheTxhbnk+Pik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzU3Vic2V0KGl0ZW1QYWlyLmV4YW1wbGUsIGl0ZW1QYWlyLml0ZW0pO1xuICB9XG4gIHB1YmxpYyBzdGFydHNXaXRoKGl0ZW1QYWlyOiBJdGVtUGFpcjxBcnJheTxhbnk+Pik6IGJvb2xlYW4ge1xuICAgIEFycmF5UHJlZGljYXRlU2VydmljZS53YXJuKCk7XG4gICAgcmV0dXJuIHRoaXMuYW55d2hlcmUoaXRlbVBhaXIpO1xuICB9XG4gIHB1YmxpYyBlbmRzV2l0aChpdGVtUGFpcjogSXRlbVBhaXI8QXJyYXk8YW55Pj4pOiBib29sZWFuIHtcbiAgICBBcnJheVByZWRpY2F0ZVNlcnZpY2Uud2FybigpO1xuICAgIHJldHVybiB0aGlzLmFueXdoZXJlKGl0ZW1QYWlyKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNTdWJzZXQoZXhhbXBsZTogQXJyYXk8YW55PiwgaXRlbTogQXJyYXk8YW55Pik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhTE9EQVNILmRpZmZlcmVuY2UoTE9EQVNILmZsYXR0ZW4oZXhhbXBsZSksIExPREFTSC5mbGF0dGVuKGl0ZW0pKS5sZW5ndGg7XG4gIH1cblxufVxuIl19