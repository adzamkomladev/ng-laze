import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { concatMap, tap, catchError } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd/message';

import { FilestackService } from '@filestack/angular';
import { InputFile } from 'filestack-js';

import { environment } from 'src/environments/environment';

import { UserService } from '../services/user.service';

import { User } from 'src/app/core/interfaces/user';
import { EditUser } from './interfaces/edit-user';
import { Project } from '../interfaces/project';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  isSaveLoading: boolean;
  errorMessage?: string;
  currentUser: User;
  selectedUser: User;

  get numberOfProjects(): number {
    const user = this.selectedUser as any;
    return user?.projectsAssigned?.length + user?.projectsOwned?.length;
  }

  get allProjects(): Project[] {
    return [
      ...this.selectedUser.projectsOwned,
      ...this.selectedUser.projectsAssigned,
    ];
  }

  get isCurrentUser(): boolean {
    return this.currentUser.id === this.selectedUser.id;
  }

  constructor(
    private route: ActivatedRoute,
    private message: NzMessageService,
    private filestackService: FilestackService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.route.snapshot.data['currentUser'];
    this.selectedUser = this.route.snapshot.data['selectedUser'];

    this.filestackService.init(environment.filestackApiKey);
  }

  onSubmit(formData: EditUser) {
    this.errorMessage = null;
    this.isSaveLoading = true;

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
          this.selectedUser = {
            ...this.selectedUser,
            fullName: updateData.fullName ?? this.selectedUser.fullName,
            telephone: updateData.telephone ?? this.selectedUser.telephone,
            email: updateData.email ?? this.selectedUser.email,
            careerDetails:
              updateData.careerDetails ?? this.selectedUser.careerDetails,
            dateOfBirth:
              updateData.dateOfBirth ?? this.selectedUser.dateOfBirth,
            profileImageUrl:
              updateData.profileImageUrl ?? this.selectedUser.profileImageUrl,
          };
          this.isSaveLoading = false;
          this.message.success('Your profile has been updated!');
        }),
        catchError((error) => {
          this.errorMessage = error.message;
          this.isSaveLoading = false;
          this.message.error(this.errorMessage);
          return error;
        }),
      )
      .subscribe();
  }
}
