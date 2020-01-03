import { MatTableDataSource } from '@angular/material/table';
import { MatTableFilter } from 'mat-table-filter';
import { Component, OnInit } from '@angular/core';

export class Captain {
  name: string;
  surname: string;
}

export class SpaceCraft {
  name: string;
  isConstitutionClass: boolean;
  captain: Captain;
}

const SPACECRAFT_DATA: SpaceCraft[] = [
  {name: 'Endurance', isConstitutionClass: false, captain: {name: 'Joseph', surname: 'Cooper'}},
  {name: 'Enterprise', isConstitutionClass: true, captain: {name: 'Christopher', surname: 'Pike'}},
  {name: 'Discovery', isConstitutionClass: true, captain: {name: 'Christopher', surname: 'Pike'}},
  {name: 'Enterprise', isConstitutionClass: false, captain: {name: 'Jean-Luc', surname: 'Pickard'}}
];

@Component({
  selector: 'app-filter-example',
  templateUrl: './filter-example.component.html',
  styleUrls: ['./filter-example.component.css']
})
export class FilterExampleComponent implements OnInit {
  filterEntity: SpaceCraft;
  filterType: MatTableFilter;
  displayedColumns: string[] = ['name', 'captainName', 'captainSurname', 'isConstitutionClass'];
  columnOptions;
dataSource;
  constructor() { }

  ngOnInit() {
    // Do not forget to initialize your object and it's non-primitive properties
    this.filterEntity = new SpaceCraft();
    this.filterEntity.captain = new Captain();
    this.filterType = MatTableFilter.ANYWHERE;
    this.dataSource = new MatTableDataSource(SPACECRAFT_DATA);
   // this.columnOptions = {name: {filterType: MatTableFilter.STARTS_WITH}, 'captain.name': {filterType: MatTableFilter.ENDS_WITH}};
    this.columnOptions = {name: this.myPredicate, 'captain.name': {filterType: MatTableFilter.ENDS_WITH}};
  }
  myPredicate(data): boolean {
    if(data == 'Endurance') {
      return true;
    } else {
      return false;
    }
  }
}
