import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TravelerRoutingModule } from './traveler-routing.module';
import { TravelerLandingPageComponent } from './traveler-landing-page/traveler-landing-page.component';
import { LoginComponent } from './traveler-landing-page/login/login.component';
import { TravelerRegisterComponent } from './traveler-landing-page/traveler-register/traveler-register.component';
import { TravelerHomeComponent } from './traveler-home/traveler-home.component';
import { HttpClientModule } from '@angular/common/http';
import { TravelerSearchComponent } from './traveler-home/traveler-search/traveler-search.component';



@NgModule({
  declarations: [TravelerLandingPageComponent, 
    LoginComponent, 
    TravelerRegisterComponent, 
    TravelerHomeComponent,
    TravelerSearchComponent
  ],
  imports: [
    CommonModule,
    TravelerRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class TravelerModule { }
