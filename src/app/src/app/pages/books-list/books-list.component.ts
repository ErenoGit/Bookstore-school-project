import { Component, OnInit } from '@angular/core';
import { BooksList } from './_models/books-list.models';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  booksListMock: BooksList = [
    {
      id: 1,
      title: "Testowa ksiazka",
      author: "Nieznany",
      isbn: 997420912331,
      year: 1999,
      category: "Comedy",
    },
    {
      id: 1,
      title: "Testowa ksiazka 2",
      author: "Nieznany",
      isbn: 997420912331,
      year: 1994,
      category: "Comedy",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
