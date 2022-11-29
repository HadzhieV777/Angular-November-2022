import { Component } from '@angular/core';

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

  private scores: Number[] = [];
  private result: Number = 0;

  // Data memorization
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
