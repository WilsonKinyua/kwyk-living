import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SingleShopProductsListComponent } from './components/single-shop-products-list/single-shop-products-list.component';
import { SingleProductPageComponent } from './components/single-product-page/single-product-page.component';
import { KonnectComponent } from './components/konnect/konnect.component';
import { ShopsComponent } from './components/shops/shops.component';
import { TopBannerslideComponent } from './components/top-bannerslide/top-bannerslide.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PopularOnKwykComponent } from './components/popular-on-kwyk/popular-on-kwyk.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { FeaturedCategoriesComponent } from './components/featured-categories/featured-categories.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    LoginComponent,
    OrdersComponent,
    SingleShopProductsListComponent,
    SingleProductPageComponent,
    KonnectComponent,
    ShopsComponent,
    TopBannerslideComponent,
    CategoriesComponent,
    PopularOnKwykComponent,
    FeaturedProductsComponent,
    FeaturedCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
