import { Component, inject } from '@angular/core';
import { User } from '../../interface/user';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-contein-user',
  templateUrl: './contein-user.component.html',
  styleUrls: ['./contein-user.component.css']
})

export class ConteinUserComponent {
  userService: UserService = inject(UserService);
  users: User[] = [];

  constructor() {
    this.userService.getUsers().then((data) => (this.users = data));
  }
}