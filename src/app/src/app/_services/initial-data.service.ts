import { Injectable } from '@angular/core';
import { BooksListRequestService } from '../pages/books-list/_services/books-list-request.service';
import { LoansListRequestService } from '../pages/loans-list/_services/loans-list-request.service';
import { UserListRequestService } from '../pages/users-list/_services/user-list-request.service';

@Injectable({
  providedIn: 'root'
})
export class InitialDataService {

  constructor(
    private userListRequestService: UserListRequestService,
    private booksListRequestService: BooksListRequestService,
    private loansListRequestService: LoansListRequestService,
  ) { }

  loadAppData() {
    this.userListRequestService.getUserList()
    this.booksListRequestService.getBooksList()
    this.loansListRequestService.getLoansList()
  }
}
