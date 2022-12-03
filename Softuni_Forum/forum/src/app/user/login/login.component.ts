import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { appEmailDomains } from 'src/app/shared/constants';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  appEmailDomains = appEmailDomains;

  @ViewChild(
    // form,
    NgForm,
    { static: true }
  )
  form!: ElementRef<HTMLInputElement>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  loginHandler(form: NgForm): void {
    const { email, password } = form.value;
    this.userService.login(email!, password!).subscribe((user) => {
      this.router.navigate(['/']);
    });

    const returnUrl =
      this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }
}
