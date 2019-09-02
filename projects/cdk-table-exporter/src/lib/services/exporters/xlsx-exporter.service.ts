import { Injectable } from '@angular/core';
import { XlsExporterService } from './xls-exporter.service';
import { Mime } from '../../mime';
import { MIME_EXCEL_XLSX } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class XlsxExporterService extends XlsExporterService {

  constructor() {
    super();
  }

  // override
  public getMimeType(): Mime {
    return MIME_EXCEL_XLSX;
  }
}
