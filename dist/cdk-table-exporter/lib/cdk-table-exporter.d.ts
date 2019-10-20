import { EventEmitter, Renderer2, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ExportType } from './export-type';
import { Options } from './options';
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
    protected table: any;
    protected viewContainerRef: ViewContainerRef;
    hiddenColumns?: Array<number>;
    exporter?: Exporter<Options>;
    exportCompleted?: EventEmitter<void>;
    exportStarted?: EventEmitter<void>;
    private _cdkTable;
    /**
    * @deprecated
    */
    cdkTable: any;
    private _exporterButton;
    /**
    * @deprecated
    */
    exporterButton: any;
    private _fileName;
    /**
    * @deprecated
    */
    fileName: string;
    private _sheetName;
    /**
    * @deprecated
    */
    sheetName: string;
    /**
     * Data array which is extracted from nativeTable
     */
    private _data;
    private _isIterating;
    private _initialPageIndex;
    private _isExporting;
    private _subscription;
    private _options?;
    constructor(renderer: Renderer2, serviceLocator: ServiceLocatorService, dataExtractor: DataExtractorService, table: any, viewContainerRef: ViewContainerRef);
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
    private initCdkTable;
    private initExporterService;
    private setButtonListener;
    /**
     * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
     */
    exportTable(exportTypeParam?: ExportType | 'xls' | 'xlsx' | 'csv' | 'txt' | 'json' | 'other', options?: Options): void;
    private correctExportType;
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
    private enableExportButton;
}
