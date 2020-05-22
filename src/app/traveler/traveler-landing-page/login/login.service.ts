import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  login(user: User): Observable<String>
  {
    const url = environment.userAPIUrl + '/Login';

    return this.http.post<String>(url,user,{headers: this.headers,responseType: 'text' as 'json'})
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
