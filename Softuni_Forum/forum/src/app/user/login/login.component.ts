import { Component } from '@angular/core';
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

  login(email: string, password: string): void {
    this.userService.login(email, password);
    const redirectUrl = this.acticatedRoute.snapshot.queryParams['redirectUrl'] || '/'
    this.router.navigate([redirectUrl]);
  }
}
