import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from "./main-nav/main-nav.component";
import { MaterialModule } from "../core/material/material.module";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    MainNavComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    MainNavComponent,
    HttpClientModule
  ]
})
export class SharedModule {
}
