import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelerLandingPageComponent } from './traveler-landing-page/traveler-landing-page.component';
import { LoginComponent } from './traveler-landing-page/login/login.component';
import { TravelerRegisterComponent } from './traveler-landing-page/traveler-register/traveler-register.component';
import { TravelerHomeComponent } from './traveler-home/traveler-home.component';


const routes: Routes = [
  { path: 'applicationHome', component: TravelerLandingPageComponent, children: [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: TravelerRegisterComponent}
  ] },

  { path: 'home', component: TravelerHomeComponent, children: [

  ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelerRoutingModule { }
