import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  // myProp = 'Hello World!';
  users = [
    {
      firstName: "Pesho",
      lastName: 'Peshev'
    },
    {
      firstName: "Gosho",
      lastName: 'Goshev'
    }
  ]
  constructor() {
    // setTimeout(() => {
    //   this.myProp = 'Hello Other World';
    // }, 1000);
  }
}
