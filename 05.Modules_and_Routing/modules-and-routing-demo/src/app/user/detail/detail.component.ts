import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { 
    console.log(this.activatedRoute.snapshot.data, this.activatedRoute.data)
    this.activatedRoute.params.subscribe(console.log)
    // ActivatedRoute service can be used only in components
    // .snapshot will return an object contains the 
    // first router configuration 
  }

  ngOnInit(): void {
  }

}
