import { DataRowOutlet } from '@angular/cdk/table';
export declare class DataExtractorService {
    constructor();
    extractRows(cdkTable: any, hiddenColumns: Array<any>, outlet?: DataRowOutlet): Array<any>;
    private getRowsAsJsonArray;
    private getRenderedRows;
    private convertToJsonArray;
    private convertRow;
    private shouldHide;
    private createExcelItem;
}
