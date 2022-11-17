import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/test';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private t: Test) {
    (window as any).t1 = 1;
  }

  ngOnInit(): void {}
}
