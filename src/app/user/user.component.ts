import { Component } from '@angular/core';
import { UserListingComponent } from '../user-listing/user-listing.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { UsersService } from '../../services/users.service';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserListingComponent,TaskListComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  usersList!:UserModel[];

  constructor(private usersService:UsersService){
    this.usersList = usersService.getUsersList();
  }


}
