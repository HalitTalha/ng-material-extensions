import { FileUtil } from '../../util/file-util';
import { Mime } from '../../mime';
import { Exporter } from './exporter';

export abstract class FileExporter<T> implements Exporter<T> {
  constructor() {}

  public export(rows: Array<any>, options?: T) {
    if (!rows) {
      throw new Error('Empty json array is provided, rows parameter is mandatory!');
    }
    const mimeType = this.getMimeType();
    this.createContent(rows, options).then(content => {
      FileUtil.save(content, mimeType, options);
    });
  }

  public abstract async createContent(rows: Array<any>, options?: T): Promise<any>;
  public abstract getMimeType(): Mime;
}
