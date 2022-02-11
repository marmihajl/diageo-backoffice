import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductWrapperComponent } from "./components/product-wrapper/product-wrapper.component";

const routes: Routes = [ { path: '', component: ProductWrapperComponent } ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProductsRoutingModule {
}
