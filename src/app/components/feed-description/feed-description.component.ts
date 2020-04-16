import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-feed-description',
  templateUrl: './feed-description.component.html',
  styleUrls: ['./feed-description.component.sass']
})
export class FeedDescriptionComponent implements OnInit {
  id: string = '';
  profile: any = {};
  coverImage: string = '';
  thumbnailImg: string = '';
  displayedColumns: string[] = ['id', 'nombre', 'cliente'];
  dataSource = new MatTableDataSource();
  constructor(
    private _route: ActivatedRoute,
    private _sharedService: SharedService
  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.params['id'];
    this.profile = this._sharedService.getProfile(parseInt(this.id, 10));
    this.coverImage = `assets/images/${this.profile.coverImg}`;
    this.thumbnailImg = `assets/images/${this.profile.thumbnailImg}`;
    this.dataSource.data = this.profile.tickets;
    console.log(this.profile.tickets);
  }

}
