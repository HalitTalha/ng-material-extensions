import { PropertyOptions, PredicateFunc } from '../property-options';
import { ItemPair } from './../item-pair';
import { ArrayPredicateService } from './array-predicate.service';
import { AlphaNumericPredicateService } from './alpha-numeric-predicate.service';
import { Injectable } from '@angular/core';
import * as LODASH from 'lodash-es';
import { Options } from '../options';

@Injectable({
  providedIn: 'root'
})
export class MatTableFilterService {
  constructor(private _alphaNumericService: AlphaNumericPredicateService, private _arrayService: ArrayPredicateService) {}

  public filterPredicate(itemPair: ItemPair<any>, propertyOptions: PropertyOptions,
                         commonOptions: Options | PredicateFunc, propertyName?: string): boolean {
    // tslint:disable-next-line:forin
    const exampleKeys = Object.keys(itemPair.example);
    for (const key of exampleKeys) {
      const exampleValue = LODASH.cloneDeep(itemPair.example[key]);
      if (LODASH.isNil(exampleValue) || LODASH.every(exampleValue, LODASH.isEmpty) && typeof exampleValue !== 'boolean') {
        // if example entity's property is undefined/null/empty then it means the caller wants all the data
        continue;
      }
      if (itemPair.item.hasOwnProperty(key)) {
        // if example entity has additional columns then search fails
        const itemValue = LODASH.cloneDeep(itemPair.item[key]);
        const nextPropertyName = this.getNextPropertyName(propertyName, key);
        const options = this.finalizeOptionsForProperty(commonOptions, propertyOptions, nextPropertyName);
        if (LODASH.isFunction(options)) { // if user defined predicate is present for property
          const customPredicate = options as PredicateFunc;
          if (!customPredicate(itemValue)) {
            return false;
          }
        } else {
          const columnOptions = options as Options;
          if (this.isAlphaNumeric(itemValue)) {
            const valuePair: ItemPair<string> = {item: itemValue.toString(), example: exampleValue};
            if (!this._alphaNumericService.executeCondition(valuePair, columnOptions)) {
              return false;
            }
          } else if (LODASH.isArray(itemValue)) {
            const valuePair: ItemPair<any[]> = {item: itemValue, example: exampleValue};
            if (!this._arrayService.executeCondition(valuePair, columnOptions)) {
              return false;
            }
          } else if (LODASH.isBoolean(itemValue)) {
            if (itemValue !== exampleValue) {
              return false;
            }
          } else {
            const valuePair: ItemPair<any> = {item: itemValue, example: exampleValue};
            if (!this.filterPredicate(valuePair, propertyOptions, options, nextPropertyName)) {
              // if one of the inner properties returns true, this shouldnt affect the whole item's filtering
              // however if it returns false then the item must not be in the list
              return false;
            }
          }
        }
      } else {
        return false;
      }
    }
    return true;
  }

  private finalizeOptionsForProperty(commonOptions: Options | PredicateFunc, propertyOptions: PropertyOptions, propertyName: string):
   Options | PredicateFunc {
    if (propertyOptions && propertyOptions.hasOwnProperty(propertyName)) {
      return propertyOptions[propertyName];
    } else {
      return commonOptions;
    }
  }

  private getNextPropertyName(propertyName: string, key: string): string {
    return propertyName ? (propertyName + '.' + key) : key;
  }

  public isChanged(oldEntity: any, newEntity: any): boolean {
    return !LODASH.isEqual(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
  }

  public toPlainJson(object: any): JSON {
    if (object) {
      return JSON.parse(JSON.stringify(object));
    } else {
      return undefined;
    }
  }

  private isAlphaNumeric(value: any): boolean {
    return LODASH.isString(value) || LODASH.isNumber(value);
  }
}
