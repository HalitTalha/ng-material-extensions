/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var DeepDiffService = /** @class */ (function () {
    function DeepDiffService() {
    }
    /**
     * @param {?} oldObject
     * @param {?} newObject
     * @return {?}
     */
    DeepDiffService.prototype.isDifferent = /**
     * @param {?} oldObject
     * @param {?} newObject
     * @return {?}
     */
    function (oldObject, newObject) {
        if (!oldObject && newObject) {
            return true;
        }
        for (var key in oldObject) {
            if (oldObject.hasOwnProperty(key)) {
                /** @type {?} */
                var oldValue = oldObject[key];
                /** @type {?} */
                var newValue = newObject[key];
                if (typeof oldValue === 'string' || typeof oldValue === 'number') {
                    if (oldValue !== newValue) {
                        return true;
                    }
                }
                else if (typeof oldValue === 'object') {
                    /** @type {?} */
                    var result = this.isDifferent(oldValue, newValue);
                    if (result) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    DeepDiffService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DeepDiffService.ctorParameters = function () { return []; };
    /** @nocollapse */ DeepDiffService.ngInjectableDef = i0.defineInjectable({ factory: function DeepDiffService_Factory() { return new DeepDiffService(); }, token: DeepDiffService, providedIn: "root" });
    return DeepDiffService;
}());
export { DeepDiffService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcC1kaWZmLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL2RlZXAtZGlmZi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFtQyxNQUFNLGVBQWUsQ0FBQzs7QUFFNUU7SUFNRTtJQUFnQixDQUFDOzs7Ozs7SUFFVixxQ0FBVzs7Ozs7SUFBbEIsVUFBbUIsU0FBYyxFQUFFLFNBQWM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELEtBQUssSUFBTSxHQUFHLElBQUksU0FBUyxFQUFFO1lBQzNCLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTs7b0JBQzNCLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDOztvQkFDekIsUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7Z0JBQy9CLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtvQkFDaEUsSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFO3dCQUN6QixPQUFPLElBQUksQ0FBQztxQkFDYjtpQkFDRjtxQkFBTSxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTs7d0JBQ2pDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7b0JBQ25ELElBQUksTUFBTSxFQUFFO3dCQUNWLE9BQU8sSUFBSSxDQUFDO3FCQUNiO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBN0JGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzBCQUpEO0NBbUNDLEFBakNELElBaUNDO1NBOUJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBLZXlWYWx1ZURpZmZlcnMsIEtleVZhbHVlRGlmZmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERlZXBEaWZmU2VydmljZSB7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyBpc0RpZmZlcmVudChvbGRPYmplY3Q6IGFueSwgbmV3T2JqZWN0OiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoIW9sZE9iamVjdCAmJiBuZXdPYmplY3QpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvbGRPYmplY3QpIHtcbiAgICAgIGlmIChvbGRPYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IG9sZE9iamVjdFtrZXldO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IG5ld09iamVjdFtrZXldO1xuICAgICAgICBpZiAodHlwZW9mIG9sZFZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygb2xkVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvbGRWYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmlzRGlmZmVyZW50KG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG5cblxufVxuIl19