import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { QuizCreateComponent } from './components/quiz-create/quiz-create.component';
import { QuizWrapperComponent } from './components/quiz-wrapper/quiz-wrapper.component';
import { MaterialModule } from "../../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    QuizListComponent,
    QuizCreateComponent,
    QuizWrapperComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class QuizzesModule { }
