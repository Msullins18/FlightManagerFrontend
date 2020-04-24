import { Component, OnInit } from '@angular/core';
import { Traveler } from 'src/app/shared/traveler';

@Component({
  selector: 'app-traveler-home',
  templateUrl: './traveler-home.component.html',
  styleUrls: ['./traveler-home.component.css']
})
export class TravelerHomeComponent implements OnInit {
  traveler: Traveler = JSON.parse(sessionStorage.getItem("traveler"));
  constructor() { }

  ngOnInit() {
  }

}
