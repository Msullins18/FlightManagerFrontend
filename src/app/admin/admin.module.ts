import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { LoginComponent } from './admin-landing-page/login/login.component';
import { AdminRegisterComponent } from './admin-landing-page/admin-register/admin-register.component';


@NgModule({
  declarations: [AdminLandingPageComponent, LoginComponent, AdminRegisterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
