import { FilterPredicate } from './filter-predicate';
import { ItemPair } from '../item-pair';
export declare class ArrayPredicateService extends FilterPredicate<Array<any>> {
    private static readonly UNSUPPORTED_OPERATION_WARNING;
    private static readonly SUGGESTION_WARNING;
    constructor();
    private static warn;
    equals(itemPair: ItemPair<Array<any>>): boolean;
    anywhere(itemPair: ItemPair<Array<any>>): boolean;
    startsWith(itemPair: ItemPair<Array<any>>): boolean;
    endsWith(itemPair: ItemPair<Array<any>>): boolean;
    private isSubset;
}
