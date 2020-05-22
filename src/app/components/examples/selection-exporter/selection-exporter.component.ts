import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddToShowCase } from '../../add-to-showcase';
import { MatTableExporterDirective } from 'mat-table-exporter';

@Component({
  selector: 'app-selection-exporter',
  templateUrl: './selection-exporter.component.html',
  styleUrls: ['./selection-exporter.component.css']
})
@AddToShowCase('exporter', 'selection-exporter.component', 'Selected Row Exporting Example')
export class SelectionExporterComponent implements AfterViewInit, OnInit {
  title = 'mte-test';
  displayedColumns = ['select', 'position', 'name', 'surname', 'birth'];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatTableExporterDirective, { static: false }) exporter: MatTableExporterDirective;
  dataSource: MatTableDataSource<Element>;
  selection = new SelectionModel<Element>(true, []);

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  private isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleRow(row: any, index: number) {
    this.selection.toggle(row);
    this.exporter.toggleRow(index);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Element): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}

export interface Element {
  name: string;
  position: number;
  surname: string;
  birth: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Albert', surname: 'Einstein', birth: '1879' },
  { position: 2, name: 'Marie', surname: 'Curie', birth: '1867' },
  { position: 3, name: 'Enrico', surname: 'Fermi', birth: '1901' },
  { position: 4, name: 'Dmitri', surname: 'Mendeleev', birth: '1834' },
  { position: 5, name: 'Alfred', surname: 'Nobel', birth: '1833' },
  { position: 6, name: 'Ernest', surname: 'Lawrence', birth: '1901' },
  { position: 7, name: 'Glenn', surname: 'Seaborg', birth: '1912' },
  { position: 8, name: 'Niels', surname: 'Bohr', birth: '1885' },
  { position: 9, name: 'Lise', surname: 'Meitner', birth: '1878' },
  { position: 10, name: 'Wilhelm', surname: 'Röntgen', birth: '1845' },
  { position: 11, name: 'Nicolaus', surname: 'Copernicus', birth: '1473' },
  { position: 12, name: 'Georgy', surname: 'Flyorov', birth: '1913' },
  { position: 13, name: 'Yuri', surname: 'Oganessian', birth: '1933' },
  { position: 14, name: 'Johan', surname: 'Gadolin', birth: '1760' },
  { position: 15, name: 'Pierre', surname: 'Curie', birth: '1859' },
];

