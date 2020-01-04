import * as XLSX from 'xlsx';
import { Mime } from '../../mime';
import { FileExporter } from './file-exporter';
/**
 * An angular service class that is used to create files out of json object arrays.
 */
export declare abstract class WorksheetExporter<T> extends FileExporter<T> {
    constructor();
    createContent(rows: Array<any>, options?: T): any;
    abstract workSheetToContent(workSheet: XLSX.WorkSheet, options?: T): any;
    abstract getMimeType(): Mime;
}
