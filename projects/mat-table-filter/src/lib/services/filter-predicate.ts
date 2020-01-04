import { MatTableFilter } from '../mat-table-filter.enum';
import { ItemPair } from '../item-pair';
import * as LODASH from 'lodash';
import { Options } from '../options';

export abstract class FilterPredicate<T> {

  public abstract equals(itemPair: ItemPair<T>): boolean;
  public abstract anywhere(itemPair: ItemPair<T>): boolean;
  public abstract startsWith(itemPair: ItemPair<T>): boolean;
  public abstract endsWith(itemPair: ItemPair<T>): boolean;

  public executeCondition(itemPair: ItemPair<T>, options: Options): boolean {
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

  private handleLetterCasing(itemPair: ItemPair<any>, caseSensitive: boolean): void {
    if (!caseSensitive) {
      this.transformAllLowerCase(itemPair);
    }
  }

  private transformAllLowerCase(object: any) {
    // tslint:disable-next-line:forin
    for (const key in object) {
      const value = object[key];
      if (LODASH.isString(value)) {
        object[key] = value.toLowerCase();
      } else {
        this.transformAllLowerCase(value);
      }
    }
  }
}
