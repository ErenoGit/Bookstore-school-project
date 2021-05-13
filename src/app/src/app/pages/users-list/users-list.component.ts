import { Component, OnInit } from '@angular/core';
import { UsersList } from './_models/users-list-model';
import { UserListRequestService } from './_services/user-list-request.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersListMock: UsersList = [
    {
      memberId: 1,
      lastName: "Testowy",
      firstName: "Marek",
      address: 'dupa',
      phoneNumber: 23423452
    },
  ];

  constructor(
    private userListRequestService: UserListRequestService
  ) { }

  ngOnInit(): void {
    this.userListRequestService.getUserList();
  }

}