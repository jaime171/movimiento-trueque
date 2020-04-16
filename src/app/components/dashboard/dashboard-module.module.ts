import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { FeedElementComponent } from '../../components/common/feed-element/feed-element.component'
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    DashboardComponent,
    FeedElementComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatChipsModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class DashboardModule { }
