import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() users: User[] = [];
  @Input() item: Item | null = null;

  itemStyle:string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.setItemStyle();
  }

  get usersNames() {
    return this.userService.usersNames(this.users);
  }

  getItemUsername(): string {
    if (this.item != null && this.users.length > 0) {
      var filteredList = this.users.filter(user => user.id.toString() === this.item?.userId.toString());
      if (filteredList.length > 0) {
        return filteredList[0].username;
      }
    }
    return '';
  }

  setItemStyle(){
    this.itemStyle = "item";
    switch (this.item?.status) {
      case "On Hold":
          this.itemStyle += " onhold";
          break;
      case "New":
          this.itemStyle += " pending";
          break;
      case "Commited":
          this.itemStyle += " inprogress";
          break;
      case "Done":
          this.itemStyle += " done";
          break;
      default:
          this.itemStyle ="item";
          break;
    }
  }
}
