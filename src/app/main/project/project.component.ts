import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { concatMap, tap, catchError, delay } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd/message';

import { FilestackService } from '@filestack/angular';
import { InputFile } from 'filestack-js';

import { environment } from 'src/environments/environment';

import { ProjectService } from '../services/project.service';

import { User } from 'src/app/core/interfaces/user';
import { Project } from '../interfaces/project';
import { ProjectData } from './interfaces/project-data';
import { SubmitProjectFormService } from './services/submit-project-form.service';

@Component({
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  currentUser: User;
  selectedProject: Project;
  allUsers: User[];
  isSaveLoading: boolean;
  isModalVisible: boolean;
  isModalSaveLoading: boolean;
  errorMessage?: string;

  constructor(
    private route: ActivatedRoute,
    private message: NzMessageService,
    private filestackService: FilestackService,
    private projectService: ProjectService,
    private submitProjectFormService: SubmitProjectFormService,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.route.snapshot.data['currentUser'];
    this.selectedProject = this.route.snapshot.data['selectedProject'];
    this.allUsers = this.route.snapshot.data['allUsers'];

    this.filestackService.init(environment.filestackApiKey);
  }

  onSubmit(projectData: ProjectData): void {
    this.isSaveLoading = true;

    const updateData: Partial<Project> = {
      ...projectData,
      id: this.currentUser.id,
    };

    let submitStream = this.projectService.update(updateData);

    if (updateData.file) {
      submitStream = this.filestackService
        .upload((updateData.file as unknown) as InputFile)
        .pipe(
          concatMap((response: any) => {
            updateData.fileUrl = response.url;
            updateData.file = null;

            console.log({ updateData });

            return this.projectService.update(updateData);
          }),
        );
    }

    submitStream
      .pipe(
        tap((_) => {
          this.selectedProject = {
            ...this.selectedProject,
            title: updateData.title ?? this.selectedProject.title,
            details: updateData.details ?? this.selectedProject.details,
            deadline: updateData.deadline ?? this.selectedProject.deadline,
            price: updateData.price ?? this.selectedProject.price,
            status: updateData.status ?? this.selectedProject.status,
            assigneeId:
              updateData.assigneeId ?? this.selectedProject.assigneeId,
            fileUrl: updateData.fileUrl ?? this.selectedProject.fileUrl,
          };
          this.isSaveLoading = false;
          this.message.success('Project has been updated!');
        }),
        catchError((error) => {
          this.isSaveLoading = false;
          this.message.error(error.message);
          return error;
        }),
      )
      .subscribe();
  }

  onOpenModal(): void {
    this.isModalVisible = true;
  }

  onSubmitProject() {
    this.errorMessage = null;

    if (!this.submitProjectFormService.getFormValidity()) {
      return;
    }

    this.isModalSaveLoading = true;

    const submitData: Partial<Project> = {
      ...this.submitProjectFormService.getFormValue(),
      status: 'SUBMITTED',
    };

    let submitStream = this.projectService.submit(submitData);

    if (this.submitProjectFormService.getFormValue().file) {
      submitStream = this.filestackService
        .upload(
          (this.submitProjectFormService.getFormValue()
            .file as unknown) as InputFile,
        )
        .pipe(
          concatMap((response: any) => {
            submitData.fileUrl = response.url;

            return this.projectService.submit(submitData);
          }),
        );
    }

    submitStream
      .pipe(
        tap((project) => {
          console.log({ project });
          this.isModalSaveLoading = false;
        }),
        delay(500),
        tap((_) => this.onCancel()),
        catchError((error) => {
          this.errorMessage = error.message;
          this.isModalSaveLoading = false;
          return error;
        }),
      )
      .subscribe();
  }

  onCancel(): void {
    this.isModalVisible = false;
  }
}
