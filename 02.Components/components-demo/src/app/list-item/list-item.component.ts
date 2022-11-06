import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ICustomEvent {
  test: number;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() user!: { firstName: string; lastName: string };
  @Input() showLastName!: boolean;

  @Output() customEvent = new EventEmitter<ICustomEvent>();

  intervalId: number | undefined;

  constructor() {
    console.log(this.user);
  }

  ngOnDestroy(): void {
    // Preventing memory leaks by cleaning after
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {}, 5000) as unknown as number;
  }

  selectClickHandler($event: MouseEvent) {
    $event.stopPropagation();
    this.customEvent.emit({ test: 123 });
  }
}

// class Person {
//   name!: string;

//   ngOnInit() {
//     console.log(this.name);
//   }
// }

// const ivan = new Person();
// ivan.name = 'Ivan';

// ivan.ngOnInit();
