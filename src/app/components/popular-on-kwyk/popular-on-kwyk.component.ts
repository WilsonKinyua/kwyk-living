import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Popular } from '../models/popular';

@Component({
  selector: 'app-popular-on-kwyk',
  templateUrl: './popular-on-kwyk.component.html',
  styleUrls: ['./popular-on-kwyk.component.css']
})
export class PopularOnKwykComponent implements OnInit {

  hotDeals: Popular[];
  unfilteredHotDeals: Popular[];

  constructor(public fireApi: FirestoreService) { }

  ngOnInit(): void {
    this.getHotDeals()
  }

  // getHotDeals() {
  //   this.fireApi.getHotDeals()
  //   .subscribe(res => {
  //     this.hotDeals = res;
  //      console.log('popular',this.hotDeals);
  //     this.hotDeals.forEach((item, index) => {
  //       console.log(index);
  //       if(index < 12) {
  //           setTimeout(()=>300)
  //       }
  //     })
  //   })

    getHotDeals() {
      this.fireApi.getHotDeals().subscribe(res => {
        this.hotDeals = res;
        this.unfilteredHotDeals = res;
        console.log("popular-products", this.hotDeals);
        this.hotDeals.forEach((item, index) => {
          if (index < 12) {
            setTimeout(() => 300)
          }
        })
      })
      console.log(this.hotDeals)
    }
  }
