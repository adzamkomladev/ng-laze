import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

import { CurrentUserResolverService } from '../services/current-user-resolver.service';
import { ProjectResolverService } from '../services/project-resolver.service';
import { UsersResolverService } from '../services/users-resolver.service';

import { ProjectComponent } from './project.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';

@NgModule({
  declarations: [ProjectComponent, DetailsCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: ProjectComponent,
        resolve: {
          currentUser: CurrentUserResolverService,
          selectedProject: ProjectResolverService,
          allUsers: UsersResolverService,
        },
      },
    ]),
    NzPageHeaderModule,
    NzGridModule,
    NzFormModule,
    NzDatePickerModule,
    NzUploadModule,
    NzInputModule,
    NzButtonModule,
    NzAvatarModule,
    NzMessageModule,
    NzIconModule,
    NzMentionModule,
    NzSelectModule,
    NzDropDownModule,
    NzInputNumberModule,
  ],
})
export class ProjectModule {}
