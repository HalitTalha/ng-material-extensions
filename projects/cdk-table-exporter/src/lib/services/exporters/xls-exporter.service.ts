import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { MIME_EXCEL_XLS, TYPE_ARRAY } from '../../constants';
import { Mime } from '../../mime';
import { ExcelOptions } from '../../options';
import { WorksheetExporter } from './worksheet-exporter';

@Injectable({
  providedIn: 'root'
})
export class XlsExporterService extends WorksheetExporter<ExcelOptions> {

  constructor() {
    super();
  }

  public createContent(worksheet: XLSX.WorkSheet, options?: ExcelOptions): any {
    const workBook = XLSX.utils.book_new();
    if (!options) {
      options = {} as ExcelOptions;
    }
    this.correctType(options);
    XLSX.utils.book_append_sheet(workBook, worksheet, options.sheet);
    return XLSX.write(workBook, options);
  }

  public getMimeType(): Mime {
    return MIME_EXCEL_XLS;
  }

  private correctType(options: ExcelOptions) {
    if (!options.type) {
      options.type = TYPE_ARRAY;
    }
  }
}
