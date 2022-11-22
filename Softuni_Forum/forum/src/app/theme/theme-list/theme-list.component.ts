import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { ApiService } from '../../api.service';
import { ITheme } from '../../interfaces/theme';
@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss'],
})
export class ThemeListComponent implements OnInit {
  themeList: ITheme[] | null = null;
  errorFetcingData = false;
  
  get isLogged(): boolean {
    return this.userService.isLogged;
  }


  constructor(
    private apiService: ApiService,
    private userService: UserService) {}

  ngOnInit(): void {
    this.apiService.loadThemes().subscribe({
      next: (value) => {
        this.themeList = value;
      },
      error: (err) => console.log(err),
    });
  }
}
