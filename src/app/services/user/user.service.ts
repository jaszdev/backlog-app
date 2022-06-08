import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userRef: AngularFireObject<any>;

  constructor(private db: AngularFirestore) { }

  // Fetch Item
  GeItem(userId:string): Observable<User>{
    this.userRef = this.db.object('users-list'/ + userId);
    return this.userRef;
   }
}
