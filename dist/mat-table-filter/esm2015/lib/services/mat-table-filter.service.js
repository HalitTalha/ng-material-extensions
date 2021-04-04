import { __decorate, __metadata } from "tslib";
import { ArrayPredicateService } from './array-predicate.service';
import { AlphaNumericPredicateService } from './alpha-numeric-predicate.service';
import { Injectable } from '@angular/core';
import * as LODASH from 'lodash-es';
import * as i0 from "@angular/core";
import * as i1 from "./alpha-numeric-predicate.service";
import * as i2 from "./array-predicate.service";
let MatTableFilterService = class MatTableFilterService {
    constructor(_alphaNumericService, _arrayService) {
        this._alphaNumericService = _alphaNumericService;
        this._arrayService = _arrayService;
    }
    filterPredicate(itemPair, propertyOptions, commonOptions, propertyName) {
        var _a;
        // tslint:disable-next-line:forin
        const exampleKeys = Object.keys(itemPair.example);
        for (const key of exampleKeys) {
            const exampleValue = LODASH.cloneDeep(itemPair.example[key]);
            if (LODASH.isNil(exampleValue) || LODASH.every(exampleValue, LODASH.isEmpty) && typeof exampleValue !== 'boolean') {
                // if example entity's property is undefined/null/empty then it means the caller wants all the data
                continue;
            }
            if ((_a = itemPair.item) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(key)) {
                // if example entity has additional columns then search fails
                const itemValue = LODASH.cloneDeep(itemPair.item[key]);
                const nextPropertyName = this.getNextPropertyName(propertyName, key);
                const options = this.finalizeOptionsForProperty(commonOptions, propertyOptions, nextPropertyName);
                if (LODASH.isFunction(options)) { // if user defined predicate is present for property
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXRhYmxlLWZpbHRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tYXQtdGFibGUtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxXQUFXLENBQUM7Ozs7QUFNcEMsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFDaEMsWUFBb0Isb0JBQWtELEVBQVUsYUFBb0M7UUFBaEcseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE4QjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtJQUFHLENBQUM7SUFFakgsZUFBZSxDQUFDLFFBQXVCLEVBQUUsZUFBZ0MsRUFDekQsYUFBc0MsRUFBRSxZQUFxQjs7UUFDbEYsaUNBQWlDO1FBQ2pDLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELEtBQUssTUFBTSxHQUFHLElBQUksV0FBVyxFQUFFO1lBQzdCLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdELElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxZQUFZLEtBQUssU0FBUyxFQUFFO2dCQUNqSCxtR0FBbUc7Z0JBQ25HLFNBQVM7YUFDVjtZQUNELFVBQUksUUFBUSxDQUFD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QyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRU0sV0FBVyxDQUFDLE1BQVc7UUFDNUIsSUFBSSxNQUFNLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFTyxjQUFjLENBQUMsS0FBVTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDO0NBQ0YsQ0FBQTs7WUFsRjJDLDRCQUE0QjtZQUF5QixxQkFBcUI7OztBQUR6RyxxQkFBcUI7SUFIakMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztxQ0FFMEMsNEJBQTRCLEVBQXlCLHFCQUFxQjtHQUR6RyxxQkFBcUIsQ0FtRmpDO1NBbkZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5T3B0aW9ucywgUHJlZGljYXRlRnVuYyB9IGZyb20gJy4uL3Byb3BlcnR5LW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBJdGVtUGFpciB9IGZyb20gJy4vLi4vaXRlbS1wYWlyJztcclxuaW1wb3J0IHsgQXJyYXlQcmVkaWNhdGVTZXJ2aWNlIH0gZnJvbSAnLi9hcnJheS1wcmVkaWNhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEFscGhhTnVtZXJpY1ByZWRpY2F0ZVNlcnZpY2UgfSBmcm9tICcuL2FscGhhLW51bWVyaWMtcHJlZGljYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIExPREFTSCBmcm9tICdsb2Rhc2gtZXMnO1xyXG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vb3B0aW9ucyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUZpbHRlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FscGhhTnVtZXJpY1NlcnZpY2U6IEFscGhhTnVtZXJpY1ByZWRpY2F0ZVNlcnZpY2UsIHByaXZhdGUgX2FycmF5U2VydmljZTogQXJyYXlQcmVkaWNhdGVTZXJ2aWNlKSB7fVxyXG5cclxuICBwdWJsaWMgZmlsdGVyUHJlZGljYXRlKGl0ZW1QYWlyOiBJdGVtUGFpcjxhbnk+LCBwcm9wZXJ0eU9wdGlvbnM6IFByb3BlcnR5T3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vbk9wdGlvbnM6IE9wdGlvbnMgfCBQcmVkaWNhdGVGdW5jLCBwcm9wZXJ0eU5hbWU/OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG4gICAgY29uc3QgZXhhbXBsZUtleXMgPSBPYmplY3Qua2V5cyhpdGVtUGFpci5leGFtcGxlKTtcclxuICAgIGZvciAoY29uc3Qga2V5IG9mIGV4YW1wbGVLZXlzKSB7XHJcbiAgICAgIGNvbnN0IGV4YW1wbGVWYWx1ZSA9IExPREFTSC5jbG9uZURlZXAoaXRlbVBhaXIuZXhhbXBsZVtrZXldKTtcclxuICAgICAgaWYgKExPREFTSC5pc05pbChleGFtcGxlVmFsdWUpIHx8IExPREFTSC5ldmVyeShleGFtcGxlVmFsdWUsIExPREFTSC5pc0VtcHR5KSAmJiB0eXBlb2YgZXhhbXBsZVZhbHVlICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAvLyBpZiBleGFtcGxlIGVudGl0eSdzIHByb3BlcnR5IGlzIHVuZGVmaW5lZC9udWxsL2VtcHR5IHRoZW4gaXQgbWVhbnMgdGhlIGNhbGxlciB3YW50cyBhbGwgdGhlIGRhdGFcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVBhaXIuaXRlbT8uaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIC8vIGlmIGV4YW1wbGUgZW50aXR5IGhhcyBhZGRpdGlvbmFsIGNvbHVtbnMgdGhlbiBzZWFyY2ggZmFpbHNcclxuICAgICAgICBjb25zdCBpdGVtVmFsdWUgPSBMT0RBU0guY2xvbmVEZWVwKGl0ZW1QYWlyLml0ZW1ba2V5XSk7XHJcbiAgICAgICAgY29uc3QgbmV4dFByb3BlcnR5TmFtZSA9IHRoaXMuZ2V0TmV4dFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUsIGtleSk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZmluYWxpemVPcHRpb25zRm9yUHJvcGVydHkoY29tbW9uT3B0aW9ucywgcHJvcGVydHlPcHRpb25zLCBuZXh0UHJvcGVydHlOYW1lKTtcclxuICAgICAgICBpZiAoTE9EQVNILmlzRnVuY3Rpb24ob3B0aW9ucykpIHsgLy8gaWYgdXNlciBkZWZpbmVkIHByZWRpY2F0ZSBpcyBwcmVzZW50IGZvciBwcm9wZXJ0eVxyXG4gICAgICAgICAgY29uc3QgY3VzdG9tUHJlZGljYXRlID0gb3B0aW9ucyBhcyBQcmVkaWNhdGVGdW5jO1xyXG4gICAgICAgICAgaWYgKCFjdXN0b21QcmVkaWNhdGUoaXRlbVZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGNvbHVtbk9wdGlvbnMgPSBvcHRpb25zIGFzIE9wdGlvbnM7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc0FscGhhTnVtZXJpYyhpdGVtVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlUGFpcjogSXRlbVBhaXI8c3RyaW5nPiA9IHtpdGVtOiBpdGVtVmFsdWUudG9TdHJpbmcoKSwgZXhhbXBsZTogZXhhbXBsZVZhbHVlfTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9hbHBoYU51bWVyaWNTZXJ2aWNlLmV4ZWN1dGVDb25kaXRpb24odmFsdWVQYWlyLCBjb2x1bW5PcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChMT0RBU0guaXNBcnJheShpdGVtVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlUGFpcjogSXRlbVBhaXI8YW55W10+ID0ge2l0ZW06IGl0ZW1WYWx1ZSwgZXhhbXBsZTogZXhhbXBsZVZhbHVlfTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9hcnJheVNlcnZpY2UuZXhlY3V0ZUNvbmRpdGlvbih2YWx1ZVBhaXIsIGNvbHVtbk9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKExPREFTSC5pc0Jvb2xlYW4oaXRlbVZhbHVlKSkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbVZhbHVlICE9PSBleGFtcGxlVmFsdWUpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlUGFpcjogSXRlbVBhaXI8YW55PiA9IHtpdGVtOiBpdGVtVmFsdWUsIGV4YW1wbGU6IGV4YW1wbGVWYWx1ZX07XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5maWx0ZXJQcmVkaWNhdGUodmFsdWVQYWlyLCBwcm9wZXJ0eU9wdGlvbnMsIG9wdGlvbnMsIG5leHRQcm9wZXJ0eU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgLy8gaWYgb25lIG9mIHRoZSBpbm5lciBwcm9wZXJ0aWVzIHJldHVybnMgdHJ1ZSwgdGhpcyBzaG91bGRudCBhZmZlY3QgdGhlIHdob2xlIGl0ZW0ncyBmaWx0ZXJpbmdcclxuICAgICAgICAgICAgICAvLyBob3dldmVyIGlmIGl0IHJldHVybnMgZmFsc2UgdGhlbiB0aGUgaXRlbSBtdXN0IG5vdCBiZSBpbiB0aGUgbGlzdFxyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaW5hbGl6ZU9wdGlvbnNGb3JQcm9wZXJ0eShjb21tb25PcHRpb25zOiBPcHRpb25zIHwgUHJlZGljYXRlRnVuYywgcHJvcGVydHlPcHRpb25zOiBQcm9wZXJ0eU9wdGlvbnMsIHByb3BlcnR5TmFtZTogc3RyaW5nKTpcclxuICAgT3B0aW9ucyB8IFByZWRpY2F0ZUZ1bmMge1xyXG4gICAgaWYgKHByb3BlcnR5T3B0aW9ucyAmJiBwcm9wZXJ0eU9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xyXG4gICAgICByZXR1cm4gcHJvcGVydHlPcHRpb25zW3Byb3BlcnR5TmFtZV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY29tbW9uT3B0aW9ucztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TmV4dFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZSA/IChwcm9wZXJ0eU5hbWUgKyAnLicgKyBrZXkpIDoga2V5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQ2hhbmdlZChvbGRFbnRpdHk6IGFueSwgbmV3RW50aXR5OiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhTE9EQVNILmlzRXF1YWwodGhpcy50b1BsYWluSnNvbihvbGRFbnRpdHkpLCB0aGlzLnRvUGxhaW5Kc29uKG5ld0VudGl0eSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvUGxhaW5Kc29uKG9iamVjdDogYW55KTogSlNPTiB7XHJcbiAgICBpZiAob2JqZWN0KSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNBbHBoYU51bWVyaWModmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIExPREFTSC5pc1N0cmluZyh2YWx1ZSkgfHwgTE9EQVNILmlzTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19