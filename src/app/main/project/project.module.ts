import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CurrentUserResolverService } from '../services/current-user-resolver.service';
import { ProjectResolverService } from '../services/project-resolver.service';

import { ProjectComponent } from './project.component';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: ProjectComponent,
        resolve: {
          currentUser: CurrentUserResolverService,
          selectedProject: ProjectResolverService,
        },
      },
    ]),
  ],
})
export class ProjectModule {}
