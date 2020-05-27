import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flight } from 'src/app/shared/flight';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeleteFlightService {
  private tokenString: string = "Bearer " + sessionStorage.getItem("token").replace(new RegExp('"', 'g'),'');
  private headers = new HttpHeaders({ 'Content-Type': 'application/json'}).set("Authorization",this.tokenString);
  constructor(private http: HttpClient) { }

getFlights(): Observable<Flight[]> {
    const url = environment.flightAPIUrl + "/Flight";
    console.log(url);
    return this.http.get<Flight[]>(url,{ headers: this.headers })
      .pipe(catchError(this.handleError));
  }
  
deleteFlight(flightId: number): Observable<number> {
    const url = environment.flightAPIUrl + "/Flight/" + flightId;
    return this.http.post<number>(url, flightId, { headers: this.headers }).pipe(catchError(this.handleError));
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



