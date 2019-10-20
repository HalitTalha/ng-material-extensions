import { FilterPredicate } from './filter-predicate';
import { ItemPair } from '../item-pair';
export declare class AlphaNumericPredicateService extends FilterPredicate<string> {
    constructor();
    equals(itemPair: ItemPair<string>): boolean;
    anywhere(itemPair: ItemPair<string>): boolean;
    startsWith(itemPair: ItemPair<string>): boolean;
    endsWith(itemPair: ItemPair<string>): boolean;
}
