import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item/item.service';
import { User } from 'src/app/models/user';
import { getItemId } from 'src/environments/environment';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
  providers: [ItemService]
})
export class ItemFormComponent implements OnInit {

  @Input() users: User[] = [];

  model: Item = { id: 0, type: "PBI", name: "", status: "New", userId: -1 };

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.model.id = getItemId();
    this.itemService.additem(this.model);
  }

}
