import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { HomeSlidesComponent } from './home-page/home-slides/home-slides.component';
import { PopularOnKwykComponent } from './home-page/popular-on-kwyk/popular-on-kwyk.component';
import { FeaturedCategoriesComponent } from './home-page/featured-categories/featured-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    SingleItemComponent,
    HomeSlidesComponent,
    PopularOnKwykComponent,
    FeaturedCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
