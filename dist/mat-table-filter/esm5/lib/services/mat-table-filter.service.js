/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
    /**
     * @param {?} itemPair
     * @param {?} allOptions
     * @param {?} commonOptions
     * @param {?=} propertyName
     * @return {?}
     */
    MatTableFilterService.prototype.filterPredicate = /**
     * @param {?} itemPair
     * @param {?} allOptions
     * @param {?} commonOptions
     * @param {?=} propertyName
     * @return {?}
     */
    function (itemPair, allOptions, commonOptions, propertyName) {
        var e_1, _a;
        // tslint:disable-next-line:forin
        /** @type {?} */
        var exampleKeys = Object.keys(itemPair.example);
        try {
            for (var exampleKeys_1 = tslib_1.__values(exampleKeys), exampleKeys_1_1 = exampleKeys_1.next(); !exampleKeys_1_1.done; exampleKeys_1_1 = exampleKeys_1.next()) {
                var key = exampleKeys_1_1.value;
                /** @type {?} */
                var exampleColumnValue = itemPair.example[key];
                if (LODASH.isNil(exampleColumnValue) || LODASH.every(exampleColumnValue, LODASH.isEmpty) && typeof exampleColumnValue !== 'boolean') {
                    // if example entity's property is undefined/null/empty then it means the caller wants all the data
                    continue;
                }
                if (itemPair.item.hasOwnProperty(key)) {
                    // if example entity has additional columns then search fails
                    /** @type {?} */
                    var itemColumnValue = itemPair.item[key];
                    /** @type {?} */
                    var nextPropertyName = this.getNextPropertyName(propertyName, key);
                    /** @type {?} */
                    var options = this.getOptionsForColumn(commonOptions, allOptions, nextPropertyName);
                    if (isFunction(options)) { // if user defined predicate is present for property
                        // if user defined predicate is present for property
                        /** @type {?} */
                        var customPredicate = (/** @type {?} */ (options));
                        if (!customPredicate(itemColumnValue)) {
                            return false;
                        }
                    }
                    else {
                        /** @type {?} */
                        var valuePair = { item: itemColumnValue, example: exampleColumnValue };
                        /** @type {?} */
                        var columnOptions = (/** @type {?} */ (options));
                        if (this.isAlphaNumeric(itemColumnValue)) {
                            this.handleLetterCasing(valuePair, columnOptions.caseSensitive);
                            if (!this._alphaNumericService.executeCondition(valuePair, columnOptions.filterType)) {
                                return false;
                            }
                        }
                        else if (LODASH.isArray(itemColumnValue)) {
                            if (!this._arrayService.executeCondition(valuePair, columnOptions.filterType)) {
                                return false;
                            }
                        }
                        else if (LODASH.isBoolean(itemColumnValue)) {
                            if (itemColumnValue !== exampleColumnValue) {
                                return false;
                            }
                        }
                        else {
                            if (!this.filterPredicate(valuePair, allOptions, options, nextPropertyName)) {
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
    /**
     * @private
     * @param {?} itemPair
     * @param {?} caseSensitive
     * @return {?}
     */
    MatTableFilterService.prototype.handleLetterCasing = /**
     * @private
     * @param {?} itemPair
     * @param {?} caseSensitive
     * @return {?}
     */
    function (itemPair, caseSensitive) {
        if (!caseSensitive) {
            itemPair.example = itemPair.example.toUpperCase();
            itemPair.item = itemPair.item.toUpperCase();
        }
    };
    /**
     * @private
     * @param {?} commonOptions
     * @param {?} columnOptions
     * @param {?=} propertyName
     * @return {?}
     */
    MatTableFilterService.prototype.getOptionsForColumn = /**
     * @private
     * @param {?} commonOptions
     * @param {?} columnOptions
     * @param {?=} propertyName
     * @return {?}
     */
    function (commonOptions, columnOptions, propertyName) {
        if (columnOptions && columnOptions.hasOwnProperty(propertyName)) {
            return columnOptions[propertyName];
        }
        else {
            return commonOptions;
        }
    };
    /**
     * @private
     * @param {?} propertyName
     * @param {?} key
     * @return {?}
     */
    MatTableFilterService.prototype.getNextPropertyName = /**
     * @private
     * @param {?} propertyName
     * @param {?} key
     * @return {?}
     */
    function (propertyName, key) {
        return propertyName ? (propertyName + '.' + key) : key;
    };
    /**
     * @param {?} oldEntity
     * @param {?} newEntity
     * @return {?}
     */
    MatTableFilterService.prototype.isChanged = /**
     * @param {?} oldEntity
     * @param {?} newEntity
     * @return {?}
     */
    function (oldEntity, newEntity) {
        return !LODASH.isEqual(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
    };
    /**
     * @param {?} object
     * @return {?}
     */
    MatTableFilterService.prototype.toPlainJson = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        if (object) {
            return JSON.parse(JSON.stringify(object));
        }
        else {
            return undefined;
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MatTableFilterService.prototype.isAlphaNumeric = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return LODASH.isString(value) || LODASH.isNumber(value);
    };
    MatTableFilterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MatTableFilterService.ctorParameters = function () { return [
        { type: AlphaNumericPredicateService },
        { type: ArrayPredicateService }
    ]; };
    /** @nocollapse */ MatTableFilterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(i0.ɵɵinject(i1.AlphaNumericPredicateService), i0.ɵɵinject(i2.ArrayPredicateService)); }, token: MatTableFilterService, providedIn: "root" });
    return MatTableFilterService;
}());
export { MatTableFilterService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXRhYmxlLWZpbHRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tYXQtdGFibGUtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFFbEM7SUFJRSwrQkFBb0Isb0JBQWtELEVBQVUsYUFBb0M7UUFBaEcseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE4QjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtJQUFHLENBQUM7Ozs7Ozs7O0lBRWpILCtDQUFlOzs7Ozs7O0lBQXRCLFVBQXVCLFFBQXVCLEVBQUUsVUFBeUIsRUFDbEQsYUFBc0MsRUFBRSxZQUFxQjs7OztZQUU1RSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDOztZQUNqRCxLQUFrQixJQUFBLGdCQUFBLGlCQUFBLFdBQVcsQ0FBQSx3Q0FBQSxpRUFBRTtnQkFBMUIsSUFBTSxHQUFHLHdCQUFBOztvQkFDTixrQkFBa0IsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztnQkFDaEQsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxrQkFBa0IsS0FBSyxTQUFTLEVBQUU7b0JBQ25JLG1HQUFtRztvQkFDbkcs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Q0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUVNLHlDQUFTOzs7OztJQUFoQixVQUFpQixTQUFjLEVBQUUsU0FBYztRQUM3QyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7OztJQUVNLDJDQUFXOzs7O0lBQWxCLFVBQW1CLE1BQVc7UUFDNUIsSUFBSSxNQUFNLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7OztJQUVPLDhDQUFjOzs7OztJQUF0QixVQUF1QixLQUFVO1FBQy9CLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7O2dCQTNGRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVJRLDRCQUE0QjtnQkFENUIscUJBQXFCOzs7Z0NBRjlCO0NBcUdDLEFBNUZELElBNEZDO1NBekZZLHFCQUFxQjs7Ozs7O0lBQ3BCLHFEQUEwRDs7Ozs7SUFBRSw4Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5PcHRpb25zLCBQcmVkaWNhdGVGdW5jIH0gZnJvbSAnLi8uLi9jb2x1bW4tb3B0aW9ucyc7XG5pbXBvcnQgeyBJdGVtUGFpciB9IGZyb20gJy4vLi4vaXRlbS1wYWlyJztcbmltcG9ydCB7IEFycmF5UHJlZGljYXRlU2VydmljZSB9IGZyb20gJy4vYXJyYXktcHJlZGljYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWxwaGFOdW1lcmljUHJlZGljYXRlU2VydmljZSB9IGZyb20gJy4vYWxwaGEtbnVtZXJpYy1wcmVkaWNhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBMT0RBU0ggZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi9vcHRpb25zJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICd1dGlsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWF0VGFibGVGaWx0ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWxwaGFOdW1lcmljU2VydmljZTogQWxwaGFOdW1lcmljUHJlZGljYXRlU2VydmljZSwgcHJpdmF0ZSBfYXJyYXlTZXJ2aWNlOiBBcnJheVByZWRpY2F0ZVNlcnZpY2UpIHt9XG5cbiAgcHVibGljIGZpbHRlclByZWRpY2F0ZShpdGVtUGFpcjogSXRlbVBhaXI8YW55PiwgYWxsT3B0aW9uczogQ29sdW1uT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb21tb25PcHRpb25zOiBPcHRpb25zIHwgUHJlZGljYXRlRnVuYywgcHJvcGVydHlOYW1lPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXG4gICAgY29uc3QgZXhhbXBsZUtleXMgPSBPYmplY3Qua2V5cyhpdGVtUGFpci5leGFtcGxlKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBleGFtcGxlS2V5cykge1xuICAgICAgY29uc3QgZXhhbXBsZUNvbHVtblZhbHVlID0gaXRlbVBhaXIuZXhhbXBsZVtrZXldO1xuICAgICAgaWYgKExPREFTSC5pc05pbChleGFtcGxlQ29sdW1uVmFsdWUpIHx8IExPREFTSC5ldmVyeShleGFtcGxlQ29sdW1uVmFsdWUsIExPREFTSC5pc0VtcHR5KSAmJiB0eXBlb2YgZXhhbXBsZUNvbHVtblZhbHVlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgLy8gaWYgZXhhbXBsZSBlbnRpdHkncyBwcm9wZXJ0eSBpcyB1bmRlZmluZWQvbnVsbC9lbXB0eSB0aGVuIGl0IG1lYW5zIHRoZSBjYWxsZXIgd2FudHMgYWxsIHRoZSBkYXRhXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1QYWlyLml0ZW0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAvLyBpZiBleGFtcGxlIGVudGl0eSBoYXMgYWRkaXRpb25hbCBjb2x1bW5zIHRoZW4gc2VhcmNoIGZhaWxzXG4gICAgICAgIGNvbnN0IGl0ZW1Db2x1bW5WYWx1ZSA9IGl0ZW1QYWlyLml0ZW1ba2V5XTtcbiAgICAgICAgY29uc3QgbmV4dFByb3BlcnR5TmFtZSA9IHRoaXMuZ2V0TmV4dFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUsIGtleSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnNGb3JDb2x1bW4oY29tbW9uT3B0aW9ucywgYWxsT3B0aW9ucywgbmV4dFByb3BlcnR5TmFtZSk7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7IC8vIGlmIHVzZXIgZGVmaW5lZCBwcmVkaWNhdGUgaXMgcHJlc2VudCBmb3IgcHJvcGVydHlcbiAgICAgICAgICBjb25zdCBjdXN0b21QcmVkaWNhdGUgPSBvcHRpb25zIGFzIFByZWRpY2F0ZUZ1bmM7XG4gICAgICAgICAgaWYgKCFjdXN0b21QcmVkaWNhdGUoaXRlbUNvbHVtblZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZVBhaXIgPSB7aXRlbTogaXRlbUNvbHVtblZhbHVlLCBleGFtcGxlOiBleGFtcGxlQ29sdW1uVmFsdWV9O1xuICAgICAgICAgIGNvbnN0IGNvbHVtbk9wdGlvbnMgPSBvcHRpb25zIGFzIE9wdGlvbnM7XG4gICAgICAgICAgaWYgKHRoaXMuaXNBbHBoYU51bWVyaWMoaXRlbUNvbHVtblZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVMZXR0ZXJDYXNpbmcodmFsdWVQYWlyLCBjb2x1bW5PcHRpb25zLmNhc2VTZW5zaXRpdmUpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9hbHBoYU51bWVyaWNTZXJ2aWNlLmV4ZWN1dGVDb25kaXRpb24odmFsdWVQYWlyLCBjb2x1bW5PcHRpb25zLmZpbHRlclR5cGUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKExPREFTSC5pc0FycmF5KGl0ZW1Db2x1bW5WYWx1ZSkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fYXJyYXlTZXJ2aWNlLmV4ZWN1dGVDb25kaXRpb24odmFsdWVQYWlyLCBjb2x1bW5PcHRpb25zLmZpbHRlclR5cGUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKExPREFTSC5pc0Jvb2xlYW4oaXRlbUNvbHVtblZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKGl0ZW1Db2x1bW5WYWx1ZSAhPT0gZXhhbXBsZUNvbHVtblZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZpbHRlclByZWRpY2F0ZSh2YWx1ZVBhaXIsIGFsbE9wdGlvbnMsIG9wdGlvbnMsIG5leHRQcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgaW5uZXIgcHJvcGVydGllcyByZXR1cm5zIHRydWUsIHRoaXMgc2hvdWxkbnQgYWZmZWN0IHRoZSB3aG9sZSBpdGVtJ3MgZmlsdGVyaW5nXG4gICAgICAgICAgICAgIC8vIGhvd2V2ZXIgaWYgaXQgcmV0dXJucyBmYWxzZSB0aGVuIHRoZSBpdGVtIG11c3Qgbm90IGJlIGluIHRoZSBsaXN0XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUxldHRlckNhc2luZyhpdGVtUGFpcjogSXRlbVBhaXI8c3RyaW5nPiwgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghY2FzZVNlbnNpdGl2ZSkge1xuICAgICAgaXRlbVBhaXIuZXhhbXBsZSA9IGl0ZW1QYWlyLmV4YW1wbGUudG9VcHBlckNhc2UoKTtcbiAgICAgIGl0ZW1QYWlyLml0ZW0gPSBpdGVtUGFpci5pdGVtLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcHRpb25zRm9yQ29sdW1uKGNvbW1vbk9wdGlvbnM6IE9wdGlvbnMgfCBQcmVkaWNhdGVGdW5jLCBjb2x1bW5PcHRpb25zOiBDb2x1bW5PcHRpb25zLCBwcm9wZXJ0eU5hbWU/OiBzdHJpbmcpOlxuICAgT3B0aW9ucyB8IFByZWRpY2F0ZUZ1bmMge1xuICAgIGlmIChjb2x1bW5PcHRpb25zICYmIGNvbHVtbk9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuICAgICAgcmV0dXJuIGNvbHVtbk9wdGlvbnNbcHJvcGVydHlOYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbW1vbk9wdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0UHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZSA/IChwcm9wZXJ0eU5hbWUgKyAnLicgKyBrZXkpIDoga2V5O1xuICB9XG5cbiAgcHVibGljIGlzQ2hhbmdlZChvbGRFbnRpdHk6IGFueSwgbmV3RW50aXR5OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIUxPREFTSC5pc0VxdWFsKHRoaXMudG9QbGFpbkpzb24ob2xkRW50aXR5KSwgdGhpcy50b1BsYWluSnNvbihuZXdFbnRpdHkpKTtcbiAgfVxuXG4gIHB1YmxpYyB0b1BsYWluSnNvbihvYmplY3Q6IGFueSk6IEpTT04ge1xuICAgIGlmIChvYmplY3QpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNBbHBoYU51bWVyaWModmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBMT0RBU0guaXNTdHJpbmcodmFsdWUpIHx8IExPREFTSC5pc051bWJlcih2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==