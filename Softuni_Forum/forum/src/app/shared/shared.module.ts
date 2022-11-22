import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    LoaderComponent,
    RecentPostsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    RecentPostsComponent,
    HomeComponent
  ]
})
export class SharedModule { }
