import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵinject, ɵɵdirectiveInject, ViewContainerRef, ɵɵdefineDirective, Directive, Host, Self, Optional, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { __extends, __values } from 'tslib';
import { isString, isEqual, difference, flatten, cloneDeep, isNil, every, isEmpty, isArray, isBoolean, isNumber } from 'lodash';
import { isFunction } from 'util';

var MatTableFilter;
(function (MatTableFilter) {
    MatTableFilter["EQUALS"] = "EQUALS";
    MatTableFilter["ANYWHERE"] = "ANYWHERE";
    MatTableFilter["STARTS_WITH"] = "STARTS_WITH";
    MatTableFilter["ENDS_WITH"] = "ENDS_WITH";
})(MatTableFilter || (MatTableFilter = {}));

var FilterPredicate = /** @class */ (function () {
    function FilterPredicate() {
    }
    FilterPredicate.prototype.executeCondition = function (itemPair, options) {
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
    };
    FilterPredicate.prototype.handleLetterCasing = function (itemPair, caseSensitive) {
        if (!caseSensitive) {
            this.transformAllLowerCase(itemPair);
        }
    };
    FilterPredicate.prototype.transformAllLowerCase = function (object) {
        // tslint:disable-next-line:forin
        for (var key in object) {
            var value = object[key];
            if (isString(value)) {
                object[key] = value.toLowerCase();
            }
            else {
                this.transformAllLowerCase(value);
            }
        }
    };
    return FilterPredicate;
}());

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
        return isEqual(itemPair.example.sort(), itemPair.item.sort());
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
        return !difference(flatten(example), flatten(item)).length;
    };
    // tslint:disable-next-line:max-line-length
    ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING = 'This filterType is unsupported for array filtering. FilterType.ANYWHERE is executed instead!';
    ArrayPredicateService.SUGGESTION_WARNING = 'You can set a custom predicate for the array property through PropertyOptions!';
    ArrayPredicateService.ɵfac = function ArrayPredicateService_Factory(t) { return new (t || ArrayPredicateService)(); };
    ArrayPredicateService.ɵprov = ɵɵdefineInjectable({ token: ArrayPredicateService, factory: ArrayPredicateService.ɵfac, providedIn: 'root' });
    return ArrayPredicateService;
}(FilterPredicate));
/*@__PURE__*/ (function () { ɵsetClassMetadata(ArrayPredicateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var AlphaNumericPredicateService = /** @class */ (function (_super) {
    __extends(AlphaNumericPredicateService, _super);
    function AlphaNumericPredicateService() {
        return _super.call(this) || this;
    }
    AlphaNumericPredicateService.prototype.equals = function (itemPair) {
        return itemPair.example === itemPair.item;
    };
    AlphaNumericPredicateService.prototype.anywhere = function (itemPair) {
        return itemPair.item.includes(itemPair.example);
    };
    AlphaNumericPredicateService.prototype.startsWith = function (itemPair) {
        return itemPair.item.startsWith(itemPair.example);
    };
    AlphaNumericPredicateService.prototype.endsWith = function (itemPair) {
        return itemPair.item.endsWith(itemPair.example);
    };
    AlphaNumericPredicateService.ɵfac = function AlphaNumericPredicateService_Factory(t) { return new (t || AlphaNumericPredicateService)(); };
    AlphaNumericPredicateService.ɵprov = ɵɵdefineInjectable({ token: AlphaNumericPredicateService, factory: AlphaNumericPredicateService.ɵfac, providedIn: 'root' });
    return AlphaNumericPredicateService;
}(FilterPredicate));
/*@__PURE__*/ (function () { ɵsetClassMetadata(AlphaNumericPredicateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

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
                var exampleValue = cloneDeep(itemPair.example[key]);
                if (isNil(exampleValue) || every(exampleValue, isEmpty) && typeof exampleValue !== 'boolean') {
                    // if example entity's property is undefined/null/empty then it means the caller wants all the data
                    continue;
                }
                if (itemPair.item.hasOwnProperty(key)) {
                    // if example entity has additional columns then search fails
                    var itemValue = cloneDeep(itemPair.item[key]);
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
                        else if (isArray(itemValue)) {
                            var valuePair = { item: itemValue, example: exampleValue };
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
        return !isEqual(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
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
        return isString(value) || isNumber(value);
    };
    MatTableFilterService.ɵfac = function MatTableFilterService_Factory(t) { return new (t || MatTableFilterService)(ɵɵinject(AlphaNumericPredicateService), ɵɵinject(ArrayPredicateService)); };
    MatTableFilterService.ɵprov = ɵɵdefineInjectable({ token: MatTableFilterService, factory: MatTableFilterService.ɵfac, providedIn: 'root' });
    return MatTableFilterService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MatTableFilterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AlphaNumericPredicateService }, { type: ArrayPredicateService }]; }, null); })();

var MatTableFilterDirective = /** @class */ (function () {
    function MatTableFilterDirective(_filterService, _injectedTable, _viewContainerRef) {
        this._filterService = _filterService;
        this._injectedTable = _injectedTable;
        this._viewContainerRef = _viewContainerRef;
        this.debounceTime = 400;
        this.filterType = MatTableFilter.ANYWHERE;
        this.caseSensitive = false;
        this.initCdkTable();
        this.initDebounceSubject();
    }
    MatTableFilterDirective.prototype.ngDoCheck = function () {
        if (this._filterService.isChanged(this._oldExampleEntity, this.exampleEntity)) {
            this._oldExampleEntity = this._filterService.toPlainJson(this.exampleEntity);
            this._exampleEntitySubject.next(undefined);
        }
    };
    MatTableFilterDirective.prototype.initCdkTable = function () {
        var _a, _b;
        // tslint:disable-next-line:no-string-literal
        var table = (_b = (_a = this._viewContainerRef['_data']) === null || _a === void 0 ? void 0 : _a.componentView) === null || _b === void 0 ? void 0 : _b.component;
        if (table) {
            this._table = table;
        }
        else if (this._injectedTable) {
            this._table = this._injectedTable;
        }
        else {
            throw new Error('Unsupported Angular version!');
        }
    };
    MatTableFilterDirective.prototype.initDebounceSubject = function () {
        var _this = this;
        this._exampleEntitySubject = new BehaviorSubject(null);
        this._exampleEntitySubject.pipe(debounceTime(this.debounceTime))
            .subscribe(function (_) {
            _this.updateFilterPredicate();
        });
    };
    MatTableFilterDirective.prototype.updateFilterPredicate = function () {
        var matDataSource = this.getMatDataSource();
        if (matDataSource) {
            matDataSource.filterPredicate = this.getFilterPredicate();
            matDataSource.filter = this.exampleEntity;
        }
    };
    MatTableFilterDirective.prototype.getFilterPredicate = function () {
        var _this = this;
        if (this.customPredicate) {
            return this.customPredicate;
        }
        else {
            return function (item) {
                return _this._filterService.filterPredicate({ example: _this.exampleEntity, item: item }, _this.propertyOptions, { filterType: _this.filterType, caseSensitive: _this.caseSensitive });
            };
        }
    };
    MatTableFilterDirective.prototype.getMatDataSource = function () {
        var matTable = this._table;
        return matTable.dataSource;
    };
    MatTableFilterDirective.ɵfac = function MatTableFilterDirective_Factory(t) { return new (t || MatTableFilterDirective)(ɵɵdirectiveInject(MatTableFilterService), ɵɵdirectiveInject(MatTable, 11), ɵɵdirectiveInject(ViewContainerRef)); };
    MatTableFilterDirective.ɵdir = ɵɵdefineDirective({ type: MatTableFilterDirective, selectors: [["", "matTableFilter", ""]], inputs: { exampleEntity: "exampleEntity", debounceTime: "debounceTime", filterType: "filterType", caseSensitive: "caseSensitive", customPredicate: "customPredicate", propertyOptions: "propertyOptions" }, exportAs: ["matTableFilter"] });
    return MatTableFilterDirective;
}());
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

var MatTableFilterModule = /** @class */ (function () {
    function MatTableFilterModule() {
    }
    MatTableFilterModule.ɵmod = ɵɵdefineNgModule({ type: MatTableFilterModule });
    MatTableFilterModule.ɵinj = ɵɵdefineInjector({ factory: function MatTableFilterModule_Factory(t) { return new (t || MatTableFilterModule)(); }, imports: [[
                MatTableModule
            ]] });
    return MatTableFilterModule;
}());
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
