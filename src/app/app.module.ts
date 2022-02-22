import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./core/material/material.module";
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from "./shared/shared.module";
import { AuthGuard } from "./core/guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    SharedModule
  ],
  providers: [AuthGuard],
  exports: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
