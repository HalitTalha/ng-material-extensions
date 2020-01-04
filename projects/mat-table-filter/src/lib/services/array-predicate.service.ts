import { Injectable } from '@angular/core';
import { FilterPredicate } from './filter-predicate';
import * as LODASH from 'lodash';
import { ItemPair } from '../item-pair';

@Injectable({
  providedIn: 'root'
})
export class ArrayPredicateService extends FilterPredicate<Array<any>> {

  // tslint:disable-next-line:max-line-length
  private static readonly UNSUPPORTED_OPERATION_WARNING = 'This filterType is unsupported for array filtering. FilterType.ANYWHERE is executed instead!';
  private static readonly SUGGESTION_WARNING = 'You can set a custom predicate for the array property through PropertyOptions!';
  constructor() {
    super();
  }

  private static warn() {
    console.warn(ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING);
    console.warn(ArrayPredicateService.SUGGESTION_WARNING);
  }

  public equals(itemPair: ItemPair<Array<any>>): boolean {
    return LODASH.isEqual(itemPair.example.sort(), itemPair.item.sort());
  }
  public anywhere(itemPair: ItemPair<Array<any>>): boolean {
    return this.isSubset(itemPair.example, itemPair.item);
  }
  public startsWith(itemPair: ItemPair<Array<any>>): boolean {
    ArrayPredicateService.warn();
    return this.anywhere(itemPair);
  }
  public endsWith(itemPair: ItemPair<Array<any>>): boolean {
    ArrayPredicateService.warn();
    return this.anywhere(itemPair);
  }

  private isSubset(example: Array<any>, item: Array<any>): boolean {
    return !LODASH.difference(LODASH.flatten(example), LODASH.flatten(item)).length;
  }

}
