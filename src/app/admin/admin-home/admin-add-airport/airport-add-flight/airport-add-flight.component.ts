import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Flight } from 'src/app/shared/Flight';
import { AddFlightService } from './add-flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airport-add-flight',
  templateUrl: './airport-add-flight.component.html',
  styleUrls: ['./airport-add-flight.component.css']
})
export class AirportAddFlightComponent implements OnInit {
  flightForm: FormGroup;
  flight: Flight;
  flightAdded: boolean;
  addedFlight: string;
  constructor(private fb: FormBuilder, private addFlightService: AddFlightService, private router: Router) { }

  ngOnInit() {
    this.flight=new Flight();
    this.createForm();
  }

  createForm() {
    this.flightForm = this.fb.group({
        flightId: [this.flight.flightId, [Validators.required],null],
        flightFare: [this.flight.flightFare, [Validators.required],null],
        flightTax: [this.flight.flightTax, [Validators.required],null],
        flightType: [this.flight.flightType, [Validators.required],null],
        flightSize: [this.flight.flightSize, [Validators.required],null],
        airportId: [this.flight.airportId, [Validators.required],null],
        destination: [this.flight.destination, [Validators.required],null],
        seatsAvailable: [this.flight.seatsAvailable, [Validators.required],null],
        dateOfArrival: [this.flight.dateOfArrival, [Validators.required],null],
        dateOfDeparture: [this.flight.dateOfDeparture, [Validators.required],null]

    });
  }

  addFlight()
  {
    this.flight.flightId = this.flightForm.value.flightId
    this.flight.flightFare = this.flightForm.value.flightFare
    this.flight.flightTax = this.flightForm.value.flightTax
    this.flight.flightType = this.flightForm.value.flightType
    this.flight.flightSize = this.flightForm.value.flightSize
    this.flight.destination = this.flightForm.value.destination
    this.flight.airportId = this.flightForm.value.airportId
    this.flight.seatsAvailable = this.flightForm.value.seatsAvailable
    this.flight.dateOfArrival = this.flightForm.value.dateOfArrival
    this.flight.dateOfDeparture = this.flightForm.value.dateOfDeparture
    
    this.addFlightService.addFlight(this.flight).subscribe(
      (Response) => {this.flightAdded= true;
        this.addedFlight = Response;
      }
    )
  }
}



