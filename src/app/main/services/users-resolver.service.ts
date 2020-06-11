import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { UserService } from './user.service';

import { User } from 'src/app/core/interfaces/user';

@Injectable()
export class UsersResolverService implements Resolve<User[]> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<User[]> | Promise<User[]> | User[] {
    return this.userService.findAll();
  }
}
