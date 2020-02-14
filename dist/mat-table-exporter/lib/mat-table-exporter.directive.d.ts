import { AfterViewInit, Renderer2, ViewContainerRef } from '@angular/core';
import { CdkTableExporterDirective, DataExtractorService, ServiceLocatorService } from 'cdk-table-exporter';
import { Observable } from 'rxjs';
import { MatTable } from '@angular/material/table';
import * as i0 from "@angular/core";
export declare class MatTableExporterDirective extends CdkTableExporterDirective implements AfterViewInit {
    /**
     * Overriding ngAfterViewInit of TableExporter
     */
    ngAfterViewInit(): void;
    constructor(renderer: Renderer2, serviceLocator: ServiceLocatorService, dataExtractor: DataExtractorService, table: MatTable<any>, viewContainerRef: ViewContainerRef);
    /**
     * MatTable implementation of getPageCount
     */
    getPageCount(): number;
    /**
     * MatTable implementation of getCurrentPageIndex
     */
    getCurrentPageIndex(): number;
    /**
     * MatTable implementation of goToPage
     */
    goToPage(index: number): void;
    /**
     * MatTable implementation of getPageChangeObservable
     */
    getPageChangeObservable(): Observable<any>;
    private getPaginator;
    private enablePaginator;
    static ɵfac: i0.ɵɵFactoryDef<MatTableExporterDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MatTableExporterDirective, "[matTableExporter]", ["matTableExporter"], {}, {}, never>;
}
