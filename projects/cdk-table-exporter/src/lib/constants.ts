import { ExportType } from './export-type';
import { Mime } from './mime';

export const MAT_TABLE_EXPORTER = 'mat-table-exporter';
export const TYPE_ARRAY = 'array';
export const CHAR_SET_UTF = ';charset=utf-';
export const CHAR_SET_UTF_8 = CHAR_SET_UTF + '8';
export const CHAR_SET_UTF_16 = CHAR_SET_UTF + '16';
export const CONTENT_TYPE_TEXT = ExportType.TXT + '/';
export const CONTENT_TYPE_APPLICATION = 'application/';
export const CONTENT_TYPE_EXCEL = CONTENT_TYPE_APPLICATION + 'octet-stream';
export const P = '.';
export const EXTENSION_XLS = P + ExportType.XLS;
export const EXTENSION_XLSX =  P + ExportType.XLSX;
export const EXTENSION_CSV =  P + ExportType.CSV;
export const EXTENSION_JSON =  P + ExportType.JSON;
export const EXTENSION_TEXT =  P + ExportType.TXT;
export const MIME_EXCEL_XLS = new Mime(EXTENSION_XLS, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
export const MIME_EXCEL_XLSX = new Mime(EXTENSION_XLSX, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
export const MIME_JSON = new Mime(EXTENSION_JSON, CONTENT_TYPE_TEXT + JSON + CHAR_SET_UTF_8);
export const MIME_TXT = new Mime(EXTENSION_TEXT, CONTENT_TYPE_TEXT + ExportType.TXT + CHAR_SET_UTF_16);
export const MIME_CSV = new Mime(EXTENSION_CSV, CONTENT_TYPE_TEXT + ExportType.CSV + CHAR_SET_UTF_8);
export const REF = '!ref';
export const XLS_REGEX = P + '*\.' + ExportType.XLS + '$';

