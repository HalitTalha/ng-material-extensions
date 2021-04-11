import { COMMA, MIME_CSV, BOM } from './../../constants';
import { TxtOptions } from '../../options';
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx/dist/xlsx.mini.min';
import { WorksheetExporter } from './worksheet-exporter';
import { Mime } from '../../mime';

@Injectable({
  providedIn: 'root'
})
export class CsvExporterService extends WorksheetExporter<TxtOptions> {

  constructor() {
    super();
  }

  public workSheetToContent(worksheet: XLSX.WorkSheet, options?: TxtOptions): any {
    return BOM + XLSX.utils.sheet_to_csv(worksheet, { FS: options?.delimiter ?? COMMA });
  }

  public getMimeType(): Mime {
    return MIME_CSV;
  }
}
