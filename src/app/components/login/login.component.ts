import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from "src/app/services/user/user.service";
import { Router, ActivatedRoute  } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(public userService: UserService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.route.params.subscribe()
  }  

  login() {    
    this.userService.login(this.username, this.password).then(
      data => {        
        this.router.navigateByUrl("/home");
      },
      error => {
        console.log(error);
      }
    );
  }

}
