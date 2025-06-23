import { TestBed } from '@angular/core/testing';

import { ApiapexchartService } from './apiapexchart.service';

describe('ApiapexchartService', () => {
  let service: ApiapexchartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiapexchartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
