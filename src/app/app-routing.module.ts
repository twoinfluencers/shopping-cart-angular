import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PathNotFoundComponent } from './pages/path-not-found/path-not-found.component';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { ProductComponent } from './products/product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: AllProductsComponent },
  { path: 'product/:id', component: ProductComponent },

  // {
  //   path: 'products', 
  //   loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  // },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
