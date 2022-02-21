import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from "./main-nav/main-nav.component";
import { MaterialModule } from "../core/material/material.module";
import { RouterModule } from "@angular/router";
import { HttpTableComponent } from './http-table/http-table.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    MainNavComponent,
    HttpTableComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    MainNavComponent,
    HttpTableComponent,
    HttpClientModule
  ]
})
export class SharedModule {
}
