import { ActionReducerMap } from "@ngrx/store";
import { BooksListStore, UsersListStore } from "../_models/store-models";
import { booksListReducer } from "./booksList.reducer";
import { usersListReducer } from "./usersList.reducer";

export interface AppState {
    usersListReducer: UsersListStore
    booksListReducer: BooksListStore
}

export const appReducers: ActionReducerMap<AppState> = {
    usersListReducer,
    booksListReducer
}