import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentUser = this.route.snapshot.data['currentUser'];
  }

  onSubmit(formData: EditUser) {
    this.errorMessage = null;

    this.isSaveLoading = true;

    console.log({ formData });

    // const createData: Partial<User> = {
    //   ...this.userFormService.getFormValue(),
    //   ownerId: this.currentUser.id,
    // };

    // let submitStream = this.usersService.create(createData);

    // if (this.userFormService.getFormValue().file) {
    //   submitStream = this.filestackService
    //     .upload(
    //       (this.userFormService.getFormValue().file as unknown) as InputFile,
    //     )
    //     .pipe(
    //       concatMap((response: any) => {
    //         createData.fileUrl = response.url;

    //         return this.usersService.create(createData);
    //       }),
    //     );
    // }

    // submitStream
    //   .pipe(
    //     tap((user) => {
    //       console.log({ user });
    //       this.isSaveLoading = false;
    //     }),
    //     delay(500),
    //     tap((_) => this.onCancel()),
    //     catchError((error) => {
    //       this.errorMessage = error.message;
    //       this.isSaveLoading = false;
    //       return error;
    //     }),
    //   )
    //   .subscribe();
  }
}
