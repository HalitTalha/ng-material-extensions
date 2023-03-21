import * as i0 from '@angular/core';
import { Injectable, Directive, Host, Self, Optional, Input, NgModule } from '@angular/core';
import * as i2 from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import isEqual from 'lodash-es/isEqual';
import cloneDeep from 'lodash-es/cloneDeep';
import isNil from 'lodash-es/isNil';
import every from 'lodash-es/every';
import isFunction from 'lodash-es/isFunction';
import isArray from 'lodash-es/isArray';
import isBoolean from 'lodash-es/isBoolean';
import isString from 'lodash-es/isString';
import isNumber from 'lodash-es/isNumber';
import isEmpty from 'lodash-es/isEmpty';
import difference from 'lodash-es/difference';
import flatten from 'lodash-es/flatten';

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

class AlphaNumericPredicateService extends FilterPredicate {
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
}
AlphaNumericPredicateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: AlphaNumericPredicateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AlphaNumericPredicateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: AlphaNumericPredicateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: AlphaNumericPredicateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ArrayPredicateService extends FilterPredicate {
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

class MatTableFilterService {
    constructor(_alphaNumericService, _arrayService) {
        this._alphaNumericService = _alphaNumericService;
        this._arrayService = _arrayService;
    }
    filterPredicate(itemPair, propertyOptions, commonOptions, propertyName) {
        var _a;
        // tslint:disable-next-line:forin
        const exampleKeys = Object.keys(itemPair.example);
        for (const key of exampleKeys) {
            const exampleValue = cloneDeep(itemPair.example[key]);
            if (isNil(exampleValue) || every(exampleValue, isEmpty) && typeof exampleValue !== 'boolean') {
                // if example entity's property is undefined/null/empty then it means the caller wants all the data
                continue;
            }
            if ((_a = itemPair.item) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(key)) {
                // if example entity has additional columns then search fails
                const itemValue = cloneDeep(itemPair.item[key]);
                const nextPropertyName = this.getNextPropertyName(key, propertyName);
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
    getNextPropertyName(key, propertyName) {
        return propertyName ? (propertyName + '.' + key) : key;
    }
    isChanged(oldEntity, newEntity) {
        return !isEqual(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
    }
    toPlainJson(object) {
        if (!object)
            return null;
        return JSON.parse(JSON.stringify(object));
    }
    isAlphaNumeric(value) {
        return isString(value) || isNumber(value);
    }
}
MatTableFilterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: MatTableFilterService, deps: [{ token: AlphaNumericPredicateService }, { token: ArrayPredicateService }], target: i0.ɵɵFactoryTarget.Injectable });
MatTableFilterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: MatTableFilterService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: MatTableFilterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: AlphaNumericPredicateService }, { type: ArrayPredicateService }]; } });

class MatTableFilterDirective {
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
        this._exampleEntitySubject = new BehaviorSubject(undefined);
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
}
MatTableFilterDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: MatTableFilterDirective, deps: [{ token: MatTableFilterService }, { token: i2.MatTable, host: true, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Directive });
MatTableFilterDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.3", type: MatTableFilterDirective, selector: "[matTableFilter]", inputs: { exampleEntity: "exampleEntity", debounceTime: "debounceTime", filterType: "filterType", caseSensitive: "caseSensitive", customPredicate: "customPredicate", propertyOptions: "propertyOptions" }, exportAs: ["matTableFilter"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: MatTableFilterDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[matTableFilter]',
                    exportAs: 'matTableFilter'
                }]
        }], ctorParameters: function () {
        return [{ type: MatTableFilterService }, { type: i2.MatTable, decorators: [{
                        type: Host
                    }, {
                        type: Self
                    }, {
                        type: Optional
                    }] }];
    }, propDecorators: { exampleEntity: [{
                type: Input
            }], debounceTime: [{
                type: Input
            }], filterType: [{
                type: Input
            }], caseSensitive: [{
                type: Input
            }], customPredicate: [{
                type: Input
            }], propertyOptions: [{
                type: Input
            }] } });

class MatTableFilterModule {
}
MatTableFilterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: MatTableFilterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MatTableFilterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.3", ngImport: i0, type: MatTableFilterModule, declarations: [MatTableFilterDirective], imports: [MatTableModule], exports: [MatTableFilterDirective] });
MatTableFilterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: MatTableFilterModule, imports: [MatTableModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: MatTableFilterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MatTableFilterDirective],
                    imports: [
                        MatTableModule
                    ],
                    exports: [MatTableFilterDirective]
                }]
        }] });

/*
 * Public API Surface of mat-table-filter
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MatTableFilter, MatTableFilterDirective, MatTableFilterModule, MatTableFilterService };
//# sourceMappingURL=mat-table-filter.mjs.map
