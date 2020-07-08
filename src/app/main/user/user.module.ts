import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { FilestackModule } from '@filestack/angular';

import { CurrentUserResolverService } from '../services/current-user-resolver.service';
import { UserResolverService } from '../services/user-resolver.service';

import { AgePipe } from './pipes/age.pipe';

import { UserComponent } from './user.component';
import { EditUserFormComponent } from './components/edit-user-form/edit-user-form.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@NgModule({
  declarations: [
    UserComponent,
    EditUserFormComponent,
    AgePipe,
    ProjectCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: UserComponent,
        resolve: {
          currentUser: CurrentUserResolverService,
          selectedUser: UserResolverService,
        },
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,
    NzAvatarModule,
    NzTabsModule,
    NzFormModule,
    NzInputModule,
    NzDatePickerModule,
    NzUploadModule,
    NzButtonModule,
    NzAlertModule,
    NzDividerModule,
    NzMessageModule,
    FilestackModule,
  ],
})
export class UserModule {}
