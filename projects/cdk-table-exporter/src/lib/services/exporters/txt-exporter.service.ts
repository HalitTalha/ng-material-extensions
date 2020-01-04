import { Injectable } from '@angular/core';
import { Mime } from '../../mime';
import { TxtOptions } from '../../options';
import { MIME_TXT, RETURN, TAB } from './../../constants';
import { FileExporter } from './file-exporter';

@Injectable({
  providedIn: 'root'
})
export class TxtExporterService extends FileExporter<TxtOptions> {

  constructor() {
    super();
  }

  public createContent(rows: any[], options?: TxtOptions) {
    let content = '';
    rows.forEach(element => {
      content += Object.values(element).join(this.getDelimiter(options)) + RETURN;
    });
    return content;
  }

  public getMimeType(): Mime {
    return MIME_TXT;
  }

  private getDelimiter(options?: TxtOptions) {
    if (options && options.delimiter) {
      return options.delimiter;
    } else {
      return TAB;
    }
  }

}
