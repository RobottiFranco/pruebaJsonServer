import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  url = 'http://localhost:3000/users';

  async getUsers() {
    return (await (await fetch(this.url)).json()) ?? [];
  }

  async postUser(user: User) {
    return await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
