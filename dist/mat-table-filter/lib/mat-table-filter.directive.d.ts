import { DoCheck, ViewContainerRef } from '@angular/core';
import { MatTable } from '@angular/material';
import { MatTableFilter } from './mat-table-filter.enum';
import { MatTableFilterService } from './mat-table-filter.service';
export declare class MatTableFilterDirective implements DoCheck {
    private _filterService;
    private _injectedTable;
    private _viewContainerRef;
    private _oldExampleEntity;
    exampleEntity: any;
    /**
     * in millis
     */
    private _table;
    debounceTime: number;
    filterType: MatTableFilter;
    caseSensitive: boolean;
    private _exampleEntitySubject;
    constructor(_filterService: MatTableFilterService, _injectedTable: MatTable<any>, _viewContainerRef: ViewContainerRef);
    ngDoCheck(): void;
    private isExampleEntityChanged;
    private toPlainJson;
    private initCdkTable;
    private initDebounceSubject;
    private updateFilterPredicate;
    private getMatDataSource;
}
