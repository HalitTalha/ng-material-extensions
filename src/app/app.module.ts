
import { MatTableFilterModule } from 'mat-table-filter';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableExporterModule } from 'mat-table-exporter';
import { ExporterComponent } from './components/exporter/exporter.component';
import { FilterComponent } from './components/filter/filter.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { PortalModule } from '@angular/cdk/portal';
import { ExampleViewerComponent } from './components/example-viewer/example-viewer.component';
import { SimpleFilterComponent } from './components/examples/simple-filter/simple-filter.component';
import { CustomColumnFilterComponent } from './components/examples/custom-column-filter/custom-column-filter.component';
import { ArrayFilterComponent } from './components/examples/array-filter/array-filter.component';
import { PropertyOptionsComponent } from './components/examples/property-options/property-options.component';
import { BriefExporterComponent } from './components/examples/brief-exporter/brief-exporter.component';
import { CustomExporterComponent } from './components/examples/custom-exporter/custom-exporter.component';
import { MatChipsModule } from '@angular/material/chips';
import { SelectionExporterComponent } from './components/examples/selection-exporter/selection-exporter.component';

export function markedOptions(): MarkedOptions {

  return {
    gfm: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false,
  };
}


@NgModule({
  declarations: [
    AppComponent,
    ExporterComponent,
    FilterComponent,
    ExampleViewerComponent,
    ArrayFilterComponent,
    CustomColumnFilterComponent,
    SimpleFilterComponent,
    PropertyOptionsComponent,
    BriefExporterComponent,
    CustomExporterComponent,
    SelectionExporterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    PortalModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptions,
      },
    }),
    BrowserAnimationsModule,
    MatTableFilterModule,
    MatTableExporterModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ArrayFilterComponent,
    BriefExporterComponent,
    CustomColumnFilterComponent,
    CustomExporterComponent,
    SimpleFilterComponent,
    PropertyOptionsComponent,
    SelectionExporterComponent

  ]
})
export class AppModule {
  // work around for ivy tree shaking these out in the production build
  // https://github.com/angular/angular/issues/35314#issuecomment-584821399
  static  entryComponents = [
    ArrayFilterComponent,
    BriefExporterComponent,
    CustomColumnFilterComponent,
    CustomExporterComponent,
    SimpleFilterComponent,
    PropertyOptionsComponent,
    SelectionExporterComponent

  ]
}
