import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { appEmailDomains } from 'src/app/shared/constants';
import {
  appEmailValidator,
  matchPasswordGroupValidator,
} from 'src/app/shared/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(appEmailDomains)]],
    ext: [''],
    tel: [''],
    passwords: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: [],
      },
      {
        validators: [matchPasswordGroupValidator('password', 'rePassword')],
      }
    ),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);

    const redirectUrl =
      this.activatedRoute.snapshot.queryParams['redirectUrl'] || '/';
    this.router.navigate([redirectUrl]);
  }
}
