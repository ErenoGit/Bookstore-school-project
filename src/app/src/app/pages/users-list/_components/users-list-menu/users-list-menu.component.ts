import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserModalComponent } from '../add-user-modal/add-user-modal.component';
import { RemoveUserModalComponent } from '../remove-user-modal/remove-user-modal.component';

@Component({
  selector: 'app-users-list-menu',
  templateUrl: './users-list-menu.component.html',
  styleUrls: ['./users-list-menu.component.scss']
})
export class UsersListMenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
  }

  openAddUserModal() {
    this.dialog.open(AddUserModalComponent);
  }

  openRemoveUserModal() {
    this.dialog.open(RemoveUserModalComponent);
  }

}
