import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Exporter, Options } from 'mat-table-exporter';
import { AddToShowCase } from '../../add-to-showcase';

export class CustomExporter implements Exporter<Options> {
  export(rows: Array<any>, options?: Options) {
    console.log(rows);
  }
}

@Component({
  selector: 'app-custom-exporter',
  templateUrl: './custom-exporter.component.html',
  styleUrls: ['./custom-exporter.component.css']
})
@AddToShowCase('exporter', 'custom-exporter.component', 'Custom Exporting Implementation')
export class CustomExporterComponent implements OnInit {
  title = 'mte-test';
  displayedColumns = ['position', 'name', 'surname', 'birth'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Element>;
  customExporter: CustomExporter;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.customExporter = new CustomExporter(); // YOU CAN BENEFIT FROM DI TOO.
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
