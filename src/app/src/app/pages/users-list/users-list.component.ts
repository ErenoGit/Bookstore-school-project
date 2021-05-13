import { Component, OnInit } from '@angular/core';
import { UsersList } from './_models/users-list-model';

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

  constructor() { }

  ngOnInit(): void {
  }

}
