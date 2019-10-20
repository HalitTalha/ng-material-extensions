import { MatTableFilter } from '../mat-table-filter.enum';
import { ItemPair } from '../item-pair';
export declare abstract class FilterPredicate<T> {
    abstract equals(itemPair: ItemPair<T>): boolean;
    abstract anywhere(itemPair: ItemPair<T>): boolean;
    abstract startsWith(itemPair: ItemPair<T>): boolean;
    abstract endsWith(itemPair: ItemPair<T>): boolean;
    executeCondition(itemPair: ItemPair<T>, filterType: MatTableFilter): boolean;
}
