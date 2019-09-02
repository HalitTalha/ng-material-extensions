import * as XLSX from 'xlsx';
import { Options } from '../../options';
import { WorksheetExporter } from './worksheet-exporter';
import { Mime } from '../../mime';
export declare class TxtExporterService extends WorksheetExporter<Options> {
    constructor();
    createContent(worksheet: XLSX.WorkSheet, options?: Options): any;
    getMimeType(): Mime;
}
