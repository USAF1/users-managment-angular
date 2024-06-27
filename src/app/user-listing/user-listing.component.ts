import { Component, Input } from '@angular/core';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-user-listing',
  standalone: true,
  imports: [],
  templateUrl: './user-listing.component.html',
  styleUrl: './user-listing.component.css'
})
export class UserListingComponent {
  @Input() userList!:UserModel[];
  
}
