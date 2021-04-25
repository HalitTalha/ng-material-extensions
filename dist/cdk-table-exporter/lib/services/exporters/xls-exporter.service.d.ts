import { WorkSheet } from 'xlsx';
import { Mime } from '../../mime';
import { ExcelOptions } from '../../options';
import { WorksheetExporter } from './worksheet-exporter';
import { SheetjsHelperService } from '../sheetjs-helper.service';
export declare class XlsExporterService extends WorksheetExporter<ExcelOptions> {
    constructor(sheetJsHelper: SheetjsHelperService);
    workSheetToContent(worksheet: WorkSheet, options?: ExcelOptions): Promise<any>;
    getMimeType(): Mime;
    private correctTypes;
    private convertToWch;
}
