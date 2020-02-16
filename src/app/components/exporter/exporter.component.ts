
import { BaseComponent } from './../base-component';
import { Component, OnInit } from '@angular/core';
import { showCaseExamples } from '../add-to-showcase';

@Component({
  selector: 'app-exporter',
  templateUrl: './exporter.component.html',
  styleUrls: ['./exporter.component.css']
})
export class ExporterComponent extends BaseComponent implements OnInit {

  ngOnInit() {
    this.examples = showCaseExamples.get('exporter');
  }

}
