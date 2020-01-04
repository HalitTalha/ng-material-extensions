import { MIME_CSV } from './../../constants';
import { Options } from '../../options';
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { WorksheetExporter } from './worksheet-exporter';
import { Mime } from '../../mime';

@Injectable({
  providedIn: 'root'
})
export class CsvExporterService extends WorksheetExporter<Options> {

  constructor() {
    super();
  }

  public workSheetToContent(worksheet: XLSX.WorkSheet, options?: Options): any {
    return XLSX.utils.sheet_to_csv(worksheet);
  }

  public getMimeType(): Mime {
    return MIME_CSV;
  }
}
