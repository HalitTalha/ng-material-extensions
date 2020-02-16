import { __decorate, __metadata, __values } from "tslib";
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
    MatTableFilterService.ctorParameters = function () { return [
        { type: AlphaNumericPredicateService },
        { type: ArrayPredicateService }
    ]; };
    MatTableFilterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(i0.ɵɵinject(i1.AlphaNumericPredicateService), i0.ɵɵinject(i2.ArrayPredicateService)); }, token: MatTableFilterService, providedIn: "root" });
    MatTableFilterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AlphaNumericPredicateService, ArrayPredicateService])
    ], MatTableFilterService);
    return MatTableFilterService;
}());
export { MatTableFilterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXRhYmxlLWZpbHRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tYXQtdGFibGUtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUtsQztJQUNFLCtCQUFvQixvQkFBa0QsRUFBVSxhQUFvQztRQUFoRyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQThCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQXVCO0lBQUcsQ0FBQztJQUVqSCwrQ0FBZSxHQUF0QixVQUF1QixRQUF1QixFQUFFLGVBQWdDLEVBQ3pELGFBQXNDLEVBQUUsWUFBcUI7O1FBQ2xGLGlDQUFpQztRQUNqQyxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7WUFDbEQsS0FBa0IsSUFBQSxnQkFBQSxTQUFBLFdBQVcsQ0FBQSx3Q0FBQSxpRUFBRTtnQkFBMUIsSUFBTSxHQUFHLHdCQUFBO2dCQUNaLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sWUFBWSxLQUFLLFNB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RSxTQUFjO1FBQzdDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFTSwyQ0FBVyxHQUFsQixVQUFtQixNQUFXO1FBQzVCLElBQUksTUFBTSxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRU8sOENBQWMsR0FBdEIsVUFBdUIsS0FBVTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDOztnQkFqRnlDLDRCQUE0QjtnQkFBeUIscUJBQXFCOzs7SUFEekcscUJBQXFCO1FBSGpDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBRTBDLDRCQUE0QixFQUF5QixxQkFBcUI7T0FEekcscUJBQXFCLENBbUZqQztnQ0EvRkQ7Q0ErRkMsQUFuRkQsSUFtRkM7U0FuRlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcGVydHlPcHRpb25zLCBQcmVkaWNhdGVGdW5jIH0gZnJvbSAnLi4vcHJvcGVydHktb3B0aW9ucyc7XG5pbXBvcnQgeyBJdGVtUGFpciB9IGZyb20gJy4vLi4vaXRlbS1wYWlyJztcbmltcG9ydCB7IEFycmF5UHJlZGljYXRlU2VydmljZSB9IGZyb20gJy4vYXJyYXktcHJlZGljYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWxwaGFOdW1lcmljUHJlZGljYXRlU2VydmljZSB9IGZyb20gJy4vYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBMT0RBU0ggZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi9vcHRpb25zJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICd1dGlsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWF0VGFibGVGaWx0ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWxwaGFOdW1lcmljU2VydmljZTogQWxwaGFOdW1lcmljUHJlZGljYXRlU2VydmljZSwgcHJpdmF0ZSBfYXJyYXlTZXJ2aWNlOiBBcnJheVByZWRpY2F0ZVNlcnZpY2UpIHt9XG5cbiAgcHVibGljIGZpbHRlclByZWRpY2F0ZShpdGVtUGFpcjogSXRlbVBhaXI8YW55PiwgcHJvcGVydHlPcHRpb25zOiBQcm9wZXJ0eU9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29tbW9uT3B0aW9uczogT3B0aW9ucyB8IFByZWRpY2F0ZUZ1bmMsIHByb3BlcnR5TmFtZT86IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxuICAgIGNvbnN0IGV4YW1wbGVLZXlzID0gT2JqZWN0LmtleXMoaXRlbVBhaXIuZXhhbXBsZSk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgZXhhbXBsZUtleXMpIHtcbiAgICAgIGNvbnN0IGV4YW1wbGVWYWx1ZSA9IExPREFTSC5jbG9uZURlZXAoaXRlbVBhaXIuZXhhbXBsZVtrZXldKTtcbiAgICAgIGlmIChMT0RBU0guaXNOaWwoZXhhbXBsZVZhbHVlKSB8fCBMT0RBU0guZXZlcnkoZXhhbXBsZVZhbHVlLCBMT0RBU0guaXNFbXB0eSkgJiYgdHlwZW9mIGV4YW1wbGVWYWx1ZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIC8vIGlmIGV4YW1wbGUgZW50aXR5J3MgcHJvcGVydHkgaXMgdW5kZWZpbmVkL251bGwvZW1wdHkgdGhlbiBpdCBtZWFucyB0aGUgY2FsbGVyIHdhbnRzIGFsbCB0aGUgZGF0YVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtUGFpci5pdGVtLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgLy8gaWYgZXhhbXBsZSBlbnRpdHkgaGFzIGFkZGl0aW9uYWwgY29sdW1ucyB0aGVuIHNlYXJjaCBmYWlsc1xuICAgICAgICBjb25zdCBpdGVtVmFsdWUgPSBMT0RBU0guY2xvbmVEZWVwKGl0ZW1QYWlyLml0ZW1ba2V5XSk7XG4gICAgICAgIGNvbnN0IG5leHRQcm9wZXJ0eU5hbWUgPSB0aGlzLmdldE5leHRQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lLCBrZXkpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5maW5hbGl6ZU9wdGlvbnNGb3JQcm9wZXJ0eShjb21tb25PcHRpb25zLCBwcm9wZXJ0eU9wdGlvbnMsIG5leHRQcm9wZXJ0eU5hbWUpO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zKSkgeyAvLyBpZiB1c2VyIGRlZmluZWQgcHJlZGljYXRlIGlzIHByZXNlbnQgZm9yIHByb3BlcnR5XG4gICAgICAgICAgY29uc3QgY3VzdG9tUHJlZGljYXRlID0gb3B0aW9ucyBhcyBQcmVkaWNhdGVGdW5jO1xuICAgICAgICAgIGlmICghY3VzdG9tUHJlZGljYXRlKGl0ZW1WYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgY29sdW1uT3B0aW9ucyA9IG9wdGlvbnMgYXMgT3B0aW9ucztcbiAgICAgICAgICBpZiAodGhpcy5pc0FscGhhTnVtZXJpYyhpdGVtVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZVBhaXI6IEl0ZW1QYWlyPHN0cmluZz4gPSB7aXRlbTogaXRlbVZhbHVlLnRvU3RyaW5nKCksIGV4YW1wbGU6IGV4YW1wbGVWYWx1ZX07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2FscGhhTnVtZXJpY1NlcnZpY2UuZXhlY3V0ZUNvbmRpdGlvbih2YWx1ZVBhaXIsIGNvbHVtbk9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKExPREFTSC5pc0FycmF5KGl0ZW1WYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlUGFpcjogSXRlbVBhaXI8YW55W10+ID0ge2l0ZW06IGl0ZW1WYWx1ZSwgZXhhbXBsZTogZXhhbXBsZVZhbHVlfTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fYXJyYXlTZXJ2aWNlLmV4ZWN1dGVDb25kaXRpb24odmFsdWVQYWlyLCBjb2x1bW5PcHRpb25zKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChMT0RBU0guaXNCb29sZWFuKGl0ZW1WYWx1ZSkpIHtcbiAgICAgICAgICAgIGlmIChpdGVtVmFsdWUgIT09IGV4YW1wbGVWYWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlUGFpcjogSXRlbVBhaXI8YW55PiA9IHtpdGVtOiBpdGVtVmFsdWUsIGV4YW1wbGU6IGV4YW1wbGVWYWx1ZX07XG4gICAgICAgICAgICBpZiAoIXRoaXMuZmlsdGVyUHJlZGljYXRlKHZhbHVlUGFpciwgcHJvcGVydHlPcHRpb25zLCBvcHRpb25zLCBuZXh0UHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgICAvLyBpZiBvbmUgb2YgdGhlIGlubmVyIHByb3BlcnRpZXMgcmV0dXJucyB0cnVlLCB0aGlzIHNob3VsZG50IGFmZmVjdCB0aGUgd2hvbGUgaXRlbSdzIGZpbHRlcmluZ1xuICAgICAgICAgICAgICAvLyBob3dldmVyIGlmIGl0IHJldHVybnMgZmFsc2UgdGhlbiB0aGUgaXRlbSBtdXN0IG5vdCBiZSBpbiB0aGUgbGlzdFxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5hbGl6ZU9wdGlvbnNGb3JQcm9wZXJ0eShjb21tb25PcHRpb25zOiBPcHRpb25zIHwgUHJlZGljYXRlRnVuYywgcHJvcGVydHlPcHRpb25zOiBQcm9wZXJ0eU9wdGlvbnMsIHByb3BlcnR5TmFtZTogc3RyaW5nKTpcbiAgIE9wdGlvbnMgfCBQcmVkaWNhdGVGdW5jIHtcbiAgICBpZiAocHJvcGVydHlPcHRpb25zICYmIHByb3BlcnR5T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICByZXR1cm4gcHJvcGVydHlPcHRpb25zW3Byb3BlcnR5TmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb21tb25PcHRpb25zO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcm9wZXJ0eU5hbWUgPyAocHJvcGVydHlOYW1lICsgJy4nICsga2V5KSA6IGtleTtcbiAgfVxuXG4gIHB1YmxpYyBpc0NoYW5nZWQob2xkRW50aXR5OiBhbnksIG5ld0VudGl0eTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFMT0RBU0guaXNFcXVhbCh0aGlzLnRvUGxhaW5Kc29uKG9sZEVudGl0eSksIHRoaXMudG9QbGFpbkpzb24obmV3RW50aXR5KSk7XG4gIH1cblxuICBwdWJsaWMgdG9QbGFpbkpzb24ob2JqZWN0OiBhbnkpOiBKU09OIHtcbiAgICBpZiAob2JqZWN0KSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzQWxwaGFOdW1lcmljKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTE9EQVNILmlzU3RyaW5nKHZhbHVlKSB8fCBMT0RBU0guaXNOdW1iZXIodmFsdWUpO1xuICB9XG59XG4iXX0=