import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/reducer';
import { UsersList } from './_models/users-list-model';
import { UserListRequestService } from './_services/user-list-request.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList: UsersList = [];

  constructor(
    private userListRequestService: UserListRequestService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.userListRequestService.getUserList();

    this.store
      .pipe(select('usersListReducer'))
      .subscribe(state => {
        this.usersList = state.usersList;
      });
  }

}