import { ItemPair } from '../item-pair';
import { Options } from '../options';
export declare abstract class FilterPredicate<T> {
    abstract equals(itemPair: ItemPair<T>): boolean;
    abstract anywhere(itemPair: ItemPair<T>): boolean;
    abstract startsWith(itemPair: ItemPair<T>): boolean;
    abstract endsWith(itemPair: ItemPair<T>): boolean;
    executeCondition(itemPair: ItemPair<T>, options: Options): boolean;
    private handleLetterCasing;
    private transformAllLowerCase;
}
