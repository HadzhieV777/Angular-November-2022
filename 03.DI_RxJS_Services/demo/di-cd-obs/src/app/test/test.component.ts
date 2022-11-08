import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],

  // Good for opt
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit, OnChanges {
  @Input() users!: { name: string }[];

  constructor(private cdRef: ChangeDetectorRef) {
    // Detaches this view from the change-detection tree.
    // A detached view is not checked until it is reattached.
    // Use in combination with detectChanges() to implement local change detection checks.
    this.cdRef.detach();
  }

  ngOnChanges(): void {
    if (this.users.length > 4) {
      this.cdRef.detectChanges();
    }
  }

  // We can access the bind values on our inputs
  ngOnInit(): void {
    // Checks this view and its children.
    this.cdRef.detectChanges();
  }

  // ngOnDestroy() allow us to clean some props from the component before it's destruction
}

// Simple dependency injection
class Wallet {
  constructor(private amount: number, private test: string) {}
}

class Person {
  constructor (private wallet: Wallet) {
    // this.wallet = new Wallet(200);
    // Wrong bcs we interrupt the Dependency Inversion pattern
  }
}

const w = new Wallet(200, 'test');
const p = new Person(w);

