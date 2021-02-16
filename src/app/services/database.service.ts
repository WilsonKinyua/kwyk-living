import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/components/models/product';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(public fs: AngularFirestore) { }

  // get featured products
  getFeaturedProducts() {
    let prod = this.fs.collection<Product>('Featured', ref => {
      return ref.orderBy('currentprice', 'asc');
    });
    return prod.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    )
  }
}
