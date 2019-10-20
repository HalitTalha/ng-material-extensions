import { Options } from './options';
export declare type PredicateFunc = (data: any) => boolean;
export interface ColumnOptions {
    [property: string]: Options | PredicateFunc;
}
