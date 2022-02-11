import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PubsRoutingModule } from './pubs-routing.module';
import { PubListComponent } from './components/pub-list/pub-list.component';
import { PubCreateComponent } from './components/pub-create/pub-create.component';
import { PubWrapperComponent } from './components/pub-wrapper/pub-wrapper.component';
import { MaterialModule } from "../../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    PubListComponent,
    PubCreateComponent,
    PubWrapperComponent,
  ],
  imports: [
    CommonModule,
    PubsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PubsModule { }
