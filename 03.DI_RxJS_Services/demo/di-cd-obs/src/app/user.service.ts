import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // import at highest level
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');

    // return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
  }
}

// export class UserServiceMock {
//   constructor() {}

//   getUsers() {}
// }
