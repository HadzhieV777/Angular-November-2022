import { Component } from '@angular/core';
import { interval, map, startWith } from 'rxjs';
import { UserService } from './user.service';

function add(a: number | string, b: number | string): number | string {
  return ((a as any) + b) as any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'demo';
  // obj = {
  //   prop1: 'Hello World',
  // };

  // getProp(obj: any, propName: string) {
  //   return obj[propName];
  // }
  obj = {
    scores: [1, 2, 3, 4, 5, 6, 7],
  };

  add = add;

  private scores: Number[] = [];
  private result: Number = 0;

  $time = interval(1000).pipe(
    startWith(null), // emmit value on loading
    map(() => new Date())
  );

  // Async pipe
  // myPromise = new Promise((res) => {
  //   setTimeout(() => {
  //     res("Hello!")
  //   }, 5000)
  // })

  user$ = this.userService.users$;
  isLoadingUsers$ = this.userService.isLoading$;

  constructor(private userService: UserService) {}

  // Data memorization
  // calScores work as pure pipe: while(ref not changed) no re-calc
  calScores(obj: { scores: Number[] }) {
    if (this.scores !== obj.scores) {
      this.result = obj.scores.reduce(
        (acc, curr) => Number(acc) + Number(curr)
      );
      this.scores = obj.scores;
      return this.result;
    }
    return this.result;
  }

  addProp() {
    (this.obj as any)['test'] = 500;
  }

  reloadUsers(): void {
    this.userService.loadUsers();
  }

  // ngOnInit(): void {
  //   this.userService.loadUsers().subscribe({
  //     next: (users) => console.log(users),
  //     error: (err) => console.log(err),
  //   });
  // }
}
