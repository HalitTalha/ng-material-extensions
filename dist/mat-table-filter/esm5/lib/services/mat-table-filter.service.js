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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXRhYmxlLWZpbHRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tYXQtdGFibGUtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUtsQztJQUNFLCtCQUFvQixvQkFBa0QsRUFBVSxhQUFvQztRQUFoRyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQThCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQXVCO0lBQUcsQ0FBQztJQUVqSCwrQ0FBZSxHQUF0QixVQUF1QixRQUF1QixFQUFFLGVBQWdDLEVBQ3pELGFBQXNDLEVBQUUsWUFBcUI7O1FBQ2xGLGlDQUFpQztRQUNqQyxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7WUFDbEQsS0FBa0IsSUFBQSxnQkFBQSxTQUFBLFdBQVcsQ0FBQSx3Q0FBQSxpRUFBRTtnQkFBMUIsSUFBTSxHQUFHLHdCQUFBO2dCQUNaLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sWUFBWSxLQUFLLFNB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RSxTQUFjO1FBQzdDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFTSwyQ0FBVyxHQUFsQixVQUFtQixNQUFXO1FBQzVCLElBQUksTUFBTSxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRU8sOENBQWMsR0FBdEIsVUFBdUIsS0FBVTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDOztnQkFqRnlDLDRCQUE0QjtnQkFBeUIscUJBQXFCOzs7SUFEekcscUJBQXFCO1FBSGpDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBRTBDLDRCQUE0QixFQUF5QixxQkFBcUI7T0FEekcscUJBQXFCLENBbUZqQztnQ0EvRkQ7Q0ErRkMsQUFuRkQsSUFtRkM7U0FuRlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcGVydHlPcHRpb25zLCBQcmVkaWNhdGVGdW5jIH0gZnJvbSAnLi4vcHJvcGVydHktb3B0aW9ucyc7XHJcbmltcG9ydCB7IEl0ZW1QYWlyIH0gZnJvbSAnLi8uLi9pdGVtLXBhaXInO1xyXG5pbXBvcnQgeyBBcnJheVByZWRpY2F0ZVNlcnZpY2UgfSBmcm9tICcuL2FycmF5LXByZWRpY2F0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWxwaGFOdW1lcmljUHJlZGljYXRlU2VydmljZSB9IGZyb20gJy4vYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgTE9EQVNIIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi9vcHRpb25zJztcclxuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJ3V0aWwnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0VGFibGVGaWx0ZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbHBoYU51bWVyaWNTZXJ2aWNlOiBBbHBoYU51bWVyaWNQcmVkaWNhdGVTZXJ2aWNlLCBwcml2YXRlIF9hcnJheVNlcnZpY2U6IEFycmF5UHJlZGljYXRlU2VydmljZSkge31cclxuXHJcbiAgcHVibGljIGZpbHRlclByZWRpY2F0ZShpdGVtUGFpcjogSXRlbVBhaXI8YW55PiwgcHJvcGVydHlPcHRpb25zOiBQcm9wZXJ0eU9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb21tb25PcHRpb25zOiBPcHRpb25zIHwgUHJlZGljYXRlRnVuYywgcHJvcGVydHlOYW1lPzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cclxuICAgIGNvbnN0IGV4YW1wbGVLZXlzID0gT2JqZWN0LmtleXMoaXRlbVBhaXIuZXhhbXBsZSk7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBleGFtcGxlS2V5cykge1xyXG4gICAgICBjb25zdCBleGFtcGxlVmFsdWUgPSBMT0RBU0guY2xvbmVEZWVwKGl0ZW1QYWlyLmV4YW1wbGVba2V5XSk7XHJcbiAgICAgIGlmIChMT0RBU0guaXNOaWwoZXhhbXBsZVZhbHVlKSB8fCBMT0RBU0guZXZlcnkoZXhhbXBsZVZhbHVlLCBMT0RBU0guaXNFbXB0eSkgJiYgdHlwZW9mIGV4YW1wbGVWYWx1ZSAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgLy8gaWYgZXhhbXBsZSBlbnRpdHkncyBwcm9wZXJ0eSBpcyB1bmRlZmluZWQvbnVsbC9lbXB0eSB0aGVuIGl0IG1lYW5zIHRoZSBjYWxsZXIgd2FudHMgYWxsIHRoZSBkYXRhXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1QYWlyLml0ZW0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIC8vIGlmIGV4YW1wbGUgZW50aXR5IGhhcyBhZGRpdGlvbmFsIGNvbHVtbnMgdGhlbiBzZWFyY2ggZmFpbHNcclxuICAgICAgICBjb25zdCBpdGVtVmFsdWUgPSBMT0RBU0guY2xvbmVEZWVwKGl0ZW1QYWlyLml0ZW1ba2V5XSk7XHJcbiAgICAgICAgY29uc3QgbmV4dFByb3BlcnR5TmFtZSA9IHRoaXMuZ2V0TmV4dFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUsIGtleSk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZmluYWxpemVPcHRpb25zRm9yUHJvcGVydHkoY29tbW9uT3B0aW9ucywgcHJvcGVydHlPcHRpb25zLCBuZXh0UHJvcGVydHlOYW1lKTtcclxuICAgICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zKSkgeyAvLyBpZiB1c2VyIGRlZmluZWQgcHJlZGljYXRlIGlzIHByZXNlbnQgZm9yIHByb3BlcnR5XHJcbiAgICAgICAgICBjb25zdCBjdXN0b21QcmVkaWNhdGUgPSBvcHRpb25zIGFzIFByZWRpY2F0ZUZ1bmM7XHJcbiAgICAgICAgICBpZiAoIWN1c3RvbVByZWRpY2F0ZShpdGVtVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgY29sdW1uT3B0aW9ucyA9IG9wdGlvbnMgYXMgT3B0aW9ucztcclxuICAgICAgICAgIGlmICh0aGlzLmlzQWxwaGFOdW1lcmljKGl0ZW1WYWx1ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVQYWlyOiBJdGVtUGFpcjxzdHJpbmc+ID0ge2l0ZW06IGl0ZW1WYWx1ZS50b1N0cmluZygpLCBleGFtcGxlOiBleGFtcGxlVmFsdWV9O1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2FscGhhTnVtZXJpY1NlcnZpY2UuZXhlY3V0ZUNvbmRpdGlvbih2YWx1ZVBhaXIsIGNvbHVtbk9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKExPREFTSC5pc0FycmF5KGl0ZW1WYWx1ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVQYWlyOiBJdGVtUGFpcjxhbnlbXT4gPSB7aXRlbTogaXRlbVZhbHVlLCBleGFtcGxlOiBleGFtcGxlVmFsdWV9O1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2FycmF5U2VydmljZS5leGVjdXRlQ29uZGl0aW9uKHZhbHVlUGFpciwgY29sdW1uT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoTE9EQVNILmlzQm9vbGVhbihpdGVtVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtVmFsdWUgIT09IGV4YW1wbGVWYWx1ZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVQYWlyOiBJdGVtUGFpcjxhbnk+ID0ge2l0ZW06IGl0ZW1WYWx1ZSwgZXhhbXBsZTogZXhhbXBsZVZhbHVlfTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmZpbHRlclByZWRpY2F0ZSh2YWx1ZVBhaXIsIHByb3BlcnR5T3B0aW9ucywgb3B0aW9ucywgbmV4dFByb3BlcnR5TmFtZSkpIHtcclxuICAgICAgICAgICAgICAvLyBpZiBvbmUgb2YgdGhlIGlubmVyIHByb3BlcnRpZXMgcmV0dXJucyB0cnVlLCB0aGlzIHNob3VsZG50IGFmZmVjdCB0aGUgd2hvbGUgaXRlbSdzIGZpbHRlcmluZ1xyXG4gICAgICAgICAgICAgIC8vIGhvd2V2ZXIgaWYgaXQgcmV0dXJucyBmYWxzZSB0aGVuIHRoZSBpdGVtIG11c3Qgbm90IGJlIGluIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmFsaXplT3B0aW9uc0ZvclByb3BlcnR5KGNvbW1vbk9wdGlvbnM6IE9wdGlvbnMgfCBQcmVkaWNhdGVGdW5jLCBwcm9wZXJ0eU9wdGlvbnM6IFByb3BlcnR5T3B0aW9ucywgcHJvcGVydHlOYW1lOiBzdHJpbmcpOlxyXG4gICBPcHRpb25zIHwgUHJlZGljYXRlRnVuYyB7XHJcbiAgICBpZiAocHJvcGVydHlPcHRpb25zICYmIHByb3BlcnR5T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKSB7XHJcbiAgICAgIHJldHVybiBwcm9wZXJ0eU9wdGlvbnNbcHJvcGVydHlOYW1lXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjb21tb25PcHRpb25zO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXROZXh0UHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gcHJvcGVydHlOYW1lID8gKHByb3BlcnR5TmFtZSArICcuJyArIGtleSkgOiBrZXk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNDaGFuZ2VkKG9sZEVudGl0eTogYW55LCBuZXdFbnRpdHk6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICFMT0RBU0guaXNFcXVhbCh0aGlzLnRvUGxhaW5Kc29uKG9sZEVudGl0eSksIHRoaXMudG9QbGFpbkpzb24obmV3RW50aXR5KSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9QbGFpbkpzb24ob2JqZWN0OiBhbnkpOiBKU09OIHtcclxuICAgIGlmIChvYmplY3QpIHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0FscGhhTnVtZXJpYyh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gTE9EQVNILmlzU3RyaW5nKHZhbHVlKSB8fCBMT0RBU0guaXNOdW1iZXIodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=