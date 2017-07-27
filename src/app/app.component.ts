import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './models/dto/user';
import { SecurityService } from './services/security.service';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private securityService: SecurityService, private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    let user = this.securityService.getUser();
    this.dataService.init();

    if (user){
      this.router.navigate(["app"]);
    }
    else {
      this.router.navigate(["login"]);
    }
  }
}
