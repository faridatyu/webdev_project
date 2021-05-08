import { TestBed } from '@angular/core/testing';

import { SubheadingService } from './subheading.service';

describe('SubheadingService', () => {
  let service: SubheadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubheadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
