import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { CampaignCreateComponent } from './components/campaign-create/campaign-create.component';
import { CampaignWrapperComponent } from './components/campaign-wrapper/campaign-wrapper.component';
import { MaterialModule } from "../../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { CampaignAttributesCreateComponent } from './components/campaign-attributes-create/campaign-attributes-create.component';


@NgModule({
  declarations: [
    CampaignListComponent,
    CampaignCreateComponent,
    CampaignWrapperComponent,
    CampaignAttributesCreateComponent,
  ],
  imports: [
    CommonModule,
    CampaignsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CampaignsModule { }
