import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  user: string;

  constructor(public router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.activeRoute.snapshot.params['username'];
  }

  logout() {    
    this.router.navigateByUrl("/login");
  }

}
