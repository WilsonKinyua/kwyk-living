import { NotfoundComponent } from './components/notfound/notfound.component';
import { ShopDetailsComponent } from './components/shops/shop-details/shop-details.component';
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
  { path: 'shop', component: ShopDetailsComponent },
  // { path: 'shop/:shop_Id/:shop_name', component: ShopDetailsComponent },
  { path: 'shop/shops-products', component: SingleShopProductsListComponent },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
