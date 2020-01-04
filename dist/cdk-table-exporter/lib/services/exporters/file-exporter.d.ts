import { Mime } from '../../mime';
import { Exporter } from './exporter';
export declare abstract class FileExporter<T> implements Exporter<T> {
    constructor();
    export(rows: Array<any>, options?: T): void;
    abstract createContent(rows: Array<any>, options?: T): any;
    abstract getMimeType(): Mime;
}
