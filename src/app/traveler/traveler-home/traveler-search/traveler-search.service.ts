import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Flight } from 'src/app/shared/Flight';
import { environment } from 'src/environments/environment';
import { Airport } from 'src/app/shared/airport';

@Injectable({
  providedIn: 'root'
})
export class TravelerSearchService {
  private tokenString: string = "Bearer " + sessionStorage.getItem("token").replace(new RegExp('"', 'g'),'');
  private headers = new HttpHeaders({ 'Content-Type': 'application/json'}).set("Authorization",this.tokenString);

  constructor(private http: HttpClient) { }

  getAirports(): Observable<any[]>{
    const url = environment.travelerSearchAPIUrl;
    return this.http.get<any[]>(url,{headers: this.headers})
    .pipe(catchError(this.handleError));
  }

  getDestinations(): Observable<any[]>{
    const url = environment.travelerSearchAPIUrl + '/Destinations';
    return this.http.get<any[]>(url,{headers: this.headers})
    .pipe(catchError(this.handleError));
  }

  getFlights(searchForm):Observable<any>{
    const url = environment.travelerSearchAPIUrl;
    return this.http.post<Observable<any>>(url, searchForm,{headers: this.headers})
    .pipe(catchError(this.handleError));
  }



  private handleError(err: HttpErrorResponse) {
      if(err.status == 400 || err.status == 404)
    {
      return throwError(err.error);
    }
    if(err.status == 0)
    {
      return throwError("Connection to backend could not be established");
    }
    return throwError("Some unknown error occured! : " + err.message);
  }
}
