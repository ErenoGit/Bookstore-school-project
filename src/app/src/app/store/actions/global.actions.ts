import { createAction, props } from '@ngrx/store';

export const setLoaderState = createAction('setLoaderState', props<{ loaderState: boolean, action: string }>());
