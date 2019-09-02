export class Mime {

  extension: string;
  contentTypeHeader: string;

  constructor(extension: string, contentTypeHeader: string) {
    this.extension = extension;
    this.contentTypeHeader = contentTypeHeader;
  }

}
