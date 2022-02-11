import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizWrapperComponent } from "./components/quiz-wrapper/quiz-wrapper.component";

const routes: Routes = [ { path: '', component: QuizWrapperComponent } ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class QuizzesRoutingModule {
}
