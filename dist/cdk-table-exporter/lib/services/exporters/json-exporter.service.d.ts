import { Options } from '../../options';
import { FileExporter } from './file-exporter';
import { Mime } from '../../mime';
import * as i0 from "@angular/core";
export declare class JsonExporterService extends FileExporter<Options> {
    constructor();
    createContent(rows: any[], options?: Options): string;
    getMimeType(): Mime;
    static ɵfac: i0.ɵɵFactoryDef<JsonExporterService>;
    static ɵprov: i0.ɵɵInjectableDef<JsonExporterService>;
}
