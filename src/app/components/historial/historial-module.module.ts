import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HistorialComponent } from './historial.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatTableModule
  ]
})
export class HistorialModule { }
