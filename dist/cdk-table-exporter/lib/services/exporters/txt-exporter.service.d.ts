import { Mime } from '../../mime';
import { TxtOptions } from '../../options';
import { FileExporter } from './file-exporter';
import * as i0 from "@angular/core";
export declare class TxtExporterService extends FileExporter<TxtOptions> {
    constructor();
    createContent(rows: any[], options?: TxtOptions): string;
    getMimeType(): Mime;
    private getDelimiter;
    static ɵfac: i0.ɵɵFactoryDef<TxtExporterService>;
    static ɵprov: i0.ɵɵInjectableDef<TxtExporterService>;
}
