import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersResolverService } from '../services/users-resolver.service';

import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: {
      users: UsersResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
