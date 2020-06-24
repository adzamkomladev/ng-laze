import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { catchError, concatMap, delay, tap } from 'rxjs/operators';

import { FilestackService } from '@filestack/angular';
import { InputFile } from 'filestack-js';

import { ProjectService } from '../services/project.service';
import { ProjectFormService } from './services/project-form.service';

import { environment } from '../../../environments/environment';

import { Project } from '../interfaces/project';
import { User } from '../../core/interfaces/user';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  isModalVisible: boolean;
  isSaveLoading: boolean;
  errorMessage?: string;
  currentUser: User;
  projects: Project[];
  projectsToDisplay: Project[];

  constructor(
    private route: ActivatedRoute,
    private filestackService: FilestackService,
    private projectsService: ProjectService,
    private projectFormService: ProjectFormService,
  ) {
    this.isModalVisible = this.isSaveLoading = false;
  }

  ngOnInit(): void {
    this.currentUser = this.route.snapshot.data['currentUser'];
    this.projects = this.route.snapshot.data['projects'];
    this.onPageIndexChange(1);
    this.filestackService.init(environment.filestackApiKey);
  }

  onPageIndexChange(page: number): void {
    const numberPerPage = 10;

    const startIndex = numberPerPage * (page - 1);
    const endIndex = numberPerPage * page;

    this.projectsToDisplay = this.projects.slice(startIndex, endIndex);
  }

  onOpenModal(): void {
    this.isModalVisible = true;
  }

  onSaveProject() {
    this.errorMessage = null;

    if (!this.projectFormService.getFormValidity()) {
      return;
    }
    this.isSaveLoading = true;

    const createData: Partial<Project> = {
      ...this.projectFormService.getFormValue(),
      status: 'INITIATED',
      ownerId: this.currentUser.id,
    };

    let submitStream = this.projectsService.create(createData);

    if (this.projectFormService.getFormValue().file) {
      submitStream = this.filestackService
        .upload(
          (this.projectFormService.getFormValue().file as unknown) as InputFile,
        )
        .pipe(
          concatMap((response: any) => {
            createData.fileUrl = response.url;

            return this.projectsService.create(createData);
          }),
        );
    }

    submitStream
      .pipe(
        tap((project) => {
          console.log({ project });
          this.isSaveLoading = false;
        }),
        delay(500),
        tap((_) => this.onCancel()),
        catchError((error) => {
          this.errorMessage = error.message;
          this.isSaveLoading = false;
          return error;
        }),
      )
      .subscribe();
  }

  onCancel(): void {
    this.isModalVisible = false;
  }
}
