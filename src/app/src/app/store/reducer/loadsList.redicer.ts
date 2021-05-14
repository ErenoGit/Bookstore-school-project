import { createReducer, on } from '@ngrx/store';
import { setLoansListData } from '../actions/loansList.actions';
import { LoansListStore } from '../_models/store-models';

const initialState: LoansListStore = {
    loansList: []
};

export const loansListReducer = createReducer(initialState,
    on(setLoansListData, (state, { loansList }) => ({...state, loansList })),
);
