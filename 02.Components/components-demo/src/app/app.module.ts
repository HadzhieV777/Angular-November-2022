import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

@NgModule({
  // Template specific items
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule // This includes CommonModule
  ],
  providers: [], // used for DI
  bootstrap: [AppComponent]
})
export class AppModule { }
