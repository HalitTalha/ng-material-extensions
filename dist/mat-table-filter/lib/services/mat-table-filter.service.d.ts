import { PropertyOptions, PredicateFunc } from '../property-options';
import { ItemPair } from './../item-pair';
import { ArrayPredicateService } from './array-predicate.service';
import { AlphaNumericPredicateService } from './alpha-numeric-predicate.service';
import { Options } from '../options';
import * as i0 from "@angular/core";
export declare class MatTableFilterService {
    private _alphaNumericService;
    private _arrayService;
    constructor(_alphaNumericService: AlphaNumericPredicateService, _arrayService: ArrayPredicateService);
    filterPredicate(itemPair: ItemPair<any>, propertyOptions: PropertyOptions, commonOptions: Options | PredicateFunc, propertyName?: string): boolean;
    private finalizeOptionsForProperty;
    private getNextPropertyName;
    isChanged(oldEntity: any, newEntity: any): boolean;
    toPlainJson(object?: any): JSON | null;
    private isAlphaNumeric;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatTableFilterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MatTableFilterService>;
}
