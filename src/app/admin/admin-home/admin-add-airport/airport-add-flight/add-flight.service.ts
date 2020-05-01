import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Flight } from 'src/app/shared/Flight';
@Injectable({
  providedIn: 'root'
})
export class AddFlightService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  addFlight(flight: Flight): Observable<string>
  {
    const url = environment.airportAPIUrl + '/addFlight' ;

    return this.http.post<string>(url,flight,{headers: this.headers, responseType: 'text' as 'json'})
    .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);

    return throwError(err.message);
  }
}