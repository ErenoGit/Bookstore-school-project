import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/src/app/store/reducer';
import { UsersList } from '../../_models/users-list-model';
import { UserListRequestService } from '../../_services/user-list-request.service';

@Component({
  selector: 'app-remove-user-modal',
  templateUrl: './remove-user-modal.component.html',
  styleUrls: ['./remove-user-modal.component.scss']
})
export class RemoveUserModalComponent implements OnInit {
  usersList: UsersList = [];
  userToDelete = new FormControl();

  constructor(
    private store: Store<AppState>,
    private userListRequestService: UserListRequestService
  ) { }

  ngOnInit(): void {
    this.store
      .pipe(select('usersListReducer'))
      .subscribe(state => {
        this.usersList = state.usersList;
      });
  }
  
  onSubmitClick(): void {
    if (this.userToDelete.value) {
      const result = this.usersList.find(user => user.memberId === this.userToDelete.value);
      if(result) {
        this.userListRequestService.removeUser(this.userToDelete.value);
      }
    }
  }
}
