import { ExportType } from '../export-type';
import { Mime } from '../mime';
import { Options } from '../options';
export declare class FileUtil {
    static save(content: string, mime: Mime, options?: Options): void;
    static isXls(fileName: string): boolean;
    static identifyExportType(fileName?: string): ExportType;
    static removeExtension(options?: Options): void;
}
