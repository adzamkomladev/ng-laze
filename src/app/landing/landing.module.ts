import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LandingComponent }]),
    NzLayoutModule,
    NzButtonModule,
    NzGridModule,
  ],
})
export class LandingModule {}
