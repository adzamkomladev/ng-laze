import { Component, OnInit } from '@angular/core';

import { tap, catchError } from 'rxjs/operators';

import { AuthService } from '../core/services/auth.service';

import { SubmitState } from './interfaces/submit-state';
import { AuthCredentials } from '../core/interfaces/auth-credentials';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  submitState: SubmitState;

  constructor(private auth: AuthService) {
    this.submitState = {
      isSignIn: true,
      isSubmitting: false,
      hasSubmitted: false,
      hasError: false,
    };
  }

  ngOnInit(): void {}

  onSubmitStateChange(submitState: SubmitState): void {
    this.submitState = { ...submitState };
  }

  onSubmitForm(authCredentials: AuthCredentials): void {
    console.log(this.submitState);
    this.submitState.isSignIn
      ? this.signIn(authCredentials)
      : this.signUp(authCredentials);
  }

  private signUp(authCredentials: AuthCredentials): void {
    this.auth
      .signUp({ ...authCredentials })
      .pipe(
        tap((_) => {
          this.submitState = {
            isSignIn: this.submitState.isSignIn,
            isSubmitting: false,
            hasSubmitted: true,
            hasError: false,
          };

          console.log('Successful sin up');
        }),
        catchError((error) => {
          this.submitState = {
            isSignIn: this.submitState.isSignIn,
            isSubmitting: false,
            hasSubmitted: false,
            hasError: true,
            errorMessage: error.message,
          };

          return error;
        }),
      )
      .subscribe();
  }

  private signIn(authCredentials: AuthCredentials): void {
    this.auth
      .signIn({ ...authCredentials })
      .pipe(
        tap(
          (_) =>
            (this.submitState = {
              isSignIn: this.submitState.isSignIn,
              isSubmitting: false,
              hasSubmitted: true,
              hasError: false,
            }),
        ),
        catchError((error) => {
          this.submitState = {
            isSignIn: this.submitState.isSignIn,
            isSubmitting: false,
            hasSubmitted: false,
            hasError: true,
            errorMessage: error.message,
          };

          return error;
        }),
      )
      .subscribe();
  }
}
