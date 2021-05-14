import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UserListRequestMapperService } from 'src/src/app/pages/users-list/_services/user-list-request-mapper.service';
import { setUsersListData } from '../../../store/actions/usersList.actions';
import { AppState } from '../../../store/reducer';
import { UserListRequestProviderService } from './user-list-request-provider.service';

@Injectable({
  providedIn: 'root'
})
export class UserListRequestService {

  constructor(
    private userListRequestProviderService: UserListRequestProviderService,
    private readonly store: Store<AppState>,
  ) { }

  getUserList(): void {
    this.userListRequestProviderService.getUsersList()
      .subscribe(usersList => {
        this.store.dispatch(setUsersListData({ usersList }));
      });
  }

  removeUser(id: string) {
    this.userListRequestProviderService.removeUser(id)
      .subscribe({
        next: (res) => {

        },
        error: () => {

        }
      });
  }

  addUser(lastName:string, firstName:string, address:string, phoneNumber:string) {
    this.userListRequestProviderService.addUser(lastName, firstName, address, phoneNumber)
      .subscribe({
        next: (res) => {

        },
        error: () => {

        }
      });
  }
}
