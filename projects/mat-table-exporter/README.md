# Angular Material Table Exporter (MatTable Exporter)

[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")  [![Node version](https://img.shields.io/npm/v/mat-table-exporter.svg?style=flat)](https://www.npmjs.com/package/mat-table-exporter)  ![Total Downloads](https://img.shields.io/npm/dm/mat-table-exporter.svg)

mat-table-exporter is mainly for making MatTable components exportable as excel files. This is done through using a directive, however you can inject and directly use the service class responsible for data exporting. This project employs xlsx sheetjs, which is a great library and mature enough, for the excel creation itself.
mat-table-exporter is a cdk-table-exporter subtype and provides support for angular material's cdkTable which is MatTable.
cdk-table-exporter facilitates the common functionalities for CdkTable implementations abstracting the behavior that can change among different CdkTable implementations.

## Getting Started

### Angular Material Users

If you are employing angular material in your project. Install mat-table-exporter
```
npm install --save mat-table-exporter
```

After installing mat-table-exporter import MatTableExporterModule in your ngModule

### Other than Angular Material

Install cdk-table-exporter if you are not using angular material in your project. In this case you have to implement your version of CdkTableExporter abstract class to use as your directive.

```
npm install --save cdk-table-exporter
```
After installing cdk-table-exporter import CdkTableExporterModule in your ngModules

You can find more detail under the corresponding title of Usage section

## Usage
### Angular Material Users

`ngxMatTableExporter` is the directive selector.
```html
<mat-table [dataSource]="dataSource" #mytable matSort ngxMatTableExporter [cdkTable]="mytable" [exporterButton]="exportButton" sheetName="someSheetName" fileName="someFileName">
```

```html
<button #exportButton mat-button></button>
```

### Other than Angular Material

Will be updated soon

## API

mat-table-exporter project is only about MatTableExporterDirective that extends CdkTableExporter from cdk-table-exporter.

Hence the below public API description for mat-table-export is inherited from CdkTableExporter.ts

### MatTableExporterDirective

| Input/Output | Property | Type | Description |
| --- | --- | --- | --- |
| `@Input` | cdkTable | `any` | Template-referance of CdkTable that's to be exported |
| `@Input` | exporterButton | `any` | Template-referance of the button that's used to trigger the export |
| `@Input` | sheetName | `string` | (Optional) The name of the sheet that keeps the exported data  |
| `@Input` | fileName | `string` | (Optional) Exported excel file's name |
| `@Input` | hiddenColumns | `Array<number>` | (Optional) The indexes of the columns that are not wanted in the excel file |
| `@Output` | exportStarted | `EventEmitter<void>` | (Optional) Event that's fired when the export started |
| `@Output` | exportCompleted | `EventEmitter<void>` | (Optional) Event that's fired when the export completed |

### JsonExporterService

JsonExporterService is published in cdk-table-exporter project. CdkTableExporter employs this service, hence through inheritance MatTableExporterDirective does too.

#### exportExcel Method

Exports excel file by employing xlsx sheetjs

| Parameter | Type | Description |
| --- | --- | --- |
| header | `any` | Any json object that holds the header information of the exported excel file aka the first row of the excel |
| rows | `Array<any>` | Any json array that will be the rows of the exported excel | 
| fileName | `string` | Exported excel file's name | 
| sheetName | `string` | The name of the sheet that keeps the exported data | 
| hiddenColumns | `Array<string>` | Properties that are wanted to be hidden, i.e. id, createdDate, auditable properties etc. | 


## Contributing
This project is a library project inside mat-table-extensions angular workspace. If you are interested in the source code of this particular library you can build it inside the workspace directory as explained below:

1. Do ```npm install``` in ```mat-table-extensions``` directory
2. Do ```npm install``` in ```mat-table-extensions\projects\mat-table-exporter``` directory
3. Go to ```mat-table-extensions``` directory
4. Build it:
```
ng build mat-table-exporter
```

## Licence

Apache-2.0
