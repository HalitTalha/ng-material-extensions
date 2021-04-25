import { Injectable } from '@angular/core';
import { Options } from '../../options';
import { FileExporter } from './file-exporter';
import { Mime } from '../../mime';
import { MIME_JSON } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class JsonExporterService extends FileExporter<Options> {

  constructor() {
    super();
  }

  public async createContent(rows: any[], options?: Options): Promise<any> {
    return JSON.stringify(rows);
  }
   public getMimeType(): Mime {
    return MIME_JSON;
  }

}
