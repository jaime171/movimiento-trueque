import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router} from '@angular/router';
import { SharedService } from '../../shared/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';

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
    private _router: Router,
    public _sharedService: SharedService,
    public _dialog: MatDialog
  ) { }

  ngOnInit() {
    // console.log(this.feed);
    this.thumbnailImg = `assets/images/${this.feed.thumbnailImg}`;
    this.serviceImage = `assets/images/${this.feed.serviceImage}`;
  }

  public feedDetails(id): void {
    // Open modal
    const dialogRef = this._dialog.open(DialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  public sendToProfile(id): void {
    this._router.navigate(['/feed', id]);
  }
}
