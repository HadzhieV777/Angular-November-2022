import { Component, DoCheck } from '@angular/core';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements DoCheck {

  // get isLoggedIn() {
  //   return this.authService.isLoggedIn;
  // }

  isLoggedIn = false;


  constructor(private userService: UserService) {

  }

  ngDoCheck(): void {
    this.isLoggedIn = this.userService.isLogged;
  }

}