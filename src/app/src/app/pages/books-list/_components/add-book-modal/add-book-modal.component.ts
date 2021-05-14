import { Component, OnInit } from '@angular/core';
import { BooksListRequestService } from '../../_services/books-list-request.service';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.scss']
})
export class AddBookModalComponent implements OnInit {
  title: string = '';
  author: string = '';
  publishYear: number = 2021;
  isbn: string = '';
  category: string = '';

  errorMessage = '';
  constructor(
    private booksListRequestService: BooksListRequestService
  ) {

  }

  ngOnInit(): void {

  }

  onSubmitClick() {
    if (this.title.length > 0 && this.author.length > 0 && this.isbn.length > 0 && this.category.length > 0 && this.publishYear > 0 && this.publishYear < 2022) {
      this.booksListRequestService.addBook(this.isbn, this.title, this.author, this.publishYear, this.category);
      this.booksListRequestService.getBooksList();
    } else {
      this.errorMessage = "Wprowadź dane!"
    }
  }
}
