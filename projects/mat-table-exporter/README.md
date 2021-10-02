# Angular Material Table Exporter

[![Node version](https://img.shields.io/npm/v/mat-table-exporter.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/mat-table-exporter)  ![Total Downloads](https://img.shields.io/npm/dm/mat-table-exporter.svg?style=for-the-badge)

This package is to make MatTable components exportable in ***excel, csv, txt*** and ***json*** formats. ***Pagination is also supported***. Applying MatTableExporter directive to your MatTable is enough to make it exportable. The directive uses different exporter services for different exporting types. You can also implement your own exporter and use it for your custom exporting requirements.

This project employs <a href="https://github.com/SheetJS/js-xlsx" target="_blank">xlsx sheetjs</a>, which is a great library and mature enough for the excel creation itself. In order to achieve a cross-browser file saving capability <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaverjs</a> is employed.

The MatTableExporter directive inside this package is a cdk-table-exporter subtype and provides support for angular material's cdkTable.
cdk-table-exporter facilitates the common exporting related functionalities for CdkTable implementations abstracting the behavior that can change among different CdkTables.

&nbsp;

## Getting Started

If you are employing angular material in your project. Install mat-table-exporter
```
npm install --save mat-table-exporter
```
NOTE: For the previous major versions of Angular (Angular 8 and older versions) install version 1.2.5 
```
npm install --save mat-table-exporter@1.2.5
```

After installing mat-table-exporter import MatTableExporterModule in your ngModule
```
import { MatTableExporterModule } from 'mat-table-exporter';
```
```
@NgModule({
  imports: [
    ...
    MatTableExporterModule
  ],
 ]})
```

&nbsp;

## Usage

`matTableExporter` is the directive selector.
```html
<mat-table matTableExporter [dataSource]="dataSource" #exporter="matTableExporter">
```

```html
<button mat-button (click)="exporter.exportTable('csv')"></button>
```

&nbsp;

##### * Stackblitz demo: <a href="https://stackblitz.com/edit/mte-demo" target="_blank">mte-demo</a>.

##### * Stackblitz demo of custom exporter <a href="https://stackblitz.com/edit/mte-cex-demo" target="_blank">mte-cex-demo</a>.

&nbsp;


## API

### MatTableExporterDirective

| Input/Output | Property | Type | Description |
| --- | --- | --- | --- |
| `@Input` | hiddenColumns | `Array<number>` | (Optional) The indexes of the columns that are not wanted in the output file |
| `@Input` | exporter | `Exporter<Options>` | (Optional) The actual exporting implementation that defines the strategy to be applied to the rows extracted from MatTable. |
| `@Output` | exportStarted | `EventEmitter<void>` | (Optional) Event that's fired when the export started |
| `@Output` | exportCompleted | `EventEmitter<void>` | (Optional) Event that's fired when the export completed |

&nbsp;


| Method | Description    |
|----------|-------------|
| `exportTable(exportType?: ExportType, options?: Options)`   | Called to trigger the export of MatTable|
| `toggleRow(index: number)`   | Called to mark the row for selection export, if the requirement is to export only selected rows. Having no rows selected means export everything |
| `resetToggleRow()` | Resets all the rows toggled for exporting |

&nbsp;

### ExportType

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

### Options


| Property | Type   | Description |
|----------|--------|-------------|
| fileName | `string` |(Optional) Name of the exported file|

&nbsp;

### TxtOptions
Extends the common Options interface.

| Property | Type   | Description |
|----------|--------|-------------|
| delimiter | `string` |(Optional) Field separator @default `,`|

&nbsp;

### ExcelOptions
ExcelOptions wraps the WritingOptions of sheetjs library. All other export types share the common Options interface. In the next releases, options will be enriched for the other export types.

| Property | Type   | Description |
|----------|--------|-------------|
| fileName | `string` |(Optional) Name of the exported file|
| type | `'base64', 'binary', 'buffer', 'file', 'array', 'string'` |(Optional) Output data encoding|
| bookSST | `boolean` |(Optional) Generate Shared String Table @default false|
| sheet | `string` |(Optional) Name of the exported sheet|
| compression | `boolean` |(Optional) Use ZIP compression for ZIP-based formats @default false|
| ignoreEC | `boolean` |(Optional) Suppress "number stored as text" errors in generated files @default true|
| Props | `Properties` |(Optional) Workbook properties like *Author, Title, Subject* etc.|
| columnWidths | `Array<number>` | (Optional) Column widths in maximum char  |

&nbsp;

## Bundle Size
Xlsx (sheetjs) is a core dependency of the package. Since it is built as a CommonJs module, proper tree-shaking is not available during the builds. That's why **mat-table-exporter** loads Xlsx dependencies dynamically since **v10.2.3**.

Even if Xlsx is loaded dynamically, it is heavy by nature. If you'd like to benefit the extra minified version of xlsx (**xlsx.mini.min**; Doesn't support some features like **.xls** exporting) you can configure the module as shown below:

```
@NgModule({
  imports: [
    ...
    MatTableExporterModule.forRoot({xlsxLightWeight: true}),
  ],
 ]})
```

## Contributing
This project is a library project inside ng-material-extensions angular workspace. If you are interested in the source code of this particular library you can get ready and build the project by applying the steps below:

1. Do ```npm install``` in ```ng-material-extensions``` directory
2. Do ```npm install``` in ```ng-material-extensions\projects\cdk-table-exporter``` directory
3. Do ```npm install``` in ```ng-material-extensions\projects\mat-table-exporter``` directory
4. Go to ```ng-material-extensions``` directory
5. Build both of the exporter packages:
```
ng build cdk-table-exporter
```
```
ng build mat-table-exporter
```
6. You can run the showcase application and see your changes in action. In ```ng-material-extensions``` run ```ng s -o```
&nbsp;

## Support & Donations

Feel free to show your support. Donating supporters will be added into *Supporters* section inside the **README.md** of the repository.

[![GitHub Org's stars](https://img.shields.io/github/stars/HalitTalha/ng-material-extensions?logo=Github&style=for-the-badge)](https://github.com/HalitTalha/ng-material-extensions/stargazers) -> **Become a star-gazer, giving a star at Github** 

[![Patreon Badge](https://img.shields.io/badge/Patreon-talhature-e05d44?logo=Patreon&style=for-the-badge)](https://www.patreon.com/talhature) -> **Become a Patreon**


[![Crypto Donation](https://img.shields.io/badge/_-DONATE-4d4d4e?logo=bitcoin&style=for-the-badge)](https://commerce.coinbase.com/checkout/3643d820-81aa-46ca-9973-877c1184e082) -> **Donate in crypto currencies**


&nbsp;
## Licence

Apache-2.0
