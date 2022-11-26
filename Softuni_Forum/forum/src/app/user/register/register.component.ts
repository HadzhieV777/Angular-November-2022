import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form = this.fb.group({
    username: [],
    email: [],
    tel: [],
    passwords: this.fb.group({
      password: [],
      rePassword: [],
    }),
  });

  constructor(private userService: UserService, private fb: FormBuilder) {}

  register(): void {}
}
