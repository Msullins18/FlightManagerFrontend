import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { LoginComponent } from './admin-landing-page/login/login.component';
import { AdminRegisterComponent } from './admin-landing-page/admin-register/admin-register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminAddAirportComponent } from './admin-home/admin-add-airport/admin-add-airport.component';
import { AdminDeleteAirportComponent } from './admin-home/admin-delete-airport/admin-delete-airport.component';
import { AirportAddFlightComponent } from './admin-home/admin-add-airport/airport-add-flight/airport-add-flight.component';
import { AdminDeleteFlightComponent } from './admin-home/admin-add-airport/admin-delete-flight/admin-delete-flight.component';


@NgModule({
  declarations: [AdminLandingPageComponent, LoginComponent, AdminRegisterComponent, AdminHomeComponent, AdminAddAirportComponent, AdminDeleteAirportComponent, AirportAddFlightComponent, AdminDeleteFlightComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
