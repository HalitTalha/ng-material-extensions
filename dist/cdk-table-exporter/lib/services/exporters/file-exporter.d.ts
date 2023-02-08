import { Mime } from '../../mime';
import { Exporter } from './exporter';
import { Options } from '../../options';

export declare abstract class FileExporter<T extends Options> implements Exporter<T> {
    constructor();
    export(rows: Array<any>, options?: T): void;
    abstract createContent(rows: Array<any>, options?: T): Promise<any>;
    abstract getMimeType(): Mime;
}
