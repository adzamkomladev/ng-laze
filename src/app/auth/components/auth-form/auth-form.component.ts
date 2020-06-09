import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SubmitState } from '../../interfaces/submit-state';
import { AuthCredentials } from 'src/app/core/interfaces/auth-credentials';

@Component({
  selector: 'laze-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
  @Input() submitState: SubmitState;

  @Output() submitStateChange: EventEmitter<SubmitState>;
  @Output() submitForm: EventEmitter<AuthCredentials>;

  isPasswordVisible: boolean;
  form: FormGroup;

  get passwordInputType(): string {
    return this.isPasswordVisible ? 'text' : 'password';
  }

  get passwordIconType(): string {
    return this.isPasswordVisible ? 'eye-invisible' : 'eye';
  }

  get isSubmitLoading(): boolean {
    const { isSubmitting, hasSubmitted, hasError } = this.submitState;

    return isSubmitting && !hasSubmitted && !hasError;
  }

  get hasRegistered(): boolean {
    const { isSignIn, hasSubmitted, hasError } = this.submitState;

    return !isSignIn && hasSubmitted && !hasError;
  }

  constructor(private fb: FormBuilder) {
    this.isPasswordVisible = false;
    this.submitStateChange = new EventEmitter<SubmitState>();
    this.submitForm = new EventEmitter<AuthCredentials>();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  onTogglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onToggleSignIn(): void {
    if (this.isSubmitLoading) {
      return;
    }

    const submitState = {
      isSignIn: !this.submitState.isSignIn,
      isSubmitting: false,
      hasSubmitted: false,
      hasError: false,
    };

    this.submitStateChange.emit(submitState);

    if (!submitState.isSignIn) {
      this.form.addControl(
        'role',
        this.fb.control('STUDENT', [Validators.required]),
      );
    } else {
      this.form.removeControl('role');
    }
  }

  onSubmit(): void {
    const submitState = {
      isSignIn: this.submitState.isSignIn,
      isSubmitting: true,
      hasSubmitted: false,
      hasError: false,
    };

    this.submitStateChange.emit(submitState);

    this.submitForm.emit({ ...this.form.value } as AuthCredentials);
  }

  private initializeForm(): void {
    this.form = this.fb.group(
      {
        username: [
          null,
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20),
          ],
        ],
        password: [
          null,
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
            Validators.pattern(
              /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            ),
          ],
        ],
        remember: [false],
      },
      { updateOn: 'blur' },
    );
  }
}
