import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setBooksListData } from '../../../store/actions/booksList.actions';
import { setLoaderState } from '../../../store/actions/global.actions';
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
    this.store.dispatch(setLoaderState({
      loaderState: true,
      action: "getBooks"
    }));

    this.booksListRequestProviderService.getBooksList()
      .subscribe({
        next: (booksList) => {
          this.store.dispatch(setBooksListData({ booksList }));
          this.store.dispatch(setLoaderState({
            loaderState: false,
            action: "getBooks"
          }));
        },
        error: () => {
          this.store.dispatch(setLoaderState({
            loaderState: false,
            action: "getBooks"
          }));
        }
      })
  }

  deleteBook(id: number) {
    this.store.dispatch(setLoaderState({
      loaderState: true,
      action: "deleteBook"
    }));
    this.booksListRequestProviderService.deleteBook(id)
      .subscribe({
        next: (res) => {
          this.store.dispatch(setLoaderState({
            loaderState: false,
            action: "deleteBook"
          }));
        },
        error: () => {
          this.store.dispatch(setLoaderState({
            loaderState: false,
            action: "deleteBook"
          }));
        }
      });
  }

  addBook(isbn: string, title: string, author: string, publishYear: number, category: string) {
    this.store.dispatch(setLoaderState({
      loaderState: true,
      action: "addBook"
    }));
    this.booksListRequestProviderService.addBook(isbn, title, author, publishYear, category)
      .subscribe({
        next: (res) => {
          this.store.dispatch(setLoaderState({
            loaderState: false,
            action: "addBook"
          }));
        },
        error: () => {
          this.store.dispatch(setLoaderState({
            loaderState: false,
            action: "addBook"
          }));
        }
      });
  }
}
