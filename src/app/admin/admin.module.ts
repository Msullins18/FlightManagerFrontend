import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { LoginComponent } from './admin-landing-page/login/login.component';
import { AdminRegisterComponent } from './admin-landing-page/admin-register/admin-register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AdminLandingPageComponent, LoginComponent, AdminRegisterComponent, AdminHomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
