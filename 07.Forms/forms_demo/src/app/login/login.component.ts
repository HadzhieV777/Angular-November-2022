import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleFormSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const value: { email: string; password: string } = form.value;
    console.log(value);
    form.setValue({ email: '', password: '' });
  }
}
