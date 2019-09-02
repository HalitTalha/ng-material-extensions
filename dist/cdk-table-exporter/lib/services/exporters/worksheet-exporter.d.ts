import * as XLSX from 'xlsx';
import { Options } from '../../options';
import { Exporter } from './exporter';
import { Mime } from '../../mime';
/**
 * An angular service class that is used to create files out of json object arrays.
 */
export declare abstract class WorksheetExporter<T extends Options> implements Exporter<T> {
    constructor();
    export(rows: Array<any>, options?: T): void;
    writeToFile(worksheet: XLSX.WorkSheet, options?: T): void;
    abstract createContent(worksheet: XLSX.WorkSheet, options?: T): any;
    abstract getMimeType(): Mime;
}
