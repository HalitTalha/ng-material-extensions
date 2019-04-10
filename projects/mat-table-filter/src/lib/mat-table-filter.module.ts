import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatTableFilterDirective } from './mat-table-filter.directive';

@NgModule({
  declarations: [MatTableFilterDirective],
  imports: [
    MatTableModule
  ],
  exports: [MatTableFilterDirective]
})
export class MatTableFilterModule { }
