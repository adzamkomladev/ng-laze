import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { concatMap, tap, catchError } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd/message';

import { FilestackService } from '@filestack/angular';
import { InputFile } from 'filestack-js';

import { environment } from 'src/environments/environment';

import { ProjectService } from '../services/project.service';

import { User } from 'src/app/core/interfaces/user';
import { Project } from '../interfaces/project';
import { ProjectData } from './interfaces/project-data';

@Component({
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  currentUser: User;
  selectedProject: Project;
  allUsers: User[];
  isSaveLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    private message: NzMessageService,
    private filestackService: FilestackService,
    private projectService: ProjectService,
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
}
