import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoansListRequestProviderService {

  constructor(private http: HttpClient) {
  }
  
  getLoansList(): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/getLoans');
  }

  removeLoan(id: number): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/deleteLoan', { loanId: id })
  }

  addLoan(userId: number, bookId: number, loanDate: Date, dueDate: Date): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/addLoan', { userId, bookId, loanDate, dueDate });
  }
}
