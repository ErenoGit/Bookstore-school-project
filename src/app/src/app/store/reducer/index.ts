import { ActionReducerMap } from "@ngrx/store";
import { UsersListStore } from "../_models/store-models";
import { usersListReducer } from "./usersList.reducer";

export interface AppState {
    usersListReducer: UsersListStore
}

export const appReducers: ActionReducerMap<AppState> = {
    usersListReducer,
}