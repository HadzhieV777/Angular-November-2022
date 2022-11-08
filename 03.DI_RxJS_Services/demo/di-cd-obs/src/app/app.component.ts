import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'di-cd-obs';
  counter = 0;
  constructor() {
    // setInterval must contain arrow function, otherwise we will lose the context
    setInterval(() => {
      this.counter++;
    }, 3000);
  }
}
