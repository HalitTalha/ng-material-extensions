import { FilterPredicate } from './filter-predicate';
import { ItemPair } from '../item-pair';
import * as i0 from "@angular/core";
export declare class AlphaNumericPredicateService extends FilterPredicate<string> {
    constructor();
    equals(itemPair: ItemPair<string>): boolean;
    anywhere(itemPair: ItemPair<string>): boolean;
    startsWith(itemPair: ItemPair<string>): boolean;
    endsWith(itemPair: ItemPair<string>): boolean;
    static ɵfac: i0.ɵɵFactoryDef<AlphaNumericPredicateService>;
    static ɵprov: i0.ɵɵInjectableDef<AlphaNumericPredicateService>;
}
