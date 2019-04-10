import { AfterViewInit, Directive, Renderer2 } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CdkTableExporter, JsonExporterService } from 'cdk-table-exporter';
import { Observable } from 'rxjs';

@Directive({
  selector: '[ngxMatTableExporter]'
})
export class MatTableExporterDirective extends CdkTableExporter implements AfterViewInit {

/**
 * Overriding ngAfterViewInit of TableExporter
 */
  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.exportStarted.subscribe(_ => {
      this.enablePaginator(false);
    });
    this.exportCompleted.subscribe(_ => {
      this.enablePaginator(true);
    });
  }

  constructor(protected renderer: Renderer2, protected jsonExporter: JsonExporterService) {
    super(renderer, jsonExporter);
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
      this.getPaginator().disabled = !value;
      this.getPaginator()._changePageSize(this.getPaginator().pageSize);
  }

}
