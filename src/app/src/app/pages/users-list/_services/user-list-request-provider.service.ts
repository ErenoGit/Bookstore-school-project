import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersList } from '../_models/users-list-model';

@Injectable({
  providedIn: 'root'
})
export class UserListRequestProviderService {

  constructor(private http: HttpClient) {
  }

  getUsersList(): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/getMembers');
  }

  removeUser(id: string): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/deleteMember', { memberId: id })
  }
}
