import { __decorate, __metadata, __param } from 'tslib';
import { ɵɵdefineInjectable, Injectable, ɵɵinject, Host, Self, Optional, Input, Directive, NgModule } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { isString, isEqual, difference, flatten, cloneDeep, isNil, every, isEmpty, isArray, isBoolean, isNumber } from 'lodash';
import { isFunction } from 'util';

var MatTableFilter;
(function (MatTableFilter) {
    MatTableFilter["EQUALS"] = "EQUALS";
    MatTableFilter["ANYWHERE"] = "ANYWHERE";
    MatTableFilter["STARTS_WITH"] = "STARTS_WITH";
    MatTableFilter["ENDS_WITH"] = "ENDS_WITH";
})(MatTableFilter || (MatTableFilter = {}));

class FilterPredicate {
    executeCondition(itemPair, options) {
        this.handleLetterCasing(itemPair, options.caseSensitive);
        switch (options.filterType) {
            case MatTableFilter.EQUALS:
                return this.equals(itemPair);
            case MatTableFilter.ANYWHERE:
                return this.anywhere(itemPair);
            case MatTableFilter.STARTS_WITH:
                return this.startsWith(itemPair);
            case MatTableFilter.ENDS_WITH:
                return this.endsWith(itemPair);
            default:
                return true;
        }
    }
    handleLetterCasing(itemPair, caseSensitive) {
        if (!caseSensitive) {
            this.transformAllLowerCase(itemPair);
        }
    }
    transformAllLowerCase(object) {
        // tslint:disable-next-line:forin
        for (const key in object) {
            const value = object[key];
            if (isString(value)) {
                object[key] = value.toLowerCase();
            }
            else {
                this.transformAllLowerCase(value);
            }
        }
    }
}

var ArrayPredicateService_1;
let ArrayPredicateService = ArrayPredicateService_1 = class ArrayPredicateService extends FilterPredicate {
    constructor() {
        super();
    }
    static warn() {
        console.warn(ArrayPredicateService_1.UNSUPPORTED_OPERATION_WARNING);
        console.warn(ArrayPredicateService_1.SUGGESTION_WARNING);
    }
    equals(itemPair) {
        return isEqual(itemPair.example.sort(), itemPair.item.sort());
    }
    anywhere(itemPair) {
        return this.isSubset(itemPair.example, itemPair.item);
    }
    startsWith(itemPair) {
        ArrayPredicateService_1.warn();
        return this.anywhere(itemPair);
    }
    endsWith(itemPair) {
        ArrayPredicateService_1.warn();
        return this.anywhere(itemPair);
    }
    isSubset(example, item) {
        return !difference(flatten(example), flatten(item)).length;
    }
};
// tslint:disable-next-line:max-line-length
ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING = 'This filterType is unsupported for array filtering. FilterType.ANYWHERE is executed instead!';
ArrayPredicateService.SUGGESTION_WARNING = 'You can set a custom predicate for the array property through PropertyOptions!';
ArrayPredicateService.ɵprov = ɵɵdefineInjectable({ factory: function ArrayPredicateService_Factory() { return new ArrayPredicateService(); }, token: ArrayPredicateService, providedIn: "root" });
ArrayPredicateService = ArrayPredicateService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], ArrayPredicateService);

let AlphaNumericPredicateService = class AlphaNumericPredicateService extends FilterPredicate {
    constructor() {
        super();
    }
    equals(itemPair) {
        return itemPair.example === itemPair.item;
    }
    anywhere(itemPair) {
        return itemPair.item.includes(itemPair.example);
    }
    startsWith(itemPair) {
        return itemPair.item.startsWith(itemPair.example);
    }
    endsWith(itemPair) {
        return itemPair.item.endsWith(itemPair.example);
    }
};
AlphaNumericPredicateService.ɵprov = ɵɵdefineInjectable({ factory: function AlphaNumericPredicateService_Factory() { return new AlphaNumericPredicateService(); }, token: AlphaNumericPredicateService, providedIn: "root" });
AlphaNumericPredicateService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], AlphaNumericPredicateService);

