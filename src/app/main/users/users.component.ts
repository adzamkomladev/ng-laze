import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { catchError, finalize, tap } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd';

import { UserService } from '../services/user.service';

import { User } from 'src/app/core/interfaces/user';
import { ClientError } from '../../core/interfaces/client-error';

import { CardAction } from './types/card-action.type';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  usersToDisplay: User[];
  currentUser: User;
  hasSubmitted: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nzMessageService: NzMessageService,
    private userService: UserService,
  ) {
    this.hasSubmitted = false;
  }

  ngOnInit(): void {
    this.users = this.route.snapshot.data['users'];
    this.currentUser = this.route.snapshot.data['currentUser'];
    this.onPageIndexChange(1);
  }

  onPageIndexChange(page: number): void {
    const numberPerPage = 10;

    const startIndex = numberPerPage * (page - 1);
    const endIndex = numberPerPage * page;

    this.usersToDisplay = this.users.slice(startIndex, endIndex);
  }

  onCardAction(cardAction: CardAction, user: User): void {
    this.hasSubmitted = false;

    switch (cardAction) {
      case 'EDIT':
      case 'VIEW':
        this.viewOrEditUser(user);
        break;
      case 'APPROVE':
        this.approveUser(user);
        break;
      case 'MAKE_ADMIN':
        this.makeUserAdmin(user);
        break;
      default:
        break;
    }
  }

  private viewOrEditUser(user: User): void {
    this.router.navigate(['main', 'user', user.id]);
  }

  private makeUserAdmin(user: User): void {
    const updateData: Partial<User> = { id: user.id, role: 'ADMIN' };

    this.userService
      .update(updateData)
      .pipe(
        tap((_) => this.nzMessageService.success('User is now an ADMIN!')),
        catchError((error: ClientError) => {
          this.nzMessageService.error(error.message);

          return error as any;
        }),
        finalize(() => (this.hasSubmitted = true)),
      )
      .subscribe();
  }

  private approveUser(user: User): void {
    const updateData: Partial<User> = {
      id: user.id,
      approved: !user?.approved,
    };

    this.userService
      .update(updateData)
      .pipe(
        tap((_) => this.nzMessageService.success('User has been approved!')),
        catchError((error: ClientError) => {
          this.nzMessageService.error(error.message);

          return error as any;
        }),
        finalize(() => (this.hasSubmitted = true)),
      )
      .subscribe();
  }
}
