import { Component, OnInit, Input } from '@angular/core';
import { Airport } from 'src/app/shared/airport';
import { AirportDeleteService } from './airport-delete.service';

@Component({
  selector: 'app-admin-delete-airport',
  templateUrl: './admin-delete-airport.component.html',
  styleUrls: ['./admin-delete-airport.component.css']
})
export class AdminDeleteAirportComponent implements OnInit {

  errorMessage: string = "";
  successMessage: string = "";
  airport : Airport;
  airportList: Airport[];
  airportsShown: Boolean;
  @Input()
  AirportsReceived: Airport;

  constructor(private deleteAirportService: AirportDeleteService) { }

  ngOnInit() {
    this.deleteAirportService.getAirports()
      .subscribe(airportList => {
        console.log(airportList);
        this.airportList = airportList;
      })

    this.airportsShown = true;
    this.airportList = JSON.parse(sessionStorage.getItem("Airports"));
  }

  // Remove Testing variable
  airportId: number = 2000;
  deleteAirport(airportId: number) {
    this.deleteAirportService.deleteAirport(airportId).subscribe(
      (response) => {
        console.log(JSON.stringify(response));
        // this.successMessage = response.successMessage;
        this.errorMessage = "";
        let newAirportList: Airport[] = [];

        for (let dft of this.airportList)
          if (dft.airportId != airportId)
            newAirportList.push(dft);

        this.airportList = newAirportList;
        sessionStorage.setItem("Airports", JSON.stringify(this.airportList));
      },
      error => {
        this.errorMessage = <any>error
        this.successMessage = "";
      }
    )
  }
    
  }
  




