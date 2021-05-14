import { TestBed } from '@angular/core/testing';

import { BooksListRequestService } from './books-list-request.service';

describe('BooksListRequestService', () => {
  let service: BooksListRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksListRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
