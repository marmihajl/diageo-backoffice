import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandProductCreateComponent } from "./components/brand-product-create/brand-product-create.component";
import { BrandWrapperComponent } from "./components/brand-wrapper/brand-wrapper.component";

const routes: Routes = [
  { path: '', component: BrandWrapperComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BrandsRoutingModule {
}
