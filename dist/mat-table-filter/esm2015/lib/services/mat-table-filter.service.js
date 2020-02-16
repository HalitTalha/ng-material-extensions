import { __decorate, __metadata } from "tslib";
import { ArrayPredicateService } from './array-predicate.service';
import { AlphaNumericPredicateService } from './alpha-numeric-predicate.service';
import { Injectable } from '@angular/core';
import * as LODASH from 'lodash';
import { isFunction } from 'util';
import * as i0 from "@angular/core";
import * as i1 from "./alpha-numeric-predicate.service";
import * as i2 from "./array-predicate.service";
let MatTableFilterService = class MatTableFilterService {
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
};
MatTableFilterService.ctorParameters = () => [
    { type: AlphaNumericPredicateService },
    { type: ArrayPredicateService }
];
MatTableFilterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(i0.ɵɵinject(i1.AlphaNumericPredicateService), i0.ɵɵinject(i2.ArrayPredicateService)); }, token: MatTableFilterService, providedIn: "root" });
MatTableFilterService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [AlphaNumericPredicateService, ArrayPredicateService])
], MatTableFilterService);
export { MatTableFilterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXRhYmxlLWZpbHRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tYXQtdGFibGUtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUtsQyxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQUNoQyxZQUFvQixvQkFBa0QsRUFBVSxhQUFvQztRQUFoRyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQThCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQXVCO0lBQUcsQ0FBQztJQUVqSCxlQUFlLENBQUMsUUFBdUIsRUFBRSxlQUFnQyxFQUN6RCxhQUFzQyxFQUFFLFlBQXFCO1FBQ2xGLGlDQUFpQztRQUNqQyxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxLQUFLLE1BQU0sR0FBRyxJQUFJLFdBQVcsRUFBRTtZQUM3QixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3RCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sWUFBWSxLQUFLLFNBQVMsRUFBRTtnQkFDakgsbUdB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LFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVNLFdBQVcsQ0FBQyxNQUFXO1FBQzVCLElBQUksTUFBTSxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRU8sY0FBYyxDQUFDLEtBQVU7UUFDL0IsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUNGLENBQUE7O1lBbEYyQyw0QkFBNEI7WUFBeUIscUJBQXFCOzs7QUFEekcscUJBQXFCO0lBSGpDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7cUNBRTBDLDRCQUE0QixFQUF5QixxQkFBcUI7R0FEekcscUJBQXFCLENBbUZqQztTQW5GWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9wZXJ0eU9wdGlvbnMsIFByZWRpY2F0ZUZ1bmMgfSBmcm9tICcuLi9wcm9wZXJ0eS1vcHRpb25zJztcbmltcG9ydCB7IEl0ZW1QYWlyIH0gZnJvbSAnLi8uLi9pdGVtLXBhaXInO1xuaW1wb3J0IHsgQXJyYXlQcmVkaWNhdGVTZXJ2aWNlIH0gZnJvbSAnLi9hcnJheS1wcmVkaWNhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBBbHBoYU51bWVyaWNQcmVkaWNhdGVTZXJ2aWNlIH0gZnJvbSAnLi9hbHBoYS1udW1lcmljLXByZWRpY2F0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIExPREFTSCBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4uL29wdGlvbnMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJ3V0aWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUZpbHRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbHBoYU51bWVyaWNTZXJ2aWNlOiBBbHBoYU51bWVyaWNQcmVkaWNhdGVTZXJ2aWNlLCBwcml2YXRlIF9hcnJheVNlcnZpY2U6IEFycmF5UHJlZGljYXRlU2VydmljZSkge31cblxuICBwdWJsaWMgZmlsdGVyUHJlZGljYXRlKGl0ZW1QYWlyOiBJdGVtUGFpcjxhbnk+LCBwcm9wZXJ0eU9wdGlvbnM6IFByb3BlcnR5T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb21tb25PcHRpb25zOiBPcHRpb25zIHwgUHJlZGljYXRlRnVuYywgcHJvcGVydHlOYW1lPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXG4gICAgY29uc3QgZXhhbXBsZUtleXMgPSBPYmplY3Qua2V5cyhpdGVtUGFpci5leGFtcGxlKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBleGFtcGxlS2V5cykge1xuICAgICAgY29uc3QgZXhhbXBsZVZhbHVlID0gTE9EQVNILmNsb25lRGVlcChpdGVtUGFpci5leGFtcGxlW2tleV0pO1xuICAgICAgaWYgKExPREFTSC5pc05pbChleGFtcGxlVmFsdWUpIHx8IExPREFTSC5ldmVyeShleGFtcGxlVmFsdWUsIExPREFTSC5pc0VtcHR5KSAmJiB0eXBlb2YgZXhhbXBsZVZhbHVlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgLy8gaWYgZXhhbXBsZSBlbnRpdHkncyBwcm9wZXJ0eSBpcyB1bmRlZmluZWQvbnVsbC9lbXB0eSB0aGVuIGl0IG1lYW5zIHRoZSBjYWxsZXIgd2FudHMgYWxsIHRoZSBkYXRhXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1QYWlyLml0ZW0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAvLyBpZiBleGFtcGxlIGVudGl0eSBoYXMgYWRkaXRpb25hbCBjb2x1bW5zIHRoZW4gc2VhcmNoIGZhaWxzXG4gICAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IExPREFTSC5jbG9uZURlZXAoaXRlbVBhaXIuaXRlbVtrZXldKTtcbiAgICAgICAgY29uc3QgbmV4dFByb3BlcnR5TmFtZSA9IHRoaXMuZ2V0TmV4dFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUsIGtleSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmZpbmFsaXplT3B0aW9uc0ZvclByb3BlcnR5KGNvbW1vbk9wdGlvbnMsIHByb3BlcnR5T3B0aW9ucywgbmV4dFByb3BlcnR5TmFtZSk7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7IC8vIGlmIHVzZXIgZGVmaW5lZCBwcmVkaWNhdGUgaXMgcHJlc2VudCBmb3IgcHJvcGVydHlcbiAgICAgICAgICBjb25zdCBjdXN0b21QcmVkaWNhdGUgPSBvcHRpb25zIGFzIFByZWRpY2F0ZUZ1bmM7XG4gICAgICAgICAgaWYgKCFjdXN0b21QcmVkaWNhdGUoaXRlbVZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjb2x1bW5PcHRpb25zID0gb3B0aW9ucyBhcyBPcHRpb25zO1xuICAgICAgICAgIGlmICh0aGlzLmlzQWxwaGFOdW1lcmljKGl0ZW1WYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlUGFpcjogSXRlbVBhaXI8c3RyaW5nPiA9IHtpdGVtOiBpdGVtVmFsdWUudG9TdHJpbmcoKSwgZXhhbXBsZTogZXhhbXBsZVZhbHVlfTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fYWxwaGFOdW1lcmljU2VydmljZS5leGVjdXRlQ29uZGl0aW9uKHZhbHVlUGFpciwgY29sdW1uT3B0aW9ucykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoTE9EQVNILmlzQXJyYXkoaXRlbVZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVQYWlyOiBJdGVtUGFpcjxhbnlbXT4gPSB7aXRlbTogaXRlbVZhbHVlLCBleGFtcGxlOiBleGFtcGxlVmFsdWV9O1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9hcnJheVNlcnZpY2UuZXhlY3V0ZUNvbmRpdGlvbih2YWx1ZVBhaXIsIGNvbHVtbk9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKExPREFTSC5pc0Jvb2xlYW4oaXRlbVZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKGl0ZW1WYWx1ZSAhPT0gZXhhbXBsZVZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVQYWlyOiBJdGVtUGFpcjxhbnk+ID0ge2l0ZW06IGl0ZW1WYWx1ZSwgZXhhbXBsZTogZXhhbXBsZVZhbHVlfTtcbiAgICAgICAgICAgIGlmICghdGhpcy5maWx0ZXJQcmVkaWNhdGUodmFsdWVQYWlyLCBwcm9wZXJ0eU9wdGlvbnMsIG9wdGlvbnMsIG5leHRQcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgaW5uZXIgcHJvcGVydGllcyByZXR1cm5zIHRydWUsIHRoaXMgc2hvdWxkbnQgYWZmZWN0IHRoZSB3aG9sZSBpdGVtJ3MgZmlsdGVyaW5nXG4gICAgICAgICAgICAgIC8vIGhvd2V2ZXIgaWYgaXQgcmV0dXJucyBmYWxzZSB0aGVuIHRoZSBpdGVtIG11c3Qgbm90IGJlIGluIHRoZSBsaXN0XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGZpbmFsaXplT3B0aW9uc0ZvclByb3BlcnR5KGNvbW1vbk9wdGlvbnM6IE9wdGlvbnMgfCBQcmVkaWNhdGVGdW5jLCBwcm9wZXJ0eU9wdGlvbnM6IFByb3BlcnR5T3B0aW9ucywgcHJvcGVydHlOYW1lOiBzdHJpbmcpOlxuICAgT3B0aW9ucyB8IFByZWRpY2F0ZUZ1bmMge1xuICAgIGlmIChwcm9wZXJ0eU9wdGlvbnMgJiYgcHJvcGVydHlPcHRpb25zLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgIHJldHVybiBwcm9wZXJ0eU9wdGlvbnNbcHJvcGVydHlOYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbW1vbk9wdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0UHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZSA/IChwcm9wZXJ0eU5hbWUgKyAnLicgKyBrZXkpIDoga2V5O1xuICB9XG5cbiAgcHVibGljIGlzQ2hhbmdlZChvbGRFbnRpdHk6IGFueSwgbmV3RW50aXR5OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIUxPREFTSC5pc0VxdWFsKHRoaXMudG9QbGFpbkpzb24ob2xkRW50aXR5KSwgdGhpcy50b1BsYWluSnNvbihuZXdFbnRpdHkpKTtcbiAgfVxuXG4gIHB1YmxpYyB0b1BsYWluSnNvbihvYmplY3Q6IGFueSk6IEpTT04ge1xuICAgIGlmIChvYmplY3QpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNBbHBoYU51bWVyaWModmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBMT0RBU0guaXNTdHJpbmcodmFsdWUpIHx8IExPREFTSC5pc051bWJlcih2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==