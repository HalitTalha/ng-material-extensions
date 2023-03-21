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
        // tslint:disable-next-line:forin
        const exampleKeys = Object.keys(itemPair.example);
        for (const key of exampleKeys) {
            const exampleValue = cloneDeep(itemPair.example[key]);
            if (isNil(exampleValue) || every(exampleValue, isEmpty) && typeof exampleValue !== 'boolean') {
                // if example entity's property is undefined/null/empty then it means the caller wants all the data
                continue;
            }
            if (itemPair.item?.hasOwnProperty(key)) {
                // if example entity has additional columns then search fails
                const itemValue = cloneDeep(itemPair.item[key]);
                const nextPropertyName = this.getNextPropertyName(key, propertyName);
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
    getNextPropertyName(key, propertyName) {
        return propertyName ? (propertyName + '.' + key) : key;
    }
    isChanged(oldEntity, newEntity) {
        return !isEqual(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
    }
    toPlainJson(object) {
        if (!object)
            return null;
        return JSON.parse(JSON.stringify(object));
    }
    isAlphaNumeric(value) {
        return isString(value) || isNumber(value);
    }
}
MatTableFilterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: MatTableFilterService, deps: [{ token: i1.AlphaNumericPredicateService }, { token: i2.ArrayPredicateService }], target: i0.ɵɵFactoryTarget.Injectable });
MatTableFilterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: MatTableFilterService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: MatTableFilterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.AlphaNumericPredicateService }, { type: i2.ArrayPredicateService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0LXRhYmxlLWZpbHRlci9zcmMvbGliL3NlcnZpY2VzL21hdC10YWJsZS1maWx0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sU0FBUyxNQUFNLHFCQUFxQixDQUFDO0FBQzVDLE9BQU8sS0FBSyxNQUFNLGlCQUFpQixDQUFDO0FBQ3BDLE9BQU8sS0FBSyxNQUFNLGlCQUFpQixDQUFDO0FBQ3BDLE9BQU8sVUFBVSxNQUFNLHNCQUFzQixDQUFDO0FBQzlDLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sU0FBUyxNQUFNLHFCQUFxQixDQUFDO0FBQzVDLE9BQU8sUUFBUSxNQUFNLG9CQUFvQixDQUFDO0FBQzFDLE9BQU8sUUFBUSxNQUFNLG9CQUFvQixDQUFDO0FBQzFDLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDOzs7O0FBTXhDLE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsWUFBb0Isb0JBQWtELEVBQVUsYUFBb0M7UUFBaEcseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE4QjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtJQUFHLENBQUM7SUFFakgsZUFBZSxDQUFDLFFBQXVCLEVBQUUsZUFBZ0MsRUFDekQsYUFBc0MsRUFBRSxZQUFxQjtRQUNsRixpQ0FBaUM7UUFDakMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsS0FBSyxNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUU7WUFDN0IsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxJQUFJLE9BQU8sWUFBWSxLQUFLLFNBQVMsRUFBRTtnQkFDNUYsbUdBQW1HO2dCQUNuRyxTQUFTO2FBQ1Y7WUFDRCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN0Qyw2REFBNkQ7Z0JBQzdELE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDckUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDbEcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxvREFBb0Q7b0JBQzdFLE1BQU0sZUFBZSxHQUFHLE9BQXdCLENBQUM7b0JBQ2pELElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEVBQUU7d0JBQy9CLE9BQU8sS0FBSyxDQUFDO3FCQUNkO2lCQUNGO3FCQUFNO29CQUNMLE1BQU0sYUFBYSxHQUFHLE9BQWtCLENBQUM7b0JBQ3pDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRTt3QkFDbEMsTUFBTSxTQUFTLEdBQXFCLEVBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDLENBQUM7d0JBQ3hGLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxFQUFFOzRCQUN6RSxPQUFPLEtBQUssQ0FBQzt5QkFDZDtxQkFDRjt5QkFBTSxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTt3QkFDN0IsTUFBTSxTQUFTLEdBQW9CLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDLENBQUM7d0JBQzVFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsRUFBRTs0QkFDbEUsT0FBTyxLQUFLLENBQUM7eUJBQ2Q7cUJBQ0Y7eUJBQU0sSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7d0JBQy9CLElBQUksU0FBUyxLQUFLLFlBQVksRUFBRTs0QkFDOUIsT0FBTyxLQUFLLENBQUM7eUJBQ2Q7cUJBQ0Y7eUJBQU07d0JBQ0wsTUFBTSxTQUFTLEdBQWtCLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDLENBQUM7d0JBQzFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixDQUFDLEVBQUU7NEJBQ2hGLCtGQUErRjs0QkFDL0Ysb0VBQW9FOzRCQUNwRSxPQUFPLEtBQUssQ0FBQzt5QkFDZDtxQkFDRjtpQkFDRjthQUNGO2lCQUFNO2dCQUNMLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLDBCQUEwQixDQUFDLGFBQXNDLEVBQUUsZUFBZ0MsRUFBRSxZQUFvQjtRQUUvSCxJQUFJLGVBQWUsSUFBSSxlQUFlLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ25FLE9BQU8sZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxPQUFPLGFBQWEsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxHQUFXLEVBQUUsWUFBcUI7UUFDNUQsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3pELENBQUM7SUFFTSxTQUFTLENBQUMsU0FBYyxFQUFFLFNBQWM7UUFDN0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU0sV0FBVyxDQUFDLE1BQVk7UUFDN0IsSUFBSSxDQUFDLE1BQU07WUFDVCxPQUFPLElBQUksQ0FBQztRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVPLGNBQWMsQ0FBQyxLQUFVO1FBQy9CLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOztrSEFoRlUscUJBQXFCO3NIQUFyQixxQkFBcUIsY0FGcEIsTUFBTTsyRkFFUCxxQkFBcUI7a0JBSGpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcGVydHlPcHRpb25zLCBQcmVkaWNhdGVGdW5jIH0gZnJvbSAnLi4vcHJvcGVydHktb3B0aW9ucyc7XG5pbXBvcnQgeyBJdGVtUGFpciB9IGZyb20gJy4vLi4vaXRlbS1wYWlyJztcbmltcG9ydCB7IEFycmF5UHJlZGljYXRlU2VydmljZSB9IGZyb20gJy4vYXJyYXktcHJlZGljYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWxwaGFOdW1lcmljUHJlZGljYXRlU2VydmljZSB9IGZyb20gJy4vYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgaXNFcXVhbCBmcm9tICdsb2Rhc2gtZXMvaXNFcXVhbCc7XG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC1lcy9jbG9uZURlZXAnO1xuaW1wb3J0IGlzTmlsIGZyb20gJ2xvZGFzaC1lcy9pc05pbCc7XG5pbXBvcnQgZXZlcnkgZnJvbSAnbG9kYXNoLWVzL2V2ZXJ5JztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC1lcy9pc0Z1bmN0aW9uJztcbmltcG9ydCBpc0FycmF5IGZyb20gJ2xvZGFzaC1lcy9pc0FycmF5JztcbmltcG9ydCBpc0Jvb2xlYW4gZnJvbSAnbG9kYXNoLWVzL2lzQm9vbGVhbic7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnbG9kYXNoLWVzL2lzU3RyaW5nJztcbmltcG9ydCBpc051bWJlciBmcm9tICdsb2Rhc2gtZXMvaXNOdW1iZXInO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSAnbG9kYXNoLWVzL2lzRW1wdHknO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4uL29wdGlvbnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUZpbHRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbHBoYU51bWVyaWNTZXJ2aWNlOiBBbHBoYU51bWVyaWNQcmVkaWNhdGVTZXJ2aWNlLCBwcml2YXRlIF9hcnJheVNlcnZpY2U6IEFycmF5UHJlZGljYXRlU2VydmljZSkge31cblxuICBwdWJsaWMgZmlsdGVyUHJlZGljYXRlKGl0ZW1QYWlyOiBJdGVtUGFpcjxhbnk+LCBwcm9wZXJ0eU9wdGlvbnM6IFByb3BlcnR5T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb21tb25PcHRpb25zOiBPcHRpb25zIHwgUHJlZGljYXRlRnVuYywgcHJvcGVydHlOYW1lPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXG4gICAgY29uc3QgZXhhbXBsZUtleXMgPSBPYmplY3Qua2V5cyhpdGVtUGFpci5leGFtcGxlKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBleGFtcGxlS2V5cykge1xuICAgICAgY29uc3QgZXhhbXBsZVZhbHVlID0gY2xvbmVEZWVwKGl0ZW1QYWlyLmV4YW1wbGVba2V5XSk7XG4gICAgICBpZiAoaXNOaWwoZXhhbXBsZVZhbHVlKSB8fCBldmVyeShleGFtcGxlVmFsdWUsIGlzRW1wdHkpICYmIHR5cGVvZiBleGFtcGxlVmFsdWUgIT09ICdib29sZWFuJykge1xuICAgICAgICAvLyBpZiBleGFtcGxlIGVudGl0eSdzIHByb3BlcnR5IGlzIHVuZGVmaW5lZC9udWxsL2VtcHR5IHRoZW4gaXQgbWVhbnMgdGhlIGNhbGxlciB3YW50cyBhbGwgdGhlIGRhdGFcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVBhaXIuaXRlbT8uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAvLyBpZiBleGFtcGxlIGVudGl0eSBoYXMgYWRkaXRpb25hbCBjb2x1bW5zIHRoZW4gc2VhcmNoIGZhaWxzXG4gICAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IGNsb25lRGVlcChpdGVtUGFpci5pdGVtW2tleV0pO1xuICAgICAgICBjb25zdCBuZXh0UHJvcGVydHlOYW1lID0gdGhpcy5nZXROZXh0UHJvcGVydHlOYW1lKGtleSwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZmluYWxpemVPcHRpb25zRm9yUHJvcGVydHkoY29tbW9uT3B0aW9ucywgcHJvcGVydHlPcHRpb25zLCBuZXh0UHJvcGVydHlOYW1lKTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHsgLy8gaWYgdXNlciBkZWZpbmVkIHByZWRpY2F0ZSBpcyBwcmVzZW50IGZvciBwcm9wZXJ0eVxuICAgICAgICAgIGNvbnN0IGN1c3RvbVByZWRpY2F0ZSA9IG9wdGlvbnMgYXMgUHJlZGljYXRlRnVuYztcbiAgICAgICAgICBpZiAoIWN1c3RvbVByZWRpY2F0ZShpdGVtVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNvbHVtbk9wdGlvbnMgPSBvcHRpb25zIGFzIE9wdGlvbnM7XG4gICAgICAgICAgaWYgKHRoaXMuaXNBbHBoYU51bWVyaWMoaXRlbVZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVQYWlyOiBJdGVtUGFpcjxzdHJpbmc+ID0ge2l0ZW06IGl0ZW1WYWx1ZS50b1N0cmluZygpLCBleGFtcGxlOiBleGFtcGxlVmFsdWV9O1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9hbHBoYU51bWVyaWNTZXJ2aWNlLmV4ZWN1dGVDb25kaXRpb24odmFsdWVQYWlyLCBjb2x1bW5PcHRpb25zKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KGl0ZW1WYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlUGFpcjogSXRlbVBhaXI8YW55W10+ID0ge2l0ZW06IGl0ZW1WYWx1ZSwgZXhhbXBsZTogZXhhbXBsZVZhbHVlfTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fYXJyYXlTZXJ2aWNlLmV4ZWN1dGVDb25kaXRpb24odmFsdWVQYWlyLCBjb2x1bW5PcHRpb25zKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0Jvb2xlYW4oaXRlbVZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKGl0ZW1WYWx1ZSAhPT0gZXhhbXBsZVZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVQYWlyOiBJdGVtUGFpcjxhbnk+ID0ge2l0ZW06IGl0ZW1WYWx1ZSwgZXhhbXBsZTogZXhhbXBsZVZhbHVlfTtcbiAgICAgICAgICAgIGlmICghdGhpcy5maWx0ZXJQcmVkaWNhdGUodmFsdWVQYWlyLCBwcm9wZXJ0eU9wdGlvbnMsIG9wdGlvbnMsIG5leHRQcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgaW5uZXIgcHJvcGVydGllcyByZXR1cm5zIHRydWUsIHRoaXMgc2hvdWxkbnQgYWZmZWN0IHRoZSB3aG9sZSBpdGVtJ3MgZmlsdGVyaW5nXG4gICAgICAgICAgICAgIC8vIGhvd2V2ZXIgaWYgaXQgcmV0dXJucyBmYWxzZSB0aGVuIHRoZSBpdGVtIG11c3Qgbm90IGJlIGluIHRoZSBsaXN0XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGZpbmFsaXplT3B0aW9uc0ZvclByb3BlcnR5KGNvbW1vbk9wdGlvbnM6IE9wdGlvbnMgfCBQcmVkaWNhdGVGdW5jLCBwcm9wZXJ0eU9wdGlvbnM6IFByb3BlcnR5T3B0aW9ucywgcHJvcGVydHlOYW1lOiBzdHJpbmcpOlxuICAgT3B0aW9ucyB8IFByZWRpY2F0ZUZ1bmMge1xuICAgIGlmIChwcm9wZXJ0eU9wdGlvbnMgJiYgcHJvcGVydHlPcHRpb25zLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgIHJldHVybiBwcm9wZXJ0eU9wdGlvbnNbcHJvcGVydHlOYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbW1vbk9wdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0UHJvcGVydHlOYW1lKGtleTogc3RyaW5nLCBwcm9wZXJ0eU5hbWU/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcm9wZXJ0eU5hbWUgPyAocHJvcGVydHlOYW1lICsgJy4nICsga2V5KSA6IGtleTtcbiAgfVxuXG4gIHB1YmxpYyBpc0NoYW5nZWQob2xkRW50aXR5OiBhbnksIG5ld0VudGl0eTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFpc0VxdWFsKHRoaXMudG9QbGFpbkpzb24ob2xkRW50aXR5KSwgdGhpcy50b1BsYWluSnNvbihuZXdFbnRpdHkpKTtcbiAgfVxuXG4gIHB1YmxpYyB0b1BsYWluSnNvbihvYmplY3Q/OiBhbnkpOiBKU09OIHwgbnVsbCB7XG4gICAgaWYgKCFvYmplY3QpXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNBbHBoYU51bWVyaWModmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgfHwgaXNOdW1iZXIodmFsdWUpO1xuICB9XG59XG4iXX0=