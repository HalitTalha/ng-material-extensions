import type * as XLSX from 'xlsx';
export declare class SheetjsHelperService {
    private xlsxLightweight;
    constructor(xlsxLightweight: boolean);
    getXlsx(): Promise<typeof XLSX>;
}
