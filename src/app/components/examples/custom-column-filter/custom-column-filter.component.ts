import { Component, OnInit } from '@angular/core';
import { AddToShowCase } from '../../add-to-showcase';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableFilter } from 'mat-table-filter';

export class Route {
  name: string;
  journeyTime: string;
}

const ROUTES: Route[] = [
 {name: 'FRA-IST-JFK', journeyTime: '10:00'},
 {name: 'MLE-IST-ESB', journeyTime: '10:30'},
 {name: 'IST-ESB-GZT', journeyTime: '01:30'},
 {name: 'IST-ESB-GZT', journeyTime: '01:30'},
 {name: 'JFK-SAW-AYT', journeyTime: '02:45'},
 {name: 'JFK-SAW-FRA', journeyTime: '02:45'},
 {name: 'JFK-SAW-FRA', journeyTime: '02:45'}
];

@Component({
  selector: 'app-simple-filter',
  templateUrl: './custom-column-filter.component.html',
  styleUrls: ['./custom-column-filter.component.css']
})
@AddToShowCase('filter', 'custom-column-filter.component', 'Custom Property Predicate')
export class CustomColumnFilterComponent implements OnInit {
  filterEntity: Route;
  filterType: MatTableFilter;
  displayedColumns: string[] = ['name', 'journeyTime'];
  propertyOptions;
  dataSource;

  constructor() {
  }

  ngOnInit() {
    this.filterEntity = new Route();
    this.filterType = MatTableFilter.ANYWHERE;
    this.dataSource = new MatTableDataSource(ROUTES);
    this.propertyOptions = {name: (routeName: string) => { // Custom filtering for name property
      return routeName.split('-')[1] === this.filterEntity.name; // filter for only the station in the middle
    }};
  }
}
