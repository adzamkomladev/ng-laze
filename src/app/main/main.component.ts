import { Component, OnInit } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isLoading: boolean;

  constructor(private router: Router) {
    this.isLoading = false;

    this.router.events.subscribe((routerEvent: Event) =>
      this.checkRouterEvent(routerEvent),
    );
  }

  ngOnInit(): void {}

  private checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.isLoading = true;
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
