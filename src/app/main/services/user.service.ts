import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { User } from 'src/app/core/interfaces/user';

@Injectable()
export class UserService {
  private readonly usersBaseUrl: string;

  constructor(private http: HttpClient) {
    this.usersBaseUrl = `${environment.apiUrl}/users`;
  }

  findAll(): Observable<User[]> {
    return this.http
      .get<User[]>(this.usersBaseUrl)
      .pipe(tap((u) => console.log({ u })));
  }
}
