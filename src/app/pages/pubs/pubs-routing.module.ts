import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubWrapperComponent } from "./components/pub-wrapper/pub-wrapper.component";

const routes: Routes = [ { path: '', component: PubWrapperComponent } ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PubsRoutingModule {
}
