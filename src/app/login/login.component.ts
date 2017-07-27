import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { SecurityService } from '../services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private dataService: DataService, private securityService: SecurityService, private router: Router) {}

  authenticate() : void {
    if (this.dataService.users && this.dataService.users.length > 0){
      var user = this.dataService.users.find(x => x.email === this.username);
      if (user && this.password === user.password) {
        this.securityService.login(user);
        this.router.navigate(["app"]);
      }
    }
    else {
      console.log("nothing happened");
    }
  }

  ngOnInit() {
  }

}
