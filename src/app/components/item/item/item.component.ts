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

  getItemUser(): User {
    if (this.item != null) {
      return this.users.filter(user => user.id === this.item?.id)[0];
    }
    return this.users[0];
  }

}
