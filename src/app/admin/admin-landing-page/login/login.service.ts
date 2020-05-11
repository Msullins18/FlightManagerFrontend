import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/user';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //private tokenString : string = "Bearer " + sessionStorage.getItem("token");
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  login(user: User): Observable<string>
  {
    const url = environment.loginAPIUrl;

    return this.http.post<string>(url,user,{headers: this.headers,responseType: 'text' as 'json'})
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
