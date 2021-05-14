import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setBooksListData } from '../../../store/actions/booksList.actions';
import { AppState } from '../../../store/reducer';
import { BooksListRequestProviderService } from './books-list-request-provider.service';

@Injectable({
  providedIn: 'root'
})
export class BooksListRequestService {

  constructor(
    private booksListRequestProviderService: BooksListRequestProviderService,
    private readonly store: Store<AppState>,
  ) { }

  getBooksList(): void {
    this.booksListRequestProviderService.getBooksList()
      .subscribe(booksList => {
        this.store.dispatch(setBooksListData({ booksList }));
      });
  }

  deleteBook(id: number) {
    this.booksListRequestProviderService.deleteBook(id)
      .subscribe({
        next: (res) => {

        },
        error: () => {

        }
      });
  }

  addBook(isbn: string, title: string, author: string, publishYear: number, category: string) {
    this.booksListRequestProviderService.addBook(isbn, title, author, publishYear, category)
      .subscribe({
        next: (res) => {

        },
        error: () => {

        }
      });
  }
}
