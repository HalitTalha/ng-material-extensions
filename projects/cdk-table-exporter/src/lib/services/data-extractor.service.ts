import { Injectable } from '@angular/core';
import { DataRowOutlet } from '@angular/cdk/table';

@Injectable({
  providedIn: 'root'
})
export class DataExtractorService {

  constructor() { }

  public extractRows(cdkTable: any, hiddenColumns?: Array<any>, outlet?: DataRowOutlet): Array<any> {
    return this.getRowsAsJsonArray(cdkTable, outlet ?? cdkTable._rowOutlet, hiddenColumns);
  }

  private getRowsAsJsonArray(cdkTable: any, outlet: DataRowOutlet, hiddenColumns?: Array<any>): Array<any> {
    const renderedRows = this.getRenderedRows(cdkTable, outlet);
    return this.convertToJsonArray(renderedRows, hiddenColumns);
  }

  private getRenderedRows(cdkTable: any, outlet: DataRowOutlet): HTMLTableRowElement[] {
    return cdkTable._getRenderedRows(outlet) as HTMLTableRowElement[];
  }

  private convertToJsonArray(rows: HTMLTableRowElement[], hiddenColumns?: Array<any>): Array<any> {
    const result = new Array<any>();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < rows.length; i++) {
      const row: Array<string> = this.convertRow(rows[i], hiddenColumns);
      result.push(this.createExcelItem(row));
    }
    return result;
  }

  private convertRow(row: HTMLTableRowElement, hiddenColumns?: Array<any>): Array<string> {
    const result = new Array<string>();
    const cells: any = row.children;
    for (let i = 0; i < cells.length; i++) {
      if (!this.shouldHide(i, hiddenColumns)) {
        const element = (cells.item(i).innerText).trim();
        result.push(element);
      }
    }
    return result;
  }

  private shouldHide(columnIndex: number, hiddenColumns?: Array<any>) {
    if (hiddenColumns && hiddenColumns.includes(columnIndex)) {
      return true;
    } else {
      return false;
    }
  }

  private createExcelItem(row: Array<string>): any {
    return Object.assign({}, row);
  }
}
