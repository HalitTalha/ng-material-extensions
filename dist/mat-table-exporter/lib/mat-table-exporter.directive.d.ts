import { AfterViewInit, Renderer2, ViewContainerRef } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { CdkTableExporter, DataExtractorService, ServiceLocatorService } from 'cdk-table-exporter';
import { Observable } from 'rxjs';
export declare class MatTableExporterDirective extends CdkTableExporter implements AfterViewInit {
    /**
     * Overriding ngAfterViewInit of TableExporter
     */
    ngAfterViewInit(): void;
    constructor(renderer: Renderer2, serviceLocator: ServiceLocatorService, dataExtractor: DataExtractorService, table: MatTable<any>, viewContainerRef: ViewContainerRef);
    /**
     * MatTable implementation of getPageCount
     * @override
     */
    getPageCount(): number;
    /**
     * MatTable implementation of getCurrentPageIndex
     * @override
     */
    getCurrentPageIndex(): number;
    /**
     * MatTable implementation of goToPage
     * @override
     */
    goToPage(index: number): void;
    /**
     * MatTable implementation of getPageChangeObservable
     * @override
     */
    getPageChangeObservable(): Observable<any>;
    private getPaginator;
    private enablePaginator;
}
