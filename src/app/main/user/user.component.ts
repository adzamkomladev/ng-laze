import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { concatMap, tap, catchError } from 'rxjs/operators';

import { FilestackService } from '@filestack/angular';
import { InputFile } from 'filestack-js';

import { environment } from 'src/environments/environment';

import { UserService } from '../services/user.service';

import { User } from 'src/app/core/interfaces/user';
import { EditUser } from './interfaces/edit-user';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  isSaveLoading: boolean;
  errorMessage?: string;
  currentUser: User;

  constructor(
    private route: ActivatedRoute,
    private filestackService: FilestackService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.route.snapshot.data['currentUser'];

    this.filestackService.init(environment.filestackApiKey);
  }

  onSubmit(formData: EditUser) {
    this.errorMessage = null;
    this.isSaveLoading = true;

    console.log({ formData });

    const updateData: Partial<User> = {
      ...formData,
      id: this.currentUser.id,
    };

    let submitStream = this.userService.update(updateData);

    if (formData.file) {
      submitStream = this.filestackService
        .upload((formData.file as unknown) as InputFile)
        .pipe(
          concatMap((response: any) => {
            updateData.profileImageUrl = response.url;

            return this.userService.update(updateData);
          }),
        );
    }

    submitStream
      .pipe(
        tap((_) => {
          this.currentUser = { ...this.currentUser, ...updateData };
          this.isSaveLoading = false;
        }),
        catchError((error) => {
          this.errorMessage = error.message;
          this.isSaveLoading = false;
          return error;
        }),
      )
      .subscribe();
  }
}
