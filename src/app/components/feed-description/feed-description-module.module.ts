import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedDescriptionComponent } from './feed-description.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    FeedDescriptionComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatTableModule
  ]
})
export class FeedDescriptionModule { }
