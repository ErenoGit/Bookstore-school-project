import { TestBed } from '@angular/core/testing';

import { LoansListRequestService } from './loans-list-request.service';

describe('LoansListRequestService', () => {
  let service: LoansListRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoansListRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
