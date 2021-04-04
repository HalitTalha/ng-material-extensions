import { __decorate, __metadata, __values } from "tslib";
import { ArrayPredicateService } from './array-predicate.service';
import { AlphaNumericPredicateService } from './alpha-numeric-predicate.service';
import { Injectable } from '@angular/core';
import * as LODASH from 'lodash-es';
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
        var _b;
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
                if ((_b = itemPair.item) === null || _b === void 0 ? void 0 : _b.hasOwnProperty(key)) {
                    // if example entity has additional columns then search fails
                    var itemValue = LODASH.cloneDeep(itemPair.item[key]);
                    var nextPropertyName = this.getNextPropertyName(propertyName, key);
                    var options = this.finalizeOptionsForProperty(commonOptions, propertyOptions, nextPropertyName);
                    if (LODASH.isFunction(options)) { // if user defined predicate is present for property
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXRhYmxlLWZpbHRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tYXQtdGFibGUtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxXQUFXLENBQUM7Ozs7QUFNcEM7SUFDRSwrQkFBb0Isb0JBQWtELEVBQVUsYUFBb0M7UUFBaEcseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE4QjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtJQUFHLENBQUM7SUFFakgsK0NBQWUsR0FBdEIsVUFBdUIsUUFBdUIsRUFBRSxlQUFnQyxFQUN6RCxhQUFzQyxFQUFFLFlBQXFCOzs7UUFDbEYsaUNBQWlDO1FBQ2pDLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztZQUNsRCxLQUFrQixJQUFBLGdCQUFBLFNBQUEsV0FBVyxDQUFBLHdDQUFBLGlFQUFFO2dCQUExQixJQUFNLEdBQUcsd0JBQUE7Z0JBQ1osSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxZQUFZLEtBQUssU0FBUyxFQUFFO29CQUNqSCxtR0FBbUc7b0JBQ25HLFNBQVM7aUJBQ1Y7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QUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVNLDJDQUFXLEdBQWxCLFVBQW1CLE1BQVc7UUFDNUIsSUFBSSxNQUFNLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFTyw4Q0FBYyxHQUF0QixVQUF1QixLQUFVO1FBQy9CLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7O2dCQWpGeUMsNEJBQTRCO2dCQUF5QixxQkFBcUI7OztJQUR6RyxxQkFBcUI7UUFIakMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FFMEMsNEJBQTRCLEVBQXlCLHFCQUFxQjtPQUR6RyxxQkFBcUIsQ0FtRmpDO2dDQTlGRDtDQThGQyxBQW5GRCxJQW1GQztTQW5GWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9wZXJ0eU9wdGlvbnMsIFByZWRpY2F0ZUZ1bmMgfSBmcm9tICcuLi9wcm9wZXJ0eS1vcHRpb25zJztcclxuaW1wb3J0IHsgSXRlbVBhaXIgfSBmcm9tICcuLy4uL2l0ZW0tcGFpcic7XHJcbmltcG9ydCB7IEFycmF5UHJlZGljYXRlU2VydmljZSB9IGZyb20gJy4vYXJyYXktcHJlZGljYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbHBoYU51bWVyaWNQcmVkaWNhdGVTZXJ2aWNlIH0gZnJvbSAnLi9hbHBoYS1udW1lcmljLXByZWRpY2F0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBMT0RBU0ggZnJvbSAnbG9kYXNoLWVzJztcclxuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4uL29wdGlvbnMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0VGFibGVGaWx0ZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbHBoYU51bWVyaWNTZXJ2aWNlOiBBbHBoYU51bWVyaWNQcmVkaWNhdGVTZXJ2aWNlLCBwcml2YXRlIF9hcnJheVNlcnZpY2U6IEFycmF5UHJlZGljYXRlU2VydmljZSkge31cclxuXHJcbiAgcHVibGljIGZpbHRlclByZWRpY2F0ZShpdGVtUGFpcjogSXRlbVBhaXI8YW55PiwgcHJvcGVydHlPcHRpb25zOiBQcm9wZXJ0eU9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb21tb25PcHRpb25zOiBPcHRpb25zIHwgUHJlZGljYXRlRnVuYywgcHJvcGVydHlOYW1lPzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cclxuICAgIGNvbnN0IGV4YW1wbGVLZXlzID0gT2JqZWN0LmtleXMoaXRlbVBhaXIuZXhhbXBsZSk7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBleGFtcGxlS2V5cykge1xyXG4gICAgICBjb25zdCBleGFtcGxlVmFsdWUgPSBMT0RBU0guY2xvbmVEZWVwKGl0ZW1QYWlyLmV4YW1wbGVba2V5XSk7XHJcbiAgICAgIGlmIChMT0RBU0guaXNOaWwoZXhhbXBsZVZhbHVlKSB8fCBMT0RBU0guZXZlcnkoZXhhbXBsZVZhbHVlLCBMT0RBU0guaXNFbXB0eSkgJiYgdHlwZW9mIGV4YW1wbGVWYWx1ZSAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgLy8gaWYgZXhhbXBsZSBlbnRpdHkncyBwcm9wZXJ0eSBpcyB1bmRlZmluZWQvbnVsbC9lbXB0eSB0aGVuIGl0IG1lYW5zIHRoZSBjYWxsZXIgd2FudHMgYWxsIHRoZSBkYXRhXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1QYWlyLml0ZW0/Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAvLyBpZiBleGFtcGxlIGVudGl0eSBoYXMgYWRkaXRpb25hbCBjb2x1bW5zIHRoZW4gc2VhcmNoIGZhaWxzXHJcbiAgICAgICAgY29uc3QgaXRlbVZhbHVlID0gTE9EQVNILmNsb25lRGVlcChpdGVtUGFpci5pdGVtW2tleV0pO1xyXG4gICAgICAgIGNvbnN0IG5leHRQcm9wZXJ0eU5hbWUgPSB0aGlzLmdldE5leHRQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lLCBrZXkpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmZpbmFsaXplT3B0aW9uc0ZvclByb3BlcnR5KGNvbW1vbk9wdGlvbnMsIHByb3BlcnR5T3B0aW9ucywgbmV4dFByb3BlcnR5TmFtZSk7XHJcbiAgICAgICAgaWYgKExPREFTSC5pc0Z1bmN0aW9uKG9wdGlvbnMpKSB7IC8vIGlmIHVzZXIgZGVmaW5lZCBwcmVkaWNhdGUgaXMgcHJlc2VudCBmb3IgcHJvcGVydHlcclxuICAgICAgICAgIGNvbnN0IGN1c3RvbVByZWRpY2F0ZSA9IG9wdGlvbnMgYXMgUHJlZGljYXRlRnVuYztcclxuICAgICAgICAgIGlmICghY3VzdG9tUHJlZGljYXRlKGl0ZW1WYWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBjb2x1bW5PcHRpb25zID0gb3B0aW9ucyBhcyBPcHRpb25zO1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNBbHBoYU51bWVyaWMoaXRlbVZhbHVlKSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVBhaXI6IEl0ZW1QYWlyPHN0cmluZz4gPSB7aXRlbTogaXRlbVZhbHVlLnRvU3RyaW5nKCksIGV4YW1wbGU6IGV4YW1wbGVWYWx1ZX07XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fYWxwaGFOdW1lcmljU2VydmljZS5leGVjdXRlQ29uZGl0aW9uKHZhbHVlUGFpciwgY29sdW1uT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoTE9EQVNILmlzQXJyYXkoaXRlbVZhbHVlKSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVBhaXI6IEl0ZW1QYWlyPGFueVtdPiA9IHtpdGVtOiBpdGVtVmFsdWUsIGV4YW1wbGU6IGV4YW1wbGVWYWx1ZX07XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fYXJyYXlTZXJ2aWNlLmV4ZWN1dGVDb25kaXRpb24odmFsdWVQYWlyLCBjb2x1bW5PcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChMT0RBU0guaXNCb29sZWFuKGl0ZW1WYWx1ZSkpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW1WYWx1ZSAhPT0gZXhhbXBsZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVBhaXI6IEl0ZW1QYWlyPGFueT4gPSB7aXRlbTogaXRlbVZhbHVlLCBleGFtcGxlOiBleGFtcGxlVmFsdWV9O1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZmlsdGVyUHJlZGljYXRlKHZhbHVlUGFpciwgcHJvcGVydHlPcHRpb25zLCBvcHRpb25zLCBuZXh0UHJvcGVydHlOYW1lKSkge1xyXG4gICAgICAgICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgaW5uZXIgcHJvcGVydGllcyByZXR1cm5zIHRydWUsIHRoaXMgc2hvdWxkbnQgYWZmZWN0IHRoZSB3aG9sZSBpdGVtJ3MgZmlsdGVyaW5nXHJcbiAgICAgICAgICAgICAgLy8gaG93ZXZlciBpZiBpdCByZXR1cm5zIGZhbHNlIHRoZW4gdGhlIGl0ZW0gbXVzdCBub3QgYmUgaW4gdGhlIGxpc3RcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluYWxpemVPcHRpb25zRm9yUHJvcGVydHkoY29tbW9uT3B0aW9uczogT3B0aW9ucyB8IFByZWRpY2F0ZUZ1bmMsIHByb3BlcnR5T3B0aW9uczogUHJvcGVydHlPcHRpb25zLCBwcm9wZXJ0eU5hbWU6IHN0cmluZyk6XHJcbiAgIE9wdGlvbnMgfCBQcmVkaWNhdGVGdW5jIHtcclxuICAgIGlmIChwcm9wZXJ0eU9wdGlvbnMgJiYgcHJvcGVydHlPcHRpb25zLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkpIHtcclxuICAgICAgcmV0dXJuIHByb3BlcnR5T3B0aW9uc1twcm9wZXJ0eU5hbWVdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGNvbW1vbk9wdGlvbnM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE5leHRQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBwcm9wZXJ0eU5hbWUgPyAocHJvcGVydHlOYW1lICsgJy4nICsga2V5KSA6IGtleTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0NoYW5nZWQob2xkRW50aXR5OiBhbnksIG5ld0VudGl0eTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIUxPREFTSC5pc0VxdWFsKHRoaXMudG9QbGFpbkpzb24ob2xkRW50aXR5KSwgdGhpcy50b1BsYWluSnNvbihuZXdFbnRpdHkpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1BsYWluSnNvbihvYmplY3Q6IGFueSk6IEpTT04ge1xyXG4gICAgaWYgKG9iamVjdCkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQWxwaGFOdW1lcmljKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBMT0RBU0guaXNTdHJpbmcodmFsdWUpIHx8IExPREFTSC5pc051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==