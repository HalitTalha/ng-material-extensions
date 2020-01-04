/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {?} propertyOptions
     * @param {?} commonOptions
     * @param {?=} propertyName
     * @return {?}
     */
    filterPredicate(itemPair, propertyOptions, commonOptions, propertyName) {
        // tslint:disable-next-line:forin
        /** @type {?} */
        const exampleKeys = Object.keys(itemPair.example);
        for (const key of exampleKeys) {
            /** @type {?} */
            const exampleValue = LODASH.cloneDeep(itemPair.example[key]);
            if (LODASH.isNil(exampleValue) || LODASH.every(exampleValue, LODASH.isEmpty) && typeof exampleValue !== 'boolean') {
                // if example entity's property is undefined/null/empty then it means the caller wants all the data
                continue;
            }
            if (itemPair.item.hasOwnProperty(key)) {
                // if example entity has additional columns then search fails
                /** @type {?} */
                const itemValue = LODASH.cloneDeep(itemPair.item[key]);
                /** @type {?} */
                const nextPropertyName = this.getNextPropertyName(propertyName, key);
                /** @type {?} */
                const options = this.finalizeOptionsForProperty(commonOptions, propertyOptions, nextPropertyName);
                if (isFunction(options)) { // if user defined predicate is present for property
                    // if user defined predicate is present for property
                    /** @type {?} */
                    const customPredicate = (/** @type {?} */ (options));
                    if (!customPredicate(itemValue)) {
                        return false;
                    }
                }
                else {
                    /** @type {?} */
                    const columnOptions = (/** @type {?} */ (options));
                    if (this.isAlphaNumeric(itemValue)) {
                        /** @type {?} */
                        const valuePair = { item: itemValue.toString(), example: exampleValue };
                        if (!this._alphaNumericService.executeCondition(valuePair, columnOptions)) {
                            return false;
                        }
                    }
                    else if (LODASH.isArray(itemValue)) {
                        /** @type {?} */
                        const valuePair = { item: itemValue, example: exampleValue };
                        if (!this._arrayService.executeCondition(valuePair, columnOptions)) {
                            return false;
                        }
                    }
                    else if (LODASH.isBoolean(itemValue)) {
                        if (itemValue !== exampleValue) {
                            return false;
                        }
                    }
                    else {
                        /** @type {?} */
                        const valuePair = { item: itemValue, example: exampleValue };
                        if (!this.filterPredicate(valuePair, propertyOptions, options, nextPropertyName)) {
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
     * @param {?} commonOptions
     * @param {?} propertyOptions
     * @param {?} propertyName
     * @return {?}
     */
    finalizeOptionsForProperty(commonOptions, propertyOptions, propertyName) {
        if (propertyOptions && propertyOptions.hasOwnProperty(propertyName)) {
            return propertyOptions[propertyName];
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
/** @nocollapse */ MatTableFilterService.ngInjectableDef = i0.defineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(i0.inject(i1.AlphaNumericPredicateService), i0.inject(i2.ArrayPredicateService)); }, token: MatTableFilterService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXRhYmxlLWZpbHRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tYXQtdGFibGUtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUtsQyxNQUFNLE9BQU8scUJBQXFCOzs7OztJQUNoQyxZQUFvQixvQkFBa0QsRUFBVSxhQUFvQztRQUFoRyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQThCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQXVCO0lBQUcsQ0FBQzs7Ozs7Ozs7SUFFakgsZUFBZSxDQUFDLFFBQXVCLEVBQUUsZUFBZ0MsRUFDekQsYUFBc0MsRUFBRSxZQUFxQjs7O2NBRTVFLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDakQsS0FBSyxNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUU7O2tCQUN2QixZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVELElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxZQUFZLEtBQUssU0FBUyxFQUFFO2dCQUNqSCxtR0FBbUc7Z0JBQ25HLFNBQVM7YUFDVjtZQUNELElB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QUFDOzs7OztJQUVNLFdBQVcsQ0FBQyxNQUFXO1FBQzVCLElBQUksTUFBTSxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsS0FBVTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7WUFyRkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUlEsNEJBQTRCO1lBRDVCLHFCQUFxQjs7Ozs7Ozs7SUFXaEIscURBQTBEOzs7OztJQUFFLDhDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5T3B0aW9ucywgUHJlZGljYXRlRnVuYyB9IGZyb20gJy4uL3Byb3BlcnR5LW9wdGlvbnMnO1xuaW1wb3J0IHsgSXRlbVBhaXIgfSBmcm9tICcuLy4uL2l0ZW0tcGFpcic7XG5pbXBvcnQgeyBBcnJheVByZWRpY2F0ZVNlcnZpY2UgfSBmcm9tICcuL2FycmF5LXByZWRpY2F0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFscGhhTnVtZXJpY1ByZWRpY2F0ZVNlcnZpY2UgfSBmcm9tICcuL2FscGhhLW51bWVyaWMtcHJlZGljYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgTE9EQVNIIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vb3B0aW9ucyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAndXRpbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRmlsdGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FscGhhTnVtZXJpY1NlcnZpY2U6IEFscGhhTnVtZXJpY1ByZWRpY2F0ZVNlcnZpY2UsIHByaXZhdGUgX2FycmF5U2VydmljZTogQXJyYXlQcmVkaWNhdGVTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBmaWx0ZXJQcmVkaWNhdGUoaXRlbVBhaXI6IEl0ZW1QYWlyPGFueT4sIHByb3BlcnR5T3B0aW9uczogUHJvcGVydHlPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vbk9wdGlvbnM6IE9wdGlvbnMgfCBQcmVkaWNhdGVGdW5jLCBwcm9wZXJ0eU5hbWU/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBjb25zdCBleGFtcGxlS2V5cyA9IE9iamVjdC5rZXlzKGl0ZW1QYWlyLmV4YW1wbGUpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGV4YW1wbGVLZXlzKSB7XG4gICAgICBjb25zdCBleGFtcGxlVmFsdWUgPSBMT0RBU0guY2xvbmVEZWVwKGl0ZW1QYWlyLmV4YW1wbGVba2V5XSk7XG4gICAgICBpZiAoTE9EQVNILmlzTmlsKGV4YW1wbGVWYWx1ZSkgfHwgTE9EQVNILmV2ZXJ5KGV4YW1wbGVWYWx1ZSwgTE9EQVNILmlzRW1wdHkpICYmIHR5cGVvZiBleGFtcGxlVmFsdWUgIT09ICdib29sZWFuJykge1xuICAgICAgICAvLyBpZiBleGFtcGxlIGVudGl0eSdzIHByb3BlcnR5IGlzIHVuZGVmaW5lZC9udWxsL2VtcHR5IHRoZW4gaXQgbWVhbnMgdGhlIGNhbGxlciB3YW50cyBhbGwgdGhlIGRhdGFcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVBhaXIuaXRlbS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIC8vIGlmIGV4YW1wbGUgZW50aXR5IGhhcyBhZGRpdGlvbmFsIGNvbHVtbnMgdGhlbiBzZWFyY2ggZmFpbHNcbiAgICAgICAgY29uc3QgaXRlbVZhbHVlID0gTE9EQVNILmNsb25lRGVlcChpdGVtUGFpci5pdGVtW2tleV0pO1xuICAgICAgICBjb25zdCBuZXh0UHJvcGVydHlOYW1lID0gdGhpcy5nZXROZXh0UHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSwga2V5KTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZmluYWxpemVPcHRpb25zRm9yUHJvcGVydHkoY29tbW9uT3B0aW9ucywgcHJvcGVydHlPcHRpb25zLCBuZXh0UHJvcGVydHlOYW1lKTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHsgLy8gaWYgdXNlciBkZWZpbmVkIHByZWRpY2F0ZSBpcyBwcmVzZW50IGZvciBwcm9wZXJ0eVxuICAgICAgICAgIGNvbnN0IGN1c3RvbVByZWRpY2F0ZSA9IG9wdGlvbnMgYXMgUHJlZGljYXRlRnVuYztcbiAgICAgICAgICBpZiAoIWN1c3RvbVByZWRpY2F0ZShpdGVtVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNvbHVtbk9wdGlvbnMgPSBvcHRpb25zIGFzIE9wdGlvbnM7XG4gICAgICAgICAgaWYgKHRoaXMuaXNBbHBoYU51bWVyaWMoaXRlbVZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVQYWlyOiBJdGVtUGFpcjxzdHJpbmc+ID0ge2l0ZW06IGl0ZW1WYWx1ZS50b1N0cmluZygpLCBleGFtcGxlOiBleGFtcGxlVmFsdWV9O1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9hbHBoYU51bWVyaWNTZXJ2aWNlLmV4ZWN1dGVDb25kaXRpb24odmFsdWVQYWlyLCBjb2x1bW5PcHRpb25zKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChMT0RBU0guaXNBcnJheShpdGVtVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZVBhaXI6IEl0ZW1QYWlyPGFueVtdPiA9IHtpdGVtOiBpdGVtVmFsdWUsIGV4YW1wbGU6IGV4YW1wbGVWYWx1ZX07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2FycmF5U2VydmljZS5leGVjdXRlQ29uZGl0aW9uKHZhbHVlUGFpciwgY29sdW1uT3B0aW9ucykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoTE9EQVNILmlzQm9vbGVhbihpdGVtVmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAoaXRlbVZhbHVlICE9PSBleGFtcGxlVmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZVBhaXI6IEl0ZW1QYWlyPGFueT4gPSB7aXRlbTogaXRlbVZhbHVlLCBleGFtcGxlOiBleGFtcGxlVmFsdWV9O1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZpbHRlclByZWRpY2F0ZSh2YWx1ZVBhaXIsIHByb3BlcnR5T3B0aW9ucywgb3B0aW9ucywgbmV4dFByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgICAgLy8gaWYgb25lIG9mIHRoZSBpbm5lciBwcm9wZXJ0aWVzIHJldHVybnMgdHJ1ZSwgdGhpcyBzaG91bGRudCBhZmZlY3QgdGhlIHdob2xlIGl0ZW0ncyBmaWx0ZXJpbmdcbiAgICAgICAgICAgICAgLy8gaG93ZXZlciBpZiBpdCByZXR1cm5zIGZhbHNlIHRoZW4gdGhlIGl0ZW0gbXVzdCBub3QgYmUgaW4gdGhlIGxpc3RcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZmluYWxpemVPcHRpb25zRm9yUHJvcGVydHkoY29tbW9uT3B0aW9uczogT3B0aW9ucyB8IFByZWRpY2F0ZUZ1bmMsIHByb3BlcnR5T3B0aW9uczogUHJvcGVydHlPcHRpb25zLCBwcm9wZXJ0eU5hbWU6IHN0cmluZyk6XG4gICBPcHRpb25zIHwgUHJlZGljYXRlRnVuYyB7XG4gICAgaWYgKHByb3BlcnR5T3B0aW9ucyAmJiBwcm9wZXJ0eU9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuICAgICAgcmV0dXJuIHByb3BlcnR5T3B0aW9uc1twcm9wZXJ0eU5hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29tbW9uT3B0aW9ucztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcHJvcGVydHlOYW1lID8gKHByb3BlcnR5TmFtZSArICcuJyArIGtleSkgOiBrZXk7XG4gIH1cblxuICBwdWJsaWMgaXNDaGFuZ2VkKG9sZEVudGl0eTogYW55LCBuZXdFbnRpdHk6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhTE9EQVNILmlzRXF1YWwodGhpcy50b1BsYWluSnNvbihvbGRFbnRpdHkpLCB0aGlzLnRvUGxhaW5Kc29uKG5ld0VudGl0eSkpO1xuICB9XG5cbiAgcHVibGljIHRvUGxhaW5Kc29uKG9iamVjdDogYW55KTogSlNPTiB7XG4gICAgaWYgKG9iamVjdCkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0FscGhhTnVtZXJpYyh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIExPREFTSC5pc1N0cmluZyh2YWx1ZSkgfHwgTE9EQVNILmlzTnVtYmVyKHZhbHVlKTtcbiAgfVxufVxuIl19