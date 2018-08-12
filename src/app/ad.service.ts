import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private db: AngularFireDatabase ) { }
  
    /// Creates an Ad, then returns as an object
    // createAd(model): FirebaseObjectObservable<any> {
    //   //const adDefault = new AdListing()
    //   const adKey = this.db.list('/ads').push(model).key
    //   return this.db.object('/ads/' + adKey)
    // }

  getData(): Observable<any>{
    return this.db.list('/items').valueChanges();

  }

  
    /// Updates an existing Ad
    // updateAd(ad: FirebaseObjectObservable<any>, data: any) {
    //   return ad.update(data)
    // }
}
