import { Component, Input } from '@angular/core';
import { User } from '../../interface/user';
import { UserService } from '../../service/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {
  @Input() user!: User;

  creationForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    lastName: new FormControl(),
  });

  constructor(private userService: UserService) {}

  submitUser() {
    const { name, email, lastName } = this.creationForm.value;
    const user: User = { name, email, lastName, id: 0 };

    this.userService.postUser(user);
  }
}
