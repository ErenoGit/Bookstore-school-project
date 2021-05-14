import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserListRequestProviderService {

  constructor(private http: HttpClient) {
  }

  getUsersList(): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/getMembers')
      .pipe(delay(1000));
  }

  removeUser(id: string): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/deleteMember', { memberId: id })
      .pipe(delay(1000));
  }

  addUser(lastName:string, firstName:string, address:string, phoneNumber:string): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/addMember', { lastName, firstName, address, phoneNumber })
      .pipe(delay(1000));
  }
}
