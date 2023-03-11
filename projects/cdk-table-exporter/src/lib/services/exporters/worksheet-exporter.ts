import { WorkSheet } from 'xlsx';
import { Mime } from '../../mime';
import { FileExporter } from './file-exporter';
import { SheetjsHelperService } from '../sheetjs-helper.service';
import { Options } from '../../options';
/**
 * An angular service class that is used to create files out of json object arrays.
 */
export abstract class WorksheetExporter<T extends Options> extends FileExporter<T> {

  constructor(protected sheetJsHelper: SheetjsHelperService) {
    super();
  }

  public async createContent(rows: Array<any>, options?: T): Promise<any> {
    const workSheet: WorkSheet =  (await this.sheetJsHelper.getXlsx()).utils.json_to_sheet(rows, {
      skipHeader: true // we don't want to see object properties as our headers
    });
    return await this.workSheetToContent(workSheet, options);
  }
  public abstract workSheetToContent(workSheet: WorkSheet, options?: T): Promise<any>;
  public abstract getMimeType(): Mime;

}
