import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { LoginComponent } from './admin-landing-page/login/login.component';
import { AdminRegisterComponent } from './admin-landing-page/admin-register/admin-register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RoutingGuard } from '../routing-guard';


const routes: Routes = [
  { path: 'admin', component: AdminLandingPageComponent, children: [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: AdminRegisterComponent}
  ] },

  { path: 'admin/home', component: AdminHomeComponent,canActivate:[RoutingGuard], children: [

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
