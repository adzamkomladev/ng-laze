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

import { UserComponent } from './user.component';
import { EditUserFormComponent } from './components/edit-user-form/edit-user-form.component';

@NgModule({
  declarations: [UserComponent, EditUserFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: ':id', component: UserComponent }]),
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
  ],
})
export class UserModule {}
