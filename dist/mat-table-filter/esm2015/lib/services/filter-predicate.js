/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MatTableFilter } from '../mat-table-filter.enum';
import * as LODASH from 'lodash';
/**
 * @abstract
 * @template T
 */
export class FilterPredicate {
    /**
     * @param {?} itemPair
     * @param {?} options
     * @return {?}
     */
    executeCondition(itemPair, options) {
        this.handleLetterCasing(itemPair, options.caseSensitive);
        switch (options.filterType) {
            case MatTableFilter.EQUALS:
                return this.equals(itemPair);
            case MatTableFilter.ANYWHERE:
                return this.anywhere(itemPair);
            case MatTableFilter.STARTS_WITH:
                return this.startsWith(itemPair);
            case MatTableFilter.ENDS_WITH:
                return this.endsWith(itemPair);
            default:
                return true;
        }
    }
    /**
     * @private
     * @param {?} itemPair
     * @param {?} caseSensitive
     * @return {?}
     */
    handleLetterCasing(itemPair, caseSensitive) {
        if (!caseSensitive) {
            this.transformAllLowerCase(itemPair);
        }
    }
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    transformAllLowerCase(object) {
        // tslint:disable-next-line:forin
        for (const key in object) {
            /** @type {?} */
            const value = object[key];
            if (LODASH.isString(value)) {
                object[key] = value.toLowerCase();
            }
            else {
                this.transformAllLowerCase(value);
            }
        }
    }
}
if (false) {
    /**
     * @abstract
     * @param {?} itemPair
     * @return {?}
     */
    FilterPredicate.prototype.equals = function (itemPair) { };
    /**
     * @abstract
     * @param {?} itemPair
     * @return {?}
     */
    FilterPredicate.prototype.anywhere = function (itemPair) { };
    /**
     * @abstract
     * @param {?} itemPair
     * @return {?}
     */
    FilterPredicate.prototype.startsWith = function (itemPair) { };
    /**
     * @abstract
     * @param {?} itemPair
     * @return {?}
     */
    FilterPredicate.prototype.endsWith = function (itemPair) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXByZWRpY2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1maWx0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZmlsdGVyLXByZWRpY2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTFELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7OztBQUdqQyxNQUFNLE9BQWdCLGVBQWU7Ozs7OztJQU81QixnQkFBZ0IsQ0FBQyxRQUFxQixFQUFFLE9BQWdCO1FBQzdELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELFFBQVEsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUMxQixLQUFLLGNBQWMsQ0FBQyxNQUFNO2dCQUN4QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsS0FBSyxjQUFjLENBQUMsUUFBUTtnQkFDMUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssY0FBYyxDQUFDLFdBQVc7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxLQUFLLGNBQWMsQ0FBQyxTQUFTO2dCQUMzQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakM7Z0JBQ0UsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxRQUF1QixFQUFFLGFBQXNCO1FBQ3hFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8scUJBQXFCLENBQUMsTUFBVztRQUN2QyxpQ0FBaUM7UUFDakMsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7O2tCQUNsQixLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUN6QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7SUFDSCxDQUFDO0NBQ0Y7Ozs7Ozs7SUF0Q0MsMkRBQXVEOzs7Ozs7SUFDdkQsNkRBQXlEOzs7Ozs7SUFDekQsK0RBQTJEOzs7Ozs7SUFDM0QsNkRBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWF0VGFibGVGaWx0ZXIgfSBmcm9tICcuLi9tYXQtdGFibGUtZmlsdGVyLmVudW0nO1xyXG5pbXBvcnQgeyBJdGVtUGFpciB9IGZyb20gJy4uL2l0ZW0tcGFpcic7XHJcbmltcG9ydCAqIGFzIExPREFTSCBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vb3B0aW9ucyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmlsdGVyUHJlZGljYXRlPFQ+IHtcclxuXHJcbiAgcHVibGljIGFic3RyYWN0IGVxdWFscyhpdGVtUGFpcjogSXRlbVBhaXI8VD4pOiBib29sZWFuO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBhbnl3aGVyZShpdGVtUGFpcjogSXRlbVBhaXI8VD4pOiBib29sZWFuO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBzdGFydHNXaXRoKGl0ZW1QYWlyOiBJdGVtUGFpcjxUPik6IGJvb2xlYW47XHJcbiAgcHVibGljIGFic3RyYWN0IGVuZHNXaXRoKGl0ZW1QYWlyOiBJdGVtUGFpcjxUPik6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBleGVjdXRlQ29uZGl0aW9uKGl0ZW1QYWlyOiBJdGVtUGFpcjxUPiwgb3B0aW9uczogT3B0aW9ucyk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5oYW5kbGVMZXR0ZXJDYXNpbmcoaXRlbVBhaXIsIG9wdGlvbnMuY2FzZVNlbnNpdGl2ZSk7XHJcbiAgICBzd2l0Y2ggKG9wdGlvbnMuZmlsdGVyVHlwZSkge1xyXG4gICAgICBjYXNlIE1hdFRhYmxlRmlsdGVyLkVRVUFMUzpcclxuICAgICAgICByZXR1cm4gdGhpcy5lcXVhbHMoaXRlbVBhaXIpO1xyXG4gICAgICBjYXNlIE1hdFRhYmxlRmlsdGVyLkFOWVdIRVJFOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmFueXdoZXJlKGl0ZW1QYWlyKTtcclxuICAgICAgY2FzZSBNYXRUYWJsZUZpbHRlci5TVEFSVFNfV0lUSDpcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGFydHNXaXRoKGl0ZW1QYWlyKTtcclxuICAgICAgY2FzZSBNYXRUYWJsZUZpbHRlci5FTkRTX1dJVEg6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kc1dpdGgoaXRlbVBhaXIpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVMZXR0ZXJDYXNpbmcoaXRlbVBhaXI6IEl0ZW1QYWlyPGFueT4sIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICghY2FzZVNlbnNpdGl2ZSkge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybUFsbExvd2VyQ2FzZShpdGVtUGFpcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyYW5zZm9ybUFsbExvd2VyQ2FzZShvYmplY3Q6IGFueSkge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XTtcclxuICAgICAgaWYgKExPREFTSC5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICBvYmplY3Rba2V5XSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1BbGxMb3dlckNhc2UodmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==