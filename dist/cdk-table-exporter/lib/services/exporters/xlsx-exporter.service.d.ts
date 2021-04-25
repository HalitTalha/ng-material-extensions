import { XlsExporterService } from './xls-exporter.service';
import { Mime } from '../../mime';
import { SheetjsHelperService } from '../sheetjs-helper.service';
export declare class XlsxExporterService extends XlsExporterService {
    constructor(sheetJsHelper: SheetjsHelperService);
    getMimeType(): Mime;
}
