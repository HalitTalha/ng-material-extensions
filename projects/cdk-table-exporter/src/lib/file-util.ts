import { ExportType } from './export-type';
import * as FileSaver from 'file-saver-es';
import { MAT_TABLE_EXPORTER, DOT, XLS_REGEX } from './constants';
import { Mime } from './mime';
import { Options } from './options';

export class FileUtil {
  public static save(content: string, mime: Mime, options?: Options) {
    const blob = new Blob([content], {type: mime.contentTypeHeader});
    let fileName = MAT_TABLE_EXPORTER;
    if (options && options.fileName) {
      fileName = options.fileName;
    }
    FileSaver.saveAs(blob, fileName + mime.extension);
  }

  public static isXls(fileName: string): boolean {
    return fileName.toLowerCase().match(XLS_REGEX) != null;
  }

  public static identifyExportType(fileName?: string): ExportType {
    if (fileName && FileUtil.isXls(fileName)) {
      return ExportType.XLS;
    } else {
      return ExportType.XLSX;
    }
  }

  public static removeExtension(options?: Options) {
    options.fileName = options.fileName.split(DOT)[0];
  }
}
