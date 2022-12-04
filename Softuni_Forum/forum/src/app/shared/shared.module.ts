import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { HomeComponent } from './home/home.component';
import { AppEmailDirective } from './validators/app-email.directive';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';



@NgModule({
  declarations: [
    LoaderComponent,
    RecentPostsComponent,
    HomeComponent,
    AppEmailDirective,
    WelcomeMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    WelcomeMessageComponent,
    RecentPostsComponent,
    HomeComponent,
    AppEmailDirective
  ]
})
export class SharedModule { }
