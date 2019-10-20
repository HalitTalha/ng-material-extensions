import { ColumnOptions, PredicateFunc } from './../column-options';
import { ItemPair } from './../item-pair';
import { ArrayPredicateService } from './array-predicate.service';
import { AlphaNumericPredicateService } from './alpha-numeric-predicate.service';
import { Options } from '../options';
export declare class MatTableFilterService {
    private _alphaNumericService;
    private _arrayService;
    constructor(_alphaNumericService: AlphaNumericPredicateService, _arrayService: ArrayPredicateService);
    filterPredicate(itemPair: ItemPair<any>, allOptions: ColumnOptions, commonOptions: Options | PredicateFunc, propertyName?: string): boolean;
    private handleLetterCasing;
    private getOptionsForColumn;
    private getNextPropertyName;
    isChanged(oldEntity: any, newEntity: any): boolean;
    toPlainJson(object: any): JSON;
    private isAlphaNumeric;
}
