import { ActionReducerMap } from "@ngrx/store";
import { BooksListStore, GlobalStore, LoansListStore, UsersListStore } from "../_models/store-models";
import { booksListReducer } from "./booksList.reducer";
import { globalReducer } from "./global.reducer";
import { loansListReducer } from "./loadsList.redicer";
import { usersListReducer } from "./usersList.reducer";

export interface AppState {
    usersListReducer: UsersListStore
    booksListReducer: BooksListStore
    loansListReducer: LoansListStore,
    globalReducer: GlobalStore,
}

export const appReducers: ActionReducerMap<AppState> = {
    usersListReducer,
    booksListReducer,
    loansListReducer,
    globalReducer
}