let MatTableFilterService = class MatTableFilterService {
    constructor(_alphaNumericService, _arrayService) {
        this._alphaNumericService = _alphaNumericService;
        this._arrayService = _arrayService;
    }
    filterPredicate(itemPair, propertyOptions, commonOptions, propertyName) {
        // tslint:disable-next-line:forin
        const exampleKeys = Object.keys(itemPair.example);
        for (const key of exampleKeys) {
            const exampleValue = cloneDeep(itemPair.example[key]);
            if (isNil(exampleValue) || every(exampleValue, isEmpty) && typeof exampleValue !== 'boolean') {
                // if example entity's property is undefined/null/empty then it means the caller wants all the data
                continue;
            }
            if (itemPair.item.hasOwnProperty(key)) {
                // if example entity has additional columns then search fails
                const itemValue = cloneDeep(itemPair.item[key]);
                const nextPropertyName = this.getNextPropertyName(propertyName, key);
                const options = this.finalizeOptionsForProperty(commonOptions, propertyOptions, nextPropertyName);
                if (isFunction(options)) { // if user defined predicate is present for property
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
                    else if (isArray(itemValue)) {
                        const valuePair = { item: itemValue, example: exampleValue };
                        if (!this._arrayService.executeCondition(valuePair, columnOptions)) {
                            return false;
                        }
                    }
                    else if (isBoolean(itemValue)) {
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
        return !isEqual(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
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
        return isString(value) || isNumber(value);
    }
};
MatTableFilterService.ctorParameters = () => [
    { type: AlphaNumericPredicateService },
    { type: ArrayPredicateService }
];
MatTableFilterService.ɵprov = ɵɵdefineInjectable({ factory: function MatTableFilterService_Factory() { return new MatTableFilterService(ɵɵinject(AlphaNumericPredicateService), ɵɵinject(ArrayPredicateService)); }, token: MatTableFilterService, providedIn: "root" });
MatTableFilterService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [AlphaNumericPredicateService, ArrayPredicateService])
], MatTableFilterService);

let MatTableFilterDirective = class MatTableFilterDirective {
    constructor(_filterService, _table) {
        this._filterService = _filterService;
        this._table = _table;
        /**
         * in millis
         */
        this.debounceTime = 400;
        this.filterType = MatTableFilter.ANYWHERE;
        this.caseSensitive = false;
        this.initDebounceSubject();
    }
    ngDoCheck() {
        if (this._filterService.isChanged(this._oldExampleEntity, this.exampleEntity)) {
            this._oldExampleEntity = this._filterService.toPlainJson(this.exampleEntity);
            this._exampleEntitySubject.next(undefined);
        }
    }
    initDebounceSubject() {
        this._exampleEntitySubject = new BehaviorSubject(null);
        this._exampleEntitySubject.pipe(debounceTime(this.debounceTime))
            .subscribe(_ => {
            this.updateFilterPredicate();
        });
    }
    updateFilterPredicate() {
        const matDataSource = this.getMatDataSource();
        if (matDataSource) {
            matDataSource.filterPredicate = this.getFilterPredicate();
            matDataSource.filter = this.exampleEntity;
        }
    }
    getFilterPredicate() {
        if (this.customPredicate) {
            return this.customPredicate;
        }
        else {
            return (item) => {
                return this._filterService.filterPredicate({ example: this.exampleEntity, item }, this.propertyOptions, { filterType: this.filterType, caseSensitive: this.caseSensitive });
            };
        }
    }
    getMatDataSource() {
        const matTable = this._table;
        return matTable.dataSource;
    }
};
MatTableFilterDirective.ctorParameters = () => [
    { type: MatTableFilterService },
    { type: MatTable, decorators: [{ type: Host }, { type: Self }, { type: Optional }] }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], MatTableFilterDirective.prototype, "exampleEntity", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MatTableFilterDirective.prototype, "debounceTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatTableFilterDirective.prototype, "filterType", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MatTableFilterDirective.prototype, "caseSensitive", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], MatTableFilterDirective.prototype, "customPredicate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MatTableFilterDirective.prototype, "propertyOptions", void 0);
MatTableFilterDirective = __decorate([
    Directive({
        selector: '[matTableFilter]',
        exportAs: 'matTableFilter'
    }),
    __param(1, Host()), __param(1, Self()), __param(1, Optional()),
    __metadata("design:paramtypes", [MatTableFilterService,
        MatTable])
], MatTableFilterDirective);

let MatTableFilterModule = class MatTableFilterModule {
};
MatTableFilterModule = __decorate([
    NgModule({
        declarations: [MatTableFilterDirective],
        imports: [
            MatTableModule
        ],
        exports: [MatTableFilterDirective]
    })
], MatTableFilterModule);

/*
 * Public API Surface of mat-table-filter
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MatTableFilter, MatTableFilterDirective, MatTableFilterModule, MatTableFilterService, AlphaNumericPredicateService as ɵa, FilterPredicate as ɵb, ArrayPredicateService as ɵc };
//# sourceMappingURL=mat-table-filter.js.map
