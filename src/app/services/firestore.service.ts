import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Shops } from 'src/app/components/models/shops';
import { Category } from 'src/app/components/models/categories';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public fs: AngularFirestore) { }

  //get the list of shops   
  getShops() {
    let ref = this.fs.collection<Shops>('shops', ref => {
      return ref.orderBy('Date', 'desc');
    });
    return ref.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          // const id = a.payload.doc.id;
          return { ...data };
        })
      })
    )
  }

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
}
