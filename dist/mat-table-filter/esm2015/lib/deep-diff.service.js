/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DeepDiffService {
    constructor() { }
    /**
     * @param {?} oldObject
     * @param {?} newObject
     * @return {?}
     */
    isDifferent(oldObject, newObject) {
        if (!oldObject && newObject) {
            return true;
        }
        for (const key in oldObject) {
            if (oldObject.hasOwnProperty(key)) {
                /** @type {?} */
                const oldValue = oldObject[key];
                /** @type {?} */
                const newValue = newObject[key];
                if (typeof oldValue === 'string' || typeof oldValue === 'number') {
                    if (oldValue !== newValue) {
                        return true;
                    }
                }
                else if (typeof oldValue === 'object') {
                    /** @type {?} */
                    const result = this.isDifferent(oldValue, newValue);
                    if (result) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
DeepDiffService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DeepDiffService.ctorParameters = () => [];
/** @nocollapse */ DeepDiffService.ngInjectableDef = i0.defineInjectable({ factory: function DeepDiffService_Factory() { return new DeepDiffService(); }, token: DeepDiffService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcC1kaWZmLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL2RlZXAtZGlmZi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFtQyxNQUFNLGVBQWUsQ0FBQzs7QUFLNUUsTUFBTSxPQUFPLGVBQWU7SUFHMUIsZ0JBQWdCLENBQUM7Ozs7OztJQUVWLFdBQVcsQ0FBQyxTQUFjLEVBQUUsU0FBYztRQUMvQyxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsS0FBSyxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUU7WUFDM0IsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFOztzQkFDM0IsUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7O3NCQUN6QixRQUFRLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztnQkFDL0IsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO29CQUNoRSxJQUFJLFFBQVEsS0FBSyxRQUFRLEVBQUU7d0JBQ3pCLE9BQU8sSUFBSSxDQUFDO3FCQUNiO2lCQUNGO3FCQUFNLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFOzswQkFDakMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztvQkFDbkQsSUFBSSxNQUFNLEVBQUU7d0JBQ1YsT0FBTyxJQUFJLENBQUM7cUJBQ2I7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUE3QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgS2V5VmFsdWVEaWZmZXJzLCBLZXlWYWx1ZURpZmZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEZWVwRGlmZlNlcnZpY2Uge1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgaXNEaWZmZXJlbnQob2xkT2JqZWN0OiBhbnksIG5ld09iamVjdDogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKCFvbGRPYmplY3QgJiYgbmV3T2JqZWN0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2xkT2JqZWN0KSB7XG4gICAgICBpZiAob2xkT2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBvbGRPYmplY3Rba2V5XTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBuZXdPYmplY3Rba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBvbGRWYWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG9sZFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb2xkVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5pc0RpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuXG5cbn1cbiJdfQ==