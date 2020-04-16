import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../shared/snackbar/snackbar.component'

@Component({
  selector: 'app-feed-element',
  templateUrl: './feed-element.component.html',
  styleUrls: ['./feed-element.component.sass']
})
export class FeedElementComponent implements OnInit {
  @Input() feed: any;
  public thumbnailImg: string = '';
  public serviceImage: string = '';
  private _durationInSeconds: number = 30;

  constructor(
    private _router: Router,
    public _sharedService: SharedService,
    public _dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    // console.log(this.feed);
    this.thumbnailImg = `assets/images/${this.feed.thumbnailImg}`;
    this.serviceImage = `assets/images/${this.feed.serviceImage}`;
  }

  // hacer una oferta
  public feedDetails(id): void {
    // Open modal
    const dialogRef = this._dialog.open(DialogComponent, {
      minWidth: '90%',
      data: {
        title: this.feed.name,
        author: this.feed.author,
        stock: this.feed.stock,
        vigencia: this.feed.endDate
      }
    });

    setTimeout(() => {
      this._openSnackBar();
    }, 2000);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this._snackBar.dismiss();
    });
  }

  // al perfil
  public sendToProfile(id): void {
    this._router.navigate(['/feed', id]);
  }

  private _openSnackBar(): void {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this._durationInSeconds * 1000,
    });
  }
}
