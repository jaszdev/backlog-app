import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { User } from 'src/app/models/user';
import { ItemService } from 'src/app/services/item/item.service';

@Component({
  selector: 'app-road-map',
  templateUrl: './road-map.component.html',
  styleUrls: ['./road-map.component.css'],
  providers: [ItemService]
})
export class RoadMapComponent implements OnInit {

  @Input() users: User[] = [];
  items: Item[] = [];

  constructor(private itemService: ItemService) {

  }

  ngOnInit(): void {
    this.getItems();
  }

  async getItems() {
    this.items = await this.itemService.getItems();
    console.log(this.items);
  }

  getItemsByStatus(status: string): Item[] {
    switch (status) {
      case "New":
        return this.items.filter(item => item.status === 'New');
      case "Commited":
        return this.items.filter(item => item.status === 'Commited');
      case "On Hold":
        return this.items.filter(item => item.status === 'On Hold');
      case "Done":
        return this.items.filter(item => item.status === 'Done');
    }
    return this.items.filter(item => item.status === 'Done');
  }

}
