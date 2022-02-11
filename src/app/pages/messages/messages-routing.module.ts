import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageWrapperComponent } from "./components/message-wrapper/message-wrapper.component";

const routes: Routes = [ { path: '', component: MessageWrapperComponent } ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MessagesRoutingModule {
}
