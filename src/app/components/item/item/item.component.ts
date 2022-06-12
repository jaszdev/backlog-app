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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  get usersNames() {
    return this.userService.usersNames(this.users);
  }

  getItemUsername(): string {
    if (this.item != null && this.users.length > 0) {
      var filteredList = this.users.filter(user => user.id.toString() === this.item?.userId.toString());
      if (filteredList.length > 0) {
        console.log(filteredList[0].username);
        return filteredList[0].username;
      }
    }
    return '';
  }

}
