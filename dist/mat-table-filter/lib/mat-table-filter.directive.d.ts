import { PropertyOptions } from './property-options';
import { DoCheck, ViewContainerRef } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatTableFilter } from './mat-table-filter.enum';
import { MatTableFilterService } from './services/mat-table-filter.service';
import * as i0 from "@angular/core";
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
    customPredicate: (data: any) => boolean;
    propertyOptions: PropertyOptions;
    private _exampleEntitySubject;
    constructor(_filterService: MatTableFilterService, _injectedTable: MatTable<any>, _viewContainerRef: ViewContainerRef);
    ngDoCheck(): void;
    private initCdkTable;
    private initDebounceSubject;
    private updateFilterPredicate;
    private getFilterPredicate;
    private getMatDataSource;
    static ɵfac: i0.ɵɵFactoryDef<MatTableFilterDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MatTableFilterDirective, "[matTableFilter]", ["matTableFilter"], { "exampleEntity": "exampleEntity"; "debounceTime": "debounceTime"; "filterType": "filterType"; "caseSensitive": "caseSensitive"; "customPredicate": "customPredicate"; "propertyOptions": "propertyOptions"; }, {}, never>;
}
