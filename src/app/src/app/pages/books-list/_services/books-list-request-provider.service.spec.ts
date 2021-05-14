import { TestBed } from '@angular/core/testing';

import { BooksListRequestProviderService } from './books-list-request-provider.service';

describe('BooksListRequestProviderService', () => {
  let service: BooksListRequestProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksListRequestProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
