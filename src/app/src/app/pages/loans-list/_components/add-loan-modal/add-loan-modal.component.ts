import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/src/app/store/reducer';
import { Book, BooksList } from '../../../books-list/_models/books-list.models';
import { UsersList } from '../../../users-list/_models/users-list-model';
import { LoansListRequestService } from '../../_services/loans-list-request.service';

@Component({
  selector: 'app-add-loan-modal',
  templateUrl: './add-loan-modal.component.html',
  styleUrls: ['./add-loan-modal.component.scss']
})
export class AddLoanModalComponent implements OnInit {
  usersList: UsersList = [];
  booksList: BooksList = [];

  reader = new FormControl();
  book = new FormControl();
  date = new FormControl(new Date());

  constructor(
    private store: Store<AppState>,
    private loansListRequestService: LoansListRequestService
  ) { }

  ngOnInit(): void {
    this.store
      .pipe(select('usersListReducer'))
      .subscribe(state => {
        this.usersList = state.usersList;
      });

    this.store
      .pipe(select('booksListReducer'))
      .subscribe(state => {
        this.booksList = state.booksList.filter((book: Book) => !book.loanId);
      });
  }

  onSubmitClick() {
    if (this.reader.value && this.book.value && this.date.value) {
      this.loansListRequestService.addLoan(this.reader.value, this.book.value, new Date(), this.date.value);
    } 
  }
}
