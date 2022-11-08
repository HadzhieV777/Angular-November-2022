import { InjectionToken, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

export class MyClass {
  constructor() {
    console.log('Nameless class was constructed!');
  }
}

// The token should but does not need to be unique
// we can use the token to provide a value
// InjectionToken is like JS Symbols bcs Symbol('asd') !== Symbol('asd')
// Symbols are often used to add unique property keys to an object
export const myCustomToken = new InjectionToken('Test');

const myProvider: Provider = {
  // useValue: 123,
  useClass: MyClass,
  provide: myCustomToken,
  // provide: MyClass, // key of the provider
};

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule],
  // Inject the dependencies in proviers
  providers: [
    // myProvider
    MyClass, // => { useClass: MyClass, provide: MyClass }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// You must register at least one provider of any service you are going to use.
// The provider can be part of the service's own metadata, making that service available everywhere,
// or you can register providers with specific modules or components.
// You register providers in the metadata of the service (in the @Injectable() decorator),
// or in the @NgModule() or @Component() metadata
