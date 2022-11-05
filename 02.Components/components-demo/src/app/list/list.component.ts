import { Component } from '@angular/core';
import { IUser } from '../interfaces';
import { ICustomEvent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  // myProp = 'Hello World!';
  users: IUser[] = [
    {
      firstName: 'Pesho',
      lastName: 'Peshev',
    },
    {
      firstName: 'Gosho',
      lastName: 'Goshev',
    },
  ];

  selectedUserIndex: null | number = null;

  showLastName = false;

  constructor() {
    // setTimeout(() => {
    //   this.myProp = 'Hello Other World';
    // }, 1000);
  }

  get showSelectedIndex(): boolean {
    return (this.selectedUserIndex === null ? -1 : this.selectedUserIndex) >= 0;
  }

  handleClickEvent() {
    this.showLastName = !this.showLastName;
  }

  listItemClickHandler(index: number) {
    if (this.selectedUserIndex === index) {
      this.selectedUserIndex =null;
      return;
    }
    this.selectedUserIndex = index;
  };

  customEventHandler($event: ICustomEvent) {
    console.log($event);
  }
}
