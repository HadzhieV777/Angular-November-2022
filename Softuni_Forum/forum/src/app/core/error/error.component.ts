import { Component, Inject, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { API_ERROR } from 'src/app/shared/constants';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  apiError$ = this.apiError.asObservable();
  constructor(@Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>) { 

  }
  ngOnInit(): void {
  }

}
