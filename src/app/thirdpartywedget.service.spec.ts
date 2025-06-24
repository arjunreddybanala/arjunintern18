import { TestBed } from '@angular/core/testing';

import { ThirdpartywedgetService } from './thirdpartywedget.service';

describe('ThirdpartywedgetService', () => {
  let service: ThirdpartywedgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdpartywedgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
