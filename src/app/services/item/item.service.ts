import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemRef: AngularFireObject<any>;
  itemListRef: AngularFireList<any>;

  constructor(private db: AngularFirestore) { }

  // Create Item
  Additem(item: Item) {
    this.itemRef.push({
      id: item.id,
      type: item.type,
      name: item.name,
      status: item.status,
      userId: item.userId
    });
  }

  // Fetch Item
  GeItem(itemId:string): Observable<Item>{
    this.itemRef = this.db.object('items-list'/ + itemId);
    return this.itemRef;
   }

  // Fetch Item List
  GetItemList() {
    this.itemListRef = this.db.list('items-list');
    return this.itemListRef;
  }

  // Update
  UpdateItem(item: Item) {
    this.itemRef.update({
      name: item.name,
      status: item.status,
      userId: item.userId
    });
  }

  // Delete
  DeleteItem(itemId: string) {
    this.itemRef = this.db.object('items-list'/ + itemId);
    this.itemRef.remove();
  }
}
