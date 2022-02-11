import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandProductCreateComponent} from "./components/brand-product-create/brand-product-create.component";
import { MaterialModule } from "../../core/material/material.module";
import { BrandWrapperComponent } from './components/brand-wrapper/brand-wrapper.component';
import { SharedModule } from "../../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { BrandProductArticleCreateComponent } from './components/brand-product-article-create/brand-product-article-create.component';


@NgModule({
  declarations: [
    BrandListComponent,
    BrandProductCreateComponent,
    BrandWrapperComponent,
    BrandProductArticleCreateComponent,
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class BrandsModule { }
