import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../services/user.service';

import { User } from 'src/app/core/interfaces/user';

import { CardAction } from './types/card-action.type';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  currentUser: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.users = this.route.snapshot.data['users'];
    this.currentUser = this.route.snapshot.data['currentUser'];
  }

  onCardAction(cardAction: CardAction, user: User): void {
    console.log({ cardAction, user });
  }
}
