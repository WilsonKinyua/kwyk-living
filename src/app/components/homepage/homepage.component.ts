import { Component, OnInit } from '@angular/core';
import { Shops } from 'src/app/components/models/shops';
import { DatabaseService } from 'src/app/services/database.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Category } from 'src/app/components/models/categories';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  shops: Shops[];
  unfilteredShops: Shops[];
  featuredProducts = [];
  mainCategories: Category[];

  constructor(public fireApi: FirestoreService,
    public database: DatabaseService,
    public service: FirestoreService,) { }

  ngOnInit(): void {
    this.getShops();
    this.getProducts();
    this.getCategories();
  }

  getShops() {
    console.log('==========')
    this.fireApi.getShops()
      .subscribe(res => {
        this.shops = res;
        this.unfilteredShops = res;
        console.log('shops', this.shops);
        this.shops.forEach((item, index) => {
          if (index < 9) {
            setTimeout(()=>300)
          }
        })
      });
  }

  shuffle(ProductPool: any[]) {
    for (let i = ProductPool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = ProductPool[i];
      ProductPool[i] = ProductPool[j];
      ProductPool[j] = temp;
    }
    return ProductPool;
  }

  getProducts(){ 
  // get featured products 
  this.database.getFeaturedProducts().subscribe(res => {
    this.featuredProducts = this.shuffle(res);
    console.log('products',res);
  })
}

// get main categories
getCategories(){
  this.service.getCategories().subscribe(res => {
    console.log('categories',res);
    this.mainCategories = res ;
  },error => console.log(error))
}

}
