import { showCaseExamples } from './../add-to-showcase';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  standalone: false,
})
export class FilterComponent extends BaseComponent implements OnInit {

  ngOnInit() {
    this.examples = showCaseExamples.get('filter');
  }

}
