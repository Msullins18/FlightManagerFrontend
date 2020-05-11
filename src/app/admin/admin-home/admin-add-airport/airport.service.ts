import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Airport } from 'src/app/shared/Airport';


@Injectable({
  providedIn: 'root'
})
export class AirportService {
  private tokenString: string = "Bearer " + sessionStorage.getItem("token").replace(new RegExp('"', 'g'),'');
  private headers = new HttpHeaders({ 'Content-Type': 'application/json'}).set("Authorization",this.tokenString);
  constructor(private http: HttpClient) { }

  addAirport(airport: Airport): Observable<any>
  {
    const url = environment.airportAPIUrl + '/addAirport';
    return this.http.post<Airport>(url,airport,{headers: this.headers, responseType: 'text' as 'json'})
    .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);

    return throwError(err.message);
  }
}
