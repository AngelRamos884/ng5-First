import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/users';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];

  constructor(public userServices: UserService) {}

  ngOnInit() {
    this.userServices.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
