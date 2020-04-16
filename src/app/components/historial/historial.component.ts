import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.sass']
})
export class HistorialComponent implements OnInit {
  displayedColumns: string[] = ['id', 'hash', 'timestamp', 'owner'];
  dataSource = new MatTableDataSource();

  constructor(
    private _sharedService: SharedService
  ) { }

  ngOnInit() {
    this.dataSource.data = this._sharedService.getHistorial();
  }

}
