import { AfterViewInit, Renderer2 } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { CdkTableExporter, DataExtractorService, ServiceLocatorService } from 'cdk-table-exporter';
import { Observable } from 'rxjs';
export declare class MatTableExporterDirective extends CdkTableExporter implements AfterViewInit {
    /**
     * Overriding ngAfterViewInit of TableExporter
     */
    ngAfterViewInit(): void;
    constructor(renderer: Renderer2, serviceLocator: ServiceLocatorService, dataExtractor: DataExtractorService, table: MatTable<any>);
    /**
     * MatTable implementation of getPageCount
     */
    getPageCount(): number;
    /**
     * MatTable implementation of getPageSize
     */
    getPageSize(): number;
    /**
     * MatTable implementation of getCurrentPageIndex
     */
    getCurrentPageIndex(): number;
    /**
     * MatTable implementation of getTotalItemsCount
     */
    getTotalItemsCount(): number;
    /**
     * MatTable implementation of goToPage
     */
    goToPage(index: number): void;
    /**
     * MatTable implementation of getPageChangeObservable
     */
    getPageChangeObservable(): Observable<any>;
    private getDataSource;
    private getPaginator;
    private enablePaginator;
}
