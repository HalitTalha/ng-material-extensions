import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵinject, ɵɵdirectiveInject, ViewContainerRef, ɵɵdefineDirective, Directive, Host, Self, Optional, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
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
ArrayPredicateService.ɵfac = function ArrayPredicateService_Factory(t) { return new (t || ArrayPredicateService)(); };
ArrayPredicateService.ɵprov = ɵɵdefineInjectable({ token: ArrayPredicateService, factory: ArrayPredicateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ArrayPredicateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

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
AlphaNumericPredicateService.ɵfac = function AlphaNumericPredicateService_Factory(t) { return new (t || AlphaNumericPredicateService)(); };
AlphaNumericPredicateService.ɵprov = ɵɵdefineInjectable({ token: AlphaNumericPredicateService, factory: AlphaNumericPredicateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AlphaNumericPredicateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class MatTableFilterService {
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
}
MatTableFilterService.ɵfac = function MatTableFilterService_Factory(t) { return new (t || MatTableFilterService)(ɵɵinject(AlphaNumericPredicateService), ɵɵinject(ArrayPredicateService)); };
MatTableFilterService.ɵprov = ɵɵdefineInjectable({ token: MatTableFilterService, factory: MatTableFilterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MatTableFilterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AlphaNumericPredicateService }, { type: ArrayPredicateService }]; }, null); })();

class MatTableFilterDirective {
    constructor(_filterService, _injectedTable, _viewContainerRef) {
        this._filterService = _filterService;
        this._injectedTable = _injectedTable;
        this._viewContainerRef = _viewContainerRef;
        this.debounceTime = 400;
        this.filterType = MatTableFilter.ANYWHERE;
        this.caseSensitive = false;
        this.initCdkTable();
        this.initDebounceSubject();
    }
    ngDoCheck() {
        if (this._filterService.isChanged(this._oldExampleEntity, this.exampleEntity)) {
            this._oldExampleEntity = this._filterService.toPlainJson(this.exampleEntity);
            this._exampleEntitySubject.next(undefined);
        }
    }
    initCdkTable() {
        var _a, _b;
        // tslint:disable-next-line:no-string-literal
        const table = (_b = (_a = this._viewContainerRef['_data']) === null || _a === void 0 ? void 0 : _a.componentView) === null || _b === void 0 ? void 0 : _b.component;
        if (table) {
            this._table = table;
        }
        else if (this._injectedTable) {
            this._table = this._injectedTable;
        }
        else {
            throw new Error('Unsupported Angular version!');
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
}
MatTableFilterDirective.ɵfac = function MatTableFilterDirective_Factory(t) { return new (t || MatTableFilterDirective)(ɵɵdirectiveInject(MatTableFilterService), ɵɵdirectiveInject(MatTable, 11), ɵɵdirectiveInject(ViewContainerRef)); };
MatTableFilterDirective.ɵdir = ɵɵdefineDirective({ type: MatTableFilterDirective, selectors: [["", "matTableFilter", ""]], inputs: { exampleEntity: "exampleEntity", debounceTime: "debounceTime", filterType: "filterType", caseSensitive: "caseSensitive", customPredicate: "customPredicate", propertyOptions: "propertyOptions" }, exportAs: ["matTableFilter"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MatTableFilterDirective, [{
        type: Directive,
        args: [{
                selector: '[matTableFilter]',
                exportAs: 'matTableFilter'
            }]
    }], function () { return [{ type: MatTableFilterService }, { type: MatTable, decorators: [{
                type: Host
            }, {
                type: Self
            }, {
                type: Optional
            }] }, { type: ViewContainerRef }]; }, { exampleEntity: [{
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
        }] }); })();

class MatTableFilterModule {
}
MatTableFilterModule.ɵmod = ɵɵdefineNgModule({ type: MatTableFilterModule });
MatTableFilterModule.ɵinj = ɵɵdefineInjector({ factory: function MatTableFilterModule_Factory(t) { return new (t || MatTableFilterModule)(); }, imports: [[
            MatTableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MatTableFilterModule, { declarations: [MatTableFilterDirective], imports: [MatTableModule], exports: [MatTableFilterDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MatTableFilterModule, [{
        type: NgModule,
        args: [{
                declarations: [MatTableFilterDirective],
                imports: [
                    MatTableModule
                ],
                exports: [MatTableFilterDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of mat-table-filter
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MatTableFilter, MatTableFilterDirective, MatTableFilterModule, MatTableFilterService };
//# sourceMappingURL=mat-table-filter.js.map
