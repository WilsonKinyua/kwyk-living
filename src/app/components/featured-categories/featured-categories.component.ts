import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/components/models/categories';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-featured-categories',
  templateUrl: './featured-categories.component.html',
  styleUrls: ['./featured-categories.component.css']
})
export class FeaturedCategoriesComponent implements OnInit {
  mainCategories: Category[];

  constructor(public service: FirestoreService,) { }

  ngOnInit(): void {
    this.getCategories();
  }

  // get main categories
getCategories(){
  this.service.getCategories().subscribe(res => {
    console.log('categories',res);
    this.mainCategories = res ;
  },error => console.log(error))
}
  

}
