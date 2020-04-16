import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.sass']
})
export class SnackbarComponent implements OnInit {
  public tipRandom = '';
  constructor(
    private _sharedService: SharedService
  ) { }

  private getRandomArbitrary(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  ngOnInit() {
    this.tipRandom = this._sharedService.getTips(this.getRandomArbitrary(0, 2));
  }

}
