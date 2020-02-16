import { EventEmitter, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { ExportType } from './export-type';
import { ExcelOptions, Options, TxtOptions } from './options';
import { DataExtractorService } from './services/data-extractor.service';
import { Exporter } from './services/exporters/exporter';
import { ServiceLocatorService } from './services/service-locator.service';
/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 */
export declare abstract class CdkTableExporter {
    protected renderer: Renderer2;
    private serviceLocator;
    private dataExtractor;
    protected _cdkTable: any;
    private _exporterService;
    hiddenColumns?: Array<number>;
    exporter?: Exporter<Options>;
    exportCompleted: EventEmitter<void>;
    exportStarted: EventEmitter<void>;
    /**
     * Data array which is extracted from nativeTable
     */
    private _data;
    private _isIterating;
    private _initialPageIndex;
    private _isExporting;
    private _subscription;
    private _options?;
    constructor(renderer: Renderer2, serviceLocator: ServiceLocatorService, dataExtractor: DataExtractorService, _cdkTable: any);
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
    /**
     * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
     */
    exportTable(exportType?: ExportType | 'xls' | 'xlsx' | 'csv' | 'txt' | 'json' | 'other', options?: Options | ExcelOptions | TxtOptions): void;
    private loadExporter;
    private exportWithPagination;
    private exportSinglePage;
    private extractDataOnCurrentPage;
    private initPageHandler;
    private exportExtractedData;
    private extractSpecialRow;
    private extractTableHeader;
    private extractTableFooter;
    hasNextPage(): boolean;
    nextPage(): void;
}
