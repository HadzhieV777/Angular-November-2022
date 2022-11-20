import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { SingleThemeComponent } from './single-theme/single-theme.component';

const routes: Routes = [
  {
    path: 'themes',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ThemeListComponent,
      },
      {
        path: ':themeId',
        component: SingleThemeComponent,
      },
    ],
  },

  {
    path: 'add-theme',
    component: NewThemeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
