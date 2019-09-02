import { CdkTableExporterModule } from 'cdk-table-exporter';
import { MatTableModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatTableExporterDirective } from './mat-table-exporter.directive';


@NgModule({
  declarations: [MatTableExporterDirective],
  imports: [
    MatTableModule,
    CdkTableExporterModule
  ],
  exports: [MatTableExporterDirective]
})
export class MatTableExporterModule { }
