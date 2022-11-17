import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUser } from '../shared/interfaces/index';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  loadUsers() {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}
