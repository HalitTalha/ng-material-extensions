# Material Table Filter (matTableFilter Directive)

[![Node version](https://img.shields.io/npm/v/mat-table-filter.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/mat-table-filter)  ![Total Downloads](https://img.shields.io/npm/dm/mat-table-filter.svg?style=for-the-badge)

Provides filtering support for @angular/material tables. Table filtering is done by using the directive matTableFilter. This project is inspired by Hibernate's example api.
By employing this directive you will end up with having
* Less code, less complicated logic for filtering
* Default debounce support
* Being able to filter nested objects no matter how deep the properties are

## Installation

```
npm install mat-table-filter
```
NOTE: Angular versions older than Angular 8 should install mat-table-filter@1.2.5
```
npm install mat-table-filter@1.2.5
```

For Angular versions between 8-13 (inclusive), please install mat-table-filter@10.2.4
```
npm install mat-table-filter@10.2.4
```

After installing mat-table-filter import MatTableFilterModule in your ngModule
```
import { MatTableFilterModule } from 'mat-table-filter';
```
```
@NgModule({
  imports: [
    ...
    MatTableFilterModule
  ],
 ]})
```
## Usage

A datasource of a simple array won't work. In order to use matTableFilter, your table's datasource must be created as MatTableDataSource, see the example below.

```
dataSource = new MatTableDataSource(ELEMENT_DATA);
```
1. Add matTableFilter directive as a property to your material table. 
```html
<table mat-table matTableFilter [dataSource]="dataSource"  ...>
```
2. Keep an example object of the same type with your items in your table.
3. Bind the exampleObject to the exampleEntity property of the matTableFilter directive
```html
<table mat-table matTableFilter [dataSource]="dataSource" [exampleEntity]="exampleObject"...>
```

That's all. When you populate the exampleObject's properties, the filter will automatically work just fine with the default debounce support.
You can change the debounce time also.

&nbsp;
### Stackblitz demo [mat-table-filter-example](https://stackblitz.com/github/HalitTalha/mat-table-filter-example)

&nbsp;

## API

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
This project is a library project inside ng-material-extensions angular workspace. If you are interested in the source code of this particular library you can get ready and build the project by applying the steps below:

1. Do ```npm install``` in ```ng-material-extensions``` directory
2. Do ```npm install``` in ```ng-material-extensions\projects\mat-table-filter``` directory
3. Go to ```ng-material-extensions``` directory
4. Build it:
```
ng build mat-table-filter
```
5. You can run the showcase application and see your changes in action. In ```ng-material-extensions``` run ```ng s -o```
&nbsp;

## Support & Donations

Feel free to show your support. Donating supporters will be added into *Supporters* section inside the **README.md** of the repository.

[![GitHub Org's stars](https://img.shields.io/github/stars/HalitTalha/ng-material-extensions?logo=Github&style=for-the-badge)](https://github.com/HalitTalha/ng-material-extensions/stargazers) -> **Become a star-gazer, giving a star at Github** 


[![Crypto Donation](https://img.shields.io/badge/_-DONATE-4d4d4e?logo=bitcoin&style=for-the-badge)](https://commerce.coinbase.com/checkout/3643d820-81aa-46ca-9973-877c1184e082) -> **Donate in crypto currencies**


&nbsp;
## Licence

Apache-2.0
