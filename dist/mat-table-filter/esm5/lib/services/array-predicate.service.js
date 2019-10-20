/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        throw new Error('Unsupported Operation');
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
        throw new Error('Unsupported Operation');
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
    ArrayPredicateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ArrayPredicateService.ctorParameters = function () { return []; };
    /** @nocollapse */ ArrayPredicateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ArrayPredicateService_Factory() { return new ArrayPredicateService(); }, token: ArrayPredicateService, providedIn: "root" });
    return ArrayPredicateService;
}(FilterPredicate));
export { ArrayPredicateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktcHJlZGljYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FycmF5LXByZWRpY2F0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O0FBR2pDO0lBRzJDLGlEQUEyQjtJQUVwRTtlQUNFLGlCQUFPO0lBQ1QsQ0FBQzs7Ozs7SUFFTSxzQ0FBTTs7OztJQUFiLFVBQWMsUUFBOEI7UUFDMUMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7O0lBQ00sd0NBQVE7Ozs7SUFBZixVQUFnQixRQUE4QjtRQUM1QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFDTSwwQ0FBVTs7OztJQUFqQixVQUFrQixRQUE4QjtRQUM5QyxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFDTSx3Q0FBUTs7OztJQUFmLFVBQWdCLFFBQThCO1FBQzVDLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7O0lBRU8sd0NBQVE7Ozs7OztJQUFoQixVQUFpQixPQUFtQixFQUFFLElBQWdCO1FBQ3BELE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNsRixDQUFDOztnQkF4QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7Z0NBUEQ7Q0ErQkMsQUExQkQsQ0FHMkMsZUFBZSxHQXVCekQ7U0F2QlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyUHJlZGljYXRlIH0gZnJvbSAnLi9maWx0ZXItcHJlZGljYXRlJztcbmltcG9ydCAqIGFzIExPREFTSCBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgSXRlbVBhaXIgfSBmcm9tICcuLi9pdGVtLXBhaXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBcnJheVByZWRpY2F0ZVNlcnZpY2UgZXh0ZW5kcyBGaWx0ZXJQcmVkaWNhdGU8QXJyYXk8YW55Pj4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgZXF1YWxzKGl0ZW1QYWlyOiBJdGVtUGFpcjxBcnJheTxhbnk+Pik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBMT0RBU0guaXNFcXVhbChpdGVtUGFpci5leGFtcGxlLnNvcnQoKSwgaXRlbVBhaXIuaXRlbS5zb3J0KCkpO1xuICB9XG4gIHB1YmxpYyBhbnl3aGVyZShpdGVtUGFpcjogSXRlbVBhaXI8QXJyYXk8YW55Pj4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1N1YnNldChpdGVtUGFpci5leGFtcGxlLCBpdGVtUGFpci5pdGVtKTtcbiAgfVxuICBwdWJsaWMgc3RhcnRzV2l0aChpdGVtUGFpcjogSXRlbVBhaXI8QXJyYXk8YW55Pj4pOiBib29sZWFuIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9wZXJhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBlbmRzV2l0aChpdGVtUGFpcjogSXRlbVBhaXI8QXJyYXk8YW55Pj4pOiBib29sZWFuIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9wZXJhdGlvbicpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1N1YnNldChleGFtcGxlOiBBcnJheTxhbnk+LCBpdGVtOiBBcnJheTxhbnk+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFMT0RBU0guZGlmZmVyZW5jZShMT0RBU0guZmxhdHRlbihleGFtcGxlKSwgTE9EQVNILmZsYXR0ZW4oaXRlbSkpLmxlbmd0aDtcbiAgfVxuXG59XG4iXX0=