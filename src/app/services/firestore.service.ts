import { ADs } from './../components/models/ads';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Shops } from 'src/app/components/models/shops';

import { Category } from 'src/app/components/models/categories';
import { map } from 'rxjs/operators';
import { Popular } from '../components/models/popular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  // variables
  allList: AngularFirestoreCollection<Shops> = null;

  constructor(public fs: AngularFirestore) { }

  //get the list of shops
  getShops() {
    let ref = this.fs.collection<Shops>('shops', ref => {
      return ref.orderBy('Date', 'asc').limit(6);
    });
    return ref.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    )
  }

  // get the list of all shops and details

    getAllShops() {
      let ref = this.fs.collection<Shops>('shops', ref => {
        return ref.orderBy('Date', 'desc');
      });
      return ref.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        })
      )
    }

  // get the list of categories
  getCategories(){
    let ref = this.fs.collection<Category>('categories', ref => {
      return ref.orderBy('Date', 'asc');
    })
    return  ref.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    )
  }

  // get hot deals/popular on kwyk

  getHotDeals() {
    let ref = this.fs.collection<Popular>('Popular', ref => {
      return ref.orderBy('currentprice', 'asc').limit(6);
    });
    return ref.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id,...data };
        })
      })
    )
  }
}
