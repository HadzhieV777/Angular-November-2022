import { Inject, Injectable } from '@angular/core';
import { LocalStorage } from '../core/injection-tokens';
import { IUser } from '../interfaces';

@Injectable()
export class UserService {
  user: IUser | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(
    @Inject(LocalStorage)
    private localStorage: Window['localStorage']
  ) {
    try {
      const localStorageUser = this.localStorage.getItem('<USER>') || undefined;

      if (localStorageUser) {
        this.user = JSON.parse(localStorageUser);
      }
    } catch {
      this.user = undefined;
    }
  }

  login(email: string, password: string): void {
    this.user = {
      themes: ['Theme1', 'Theme2'],
      posts: ['Post1', 'Post2'],
      _id: '122qqqaqrd41',
      tel: '08888222233',
      email,
      username: 'Pesho',
      password,
      created_at: '01.12.2022',
      updatedAt: '01.12.2022',
      __v: 3,
    };
    this.localStorage.setItem('<USER>', JSON.stringify(this.user));
  }

  logout(): void {
    this.user = undefined;
    this.localStorage.removeItem("<USER>")
  }
}
