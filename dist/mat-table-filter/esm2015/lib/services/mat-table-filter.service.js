import { ArrayPredicateService } from './array-predicate.service';
import { AlphaNumericPredicateService } from './alpha-numeric-predicate.service';
import { Injectable } from '@angular/core';
import * as LODASH from 'lodash';
import { isFunction } from 'util';
import * as i0 from "@angular/core";
import * as i1 from "./alpha-numeric-predicate.service";
import * as i2 from "./array-predicate.service";
export class MatTableFilterService {
    constructor(_alphaNumericService, _arrayService) {
        this._alphaNumericService = _alphaNumericService;
        this._arrayService = _arrayService;
    }
    filterPredicate(itemPair, propertyOptions, commonOptions, propertyName) {
        // tslint:disable-next-line:forin
        const exampleKeys = Object.keys(itemPair.example);
        for (const key of exampleKeys) {
            const exampleValue = LODASH.cloneDeep(itemPair.example[key]);
            if (LODASH.isNil(exampleValue) || LODASH.every(exampleValue, LODASH.isEmpty) && typeof exampleValue !== 'boolean') {
                // if example entity's property is undefined/null/empty then it means the caller wants all the data
                continue;
            }
            if (itemPair.item.hasOwnProperty(key)) {
                // if example entity has additional columns then search fails
                const itemValue = LODASH.cloneDeep(itemPair.item[key]);
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
                    else if (LODASH.isArray(itemValue)) {
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
        return !LODASH.isEqual(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
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
        return LODASH.isString(value) || LODASH.isNumber(value);
    }
}
MatTableFilterService.ɵfac = function MatTableFilterService_Factory(t) { return new (t || MatTableFilterService)(i0.ɵɵinject(i1.AlphaNumericPredicateService), i0.ɵɵinject(i2.ArrayPredicateService)); };
MatTableFilterService.ɵprov = i0.ɵɵdefineInjectable({ token: MatTableFilterService, factory: MatTableFilterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MatTableFilterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AlphaNumericPredicateService }, { type: i2.ArrayPredicateService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXRhYmxlLWZpbHRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tYXQtdGFibGUtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUVqQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBS2xDLE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsWUFBb0Isb0JBQWtELEVBQVUsYUFBb0M7UUFBaEcseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE4QjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtJQUFHLENBQUM7SUFFakgsZUFBZSxDQUFDLFFBQXVCLEVBQUUsZUFBZ0MsRUFDekQsYUFBc0MsRUFBRSxZQUFxQjtRQUNsRixpQ0FBaUM7UUFDakMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsS0FBSyxNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUU7WUFDN0IsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLFlBQVksS0FBSyxTQUFTLEVBQUU7Z0JBQ2pILG1HQUFtRztnQkFDbkcsU0FB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UyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFTSxXQUFXLENBQUMsTUFBVztRQUM1QixJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNMLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUVPLGNBQWMsQ0FBQyxLQUFVO1FBQy9CLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7OzBGQWxGVSxxQkFBcUI7NkRBQXJCLHFCQUFxQixXQUFyQixxQkFBcUIsbUJBRnBCLE1BQU07a0RBRVAscUJBQXFCO2NBSGpDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5T3B0aW9ucywgUHJlZGljYXRlRnVuYyB9IGZyb20gJy4uL3Byb3BlcnR5LW9wdGlvbnMnO1xuaW1wb3J0IHsgSXRlbVBhaXIgfSBmcm9tICcuLy4uL2l0ZW0tcGFpcic7XG5pbXBvcnQgeyBBcnJheVByZWRpY2F0ZVNlcnZpY2UgfSBmcm9tICcuL2FycmF5LXByZWRpY2F0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFscGhhTnVtZXJpY1ByZWRpY2F0ZVNlcnZpY2UgfSBmcm9tICcuL2FscGhhLW51bWVyaWMtcHJlZGljYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgTE9EQVNIIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vb3B0aW9ucyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAndXRpbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRmlsdGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FscGhhTnVtZXJpY1NlcnZpY2U6IEFscGhhTnVtZXJpY1ByZWRpY2F0ZVNlcnZpY2UsIHByaXZhdGUgX2FycmF5U2VydmljZTogQXJyYXlQcmVkaWNhdGVTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBmaWx0ZXJQcmVkaWNhdGUoaXRlbVBhaXI6IEl0ZW1QYWlyPGFueT4sIHByb3BlcnR5T3B0aW9uczogUHJvcGVydHlPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vbk9wdGlvbnM6IE9wdGlvbnMgfCBQcmVkaWNhdGVGdW5jLCBwcm9wZXJ0eU5hbWU/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBjb25zdCBleGFtcGxlS2V5cyA9IE9iamVjdC5rZXlzKGl0ZW1QYWlyLmV4YW1wbGUpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGV4YW1wbGVLZXlzKSB7XG4gICAgICBjb25zdCBleGFtcGxlVmFsdWUgPSBMT0RBU0guY2xvbmVEZWVwKGl0ZW1QYWlyLmV4YW1wbGVba2V5XSk7XG4gICAgICBpZiAoTE9EQVNILmlzTmlsKGV4YW1wbGVWYWx1ZSkgfHwgTE9EQVNILmV2ZXJ5KGV4YW1wbGVWYWx1ZSwgTE9EQVNILmlzRW1wdHkpICYmIHR5cGVvZiBleGFtcGxlVmFsdWUgIT09ICdib29sZWFuJykge1xuICAgICAgICAvLyBpZiBleGFtcGxlIGVudGl0eSdzIHByb3BlcnR5IGlzIHVuZGVmaW5lZC9udWxsL2VtcHR5IHRoZW4gaXQgbWVhbnMgdGhlIGNhbGxlciB3YW50cyBhbGwgdGhlIGRhdGFcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVBhaXIuaXRlbS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIC8vIGlmIGV4YW1wbGUgZW50aXR5IGhhcyBhZGRpdGlvbmFsIGNvbHVtbnMgdGhlbiBzZWFyY2ggZmFpbHNcbiAgICAgICAgY29uc3QgaXRlbVZhbHVlID0gTE9EQVNILmNsb25lRGVlcChpdGVtUGFpci5pdGVtW2tleV0pO1xuICAgICAgICBjb25zdCBuZXh0UHJvcGVydHlOYW1lID0gdGhpcy5nZXROZXh0UHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSwga2V5KTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZmluYWxpemVPcHRpb25zRm9yUHJvcGVydHkoY29tbW9uT3B0aW9ucywgcHJvcGVydHlPcHRpb25zLCBuZXh0UHJvcGVydHlOYW1lKTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHsgLy8gaWYgdXNlciBkZWZpbmVkIHByZWRpY2F0ZSBpcyBwcmVzZW50IGZvciBwcm9wZXJ0eVxuICAgICAgICAgIGNvbnN0IGN1c3RvbVByZWRpY2F0ZSA9IG9wdGlvbnMgYXMgUHJlZGljYXRlRnVuYztcbiAgICAgICAgICBpZiAoIWN1c3RvbVByZWRpY2F0ZShpdGVtVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNvbHVtbk9wdGlvbnMgPSBvcHRpb25zIGFzIE9wdGlvbnM7XG4gICAgICAgICAgaWYgKHRoaXMuaXNBbHBoYU51bWVyaWMoaXRlbVZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVQYWlyOiBJdGVtUGFpcjxzdHJpbmc+ID0ge2l0ZW06IGl0ZW1WYWx1ZS50b1N0cmluZygpLCBleGFtcGxlOiBleGFtcGxlVmFsdWV9O1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9hbHBoYU51bWVyaWNTZXJ2aWNlLmV4ZWN1dGVDb25kaXRpb24odmFsdWVQYWlyLCBjb2x1bW5PcHRpb25zKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChMT0RBU0guaXNBcnJheShpdGVtVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZVBhaXI6IEl0ZW1QYWlyPGFueVtdPiA9IHtpdGVtOiBpdGVtVmFsdWUsIGV4YW1wbGU6IGV4YW1wbGVWYWx1ZX07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2FycmF5U2VydmljZS5leGVjdXRlQ29uZGl0aW9uKHZhbHVlUGFpciwgY29sdW1uT3B0aW9ucykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoTE9EQVNILmlzQm9vbGVhbihpdGVtVmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAoaXRlbVZhbHVlICE9PSBleGFtcGxlVmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZVBhaXI6IEl0ZW1QYWlyPGFueT4gPSB7aXRlbTogaXRlbVZhbHVlLCBleGFtcGxlOiBleGFtcGxlVmFsdWV9O1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZpbHRlclByZWRpY2F0ZSh2YWx1ZVBhaXIsIHByb3BlcnR5T3B0aW9ucywgb3B0aW9ucywgbmV4dFByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgICAgLy8gaWYgb25lIG9mIHRoZSBpbm5lciBwcm9wZXJ0aWVzIHJldHVybnMgdHJ1ZSwgdGhpcyBzaG91bGRudCBhZmZlY3QgdGhlIHdob2xlIGl0ZW0ncyBmaWx0ZXJpbmdcbiAgICAgICAgICAgICAgLy8gaG93ZXZlciBpZiBpdCByZXR1cm5zIGZhbHNlIHRoZW4gdGhlIGl0ZW0gbXVzdCBub3QgYmUgaW4gdGhlIGxpc3RcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZmluYWxpemVPcHRpb25zRm9yUHJvcGVydHkoY29tbW9uT3B0aW9uczogT3B0aW9ucyB8IFByZWRpY2F0ZUZ1bmMsIHByb3BlcnR5T3B0aW9uczogUHJvcGVydHlPcHRpb25zLCBwcm9wZXJ0eU5hbWU6IHN0cmluZyk6XG4gICBPcHRpb25zIHwgUHJlZGljYXRlRnVuYyB7XG4gICAgaWYgKHByb3BlcnR5T3B0aW9ucyAmJiBwcm9wZXJ0eU9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuICAgICAgcmV0dXJuIHByb3BlcnR5T3B0aW9uc1twcm9wZXJ0eU5hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29tbW9uT3B0aW9ucztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcHJvcGVydHlOYW1lID8gKHByb3BlcnR5TmFtZSArICcuJyArIGtleSkgOiBrZXk7XG4gIH1cblxuICBwdWJsaWMgaXNDaGFuZ2VkKG9sZEVudGl0eTogYW55LCBuZXdFbnRpdHk6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhTE9EQVNILmlzRXF1YWwodGhpcy50b1BsYWluSnNvbihvbGRFbnRpdHkpLCB0aGlzLnRvUGxhaW5Kc29uKG5ld0VudGl0eSkpO1xuICB9XG5cbiAgcHVibGljIHRvUGxhaW5Kc29uKG9iamVjdDogYW55KTogSlNPTiB7XG4gICAgaWYgKG9iamVjdCkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0FscGhhTnVtZXJpYyh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIExPREFTSC5pc1N0cmluZyh2YWx1ZSkgfHwgTE9EQVNILmlzTnVtYmVyKHZhbHVlKTtcbiAgfVxufVxuIl19