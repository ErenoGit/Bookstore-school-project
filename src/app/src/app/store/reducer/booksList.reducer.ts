import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { setBooksListData } from '../actions/booksList.actions';
import { BooksListStore } from '../_models/store-models';

const initialState: BooksListStore = {
    booksList: []
};

export const booksListReducer = createReducer(initialState,
    on(setBooksListData, (state, { booksList }) => ({...state, booksList })),
);
