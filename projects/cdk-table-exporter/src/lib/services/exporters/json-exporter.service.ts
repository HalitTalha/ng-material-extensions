import { MIME_JSON } from './../../constants';
import { Exporter } from './exporter';
import { Injectable } from '@angular/core';
import { Options } from '../../options';
import { FileUtil } from '../../file-util';

@Injectable({
  providedIn: 'root'
})
export class JsonExporterService implements Exporter<Options> {

  constructor() {
  }

  public export(rows: any[], options?: Options) {
    const jsonContent = JSON.stringify(rows);
    FileUtil.save(jsonContent, MIME_JSON, options);
  }
}
