import { TestBed } from '@angular/core/testing';

import { ApexchartService } from './apexchart.service';

describe('ApexchartService', () => {
  let service: ApexchartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApexchartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
