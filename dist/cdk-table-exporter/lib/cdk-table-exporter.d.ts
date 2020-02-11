import { EventEmitter, Renderer2, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ExportType } from './export-type';
import { ExcelOptions, Options, TxtOptions } from './options';
import { DataExtractorService } from './services/data-extractor.service';
import { Exporter } from './services/exporters/exporter';
import { ServiceLocatorService } from './services/service-locator.service';
import * as i0 from "@angular/core";
/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 */
export declare abstract class CdkTableExporter {
    protected renderer: Renderer2;
    private serviceLocator;
    private dataExtractor;
    protected table: any;
    protected viewContainerRef: ViewContainerRef;
    private _exporterService;
    hiddenColumns?: Array<number>;
    exporter?: Exporter<Options>;
    exportCompleted: EventEmitter<void>;
    exportStarted: EventEmitter<void>;
    private _cdkTable;
    get cdkTable(): any;
    /**
     * @deprecated
     */
    set cdkTable(value: any);
    private _exporterButton;
    get exporterButton(): any;
    /**
     * @deprecated
     */
    set exporterButton(value: any);
    private _fileName;
    get fileName(): string;
    /**
     * @deprecated
     */
    set fileName(value: string);
    private _sheetName;
    get sheetName(): string;
    /**
     * @deprecated
     */
    set sheetName(value: string);
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
    private setButtonListener;
    /**
     * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
     */
    exportTable(exportType?: ExportType | 'xls' | 'xlsx' | 'csv' | 'txt' | 'json' | 'other', options?: ExcelOptions | TxtOptions | Options): void;
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
    private enableExportButton;
    static ɵfac: i0.ɵɵFactoryDef<CdkTableExporter>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CdkTableExporter, never, never, { "hiddenColumns": "hiddenColumns"; "exporter": "exporter"; "cdkTable": "cdkTable"; "exporterButton": "exporterButton"; "fileName": "fileName"; "sheetName": "sheetName"; }, { "exportCompleted": "exportCompleted"; "exportStarted": "exportStarted"; }, never>;
}
