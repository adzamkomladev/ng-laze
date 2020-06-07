import { Component, OnInit } from '@angular/core';

import { SubmitState } from './interfaces/submit-state';
import { AuthFormData } from './interfaces/auth-form-data';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  submitState: SubmitState;

  constructor() {
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

  onSubmitForm(authFormData: AuthFormData): void {
    setTimeout(() => {
      this.submitState.hasError = true;
      this.submitState.errorMessage = 'Me y3 very okay paaa wae...';
      this.submitState.isSubmitting = false;
    }, 1500);

    console.log({ authFormData });
  }
}
