import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  public feeds = [];
  private _durationInSeconds = 5;

  constructor(
    private _sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.feeds = this._sharedService.feeds;
    // this._sharedService.setIsLoadded(true);
  }
}
