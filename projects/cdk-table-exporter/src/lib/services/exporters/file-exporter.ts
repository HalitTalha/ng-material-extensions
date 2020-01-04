import { FileUtil } from '../../file-util';
import { Mime } from '../../mime';
import { Exporter } from './exporter';

export abstract class FileExporter<T> implements Exporter<T> {
  constructor() {}

  public export(rows: Array<any>, options?: T) {
    if (!rows) {
      throw new Error('Empty json array is provided, rows parameter is mandatory!');
    }
    const content = this.createContent(rows, options);
    const mimeType = this.getMimeType();
    FileUtil.save(content, mimeType, options);
  }

  public abstract createContent(rows: Array<any>, options?: T): any;
  public abstract getMimeType(): Mime;
}
