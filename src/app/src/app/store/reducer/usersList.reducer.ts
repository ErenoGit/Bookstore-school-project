import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { setUsersListData } from '../actions/usersList.actions';
import { UsersListStore } from '../_models/store-models';

const initialState: UsersListStore = {
    usersList: []
};

export const usersListReducer = createReducer(initialState,
    on(setUsersListData, (state, { usersList }) => ({...state, usersList })),
);
