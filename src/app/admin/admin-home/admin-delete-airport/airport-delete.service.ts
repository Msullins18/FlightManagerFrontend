import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { Flight } from 'src/app/shared/flight';
import { environment } from 'src/environments/environment';
import { Airport } from 'src/app/shared/airport';

@Injectable({
  providedIn: 'root'
})
export class AirportDeleteService {
  private tokenString: string = "Bearer " + sessionStorage.getItem("token").replace(new RegExp('"', 'g'),'');
  private headers = new HttpHeaders({ 'Content-Type': 'application/json'}).set("Authorization",this.tokenString);
  constructor(private http: HttpClient) { }

getAirports(): Observable<Airport[]> {
    const url = environment.airportAPIUrl + "/getAirports";
    console.log(url);
    return this.http.get<Airport[]>(url,{ headers: this.headers })
      .pipe(catchError(this.handleError));
  }
  
deleteAirport(airportId: number): Observable<number> {
    const url = environment.airportAPIUrl + "/deleteAirport/" + airportId;
    return this.http.post<number>(url, airportId, { headers: this.headers }).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    let errMsg: string = '';
  
    if (err.error instanceof Error) {
      errMsg = err.error.message;
      console.log(errMsg)
    }
    else if (typeof err.error === 'string') {
      errMsg = JSON.parse(err.error).message
    }
    else {
      if (err.status == 0)
        errMsg = "A connection to back end can not be established.";
      else
        errMsg = err.error.message;
    }
    return throwError(errMsg);
  }
}
