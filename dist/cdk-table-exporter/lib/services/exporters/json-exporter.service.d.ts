import { Exporter } from './exporter';
import { Options } from '../../options';
export declare class JsonExporterService implements Exporter<Options> {
    constructor();
    export(rows: any[], options?: Options): void;
}
