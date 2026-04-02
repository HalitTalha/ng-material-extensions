import { Injectable } from '@angular/core';
import { WorkSheet } from 'xlsx';
import { MIME_EXCEL_XLS, TYPE_ARRAY, XLSX_COLS } from '../../constants';
import { Mime } from '../../mime';
import { ExcelOptions } from '../../options';
import { WorksheetExporter } from './worksheet-exporter';
import { SheetjsHelperService } from '../sheetjs-helper.service';

@Injectable({
  providedIn: 'root'
})
export class XlsExporterService extends WorksheetExporter<ExcelOptions> {

  constructor(sheetJsHelper: SheetjsHelperService) {
    super(sheetJsHelper);
  }

  public async workSheetToContent(worksheet: WorkSheet, options: ExcelOptions = {} as ExcelOptions): Promise<any> {
    const { utils, write } = await this.sheetJsHelper.getXlsx();
    const workBook = utils.book_new();
    if (options.columnWidths) {
      worksheet[XLSX_COLS] = this.convertToWch(options.columnWidths);
    }
    this.correctTypes(options);
    utils.book_append_sheet(workBook, worksheet, options.sheet as any);
    return write(workBook, options);
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
