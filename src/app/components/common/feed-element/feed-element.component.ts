import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-feed-element',
  templateUrl: './feed-element.component.html',
  styleUrls: ['./feed-element.component.sass']
})
export class FeedElementComponent implements OnInit {
  @Input() feed: any;
  public thumbnailImg = '';
  public serviceImage = '';

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    // console.log(this.feed);
    this.thumbnailImg = `assets/images/${this.feed.thumbnailImg}`;
    this.serviceImage = `assets/images/${this.feed.serviceImage}`;
  }

  public feedDetails(id): void {
    this._router.navigate(['/feed', id]);
  }
}
