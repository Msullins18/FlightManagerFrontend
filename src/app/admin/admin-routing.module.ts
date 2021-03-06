import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { LoginComponent } from './admin-landing-page/login/login.component';
import { AdminRegisterComponent } from './admin-landing-page/admin-register/admin-register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';


import { RoutingGuard } from '../routing-guard';
import { AdminAddAirportComponent } from './admin-home/admin-add-airport/admin-add-airport.component';
import { AirportAddFlightComponent } from './admin-home/admin-add-airport/airport-add-flight/airport-add-flight.component';
import { AdminDeleteAirportComponent } from './admin-home/admin-delete-airport/admin-delete-airport.component';
import { AdminDeleteFlightComponent } from './admin-home/admin-add-airport/admin-delete-flight/admin-delete-flight.component';



const routes: Routes = [
  { path: 'admin', component: AdminLandingPageComponent, children: [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: AdminRegisterComponent}
  ] },

 { path: 'admin/home', component: AdminHomeComponent, canActivate:[RoutingGuard], children: [
    {path: 'addAirport', component: AdminAddAirportComponent},
    {path: 'addFlight', component: AirportAddFlightComponent},
    {path: 'deleteFlight', component: AdminDeleteFlightComponent},
    {path: 'deleteAirport', component: AdminDeleteAirportComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
