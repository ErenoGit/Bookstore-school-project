import { createReducer, on } from '@ngrx/store';
import { setLoaderState } from '../actions/global.actions';
import { GlobalStore } from '../_models/store-models';

const initialState: GlobalStore = {
    loaderActions: [],
    isLoaderActive: false
};

export const globalReducer = createReducer(initialState,
    on(setLoaderState, (state, { action, loaderState }) => {
        if(loaderState) {
            return {
                ...state,
                loaderActions: [
                    ...state.loaderActions,
                    action
                ],
                isLoaderActive: true
            }
        } else {
            const loaderActions = state.loaderActions.filter(loaderAction => loaderAction !== action);
            return {
                ...state,
                loaderActions,
                isLoaderActive: loaderActions.length > 0,
            }
        }
    }),
);
