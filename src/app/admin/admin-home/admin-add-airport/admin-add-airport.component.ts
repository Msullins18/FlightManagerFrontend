import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Airport } from 'src/app/shared/Airport';
import { AirportService } from './airport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-airport',
  templateUrl: './admin-add-airport.component.html',
  styleUrls: ['./admin-add-airport.component.css']
})
export class AdminAddAirportComponent implements OnInit {
  airportForm: FormGroup;
  airport: Airport;
  added: boolean;
  addedAirport: Airport;
  constructor(private fb: FormBuilder, private airportService: AirportService, private router: Router) { }

  ngOnInit() {
    this.airport=new Airport();
    this.createForm();
  }

  createForm() {
    this.airportForm = this.fb.group({
        airportId: [this.airport.airportId, [Validators.required],null],
        city: [this.airport.city, [Validators.required],null],
        airportName: [this.airport.airportName, [Validators.required],null],
        flights: [this.airport.flights, [Validators.required],null]
    });
  }

  addAirport()
  {
    this.airport.airportId = this.airportForm.value.airportId;
    this.airport.city = this.airportForm.value.city;
    this.airport.airportName = this.airportForm.value.airportName;
    this.airport.flights = this.airportForm.value.flights;
    
    this.airportService.addAirport(this.airport).subscribe(
      (Response) => {this.added = true;
        this.addedAirport = Response;
      }
    )
  }

}
