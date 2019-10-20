/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MatTableFilter } from '../mat-table-filter.enum';
/**
 * @abstract
 * @template T
 */
export class FilterPredicate {
    /**
     * @param {?} itemPair
     * @param {?} filterType
     * @return {?}
     */
    executeCondition(itemPair, filterType) {
        switch (filterType) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXByZWRpY2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1maWx0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZmlsdGVyLXByZWRpY2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUcxRCxNQUFNLE9BQWdCLGVBQWU7Ozs7OztJQU81QixnQkFBZ0IsQ0FBQyxRQUFxQixFQUFFLFVBQTBCO1FBQ3ZFLFFBQVEsVUFBVSxFQUFFO1lBQ2xCLEtBQUssY0FBYyxDQUFDLE1BQU07Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixLQUFLLGNBQWMsQ0FBQyxRQUFRO2dCQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakMsS0FBSyxjQUFjLENBQUMsV0FBVztnQkFDN0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLEtBQUssY0FBYyxDQUFDLFNBQVM7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQztnQkFDRSxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0gsQ0FBQztDQUNGOzs7Ozs7O0lBbkJDLDJEQUF1RDs7Ozs7O0lBQ3ZELDZEQUF5RDs7Ozs7O0lBQ3pELCtEQUEyRDs7Ozs7O0lBQzNELDZEQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hdFRhYmxlRmlsdGVyIH0gZnJvbSAnLi4vbWF0LXRhYmxlLWZpbHRlci5lbnVtJztcclxuaW1wb3J0IHsgSXRlbVBhaXIgfSBmcm9tICcuLi9pdGVtLXBhaXInO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpbHRlclByZWRpY2F0ZTxUPiB7XHJcblxyXG4gIHB1YmxpYyBhYnN0cmFjdCBlcXVhbHMoaXRlbVBhaXI6IEl0ZW1QYWlyPFQ+KTogYm9vbGVhbjtcclxuICBwdWJsaWMgYWJzdHJhY3QgYW55d2hlcmUoaXRlbVBhaXI6IEl0ZW1QYWlyPFQ+KTogYm9vbGVhbjtcclxuICBwdWJsaWMgYWJzdHJhY3Qgc3RhcnRzV2l0aChpdGVtUGFpcjogSXRlbVBhaXI8VD4pOiBib29sZWFuO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBlbmRzV2l0aChpdGVtUGFpcjogSXRlbVBhaXI8VD4pOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgZXhlY3V0ZUNvbmRpdGlvbihpdGVtUGFpcjogSXRlbVBhaXI8VD4sIGZpbHRlclR5cGU6IE1hdFRhYmxlRmlsdGVyKTogYm9vbGVhbiB7XHJcbiAgICBzd2l0Y2ggKGZpbHRlclR5cGUpIHtcclxuICAgICAgY2FzZSBNYXRUYWJsZUZpbHRlci5FUVVBTFM6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXF1YWxzKGl0ZW1QYWlyKTtcclxuICAgICAgY2FzZSBNYXRUYWJsZUZpbHRlci5BTllXSEVSRTpcclxuICAgICAgICByZXR1cm4gdGhpcy5hbnl3aGVyZShpdGVtUGFpcik7XHJcbiAgICAgIGNhc2UgTWF0VGFibGVGaWx0ZXIuU1RBUlRTX1dJVEg6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRzV2l0aChpdGVtUGFpcik7XHJcbiAgICAgIGNhc2UgTWF0VGFibGVGaWx0ZXIuRU5EU19XSVRIOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZHNXaXRoKGl0ZW1QYWlyKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19