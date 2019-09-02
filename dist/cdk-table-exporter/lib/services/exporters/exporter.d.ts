import { Options } from '../../options';
export interface Exporter<T extends Options> {
    export(rows: Array<any>, options?: T): any;
}
