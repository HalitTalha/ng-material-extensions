export declare class JsonExporterService {
    constructor();
    /**
     * Exports excel file by employing xlsx sheetjs
     * @param header Any json object that holds the header information of the exported excel file aka the first row of the excel
     * @param rows Any json array that will be the rows of the exported excel
     * @param fileName Exported excel file's name
     * @param sheetName The name of the sheet that keeps the exported data
     * @param hiddenColumns Properties that are wanted to be hidden, i.e. id, createdDate, auditable properties etc.
     */
    exportExcel(header: any, rows: Array<any>, fileName: string, sheetName: string, hiddenColumns?: Array<string>): void;
    /**
     * Hides unwanted properties of an entity
     * @param columns properties to be hidden in the returned object
     * @param item an item that corresponds to a row inside the exported excel
     */
    private hideColumns;
    /**
     * Provides default file extension (which is xlsx) to the parameter fileName
     */
    private appendExtensionIfNotProvided;
}
export declare enum ExcelExtension {
    XLSX = ".xlsx",
    XLS = ".xls"
}
