import { TestBed } from '@angular/core/testing';

import { UserListRequestMapperService } from './user-list-request-mapper.service';

describe('UserListRequestMapperService', () => {
  let service: UserListRequestMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListRequestMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
