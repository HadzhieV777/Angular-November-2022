import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, catchError, filter, of, Subscription, tap } from 'rxjs';
import { LocalStorage } from '../core/injection-tokens';
import { IUser } from '../shared/interfaces';

// The only lifecycle hook in the services is OnDestroy

@Injectable()
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$
    .asObservable()
    .pipe(
      filter((val): val is IUser | null => val !== undefined)
    );

  user: IUser | null = null;

  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;
  // Represents a disposable resource, such as the execution of an Observable.
  // A Subscription has one important method,
  // unsubscribe, that takes no argument and just disposes the resource held by the subscription.

  constructor(
    private http: HttpClient // @Inject(LocalStorage) // private localStorage: Window['localStorage']
  ) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
    // try {
    //   const localStorageUser = this.localStorage.getItem('<USER>') || undefined;
    //   if (localStorageUser) {
    //     this.user = JSON.parse(localStorageUser);
    //   }
    // } catch {
    //   this.user = null;
    // }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string,
    tel?: string
  ) {
    return this.http
      .post<IUser>('/api/register', {
        username,
        email,
        password,
        rePassword,
        tel,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.http
      .post<any>('/api/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .post<void>('/api/logout', {})
      .pipe(tap((user) => this.user$$.next(null)));
    // this.localStorage.removeItem("<USER>")
  }

  getProfile() {
    return this.http
      .get<IUser>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)),
      catchError((err) => {
        this.user$$.next(null)
        return of(err); // [off]
      }));
  }
}
