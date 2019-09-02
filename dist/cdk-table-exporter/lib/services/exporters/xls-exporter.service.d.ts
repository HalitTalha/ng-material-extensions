import * as XLSX from 'xlsx';
import { Mime } from '../../mime';
import { ExcelOptions } from '../../options';
import { WorksheetExporter } from './worksheet-exporter';
export declare class XlsExporterService extends WorksheetExporter<ExcelOptions> {
    constructor();
    createContent(worksheet: XLSX.WorkSheet, options?: ExcelOptions): any;
    getMimeType(): Mime;
    private correctType;
}
