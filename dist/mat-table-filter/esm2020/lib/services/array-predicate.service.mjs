import { Injectable } from '@angular/core';
import { FilterPredicate } from './filter-predicate';
import isEqual from 'lodash-es/isEqual';
import difference from 'lodash-es/difference';
import flatten from 'lodash-es/flatten';
import * as i0 from "@angular/core";
export class ArrayPredicateService extends FilterPredicate {
    constructor() {
        super();
    }
    static warn() {
        console.warn(ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING);
        console.warn(ArrayPredicateService.SUGGESTION_WARNING);
    }
    equals(itemPair) {
        return isEqual(itemPair.example.sort(), itemPair.item.sort());
    }
    anywhere(itemPair) {
        return this.isSubset(itemPair.example, itemPair.item);
    }
    startsWith(itemPair) {
        ArrayPredicateService.warn();
        return this.anywhere(itemPair);
    }
    endsWith(itemPair) {
        ArrayPredicateService.warn();
        return this.anywhere(itemPair);
    }
    isSubset(example, item) {
        return !difference(flatten(example), flatten(item)).length;
    }
}
// tslint:disable-next-line:max-line-length
ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING = 'This filterType is unsupported for array filtering. FilterType.ANYWHERE is executed instead!';
ArrayPredicateService.SUGGESTION_WARNING = 'You can set a custom predicate for the array property through PropertyOptions!';
ArrayPredicateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: ArrayPredicateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ArrayPredicateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: ArrayPredicateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: ArrayPredicateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktcHJlZGljYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXQtdGFibGUtZmlsdGVyL3NyYy9saWIvc2VydmljZXMvYXJyYXktcHJlZGljYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxPQUFPLE1BQU0sbUJBQW1CLENBQUM7QUFDeEMsT0FBTyxVQUFVLE1BQU0sc0JBQXNCLENBQUM7QUFDOUMsT0FBTyxPQUFPLE1BQU0sbUJBQW1CLENBQUM7O0FBTXhDLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxlQUEyQjtJQUtwRTtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVPLE1BQU0sQ0FBQyxJQUFJO1FBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUE4QjtRQUMxQyxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ00sUUFBUSxDQUFDLFFBQThCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ00sVUFBVSxDQUFDLFFBQThCO1FBQzlDLHFCQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ00sUUFBUSxDQUFDLFFBQThCO1FBQzVDLHFCQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sUUFBUSxDQUFDLE9BQW1CLEVBQUUsSUFBZ0I7UUFDcEQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzdELENBQUM7O0FBN0JELDJDQUEyQztBQUNuQixtREFBNkIsR0FBRyw4RkFBOEYsQ0FBQztBQUMvSCx3Q0FBa0IsR0FBRyxnRkFBZ0YsQ0FBQztrSEFKbkgscUJBQXFCO3NIQUFyQixxQkFBcUIsY0FGcEIsTUFBTTsyRkFFUCxxQkFBcUI7a0JBSGpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyUHJlZGljYXRlIH0gZnJvbSAnLi9maWx0ZXItcHJlZGljYXRlJztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC1lcy9pc0VxdWFsJztcbmltcG9ydCBkaWZmZXJlbmNlIGZyb20gJ2xvZGFzaC1lcy9kaWZmZXJlbmNlJztcbmltcG9ydCBmbGF0dGVuIGZyb20gJ2xvZGFzaC1lcy9mbGF0dGVuJztcbmltcG9ydCB7IEl0ZW1QYWlyIH0gZnJvbSAnLi4vaXRlbS1wYWlyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlQcmVkaWNhdGVTZXJ2aWNlIGV4dGVuZHMgRmlsdGVyUHJlZGljYXRlPEFycmF5PGFueT4+IHtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFVOU1VQUE9SVEVEX09QRVJBVElPTl9XQVJOSU5HID0gJ1RoaXMgZmlsdGVyVHlwZSBpcyB1bnN1cHBvcnRlZCBmb3IgYXJyYXkgZmlsdGVyaW5nLiBGaWx0ZXJUeXBlLkFOWVdIRVJFIGlzIGV4ZWN1dGVkIGluc3RlYWQhJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU1VHR0VTVElPTl9XQVJOSU5HID0gJ1lvdSBjYW4gc2V0IGEgY3VzdG9tIHByZWRpY2F0ZSBmb3IgdGhlIGFycmF5IHByb3BlcnR5IHRocm91Z2ggUHJvcGVydHlPcHRpb25zISc7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyB3YXJuKCkge1xuICAgIGNvbnNvbGUud2FybihBcnJheVByZWRpY2F0ZVNlcnZpY2UuVU5TVVBQT1JURURfT1BFUkFUSU9OX1dBUk5JTkcpO1xuICAgIGNvbnNvbGUud2FybihBcnJheVByZWRpY2F0ZVNlcnZpY2UuU1VHR0VTVElPTl9XQVJOSU5HKTtcbiAgfVxuXG4gIHB1YmxpYyBlcXVhbHMoaXRlbVBhaXI6IEl0ZW1QYWlyPEFycmF5PGFueT4+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzRXF1YWwoaXRlbVBhaXIuZXhhbXBsZS5zb3J0KCksIGl0ZW1QYWlyLml0ZW0uc29ydCgpKTtcbiAgfVxuICBwdWJsaWMgYW55d2hlcmUoaXRlbVBhaXI6IEl0ZW1QYWlyPEFycmF5PGFueT4+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNTdWJzZXQoaXRlbVBhaXIuZXhhbXBsZSwgaXRlbVBhaXIuaXRlbSk7XG4gIH1cbiAgcHVibGljIHN0YXJ0c1dpdGgoaXRlbVBhaXI6IEl0ZW1QYWlyPEFycmF5PGFueT4+KTogYm9vbGVhbiB7XG4gICAgQXJyYXlQcmVkaWNhdGVTZXJ2aWNlLndhcm4oKTtcbiAgICByZXR1cm4gdGhpcy5hbnl3aGVyZShpdGVtUGFpcik7XG4gIH1cbiAgcHVibGljIGVuZHNXaXRoKGl0ZW1QYWlyOiBJdGVtUGFpcjxBcnJheTxhbnk+Pik6IGJvb2xlYW4ge1xuICAgIEFycmF5UHJlZGljYXRlU2VydmljZS53YXJuKCk7XG4gICAgcmV0dXJuIHRoaXMuYW55d2hlcmUoaXRlbVBhaXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1N1YnNldChleGFtcGxlOiBBcnJheTxhbnk+LCBpdGVtOiBBcnJheTxhbnk+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFkaWZmZXJlbmNlKGZsYXR0ZW4oZXhhbXBsZSksIGZsYXR0ZW4oaXRlbSkpLmxlbmd0aDtcbiAgfVxuXG59XG4iXX0=