import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UserListRequestMapperService } from 'src/src/app/pages/users-list/_services/user-list-request-mapper.service';
import { setLoaderState } from '../../../store/actions/global.actions';
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
    this.setLoader(true, "getUser");
    this.userListRequestProviderService.getUsersList()
      .subscribe({
        next: (usersList) => {
          this.store.dispatch(setUsersListData({ usersList }));

          this.setLoader(false, "getUser");
        },
        error: () => {
          this.setLoader(false, "getUser");
        }
      })
  }

  removeUser(id: string) {
    this.setLoader(true, "addUser");
    this.userListRequestProviderService.removeUser(id)
      .subscribe({
        next: (res) => {
          this.setLoader(false, "addUser");
        },
        error: () => {
          this.setLoader(false, "addUser");
        }
      });
  }

  addUser(lastName:string, firstName:string, address:string, phoneNumber:string) {
    this.setLoader(true, "addUser");
    this.userListRequestProviderService.addUser(lastName, firstName, address, phoneNumber)
      .subscribe({
        next: (res) => {
          this.setLoader(false, "addUser");
        },
        error: () => {
          this.setLoader(false, "addUser");
        }
      });
  }

  private setLoader(loaderState: boolean, action: string) {
    this.store.dispatch(setLoaderState({
      loaderState,
      action
    }));
  }
}
