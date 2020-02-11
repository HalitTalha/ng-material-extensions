import { __values } from "tslib";
import { ArrayPredicateService } from './array-predicate.service';
import { AlphaNumericPredicateService } from './alpha-numeric-predicate.service';
import { Injectable } from '@angular/core';
import * as LODASH from 'lodash';
import { isFunction } from 'util';
import * as i0 from "@angular/core";
import * as i1 from "./alpha-numeric-predicate.service";
import * as i2 from "./array-predicate.service";
var MatTableFilterService = /** @class */ (function () {
    function MatTableFilterService(_alphaNumericService, _arrayService) {
        this._alphaNumericService = _alphaNumericService;
        this._arrayService = _arrayService;
    }
    MatTableFilterService.prototype.filterPredicate = function (itemPair, propertyOptions, commonOptions, propertyName) {
        var e_1, _a;
        // tslint:disable-next-line:forin
        var exampleKeys = Object.keys(itemPair.example);
        try {
            for (var exampleKeys_1 = __values(exampleKeys), exampleKeys_1_1 = exampleKeys_1.next(); !exampleKeys_1_1.done; exampleKeys_1_1 = exampleKeys_1.next()) {
                var key = exampleKeys_1_1.value;
                var exampleValue = LODASH.cloneDeep(itemPair.example[key]);
                if (LODASH.isNil(exampleValue) || LODASH.every(exampleValue, LODASH.isEmpty) && typeof exampleValue !== 'boolean') {
                    // if example entity's property is undefined/null/empty then it means the caller wants all the data
                    continue;
                }
                if (itemPair.item.hasOwnProperty(key)) {
                    // if example entity has additional columns then search fails
                    var itemValue = LODASH.cloneDeep(itemPair.item[key]);
                    var nextPropertyName = this.getNextPropertyName(propertyName, key);
                    var options = this.finalizeOptionsForProperty(commonOptions, propertyOptions, nextPropertyName);
                    if (isFunction(options)) { // if user defined predicate is present for property
                        var customPredicate = options;
                        if (!customPredicate(itemValue)) {
                            return false;
                        }
                    }
                    else {
                        var columnOptions = options;
                        if (this.isAlphaNumeric(itemValue)) {
                            var valuePair = { item: itemValue.toString(), example: exampleValue };
                            if (!this._alphaNumericService.executeCondition(valuePair, columnOptions)) {
                                return false;
                            }
                        }
                        else if (LODASH.isArray(itemValue)) {
                            var valuePair = { item: itemValue, example: exampleValue };
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
                            var valuePair = { item: itemValue, example: exampleValue };
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (exampleKeys_1_1 && !exampleKeys_1_1.done && (_a = exampleKeys_1.return)) _a.call(exampleKeys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return true;
    };
    MatTableFilterService.prototype.finalizeOptionsForProperty = function (commonOptions, propertyOptions, propertyName) {
        if (propertyOptions && propertyOptions.hasOwnProperty(propertyName)) {
            return propertyOptions[propertyName];
        }
        else {
            return commonOptions;
        }
    };
    MatTableFilterService.prototype.getNextPropertyName = function (propertyName, key) {
        return propertyName ? (propertyName + '.' + key) : key;
    };
    MatTableFilterService.prototype.isChanged = function (oldEntity, newEntity) {
        return !LODASH.isEqual(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
    };
    MatTableFilterService.prototype.toPlainJson = function (object) {
        if (object) {
            return JSON.parse(JSON.stringify(object));
        }
        else {
            return undefined;
        }
    };
    MatTableFilterService.prototype.isAlphaNumeric = function (value) {
        return LODASH.isString(value) || LODASH.isNumber(value);
    };
    MatTableFilterService.ɵfac = function MatTableFilterService_Factory(t) { return new (t || MatTableFilterService)(i0.ɵɵinject(i1.AlphaNumericPredicateService), i0.ɵɵinject(i2.ArrayPredicateService)); };
    MatTableFilterService.ɵprov = i0.ɵɵdefineInjectable({ token: MatTableFilterService, factory: MatTableFilterService.ɵfac, providedIn: 'root' });
    return MatTableFilterService;
}());
export { MatTableFilterService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MatTableFilterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AlphaNumericPredicateService }, { type: i2.ArrayPredicateService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXRhYmxlLWZpbHRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tYXQtdGFibGUtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUVsQztJQUlFLCtCQUFvQixvQkFBa0QsRUFBVSxhQUFvQztRQUFoRyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQThCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQXVCO0lBQUcsQ0FBQztJQUVqSCwrQ0FBZSxHQUF0QixVQUF1QixRQUF1QixFQUFFLGVBQWdDLEVBQ3pELGFBQXNDLEVBQUUsWUFBcUI7O1FBQ2xGLGlDQUFpQztRQUNqQyxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7WUFDbEQsS0FBa0IsSUFBQSxnQkFBQSxTQUFBLFdBQVcsQ0FBQSx3Q0FBQSxpRUFBRTtnQkFBMUIsSUFBTSxHQUFHLHdCQUFBO2dCQUNaLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sWUFBWSxLQUFLLFNB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RSxTQUFjO1FBQzdDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFTSwyQ0FBVyxHQUFsQixVQUFtQixNQUFXO1FBQzVCLElBQUksTUFBTSxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRU8sOENBQWMsR0FBdEIsVUFBdUIsS0FBVTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDOzhGQWxGVSxxQkFBcUI7aUVBQXJCLHFCQUFxQixXQUFyQixxQkFBcUIsbUJBRnBCLE1BQU07Z0NBVnBCO0NBK0ZDLEFBdEZELElBc0ZDO1NBbkZZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBSGpDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5T3B0aW9ucywgUHJlZGljYXRlRnVuYyB9IGZyb20gJy4uL3Byb3BlcnR5LW9wdGlvbnMnO1xuaW1wb3J0IHsgSXRlbVBhaXIgfSBmcm9tICcuLy4uL2l0ZW0tcGFpcic7XG5pbXBvcnQgeyBBcnJheVByZWRpY2F0ZVNlcnZpY2UgfSBmcm9tICcuL2FycmF5LXByZWRpY2F0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFscGhhTnVtZXJpY1ByZWRpY2F0ZVNlcnZpY2UgfSBmcm9tICcuL2FscGhhLW51bWVyaWMtcHJlZGljYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgTE9EQVNIIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vb3B0aW9ucyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAndXRpbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRmlsdGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FscGhhTnVtZXJpY1NlcnZpY2U6IEFscGhhTnVtZXJpY1ByZWRpY2F0ZVNlcnZpY2UsIHByaXZhdGUgX2FycmF5U2VydmljZTogQXJyYXlQcmVkaWNhdGVTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBmaWx0ZXJQcmVkaWNhdGUoaXRlbVBhaXI6IEl0ZW1QYWlyPGFueT4sIHByb3BlcnR5T3B0aW9uczogUHJvcGVydHlPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vbk9wdGlvbnM6IE9wdGlvbnMgfCBQcmVkaWNhdGVGdW5jLCBwcm9wZXJ0eU5hbWU/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBjb25zdCBleGFtcGxlS2V5cyA9IE9iamVjdC5rZXlzKGl0ZW1QYWlyLmV4YW1wbGUpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGV4YW1wbGVLZXlzKSB7XG4gICAgICBjb25zdCBleGFtcGxlVmFsdWUgPSBMT0RBU0guY2xvbmVEZWVwKGl0ZW1QYWlyLmV4YW1wbGVba2V5XSk7XG4gICAgICBpZiAoTE9EQVNILmlzTmlsKGV4YW1wbGVWYWx1ZSkgfHwgTE9EQVNILmV2ZXJ5KGV4YW1wbGVWYWx1ZSwgTE9EQVNILmlzRW1wdHkpICYmIHR5cGVvZiBleGFtcGxlVmFsdWUgIT09ICdib29sZWFuJykge1xuICAgICAgICAvLyBpZiBleGFtcGxlIGVudGl0eSdzIHByb3BlcnR5IGlzIHVuZGVmaW5lZC9udWxsL2VtcHR5IHRoZW4gaXQgbWVhbnMgdGhlIGNhbGxlciB3YW50cyBhbGwgdGhlIGRhdGFcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVBhaXIuaXRlbS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIC8vIGlmIGV4YW1wbGUgZW50aXR5IGhhcyBhZGRpdGlvbmFsIGNvbHVtbnMgdGhlbiBzZWFyY2ggZmFpbHNcbiAgICAgICAgY29uc3QgaXRlbVZhbHVlID0gTE9EQVNILmNsb25lRGVlcChpdGVtUGFpci5pdGVtW2tleV0pO1xuICAgICAgICBjb25zdCBuZXh0UHJvcGVydHlOYW1lID0gdGhpcy5nZXROZXh0UHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSwga2V5KTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZmluYWxpemVPcHRpb25zRm9yUHJvcGVydHkoY29tbW9uT3B0aW9ucywgcHJvcGVydHlPcHRpb25zLCBuZXh0UHJvcGVydHlOYW1lKTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHsgLy8gaWYgdXNlciBkZWZpbmVkIHByZWRpY2F0ZSBpcyBwcmVzZW50IGZvciBwcm9wZXJ0eVxuICAgICAgICAgIGNvbnN0IGN1c3RvbVByZWRpY2F0ZSA9IG9wdGlvbnMgYXMgUHJlZGljYXRlRnVuYztcbiAgICAgICAgICBpZiAoIWN1c3RvbVByZWRpY2F0ZShpdGVtVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNvbHVtbk9wdGlvbnMgPSBvcHRpb25zIGFzIE9wdGlvbnM7XG4gICAgICAgICAgaWYgKHRoaXMuaXNBbHBoYU51bWVyaWMoaXRlbVZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVQYWlyOiBJdGVtUGFpcjxzdHJpbmc+ID0ge2l0ZW06IGl0ZW1WYWx1ZS50b1N0cmluZygpLCBleGFtcGxlOiBleGFtcGxlVmFsdWV9O1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9hbHBoYU51bWVyaWNTZXJ2aWNlLmV4ZWN1dGVDb25kaXRpb24odmFsdWVQYWlyLCBjb2x1bW5PcHRpb25zKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChMT0RBU0guaXNBcnJheShpdGVtVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZVBhaXI6IEl0ZW1QYWlyPGFueVtdPiA9IHtpdGVtOiBpdGVtVmFsdWUsIGV4YW1wbGU6IGV4YW1wbGVWYWx1ZX07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2FycmF5U2VydmljZS5leGVjdXRlQ29uZGl0aW9uKHZhbHVlUGFpciwgY29sdW1uT3B0aW9ucykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoTE9EQVNILmlzQm9vbGVhbihpdGVtVmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAoaXRlbVZhbHVlICE9PSBleGFtcGxlVmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZVBhaXI6IEl0ZW1QYWlyPGFueT4gPSB7aXRlbTogaXRlbVZhbHVlLCBleGFtcGxlOiBleGFtcGxlVmFsdWV9O1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZpbHRlclByZWRpY2F0ZSh2YWx1ZVBhaXIsIHByb3BlcnR5T3B0aW9ucywgb3B0aW9ucywgbmV4dFByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgICAgLy8gaWYgb25lIG9mIHRoZSBpbm5lciBwcm9wZXJ0aWVzIHJldHVybnMgdHJ1ZSwgdGhpcyBzaG91bGRudCBhZmZlY3QgdGhlIHdob2xlIGl0ZW0ncyBmaWx0ZXJpbmdcbiAgICAgICAgICAgICAgLy8gaG93ZXZlciBpZiBpdCByZXR1cm5zIGZhbHNlIHRoZW4gdGhlIGl0ZW0gbXVzdCBub3QgYmUgaW4gdGhlIGxpc3RcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZmluYWxpemVPcHRpb25zRm9yUHJvcGVydHkoY29tbW9uT3B0aW9uczogT3B0aW9ucyB8IFByZWRpY2F0ZUZ1bmMsIHByb3BlcnR5T3B0aW9uczogUHJvcGVydHlPcHRpb25zLCBwcm9wZXJ0eU5hbWU6IHN0cmluZyk6XG4gICBPcHRpb25zIHwgUHJlZGljYXRlRnVuYyB7XG4gICAgaWYgKHByb3BlcnR5T3B0aW9ucyAmJiBwcm9wZXJ0eU9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuICAgICAgcmV0dXJuIHByb3BlcnR5T3B0aW9uc1twcm9wZXJ0eU5hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29tbW9uT3B0aW9ucztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcHJvcGVydHlOYW1lID8gKHByb3BlcnR5TmFtZSArICcuJyArIGtleSkgOiBrZXk7XG4gIH1cblxuICBwdWJsaWMgaXNDaGFuZ2VkKG9sZEVudGl0eTogYW55LCBuZXdFbnRpdHk6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhTE9EQVNILmlzRXF1YWwodGhpcy50b1BsYWluSnNvbihvbGRFbnRpdHkpLCB0aGlzLnRvUGxhaW5Kc29uKG5ld0VudGl0eSkpO1xuICB9XG5cbiAgcHVibGljIHRvUGxhaW5Kc29uKG9iamVjdDogYW55KTogSlNPTiB7XG4gICAgaWYgKG9iamVjdCkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0FscGhhTnVtZXJpYyh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIExPREFTSC5pc1N0cmluZyh2YWx1ZSkgfHwgTE9EQVNILmlzTnVtYmVyKHZhbHVlKTtcbiAgfVxufVxuIl19