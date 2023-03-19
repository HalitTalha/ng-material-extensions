import { Options } from './options';
export declare type PredicateFunc = (data: any) => boolean;
export interface PropertyOptions {
    [property: string]: Options | PredicateFunc;
}
