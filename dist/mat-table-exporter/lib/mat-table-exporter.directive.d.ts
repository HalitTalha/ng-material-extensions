import { AfterViewInit, Renderer2 } from '@angular/core';
import { CdkTableExporter, JsonExporterService } from 'cdk-table-exporter';
import { Observable } from 'rxjs';
export declare class MatTableExporterDirective extends CdkTableExporter implements AfterViewInit {
    protected renderer: Renderer2;
    protected jsonExporter: JsonExporterService;
    /**
     * Overriding ngAfterViewInit of TableExporter
     */
    ngAfterViewInit(): void;
    constructor(renderer: Renderer2, jsonExporter: JsonExporterService);
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
