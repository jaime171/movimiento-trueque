import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FeedDescriptionComponent } from './feed-description.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    FeedDescriptionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatDividerModule,
    MatTableModule,
    MatBadgeModule,
    MatButtonModule
  ]
})
export class FeedDescriptionModule { }
