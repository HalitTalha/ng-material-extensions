import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableExporterComponent } from './mat-table-exporter.component';

describe('MatTableExporterComponent', () => {
  let component: MatTableExporterComponent;
  let fixture: ComponentFixture<MatTableExporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTableExporterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTableExporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
