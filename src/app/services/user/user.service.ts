import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = `${environment.dbURL}/user.json`;

  constructor(private http:HttpClient) {
  }

  addUser(user: User) {
    this.http.post(this.url, user)
    .subscribe(response => console.log(response));
  }

  async login(username: string, password: string): Promise<boolean> {  
    var validLogin = true;
    var response = await this.http.get<any[]>(this.url).toPromise();
    var users: User[] = this.responseToList(response);
    var filteredList = users.filter(user => user.username === username);
    if (filteredList.length != 1) validLogin = false;
    else {
      var user = filteredList[0];
      if (user.password !== password) validLogin = false;
    }
    return validLogin;
  }

  responseToList(response: any): [] {
    var list: any = Object.entries(response).map(item => { 
      return item[1]; 
    });
    return list;
  } 

}
