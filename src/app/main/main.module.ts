import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { MainRoutingModule } from './main-routing.module';

import { UserService } from './services/user.service';
import { ProjectService } from './services/project.service';
import { UsersResolverService } from './services/users-resolver.service';
import { CurrentUserResolverService } from './services/current-user-resolver.service';
import { ProjectsResolverService } from './services/projects-resolver.service';

import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzSpinModule,
  ],
  providers: [
    UserService,
    ProjectService,
    UsersResolverService,
    ProjectsResolverService,
    CurrentUserResolverService,
  ],
})
export class MainModule {}