import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { CurrentUserResolverService } from '../services/current-user-resolver.service';
import { UsersResolverService } from '../services/users-resolver.service';
import { ProjectsResolverService } from '../services/projects-resolver.service';

import { HomeComponent } from './home.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { TopProjectsPipe } from './pipes/top-projects.pipe';

@NgModule({
  declarations: [HomeComponent, ProjectCardComponent, TopProjectsPipe],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        resolve: {
          currentUser: CurrentUserResolverService,
          allUsers: UsersResolverService,
          allProjects: ProjectsResolverService,
        },
      },
    ]),
    NzGridModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzAvatarModule,
    NzPageHeaderModule,
  ],
})
export class HomeModule {}
