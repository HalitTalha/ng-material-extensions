import { DataRowOutlet } from '@angular/cdk/table';
import { EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ExportType } from './export-type';
import { FileUtil } from './file-util';
import { ExcelOptions, Options } from './options';
import { DataExtractorService } from './services/data-extractor.service';
import { Exporter } from './services/exporters/exporter';
import { ServiceLocatorService } from './services/service-locator.service';


/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 */
// @Directive()
export abstract class CdkTableExporter {


  @Input() hiddenColumns?: Array<number>;
  @Input() exporter?: Exporter<Options>;
  @Output() exportCompleted ?= new EventEmitter<void>();
  @Output() exportStarted ?= new EventEmitter<void>();

  private _cdkTable: any;

  get cdkTable(): any {
    return this._cdkTable;
  }

/**
 * @deprecated
 */
  @Input()
  set cdkTable(value: any) {
    console.warn('cdkTable input is deprecated!');
    this._cdkTable = value;
  }

  private _exporterButton: any;

  get exporterButton(): any {
    return this._exporterButton;
  }

  /**
   * @deprecated
   */
  @Input()
  set exporterButton(value: any) {
    console.warn('exporterButton input is deprecated!');
    this._exporterButton = value;
    this.setButtonListener();
  }

  private _fileName: string;

  get fileName(): string {
    return this._fileName;
  }

/**
 * @deprecated
 */
  @Input()
  set fileName(value: string) {
    console.warn('fileName input is deprecated!');
    this._fileName = value;
  }

  private _sheetName: string;

  get sheetName(): string {
    return this._sheetName;
  }

/**
 * @deprecated
 */
  @Input()
  set sheetName(value: string) {
    console.warn('sheetName input is deprecated!');
    this._sheetName = value;
  }


  /**
   * Data array which is extracted from nativeTable
   */
  private _data: Array<any>;

  private _isIterating: boolean;

  private _initialPageIndex: number;

  private _isExporting: boolean;

  private _subscription: Subscription;

  private _options?: Options;

  constructor(protected renderer: Renderer2,
              private serviceLocator: ServiceLocatorService,
              private dataExtractor: DataExtractorService,
              protected table: any,
              protected viewContainerRef: ViewContainerRef) {
    this.initCdkTable();
  }

  /**
   * Must return the number of pages of the table
   */
  public abstract getPageCount(): number;

  /**
   * Must return the index of the current page that's displayed
   */
  public abstract getCurrentPageIndex(): number;

  /**
   * When called, the CdkTable should render the rows inside the page whose index given as parameter
   * @param index page index
   */
  public abstract goToPage(index: number): void;

  /**
   * Must return an observable that notifies the subscribers about page changes
   */
  public abstract getPageChangeObservable(): Observable<any>;

  private initCdkTable() {
    // tslint:disable-next-line:no-string-literal
    const table = this.viewContainerRef['_data'].componentView.component;
    if (table) {
      this._cdkTable = table;
    } else if (this.table) {
      this._cdkTable = this.table;
    } else {
      throw new Error('Unsupported Angular version');
    }
  }

  private initExporterService(exportType?: ExportType) {
    if (exportType !== ExportType.OTHER) {
      this.exporter = this.serviceLocator.getService(exportType);
    }
  }

  private setButtonListener() {
    if (this._exporterButton) {
      this.renderer.listen(this._exporterButton._elementRef.nativeElement, 'click', (evt) => {
        const options = {fileName: this._fileName, sheet: this._sheetName} as ExcelOptions;
        this.exportTable(FileUtil.identifyExportType(this._fileName), options); // this is to support deprecated way of exporting
      });
    }
  }

  /**
   * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
   */
  exportTable(exportTypeParam?: ExportType | 'xls' | 'xlsx' | 'csv' | 'txt' | 'json' | 'other', options?: Options) {
    const exportType: ExportType = this.correctExportType(exportTypeParam);
    this.initExporterService(exportType);
    this._options = options;
    this.exportStarted.emit();
    this._isIterating = true;
    this._isExporting = true;
    this._data = new Array<any>();
    this.enableExportButton(false);
    this.extractTableHeader();
    try {
      this.exportWithPagination();
    } catch (notPaginated) {
      this.exportSinglePage();
    }
  }
  private correctExportType(exportTypeParam?: any): ExportType {
    if (exportTypeParam && typeof exportTypeParam === 'string') {
      switch (exportTypeParam) {
        case ExportType.CSV:
            return ExportType.CSV;
        case ExportType.JSON:
            return ExportType.JSON;
        case ExportType.OTHER:
            return ExportType.OTHER;
        case ExportType.TXT:
            return ExportType.TXT;
        case ExportType.XLS:
            return ExportType.XLS;
        case ExportType.XLSX:
            return ExportType.XLSX;
      }
    } else {
      return exportTypeParam as ExportType;
    }
  }

  private exportWithPagination() {
    this._initialPageIndex = this.getCurrentPageIndex();
    this.initPageHandler();
    this.goToPage(0);
  }

  private exportSinglePage() {
    this.extractDataOnCurrentPage();
    this.extractTableFooter();
    this.exportExtractedData();
  }

  private extractDataOnCurrentPage() {
    this._data = this._data.concat(this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns));
  }

  private initPageHandler(): void {
    if (!this._subscription) {
      this._subscription = this.getPageChangeObservable().subscribe(() => {
        setTimeout(() => {
          if (this._isIterating) {
            this.extractDataOnCurrentPage();
            if (this.hasNextPage()) {
              this.nextPage();
            } else {
              this._isIterating = false;
              this.goToPage(this._initialPageIndex);
            }
          } else if (this._isExporting) {
            this._isExporting = false;
            this.extractTableFooter();
            this.exportExtractedData();
          }
        });
      });
    }
  }

  private exportExtractedData() {
    this.exporter.export(this._data, this._options);
    this._data = new Array<any>();
    this.enableExportButton(true);
    this.exportCompleted.emit();
  }

  private extractSpecialRow(outlet: DataRowOutlet) {
    const row = this.dataExtractor.extractRow(this._cdkTable, this.hiddenColumns, outlet);
    if (row) {
      this._data.push(row);
    }
  }

  private extractTableHeader() {
    this.extractSpecialRow(this._cdkTable._headerRowOutlet);
  }

  private extractTableFooter() {
    this.extractSpecialRow(this._cdkTable._footerRowOutlet);
  }

  public hasNextPage(): boolean {
    if (this.getCurrentPageIndex() < this.getPageCount() - 1) {
      return true;
    } else {
      return false;
    }
  }

  public nextPage(): void {
    this.goToPage(this.getCurrentPageIndex() + 1);
  }

  private enableExportButton(value: boolean) {
    if (this._exporterButton) {
      this.renderer.setProperty(this._exporterButton._elementRef.nativeElement, 'disabled', value ? null : 'true');
    }
  }
}

