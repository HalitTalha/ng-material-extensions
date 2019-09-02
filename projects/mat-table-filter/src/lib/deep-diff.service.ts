import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeepDiffService {


  constructor() { }

  public isDifferent(oldObject: any, newObject: any): boolean {
    if (!oldObject && newObject) {
      return true;
    }
    for (const key in oldObject) {
      if (newObject.hasOwnProperty(key)) {
        const oldValue = oldObject[key];
        const newValue = newObject[key];
        if (typeof oldValue === 'string' || typeof oldValue === 'number') {
          if (oldValue !== newValue) {
            return true;
          }
        } else if (typeof oldValue === 'object') {
          const result = this.isDifferent(oldValue, newValue);
          if (result) {
            return true;
          }
        }
      }
    }
    return false;
  }
}
