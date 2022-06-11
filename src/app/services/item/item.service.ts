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

  additem(item: Item) {
    this.http.post(this.url, item)
    .subscribe(response => console.log(response));
  }

  async getItems(): Promise<Item[]> {
    var response = await this.http.get<any[]>(this.url).toPromise();
    console.log(response);
    var items: Item[] = this.responseToList(response);
    return items;
  }

  responseToList(response: any): [] {
    var list: any = Object.entries(response).map(item => { 
      return item[1]; 
    });
    console.log(list);
    return list;
  } 
}
