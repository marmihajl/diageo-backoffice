import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductWrapperComponent } from './components/product-wrapper/product-wrapper.component';
import { MaterialModule } from "../../core/material/material.module";
import { SharedModule } from "../../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductWrapperComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductsModule { }
