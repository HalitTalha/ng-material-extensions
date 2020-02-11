import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { FilterPredicate } from './filter-predicate';
import * as LODASH from 'lodash';
import * as i0 from "@angular/core";
var ArrayPredicateService = /** @class */ (function (_super) {
    __extends(ArrayPredicateService, _super);
    function ArrayPredicateService() {
        return _super.call(this) || this;
    }
    ArrayPredicateService.warn = function () {
        console.warn(ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING);
        console.warn(ArrayPredicateService.SUGGESTION_WARNING);
    };
    ArrayPredicateService.prototype.equals = function (itemPair) {
        return LODASH.isEqual(itemPair.example.sort(), itemPair.item.sort());
    };
    ArrayPredicateService.prototype.anywhere = function (itemPair) {
        return this.isSubset(itemPair.example, itemPair.item);
    };
    ArrayPredicateService.prototype.startsWith = function (itemPair) {
        ArrayPredicateService.warn();
        return this.anywhere(itemPair);
    };
    ArrayPredicateService.prototype.endsWith = function (itemPair) {
        ArrayPredicateService.warn();
        return this.anywhere(itemPair);
    };
    ArrayPredicateService.prototype.isSubset = function (example, item) {
        return !LODASH.difference(LODASH.flatten(example), LODASH.flatten(item)).length;
    };
    // tslint:disable-next-line:max-line-length
    ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING = 'This filterType is unsupported for array filtering. FilterType.ANYWHERE is executed instead!';
    ArrayPredicateService.SUGGESTION_WARNING = 'You can set a custom predicate for the array property through PropertyOptions!';
    ArrayPredicateService.ɵfac = function ArrayPredicateService_Factory(t) { return new (t || ArrayPredicateService)(); };
    ArrayPredicateService.ɵprov = i0.ɵɵdefineInjectable({ token: ArrayPredicateService, factory: ArrayPredicateService.ɵfac, providedIn: 'root' });
    return ArrayPredicateService;
}(FilterPredicate));
export { ArrayPredicateService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ArrayPredicateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktcHJlZGljYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FycmF5LXByZWRpY2F0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7QUFHakM7SUFHMkMseUNBQTJCO0lBS3BFO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBRWMsMEJBQUksR0FBbkI7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDbEUsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSxzQ0FBTSxHQUFiLFVBQWMsUUFBOEI7UUFDMUMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDTSx3Q0FBUSxHQUFmLFVBQWdCLFFBQThCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ00sMENBQVUsR0FBakIsVUFBa0IsUUFBOEI7UUFDOUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDTSx3Q0FBUSxHQUFmLFVBQWdCLFFBQThCO1FBQzVDLHFCQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sd0NBQVEsR0FBaEIsVUFBaUIsT0FBbUIsRUFBRSxJQUFnQjtRQUNwRCxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbEYsQ0FBQztJQTdCRCwyQ0FBMkM7SUFDbkIsbURBQTZCLEdBQUcsOEZBQThGLENBQUM7SUFDL0gsd0NBQWtCLEdBQUcsZ0ZBQWdGLENBQUM7OEZBSm5ILHFCQUFxQjtpRUFBckIscUJBQXFCLFdBQXJCLHFCQUFxQixtQkFGcEIsTUFBTTtnQ0FOcEI7Q0F5Q0MsQUFwQ0QsQ0FHMkMsZUFBZSxHQWlDekQ7U0FqQ1kscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FIakMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyUHJlZGljYXRlIH0gZnJvbSAnLi9maWx0ZXItcHJlZGljYXRlJztcbmltcG9ydCAqIGFzIExPREFTSCBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgSXRlbVBhaXIgfSBmcm9tICcuLi9pdGVtLXBhaXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBcnJheVByZWRpY2F0ZVNlcnZpY2UgZXh0ZW5kcyBGaWx0ZXJQcmVkaWNhdGU8QXJyYXk8YW55Pj4ge1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVU5TVVBQT1JURURfT1BFUkFUSU9OX1dBUk5JTkcgPSAnVGhpcyBmaWx0ZXJUeXBlIGlzIHVuc3VwcG9ydGVkIGZvciBhcnJheSBmaWx0ZXJpbmcuIEZpbHRlclR5cGUuQU5ZV0hFUkUgaXMgZXhlY3V0ZWQgaW5zdGVhZCEnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBTVUdHRVNUSU9OX1dBUk5JTkcgPSAnWW91IGNhbiBzZXQgYSBjdXN0b20gcHJlZGljYXRlIGZvciB0aGUgYXJyYXkgcHJvcGVydHkgdGhyb3VnaCBQcm9wZXJ0eU9wdGlvbnMhJztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHdhcm4oKSB7XG4gICAgY29uc29sZS53YXJuKEFycmF5UHJlZGljYXRlU2VydmljZS5VTlNVUFBPUlRFRF9PUEVSQVRJT05fV0FSTklORyk7XG4gICAgY29uc29sZS53YXJuKEFycmF5UHJlZGljYXRlU2VydmljZS5TVUdHRVNUSU9OX1dBUk5JTkcpO1xuICB9XG5cbiAgcHVibGljIGVxdWFscyhpdGVtUGFpcjogSXRlbVBhaXI8QXJyYXk8YW55Pj4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gTE9EQVNILmlzRXF1YWwoaXRlbVBhaXIuZXhhbXBsZS5zb3J0KCksIGl0ZW1QYWlyLml0ZW0uc29ydCgpKTtcbiAgfVxuICBwdWJsaWMgYW55d2hlcmUoaXRlbVBhaXI6IEl0ZW1QYWlyPEFycmF5PGFueT4+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNTdWJzZXQoaXRlbVBhaXIuZXhhbXBsZSwgaXRlbVBhaXIuaXRlbSk7XG4gIH1cbiAgcHVibGljIHN0YXJ0c1dpdGgoaXRlbVBhaXI6IEl0ZW1QYWlyPEFycmF5PGFueT4+KTogYm9vbGVhbiB7XG4gICAgQXJyYXlQcmVkaWNhdGVTZXJ2aWNlLndhcm4oKTtcbiAgICByZXR1cm4gdGhpcy5hbnl3aGVyZShpdGVtUGFpcik7XG4gIH1cbiAgcHVibGljIGVuZHNXaXRoKGl0ZW1QYWlyOiBJdGVtUGFpcjxBcnJheTxhbnk+Pik6IGJvb2xlYW4ge1xuICAgIEFycmF5UHJlZGljYXRlU2VydmljZS53YXJuKCk7XG4gICAgcmV0dXJuIHRoaXMuYW55d2hlcmUoaXRlbVBhaXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1N1YnNldChleGFtcGxlOiBBcnJheTxhbnk+LCBpdGVtOiBBcnJheTxhbnk+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFMT0RBU0guZGlmZmVyZW5jZShMT0RBU0guZmxhdHRlbihleGFtcGxlKSwgTE9EQVNILmZsYXR0ZW4oaXRlbSkpLmxlbmd0aDtcbiAgfVxuXG59XG4iXX0=