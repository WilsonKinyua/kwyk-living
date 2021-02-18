
import { FirestoreService } from 'src/app/services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  unfilteredCategories: Category[];

  constructor(public fireApi: FirestoreService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.fireApi.getCategories().subscribe(res => {
      this.categories = res;
      this.unfilteredCategories = res;
      console.log("categories", this.categories);
      this.categories.forEach((item, index) => {
        if (index < 12) {
          setTimeout(() => 300)
        }
      })
    })
  }

}
