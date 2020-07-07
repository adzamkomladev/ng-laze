import { Component, OnInit } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../core/services/auth.service';

import { User } from '../core/interfaces/user';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isLoading: boolean;
  user: Observable<User>;
  isCollapsed: boolean;

  constructor(private router: Router, private authService: AuthService) {
    this.isLoading = false;
    this.isCollapsed = true;

    this.router.events.subscribe((routerEvent: Event) =>
      this.checkRouterEvent(routerEvent),
    );
  }

  ngOnInit(): void {
    this.user = this.authService.authenticatedUser();
  }

  private checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.isLoading = this.isCollapsed = true;
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.isLoading = false;
    }
  }

  onSignOut(): void {}
}
