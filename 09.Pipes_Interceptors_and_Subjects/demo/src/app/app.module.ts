import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appInterceptorProvider } from './app.interceptor';
import { ReducePipe } from './reduce.pipe';

@NgModule({
  declarations: [AppComponent, ReducePipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
