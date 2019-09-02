# Mat Table Extensions

This is an angular workspace that currently includes 3 library projects.

Project | Version | Downloads/Month
--|--|--
[mat-table-exporter](#angular-material-table-exporter) | [![Node version](https://img.shields.io/npm/v/mat-table-exporter.svg?style=flat)](https://www.npmjs.com/package/mat-table-exporter) | ![Total Downloads](https://img.shields.io/npm/dm/mat-table-exporter.svg)
[cdk-table-exporter](https://github.com/HalitTalha/mat-table-extensions/tree/master/projects/cdk-table-exporter/README.md) | [![Node version](https://img.shields.io/npm/v/cdk-table-exporter.svg?style=flat)](https://www.npmjs.com/package/cdk-table-exporter) |![Total Downloads](https://img.shields.io/npm/dm/cdk-table-exporter.svg)
[mat-table-filter](#material-table-filter)| [![Node version](https://img.shields.io/npm/v/mat-table-filter.svg?style=flat)](https://www.npmjs.com/package/mat-table-filter)|![Total Downloads](https://img.shields.io/npm/dm/mat-table-filter.svg)

&nbsp;

## Angular Material Table Exporter

[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")  [![Node version](https://img.shields.io/npm/v/mat-table-exporter.svg?style=flat)](https://www.npmjs.com/package/mat-table-exporter)  ![Total Downloads](https://img.shields.io/npm/dm/mat-table-exporter.svg)

This package is to make MatTable components exportable in ***excel, csv, txt*** and ***json*** formats. ***Pagination is also supported***. This package is used by employing the MatTableExporter directive for your MatTables. However you can inject and directly use the service classes responsible for data exporting. You can also implement your own exporter and use it for your custom exporting requirements.

This project employs <a href="https://github.com/SheetJS/js-xlsx" target="_blank">xlsx sheetjs</a>, which is a great library and mature enough for the excel creation itself. In order to achieve a cross-browser file saving capability <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaverjs</a> is employed.

The MatTableExporter directive inside this package is a cdk-table-exporter subtype and provides support for angular material's cdkTable.
cdk-table-exporter facilitates the common exporting related functionalities for CdkTable implementations abstracting the behavior that can change among different CdkTables.

&nbsp;

### Getting Started

#### Angular Material Users

If you are employing angular material in your project. Install mat-table-exporter
```
npm install --save mat-table-exporter
```

After installing mat-table-exporter import MatTableExporterModule in your ngModule

#### Other than Angular Material

Install cdk-table-exporter if you are not using angular material in your project. In this case you have to implement your version of CdkTableExporter abstract class to use as your directive.

```
npm install --save cdk-table-exporter
```
After installing cdk-table-exporter import CdkTableExporterModule in your ngModules

You can find more detail under the corresponding title of Usage section

&nbsp;

### Usage
#### Angular Material Users

`matTableExporter` is the directive selector.
```html
<mat-table matTableExporter [dataSource]="dataSource" #exporter="matTableExporter">
```

```html
<button mat-button (click)="exporter.exportTable('csv')"></button>
```

&nbsp;

##### * For further demonstration of all the features please see the <a href="https://stackblitz.com" target="_blank">mte-demo</a>.

##### * This example demonstrates how to implement and use a custom exporter <a href="https://stackblitz.com" target="_blank">mte-cex-demo</a>.

&nbsp;

### API

mat-table-exporter project is only about MatTableExporterDirective that extends CdkTableExporter from cdk-table-exporter.

Hence the below public API description for mat-table-export is inherited from CdkTableExporter.ts

#### MatTableExporterDirective

| Input/Output | Property | Type | Description |
| --- | --- | --- | --- |
| `@Input` | hiddenColumns | `Array<number>` | (Optional) The indexes of the columns that are not wanted in the excel file |
| `@Input` | exporter | `Exporter<Options>` | (Optional) The actual exporting implementation that defines the strategy to be applied to the rows extracted from MatTable. |
| `@Output` | exportStarted | `EventEmitter<void>` | (Optional) Event that's fired when the export started |
| `@Output` | exportCompleted | `EventEmitter<void>` | (Optional) Event that's fired when the export completed |

&nbsp;


| Method | Description    |
|----------|-------------|
| `exportTable(exportType?: ExportType, options?: Options)`   | Called to trigger the export of MatTable|

&nbsp;

#### ExportType

```js
export enum ExportType {
  XLS = 'xls',
  XLSX = 'xlsx',
  CSV = 'csv',
  TXT = 'txt',
  JSON = 'json',
  OTHER = 'other'
}
```
&nbsp;

#### Options


| Property | Type   | Description |
|----------|--------|-------------|
| fileName | string |(Optional) Name of the exported file|

&nbsp;

#### ExcelOptions
ExcelOptions wraps the WritingOptions of sheetjs library. All other export types share the common Options interface. In the next releases, options will be enriched for the other export types.

| Property | Type   | Description |
|----------|--------|-------------|
| fileName | string |(Optional) Name of the exported file|
| type | 'base64', 'binary', 'buffer', 'file', 'array', 'string' |(Optional) Output data encoding|
| bookSST | boolean |(Optional) Generate Shared String Table @default false|
| sheet | string |(Optional) Name of the exported sheet|
| compression | boolean |(Optional) Use ZIP compression for ZIP-based formats @default false|
| ignoreEC | boolean |(Optional) Suppress "number stored as text" errors in generated files @default true|
| Props | Properties |(Optional) Workbook properties like *Author, Title, Subject* etc.|


&nbsp;

## Material Table Filter

[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")  [![Node version](https://img.shields.io/npm/v/mat-table-filter.svg?style=flat)](https://www.npmjs.com/package/mat-table-filter)  ![Total Downloads](https://img.shields.io/npm/dm/mat-table-filter.svg)

Provides filtering support for @angular/material tables. Table filtering is done by using the directive matTableFilter. This project is inspired by Hibernate's example api.
By employing this directive you will end up with having
* Less code, less complicated logic for filtering
* Default debounce support
* Being able to filter nested objects no matter how deep the properties are


### Installation

```
npm install --save mat-table-filter
```

After installing mat-table-filter import MatTableFilterModule in your ngModule

&nbsp;

### Usage

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

&nbsp;

### Stackblitz demo [mat-table-filter-example](https://stackblitz.com/github/HalitTalha/mat-table-filter-example)

### Full Example
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

&nbsp;

### API

matTableFilter is the directive selector

| Input | Property | Type | Description |
| --- | --- | --- | --- |
| `@Input` | matTableFilter | `any` | Directive selector. Takes template-referance of MatTable as input |
| `@Input` | exampleEntity | `any` | The example entity that is used to filter the table |
| `@Input` | filterType | `FilterType` |(Optional) Defines the filtering strategy. Default value is `FilterType.ANYWHERE` |
| `@Input` | debounceTime | `number` | (Optional) Defines debounce time in milliseconds. Default value is `400` |
| `@Input` | caseSensitive | `boolean` | (Optional) Default value is `false` |

&nbsp;

### Contributing
If you are interested in the source code of the angular libraries inside this workspace-project you can get ready and build by applying the steps below:

1. Do ```npm install``` in ```mat-table-extensions``` directory
2. Do ```npm install``` in ```mat-table-extensions\projects\cdk-table-exporter``` directory
3. Do ```npm install``` in ```mat-table-extensions\projects\mat-table-exporter``` directory
4. Do ```npm install``` in ```mat-table-extensions\projects\mat-table-filter``` directory
5. Go to ```mat-table-extensions``` directory
6. Build the project you want, e.g:
```
ng build cdk-table-exporter
```


## Licence

Apache-2.0
