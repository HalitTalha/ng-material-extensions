
import { MatTableFilterModule } from 'mat-table-filter';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule } from '@angular/material';
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
import { NotifierModule } from 'angular-notifier';

export function markedOptions(): MarkedOptions {

  return {
    gfm: false,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
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
    CustomExporterComponent
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
    NotifierModule.withConfig({
      theme: 'material',
      behaviour: {
        autoHide: 2000,
        showDismissButton: false
      },
      position: {
       horizontal: {
         position: 'right'
       }
      }
    }),
    FlexLayoutModule,
    MatTableFilterModule,
   MatTableExporterModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
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

  ]
})
export class AppModule { }
