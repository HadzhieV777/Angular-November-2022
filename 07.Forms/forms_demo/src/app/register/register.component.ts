import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

function createMyValidator(config: number): ValidatorFn {
  return (control: AbstractControl) => {
    return control.value.lenth > 10 ? { myValidator: true } : null;
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, createMyValidator(10)]],
    password: ['', [Validators.required, Validators.maxLength(14)]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  handleFormSubmit(): void {}
}
