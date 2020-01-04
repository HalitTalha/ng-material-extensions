import { showCaseExamples } from './../add-to-showcase';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent extends BaseComponent implements OnInit {

  constructor(notifierService: NotifierService) {
    super(notifierService);
  }

  ngOnInit() {
    this.examples = showCaseExamples.get('filter');
    console.log(this.examples);
  }

}
