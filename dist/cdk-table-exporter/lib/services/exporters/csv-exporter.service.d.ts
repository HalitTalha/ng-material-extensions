import { Options } from '../../options';
import * as XLSX from 'xlsx';
import { WorksheetExporter } from './worksheet-exporter';
import { Mime } from '../../mime';
import * as i0 from "@angular/core";
export declare class CsvExporterService extends WorksheetExporter<Options> {
    constructor();
    workSheetToContent(worksheet: XLSX.WorkSheet, options?: Options): any;
    getMimeType(): Mime;
    static ɵfac: i0.ɵɵFactoryDef<CsvExporterService>;
    static ɵprov: i0.ɵɵInjectableDef<CsvExporterService>;
}
