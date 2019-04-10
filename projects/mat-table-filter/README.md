# Material Table Filter (matTableFilter Directive)

[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")  [![Node version](https://img.shields.io/npm/v/mat-table-filter.svg?style=flat)](https://www.npmjs.com/package/mat-table-filter)  ![Total Downloads](https://img.shields.io/npm/dm/mat-table-filter.svg)

Provides filtering support for @angular/material tables. Table filtering is done by using the directive matTableFilter. This project is inspired by Hibernate's example api.
By employing this directive you will end up with having
* Less code, less complicated logic for filtering
* Default debounce support
* Being able to filter nested objects no matter how deep the properties are

## Installation

```
npm install --save mat-table-filter
```

After installing mat-table-filter import MatTableFilterModule in your ngModule

## Usage

A datasource of a simple array won't work. In order to use matTableFilter, your table's datasource must be created as MatTableDataSource, see the example below.

```
dataSource = new MatTableDataSource(ELEMENT_DATA);
```
1. Add matTableFilter directive as a property to your material table. Assign the table's template referance to it.
```
<table mat-table [dataSource]="dataSource" #myTable [matTableFilter]="myTable" ...>
```
2. Keep an example object of the same type with your items in your table.
3. Bind the exampleObject to the exampleEntity property of the matTableFilter directive
```
<table mat-table [dataSource]="dataSource" #myTable [matTableFilter]="myTable" [exampleEntity]="exampleObject"...>
```

That's all. When you populate the exampleObject's properties, the filter will automatically work just fine with the default debounce support.
You can change the debounce time also.

## Full Example
We rename our "exampleObject" as filterEntity in this example.

**table-test.component.html**
```html
<!-- All the placement of these inputs is just for the sake of example
  you are fully free to decide how your filter inputs will look like -->
<table mat-table [dataSource]="dataSource" #myTable class="mat-elevation-z8" [matTableFilter]="myTable" [exampleEntity]="filterEntity" [filterType]="filterType">
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef>
      <mat-form-field appearance="outline">
        <input matInput placeholder="Name" [(ngModel)]="filterEntity.name">
      </mat-form-field>
    </th>
    <td mat-cell *matCellDef="let element"> {{element.name}} </td>
  </ng-container>

  <ng-container matColumnDef="captainName">
    <th mat-header-cell *matHeaderCellDef>
      <mat-form-field appearance="outline">
        <input matInput placeholder="Captain Name" [(ngModel)]="filterEntity.captain.name">
      </mat-form-field>
    </th>
    <td mat-cell *matCellDef="let element"> {{element.captain.name}} </td>
  </ng-container>

  <ng-container matColumnDef="captainSurname">
    <th mat-header-cell *matHeaderCellDef>
      <mat-form-field appearance="outline">
        <input matInput placeholder="Captain Surname" [(ngModel)]="filterEntity.captain.surname">
      </mat-form-field>
    </th>
    <td mat-cell *matCellDef="let element"> {{element.captain.surname}} </td>
  </ng-container>

  <ng-container matColumnDef="isConstitutionClass">
      <th mat-header-cell *matHeaderCellDef>
        <mat-checkbox class="example-margin" [(ngModel)]="filterEntity.isConstitutionClass">Constitution Class</mat-checkbox>
      </th>
      <td mat-cell *matCellDef="let element"> {{element.isConstitutionClass}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>
```

**table-test.component.ts**
```typescript
import { Component, OnInit } from '@angular/core';
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
  {name: 'Enterprise', isConstitutionClass: false, captain: {name: 'Christopher', surname: 'Pike'}},
  {name: 'Discovery', isConstitutionClass: false, captain: {name: 'Christopher', surname: 'Pike'}},
  {name: 'Enterprise', isConstitutionClass: false, captain: {name: 'Jean-Luc', surname: 'Pickard'}}
];

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.css']
})

export class TableTestComponent implements OnInit {
  filterEntity: SpaceCraft;
  filterType: MatTableFilter;
  displayedColumns: string[] = ['name', 'captainName', 'captainSurname', 'isConstitutionClass'];
  dataSource = new MatTableDataSource(SPACECRAFT_DATA);
  constructor() { }

  ngOnInit() {
    // Do not forget to initialize your object and it's non-primitive properties
    this.filterEntity = new SpaceCraft();
    this.filterEntity.captain = new Captain();
    this.filterType = MatTableFilter.ANYWHERE;
  }
}
```
>The input components are placed inside table headers in this example however you are completely free to do what ever you want. UX is up to you.

<img src="https://s2.gifyu.com/images/mat-table-filter.gif" width="100%" height="auto" />

## API

matTableFilter is the directive selector

| Input | Property | Type | Description |
| --- | --- | --- | --- |
| `@Input` | matTableFilter | `any` | Directive selector. Takes template-referance of MatTable as input |
| `@Input` | exampleEntity | `any` | The example entity that is used to filter the table |
| `@Input` | filterType | `FilterType` |(Optional) Defines the filtering strategy. Default value is `FilterType.ANYWHERE` |
| `@Input` | debounceTime | `number` | (Optional) Defines debounce time in milliseconds. Default value is `400` |
| `@Input` | caseSensitive | `boolean` | (Optional) Default value is `false` |


## Contributing
This project is a library project inside mat-table-extensions angular workspace. If you are interested in the source code of this particular library you can get ready and build the project by applying the steps below:

1. Do ```npm install``` in ```mat-table-extensions``` directory
2. Do ```npm install``` in ```mat-table-extensions\projects\mat-table-filter``` directory
3. Go to ```mat-table-extensions``` directory
4. Build it:
```
ng build mat-table-filter
```

## Licence

Apache-2.0
