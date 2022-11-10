import { Injectable, InjectionToken, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//  "Import *" is anti pattern, because we import useless modules
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
// import { UserService } from './user.service';
// import { TestComponent } from './test/test.component';

// @Injectables gives an opurtunity to a class to inject dependencies
//  and the class will be able to use inject mechanism
@Injectable({
  providedIn: 'root', // Tree shakable provider
  // By default, this syntax registers it to the root
  // injector which will make our service an application wide singleton
})

// Tree shaking is a step in a build process that
// removes unused code so the application becomes smaller.
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

// const myProvider: Provider = {
//   // useValue: 123,
//   useClass: MyClass,
//   provide: myCustomToken,
//   // provide: MyClass, // key of the provider
// };

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    // TestComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  // Inject the dependencies in proviers
  providers: [

    // UserService,
    // myProvider,
    // MyClass, // => { useClass: MyClass, provide: MyClass }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// You must register at least one provider of any service you are going to use.
// The provider can be part of the service's own metadata, making that service available everywhere,
// or you can register providers with specific modules or components.
// You register providers in the metadata of the service (in the @Injectable() decorator),
// or in the @NgModule() or @Component() metadata
