import { ArrayPredicateService } from './array-predicate.service';
import { AlphaNumericPredicateService } from './alpha-numeric-predicate.service';
import { Injectable } from '@angular/core';
import isEqual from 'lodash-es/isEqual';
import cloneDeep from 'lodash-es/cloneDeep';
import isNil from 'lodash-es/isNil';
import every from 'lodash-es/every';
import isFunction from 'lodash-es/isFunction';
import isArray from 'lodash-es/isArray';
import isBoolean from 'lodash-es/isBoolean';
import isString from 'lodash-es/isString';
import isNumber from 'lodash-es/isNumber';
import isEmpty from 'lodash-es/isEmpty';
import * as i0 from "@angular/core";
import * as i1 from "./alpha-numeric-predicate.service";
import * as i2 from "./array-predicate.service";
export class MatTableFilterService {
    constructor(_alphaNumericService, _arrayService) {
        this._alphaNumericService = _alphaNumericService;
        this._arrayService = _arrayService;
    }
    filterPredicate(itemPair, propertyOptions, commonOptions, propertyName) {
        var _a;
        // tslint:disable-next-line:forin
        const exampleKeys = Object.keys(itemPair.example);
        for (const key of exampleKeys) {
            const exampleValue = cloneDeep(itemPair.example[key]);
            if (isNil(exampleValue) || every(exampleValue, isEmpty) && typeof exampleValue !== 'boolean') {
                // if example entity's property is undefined/null/empty then it means the caller wants all the data
                continue;
            }
            if ((_a = itemPair.item) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(key)) {
                // if example entity has additional columns then search fails
                const itemValue = cloneDeep(itemPair.item[key]);
                const nextPropertyName = this.getNextPropertyName(propertyName, key);
                const options = this.finalizeOptionsForProperty(commonOptions, propertyOptions, nextPropertyName);
                if (isFunction(options)) { // if user defined predicate is present for property
                    const customPredicate = options;
                    if (!customPredicate(itemValue)) {
                        return false;
                    }
                }
                else {
                    const columnOptions = options;
                    if (this.isAlphaNumeric(itemValue)) {
                        const valuePair = { item: itemValue.toString(), example: exampleValue };
                        if (!this._alphaNumericService.executeCondition(valuePair, columnOptions)) {
                            return false;
                        }
                    }
                    else if (isArray(itemValue)) {
                        const valuePair = { item: itemValue, example: exampleValue };
                        if (!this._arrayService.executeCondition(valuePair, columnOptions)) {
                            return false;
                        }
                    }
                    else if (isBoolean(itemValue)) {
                        if (itemValue !== exampleValue) {
                            return false;
                        }
                    }
                    else {
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
    finalizeOptionsForProperty(commonOptions, propertyOptions, propertyName) {
        if (propertyOptions && propertyOptions.hasOwnProperty(propertyName)) {
            return propertyOptions[propertyName];
        }
        else {
            return commonOptions;
        }
    }
    getNextPropertyName(propertyName, key) {
        return propertyName ? (propertyName + '.' + key) : key;
    }
    isChanged(oldEntity, newEntity) {
        return !isEqual(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
    }
    toPlainJson(object) {
        if (object) {
            return JSON.parse(JSON.stringify(object));
        }
        else {
            return undefined;
        }
    }
    isAlphaNumeric(value) {
        return isString(value) || isNumber(value);
    }
}
MatTableFilterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(i0.ɵɵinject(i1.AlphaNumericPredicateService), i0.ɵɵinject(i2.ArrayPredicateService)); }, token: MatTableFilterService, providedIn: "root" });
MatTableFilterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
MatTableFilterService.ctorParameters = () => [
    { type: AlphaNumericPredicateService },
    { type: ArrayPredicateService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkQ6L2FuZ3VsYXJfd29ya3NwYWNlL25nLW1hdGVyaWFsLWV4dGVuc2lvbnMvcHJvamVjdHMvbWF0LXRhYmxlLWZpbHRlci9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxPQUFPLE1BQU0sbUJBQW1CLENBQUM7QUFDeEMsT0FBTyxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxLQUFLLE1BQU0saUJBQWlCLENBQUM7QUFDcEMsT0FBTyxLQUFLLE1BQU0saUJBQWlCLENBQUM7QUFDcEMsT0FBTyxVQUFVLE1BQU0sc0JBQXNCLENBQUM7QUFDOUMsT0FBTyxPQUFPLE1BQU0sbUJBQW1CLENBQUM7QUFDeEMsT0FBTyxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7QUFDMUMsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7QUFDMUMsT0FBTyxPQUFPLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFNeEMsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxZQUFvQixvQkFBa0QsRUFBVSxhQUFvQztRQUFoRyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQThCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQXVCO0lBQUcsQ0FBQztJQUVqSCxlQUFlLENBQUMsUUFBdUIsRUFBRSxlQUFnQyxFQUN6RCxhQUFzQyxFQUFFLFlBQXFCOztRQUNsRixpQ0FBaUM7UUFDakMsTUFBTSxXQUFXLEdBQUcsTUFBTSxD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Q0gsQ0FBQztJQUVPLG1CQUFtQixDQUFDLFlBQW9CLEVBQUUsR0FBVztRQUMzRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDekQsQ0FBQztJQUVNLFNBQVMsQ0FBQyxTQUFjLEVBQUUsU0FBYztRQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTSxXQUFXLENBQUMsTUFBVztRQUM1QixJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNMLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUVPLGNBQWMsQ0FBQyxLQUFVO1FBQy9CLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O1lBckZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBaEJRLDRCQUE0QjtZQUQ1QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9wZXJ0eU9wdGlvbnMsIFByZWRpY2F0ZUZ1bmMgfSBmcm9tICcuLi9wcm9wZXJ0eS1vcHRpb25zJztcclxuaW1wb3J0IHsgSXRlbVBhaXIgfSBmcm9tICcuLy4uL2l0ZW0tcGFpcic7XHJcbmltcG9ydCB7IEFycmF5UHJlZGljYXRlU2VydmljZSB9IGZyb20gJy4vYXJyYXktcHJlZGljYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbHBoYU51bWVyaWNQcmVkaWNhdGVTZXJ2aWNlIH0gZnJvbSAnLi9hbHBoYS1udW1lcmljLXByZWRpY2F0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgaXNFcXVhbCBmcm9tICdsb2Rhc2gtZXMvaXNFcXVhbCc7XHJcbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoLWVzL2Nsb25lRGVlcCc7XHJcbmltcG9ydCBpc05pbCBmcm9tICdsb2Rhc2gtZXMvaXNOaWwnO1xyXG5pbXBvcnQgZXZlcnkgZnJvbSAnbG9kYXNoLWVzL2V2ZXJ5JztcclxuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnbG9kYXNoLWVzL2lzRnVuY3Rpb24nO1xyXG5pbXBvcnQgaXNBcnJheSBmcm9tICdsb2Rhc2gtZXMvaXNBcnJheSc7XHJcbmltcG9ydCBpc0Jvb2xlYW4gZnJvbSAnbG9kYXNoLWVzL2lzQm9vbGVhbic7XHJcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gtZXMvaXNTdHJpbmcnO1xyXG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnbG9kYXNoLWVzL2lzTnVtYmVyJztcclxuaW1wb3J0IGlzRW1wdHkgZnJvbSAnbG9kYXNoLWVzL2lzRW1wdHknO1xyXG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vb3B0aW9ucyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUZpbHRlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FscGhhTnVtZXJpY1NlcnZpY2U6IEFscGhhTnVtZXJpY1ByZWRpY2F0ZVNlcnZpY2UsIHByaXZhdGUgX2FycmF5U2VydmljZTogQXJyYXlQcmVkaWNhdGVTZXJ2aWNlKSB7fVxyXG5cclxuICBwdWJsaWMgZmlsdGVyUHJlZGljYXRlKGl0ZW1QYWlyOiBJdGVtUGFpcjxhbnk+LCBwcm9wZXJ0eU9wdGlvbnM6IFByb3BlcnR5T3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vbk9wdGlvbnM6IE9wdGlvbnMgfCBQcmVkaWNhdGVGdW5jLCBwcm9wZXJ0eU5hbWU/OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG4gICAgY29uc3QgZXhhbXBsZUtleXMgPSBPYmplY3Qua2V5cyhpdGVtUGFpci5leGFtcGxlKTtcclxuICAgIGZvciAoY29uc3Qga2V5IG9mIGV4YW1wbGVLZXlzKSB7XHJcbiAgICAgIGNvbnN0IGV4YW1wbGVWYWx1ZSA9IGNsb25lRGVlcChpdGVtUGFpci5leGFtcGxlW2tleV0pO1xyXG4gICAgICBpZiAoaXNOaWwoZXhhbXBsZVZhbHVlKSB8fCBldmVyeShleGFtcGxlVmFsdWUsIGlzRW1wdHkpICYmIHR5cGVvZiBleGFtcGxlVmFsdWUgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgIC8vIGlmIGV4YW1wbGUgZW50aXR5J3MgcHJvcGVydHkgaXMgdW5kZWZpbmVkL251bGwvZW1wdHkgdGhlbiBpdCBtZWFucyB0aGUgY2FsbGVyIHdhbnRzIGFsbCB0aGUgZGF0YVxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtUGFpci5pdGVtPy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgLy8gaWYgZXhhbXBsZSBlbnRpdHkgaGFzIGFkZGl0aW9uYWwgY29sdW1ucyB0aGVuIHNlYXJjaCBmYWlsc1xyXG4gICAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IGNsb25lRGVlcChpdGVtUGFpci5pdGVtW2tleV0pO1xyXG4gICAgICAgIGNvbnN0IG5leHRQcm9wZXJ0eU5hbWUgPSB0aGlzLmdldE5leHRQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lLCBrZXkpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmZpbmFsaXplT3B0aW9uc0ZvclByb3BlcnR5KGNvbW1vbk9wdGlvbnMsIHByb3BlcnR5T3B0aW9ucywgbmV4dFByb3BlcnR5TmFtZSk7XHJcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHsgLy8gaWYgdXNlciBkZWZpbmVkIHByZWRpY2F0ZSBpcyBwcmVzZW50IGZvciBwcm9wZXJ0eVxyXG4gICAgICAgICAgY29uc3QgY3VzdG9tUHJlZGljYXRlID0gb3B0aW9ucyBhcyBQcmVkaWNhdGVGdW5jO1xyXG4gICAgICAgICAgaWYgKCFjdXN0b21QcmVkaWNhdGUoaXRlbVZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGNvbHVtbk9wdGlvbnMgPSBvcHRpb25zIGFzIE9wdGlvbnM7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc0FscGhhTnVtZXJpYyhpdGVtVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlUGFpcjogSXRlbVBhaXI8c3RyaW5nPiA9IHtpdGVtOiBpdGVtVmFsdWUudG9TdHJpbmcoKSwgZXhhbXBsZTogZXhhbXBsZVZhbHVlfTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9hbHBoYU51bWVyaWNTZXJ2aWNlLmV4ZWN1dGVDb25kaXRpb24odmFsdWVQYWlyLCBjb2x1bW5PcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KGl0ZW1WYWx1ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVQYWlyOiBJdGVtUGFpcjxhbnlbXT4gPSB7aXRlbTogaXRlbVZhbHVlLCBleGFtcGxlOiBleGFtcGxlVmFsdWV9O1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2FycmF5U2VydmljZS5leGVjdXRlQ29uZGl0aW9uKHZhbHVlUGFpciwgY29sdW1uT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNCb29sZWFuKGl0ZW1WYWx1ZSkpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW1WYWx1ZSAhPT0gZXhhbXBsZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVBhaXI6IEl0ZW1QYWlyPGFueT4gPSB7aXRlbTogaXRlbVZhbHVlLCBleGFtcGxlOiBleGFtcGxlVmFsdWV9O1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZmlsdGVyUHJlZGljYXRlKHZhbHVlUGFpciwgcHJvcGVydHlPcHRpb25zLCBvcHRpb25zLCBuZXh0UHJvcGVydHlOYW1lKSkge1xyXG4gICAgICAgICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgaW5uZXIgcHJvcGVydGllcyByZXR1cm5zIHRydWUsIHRoaXMgc2hvdWxkbnQgYWZmZWN0IHRoZSB3aG9sZSBpdGVtJ3MgZmlsdGVyaW5nXHJcbiAgICAgICAgICAgICAgLy8gaG93ZXZlciBpZiBpdCByZXR1cm5zIGZhbHNlIHRoZW4gdGhlIGl0ZW0gbXVzdCBub3QgYmUgaW4gdGhlIGxpc3RcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluYWxpemVPcHRpb25zRm9yUHJvcGVydHkoY29tbW9uT3B0aW9uczogT3B0aW9ucyB8IFByZWRpY2F0ZUZ1bmMsIHByb3BlcnR5T3B0aW9uczogUHJvcGVydHlPcHRpb25zLCBwcm9wZXJ0eU5hbWU6IHN0cmluZyk6XHJcbiAgIE9wdGlvbnMgfCBQcmVkaWNhdGVGdW5jIHtcclxuICAgIGlmIChwcm9wZXJ0eU9wdGlvbnMgJiYgcHJvcGVydHlPcHRpb25zLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkpIHtcclxuICAgICAgcmV0dXJuIHByb3BlcnR5T3B0aW9uc1twcm9wZXJ0eU5hbWVdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGNvbW1vbk9wdGlvbnM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE5leHRQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBwcm9wZXJ0eU5hbWUgPyAocHJvcGVydHlOYW1lICsgJy4nICsga2V5KSA6IGtleTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0NoYW5nZWQob2xkRW50aXR5OiBhbnksIG5ld0VudGl0eTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIWlzRXF1YWwodGhpcy50b1BsYWluSnNvbihvbGRFbnRpdHkpLCB0aGlzLnRvUGxhaW5Kc29uKG5ld0VudGl0eSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvUGxhaW5Kc29uKG9iamVjdDogYW55KTogSlNPTiB7XHJcbiAgICBpZiAob2JqZWN0KSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNBbHBoYU51bWVyaWModmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSB8fCBpc051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==