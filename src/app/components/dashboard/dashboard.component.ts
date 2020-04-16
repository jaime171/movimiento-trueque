import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  public feeds = [];
  constructor(
    private _sharedService: SharedService
  ) { }

  ngOnInit() {
    console.log(this._sharedService)
    this.feeds = this._sharedService.feeds;
  }

}
