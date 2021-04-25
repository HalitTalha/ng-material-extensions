import { TxtOptions } from '../../options';
import { WorkSheet } from 'xlsx';
import { WorksheetExporter } from './worksheet-exporter';
import { Mime } from '../../mime';
import { SheetjsHelperService } from '../sheetjs-helper.service';
export declare class CsvExporterService extends WorksheetExporter<TxtOptions> {
    constructor(sheetJsHelper: SheetjsHelperService);
    workSheetToContent(worksheet: WorkSheet, options?: TxtOptions): Promise<any>;
    getMimeType(): Mime;
}
