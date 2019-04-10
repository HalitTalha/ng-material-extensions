import { DataRowOutlet } from '@angular/cdk/table';
import { AfterViewInit, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonExporterService } from './json-exporter.service';

/**
 * Excel exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 */
export abstract class CdkTableExporter implements AfterViewInit {

  @Input() cdkTable: any;
  @Input() exporterButton: any;
  @Input() sheetName = 'Sheet1';
  @Input() fileName = 'export.xlsx';
  @Input() hiddenColumns: Array<number>;
  @Output() exportCompleted = new EventEmitter<void>();
  @Output() exportStarted = new EventEmitter<void>();

  /**
   * Data array which is extracted from nativeTable
   */
  private _data: Array<any>;

  private _isIterating: boolean;

  private _initialPageIndex: number;

  private _isExporting: boolean;

  constructor(protected renderer: Renderer2, protected jsonExporter: JsonExporterService) {

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

  ngAfterViewInit(): void {
    this.renderer.listen(this.exporterButton._elementRef.nativeElement, 'click', (evt) => {
     this.exportTable();
    });
  }


/**
 * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
 */
  exportTable() {
    this.exportStarted.emit();
    this._isIterating = true;
    this._isExporting = true;
    this._data = new Array<any>();
    this.enableExportButton(false);
    try {
      this.exportWithPagination();
    } catch (notPaginated) {
      this.exportSinglePage();
    }

  }

  private exportWithPagination() {
    this._initialPageIndex = this.getCurrentPageIndex();
    this.initPageHandler(); // to make sure datasource is not null during export
    this.goToPage(0);
  }

  private exportSinglePage() {
    this.extractDataOnCurrentPage();
    this.jsonExporter.exportExcel(this.extractExcelHeaderRow(), this._data, this.fileName, this.sheetName);
  }

  private extractDataOnCurrentPage() {
    this._data = this._data.concat(this.extractExcelRows());
  }


  private initPageHandler(): void {
    this.getPageChangeObservable().subscribe(_ => {
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
          this.exportExtractedData();
        }
      });
    });
  }

  private exportExtractedData() {
    this.jsonExporter.exportExcel(this.extractExcelHeaderRow(), this._data, this.fileName, this.sheetName);
    this._data = new Array<any>();
    this.enableExportButton(true);
    this.exportCompleted.emit();
  }


  private extractExcelRows() {
    return this.convertToJsonArray(this.getRenderedRows(this.cdkTable._rowOutlet));
  }

  private extractExcelHeaderRow() {
    return this.convertToJsonArray(this.getRenderedRows(this.cdkTable._headerRowOutlet))[0];
  }

  private getRenderedRows(outlet: DataRowOutlet): HTMLTableRowElement[] {
    const result = this.cdkTable._getRenderedRows(outlet) as HTMLTableRowElement[];
    return result;

  }

  private convertToJsonArray(rows: HTMLTableRowElement[]): Array<any> {
    const result = new Array<any>();

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < rows.length; i++) {
      const row: Array<string> = this.convertRow(rows[i]);
      this.customizeRow(row);
      result.push(this.createExcelItem(row));
    }
    return result;
  }

  private convertRow(row: HTMLTableRowElement): Array<string> {
    const result = new Array<string>();
    const cells: any = row.children;
    for (let i = 0; i < cells.length; i++) {
      if (this.shouldHide(i)) {
        continue;
      }
      const element = cells.item(i).innerText;
      result.push(element);
    }
    return result;
  }

  private shouldHide(columnIndex: number) {
    if (this.hiddenColumns && this.hiddenColumns.includes(columnIndex)) {
      return true;
    } else {
      return false;
    }
  }

  public customizeRow(row: Array<string>): Array<string> {
    return row;
  }

  private createExcelItem(row: Array<string>): any {
    return Object.assign({}, row);
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
      this.renderer.setProperty(this.exporterButton._elementRef.nativeElement, 'disabled', value ? null : 'true');
  }
}

