import { Component, OnInit } from '@angular/core';
import { AddToShowCase } from '../../add-to-showcase';
import { MatTableDataSource } from '@angular/material';
import { MatTableFilter } from 'mat-table-filter';

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
  {name: 'Enterprise', isConstitutionClass: true, captain: {name: 'Talha', surname: 'Türe'}},
  {name: 'Discovery', isConstitutionClass: true, captain: {name: 'Christopher', surname: 'Pike'}},
  {name: 'Enterprise', isConstitutionClass: false, captain: {name: 'Jean-Luc', surname: 'Pickard'}}
];

@Component({
  selector: 'app-simple-filter',
  templateUrl: './simple-filter.component.html',
  styleUrls: ['./simple-filter.component.css']
})
@AddToShowCase('filter', 'simple-filter.component', 'Simple Filter')
export class SimpleFilterComponent implements OnInit {
  filterEntity: SpaceCraft;
  filterType: MatTableFilter;
  displayedColumns: string[] = ['name', 'captainName', 'captainSurname', 'isConstitutionClass'];
  dataSource;
  constructor() {
  }

  ngOnInit() {
    // Do not forget to initialize your object and it's non-primitive properties
    this.filterEntity = new SpaceCraft();
    this.filterEntity.captain = new Captain();
    this.filterEntity.isConstitutionClass = false; // leaving a filter property undefined means you want all the data without filtering
    this.filterType = MatTableFilter.ANYWHERE;
    this.dataSource = new MatTableDataSource(SPACECRAFT_DATA);
  }
}
