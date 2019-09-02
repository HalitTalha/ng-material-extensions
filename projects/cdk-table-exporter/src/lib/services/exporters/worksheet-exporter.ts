import * as XLSX from 'xlsx';
import { Options } from '../../options';
import { Exporter } from './exporter';
import { FileUtil } from '../../file-util';
import { Mime } from '../../mime';

/**
 * An angular service class that is used to create files out of json object arrays.
 */
export abstract class WorksheetExporter<T extends Options> implements Exporter<T> {
  constructor() {}

  public export(rows: Array<any>, options?: T) {
    if (!rows) {
      throw new Error('Empty json array is provided, rows parameter is mandatory!');
    }
    const worksheet: XLSX.WorkSheet =  XLSX.utils.json_to_sheet(rows, {
      skipHeader: true // we don't want to see object properties as our headers
    });
    this.writeToFile(worksheet, options);
  }

  public writeToFile(worksheet: XLSX.WorkSheet, options?: T) {
    const content = this.createContent(worksheet, options);
    const mimeType = this.getMimeType();
    FileUtil.save(content, mimeType, options);
  }

  public abstract createContent(worksheet: XLSX.WorkSheet, options?: T): any;
  public abstract getMimeType(): Mime;

}
