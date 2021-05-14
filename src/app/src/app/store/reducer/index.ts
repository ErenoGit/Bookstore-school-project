import { ActionReducerMap } from "@ngrx/store";
import { BooksListStore, LoansListStore, UsersListStore } from "../_models/store-models";
import { booksListReducer } from "./booksList.reducer";
import { loansListReducer } from "./loadsList.redicer";
import { usersListReducer } from "./usersList.reducer";

export interface AppState {
    usersListReducer: UsersListStore
    booksListReducer: BooksListStore
    loansListReducer: LoansListStore,
}

export const appReducers: ActionReducerMap<AppState> = {
    usersListReducer,
    booksListReducer,
    loansListReducer
}