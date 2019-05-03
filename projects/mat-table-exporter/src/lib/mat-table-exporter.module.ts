import { MatTableModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatTableExporterDirective } from './mat-table-exporter.directive';

@NgModule({
  declarations: [MatTableExporterDirective],
  imports: [
    MatTableModule
  ],
  exports: [MatTableExporterDirective]
})
export class MatTableExporterModule { }
