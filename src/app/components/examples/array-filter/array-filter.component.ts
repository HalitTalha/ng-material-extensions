import { MatTableFilter } from 'mat-table-filter';
import { Component, OnInit } from '@angular/core';
import { AddToShowCase } from '../../add-to-showcase';
import { MatTableDataSource, MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

export class Product {
  category: string;
  brand: string;
  availableSizes: Array<string>;
}

const PRODUCTS: Product[] = [
  {category: 'T-Shirt', brand: 'X', availableSizes: ['S', 'M', 'L', 'XL']},
  {category: 'T-Shirt', brand: 'Y', availableSizes: ['S', 'L', 'XL']},
  {category: 'T-Shirt', brand: 'Z', availableSizes: ['XL']},
  {category: 'Jean', brand: 'X', availableSizes: ['S', 'M', 'L', 'XL']},
  {category: 'Jean', brand: 'Y', availableSizes: ['S', 'M']},
  {category: 'Jean', brand: 'Z', availableSizes: ['S', 'M', 'L']},
  {category: 'Jean', brand: 'B', availableSizes: ['S', 'M', 'L']},
  {category: 'Jacket', brand: 'X', availableSizes: ['S', 'L', 'XL']},
  {category: 'Jacket', brand: 'Z', availableSizes: ['S']},
  {category: 'Pants', brand: 'X', availableSizes: ['S', 'M', 'L', 'XL']},
  {category: 'Pants', brand: 'Y', availableSizes: ['L', 'XL']},
  {category: 'Pants', brand: 'Z', availableSizes: ['S']},
  {category: 'Hat', brand: 'X', availableSizes: ['S', 'M', 'L']},
  {category: 'Skirt', brand: 'X', availableSizes: ['S', 'M', 'L', 'XL']},
  {category: 'Skirt', brand: 'Y', availableSizes: ['S', 'M', 'L']}
 ];

@Component({
  selector: 'app-array-filter',
  templateUrl: './array-filter.component.html',
  styleUrls: ['./array-filter.component.css']
})
@AddToShowCase('filter', 'array-filter.component', 'Array Filter')
export class ArrayFilterComponent implements OnInit {
  filterEntity: Product;
  filterType: MatTableFilter;
  displayedColumns: string[] = ['category', 'brand', 'availableSizes'];
  dataSource;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.filterEntity.availableSizes.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(size: string): void {
    const index = this.filterEntity.availableSizes.indexOf(size);

    if (index >= 0) {
      this.filterEntity.availableSizes.splice(index, 1);
    }
  }

  ngOnInit() {
    this.filterEntity = new Product();
    this.filterEntity.availableSizes = new Array<string>(); // DO NOT FORGET TO INIT THE ARRAY
    this.filterType = MatTableFilter.ANYWHERE;
    this.dataSource = new MatTableDataSource(PRODUCTS);
  }
}
