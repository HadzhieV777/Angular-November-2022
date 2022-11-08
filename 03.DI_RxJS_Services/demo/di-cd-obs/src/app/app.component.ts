import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'di-cd-obs';
  // counter = 0;

  users = [{ name: 'Pesho' }, { name: 'Gosho' }];

  constructor() {
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
