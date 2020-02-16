import { PropertyOptions } from './property-options';
import { DoCheck } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatTableFilter } from './mat-table-filter.enum';
import { MatTableFilterService } from './services/mat-table-filter.service';
export declare class MatTableFilterDirective implements DoCheck {
    private _filterService;
    private _table;
    private _oldExampleEntity;
    exampleEntity: any;
    /**
     * in millis
     */
    debounceTime: number;
    filterType: MatTableFilter;
    caseSensitive: boolean;
    customPredicate: (data: any) => boolean;
    propertyOptions: PropertyOptions;
    private _exampleEntitySubject;
    constructor(_filterService: MatTableFilterService, _table: MatTable<any>);
    ngDoCheck(): void;
    private initDebounceSubject;
    private updateFilterPredicate;
    private getFilterPredicate;
    private getMatDataSource;
}
