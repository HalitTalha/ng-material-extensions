import { FileUtil } from '../../util/file-util';
import { Mime } from '../../mime';
import { Exporter } from './exporter';
import { Options } from '../../options';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class FileExporter<T extends Options> implements Exporter<T> {
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

  public abstract createContent(rows: Array<any>, options?: T): Promise<any>;
  public abstract getMimeType(): Mime;
}
