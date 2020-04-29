import { Component, OnInit } from '@angular/core';
import { Traveler } from 'src/app/shared/traveler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-traveler-home',
  templateUrl: './traveler-home.component.html',
  styleUrls: ['./traveler-home.component.css']
})
export class TravelerHomeComponent implements OnInit {
  traveler: Traveler = JSON.parse(sessionStorage.getItem("traveler"));
  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout()
  {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
