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
  private tokenString: string = "Bearer " + sessionStorage.getItem("token").replace(new RegExp('"', 'g'),'');
  private headers = new HttpHeaders({ 'Content-Type': 'application/json'}).set("Authorization",this.tokenString);
  constructor(private http: HttpClient) { }

  addFlight(flight: Flight): Observable<string>
  {
    const url = environment.flightAPIUrl + '/Flight' ;

    return this.http.post<string>(url,flight,{headers: this.headers, responseType: 'text' as 'json'})
    .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);

    return throwError(err.message);
  }
}