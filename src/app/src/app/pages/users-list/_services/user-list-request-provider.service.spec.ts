import { TestBed } from '@angular/core/testing';

import { UserListRequestProviderService } from './user-list-request-provider.service';

describe('UserListRequestProviderService', () => {
  let service: UserListRequestProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListRequestProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
