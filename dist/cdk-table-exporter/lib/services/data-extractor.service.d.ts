import { DataRowOutlet } from '@angular/cdk/table';
import * as i0 from "@angular/core";
export declare class DataExtractorService {
    constructor();
    extractRows(cdkTable: any, hiddenColumns: Array<any>): Array<any>;
    extractRow(cdkTable: any, hiddenColumns: Array<any>, outlet: DataRowOutlet): Array<any>;
    private getRowsAsJsonArray;
    private getRenderedRows;
    private convertToJsonArray;
    private convertRow;
    private shouldHide;
    private createExcelItem;
    static ɵfac: i0.ɵɵFactoryDef<DataExtractorService>;
    static ɵprov: i0.ɵɵInjectableDef<DataExtractorService>;
}
