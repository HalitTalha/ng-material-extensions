import * as XLSX from 'xlsx';
import { Mime } from '../../mime';
import { ExcelOptions } from '../../options';
import { WorksheetExporter } from './worksheet-exporter';
import * as i0 from "@angular/core";
export declare class XlsExporterService extends WorksheetExporter<ExcelOptions> {
    constructor();
    workSheetToContent(worksheet: XLSX.WorkSheet, options?: ExcelOptions): any;
    getMimeType(): Mime;
    private correctTypes;
    private convertToWch;
    static ɵfac: i0.ɵɵFactoryDef<XlsExporterService>;
    static ɵprov: i0.ɵɵInjectableDef<XlsExporterService>;
}
