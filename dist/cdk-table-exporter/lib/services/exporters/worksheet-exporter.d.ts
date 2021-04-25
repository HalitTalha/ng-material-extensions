import { WorkSheet } from 'xlsx';
import { Mime } from '../../mime';
import { FileExporter } from './file-exporter';
import { SheetjsHelperService } from '../sheetjs-helper.service';
/**
 * An angular service class that is used to create files out of json object arrays.
 */
export declare abstract class WorksheetExporter<T> extends FileExporter<T> {
    protected sheetJsHelper: SheetjsHelperService;
    constructor(sheetJsHelper: SheetjsHelperService);
    createContent(rows: Array<any>, options?: T): Promise<any>;
    abstract workSheetToContent(workSheet: WorkSheet, options?: T): Promise<any>;
    abstract getMimeType(): Mime;
}
