import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

import { FilestackModule } from '@filestack/angular';

import { ProjectFormService } from './services/project-form.service';
import { ProjectsResolverService } from '../services/projects-resolver.service';
import { CurrentUserResolverService } from '../services/current-user-resolver.service';

import { ProjectsComponent } from './projects.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectFormComponent, ProjectCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProjectsComponent,
        resolve: {
          projects: ProjectsResolverService,
          currentUser: CurrentUserResolverService,
        },
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    NzIconModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzModalModule,
    NzDatePickerModule,
    NzFormModule,
    NzUploadModule,
    NzInputModule,
    NzAlertModule,
    NzCardModule,
    NzTagModule,
    NzAvatarModule,
    NzToolTipModule,
    NzPaginationModule,
    FilestackModule,
  ],
  providers: [ProjectFormService],
})
export class ProjectsModule {}
