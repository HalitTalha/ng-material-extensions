import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CdkTableExporterModule, XLSX_LIGHTWEIGHT } from 'cdk-table-exporter';
import { MatTableExporterDirective } from './mat-table-exporter.directive';

export interface ModuleConfiguration {
  xlsxLightWeight?: boolean;
}

@NgModule({
  declarations: [MatTableExporterDirective],
  imports: [
    MatTableModule,
    CdkTableExporterModule
  ],
  exports: [MatTableExporterDirective]
})

export class MatTableExporterModule {
  static forRoot(configuration: ModuleConfiguration): ModuleWithProviders<MatTableExporterModule> {
    return {
      ngModule: MatTableExporterModule,
      providers: [
        {
          provide: XLSX_LIGHTWEIGHT,
          useValue: configuration.xlsxLightWeight
        }
      ]
    };
  }
}
