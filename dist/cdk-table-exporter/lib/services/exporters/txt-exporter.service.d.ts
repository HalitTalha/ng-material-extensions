import { Mime } from '../../mime';
import { TxtOptions } from '../../options';
import { FileExporter } from './file-exporter';
export declare class TxtExporterService extends FileExporter<TxtOptions> {
    constructor();
    createContent(rows: any[], options?: TxtOptions): Promise<any>;
    getMimeType(): Mime;
    private getDelimiter;
}
