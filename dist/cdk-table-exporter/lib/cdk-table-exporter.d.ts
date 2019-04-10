import { AfterViewInit, EventEmitter, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonExporterService } from './json-exporter.service';
/**
 * Excel exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 */
export declare abstract class CdkTableExporter implements AfterViewInit {
    protected renderer: Renderer2;
    protected jsonExporter: JsonExporterService;
    cdkTable: any;
    exporterButton: any;
    sheetName: string;
    fileName: string;
    hiddenColumns: Array<number>;
    exportCompleted: EventEmitter<void>;
    exportStarted: EventEmitter<void>;
    /**
     * Data array which is extracted from nativeTable
     */
    private _data;
    private _isIterating;
    private _initialPageIndex;
    private _isExporting;
    constructor(renderer: Renderer2, jsonExporter: JsonExporterService);
    /**
     * Must return the number of pages of the table
     */
    abstract getPageCount(): number;
    /**
     * Must return the index of the current page that's displayed
     */
    abstract getCurrentPageIndex(): number;
    /**
     * When called, the CdkTable should render the rows inside the page whose index given as parameter
     * @param index page index
     */
    abstract goToPage(index: number): void;
    /**
     * Must return an observable that notifies the subscribers about page changes
     */
    abstract getPageChangeObservable(): Observable<any>;
    ngAfterViewInit(): void;
    /**
     * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
     */
    exportTable(): void;
    private exportWithPagination;
    private exportSinglePage;
    private extractDataOnCurrentPage;
    private initPageHandler;
    private exportExtractedData;
    private extractExcelRows;
    private extractExcelHeaderRow;
    private getRenderedRows;
    private convertToJsonArray;
    private convertRow;
    private shouldHide;
    customizeRow(row: Array<string>): Array<string>;
    private createExcelItem;
    hasNextPage(): boolean;
    nextPage(): void;
    private enableExportButton;
}
