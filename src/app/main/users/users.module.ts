import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

import { UsersResolverService } from '../services/users-resolver.service';
import { CurrentUserResolverService } from '../services/current-user-resolver.service';

import { UsersComponent } from './users.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [UsersComponent, UserCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
        resolve: {
          users: UsersResolverService,
          currentUser: CurrentUserResolverService,
        },
      },
    ]),
    NzGridModule,
    NzCardModule,
    NzAvatarModule,
    NzIconModule,
    NzPageHeaderModule,
    NzTagModule,
    NzDropDownModule,
    NzMessageModule,
    NzSpinModule,
    NzPaginationModule,
  ],
})
export class UsersModule {}
