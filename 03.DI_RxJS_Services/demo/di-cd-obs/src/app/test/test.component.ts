import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Injector,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AppComponent } from '../app.component';
import { myCustomToken } from '../app.module';

// The service has lifecycle hooks inside
// ngOnDestroy is the only one lifecycle hook that is inside the service
// because we can destroy services
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [],

  // Good for opt
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit, OnChanges {
  @Input() users!: { name: string }[];

  constructor(private cdRef: ChangeDetectorRef, private injector: Injector) {
    // Detaches this view from the change-detection tree.
    // A detached view is not checked until it is reattached.
    // Use in combination with detectChanges() to implement local change detection checks.
    this.cdRef.detach();
    const value = this.injector.get(myCustomToken);

    // AppComponent is accessible bcs it was created up on the tree
    const appCmp = this.injector.get(AppComponent);
    console.log(value);
    console.log(appCmp);
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
  constructor(private wallet: Wallet) {
    // this.wallet = new Wallet(200);
    // Wrong bcs we interrupt the Dependency Inversion pattern
  }
}

// const w = new Wallet(200, 'test');
// const p = new Person(w);


// In AngularJS, a service is a function, or object, that is available for, and limited to, your AngularJS application.
// AngularJS has about 30 built-in services. One of them is the $location service.