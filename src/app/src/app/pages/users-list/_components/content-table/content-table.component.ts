import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersList } from '../../_models/users-list-model';

@Component({
  selector: 'app-users-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss']
})
export class UsersListContentTableComponent implements OnInit, OnChanges {
  @Input() users: UsersList = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'address', 'phoneNumber'];
  dataSource: any = null;

  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit(): void {
    this.updateDataSource();
  }

  ngOnChanges(): void {
    this.updateDataSource();
  }

  updateDataSource() {
    if (this.users.length > 0) {
      this.dataSource = new MatTableDataSource(this.users);
    }
  }
}
