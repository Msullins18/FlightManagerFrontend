import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/shared/admin';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  admin: Admin = JSON.parse(sessionStorage.getItem("admin"));
  constructor() { }

  ngOnInit() {
  }

}
