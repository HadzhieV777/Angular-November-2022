import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private router: Router, private userService: UserService) {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        this.router.navigate(['/']);
      },
    });
  }
}
