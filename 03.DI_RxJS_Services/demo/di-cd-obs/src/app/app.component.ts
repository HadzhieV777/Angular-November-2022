import { Component, Inject } from '@angular/core';
import { MyClass, myCustomToken } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  title = 'di-cd-obs';
  // counter = 0;

  users = [{ name: 'Pesho' }, { name: 'Gosho' }];

  // @Inject is Parameter decorator on a dependency parameter of a class constructor that specifies a custom provider of the dependency.
  constructor(
    // @Inject('Test') test: string
    @Inject(myCustomToken) test: string,
    // @Inject(MyClass) test: MyClass =>  
    // test: MyClass
  ) {
    console.log(test);
    // setInterval must contain arrow function, otherwise we will lose the context
    //   setInterval(() => {
    //     this.counter++;
    //   }, 3000);
  }

  addUserHandler = (nameInput: HTMLInputElement): void => {
    const { value: name } = nameInput;
    // this.users.push({ name });
    // We concat to trigger the ChangeDetectionStrategy
    this.users = this.users.concat({ name });
    nameInput.value = '';
  };
}