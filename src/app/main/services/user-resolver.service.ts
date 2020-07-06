import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';

import { UserService } from './user.service';

import { User } from '../../core/interfaces/user';

@Injectable()
export class UserResolverService implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<User> | Promise<User> | User {
    const id = Number(route.paramMap.get('id'));

    return this.userService.findOneById(id);
  }
}
