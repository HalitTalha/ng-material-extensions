import * as XLSX from 'xlsx/dist/xlsx.mini.min';
import { Mime } from '../../mime';
import { FileExporter } from './file-exporter';
/**
 * An angular service class that is used to create files out of json object arrays.
 */
export abstract class WorksheetExporter<T> extends FileExporter<T> {

  constructor() {
    super();
  }

  public createContent(rows: Array<any>, options?: T): any {
    const workSheet: XLSX.WorkSheet =  XLSX.utils.json_to_sheet(rows, {
      skipHeader: true // we don't want to see object properties as our headers
    });
    return this.workSheetToContent(workSheet, options);
  }
  public abstract workSheetToContent(workSheet: XLSX.WorkSheet, options?: T): any;
  public abstract getMimeType(): Mime;

}
