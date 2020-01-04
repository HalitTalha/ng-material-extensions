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

  public createContent(rows: any[], options?: Options) {
    return JSON.stringify(rows);
  }
   public getMimeType(): Mime {
    return MIME_JSON;
  }

}
