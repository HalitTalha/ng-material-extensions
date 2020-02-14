import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatTableFilter, PropertyOptions } from 'mat-table-filter';

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
  selector: 'app-property-options',
  templateUrl: './property-options.component.html',
  styleUrls: ['./property-options.component.css']
})
export class PropertyOptionsComponent implements OnInit {
  filterEntity: SpaceCraft;
  filterType: MatTableFilter;

  propertyOptions: PropertyOptions;

  displayedColumns: string[] = ['name', 'captainName', 'captainSurname', 'isConstitutionClass'];
  dataSource;
  constructor() {
  }

  ngOnInit() {
    // Do not forget to initialize your object and it's non-primitive properties
    this.filterEntity = new SpaceCraft();
    this.filterEntity.captain = new Captain();
    this.filterEntity.isConstitutionClass = false; // leaving a filter property undefined means you want all the data without filtering
    this.dataSource = new MatTableDataSource(SPACECRAFT_DATA);

    // captain.name property filtering needs an exact match with case sensitiveness
    // All other properties will be filtered with ANYWHERE search
    this.filterType = MatTableFilter.ANYWHERE;
    this.propertyOptions = {'captain.name': {filterType: MatTableFilter.EQUALS, caseSensitive: true}};
  }
}
