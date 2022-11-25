import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // Another way to take form values
  @ViewChild('loginForm', {
    static: true, // the value is static and will be always visible
  })
  loginForm!: NgForm;

  constructor() {}

  ngOnInit(): void {
    // we can subscribe to any form
    // this.loginForm.valueChanges?.subscribe(console.log);
  }

  ngAfterViewInit(): void {
    // This lifecycle hook gives an oppurtunity
    // to take all view childs that aren't static
  }

  handleFormSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const value: { email: string; password: string } = form.value;
    console.log(value);
    form.setValue({ email: '', password: '' });
  }
}
