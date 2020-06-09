import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { AuthCredentials } from '../interfaces/auth-credentials';
import { AuthToken } from '../interfaces/auth-token';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authBaseUrl: string;

  constructor(private http: HttpClient) {
    this.authBaseUrl = `${environment.apiUrl}/auth`;
  }

  signUp(authCredentials: AuthCredentials) {
    const signUpUrl = `${this.authBaseUrl}/sign-up`;

    return this.http.post(signUpUrl, authCredentials);
  }

  signIn(authCredentials: AuthCredentials) {
    const signInUrl = `${this.authBaseUrl}/sign-in`;

    return this.http.post<AuthToken>(signInUrl, authCredentials).pipe(
      tap((response) => {
        const authToken = JSON.stringify(response);

        localStorage.setItem('authToken', authToken);
      }),
    );
  }

  authenticatedUser(): Observable<User> {
    const meUrl = `${this.authBaseUrl}/me`;

    return this.http.get<User>(meUrl).pipe(tap((d) => console.log({ d })));
  }

  isLoggedIn(): Observable<boolean> {
    return this.authenticatedUser().pipe(map((user) => !!user));
  }

  getAuthToken(): AuthToken {
    return JSON.parse(localStorage.getItem('authToken')) as AuthToken;
  }
}
