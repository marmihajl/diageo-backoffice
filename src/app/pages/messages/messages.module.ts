import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageCreateComponent } from './components/message-create/message-create.component';
import { MessageWrapperComponent } from './components/message-wrapper/message-wrapper.component';
import { MaterialModule } from "../../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    MessageListComponent,
    MessageCreateComponent,
    MessageWrapperComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MessagesModule {
}
