import { COMMA, MIME_CSV, BOM } from './../../constants';
import { TxtOptions } from '../../options';
import { Injectable } from '@angular/core';
import { WorkSheet } from 'xlsx';
import { WorksheetExporter } from './worksheet-exporter';
import { Mime } from '../../mime';
import { SheetjsHelperService } from '../sheetjs-helper.service';

@Injectable({
  providedIn: 'root'
})
export class CsvExporterService extends WorksheetExporter<TxtOptions> {

  constructor(sheetJsHelper: SheetjsHelperService) {
    super(sheetJsHelper);
  }

  public async workSheetToContent(worksheet: WorkSheet, options?: TxtOptions): Promise<any> {
    const content = (await this.sheetJsHelper.getXlsx()).utils.sheet_to_csv(worksheet, { FS: options?.delimiter ?? COMMA });
    return BOM + content;
  }

  public getMimeType(): Mime {
    return MIME_CSV;
  }
}
