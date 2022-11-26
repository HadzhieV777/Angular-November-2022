import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { HomeComponent } from './home/home.component';
import { AppEmailDirective } from './validators/app-email.directive';



@NgModule({
  declarations: [
    LoaderComponent,
    RecentPostsComponent,
    HomeComponent,
    AppEmailDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    RecentPostsComponent,
    HomeComponent,
    AppEmailDirective
  ]
})
export class SharedModule { }
