import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SingleItemComponent } from './single-item/single-item.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'single-item', component: SingleItemComponent },
  { path: 'header', component: HeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
