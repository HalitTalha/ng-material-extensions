import { Directive, DoCheck, Input } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DeepDiffService } from './deep-diff.service';
import { MatTableFilter } from './mat-table-filter.enum';
import { MatTableFilterService } from './mat-table-filter.service';

@Directive({
  selector: '[matTableFilter]'
})
export class MatTableFilterDirective implements DoCheck {

  private _oldExampleEntity: any;

  private _exampleEntity: any;

  @Input()
  set exampleEntity(value: any) {
    this._oldExampleEntity = this._exampleEntity;
    this._exampleEntity = value;
  }
  /**
   * in millis
   */
  @Input() debounceTime = 400;
  @Input() filterType: MatTableFilter = MatTableFilter.ANYWHERE;
  @Input() matTableFilter: any;
  @Input() caseSensitive = false;

  private _exampleEntitySubject: BehaviorSubject<void>;


  constructor(private filterService: MatTableFilterService, private _deepDiffService: DeepDiffService) {
    this.initDebounceSubject();
  }

  ngDoCheck(): void {
    if (this._deepDiffService.isDifferent(this._oldExampleEntity, this._exampleEntity)) {
        this._exampleEntitySubject.next();
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
        return _this.filterService.filterPredicate(_this._exampleEntity, data, _this.filterType, _this.caseSensitive);
      }
      matDataSource.filter = this._exampleEntity as any;
    }

  }

  private getMatDataSource(): MatTableDataSource<any> {
    const matTable = this.matTableFilter as MatTable<any>;
    if (matTable.dataSource && !(matTable.dataSource instanceof MatTableDataSource)) {
      throw new Error('Use MatTableDataSource, example: dataSource = new MatTableDataSource(dataArray)');
    }
    return (matTable.dataSource as MatTableDataSource<any>);
  }

}
