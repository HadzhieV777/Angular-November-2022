import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private acticatedRoute: ActivatedRoute,
    private userService: UserService, 
    private router: Router
  ) {}

  loginHandler(form: NgForm): void {
    // this.userService.user = {
    //   usename: "John",
    // } as any;

    // const redirectUrl = this.acticatedRoute.snapshot.queryParams['redirectUrl'] || '/'
    // this.router.navigate([redirectUrl]);
  }
}
