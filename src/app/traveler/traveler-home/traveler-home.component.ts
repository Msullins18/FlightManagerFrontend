import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-traveler-home',
  templateUrl: './traveler-home.component.html',
  styleUrls: ['./traveler-home.component.css']
})
export class TravelerHomeComponent implements OnInit {
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
