import { WritingOptions } from 'xlsx';
export interface Options {
    fileName?: string;
}
export interface TxtOptions extends Options {
    delimiter?: string;
}
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export interface ExcelOptions extends Options, Omit<WritingOptions, 'bookType'> {
    columnWidths: Array<number>;
}
export {};
