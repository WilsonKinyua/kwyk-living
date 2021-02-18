import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  featuredProducts = [];

  constructor( public database: DatabaseService,) { }

  ngOnInit(): void {
    this.getProducts();
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

}
