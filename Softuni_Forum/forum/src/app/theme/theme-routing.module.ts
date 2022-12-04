import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { NewThemeComponent } from "./new-theme/new-theme.component";
import { ThemeResolver } from "./resolvers/theme.resolver";
import { SingleThemeComponent } from "./single-theme/single-theme.component";

const routes: Routes = [
  {
    path: 'recent',
    component: MainComponent
  },
  {
    path: 'new',
    component: NewThemeComponent
  },
  {
    path: 'detail/:id',
    resolve: {
      theme: ThemeResolver
    },
    component: SingleThemeComponent
  }
];

export const ThemeRoutingModule = RouterModule.forChild(routes);