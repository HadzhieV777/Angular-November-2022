import { Component } from '@angular/core';

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

  // Async pipe
  myPromise = new Promise((res) => {
    setTimeout(() => {
      res("Hello!")
    }, 5000)
  })

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
}
