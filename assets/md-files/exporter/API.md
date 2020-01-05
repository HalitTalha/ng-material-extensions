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
