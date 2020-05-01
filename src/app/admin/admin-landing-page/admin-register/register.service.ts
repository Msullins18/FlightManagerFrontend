import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Admin } from 'src/app/shared/admin';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  register(admin: Admin): Observable<string>
  {
    const url = environment.adminAPIUrl + '/Register';

    return this.http.post<string>(url,admin,{headers: this.headers, responseType: 'text' as 'json'})
    .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
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
