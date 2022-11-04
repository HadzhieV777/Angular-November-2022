import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  myProp = 'Hello World!';
  constructor() {
    setTimeout(() => {
      this.myProp = 'Hello Other World';
    }, 1000);
  }
}
