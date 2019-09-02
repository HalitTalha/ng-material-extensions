import { WritingOptions } from 'xlsx/types';
export interface Options {
    fileName?: string;
}
export interface ExcelOptions extends Options, WritingOptions {
}
