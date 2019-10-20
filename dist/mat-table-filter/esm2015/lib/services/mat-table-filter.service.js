/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ArrayPredicateService } from './array-predicate.service';
import { AlphaNumericPredicateService } from './alpha-numeric-predicate.service';
import { Injectable } from '@angular/core';
import * as LODASH from 'lodash';
import { isFunction } from 'util';
import * as i0 from "@angular/core";
import * as i1 from "./alpha-numeric-predicate.service";
import * as i2 from "./array-predicate.service";
export class MatTableFilterService {
    /**
     * @param {?} _alphaNumericService
     * @param {?} _arrayService
     */
    constructor(_alphaNumericService, _arrayService) {
        this._alphaNumericService = _alphaNumericService;
        this._arrayService = _arrayService;
    }
    /**
     * @param {?} itemPair
     * @param {?} allOptions
     * @param {?} commonOptions
     * @param {?=} propertyName
     * @return {?}
     */
    filterPredicate(itemPair, allOptions, commonOptions, propertyName) {
        // tslint:disable-next-line:forin
        /** @type {?} */
        const exampleKeys = Object.keys(itemPair.example);
        for (const key of exampleKeys) {
            /** @type {?} */
            const exampleColumnValue = itemPair.example[key];
            if (LODASH.isNil(exampleColumnValue) || LODASH.every(exampleColumnValue, LODASH.isEmpty) && typeof exampleColumnValue !== 'boolean') {
                // if example entity's property is undefined/null/empty then it means the caller wants all the data
                continue;
            }
            if (itemPair.item.hasOwnProperty(key)) {
                // if example entity has additional columns then search fails
                /** @type {?} */
                const itemColumnValue = itemPair.item[key];
                /** @type {?} */
                const nextPropertyName = this.getNextPropertyName(propertyName, key);
                /** @type {?} */
                const options = this.getOptionsForColumn(commonOptions, allOptions, nextPropertyName);
                if (isFunction(options)) { // if user defined predicate is present for property
                    // if user defined predicate is present for property
                    /** @type {?} */
                    const customPredicate = (/** @type {?} */ (options));
                    if (!customPredicate(itemColumnValue)) {
                        return false;
                    }
                }
                else {
                    /** @type {?} */
                    const valuePair = { item: itemColumnValue, example: exampleColumnValue };
                    /** @type {?} */
                    const columnOptions = (/** @type {?} */ (options));
                    if (this.isAlphaNumeric(itemColumnValue)) {
                        this.handleLetterCasing(valuePair, columnOptions.caseSensitive);
                        if (!this._alphaNumericService.executeCondition(valuePair, columnOptions.filterType)) {
                            return false;
                        }
                    }
                    else if (LODASH.isArray(itemColumnValue)) {
                        if (!this._arrayService.executeCondition(valuePair, columnOptions.filterType)) {
                            return false;
                        }
                    }
                    else if (LODASH.isBoolean(itemColumnValue)) {
                        if (itemColumnValue !== exampleColumnValue) {
                            return false;
                        }
                    }
                    else {
                        if (!this.filterPredicate(valuePair, allOptions, options, nextPropertyName)) {
                            // if one of the inner properties returns true, this shouldnt affect the whole item's filtering
                            // however if it returns false then the item must not be in the list
                            return false;
                        }
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
     * @param {?} itemPair
     * @param {?} caseSensitive
     * @return {?}
     */
    handleLetterCasing(itemPair, caseSensitive) {
        if (!caseSensitive) {
            itemPair.example = itemPair.example.toUpperCase();
            itemPair.item = itemPair.item.toUpperCase();
        }
    }
    /**
     * @private
     * @param {?} commonOptions
     * @param {?} columnOptions
     * @param {?=} propertyName
     * @return {?}
     */
    getOptionsForColumn(commonOptions, columnOptions, propertyName) {
        if (columnOptions && columnOptions.hasOwnProperty(propertyName)) {
            return columnOptions[propertyName];
        }
        else {
            return commonOptions;
        }
    }
    /**
     * @private
     * @param {?} propertyName
     * @param {?} key
     * @return {?}
     */
    getNextPropertyName(propertyName, key) {
        return propertyName ? (propertyName + '.' + key) : key;
    }
    /**
     * @param {?} oldEntity
     * @param {?} newEntity
     * @return {?}
     */
    isChanged(oldEntity, newEntity) {
        return !LODASH.isEqual(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
    }
    /**
     * @param {?} object
     * @return {?}
     */
    toPlainJson(object) {
        if (object) {
            return JSON.parse(JSON.stringify(object));
        }
        else {
            return undefined;
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isAlphaNumeric(value) {
        return LODASH.isString(value) || LODASH.isNumber(value);
    }
}
MatTableFilterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MatTableFilterService.ctorParameters = () => [
    { type: AlphaNumericPredicateService },
    { type: ArrayPredicateService }
];
/** @nocollapse */ MatTableFilterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(i0.ɵɵinject(i1.AlphaNumericPredicateService), i0.ɵɵinject(i2.ArrayPredicateService)); }, token: MatTableFilterService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatTableFilterService.prototype._alphaNumericService;
    /**
     * @type {?}
     * @private
     */
    MatTableFilterService.prototype._arrayService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXRhYmxlLWZpbHRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tYXQtdGFibGUtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUtsQyxNQUFNLE9BQU8scUJBQXFCOzs7OztJQUNoQyxZQUFvQixvQkFBa0QsRUFBVSxhQUFvQztRQUFoRyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQThCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQXVCO0lBQUcsQ0FBQzs7Ozs7Ozs7SUFFakgsZUFBZSxDQUFDLFFBQXVCLEVBQUUsVUFBeUIsRUFDbEQsYUFBc0MsRUFBRSxZQUFxQjs7O2NBRTVFLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDakQsS0FBSyxNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUU7O2tCQUN2QixrQkFBa0IsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNoRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtnQkFDbkksbUdBQW1HO2dCQUNuRyxTQUFTO2FBQ1Y7WUFDRCxJQUFJLFFBQVEsQ0FBQyxJQUFJ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QUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsTUFBVztRQUM1QixJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNMLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLEtBQVU7UUFDL0IsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7O1lBM0ZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLDRCQUE0QjtZQUQ1QixxQkFBcUI7Ozs7Ozs7O0lBV2hCLHFEQUEwRDs7Ozs7SUFBRSw4Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5PcHRpb25zLCBQcmVkaWNhdGVGdW5jIH0gZnJvbSAnLi8uLi9jb2x1bW4tb3B0aW9ucyc7XG5pbXBvcnQgeyBJdGVtUGFpciB9IGZyb20gJy4vLi4vaXRlbS1wYWlyJztcbmltcG9ydCB7IEFycmF5UHJlZGljYXRlU2VydmljZSB9IGZyb20gJy4vYXJyYXktcHJlZGljYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWxwaGFOdW1lcmljUHJlZGljYXRlU2VydmljZSB9IGZyb20gJy4vYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBMT0RBU0ggZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi9vcHRpb25zJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICd1dGlsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWF0VGFibGVGaWx0ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWxwaGFOdW1lcmljU2VydmljZTogQWxwaGFOdW1lcmljUHJlZGljYXRlU2VydmljZSwgcHJpdmF0ZSBfYXJyYXlTZXJ2aWNlOiBBcnJheVByZWRpY2F0ZVNlcnZpY2UpIHt9XG5cbiAgcHVibGljIGZpbHRlclByZWRpY2F0ZShpdGVtUGFpcjogSXRlbVBhaXI8YW55PiwgYWxsT3B0aW9uczogQ29sdW1uT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb21tb25PcHRpb25zOiBPcHRpb25zIHwgUHJlZGljYXRlRnVuYywgcHJvcGVydHlOYW1lPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXG4gICAgY29uc3QgZXhhbXBsZUtleXMgPSBPYmplY3Qua2V5cyhpdGVtUGFpci5leGFtcGxlKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBleGFtcGxlS2V5cykge1xuICAgICAgY29uc3QgZXhhbXBsZUNvbHVtblZhbHVlID0gaXRlbVBhaXIuZXhhbXBsZVtrZXldO1xuICAgICAgaWYgKExPREFTSC5pc05pbChleGFtcGxlQ29sdW1uVmFsdWUpIHx8IExPREFTSC5ldmVyeShleGFtcGxlQ29sdW1uVmFsdWUsIExPREFTSC5pc0VtcHR5KSAmJiB0eXBlb2YgZXhhbXBsZUNvbHVtblZhbHVlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgLy8gaWYgZXhhbXBsZSBlbnRpdHkncyBwcm9wZXJ0eSBpcyB1bmRlZmluZWQvbnVsbC9lbXB0eSB0aGVuIGl0IG1lYW5zIHRoZSBjYWxsZXIgd2FudHMgYWxsIHRoZSBkYXRhXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1QYWlyLml0ZW0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAvLyBpZiBleGFtcGxlIGVudGl0eSBoYXMgYWRkaXRpb25hbCBjb2x1bW5zIHRoZW4gc2VhcmNoIGZhaWxzXG4gICAgICAgIGNvbnN0IGl0ZW1Db2x1bW5WYWx1ZSA9IGl0ZW1QYWlyLml0ZW1ba2V5XTtcbiAgICAgICAgY29uc3QgbmV4dFByb3BlcnR5TmFtZSA9IHRoaXMuZ2V0TmV4dFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUsIGtleSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnNGb3JDb2x1bW4oY29tbW9uT3B0aW9ucywgYWxsT3B0aW9ucywgbmV4dFByb3BlcnR5TmFtZSk7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7IC8vIGlmIHVzZXIgZGVmaW5lZCBwcmVkaWNhdGUgaXMgcHJlc2VudCBmb3IgcHJvcGVydHlcbiAgICAgICAgICBjb25zdCBjdXN0b21QcmVkaWNhdGUgPSBvcHRpb25zIGFzIFByZWRpY2F0ZUZ1bmM7XG4gICAgICAgICAgaWYgKCFjdXN0b21QcmVkaWNhdGUoaXRlbUNvbHVtblZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZVBhaXIgPSB7aXRlbTogaXRlbUNvbHVtblZhbHVlLCBleGFtcGxlOiBleGFtcGxlQ29sdW1uVmFsdWV9O1xuICAgICAgICAgIGNvbnN0IGNvbHVtbk9wdGlvbnMgPSBvcHRpb25zIGFzIE9wdGlvbnM7XG4gICAgICAgICAgaWYgKHRoaXMuaXNBbHBoYU51bWVyaWMoaXRlbUNvbHVtblZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVMZXR0ZXJDYXNpbmcodmFsdWVQYWlyLCBjb2x1bW5PcHRpb25zLmNhc2VTZW5zaXRpdmUpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9hbHBoYU51bWVyaWNTZXJ2aWNlLmV4ZWN1dGVDb25kaXRpb24odmFsdWVQYWlyLCBjb2x1bW5PcHRpb25zLmZpbHRlclR5cGUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKExPREFTSC5pc0FycmF5KGl0ZW1Db2x1bW5WYWx1ZSkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fYXJyYXlTZXJ2aWNlLmV4ZWN1dGVDb25kaXRpb24odmFsdWVQYWlyLCBjb2x1bW5PcHRpb25zLmZpbHRlclR5cGUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKExPREFTSC5pc0Jvb2xlYW4oaXRlbUNvbHVtblZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKGl0ZW1Db2x1bW5WYWx1ZSAhPT0gZXhhbXBsZUNvbHVtblZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZpbHRlclByZWRpY2F0ZSh2YWx1ZVBhaXIsIGFsbE9wdGlvbnMsIG9wdGlvbnMsIG5leHRQcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgaW5uZXIgcHJvcGVydGllcyByZXR1cm5zIHRydWUsIHRoaXMgc2hvdWxkbnQgYWZmZWN0IHRoZSB3aG9sZSBpdGVtJ3MgZmlsdGVyaW5nXG4gICAgICAgICAgICAgIC8vIGhvd2V2ZXIgaWYgaXQgcmV0dXJucyBmYWxzZSB0aGVuIHRoZSBpdGVtIG11c3Qgbm90IGJlIGluIHRoZSBsaXN0XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUxldHRlckNhc2luZyhpdGVtUGFpcjogSXRlbVBhaXI8c3RyaW5nPiwgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghY2FzZVNlbnNpdGl2ZSkge1xuICAgICAgaXRlbVBhaXIuZXhhbXBsZSA9IGl0ZW1QYWlyLmV4YW1wbGUudG9VcHBlckNhc2UoKTtcbiAgICAgIGl0ZW1QYWlyLml0ZW0gPSBpdGVtUGFpci5pdGVtLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcHRpb25zRm9yQ29sdW1uKGNvbW1vbk9wdGlvbnM6IE9wdGlvbnMgfCBQcmVkaWNhdGVGdW5jLCBjb2x1bW5PcHRpb25zOiBDb2x1bW5PcHRpb25zLCBwcm9wZXJ0eU5hbWU/OiBzdHJpbmcpOlxuICAgT3B0aW9ucyB8IFByZWRpY2F0ZUZ1bmMge1xuICAgIGlmIChjb2x1bW5PcHRpb25zICYmIGNvbHVtbk9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuICAgICAgcmV0dXJuIGNvbHVtbk9wdGlvbnNbcHJvcGVydHlOYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbW1vbk9wdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0UHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZSA/IChwcm9wZXJ0eU5hbWUgKyAnLicgKyBrZXkpIDoga2V5O1xuICB9XG5cbiAgcHVibGljIGlzQ2hhbmdlZChvbGRFbnRpdHk6IGFueSwgbmV3RW50aXR5OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIUxPREFTSC5pc0VxdWFsKHRoaXMudG9QbGFpbkpzb24ob2xkRW50aXR5KSwgdGhpcy50b1BsYWluSnNvbihuZXdFbnRpdHkpKTtcbiAgfVxuXG4gIHB1YmxpYyB0b1BsYWluSnNvbihvYmplY3Q6IGFueSk6IEpTT04ge1xuICAgIGlmIChvYmplY3QpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNBbHBoYU51bWVyaWModmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBMT0RBU0guaXNTdHJpbmcodmFsdWUpIHx8IExPREFTSC5pc051bWJlcih2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==