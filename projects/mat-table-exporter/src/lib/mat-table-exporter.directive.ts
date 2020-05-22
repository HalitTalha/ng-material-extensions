import { AfterViewInit, Directive, Host, Optional, Renderer2, Self } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CdkTableExporter, DataExtractorService, ServiceLocatorService } from 'cdk-table-exporter';
import { Observable } from 'rxjs';

@Directive({
  selector: '[matTableExporter]',
  exportAs: 'matTableExporter'
})
export class MatTableExporterDirective extends CdkTableExporter implements AfterViewInit {
  /**
   * Overriding ngAfterViewInit of TableExporter
   */
  ngAfterViewInit(): void {
    this.exportStarted.subscribe(_ => {
      this.enablePaginator(false);
    });
    this.exportCompleted.subscribe(_ => {
      this.enablePaginator(true);
    });
  }

  constructor(
    renderer: Renderer2,
    serviceLocator: ServiceLocatorService,
    dataExtractor: DataExtractorService,
    @Host() @Self() @Optional() table: MatTable<any>
  ) {
    super(renderer, serviceLocator, dataExtractor, table);
  }

  /**
   * MatTable implementation of getPageCount
   */
  public getPageCount(): number {
    return this.getPaginator().getNumberOfPages();
  }

  /**
   * MatTable implementation of getPageSize
   */
  public getPageSize(): number {
    return this.getPaginator()?.pageSize ?? 0;
  }

  /**
   * MatTable implementation of getCurrentPageIndex
   */
  public getCurrentPageIndex(): number {
    return this.getPaginator()?.pageIndex ?? 0;
  }

  /**
   * MatTable implementation of getTotalItemsCount
   */
  public getTotalItemsCount(): number {
    return this.getPaginator()?.length ?? this.getDataSource()?.data?.length ?? 0;
  }

  /**
   * MatTable implementation of goToPage
   */
  public goToPage(index: number): void {
    this.getPaginator().pageIndex = index;
    this.getPaginator()._changePageSize(this.getPaginator().pageSize);
  }

  /**
   * MatTable implementation of getPageChangeObservable
   */
  public getPageChangeObservable(): Observable<any> {
    return this.getPaginator().page;
  }

  private getDataSource(): MatTableDataSource<any> {
    return this._cdkTable.dataSource as MatTableDataSource<any>;
  }

  private getPaginator(): MatPaginator {
    return this.getDataSource().paginator;
  }

  private enablePaginator(value: boolean) {
    if (this.getPaginator()) {
      this.getPaginator().disabled = !value;
      this.getPaginator()._changePageSize(this.getPaginator().pageSize);
    }
  }

}
