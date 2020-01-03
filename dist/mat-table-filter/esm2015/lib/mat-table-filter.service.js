/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatTableFilter } from './mat-table-filter.enum';
import * as i0 from "@angular/core";
export class MatTableFilterService {
    constructor() { }
    /**
     * @param {?} exampleEntity
     * @param {?} item
     * @param {?} filterType
     * @param {?} caseSensitive
     * @return {?}
     */
    filterPredicate(exampleEntity, item, filterType, caseSensitive) {
        /** @type {?} */
        const exampleEntityObjectKeys = Object.keys(exampleEntity);
        for (let i = 0; i < exampleEntityObjectKeys.length; i++) {
            /** @type {?} */
            const exampleColumn = exampleEntityObjectKeys[i];
            /** @type {?} */
            const exampleColumnValue = exampleEntity[exampleColumn];
            /** @type {?} */
            const itemColumnValue = item[exampleColumn];
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
    }
    /**
     * @private
     * @param {?} exampleColumnValue
     * @param {?} itemColumnValue
     * @param {?} filterType
     * @param {?} caseSensitive
     * @return {?}
     */
    filterPredicateAlphaNumeric(exampleColumnValue, itemColumnValue, filterType, caseSensitive) {
        /** @type {?} */
        let exampleString = exampleColumnValue.toString();
        /** @type {?} */
        let itemString = itemColumnValue.toString();
        if (!caseSensitive) {
            exampleString = exampleString.toUpperCase();
            itemString = itemString.toUpperCase();
        }
        /** @type {?} */
        let result = true;
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
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isAlphaNumeric(value) {
        return typeof value === 'string' || typeof value === 'number';
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isBoolean(value) {
        return typeof value === 'boolean';
    }
}
MatTableFilterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MatTableFilterService.ctorParameters = () => [];
/** @nocollapse */ MatTableFilterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(); }, token: MatTableFilterService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXRhYmxlLWZpbHRlci8iLCJzb3VyY2VzIjpbImxpYi9tYXQtdGFibGUtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUt6RCxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLGdCQUFlLENBQUM7Ozs7Ozs7O0lBRVQsZUFBZSxDQUFDLGFBQWtCLEVBQUUsSUFBUyxFQUFFLFVBQTBCLEVBQUUsYUFBc0I7O2NBQ2hHLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzFELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUNqRCxhQUFhLEdBQUcsdUJBQXVCLENBQUMsQ0FBQyxDQUFDOztrQkFDMUMsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQzs7a0JBQ2pELGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzNDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxrQkFBa0IsWUFBWSxLQUFLLEVBQUU7Z0JBQzlELG1HQUFtRztnQkFDbkcscURBQXFEO2dCQUNyRCxTQUFTO2FBQ1Y7WUFDRCxJQUFJLGVBQWUsRUFBRTtnQkFDbkIsNkRBQTZEO2dCQUM3RCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUMsRUFBRTt3QkFDckcsT0FBTyxLQUFLLENBQUM7cUJBQ2Q7aUJBQ0Y7cUJBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxFQUFFO29CQUMxQyxJQUFJLGVBQWUsS0FBSyxrQkFBa0IsRUFBRTt3QkFDMUMsT0FBTyxLQUFLLENBQUM7cUJBQ2Q7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUMsRUFBRTt3QkFDekYsK0ZBQStGO3dCQUMvRixvRUFBb0U7d0JBQ3BFLE9BQU8sS0FBSyxDQUFDO3FCQUNkO2lCQUNGO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7Ozs7SUFFTywyQkFBMkIsQ0FDakMsa0JBQW1DLEVBQ25DLGVBQWdDLEVBQ2hDLFVBQTBCLEVBQzFCLGFBQXNCOztZQUVsQixhQUFhLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxFQUFFOztZQUM3QyxVQUFVLEdBQUcsZUFBZSxDQUFDLFFBQVEsRUFBRTtRQUMzQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLGFBQWEsR0FBRyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN2Qzs7WUFDRyxNQUFNLEdBQUcsSUFBSTtRQUNqQixRQUFRLFVBQVUsRUFBRTtZQUNsQixLQUFLLGNBQWMsQ0FBQyxNQUFNO2dCQUN4QixJQUFJLGtCQUFrQixLQUFLLGVBQWUsRUFBRTtvQkFDMUMsTUFBTSxHQUFHLEtBQUssQ0FBQztpQkFDaEI7Z0JBQ0QsTUFBTTtZQUNSLEtBQUssY0FBYyxDQUFDLFFBQVE7Z0JBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUN2QyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUNoQjtnQkFDRCxNQUFNO1lBQ1IsS0FBSyxjQUFjLENBQUMsV0FBVztnQkFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQ3pDLE1BQU0sR0FBRyxLQUFLLENBQUM7aUJBQ2hCO2dCQUNELE1BQU07WUFDUixLQUFLLGNBQWMsQ0FBQyxTQUFTO2dCQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDdkMsTUFBTSxHQUFHLEtBQUssQ0FBQztpQkFDaEI7Z0JBQ0QsTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxLQUFVO1FBQy9CLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQztJQUNoRSxDQUFDOzs7Ozs7SUFFTyxTQUFTLENBQUMsS0FBVTtRQUMxQixPQUFPLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQztJQUNwQyxDQUFDOzs7WUF2RkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0VGFibGVGaWx0ZXIgfSBmcm9tICcuL21hdC10YWJsZS1maWx0ZXIuZW51bSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRmlsdGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgZmlsdGVyUHJlZGljYXRlKGV4YW1wbGVFbnRpdHk6IGFueSwgaXRlbTogYW55LCBmaWx0ZXJUeXBlOiBNYXRUYWJsZUZpbHRlciwgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGV4YW1wbGVFbnRpdHlPYmplY3RLZXlzID0gT2JqZWN0LmtleXMoZXhhbXBsZUVudGl0eSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleGFtcGxlRW50aXR5T2JqZWN0S2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZXhhbXBsZUNvbHVtbiA9IGV4YW1wbGVFbnRpdHlPYmplY3RLZXlzW2ldO1xuICAgICAgY29uc3QgZXhhbXBsZUNvbHVtblZhbHVlID0gZXhhbXBsZUVudGl0eVtleGFtcGxlQ29sdW1uXTtcbiAgICAgIGNvbnN0IGl0ZW1Db2x1bW5WYWx1ZSA9IGl0ZW1bZXhhbXBsZUNvbHVtbl07XG4gICAgICBpZiAoIWV4YW1wbGVDb2x1bW5WYWx1ZSB8fCBleGFtcGxlQ29sdW1uVmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAvLyBpZiBleGFtcGxlIGVudGl0eSdzIHByb3BlcnR5IGlzIHVuZGVmaW5lZC9udWxsL2VtcHR5IHRoZW4gaXQgbWVhbnMgdGhlIGNhbGxlciB3YW50cyBhbGwgdGhlIGRhdGFcbiAgICAgICAgLy8gYWxzbyBpZiB0aGVyZSBpcyBhbiBhcnJheSBwcm9wZXJ0eSB3ZSBhcmUgc2tpcHBpbmdcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbUNvbHVtblZhbHVlKSB7XG4gICAgICAgIC8vIGlmIGV4YW1wbGUgZW50aXR5IGhhcyBhZGRpdGlvbmFsIGNvbHVtbnMgdGhlbiBzZWFyY2ggZmFpbHNcbiAgICAgICAgaWYgKHRoaXMuaXNBbHBoYU51bWVyaWMoaXRlbUNvbHVtblZhbHVlKSkge1xuICAgICAgICAgIGlmICghdGhpcy5maWx0ZXJQcmVkaWNhdGVBbHBoYU51bWVyaWMoZXhhbXBsZUNvbHVtblZhbHVlLCBpdGVtQ29sdW1uVmFsdWUsIGZpbHRlclR5cGUsIGNhc2VTZW5zaXRpdmUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNCb29sZWFuKGl0ZW1Db2x1bW5WYWx1ZSkpIHtcbiAgICAgICAgICBpZiAoaXRlbUNvbHVtblZhbHVlICE9PSBleGFtcGxlQ29sdW1uVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmZpbHRlclByZWRpY2F0ZShleGFtcGxlQ29sdW1uVmFsdWUsIGl0ZW1Db2x1bW5WYWx1ZSwgZmlsdGVyVHlwZSwgY2FzZVNlbnNpdGl2ZSkpIHtcbiAgICAgICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgaW5uZXIgcHJvcGVydGllcyByZXR1cm5zIHRydWUsIHRoaXMgc2hvdWxkbnQgYWZmZWN0IHRoZSB3aG9sZSBpdGVtJ3MgZmlsdGVyaW5nXG4gICAgICAgICAgICAvLyBob3dldmVyIGlmIGl0IHJldHVybnMgZmFsc2UgdGhlbiB0aGUgaXRlbSBtdXN0IG5vdCBiZSBpbiB0aGUgbGlzdFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyUHJlZGljYXRlQWxwaGFOdW1lcmljKFxuICAgIGV4YW1wbGVDb2x1bW5WYWx1ZTogbnVtYmVyIHwgc3RyaW5nLFxuICAgIGl0ZW1Db2x1bW5WYWx1ZTogbnVtYmVyIHwgc3RyaW5nLFxuICAgIGZpbHRlclR5cGU6IE1hdFRhYmxlRmlsdGVyLFxuICAgIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW5cbiAgKTogYm9vbGVhbiB7XG4gICAgbGV0IGV4YW1wbGVTdHJpbmcgPSBleGFtcGxlQ29sdW1uVmFsdWUudG9TdHJpbmcoKTtcbiAgICBsZXQgaXRlbVN0cmluZyA9IGl0ZW1Db2x1bW5WYWx1ZS50b1N0cmluZygpO1xuICAgIGlmICghY2FzZVNlbnNpdGl2ZSkge1xuICAgICAgZXhhbXBsZVN0cmluZyA9IGV4YW1wbGVTdHJpbmcudG9VcHBlckNhc2UoKTtcbiAgICAgIGl0ZW1TdHJpbmcgPSBpdGVtU3RyaW5nLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgIHN3aXRjaCAoZmlsdGVyVHlwZSkge1xuICAgICAgY2FzZSBNYXRUYWJsZUZpbHRlci5FUVVBTFM6XG4gICAgICAgIGlmIChleGFtcGxlQ29sdW1uVmFsdWUgIT09IGl0ZW1Db2x1bW5WYWx1ZSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNYXRUYWJsZUZpbHRlci5BTllXSEVSRTpcbiAgICAgICAgaWYgKCFpdGVtU3RyaW5nLmluY2x1ZGVzKGV4YW1wbGVTdHJpbmcpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1hdFRhYmxlRmlsdGVyLlNUQVJUU19XSVRIOlxuICAgICAgICBpZiAoIWl0ZW1TdHJpbmcuc3RhcnRzV2l0aChleGFtcGxlU3RyaW5nKSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNYXRUYWJsZUZpbHRlci5FTkRTX1dJVEg6XG4gICAgICAgIGlmICghaXRlbVN0cmluZy5lbmRzV2l0aChleGFtcGxlU3RyaW5nKSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGlzQWxwaGFOdW1lcmljKHZhbHVlOiBhbnkpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0Jvb2xlYW4odmFsdWU6IGFueSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbiAgfVxufVxuIl19