import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { SingleThemeComponent } from './single-theme/single-theme.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ThemeListComponent, NewThemeComponent, SingleThemeComponent],
  imports: [CommonModule, ThemeRoutingModule, SharedModule],
})
export class ThemeModule {}
