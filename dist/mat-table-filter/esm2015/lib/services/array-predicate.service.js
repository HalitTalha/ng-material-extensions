/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FilterPredicate } from './filter-predicate';
import * as LODASH from 'lodash';
import * as i0 from "@angular/core";
export class ArrayPredicateService extends FilterPredicate {
    constructor() {
        super();
    }
    /**
     * @private
     * @return {?}
     */
    static warn() {
        console.warn(ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING);
        console.warn(ArrayPredicateService.SUGGESTION_WARNING);
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    equals(itemPair) {
        return LODASH.isEqual(itemPair.example.sort(), itemPair.item.sort());
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    anywhere(itemPair) {
        return this.isSubset(itemPair.example, itemPair.item);
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    startsWith(itemPair) {
        ArrayPredicateService.warn();
        return this.anywhere(itemPair);
    }
    /**
     * @param {?} itemPair
     * @return {?}
     */
    endsWith(itemPair) {
        ArrayPredicateService.warn();
        return this.anywhere(itemPair);
    }
    /**
     * @private
     * @param {?} example
     * @param {?} item
     * @return {?}
     */
    isSubset(example, item) {
        return !LODASH.difference(LODASH.flatten(example), LODASH.flatten(item)).length;
    }
}
// tslint:disable-next-line:max-line-length
ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING = 'This filterType is unsupported for array filtering. FilterType.ANYWHERE is executed instead!';
ArrayPredicateService.SUGGESTION_WARNING = 'You can set a custom predicate for the array property through PropertyOptions!';
ArrayPredicateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ArrayPredicateService.ctorParameters = () => [];
/** @nocollapse */ ArrayPredicateService.ngInjectableDef = i0.defineInjectable({ factory: function ArrayPredicateService_Factory() { return new ArrayPredicateService(); }, token: ArrayPredicateService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktcHJlZGljYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FycmF5LXByZWRpY2F0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7QUFNakMsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGVBQTJCO0lBS3BFO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDOzs7OztJQUVPLE1BQU0sQ0FBQyxJQUFJO1FBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsUUFBOEI7UUFDMUMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7O0lBQ00sUUFBUSxDQUFDLFFBQThCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUNNLFVBQVUsQ0FBQyxRQUE4QjtRQUM5QyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFDTSxRQUFRLENBQUMsUUFBOEI7UUFDNUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7Ozs7SUFFTyxRQUFRLENBQUMsT0FBbUIsRUFBRSxJQUFnQjtRQUNwRCxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbEYsQ0FBQzs7O0FBNUJ1QixtREFBNkIsR0FBRyw4RkFBOEYsQ0FBQztBQUMvSCx3Q0FBa0IsR0FBRyxnRkFBZ0YsQ0FBQzs7WUFQL0gsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBSUMsb0RBQXVKOzs7OztJQUN2Six5Q0FBOEgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWx0ZXJQcmVkaWNhdGUgfSBmcm9tICcuL2ZpbHRlci1wcmVkaWNhdGUnO1xuaW1wb3J0ICogYXMgTE9EQVNIIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBJdGVtUGFpciB9IGZyb20gJy4uL2l0ZW0tcGFpcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFycmF5UHJlZGljYXRlU2VydmljZSBleHRlbmRzIEZpbHRlclByZWRpY2F0ZTxBcnJheTxhbnk+PiB7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBVTlNVUFBPUlRFRF9PUEVSQVRJT05fV0FSTklORyA9ICdUaGlzIGZpbHRlclR5cGUgaXMgdW5zdXBwb3J0ZWQgZm9yIGFycmF5IGZpbHRlcmluZy4gRmlsdGVyVHlwZS5BTllXSEVSRSBpcyBleGVjdXRlZCBpbnN0ZWFkISc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFNVR0dFU1RJT05fV0FSTklORyA9ICdZb3UgY2FuIHNldCBhIGN1c3RvbSBwcmVkaWNhdGUgZm9yIHRoZSBhcnJheSBwcm9wZXJ0eSB0aHJvdWdoIFByb3BlcnR5T3B0aW9ucyEnO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgd2FybigpIHtcbiAgICBjb25zb2xlLndhcm4oQXJyYXlQcmVkaWNhdGVTZXJ2aWNlLlVOU1VQUE9SVEVEX09QRVJBVElPTl9XQVJOSU5HKTtcbiAgICBjb25zb2xlLndhcm4oQXJyYXlQcmVkaWNhdGVTZXJ2aWNlLlNVR0dFU1RJT05fV0FSTklORyk7XG4gIH1cblxuICBwdWJsaWMgZXF1YWxzKGl0ZW1QYWlyOiBJdGVtUGFpcjxBcnJheTxhbnk+Pik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBMT0RBU0guaXNFcXVhbChpdGVtUGFpci5leGFtcGxlLnNvcnQoKSwgaXRlbVBhaXIuaXRlbS5zb3J0KCkpO1xuICB9XG4gIHB1YmxpYyBhbnl3aGVyZShpdGVtUGFpcjogSXRlbVBhaXI8QXJyYXk8YW55Pj4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1N1YnNldChpdGVtUGFpci5leGFtcGxlLCBpdGVtUGFpci5pdGVtKTtcbiAgfVxuICBwdWJsaWMgc3RhcnRzV2l0aChpdGVtUGFpcjogSXRlbVBhaXI8QXJyYXk8YW55Pj4pOiBib29sZWFuIHtcbiAgICBBcnJheVByZWRpY2F0ZVNlcnZpY2Uud2FybigpO1xuICAgIHJldHVybiB0aGlzLmFueXdoZXJlKGl0ZW1QYWlyKTtcbiAgfVxuICBwdWJsaWMgZW5kc1dpdGgoaXRlbVBhaXI6IEl0ZW1QYWlyPEFycmF5PGFueT4+KTogYm9vbGVhbiB7XG4gICAgQXJyYXlQcmVkaWNhdGVTZXJ2aWNlLndhcm4oKTtcbiAgICByZXR1cm4gdGhpcy5hbnl3aGVyZShpdGVtUGFpcik7XG4gIH1cblxuICBwcml2YXRlIGlzU3Vic2V0KGV4YW1wbGU6IEFycmF5PGFueT4sIGl0ZW06IEFycmF5PGFueT4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gIUxPREFTSC5kaWZmZXJlbmNlKExPREFTSC5mbGF0dGVuKGV4YW1wbGUpLCBMT0RBU0guZmxhdHRlbihpdGVtKSkubGVuZ3RoO1xuICB9XG5cbn1cbiJdfQ==