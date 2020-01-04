import { Injectable } from '@angular/core';
import { FilterPredicate } from './filter-predicate';
import { ItemPair } from '../item-pair';

@Injectable({
  providedIn: 'root'
})
export class AlphaNumericPredicateService extends FilterPredicate<string> {

  constructor() {
    super();
   }

  public equals(itemPair: ItemPair<string>): boolean {
    return itemPair.example === itemPair.item;
  }
  public anywhere(itemPair: ItemPair<string>): boolean {
    return itemPair.item.includes(itemPair.example);
  }
  public startsWith(itemPair: ItemPair<string>): boolean {
    return itemPair.item.startsWith(itemPair.example);
  }
  public endsWith(itemPair: ItemPair<string>): boolean {
    return itemPair.item.endsWith(itemPair.example);
  }

}
