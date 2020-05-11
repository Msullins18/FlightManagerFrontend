import { Component, OnInit } from '@angular/core';
import { Airport } from 'src/app/shared/Airport';
import { Flight } from 'src/app/shared/Flight';
import { Router, ActivatedRoute } from '@angular/router';
import { TravelerSearchService } from './traveler-search.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SearchFlights } from 'src/app/shared/searchFlights';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-traveler-search',
  templateUrl: './traveler-search.component.html',
  styleUrls: ['./traveler-search.component.css']
})
export class TravelerSearchComponent implements OnInit {

  user: User;
  flightList: Flight[];
  airportList: Airport[];
  destinationList: string[];
  errorMessage:string="";
  isAvailable:boolean = false;
  searchForm:FormGroup;
  search:SearchFlights;


  constructor(private route: ActivatedRoute, private router:Router, 
    private travelerSearchService:TravelerSearchService, private fb: FormBuilder) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.travelerSearchService.getAirports().subscribe(
      airportList => {this.airportList = airportList
      sessionStorage.setItem("airportList", JSON.stringify(this.airportList))
      },
      error => this.errorMessage = <any> error
    )

    this.travelerSearchService.getDestinations().subscribe(
      destinationList => {this.destinationList = destinationList
      sessionStorage.setItem("destinationList", JSON.stringify(this.destinationList))
      },
      error => this.errorMessage = <any> error
    );
    this.createForm();
  }

  createForm() {
    this.searchForm = this.fb.group({
      airportId: ["",  [Validators.required]],
      destination: ["", Validators.required],
      date: ["", Validators.required],
      numberOfTickets: ["", [Validators.required, Validators.min(1)]]
    });
  }


  getFlights(){
    this.errorMessage = null;
    this.searchForm.value as SearchFlights;
    this.travelerSearchService.getFlights(this.searchForm.value).subscribe(
      flightList => {this.flightList = flightList
        console.log(this.searchForm.value);
        this.isAvailable = true;
      },
      error => {this.errorMessage = <any> error
      console.log(error)}
    );
    
   
  }
  


}
