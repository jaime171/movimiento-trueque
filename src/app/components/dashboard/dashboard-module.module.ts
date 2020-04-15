import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { FeedElementComponent } from '../../components/common/feed-element/feed-element.component'

@NgModule({
  declarations: [
    DashboardComponent,
    FeedElementComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class DashboardModule { }
