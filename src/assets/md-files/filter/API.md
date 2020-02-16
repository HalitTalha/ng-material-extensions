`import { MatTableFilterModule } from 'mat-table-filter';`

&nbsp;

### MatTableFilterDirective

matTableFilter is the directive selector

| Input | Property | Type | Description |
| --- | --- | --- | --- |
| `@Input` | exampleEntity | `any` | The example entity that is used to filter the table |
| `@Input` | filterType | `MatTableFilter` |(Optional) Defines the filtering strategy. Default value is `FilterType.ANYWHERE` |
| `@Input` | debounceTime | `number` | (Optional) Defines debounce time in milliseconds. Default value is `400` |
| `@Input` | caseSensitive | `boolean` | (Optional) Default value is `false` |
| `@Input` | customPredicate | `(data: any) => boolean` | (Optional) You can set your own filtering implementation by providing your predicate function with this input |
| `@Input` | propertyOptions | `PropertyOptions` | (Optional) With this input you can set seperate filterTypes and some more options for different keys of table item |


&nbsp;

### PropertyOptions
| Property | Type | Description    |
|----------|-------------|-------------|
| `[property: string]` | `Options \| (data: any) => boolean`   | Key-Value pair where you set Options or PredicateFunc for a property. See examples.|

&nbsp;

### Options
| Property | Type | Description    |
|----------|-------------|-------------|
| filterType | `MatTableFilter`   | (Optional) Defines the filtering strategy. Default value is `FilterType.ANYWHERE`|
| caseSensitive | `boolean`   | (Optional) Default value is `false`|

&nbsp;

### MatTableFilter (Filter Types)

```js
export enum MatTableFilter {
  EQUALS = 'EQUALS',
  ANYWHERE = 'ANYWHERE',
  STARTS_WITH = 'STARTS_WITH',
  ENDS_WITH = 'ENDS_WITH'
}

```

## Contributing
This project is a library project inside mat-table-extensions angular workspace. If you are interested in the source code of this particular library you can get ready and build the project by applying the steps below:

1. Do ```npm install``` in ```mat-table-extensions``` directory
2. Do ```npm install``` in ```mat-table-extensions\projects\mat-table-filter``` directory
3. Go to ```mat-table-extensions``` directory
4. Build it:
```
ng build mat-table-filter
```
