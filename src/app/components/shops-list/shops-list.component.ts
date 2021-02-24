import { Shop, Shops } from './../models/shops';
import { FirestoreService } from './../../services/firestore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.css']
})
export class ShopsListComponent implements OnInit {

  shops!: Shops[];
  unfilteredShops!: Shops[];
  constructor(private fireApi: FirestoreService) { }

  ngOnInit(): void {
    this.getAllShops();
  }


  getAllShops() {
    console.log('==========')
    this.fireApi.getAllShops()
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
