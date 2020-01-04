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
var /**
 * @abstract
 * @template T
 */
FilterPredicate = /** @class */ (function () {
    function FilterPredicate() {
    }
    /**
     * @param {?} itemPair
     * @param {?} options
     * @return {?}
     */
    FilterPredicate.prototype.executeCondition = /**
     * @param {?} itemPair
     * @param {?} options
     * @return {?}
     */
    function (itemPair, options) {
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
    };
    /**
     * @private
     * @param {?} itemPair
     * @param {?} caseSensitive
     * @return {?}
     */
    FilterPredicate.prototype.handleLetterCasing = /**
     * @private
     * @param {?} itemPair
     * @param {?} caseSensitive
     * @return {?}
     */
    function (itemPair, caseSensitive) {
        if (!caseSensitive) {
            this.transformAllLowerCase(itemPair);
        }
    };
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    FilterPredicate.prototype.transformAllLowerCase = /**
     * @private
     * @param {?} object
     * @return {?}
     */
    function (object) {
        // tslint:disable-next-line:forin
        for (var key in object) {
            /** @type {?} */
            var value = object[key];
            if (LODASH.isString(value)) {
                object[key] = value.toLowerCase();
            }
            else {
                this.transformAllLowerCase(value);
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXByZWRpY2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1maWx0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZmlsdGVyLXByZWRpY2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTFELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7OztBQUdqQzs7Ozs7SUFBQTtJQXdDQSxDQUFDOzs7Ozs7SUFqQ1EsMENBQWdCOzs7OztJQUF2QixVQUF3QixRQUFxQixFQUFFLE9BQWdCO1FBQzdELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELFFBQVEsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUMxQixLQUFLLGNBQWMsQ0FBQyxNQUFNO2dCQUN4QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsS0FBSyxjQUFjLENBQUMsUUFBUTtnQkFDMUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssY0FBYyxDQUFDLFdBQVc7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxLQUFLLGNBQWMsQ0FBQyxTQUFTO2dCQUMzQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakM7Z0JBQ0UsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7Ozs7SUFFTyw0Q0FBa0I7Ozs7OztJQUExQixVQUEyQixRQUF1QixFQUFFLGFBQXNCO1FBQ3hFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sK0NBQXFCOzs7OztJQUE3QixVQUE4QixNQUFXO1FBQ3ZDLGlDQUFpQztRQUNqQyxLQUFLLElBQU0sR0FBRyxJQUFJLE1BQU0sRUFBRTs7Z0JBQ2xCLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ3pCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNuQztpQkFBTTtnQkFDTCxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkM7U0FDRjtJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7Ozs7Ozs7Ozs7OztJQXRDQywyREFBdUQ7Ozs7OztJQUN2RCw2REFBeUQ7Ozs7OztJQUN6RCwrREFBMkQ7Ozs7OztJQUMzRCw2REFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXRUYWJsZUZpbHRlciB9IGZyb20gJy4uL21hdC10YWJsZS1maWx0ZXIuZW51bSc7XHJcbmltcG9ydCB7IEl0ZW1QYWlyIH0gZnJvbSAnLi4vaXRlbS1wYWlyJztcclxuaW1wb3J0ICogYXMgTE9EQVNIIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi9vcHRpb25zJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWx0ZXJQcmVkaWNhdGU8VD4ge1xyXG5cclxuICBwdWJsaWMgYWJzdHJhY3QgZXF1YWxzKGl0ZW1QYWlyOiBJdGVtUGFpcjxUPik6IGJvb2xlYW47XHJcbiAgcHVibGljIGFic3RyYWN0IGFueXdoZXJlKGl0ZW1QYWlyOiBJdGVtUGFpcjxUPik6IGJvb2xlYW47XHJcbiAgcHVibGljIGFic3RyYWN0IHN0YXJ0c1dpdGgoaXRlbVBhaXI6IEl0ZW1QYWlyPFQ+KTogYm9vbGVhbjtcclxuICBwdWJsaWMgYWJzdHJhY3QgZW5kc1dpdGgoaXRlbVBhaXI6IEl0ZW1QYWlyPFQ+KTogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIGV4ZWN1dGVDb25kaXRpb24oaXRlbVBhaXI6IEl0ZW1QYWlyPFQ+LCBvcHRpb25zOiBPcHRpb25zKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLmhhbmRsZUxldHRlckNhc2luZyhpdGVtUGFpciwgb3B0aW9ucy5jYXNlU2Vuc2l0aXZlKTtcclxuICAgIHN3aXRjaCAob3B0aW9ucy5maWx0ZXJUeXBlKSB7XHJcbiAgICAgIGNhc2UgTWF0VGFibGVGaWx0ZXIuRVFVQUxTOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmVxdWFscyhpdGVtUGFpcik7XHJcbiAgICAgIGNhc2UgTWF0VGFibGVGaWx0ZXIuQU5ZV0hFUkU6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYW55d2hlcmUoaXRlbVBhaXIpO1xyXG4gICAgICBjYXNlIE1hdFRhYmxlRmlsdGVyLlNUQVJUU19XSVRIOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0c1dpdGgoaXRlbVBhaXIpO1xyXG4gICAgICBjYXNlIE1hdFRhYmxlRmlsdGVyLkVORFNfV0lUSDpcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmRzV2l0aChpdGVtUGFpcik7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUxldHRlckNhc2luZyhpdGVtUGFpcjogSXRlbVBhaXI8YW55PiwgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCFjYXNlU2Vuc2l0aXZlKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtQWxsTG93ZXJDYXNlKGl0ZW1QYWlyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhbnNmb3JtQWxsTG93ZXJDYXNlKG9iamVjdDogYW55KSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IG9iamVjdFtrZXldO1xyXG4gICAgICBpZiAoTE9EQVNILmlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgIG9iamVjdFtrZXldID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybUFsbExvd2VyQ2FzZSh2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19