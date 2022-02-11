import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignWrapperComponent } from "./components/campaign-wrapper/campaign-wrapper.component";

const routes: Routes = [{ path: '', component: CampaignWrapperComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
