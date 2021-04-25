import { Injectable, Inject, Optional } from '@angular/core';
import { XLSX_LIGHTWEIGHT } from '../constants';
import type * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class SheetjsHelperService {

  constructor(@Optional() @Inject(XLSX_LIGHTWEIGHT) private xlsxLightweight: boolean) { }

  public async getXlsx(): Promise<typeof XLSX> {
    if (this.xlsxLightweight) {
      return await import(`xlsx/dist/xlsx.mini.min`);
    } else {
      return await import('xlsx');
    }
  }

}
