import { CsvExporterService } from './exporters/csv-exporter.service';
import { TxtExporterService } from './exporters/txt-exporter.service';
import { Injectable, Injector } from '@angular/core';
import { Options } from '../options';
import { ExportType } from './../export-type';
import { Exporter } from './exporters/exporter';
import { XlsExporterService } from './exporters/xls-exporter.service';
import { JsonExporterService } from './exporters/json-exporter.service';
import { XlsxExporterService } from './exporters/xlsx-exporter.service';
@Injectable({
  providedIn: 'root'
})
export class ServiceLocatorService {

  constructor(private injector: Injector) { }

  public getService(exportType: ExportType | 'xls' | 'xlsx' | 'csv' | 'txt' | 'json' | 'other', customExporter?: Exporter<Options>): Exporter<Options> {
    switch (exportType) {
      case ExportType.XLS.valueOf():
        return this.injector.get<XlsExporterService>(XlsExporterService);
      case ExportType.XLSX.valueOf():
          return this.injector.get<XlsxExporterService>(XlsxExporterService);
      case ExportType.JSON.valueOf():
        return this.injector.get<JsonExporterService>(JsonExporterService);
      case ExportType.TXT.valueOf():
        return this.injector.get<TxtExporterService>(TxtExporterService);
      case ExportType.CSV.valueOf():
        return this.injector.get<CsvExporterService>(CsvExporterService);
      case ExportType.OTHER.valueOf():
        if (!customExporter) {
          console.error("Provide a custom exporter implementation. Using default exporter.");
          return this.injector.get<XlsxExporterService>(XlsxExporterService);
        } else {
          return customExporter;
        }
      default:
        return this.injector.get<XlsxExporterService>(XlsxExporterService);
    }
  }
}
