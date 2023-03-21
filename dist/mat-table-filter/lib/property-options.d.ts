import { Options } from './options';
export type PredicateFunc = (data: any) => boolean;
export interface PropertyOptions {
    [property: string]: Options | PredicateFunc;
}
