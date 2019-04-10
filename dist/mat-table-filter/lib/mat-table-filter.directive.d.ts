import { DoCheck } from '@angular/core';
import { DeepDiffService } from './deep-diff.service';
import { MatTableFilter } from './mat-table-filter.enum';
import { MatTableFilterService } from './mat-table-filter.service';
export declare class MatTableFilterDirective implements DoCheck {
    private filterService;
    private _deepDiffService;
    private _oldExampleEntity;
    private _exampleEntity;
    exampleEntity: any;
    /**
     * in millis
     */
    debounceTime: number;
    filterType: MatTableFilter;
    matTableFilter: any;
    caseSensitive: boolean;
    private _exampleEntitySubject;
    constructor(filterService: MatTableFilterService, _deepDiffService: DeepDiffService);
    ngDoCheck(): void;
    private initDebounceSubject;
    private updateFilterPredicate;
    private getMatDataSource;
}
