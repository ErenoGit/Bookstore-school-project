import { createAction, props } from '@ngrx/store';
import { UsersList } from '../../pages/users-list/_models/users-list-model';

export const setUsersListData = createAction('setUsersListData', props<{ usersList: UsersList }>());
