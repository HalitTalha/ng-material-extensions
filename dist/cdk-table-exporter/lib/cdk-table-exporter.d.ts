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
    private _selectedRows?;
    constructor(renderer: Renderer2, serviceLocator: ServiceLocatorService, dataExtractor: DataExtractorService, _cdkTable: any);
    /**
     * Must return the number of pages of the table
     */
    abstract getPageCount(): number;
    /**
     * Must return the number of items to display on a page
     */
    abstract getPageSize(): number;
    /**
     * Must return the index of the current page that's displayed
     */
    abstract getCurrentPageIndex(): number;
    /**
     * Must return the total number of items in the table
     */
    abstract getTotalItemsCount(): number;
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
    toggleRow(index: number): void;
    /**
     * This event will clear rows selection done using toggleRow functionality
     */
    resetToggleRows(): void;
    private toggleOn;
    private toggleOff;
    private isToggleOn;
    private loadExporter;
    private exportWithPagination;
    private exportSinglePage;
    private extractDataOnCurrentPage;
    private getSelectedRows;
    private isSelectiveExport;
    private isMasterToggleOn;
    private isMasterToggleOff;
    private compareSelectedRowCount;
    private initPageHandler;
    private exportExtractedData;
    private extractSpecialRows;
    private extractTableHeader;
    private extractTableFooter;
    private hasNextPage;
    private nextPage;
    private getPaginatedRowIndex;
}
