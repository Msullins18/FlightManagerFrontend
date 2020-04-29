import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/shared/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  admin: Admin = JSON.parse(sessionStorage.getItem("admin"));
  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout()
  {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
