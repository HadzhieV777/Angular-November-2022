import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appInterceptorProvider } from './app.interceptor';
import { ReducePipe } from './reduce.pipe';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [AppComponent, ReducePipe, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}

// We don't need to add  LazyModule if we want to use lazy loading