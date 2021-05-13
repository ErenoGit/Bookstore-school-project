import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BooksList } from '../../_models/books-list.models';

@Component({
  selector: 'app-books-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss']
})
export class ContentTableComponent implements OnInit {
  @Input() books: BooksList = [];
  displayedColumns: string[] = ['title', 'author', 'isbn', 'year'];
  dataSource: any = null;

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.books);
  }

}
