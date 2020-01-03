/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatTableFilter } from './mat-table-filter.enum';
import * as i0 from "@angular/core";
var MatTableFilterService = /** @class */ (function () {
    function MatTableFilterService() {
    }
    /**
     * @param {?} exampleEntity
     * @param {?} item
     * @param {?} filterType
     * @param {?} caseSensitive
     * @return {?}
     */
    MatTableFilterService.prototype.filterPredicate = /**
     * @param {?} exampleEntity
     * @param {?} item
     * @param {?} filterType
     * @param {?} caseSensitive
     * @return {?}
     */
    function (exampleEntity, item, filterType, caseSensitive) {
        /** @type {?} */
        var exampleEntityObjectKeys = Object.keys(exampleEntity);
        for (var i = 0; i < exampleEntityObjectKeys.length; i++) {
            /** @type {?} */
            var exampleColumn = exampleEntityObjectKeys[i];
            /** @type {?} */
            var exampleColumnValue = exampleEntity[exampleColumn];
            /** @type {?} */
            var itemColumnValue = item[exampleColumn];
            if (!exampleColumnValue || exampleColumnValue instanceof Array) {
                // if example entity's property is undefined/null/empty then it means the caller wants all the data
                // also if there is an array property we are skipping
                continue;
            }
            if (itemColumnValue) {
                // if example entity has additional columns then search fails
                if (this.isAlphaNumeric(itemColumnValue)) {
                    if (!this.filterPredicateAlphaNumeric(exampleColumnValue, itemColumnValue, filterType, caseSensitive)) {
                        return false;
                    }
                }
                else if (this.isBoolean(itemColumnValue)) {
                    if (itemColumnValue !== exampleColumnValue) {
                        return false;
                    }
                }
                else {
                    if (!this.filterPredicate(exampleColumnValue, itemColumnValue, filterType, caseSensitive)) {
                        // if one of the inner properties returns true, this shouldnt affect the whole item's filtering
                        // however if it returns false then the item must not be in the list
                        return false;
                    }
                }
            }
            else {
                return false;
            }
        }
        return true;
    };
    /**
     * @private
     * @param {?} exampleColumnValue
     * @param {?} itemColumnValue
     * @param {?} filterType
     * @param {?} caseSensitive
     * @return {?}
     */
    MatTableFilterService.prototype.filterPredicateAlphaNumeric = /**
     * @private
     * @param {?} exampleColumnValue
     * @param {?} itemColumnValue
     * @param {?} filterType
     * @param {?} caseSensitive
     * @return {?}
     */
    function (exampleColumnValue, itemColumnValue, filterType, caseSensitive) {
        /** @type {?} */
        var exampleString = exampleColumnValue.toString();
        /** @type {?} */
        var itemString = itemColumnValue.toString();
        if (!caseSensitive) {
            exampleString = exampleString.toUpperCase();
            itemString = itemString.toUpperCase();
        }
        /** @type {?} */
        var result = true;
        switch (filterType) {
            case MatTableFilter.EQUALS:
                if (exampleColumnValue !== itemColumnValue) {
                    result = false;
                }
                break;
            case MatTableFilter.ANYWHERE:
                if (!itemString.includes(exampleString)) {
                    result = false;
                }
                break;
            case MatTableFilter.STARTS_WITH:
                if (!itemString.startsWith(exampleString)) {
                    result = false;
                }
                break;
            case MatTableFilter.ENDS_WITH:
                if (!itemString.endsWith(exampleString)) {
                    result = false;
                }
                break;
            default:
                break;
        }
        return result;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MatTableFilterService.prototype.isAlphaNumeric = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'string' || typeof value === 'number';
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MatTableFilterService.prototype.isBoolean = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'boolean';
    };
    MatTableFilterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MatTableFilterService.ctorParameters = function () { return []; };
    /** @nocollapse */ MatTableFilterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(); }, token: MatTableFilterService, providedIn: "root" });
    return MatTableFilterService;
}());
export { MatTableFilterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXRhYmxlLWZpbHRlci8iLCJzb3VyY2VzIjpbImxpYi9tYXQtdGFibGUtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUV6RDtJQUlFO0lBQWUsQ0FBQzs7Ozs7Ozs7SUFFVCwrQ0FBZTs7Ozs7OztJQUF0QixVQUF1QixhQUFrQixFQUFFLElBQVMsRUFBRSxVQUEwQixFQUFFLGFBQXNCOztZQUNoRyx1QkFBdUIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMxRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsdUJBQXVCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDakQsYUFBYSxHQUFHLHVCQUF1QixDQUFDLENBQUMsQ0FBQzs7Z0JBQzFDLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUM7O2dCQUNqRCxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUMzQyxJQUFJLENBQUMsa0JBQWtCLElBQUksa0JBQWtCLFlBQVksS0FBSyxFQUFFO2dCQUM5RCxtR0FBbUc7Z0JBQ25HLHFEQUFxRDtnQkFDckQsU0FBUzthQUNWO1lBQ0QsSUFBSSxlQUFlLEVBQUU7Z0JBQ25CLDZEQUE2RDtnQkFDN0QsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUFFO29CQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDLEVBQUU7d0JBQ3JHLE9BQU8sS0FBSyxDQUFDO3FCQUNkO2lCQUNGO3FCQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBRTtvQkFDMUMsSUFBSSxlQUFlLEtBQUssa0JBQWtCLEVBQUU7d0JBQzFDLE9BQU8sS0FBSyxDQUFDO3FCQUNkO2lCQUNGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDLEVBQUU7d0JBQ3pGLCtGQUErRjt3QkFDL0Ysb0VBQW9FO3dCQUNwRSxPQUFPLEtBQUssQ0FBQztxQkFDZDtpQkFDRjthQUNGO2lCQUFNO2dCQUNMLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7O0lBRU8sMkRBQTJCOzs7Ozs7OztJQUFuQyxVQUNFLGtCQUFtQyxFQUNuQyxlQUFnQyxFQUNoQyxVQUEwQixFQUMxQixhQUFzQjs7WUFFbEIsYUFBYSxHQUFHLGtCQUFrQixDQUFDLFFBQVEsRUFBRTs7WUFDN0MsVUFBVSxHQUFHLGVBQWUsQ0FBQyxRQUFRLEVBQUU7UUFDM0MsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixhQUFhLEdBQUcsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVDLFVBQVUsR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdkM7O1lBQ0csTUFBTSxHQUFHLElBQUk7UUFDakIsUUFBUSxVQUFVLEVBQUU7WUFDbEIsS0FBSyxjQUFjLENBQUMsTUFBTTtnQkFDeEIsSUFBSSxrQkFBa0IsS0FBSyxlQUFlLEVBQUU7b0JBQzFDLE1BQU0sR0FBRyxLQUFLLENBQUM7aUJBQ2hCO2dCQUNELE1BQU07WUFDUixLQUFLLGNBQWMsQ0FBQyxRQUFRO2dCQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDdkMsTUFBTSxHQUFHLEtBQUssQ0FBQztpQkFDaEI7Z0JBQ0QsTUFBTTtZQUNSLEtBQUssY0FBYyxDQUFDLFdBQVc7Z0JBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUN6QyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUNoQjtnQkFDRCxNQUFNO1lBQ1IsS0FBSyxjQUFjLENBQUMsU0FBUztnQkFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQ3ZDLE1BQU0sR0FBRyxLQUFLLENBQUM7aUJBQ2hCO2dCQUNELE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFTyw4Q0FBYzs7Ozs7SUFBdEIsVUFBdUIsS0FBVTtRQUMvQixPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUM7SUFDaEUsQ0FBQzs7Ozs7O0lBRU8seUNBQVM7Ozs7O0lBQWpCLFVBQWtCLEtBQVU7UUFDMUIsT0FBTyxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUM7SUFDcEMsQ0FBQzs7Z0JBdkZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O2dDQUxEO0NBMkZDLEFBeEZELElBd0ZDO1NBckZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFRhYmxlRmlsdGVyIH0gZnJvbSAnLi9tYXQtdGFibGUtZmlsdGVyLmVudW0nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUZpbHRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGZpbHRlclByZWRpY2F0ZShleGFtcGxlRW50aXR5OiBhbnksIGl0ZW06IGFueSwgZmlsdGVyVHlwZTogTWF0VGFibGVGaWx0ZXIsIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBjb25zdCBleGFtcGxlRW50aXR5T2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKGV4YW1wbGVFbnRpdHkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhhbXBsZUVudGl0eU9iamVjdEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGV4YW1wbGVDb2x1bW4gPSBleGFtcGxlRW50aXR5T2JqZWN0S2V5c1tpXTtcbiAgICAgIGNvbnN0IGV4YW1wbGVDb2x1bW5WYWx1ZSA9IGV4YW1wbGVFbnRpdHlbZXhhbXBsZUNvbHVtbl07XG4gICAgICBjb25zdCBpdGVtQ29sdW1uVmFsdWUgPSBpdGVtW2V4YW1wbGVDb2x1bW5dO1xuICAgICAgaWYgKCFleGFtcGxlQ29sdW1uVmFsdWUgfHwgZXhhbXBsZUNvbHVtblZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgLy8gaWYgZXhhbXBsZSBlbnRpdHkncyBwcm9wZXJ0eSBpcyB1bmRlZmluZWQvbnVsbC9lbXB0eSB0aGVuIGl0IG1lYW5zIHRoZSBjYWxsZXIgd2FudHMgYWxsIHRoZSBkYXRhXG4gICAgICAgIC8vIGFsc28gaWYgdGhlcmUgaXMgYW4gYXJyYXkgcHJvcGVydHkgd2UgYXJlIHNraXBwaW5nXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1Db2x1bW5WYWx1ZSkge1xuICAgICAgICAvLyBpZiBleGFtcGxlIGVudGl0eSBoYXMgYWRkaXRpb25hbCBjb2x1bW5zIHRoZW4gc2VhcmNoIGZhaWxzXG4gICAgICAgIGlmICh0aGlzLmlzQWxwaGFOdW1lcmljKGl0ZW1Db2x1bW5WYWx1ZSkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuZmlsdGVyUHJlZGljYXRlQWxwaGFOdW1lcmljKGV4YW1wbGVDb2x1bW5WYWx1ZSwgaXRlbUNvbHVtblZhbHVlLCBmaWx0ZXJUeXBlLCBjYXNlU2Vuc2l0aXZlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQm9vbGVhbihpdGVtQ29sdW1uVmFsdWUpKSB7XG4gICAgICAgICAgaWYgKGl0ZW1Db2x1bW5WYWx1ZSAhPT0gZXhhbXBsZUNvbHVtblZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghdGhpcy5maWx0ZXJQcmVkaWNhdGUoZXhhbXBsZUNvbHVtblZhbHVlLCBpdGVtQ29sdW1uVmFsdWUsIGZpbHRlclR5cGUsIGNhc2VTZW5zaXRpdmUpKSB7XG4gICAgICAgICAgICAvLyBpZiBvbmUgb2YgdGhlIGlubmVyIHByb3BlcnRpZXMgcmV0dXJucyB0cnVlLCB0aGlzIHNob3VsZG50IGFmZmVjdCB0aGUgd2hvbGUgaXRlbSdzIGZpbHRlcmluZ1xuICAgICAgICAgICAgLy8gaG93ZXZlciBpZiBpdCByZXR1cm5zIGZhbHNlIHRoZW4gdGhlIGl0ZW0gbXVzdCBub3QgYmUgaW4gdGhlIGxpc3RcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlclByZWRpY2F0ZUFscGhhTnVtZXJpYyhcbiAgICBleGFtcGxlQ29sdW1uVmFsdWU6IG51bWJlciB8IHN0cmluZyxcbiAgICBpdGVtQ29sdW1uVmFsdWU6IG51bWJlciB8IHN0cmluZyxcbiAgICBmaWx0ZXJUeXBlOiBNYXRUYWJsZUZpbHRlcixcbiAgICBjYXNlU2Vuc2l0aXZlOiBib29sZWFuXG4gICk6IGJvb2xlYW4ge1xuICAgIGxldCBleGFtcGxlU3RyaW5nID0gZXhhbXBsZUNvbHVtblZhbHVlLnRvU3RyaW5nKCk7XG4gICAgbGV0IGl0ZW1TdHJpbmcgPSBpdGVtQ29sdW1uVmFsdWUudG9TdHJpbmcoKTtcbiAgICBpZiAoIWNhc2VTZW5zaXRpdmUpIHtcbiAgICAgIGV4YW1wbGVTdHJpbmcgPSBleGFtcGxlU3RyaW5nLnRvVXBwZXJDYXNlKCk7XG4gICAgICBpdGVtU3RyaW5nID0gaXRlbVN0cmluZy50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICBzd2l0Y2ggKGZpbHRlclR5cGUpIHtcbiAgICAgIGNhc2UgTWF0VGFibGVGaWx0ZXIuRVFVQUxTOlxuICAgICAgICBpZiAoZXhhbXBsZUNvbHVtblZhbHVlICE9PSBpdGVtQ29sdW1uVmFsdWUpIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTWF0VGFibGVGaWx0ZXIuQU5ZV0hFUkU6XG4gICAgICAgIGlmICghaXRlbVN0cmluZy5pbmNsdWRlcyhleGFtcGxlU3RyaW5nKSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNYXRUYWJsZUZpbHRlci5TVEFSVFNfV0lUSDpcbiAgICAgICAgaWYgKCFpdGVtU3RyaW5nLnN0YXJ0c1dpdGgoZXhhbXBsZVN0cmluZykpIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTWF0VGFibGVGaWx0ZXIuRU5EU19XSVRIOlxuICAgICAgICBpZiAoIWl0ZW1TdHJpbmcuZW5kc1dpdGgoZXhhbXBsZVN0cmluZykpIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBpc0FscGhhTnVtZXJpYyh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbiAgfVxuXG4gIHByaXZhdGUgaXNCb29sZWFuKHZhbHVlOiBhbnkpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG4gIH1cbn1cbiJdfQ==