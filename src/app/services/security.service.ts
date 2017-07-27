import { Injectable } from '@angular/core';
import { User } from '../models/dto/user';

@Injectable()
export class SecurityService {

  private user: User;

  constructor() { 
    this.user = null;
  }

  login(authUser: User) : void {
    this.user = authUser;
  }

  logout() : void {
    this.user = null;
  }

  getUser() : User {
    return this.user;
  }
}
