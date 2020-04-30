import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Traveler } from 'src/app/shared/traveler';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  login(traveler: Traveler): Observable<Traveler>
  {
    const url = environment.travelerAPIUrl + '/Login';

    return this.http.post<Traveler>(url,traveler)
    .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    if(err.status == 400 || err.status == 404 || err.status == 401)
    {
      return throwError(err.error);
    }
    if(err.status == 0)
    {
      return throwError("Connection to backend could not be established");
    }
    return throwError("Some unkown error occured! : " + err.message);
  }
}
