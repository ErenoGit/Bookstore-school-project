import { TestBed } from '@angular/core/testing';

import { UserListRequestService } from './user-list-request.service';

describe('UserListRequestService', () => {
  let service: UserListRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
