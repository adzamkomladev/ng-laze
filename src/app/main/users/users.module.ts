import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './users.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [UsersComponent, UserCardComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NzGridModule,
    NzCardModule,
    NzAvatarModule,
    NzIconModule,
    NzPageHeaderModule,
    NzTagModule,
    NzDropDownModule,
  ],
})
export class UsersModule {}
