import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksListRequestProviderService {

  constructor(private http: HttpClient) {
  }

  getBooksList(): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/getBooks');
  }

  deleteBook(id: number): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/deleteBook', { bookId: id })
  }

  addBook(isbn: string, title: string, author: string, publishYear: number, category: string): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/addBook', { isbn, title, author, publishYear, category});
  }
}
