import { Directive, DoCheck, Input, ViewContainerRef, Host, Self, Optional } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatTableFilter } from './mat-table-filter.enum';
import { MatTableFilterService } from './mat-table-filter.service';
import * as LODASH from 'lodash';
@Directive({
  selector: '[matTableFilter]',
  exportAs: 'matTableFilter'
})
export class MatTableFilterDirective implements DoCheck {

  private _oldExampleEntity: any;

  @Input() exampleEntity: any;

  /**
   * in millis
   */
  private _table: any;
  @Input() debounceTime = 400;
  @Input() filterType: MatTableFilter = MatTableFilter.ANYWHERE;
  @Input() caseSensitive = false;

  private _exampleEntitySubject: BehaviorSubject<void>;


  constructor(private _filterService: MatTableFilterService,
              @Host() @Self() @Optional() private _injectedTable: MatTable<any>,
              private _viewContainerRef: ViewContainerRef) {
              this.initCdkTable();
              this.initDebounceSubject();
  }

  ngDoCheck(): void {
    if (this.isExampleEntityChanged()) {
      this._oldExampleEntity = this.toPlainJson(this.exampleEntity);
      this._exampleEntitySubject.next();
    }
  }

  private isExampleEntityChanged(): boolean {
    return !LODASH.isEqual(this._oldExampleEntity, this.toPlainJson(this.exampleEntity));
  }

  private toPlainJson(object: any): JSON {
    if (object) {
      return JSON.parse(JSON.stringify(object));
    } else {
      return undefined;
    }
  }

  private initCdkTable() {
    // tslint:disable-next-line:no-string-literal
    const table = this._viewContainerRef['_data'].componentView.component;
    if (table) {
      this._table = table;
    } else if (this._injectedTable) {
      this._table = this._injectedTable;
    } else {
      throw new Error('Unsupported Angular version');
    }
  }

  private initDebounceSubject() {
    this._exampleEntitySubject = new BehaviorSubject<void>(null);
    this._exampleEntitySubject.pipe(
     debounceTime(this.debounceTime))
     .subscribe(_ => {
       this.updateFilterPredicate();
     });
  }

  private updateFilterPredicate() {
    const matDataSource = this.getMatDataSource();
    if (matDataSource) {
      const _this = this;
      matDataSource.filterPredicate = (data): boolean => {
        return _this._filterService.filterPredicate(_this.exampleEntity, data, _this.filterType, _this.caseSensitive);
      }
      matDataSource.filter = this.exampleEntity as any;
    }

  }

  private getMatDataSource(): MatTableDataSource<any> {
    const matTable = this._table as MatTable<any>;
    return (matTable.dataSource as MatTableDataSource<any>);
  }

}
