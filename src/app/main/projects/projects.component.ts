import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { catchError, finalize, tap } from 'rxjs/operators';

import { ProjectService } from '../services/project.service';
import { ProjectFormService } from './services/project-form.service';

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

    private projectsService: ProjectService,
    private projectFormService: ProjectFormService,
  ) {
    this.isModalVisible = this.isSaveLoading = false;
  }

  ngOnInit(): void {
    this.currentUser = this.route.snapshot.data['currentUser'];
    this.projects = this.route.snapshot.data['projects'];
    this.onPageIndexChange(1);
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

  onSaveProject(): void {
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

    this.projectsService
      .create(createData)
      .pipe(
        tap((project) => {
          console.log({ project });
        }),
        catchError((error) => {
          this.errorMessage = error.message;
          return error;
        }),
        finalize(() => {
          this.isSaveLoading = false;
        }),
      )
      .subscribe();
  }

  onCancel(): void {
    this.isModalVisible = false;
  }
}
