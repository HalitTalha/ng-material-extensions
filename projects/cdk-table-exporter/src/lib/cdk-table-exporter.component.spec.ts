import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkTableExporterComponent } from './cdk-table-exporter.component';

describe('CdkTableExporterComponent', () => {
  let component: CdkTableExporterComponent;
  let fixture: ComponentFixture<CdkTableExporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkTableExporterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkTableExporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
