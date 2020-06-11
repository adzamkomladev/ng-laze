import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersResolverService } from '../services/users-resolver.service';
import { CurrentUserResolverService } from '../services/current-user-resolver.service';

import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: {
      users: UsersResolverService,
      currentUser: CurrentUserResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
