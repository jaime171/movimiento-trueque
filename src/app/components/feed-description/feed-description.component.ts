import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-feed-description',
  templateUrl: './feed-description.component.html',
  styleUrls: ['./feed-description.component.sass']
})
export class FeedDescriptionComponent implements OnInit {
  id: string = '';
  feed: any = {};
  coverImage: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _sharedService: SharedService
  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.params['id'];
    this.feed = this._sharedService.feeds.find(feed => feed.id === parseInt(this.id, 10));
    this.coverImage = `assets/images/${this.feed.coverImg}`;
    console.log(this.feed);
  }

}
