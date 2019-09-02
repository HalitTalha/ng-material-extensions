import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { Options } from '../../options';
import { WorksheetExporter } from './worksheet-exporter';
import { MIME_TXT } from './../../constants';
import { Mime } from '../../mime';
@Injectable({
  providedIn: 'root'
})
export class TxtExporterService extends WorksheetExporter<Options>  {

  constructor() {
    super();
   }

  public createContent(worksheet: XLSX.WorkSheet, options?: Options): any {
    return XLSX.utils.sheet_to_txt(worksheet);
  }
  public getMimeType(): Mime {
    return MIME_TXT;
  }
}
