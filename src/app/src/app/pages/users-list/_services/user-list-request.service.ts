import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setUsersListData } from '../../../store/actions/usersList.actions';
import { UserListRequestProviderService } from './user-list-request-provider.service';

@Injectable({
  providedIn: 'root'
})
export class UserListRequestService {

  constructor(
    private userListRequestProviderService: UserListRequestProviderService,
    private readonly store: Store
  ) { }

  getUserList(): void {
    this.userListRequestProviderService.getUsersList()
      .subscribe(userList => {
        console.log(userList);
        this.store.dispatch(setUsersListData(userList));
      });
  }
}
