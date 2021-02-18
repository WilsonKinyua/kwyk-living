import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Shops } from '../models/shops';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  shops: Shops[] ;
  unfilteredShops: Shops[];

  constructor(public fireApi: FirestoreService) { }

  ngOnInit(): void {
    this.getShops();
  }

  getShops() {
    console.log('==========')
    this.fireApi.getShops()
      .subscribe(res => {
        this.shops = res;
        this.unfilteredShops = res;
        console.log('shops', this.shops);
        this.shops.forEach((item, index) => {
          if (index < 8) {
            setTimeout(() => 300)
          }
        })
      });
  }

}
