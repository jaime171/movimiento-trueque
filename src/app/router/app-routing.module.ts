import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { FeedDescriptionComponent } from '../components/feed-description/feed-description.component';
import { HistorialComponent } from '../components/historial/historial.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'feed/:id', component: FeedDescriptionComponent },
  { path: 'historial', component: HistorialComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: '**', component: PageNotFoundComponent }, TODO: create a 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
