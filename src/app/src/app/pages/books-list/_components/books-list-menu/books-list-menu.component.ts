import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBookModalComponent } from '../add-book-modal/add-book-modal.component';
import { RemoveBookModalComponent } from '../remove-book-modal/remove-book-modal.component';

@Component({
  selector: 'app-books-list-menu',
  templateUrl: './books-list-menu.component.html',
  styleUrls: ['./books-list-menu.component.scss']
})
export class BooksListMenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
  }

  openAddBookModal() {
    this.dialog.open(AddBookModalComponent);
  }

  openRemoveBookModal() {
    this.dialog.open(RemoveBookModalComponent);
  }

}
