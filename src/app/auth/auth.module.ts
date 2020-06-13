import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import { AuthComponent } from './auth.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
  declarations: [AuthComponent, AuthFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AuthComponent }]),
    FormsModule,
    ReactiveFormsModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzIconModule,
    NzRadioModule,
    NzAlertModule,
  ],
})
export class AuthModule {}
