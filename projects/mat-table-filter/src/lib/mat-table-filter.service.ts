import { Injectable } from '@angular/core';
import { MatTableFilter } from './mat-table-filter.enum';

@Injectable({
  providedIn: 'root'
})
export class MatTableFilterService {
  constructor() {}

  public filterPredicate(exampleEntity: any, item: any, filterType: MatTableFilter, caseSensitive: boolean): boolean {
    const exampleEntityObjectKeys = Object.keys(exampleEntity);
    for (let i = 0; i < exampleEntityObjectKeys.length; i++) {
      const exampleColumn = exampleEntityObjectKeys[i];
      const exampleColumnValue = exampleEntity[exampleColumn];
      const itemColumnValue = item[exampleColumn];
      if (!exampleColumnValue || exampleColumnValue instanceof Array) {
        // if example entity's property is undefined/null/empty then it means the caller wants all the data
        // also if there is an array property we are skipping
        continue;
      }
      if (itemColumnValue) {
        // if example entity has additional columns then search fails
        if (this.isAlphaNumeric(itemColumnValue)) {
          if (!this.filterPredicateAlphaNumeric(exampleColumnValue, itemColumnValue, filterType, caseSensitive)) {
            return false;
          }
        } else if (this.isBoolean(itemColumnValue)) {
          if (itemColumnValue !== exampleColumnValue) {
            return false;
          }
        } else {
          if (!this.filterPredicate(exampleColumnValue, itemColumnValue, filterType, caseSensitive)) {
            // if one of the inner properties returns true, this shouldnt affect the whole item's filtering
            // however if it returns false then the item must not be in the list
            return false;
          }
        }
      } else {
        return false;
      }
    }
    return true;
  }

  private filterPredicateAlphaNumeric(
    exampleColumnValue: number | string,
    itemColumnValue: number | string,
    filterType: MatTableFilter,
    caseSensitive: boolean
  ): boolean {
    let exampleString = exampleColumnValue.toString();
    let itemString = itemColumnValue.toString();
    if (!caseSensitive) {
      exampleString = exampleString.toUpperCase();
      itemString = itemString.toUpperCase();
    }
    let result = true;
    switch (filterType) {
      case MatTableFilter.EQUALS:
        if (exampleColumnValue !== itemColumnValue) {
          result = false;
        }
        break;
      case MatTableFilter.ANYWHERE:
        if (!itemString.includes(exampleString)) {
          result = false;
        }
        break;
      case MatTableFilter.STARTS_WITH:
        if (!itemString.startsWith(exampleString)) {
          result = false;
        }
        break;
      case MatTableFilter.ENDS_WITH:
        if (!itemString.endsWith(exampleString)) {
          result = false;
        }
        break;
      default:
        break;
    }
    return result;
  }

  private isAlphaNumeric(value: any) {
    return typeof value === 'string' || typeof value === 'number';
  }

  private isBoolean(value: any) {
    return typeof value === 'boolean';
  }
}
