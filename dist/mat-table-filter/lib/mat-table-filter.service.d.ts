import { MatTableFilter } from './mat-table-filter.enum';
export declare class MatTableFilterService {
    constructor();
    filterPredicate(exampleEntity: any, item: any, filterType: MatTableFilter, caseSensitive: boolean): boolean;
    private filterPredicateAlphaNumeric;
    private isAlphaNumeric;
    private isBoolean;
}
