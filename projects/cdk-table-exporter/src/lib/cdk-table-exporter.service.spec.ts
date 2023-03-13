import { TestBed } from '@angular/core/testing';

import { CdkTableExporterService } from './cdk-table-exporter.service';

describe('CdkTableExporterService', () => {
  let service: CdkTableExporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdkTableExporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
