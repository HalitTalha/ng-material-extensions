import { Injectable } from '@angular/core';
import { XlsExporterService } from './xls-exporter.service';
import { Mime } from '../../mime';
import { MIME_EXCEL_XLSX } from '../../constants';
import { SheetjsHelperService } from '../sheetjs-helper.service';

@Injectable({
  providedIn: 'root'
})
export class XlsxExporterService extends XlsExporterService {

  constructor(sheetJsHelper: SheetjsHelperService) {
    super(sheetJsHelper);
  }

  public override getMimeType(): Mime {
    return MIME_EXCEL_XLSX;
  }
}
