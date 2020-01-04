import { AfterViewInit, Directive, Host, Renderer2, Self, Optional, ViewContainerRef } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatTable } from '@angular/material';
import { CdkTableExporter, DataExtractorService, ServiceLocatorService } from 'cdk-table-exporter';
import { Observable } from 'rxjs';
@Directive({
  selector: '[ngxMatTableExporter], [matTableExporter]', // renamed selector but kept old version for backwards compat.
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

  constructor(renderer: Renderer2,
              serviceLocator: ServiceLocatorService,
              dataExtractor: DataExtractorService,
              @Host() @Self() @Optional() table: MatTable<any>,
              viewContainerRef: ViewContainerRef) {
              super(renderer, serviceLocator, dataExtractor, table, viewContainerRef);
  }

  /**
   * MatTable implementation of getPageCount
   * @override
   */
  public getPageCount(): number {
    return this.getPaginator().getNumberOfPages();
  }

  /**
   * MatTable implementation of getCurrentPageIndex
   * @override
   */
  public getCurrentPageIndex(): number {
    return this.getPaginator().pageIndex;
  }

  /**
   * MatTable implementation of goToPage
   * @override
   */
  public goToPage(index: number): void {
    this.getPaginator().pageIndex = index;
    this.getPaginator()._changePageSize(this.getPaginator().pageSize);
  }

  /**
   * MatTable implementation of getPageChangeObservable
   * @override
   */
  public getPageChangeObservable(): Observable<any> {
    return this.getPaginator().page;
  }


  private getPaginator(): MatPaginator {
    return (this.cdkTable.dataSource as MatTableDataSource<any>).paginator;
  }

  private enablePaginator(value: boolean) {
    if (this.getPaginator()) {
      this.getPaginator().disabled = !value;
      this.getPaginator()._changePageSize(this.getPaginator().pageSize);
    }
  }

}
