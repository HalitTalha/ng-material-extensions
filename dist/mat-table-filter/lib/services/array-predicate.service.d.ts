import { FilterPredicate } from './filter-predicate';
import { ItemPair } from '../item-pair';
export declare class ArrayPredicateService extends FilterPredicate<Array<any>> {
    constructor();
    equals(itemPair: ItemPair<Array<any>>): boolean;
    anywhere(itemPair: ItemPair<Array<any>>): boolean;
    startsWith(itemPair: ItemPair<Array<any>>): boolean;
    endsWith(itemPair: ItemPair<Array<any>>): boolean;
    private isSubset;
}
