import { Options } from '../../options';
import { FileExporter } from './file-exporter';
import { Mime } from '../../mime';
export declare class JsonExporterService extends FileExporter<Options> {
    constructor();
    createContent(rows: any[], options?: Options): string;
    getMimeType(): Mime;
}
