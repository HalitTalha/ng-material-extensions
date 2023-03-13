import { PropertyOptions, PredicateFunc } from '../property-options';
import { ItemPair } from './../item-pair';
import { ArrayPredicateService } from './array-predicate.service';
import { AlphaNumericPredicateService } from './alpha-numeric-predicate.service';
import { Injectable } from '@angular/core';
import isEqual from 'lodash-es/isEqual';
import cloneDeep from 'lodash-es/cloneDeep';
import isNil from 'lodash-es/isNil';
import every from 'lodash-es/every';
import isFunction from 'lodash-es/isFunction';
import isArray from 'lodash-es/isArray';
import isBoolean from 'lodash-es/isBoolean';
import isString from 'lodash-es/isString';
import isNumber from 'lodash-es/isNumber';
import isEmpty from 'lodash-es/isEmpty';
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
      const exampleValue = cloneDeep(itemPair.example[key]);
      if (isNil(exampleValue) || every(exampleValue, isEmpty) && typeof exampleValue !== 'boolean') {
        // if example entity's property is undefined/null/empty then it means the caller wants all the data
        continue;
      }
      if (itemPair.item?.hasOwnProperty(key)) {
        // if example entity has additional columns then search fails
        const itemValue = cloneDeep(itemPair.item[key]);
        const nextPropertyName = this.getNextPropertyName(key, propertyName);
        const options = this.finalizeOptionsForProperty(commonOptions, propertyOptions, nextPropertyName);
        if (isFunction(options)) { // if user defined predicate is present for property
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
          } else if (isArray(itemValue)) {
            const valuePair: ItemPair<any[]> = {item: itemValue, example: exampleValue};
            if (!this._arrayService.executeCondition(valuePair, columnOptions)) {
              return false;
            }
          } else if (isBoolean(itemValue)) {
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

  private getNextPropertyName(key: string, propertyName?: string): string {
    return propertyName ? (propertyName + '.' + key) : key;
  }

  public isChanged(oldEntity: any, newEntity: any): boolean {
    return !isEqual(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
  }

  public toPlainJson(object: any): JSON {
    return JSON.parse(JSON.stringify(object));
  }

  private isAlphaNumeric(value: any): boolean {
    return isString(value) || isNumber(value);
  }
}
