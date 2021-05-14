import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/reducer';
import { BooksList } from './_models/books-list.models';
import { BooksListRequestService } from './_services/books-list-request.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  booksList: BooksList = [];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store
      .pipe(select('booksListReducer'))
      .subscribe(state => {
        this.booksList = state.booksList;
      });
  }

}
