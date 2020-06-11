import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../../core/services/auth.service';

import { User } from '../../core/interfaces/user';

@Injectable()
export class CurrentUserResolverService implements Resolve<User> {
  constructor(private auth: AuthService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<User> | Promise<User> | User {
    return this.auth.authenticatedUser();
  }
}
