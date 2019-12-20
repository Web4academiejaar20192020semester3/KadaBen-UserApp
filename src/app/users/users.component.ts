import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from './user.service';
import {timer} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {

  title = 'User Overview';
  users: User[];
  selectedUser: User;

  constructor(private userService: UserService) {
    this.parseUsers();
  }

  parseUsers() {
    timer(0, 2000)
      .subscribe(() => {
        this.userService.getUsers()
          .subscribe((res => {
            console.log((res as any).users);
            this.users = (res as any).users;
          }));
    });
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
