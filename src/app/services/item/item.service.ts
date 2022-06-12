import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url: string = `${environment.dbURL}/item.json`;

  constructor(private http:HttpClient) {
  }

  additem(item: Item, callback: any) {
    this.http.post(this.url, item)
    .subscribe(response => { 
      if (callback) {
        callback(); 
      }
    });
  }

  async getItems(): Promise<Item[]> {
    var response = await this.http.get<any[]>(this.url).toPromise();
    var items: Item[] = this.responseToList(response);
    return items;
  }

  responseToList(response: any): [] {
    var list: any = Object.entries(response).map(item => { 
      return item[1]; 
    });
    return list;
  } 
}
