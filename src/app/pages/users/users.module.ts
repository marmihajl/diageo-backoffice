import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserWebCreateComponent } from './components/user-web-create/user-web-create.component';
import { MaterialModule } from "../../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { UserWrapperComponent } from './components/user-wrapper/user-wrapper.component';
import { SharedModule } from "../../shared/shared.module";
import { UserMobileCreateComponent } from './components/user-mobile-create/user-mobile-create.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserWebCreateComponent,
    UserWrapperComponent,
    UserMobileCreateComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UsersModule { }
