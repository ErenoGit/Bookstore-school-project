import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/src/app/store/reducer';
import { BooksList } from '../../_models/books-list.models';
import { BooksListRequestService } from '../../_services/books-list-request.service';

@Component({
  selector: 'app-remove-book-modal',
  templateUrl: './remove-book-modal.component.html',
  styleUrls: ['./remove-book-modal.component.scss']
})
export class RemoveBookModalComponent implements OnInit {
  booksList: BooksList = [];
  bookToDelete = new FormControl();

  constructor(
    private store: Store<AppState>,
    private bookListRequestService: BooksListRequestService
  ) { }

  ngOnInit(): void {
    this.store
      .pipe(select('booksListReducer'))
      .subscribe(state => {
        this.booksList = state.booksList;
      });
  }
  
  onSubmitClick(): void {
    if (this.bookToDelete.value) {
      const result = this.booksList.find((book: any) => book.title === this.bookToDelete.value);
      if(result) {
        this.bookListRequestService.deleteBook(result.bookId);
      }
    }
  }
}
