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
NOTE: For the previous major versions of Angular install version 1.2.5 
```
npm install --save mat-table-filter@1.2.5
```
After installing mat-table-filter import MatTableFilterModule in your ngModule

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

## Licence

Apache-2.0
