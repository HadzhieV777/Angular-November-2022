import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

const myProvider: Provider = {
  useValue: 123,
  provide: 'test', // key of the provider
};

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule],
  // Inject the dependencies here
  providers: [myProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
