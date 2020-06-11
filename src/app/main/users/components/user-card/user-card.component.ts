import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from 'src/app/core/interfaces/user';

import { CardAction } from '../../types/card-action.type';

@Component({
  selector: 'laze-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  @Input() currentUser: User;
  @Input() set hasSubmitted(value: boolean) {
      this.showLoader = !value && this.isSubmitting;
      this.isSubmitting = this.showLoader;
  }

  @Output() cardAction: EventEmitter<CardAction>;

  profileImageUrl: string;
  isSubmitting: boolean;
  showLoader: boolean;

  get isAdmin(): boolean {
    return this.currentUser?.role === 'ADMIN';
  }

  get isOwner(): boolean {
    return this.currentUser?.id === this.user?.id;
  }

  constructor() {
    this.cardAction = new EventEmitter<CardAction>();
    this.profileImageUrl =
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png';
  }

  ngOnInit(): void {
    this.profileImageUrl = this.user?.profileImageUrl ?? this.profileImageUrl;
  }

  onAction(userCardAction: CardAction): void {
    this.isSubmitting = this.showLoader = true;
    this.cardAction.emit(userCardAction);
  }
}
