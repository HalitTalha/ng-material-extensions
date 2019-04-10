import { Injectable } from "@angular/core";
import * as XLSX from "xlsx";

@Injectable({
  providedIn: "root"
})

/**
 * An angular service class that is used to create excel files out of json object arrays.
 */
export class JsonExporterService {
  constructor() {}

  /**
   * Exports excel file by employing xlsx sheetjs
   * @param header Any json object that holds the header information of the exported excel file aka the first row of the excel
   * @param rows Any json array that will be the rows of the exported excel
   * @param fileName Exported excel file's name
   * @param sheetName The name of the sheet that keeps the exported data
   * @param hiddenColumns Properties that are wanted to be hidden, i.e. id, createdDate, auditable properties etc.
   */
  public exportExcel(
    header: any,
    rows: Array<any>,
    fileName: string,
    sheetName: string,
    hiddenColumns?: Array<string>
  ) {
    rows.unshift(header);

    if (hiddenColumns) {
      for (let index = 0; index < rows.length; index++) {
        rows[index] = this.hideColumns(hiddenColumns, rows[index]);
      }
    }
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(rows, {
      skipHeader: true // we are skipping header otherwise xlsx puts the properties of the given json object
    });
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    fileName = this.appendExtensionIfNotProvided(fileName);
    /* save to file */
    XLSX.writeFile(wb, fileName);
  }

  /**
   * Hides unwanted properties of an entity
   * @param columns properties to be hidden in the returned object
   * @param item an item that corresponds to a row inside the exported excel
   */
  private hideColumns(columns: Array<string>, item: any) {
    for (let index = 0; index < columns.length; index++) {
      const element = columns[index];
      delete item[element];
    }
  }

  /**
   * Provides default file extension (which is xlsx) to the parameter fileName
   */
  private appendExtensionIfNotProvided(fileName: string): string {
    if (
      !fileName.includes(ExcelExtension.XLSX) &&
      !fileName.includes(ExcelExtension.XLS)
    ) {
      fileName = fileName.concat(ExcelExtension.XLSX);
    }
    return fileName;
  }
}

export enum ExcelExtension {
  XLSX = ".xlsx",
  XLS = ".xls"
}
