import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Flight } from 'src/app/shared/flight';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TravelerSearchService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAirports(): Observable<any[]>{
    const url = environment.travelerSearchAPIUrl + '/getAirports';
    return this.http.get<any[]>(url)
    .pipe(catchError(this.handleError));
  }

  getDestinations(): Observable<any[]>{
    const url = environment.travelerSearchAPIUrl + '/getDestinations';
    return this.http.get<any[]>(url)
    .pipe(catchError(this.handleError));
  }

  getFlights(searchForm):Observable<any>{
    const url = environment.travelerSearchAPIUrl + '/getFlights';
    // let param = new HttpParams()
    // .set('airportId', airportId.toString())
    // .set('destination',destination);
    // return this.http.get<any[]>(url,{params:param})
    // .pipe(catchError(this.handleError));  

    return this.http.post<Observable<any>>(url, searchForm)
    .pipe(catchError(this.handleError));
  }



  private handleError(err: HttpErrorResponse) {
    console.log(err)
    let errMsg:string='';
    if (err.error instanceof Error) {   
        errMsg=err.error.message;
        console.log(errMsg)
    }
     else if(typeof err.error === 'string'){
        errMsg=JSON.parse(err.error).message
    }
    else {
       if(err.status==0){ 
           errMsg="A connection to back end can not be established.";
       }else{
           errMsg=err.error.message;
       }
     }
        return throwError(errMsg);
  }
}
