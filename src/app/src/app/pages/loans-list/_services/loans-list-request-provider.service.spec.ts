import { TestBed } from '@angular/core/testing';

import { LoansListRequestProviderService } from './loans-list-request-provider.service';

describe('LoansListRequestProviderService', () => {
  let service: LoansListRequestProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoansListRequestProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
