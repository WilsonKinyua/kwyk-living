import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { KonnectComponent } from './konnect/konnect.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { SingleShopProductsListComponent } from './single-shop-products-list/single-shop-products-list.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'single-item', component: SingleItemComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'myaccount/cart', component: CartComponent },
  { path: 'kwyk/konnect', component: KonnectComponent },
  { path: 'account/orders', component: OrdersComponent },
  { path: 'account/login', component: LoginComponent },
  { path: 'shops/products-list', component: SingleShopProductsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
