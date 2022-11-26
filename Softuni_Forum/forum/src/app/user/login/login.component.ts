import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild(
    // form,
    NgForm,
    { static: true }
  )
  form!: ElementRef<HTMLInputElement>;

  constructor(
    private acticatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  loginHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.userService.user = {
      usename: 'John',
    } as any;

    const redirectUrl =
      this.acticatedRoute.snapshot.queryParams['redirectUrl'] || '/';
    this.router.navigate([redirectUrl]);
  }
}
