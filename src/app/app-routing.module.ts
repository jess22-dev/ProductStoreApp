import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductsDetailsComponent } from './views/products-details/products-details.component';
import { CartComponent } from './views/cart/cart.component';
import { AboutComponent } from './views/about/about.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'products-details', component: ProductsDetailsComponent}, 
  { path: 'cart', component: CartComponent},
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
