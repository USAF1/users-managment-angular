import { Injectable } from '@angular/core';
import { Users } from '../dummy/dummy-users';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users = Users
  constructor() { }

  getUsersList():UserModel[]{
    return this.users;
  }
}
