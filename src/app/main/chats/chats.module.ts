import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzListModule } from 'ng-zorro-antd/list';

import { ChatsRoutingModule } from './chats-routing.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { ChatsComponent } from './pages/chats/chats.component';
import { ChatComponent } from './pages/chat/chat.component';

@NgModule({
  declarations: [ChatsComponent, ChatComponent],
  imports: [CommonModule, ChatsRoutingModule, NzListModule, NzPageHeaderModule],
})
export class ChatsModule {}
