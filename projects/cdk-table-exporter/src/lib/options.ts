import { WritingOptions } from 'xlsx/dist/xlsx.mini.min';

export interface Options {
  fileName ?: string;
}

export interface TxtOptions extends Options {
  delimiter ?: string;
}


type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

 // bookType is omitted because it is actually overriden by our API.
export interface ExcelOptions extends Options, Omit<WritingOptions, 'bookType'> {
  columnWidths: Array<number>;
}

