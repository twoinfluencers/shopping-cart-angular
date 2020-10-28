import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductComponent } from './product/product.component';




@NgModule({
  declarations: [AllProductsComponent, ProductComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
