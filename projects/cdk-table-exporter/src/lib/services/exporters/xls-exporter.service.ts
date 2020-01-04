import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { MIME_EXCEL_XLS, TYPE_ARRAY, XLSX_COLS } from '../../constants';
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

  public workSheetToContent(worksheet: XLSX.WorkSheet, options: ExcelOptions = {} as ExcelOptions): any {
    const workBook = XLSX.utils.book_new();
    if (options.columnWidths) {
      worksheet[XLSX_COLS] = this.convertToWch(options.columnWidths);
    }
    this.correctTypes(options);
    XLSX.utils.book_append_sheet(workBook, worksheet, options.sheet);
    return XLSX.write(workBook, options);
  }

  public getMimeType(): Mime {
    return MIME_EXCEL_XLS;
  }

  private correctTypes(options: ExcelOptions) {
    if (!options.type) {
      options.type = TYPE_ARRAY;
    }
    (options as any).bookType = this.getMimeType().extension.replace('.', ''); // sheetjs requires bookingType for excel format
  }

  private convertToWch(columnWidths: Array<number>): Array<{wch: number}> {
    return columnWidths.map(width => ({wch: width}));
  }
}
