import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ITheme } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-single-theme',
  templateUrl: './single-theme.component.html',
  styleUrls: ['./single-theme.component.scss']
})
export class SingleThemeComponent {

  theme: ITheme | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute) { 
      this.fetchTheme();
    }

  fetchTheme(): void {
    this.theme = undefined;
    const themeId = this.activatedRoute.snapshot.params['themeId'];
    this.apiService.loadSingleTheme(themeId).subscribe(theme => this.theme = theme)
  }

}
