import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';

// modules
import { LoginModule } from './components/login/login-module.module';
import { DashboardModule } from './components/dashboard/dashboard-module.module';
import { FeedDescriptionModule } from './components/feed-description/feed-description-module.module'; // PROFILE VIEW
import { HistorialModule } from './components/historial/historial-module.module';
import { SharedFormsModule } from './components/shared/shared-forms-module.module'

// components
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedFormsModule,
    LoginModule,
    DashboardModule,
    FeedDescriptionModule,
    HistorialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
