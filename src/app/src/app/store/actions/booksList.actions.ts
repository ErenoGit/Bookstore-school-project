import { createAction, props } from '@ngrx/store';
import { BooksList } from '../../pages/books-list/_models/books-list.models';

export const setBooksListData = createAction('setBooksListData', props<{ booksList: BooksList }>());
