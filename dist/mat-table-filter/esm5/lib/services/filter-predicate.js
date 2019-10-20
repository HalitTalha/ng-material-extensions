/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MatTableFilter } from '../mat-table-filter.enum';
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
FilterPredicate = /** @class */ (function () {
    function FilterPredicate() {
    }
    /**
     * @param {?} itemPair
     * @param {?} filterType
     * @return {?}
     */
    FilterPredicate.prototype.executeCondition = /**
     * @param {?} itemPair
     * @param {?} filterType
     * @return {?}
     */
    function (itemPair, filterType) {
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
    };
    return FilterPredicate;
}());
/**
 * @abstract
 * @template T
 */
export { FilterPredicate };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXByZWRpY2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1maWx0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZmlsdGVyLXByZWRpY2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUcxRDs7Ozs7SUFBQTtJQXFCQSxDQUFDOzs7Ozs7SUFkUSwwQ0FBZ0I7Ozs7O0lBQXZCLFVBQXdCLFFBQXFCLEVBQUUsVUFBMEI7UUFDdkUsUUFBUSxVQUFVLEVBQUU7WUFDbEIsS0FBSyxjQUFjLENBQUMsTUFBTTtnQkFDeEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLEtBQUssY0FBYyxDQUFDLFFBQVE7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxLQUFLLGNBQWMsQ0FBQyxXQUFXO2dCQUM3QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkMsS0FBSyxjQUFjLENBQUMsU0FBUztnQkFDM0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDO2dCQUNFLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDOzs7Ozs7Ozs7Ozs7SUFuQkMsMkRBQXVEOzs7Ozs7SUFDdkQsNkRBQXlEOzs7Ozs7SUFDekQsK0RBQTJEOzs7Ozs7SUFDM0QsNkRBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWF0VGFibGVGaWx0ZXIgfSBmcm9tICcuLi9tYXQtdGFibGUtZmlsdGVyLmVudW0nO1xyXG5pbXBvcnQgeyBJdGVtUGFpciB9IGZyb20gJy4uL2l0ZW0tcGFpcic7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmlsdGVyUHJlZGljYXRlPFQ+IHtcclxuXHJcbiAgcHVibGljIGFic3RyYWN0IGVxdWFscyhpdGVtUGFpcjogSXRlbVBhaXI8VD4pOiBib29sZWFuO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBhbnl3aGVyZShpdGVtUGFpcjogSXRlbVBhaXI8VD4pOiBib29sZWFuO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBzdGFydHNXaXRoKGl0ZW1QYWlyOiBJdGVtUGFpcjxUPik6IGJvb2xlYW47XHJcbiAgcHVibGljIGFic3RyYWN0IGVuZHNXaXRoKGl0ZW1QYWlyOiBJdGVtUGFpcjxUPik6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBleGVjdXRlQ29uZGl0aW9uKGl0ZW1QYWlyOiBJdGVtUGFpcjxUPiwgZmlsdGVyVHlwZTogTWF0VGFibGVGaWx0ZXIpOiBib29sZWFuIHtcclxuICAgIHN3aXRjaCAoZmlsdGVyVHlwZSkge1xyXG4gICAgICBjYXNlIE1hdFRhYmxlRmlsdGVyLkVRVUFMUzpcclxuICAgICAgICByZXR1cm4gdGhpcy5lcXVhbHMoaXRlbVBhaXIpO1xyXG4gICAgICBjYXNlIE1hdFRhYmxlRmlsdGVyLkFOWVdIRVJFOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmFueXdoZXJlKGl0ZW1QYWlyKTtcclxuICAgICAgY2FzZSBNYXRUYWJsZUZpbHRlci5TVEFSVFNfV0lUSDpcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGFydHNXaXRoKGl0ZW1QYWlyKTtcclxuICAgICAgY2FzZSBNYXRUYWJsZUZpbHRlci5FTkRTX1dJVEg6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kc1dpdGgoaXRlbVBhaXIpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=