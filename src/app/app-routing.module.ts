import { SingleProductPageComponent } from './components/single-product-page/single-product-page.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { KonnectComponent } from './components/konnect/konnect.component';
import { SingleShopProductsListComponent } from './components/single-shop-products-list/single-shop-products-list.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'konnect', component: KonnectComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'myaccount/sign-in', component: LoginComponent },
  { path: 'product-details', component: SingleProductPageComponent },
  { path: 'shop/shops-products', component: SingleShopProductsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
