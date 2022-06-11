import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = `${environment.dbURL}/user.json`;
  user: User | null = null;
  
  constructor(private http:HttpClient) {
  }

  addUser(user: User) {
    this.http.post(this.url, user)
    .subscribe(response => console.log(response));
  }

  async login(username: string, password: string): Promise<User | null> {  
    this.user = null;
    var users: User[] = await this.getUsers();
    var filteredList: User[] = users.filter(user => user.username === username);
    if (filteredList.length == 1 && filteredList[0].password === password) {
      this.user = filteredList[0];
    }
    return this.user;
  }

  async getUsers(): Promise<User[]> {
    var response = await this.http.get<any[]>(this.url).toPromise();
    var users: User[] = this.responseToList(response);
    return users;
  }


  responseToList(response: any): [] {
    var list: any = Object.entries(response).map(item => { 
      return item[1]; 
    });
    return list;
  } 

  usersNames(users: User[]) {
    return users.map(user => user.username);
  }

}
