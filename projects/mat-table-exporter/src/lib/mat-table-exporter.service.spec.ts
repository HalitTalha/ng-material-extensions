import { TestBed } from '@angular/core/testing';

import { MatTableExporterService } from './mat-table-exporter.service';

describe('MatTableExporterService', () => {
  let service: MatTableExporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatTableExporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
