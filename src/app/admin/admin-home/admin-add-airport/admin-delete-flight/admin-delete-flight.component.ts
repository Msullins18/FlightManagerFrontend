import { Component, OnInit, Input } from '@angular/core';
import { Flight } from 'src/app/shared/flight';
import { DeleteFlightService } from './delete-flight.service';
import { Airport } from 'src/app/shared/airport';

@Component({
  selector: 'app-admin-delete-flight',
  templateUrl: './admin-delete-flight.component.html',
  styleUrls: ['./admin-delete-flight.component.css']
})
export class AdminDeleteFlightComponent implements OnInit {

  errorMessage: string = "";
  successMessage: string = "";
  airport : Airport;
  flightList: Flight[];
  flightsShown: Boolean;
  @Input()
  flightsReceived: Flight;

  constructor(private deleteFlightService: DeleteFlightService) { }

  ngOnInit() {
    this.deleteFlightService.getFlights()
      .subscribe(flightList => {
        console.log(flightList);
        this.flightList = flightList;
      })

    this.flightsShown = true;
    this.flightList = JSON.parse(sessionStorage.getItem("Flights"));
  }

  // Remove Testing variable
  flightId: number = 2000;
  deleteFlight(flightId: number) {
    this.deleteFlightService.deleteFlight(flightId).subscribe(
      (response) => {
        console.log(JSON.stringify(response));
        // this.successMessage = response.successMessage;
        this.errorMessage = "";
        let newFlightList: Flight[] = [];

        for (let dft of this.flightList)
          if (dft.flightId != flightId)
            newFlightList.push(dft);

        this.flightList = newFlightList;
        sessionStorage.setItem("Flights", JSON.stringify(this.flightList));
      },
      error => {
        this.errorMessage = <any>error
        this.successMessage = "";
      }
    )
  }

}
