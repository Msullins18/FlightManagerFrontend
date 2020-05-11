import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  user: User = JSON.parse(sessionStorage.getItem("user"));
  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout()
  {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
